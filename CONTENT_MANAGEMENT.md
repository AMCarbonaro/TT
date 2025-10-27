# Content Management Guide

## Overview

This document defines complete workflows and procedures for managing videos, performers, photos, and collections on the adult content streaming platform. This serves as the operational guide for content managers and administrators.

**Content Types:** Videos, Performers, Photos, Collections, 2257 Records  
**User Roles:** Content Managers, Administrators, Compliance Officers

---

## Table of Contents

1. [Content Upload Workflow](#1-content-upload-workflow)
2. [Video Management](#2-video-management)
3. [Performer Management](#3-performer-management)
4. [Photo Management](#4-photo-management)
5. [Collection Management](#5-collection-management)
6. [2257 Record Management](#6-2257-record-management)
7. [Content Moderation](#7-content-moderation)
8. [Content Updates & Deletion](#8-content-updates--deletion)

---

## 1. Content Upload Workflow

### Video Ingestion Process

**Step-by-Step Workflow:**

1. **Initial Upload**
   - Video file uploaded via admin panel
   - Accepted formats: MP4, MOV, AVI, MKV
   - Maximum file size: 10GB
   - Recommended resolution: 1080p minimum

2. **Transcoding Pipeline**
   - Automatic transcoding to multiple qualities:
     - 480p (mobile/low bandwidth)
     - 720p (standard quality)
     - 1080p (high quality)
     - 4K (premium content, if source allows)
   - HLS adaptive bitrate streams generated
   - Thumbnails auto-generated from video (every 10 seconds)

3. **Quality Checks**
   - Video integrity verification
   - Audio/video sync check
   - Resolution validation
   - Encoding verification
   - Playback testing

4. **Metadata Assignment**
   - Collection assignment
   - Performer linking (1-10 performers)
   - Title and description
   - Duration extraction
   - File size recording

5. **Publishing**
   - Content review approval
   - 2257 compliance verification
   - Publish to selected collection
   - SEO metadata added
   - Public visibility activated

### Upload Requirements

**Video Specifications:**
- **Codec:** H.264 or H.265
- **Frame Rate:** 24fps, 30fps, or 60fps
- **Audio:** AAC, 128kbps minimum
- **Aspect Ratio:** 16:9 (widescreen)
- **Duration:** 5 minutes minimum
- **File Size:** 500MB - 10GB

**Thumbnail Generation:**
- Extract 6 frames at regular intervals
- Select best frame (no nudity for public browsing)
- Optimize: 1280px × 720px, WebP format
- Create fallback JPEG

**Storage:**
- Original file: AWS S3 or Cloudflare R2
- Transcoding output: CDN-ready structure
- Thumbnails: CDN with lazy loading
- Backups: Automated daily backups

---

## 2. Video Management

### Adding Videos

**Upload Form Fields:**

1. **Basic Information**
   - Video title (max 200 characters)
   - Description/bio (max 2000 characters)
   - Release date
   - Duration (auto-filled after upload)
   - Tags/categories (for search optimization)

2. **Collection Assignment**
   - Select from 7 existing collections
   - Single collection assignment (mandatory)
   - Featured video option (collection banner)

3. **Performers**
   - Add 1-10 performers (mandatory)
   - Search existing performers or create new
   - Billing order (primary, co-star, featured)
   - Auto-increment video count on performers

4. **Upload Files**
   - Video file (MP4 recommended)
   - Custom thumbnail (optional, replaces auto-generated)
   - Behind-the-scenes photos (optional, batch upload)

5. **Compliance**
   - 2257 verification status
   - Age verification confirmation
   - Model release confirmation
   - Content warnings (if applicable)

**Naming Conventions:**
```
Video files: {collection-slug}_{performer-slug}_{date}.mp4
Example: classic_collection_jane-doe_2025-01-15.mp4

Thumbnails: {video-id}_thumb_{index}.webp
Example: abc123_thumb_01.webp
```

### Editing Video Metadata

**Editable Fields:**
- Title and description
- Collection assignment (moves video)
- Performer roster (add/remove)
- Thumbnail replacement
- Published/unpublished status
- Featured status

**Update Workflow:**
1. Admin selects video from management panel
2. Opens edit form with current data
3. Makes changes (track change history)
4. Saves changes
5. Cache invalidation (CDN flush)
6. Notification to publishing (optional)

### Video Organization

**Sorting Options:**
- By release date (newest first)
- By collection
- By performer
- By view count
- By upload date

**Batch Operations:**
- Bulk collection assignment
- Bulk performer linking
- Bulk publish/unpublish
- Bulk delete (archive first)

---

## 3. Performer Management

### Creating Performer Profiles

**Profile Setup:**

1. **Basic Information**
   - Stage name (display name)
   - Legal name (2257 compliance, internal only)
   - Bio/description (500-1000 characters)
   - Date of birth (age verification)

2. **Images**
   - Profile photo (square, 1000px × 1000px)
   - Cover photo (banner, 1920px × 1080px)
   - Photo gallery (50+ photos recommended)

3. **Contact & Social**
   - Social media links (Instagram, Twitter, OnlyFans, etc.)
   - Verification badges (blue checkmark)
   - Contact email (internal only)

4. **Status**
   - Active/Inactive toggle
   - Featured performer option
   - Start date (career start)
   - Debut video link

**Profile Guidelines:**
- Use professional, high-quality photos
- Write engaging bio (personality, interests)
- Maintain consistent branding
- Update regularly with new content

### Performer Photo Management

**Photo Requirements:**
- **Format:** JPEG or WebP
- **Size:** 1920px × 1920px minimum (square preferred)
- **Quality:** High resolution, well-lit
- **Content:** Professional photos, casual photos, behind-scenes

**Upload Process:**
1. Select performer profile
2. Navigate to Photos tab
3. Upload batch of photos (up to 50 at once)
4. Auto-optimize (WebP conversion, compression)
5. Review and adjust order
6. Add captions (optional)
7. Save changes

**Photo Organization:**
- Manual sort order (drag and drop)
- Category tagging (optional)
- Featured photos (displayed first)
- Album groupings (future feature)

### Social Media Integration

**Supported Platforms:**
- Instagram
- Twitter/X
- OnlyFans
- TikTok
- Pornhub (profile link)
- Custom links

**Integration Steps:**
1. Add platform selection
2. Enter handle/username
3. Paste profile URL
4. Add platform icon/logo
5. Verify link (test connection)
6. Save to profile

**Display:**
- Icons shown on performer profile
- Opens in new tab
- Verification badge for official accounts
- Social proof enhancement

### Performer Statistics

**Auto-Calculated Metrics:**
- Total video count
- Total view count (sum of all videos)
- Average rating
- Years active
- Latest release date
- Most popular collection

**Display:**
- Shown on performer profile
- Updated in real-time
- Search/sort by popularity

---

## 4. Photo Management

### Photo Types

**1. Video-Specific Photos**
- Behind-the-scenes production photos
- On-set candids
- Costume/styling photos
- Linked to specific video

**2. Performer Gallery Photos**
- Professional photoshoot
- Casual photos
- Profile photos
- General gallery content

**3. Collection Promotional Photos**
- Collection banners
- Feature images
- Promotional graphics
- Marketing materials

### Upload Workflow

**Photo Upload Process:**
1. Select content type (video/performer/collection)
2. Choose target (specific video/performer)
3. Upload batch (drag and drop, up to 50 photos)
4. Processing: Resize, optimize, generate thumbnails
5. Review: Check quality, positioning
6. Organize: Set sort order, mark featured
7. Save and publish

**Optimization Settings:**
- Resize to max width: 1920px
- Convert to WebP (with JPEG fallback)
- Compress (quality: 85-90)
- Strip metadata (privacy)
- Generate multiple sizes (thumbnail, medium, large)

### Photo Display

**Gallery Layout:**
- Grid view (responsive: 2-4 columns)
- Lazy loading for performance
- Hover effects (zoom, info overlay)
- Click to open lightbox

**Lightbox Features:**
- Full-screen image display
- Navigation (arrow keys, swipe)
- Photo counter (3 of 12)
- Close button (X, ESC key)
- Zoom capability (pinch/scroll)
- Share functionality (optional)

### Photo Metadata

**Required Fields:**
- Title/caption (optional)
- Associated video or performer
- Upload date
- File name
- File size
- Dimensions

**Optional Fields:**
- Photographer credit
- Location
- Camera settings
- Tags

---

## 5. Collection Management

### Creating Collections

**Collection Setup:**

1. **Basic Information**
   - Collection name (unique, max 100 characters)
   - URL slug (auto-generated, editable)
   - Description (max 2000 characters, SEO-optimized)
   - Sort order (1-7, homepage display)

2. **Branding**
   - Primary color (hex code)
   - Accent color (hex code)
   - Gradient definition (optional)
   - Custom background (optional)

3. **Visual Assets**
   - Thumbnail image (collection card)
   - Banner image (collection header)
   - Featured video selection

4. **Content**
   - Assign videos to collection
   - Set featured video
   - Video count (auto-calculated)
   - Video ordering

**Collection Guidelines:**
- Each collection represents a unique niche/genre
- 7 total collections maximum
- Unique branding (visual identity)
- Cohesive content within collection
- Regular content updates

### Editing Collections

**Editable Properties:**
- Name and description
- Branding colors
- Visual assets (thumbnail, banner)
- Featured video
- Video assignments
- Sort order
- Active/inactive status

**Update Workflow:**
1. Select collection from admin panel
2. Open edit form
3. Make changes
4. Preview changes
5. Save and publish
6. Clear CDN cache
7. Update homepage

### Video Assignment

**Assignment Methods:**

1. **During Video Upload**
   - Select collection in upload form
   - Auto-assign to collection

2. **Bulk Assignment**
   - Select multiple videos
   - Choose collection
   - Apply to all selected

3. **Individual Assignment**
   - Edit video metadata
   - Change collection
   - Video moves to new collection

**Auto-Updates:**
- Video count increments
- Collection last updated timestamp
- Featured video cache refresh

---

## 6. 2257 Record Management

### 2257 Compliance Requirements

**Legal Obligations:**
- Maintain performer identification records
- Store model release forms
- Keep records organized and accessible
- Records available for inspection
- 5-year retention requirement

### Record Organization

**File Structure:**
```
/2257-records/
  ├── performers/
  │   ├── {performer-id}/
  │   │   ├── id-document.pdf
  │   │   ├── model-release.pdf
  │   │   └── supporting-docs/
  ├── videos/
  │   ├── {video-id}/
  │   │   ├── performer-list.csv
  │   │   └── compliance-notes.txt
  └── archive/
      └── {year}/
```

**Record Components:**
- Government-issued ID (scan/copy)
- Model release form (signed, dated)
- Performer consent form
- Age verification confirmation
- Production date records

### Record Upload Process

**Admin Workflow:**
1. Select performer or video
2. Navigate to 2257 Records section
3. Upload ID document (PDF/JPEG)
4. Upload model release (PDF)
5. Enter verification date
6. Enter custodian contact info
7. Save and encrypt record
8. Set retention period (5 years minimum)

**Access Control:**
- Encrypted storage (AES-256)
- Restricted access (admin/custodian only)
- Audit log (who accessed, when)
- No external API access
- Compliance officer role only

### Custodian Responsibilities

**Designated Custodian:**
- Maintains physical or digital records
- Available for inspection requests
- Updates contact information
- Ensures record integrity
- Handles inspection appointments

**Contact Information Required:**
- Full name
- Street address
- City, State, ZIP
- Phone number
- Email address
- Business hours

### Record Retrieval

**Search & Access:**
- Search by performer name
- Search by video ID
- Search by date range
- Filter by verification status
- Download encrypted records
- Print inspection-ready documents

**Audit Trail:**
- Record access log (who, when, why)
- Compliance check history
- Document update history
- Retention period tracking

---

## 7. Content Moderation

### Pre-Publication Checklist

**Review Items:**

1. **Content Quality**
   - Video quality acceptable
   - Audio quality acceptable
   - No technical glitches
   - Thumbnail appropriate

2. **Compliance**
   - 2257 records on file
   - Age verification complete
   - Model releases signed
   - Content warnings (if applicable)

3. **Metadata**
   - Title and description accurate
   - Performers correctly identified
   - Collection assignment correct
   - Tags/categories appropriate

4. **Legal**
   - No copyright violations
   - No prohibited content
   - No illegal activities depicted
   - Terms of service compliant

5. **Branding**
   - Consistent with platform standards
   - No competitor branding
   - Professional presentation
   - Appropriate content rating

### Content Moderation Tools

**Admin Panel Features:**
- Content review queue
- Bulk approval/rejection
- Comment/rejection reason
- Moderator notes
- Flagged content review
- Automated compliance checks

**Review States:**
- **Pending:** Awaiting review
- **Approved:** Published
- **Rejected:** Not published (with reason)
- **Flagged:** Requires second review
- **Removed:** Deleted after publication

### Quality Control Standards

**Video Quality Standards:**
- Minimum 1080p resolution
- Consistent frame rate
- Clean audio (no background noise)
- Proper color grading
- Professional lighting
- Stable camera work

**Photo Quality Standards:**
- High resolution (minimum 1920px)
- Good lighting
- Sharp focus
- Professional composition
- Appropriate aspect ratios
- Web-optimized file sizes

### Automated Moderation

**AI-Powered Checks:**
- Duplicate content detection
- Quality assessment
- Thumbnail quality check
- Metadata completeness
- File format validation

**Manual Review Triggers:**
- Flagged by automated system
- New performer first video
- Explicit content warnings
- User-reported content
- Random quality audit

---

## 8. Content Updates & Deletion

### Editing Existing Content

**Editable Elements:**

**Videos:**
- Title and description
- Thumbnail replacement
- Collection reassignment
- Performer roster changes
- Published/unpublished toggle

**Performers:**
- Bio updates
- Photo additions/removals
- Social media links
- Profile information
- Status changes

**Collections:**
- Name and description
- Branding colors
- Featured video
- Visual assets

**Update Workflow:**
1. Admin edits content via management panel
2. Preview changes before saving
3. Save changes
4. Clear cache (CDN invalidation)
5. Update database
6. Log change in audit trail

### Content Archiving

**Archive vs. Delete:**
- **Archive:** Soft delete, recoverable, hidden from public
- **Delete:** Permanent removal, not recoverable

**When to Archive:**
- Content quality issues (temporary)
- Performer request (may return)
- Compliance review (pending)
- Contract disputes (legal hold)
- Storage optimization (old content)

**Archive Process:**
1. Move to archive (soft delete)
2. Remove from public view
3. Retain database record
4. Keep file storage (may restore)
5. Mark archive date
6. Set retention period

**Deleting Content:**
1. Verify no user favorites/bookmarks
2. Remove all video file versions
3. Delete thumbnails and assets
4. Remove from database
5. Update performer video counts
6. Clear CDN cache
7. Log deletion in audit trail

### Impact of Deletion

**User Impact:**
- Removed from user favorites/watchlists
- Broken links in playlists
- Updated in viewing history (removed entry)
- Email notification if subscribed to performer/collection

**System Impact:**
- Performer video count decreases
- Collection video count decreases
- Search index updated
- Recommendations updated
- Analytics updated

### Bulk Operations

**Supported Operations:**
- Bulk publish (publish multiple pending videos)
- Bulk unpublish (hide multiple videos)
- Bulk collection reassignment
- Bulk performer linking
- Bulk archive
- Bulk delete (with confirmation)

**Batch Operations:**
- Select multiple items (checkbox)
- Choose operation
- Confirm action
- Progress bar for large batches
- Error handling (continue or stop on error)

---

## Summary

### Content Management Checklist

**Video Management:**
- Upload videos with proper metadata
- Assign to appropriate collection
- Link 1-10 performers
- Upload behind-the-scenes photos
- Verify 2257 compliance
- Publish with quality assurance

**Performer Management:**
- Create detailed performer profiles
- Upload photo galleries
- Add social media links
- Maintain up-to-date information
- Track video filmography

**Photo Management:**
- Upload high-quality photos
- Organize into categories
- Optimize for web delivery
- Display in lightbox galleries

**Collection Management:**
- Create 7 unique collections
- Apply custom branding
- Organize videos
- Maintain content quality

**Compliance:**
- Maintain 2257 records
- Verify age documentation
- Keep model releases
- Organize custodian information

**Quality Control:**
- Pre-publication review
- Content moderation
- Quality standards enforcement
- Automated checks

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Project:** Adult Content Streaming Platform
