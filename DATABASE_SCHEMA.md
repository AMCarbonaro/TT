# Database Schema & Architecture

## Overview

This document defines the complete database structure, relationships, and query patterns for the adult content streaming platform. The database is designed to support collections, videos, performers, user accounts, and subscription management.

**Database Technology:** PostgreSQL  
**ORM:** Prisma  
**Architecture:** Relational Database with Foreign Key Constraints

---

## Table of Contents

1. [Database Architecture Overview](#1-database-architecture-overview)
2. [Core Tables](#2-core-tables)
3. [User & Subscription Tables](#3-user--subscription-tables)
4. [Relationships & Foreign Keys](#4-relationships--foreign-keys)
5. [Indexes & Performance Optimization](#5-indexes--performance-optimization)
6. [Sample SQL Queries](#6-sample-sql-queries)
7. [Data Migration Strategy](#7-data-migration-strategy)

---

## 1. Database Architecture Overview

### Design Principles

**Relational Structure:**
- Normalized database design (3NF)
- Foreign key constraints for data integrity
- Cascading deletes where appropriate
- Timestamps for audit trails
- Soft deletes for content (deleted_at)

**Key Features:**
- Many-to-many relationships (videos ↔ performers)
- One-to-many relationships (collections → videos, performers → photos)
- Junction tables for complex relationships
- JSONB columns for flexible metadata
- Full-text search capabilities

### Database Schema Diagram

```
collections (7 total)
    ↓ one-to-many
videos
    ↓ many-to-many (via video_performers)
performers ←→ photos
    ↓ one-to-many
social_media_links

users → subscriptions
```

---

## 2. Core Tables

### Collections Table

**Purpose:** Store the 7 niche collections with unique branding

```sql
CREATE TABLE collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    color_scheme JSONB, -- Primary and accent colors
    thumbnail_url TEXT,
    banner_image_url TEXT,
    featured_video_id UUID REFERENCES videos(id),
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER,
    video_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_collections_slug ON collections(slug);
CREATE INDEX idx_collections_active ON collections(is_active) WHERE deleted_at IS NULL;
```

**Notes:**
- `color_scheme` stores JSON like `{"primary": "#FF6B6B", "accent": "#4ECDC4"}`
- `sort_order` controls homepage display order
- Soft delete with `deleted_at`
- `video_count` cached for performance

---

### Videos Table

**Purpose:** Store video metadata and streaming information

```sql
CREATE TABLE videos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    collection_id UUID NOT NULL REFERENCES collections(id),
    
    -- Basic Info
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) NOT NULL,
    description TEXT,
    release_date DATE,
    
    -- Video Files (CDN URLs)
    hls_manifest_url TEXT NOT NULL, -- Master HLS playlist URL
    thumbnail_url TEXT NOT NULL,
    
    -- Qualities Available
    has_480p BOOLEAN DEFAULT false,
    has_720p BOOLEAN DEFAULT false,
    has_1080p BOOLEAN DEFAULT false,
    has_4k BOOLEAN DEFAULT false,
    
    -- Metadata
    duration_seconds INTEGER,
    file_size_bytes BIGINT,
    
    -- 2257 Compliance
    performer_count INTEGER NOT NULL CHECK (performer_count >= 1 AND performer_count <= 10),
    age_verified BOOLEAN DEFAULT false,
    
    -- Statistics
    view_count BIGINT DEFAULT 0,
    like_count INTEGER DEFAULT 0,
    rating DECIMAL(3,2), -- Average rating
    
    -- Status
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_videos_collection ON videos(collection_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_videos_slug ON videos(slug);
CREATE INDEX idx_videos_published ON videos(is_published, published_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_videos_featured ON videos(is_featured) WHERE is_published = true AND deleted_at IS NULL;
CREATE INDEX idx_videos_release_date ON videos(release_date DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_videos_view_count ON videos(view_count DESC) WHERE deleted_at IS NULL;

-- Full-text search
CREATE INDEX idx_videos_fulltext ON videos USING GIN(to_tsvector('english', title || ' ' || COALESCE(description, '')));
```

**Notes:**
- `hls_manifest_url` points to the adaptive bitrate playlist
- `performer_count` validates 1-10 performers requirement
- Full-text search index for title and description
- Multiple indexes for common query patterns

---

### Performers Table

**Purpose:** Store performer profiles and information

```sql
CREATE TABLE performers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Basic Info
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    profile_photo_url TEXT,
    cover_photo_url TEXT,
    
    -- 2257 Compliance
    legal_name VARCHAR(255),
    stage_name VARCHAR(255),
    date_of_birth DATE,
    
    -- Statistics
    video_count INTEGER DEFAULT 0,
    
    -- Status
    is_active BOOLEAN DEFAULT true,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_performers_slug ON performers(slug);
CREATE INDEX idx_performers_active ON performers(is_active) WHERE deleted_at IS NULL;
CREATE INDEX idx_performers_video_count ON performers(video_count DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_performers_fulltext ON performers USING GIN(to_tsvector('english', name || ' ' || COALESCE(bio, '')));
```

---

### Video_Performers Junction Table

**Purpose:** Many-to-many relationship between videos and performers

```sql
CREATE TABLE video_performers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    video_id UUID NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    performer_id UUID NOT NULL REFERENCES performers(id) ON DELETE CASCADE,
    
    -- Optional: Role or billing order
    billing_order INTEGER,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(video_id, performer_id)
);

CREATE INDEX idx_video_performers_video ON video_performers(video_id);
CREATE INDEX idx_video_performers_performer ON video_performers(performer_id);
```

**Notes:**
- Cascade delete: removing video or performer removes relationship
- `billing_order` can indicate starring order
- Unique constraint prevents duplicate relationships

---

### Photos Table

**Purpose:** Store photos (behind-the-scenes, performer photos, video stills)

```sql
CREATE TABLE photos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Relationships (at least one required)
    video_id UUID REFERENCES videos(id) ON DELETE CASCADE,
    performer_id UUID REFERENCES performers(id) ON DELETE CASCADE,
    
    -- Photo Info
    photo_type VARCHAR(50) NOT NULL, -- 'video_still', 'behind_scenes', 'performer_photo', 'profile'
    url TEXT NOT NULL,
    thumbnail_url TEXT,
    alt_text VARCHAR(255),
    
    -- Metadata
    width INTEGER,
    height INTEGER,
    file_size_bytes INTEGER,
    
    -- Display
    sort_order INTEGER,
    is_primary BOOLEAN DEFAULT false,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    
    CONSTRAINT check_photo_relationship CHECK (
        video_id IS NOT NULL OR performer_id IS NOT NULL
    )
);

CREATE INDEX idx_photos_video ON photos(video_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_photos_performer ON photos(performer_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_photos_type ON photos(photo_type) WHERE deleted_at IS NULL;
```

**Notes:**
- Photos can be linked to videos (behind-scenes, stills) OR performers (gallery)
- At least one relationship required via check constraint
- Soft delete for gallery management

---

## 3. User & Subscription Tables

### Users Table

**Purpose:** Store user accounts and authentication

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL, -- bcrypt hashed
    
    -- Profile
    username VARCHAR(100) UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    
    -- Age Verification Status
    age_verified BOOLEAN DEFAULT false,
    age_verified_at TIMESTAMP,
    age_verification_method VARCHAR(50), -- 'id_upload', 'yoti', 'jumio'
    
    -- Geolocation (for age verification requirements)
    country_code VARCHAR(2),
    state_province VARCHAR(100),
    
    -- Preferences
    preferred_quality VARCHAR(20) DEFAULT '1080p',
    autoplay_videos BOOLEAN DEFAULT true,
    
    -- Session
    last_login_at TIMESTAMP,
    last_login_ip VARCHAR(45),
    
    -- Status
    is_active BOOLEAN DEFAULT true,
    is_verified BOOLEAN DEFAULT false,
    email_verified_at TIMESTAMP,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_active ON users(is_active) WHERE deleted_at IS NULL;
```

---

### Subscriptions Table

**Purpose:** Track user subscriptions and billing

```sql
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Plan Info
    plan_name VARCHAR(50) NOT NULL, -- 'monthly', 'annual'
    billing_amount DECIMAL(10,2) NOT NULL,
    billing_currency VARCHAR(3) DEFAULT 'USD',
    billing_cycle VARCHAR(20), -- 'monthly', 'yearly'
    
    -- Status
    status VARCHAR(20) NOT NULL, -- 'active', 'canceled', 'past_due', 'expired'
    
    -- Dates
    started_at TIMESTAMP NOT NULL,
    current_period_start TIMESTAMP NOT NULL,
    current_period_end TIMESTAMP NOT NULL,
    canceled_at TIMESTAMP,
    canceled_reason TEXT,
    
    -- Next Billing
    next_billing_at TIMESTAMP,
    
    -- Payment Info (tokenized)
    payment_method_token VARCHAR(255),
    last_4_digits VARCHAR(4),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status) WHERE status = 'active';
CREATE INDEX idx_subscriptions_next_billing ON subscriptions(next_billing_at) WHERE status = 'active';
```

**Notes:**
- Status enum: active, canceled, past_due, expired
- Store minimal payment info (last 4 digits only)
- Track cancellation for analytics

---

### Social_Media_Links Table

**Purpose:** Store performer social media links

```sql
CREATE TABLE social_media_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    performer_id UUID NOT NULL REFERENCES performers(id) ON DELETE CASCADE,
    
    platform VARCHAR(50) NOT NULL, -- 'instagram', 'twitter', 'onlyfans', 'tiktok', 'custom'
    handle VARCHAR(255) NOT NULL,
    url TEXT,
    icon_url TEXT,
    
    sort_order INTEGER,
    is_verified BOOLEAN DEFAULT false,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(performer_id, platform)
);

CREATE INDEX idx_social_media_performer ON social_media_links(performer_id);
```

---

### User_Watch_History Table

**Purpose:** Track user viewing history (optional feature)

```sql
CREATE TABLE user_watch_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    video_id UUID NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    
    watched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    watch_position_seconds INTEGER DEFAULT 0,
    completed_percentage DECIMAL(5,2),
    completed BOOLEAN DEFAULT false,
    
    UNIQUE(user_id, video_id)
);

CREATE INDEX idx_watch_history_user ON user_watch_history(user_id);
CREATE INDEX idx_watch_history_video ON user_watch_history(video_id);
CREATE INDEX idx_watch_history_watched_at ON user_watch_history(watched_at DESC);
```

---

## 4. Relationships & Foreign Keys

### Relationship Diagram

```
collections (1) ────< (many) videos
                                    │
                                    │ many-to-many
                                    │
performers (1) ─────────────────────┴─< (many) video_performers

performers (1) ────< (many) photos
performers (1) ────< (many) social_media_links

users (1) ─────< (many) subscriptions
users (1) ─────< (many) user_watch_history
```

### Foreign Key Constraints

All foreign keys are defined with appropriate ON DELETE actions:
- **CASCADE:** When deleting a video, photos and video_performers are deleted
- **CASCADE:** When deleting a performer, photos, links, and video_performers are deleted
- **CASCADE:** When deleting a user, subscriptions and watch history are deleted
- **CASCADE/RESTRICT:** Collection deletion prevents video orphan records

---

## 5. Indexes & Performance Optimization

### Key Indexes Summary

**Collections:**
- `slug` (unique lookups)
- `is_active` (filtering published collections)

**Videos:**
- `collection_id` (filter by collection)
- `slug` (unique lookups)
- `is_published, published_at` (homepage, feed queries)
- `is_featured` (featured content)
- `release_date` (sorting by date)
- `view_count` (popular content)
- Full-text search (title + description)

**Performers:**
- `slug` (unique lookups)
- `is_active` (filtering active performers)
- `video_count` (popular performers)
- Full-text search (name + bio)

### Query Optimization Strategies

**Denormalization for Performance:**
- `collections.video_count` - Cached count (update on video create/delete)
- `performers.video_count` - Cached count (update on video_performers changes)
- `videos.performer_count` - Stored value to avoid joins

**Materialized Views (Optional):**
```sql
-- Top performers by video count
CREATE MATERIALIZED VIEW top_performers AS
SELECT 
    p.*,
    COUNT(vp.video_id) as video_count
FROM performers p
JOIN video_performers vp ON p.id = vp.performer_id
WHERE p.deleted_at IS NULL
GROUP BY p.id
ORDER BY video_count DESC
LIMIT 50;
```

---

## 6. Sample SQL Queries

### Get Collection with Videos

```sql
SELECT 
    c.*,
    COUNT(v.id) as video_count
FROM collections c
LEFT JOIN videos v ON c.id = v.collection_id AND v.deleted_at IS NULL AND v.is_published = true
WHERE c.slug = 'collection-slug' AND c.deleted_at IS NULL
GROUP BY c.id;
```

### Get Video with Performers

```sql
SELECT 
    v.*,
    json_agg(
        json_build_object(
            'id', p.id,
            'name', p.name,
            'slug', p.slug,
            'profile_photo_url', p.profile_photo_url
        )
    ) as performers
FROM videos v
LEFT JOIN video_performers vp ON v.id = vp.video_id
LEFT JOIN performers p ON vp.performer_id = p.id AND p.deleted_at IS NULL
WHERE v.slug = 'video-slug' AND v.deleted_at IS NULL
GROUP BY v.id;
```

### Get Performer with Videos and Photos

```sql
SELECT 
    p.*,
    COUNT(DISTINCT vp.video_id) as video_count,
    json_agg(
        DISTINCT json_build_object(
            'id', v.id,
            'title', v.title,
            'thumbnail_url', v.thumbnail_url,
            'view_count', v.view_count
        )
    ) FILTER (WHERE v.id IS NOT NULL) as videos,
    json_agg(
        DISTINCT json_build_object(
            'id', ph.id,
            'url', ph.url,
            'photo_type', ph.photo_type
        )
    ) FILTER (WHERE ph.id IS NOT NULL) as photos
FROM performers p
LEFT JOIN video_performers vp ON p.id = vp.performer_id
LEFT JOIN videos v ON vp.video_id = v.id AND v.deleted_at IS NULL AND v.is_published = true
LEFT JOIN photos ph ON p.id = ph.performer_id AND ph.deleted_at IS NULL
WHERE p.slug = 'performer-slug' AND p.deleted_at IS NULL
GROUP BY p.id;
```

### Search Videos by Title

```sql
SELECT 
    v.*,
    c.name as collection_name
FROM videos v
JOIN collections c ON v.collection_id = c.id
WHERE v.deleted_at IS NULL 
    AND v.is_published = true
    AND to_tsvector('english', v.title || ' ' || COALESCE(v.description, '')) @@ to_tsquery('english', 'search terms')
ORDER BY v.release_date DESC;
```

### Get User Active Subscription

```sql
SELECT s.*
FROM subscriptions s
WHERE s.user_id = 'user-uuid'
    AND s.status = 'active'
    AND s.current_period_end > CURRENT_TIMESTAMP
ORDER BY s.created_at DESC
LIMIT 1;
```

### Popular Videos by Collection

```sql
SELECT 
    v.*,
    COUNT(vp.performer_id) as performer_count
FROM videos v
JOIN collections c ON v.collection_id = c.id
LEFT JOIN video_performers vp ON v.id = vp.video_id
WHERE c.slug = 'collection-slug'
    AND v.deleted_at IS NULL
    AND v.is_published = true
GROUP BY v.id
ORDER BY v.view_count DESC, v.release_date DESC
LIMIT 20;
```

---

## 7. Data Migration Strategy

### Initial Setup

**1. Enable UUID Extension:**
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy search
```

**2. Create Tables (in order):**
- collections
- videos
- performers
- video_performers
- photos
- users
- subscriptions
- social_media_links
- user_watch_history (optional)

### Migration Best Practices

**Version Control:**
- Use Prisma migrations or Flyway
- Sequential migration files
- Rollback scripts for each migration

**Sample Migration Structure:**
```
migrations/
├── 001_initial_schema.sql
├── 002_add_indexes.sql
├── 003_add_fulltext_search.sql
└── 004_add_denormalized_counts.sql
```

### Data Seeding

**Seed Files:**
- `seed_collections.sql` - 7 collections
- `seed_performers.sql` - Sample performers
- `seed_videos.sql` - Sample videos with relationships

### Backup Strategy

**Automated Backups:**
- Daily full backups
- Point-in-time recovery enabled
- Off-site backup storage
- 30-day retention minimum

**Backup Command:**
```bash
pg_dump -h hostname -U username -d database_name -F c -b -v -f backup_$(date +%Y%m%d).backup
```

---

## Summary

### Database Statistics

**Total Tables:** 9 core tables  
**Total Indexes:** ~25 indexes for performance  
**Supported Relationships:** One-to-many, many-to-many with junction tables  
**Data Types:** UUID primary keys, JSONB for flexible data, timestamps for audit  

### Key Features

- **Scalability:** Indexed queries, denormalized counts, materialized views
- **Data Integrity:** Foreign key constraints, check constraints, unique constraints
- **Audit Trail:** `created_at`, `updated_at`, `deleted_at` on all tables
- **Soft Deletes:** Content preservation with `deleted_at` timestamps
- **Full-Text Search:** PostgreSQL native search for videos and performers
- **Compliance:** 2257 fields and validation constraints

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Project:** Adult Content Streaming Platform
