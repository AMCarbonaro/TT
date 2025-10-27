# Deployment Guide

## Overview

This document provides complete step-by-step instructions for deploying the adult content streaming platform from local development through production. This serves as the operational guide for developers and DevOps engineers.

**Deployment Targets:** Development, Staging, Production  
**Infrastructure:** Cloud-based (AWS/DigitalOcean recommended)  
**Architecture:** Containerized microservices

---

## Table of Contents

1. [Environment Requirements](#1-environment-requirements)
2. [Local Development Setup](#2-local-development-setup)
3. [Staging Environment](#3-staging-environment)
4. [Production Environment](#4-production-environment)
5. [Database Deployment](#5-database-deployment)
6. [CDN Configuration](#6-cdn-configuration)
7. [Environment Variables](#7-environment-variables)
8. [CI/CD Pipeline](#8-cicd-pipeline)
9. [Monitoring & Logging](#9-monitoring--logging)
10. [Scaling Strategy](#10-scaling-strategy)
11. [Backup & Disaster Recovery](#11-backup--disaster-recovery)
12. [Post-Deployment Checklist](#12-post-deployment-checklist)

---

## 1. Environment Requirements

### Server Specifications

**Production Minimum:**
- **CPU:** 4 cores (8 threads recommended)
- **RAM:** 16GB (32GB recommended)
- **Storage:** 500GB SSD (1TB recommended)
- **Bandwidth:** 1Gbps up/down
- **OS:** Ubuntu 22.04 LTS or Debian 11

**Recommended Cloud Providers:**
- **AWS:** EC2 (t3.xlarge or larger)
- **DigitalOcean:** Droplet (8GB RAM, 4 vCPUs)
- **Vultr:** High Performance Compute instances

### Software Stack

**Required Software:**
- Node.js: 20.x LTS
- PostgreSQL: 15.x or 16.x
- Redis: 7.x
- Nginx: 1.24.x
- PM2: Latest (process manager)
- Certbot: For SSL certificates
- Docker: 24.x (optional, for containerization)

**System Dependencies:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install Redis
sudo apt install -y redis-server

# Install Nginx
sudo apt install -y nginx

# Install PM2
sudo npm install -g pm2

# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Install Docker (optional)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### Network Configuration

**Firewall Rules (UFW):**
```bash
# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable
```

---

## 2. Local Development Setup

### Prerequisites

**Required Software:**
- Node.js 20.x
- PostgreSQL 15.x
- Redis 7.x
- Git
- VSCode (recommended IDE)

### Installation Steps

**1. Clone Repository:**
```bash
git clone <repository-url>
cd adult-content-platform
```

**2. Install Dependencies:**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

**3. Database Setup:**
```bash
# Start PostgreSQL
sudo service postgresql start

# Create database
createdb adult_content_dev

# Run migrations
cd backend
npm run migrate

# Seed database (optional)
npm run seed
```

**4. Start Redis:**
```bash
sudo service redis-server start
```

**5. Environment Configuration:**
```bash
# Copy example .env file
cp .env.example .env

# Edit .env with local settings
nano .env
```

**Example .env file:**
```env
# Node Environment
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=adult_content_dev
DB_USER=postgres
DB_PASSWORD=your_password

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT Secret
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRES_IN=7d

# Server
PORT=3000
CORS_ORIGIN=http://localhost:3001

# CDN & Storage
CDN_URL=http://localhost:3000
AWS_S3_BUCKET=your-bucket-name
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key

# Payment Processing
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password

# Analytics
SENTRY_DSN=your-sentry-dsn
```

**6. Run Development Servers:**
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

**7. Access Application:**
- Frontend: `http://localhost:3001`
- Backend API: `http://localhost:3000`
- API Docs: `http://localhost:3000/api-docs`

### Database Migrations

**Creating Migrations:**
```bash
cd backend

# Create new migration
npm run migrate:create -- AddUsersTable

# Run migrations
npm run migrate

# Rollback last migration
npm run migrate:rollback
```

### Testing

**Run Tests:**
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run test:e2e
```

---

## 3. Staging Environment

### Server Setup

**Create Staging Server:**
- Provision server with specifications above
- Configure domain: `staging.yourapp.com`
- Install required software (Node.js, PostgreSQL, etc.)

### Deployment Process

**1. SSH into Server:**
```bash
ssh user@staging-server
```

**2. Clone Repository:**
```bash
git clone <repository-url> /var/www/staging
cd /var/www/staging
```

**3. Install Dependencies:**
```bash
cd backend && npm install --production
cd ../frontend && npm install && npm run build
```

**4. Configure Environment:**
```bash
nano backend/.env
```

**Staging .env:**
```env
NODE_ENV=staging
DB_HOST=localhost
DB_NAME=adult_content_staging
# ... other staging-specific vars
```

**5. Setup Database:**
```bash
cd backend
npm run migrate
```

**6. Build and Start Application:**
```bash
# Start with PM2
pm2 start ecosystem.staging.config.js
pm2 save
pm2 startup
```

**7. Configure Nginx:**
```bash
sudo nano /etc/nginx/sites-available/staging
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name staging.yourapp.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files
    location /static {
        alias /var/www/staging/frontend/build/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Enable Site:**
```bash
sudo ln -s /etc/nginx/sites-available/staging /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**8. SSL Certificate:**
```bash
sudo certbot --nginx -d staging.yourapp.com
```

---

## 4. Production Environment

### Production Setup

**1. Server Provisioning:**
- Provision production-grade server
- Configure domain: `yourapp.com`
- Setup DNS records (A, AAAA, CNAME)

**2. Security Hardening:**
```bash
# Disable root login
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no

# Setup fail2ban
sudo apt install fail2ban
sudo systemctl enable fail2ban

# Setup automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

**3. Database Configuration:**
```bash
# Create production database
sudo -u postgres createdb adult_content_prod

# Secure PostgreSQL
sudo nano /etc/postgresql/15/main/pg_hba.conf
# Ensure strong authentication

# Backup database regularly
sudo crontab -e
# Add: 0 2 * * * pg_dump adult_content_prod > /backups/db_$(date +\%Y\%m\%d).sql
```

**4. Deploy Application:**
```bash
# Clone repository
sudo mkdir -p /var/www/production
cd /var/www/production
git clone <repository-url> .

# Install dependencies
cd backend && npm install --production
cd ../frontend && npm install && npm run build

# Setup PM2
pm2 start ecosystem.production.config.js
pm2 save
pm2 startup
```

**5. Nginx Configuration:**
```bash
sudo nano /etc/nginx/sites-available/production
```

**Production Nginx:**
```nginx
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name yourapp.com www.yourapp.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name yourapp.com www.yourapp.com;

    ssl_certificate /etc/letsencrypt/live/yourapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourapp.com/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Proxy to Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files with caching
    location /static {
        alias /var/www/production/frontend/build/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Enable and Secure:**
```bash
sudo ln -s /etc/nginx/sites-available/production /etc/nginx/sites-enabled/
sudo certbot --nginx -d yourapp.com -d www.yourapp.com
```

---

## 5. Database Deployment

### Migration Strategy

**Production Migrations:**
```bash
# Backup before migration
pg_dump adult_content_prod > backup_$(date +%Y%m%d).sql

# Run migrations
cd /var/www/production/backend
NODE_ENV=production npm run migrate

# Verify migration
psql adult_content_prod -c "\d"
```

### Database Optimization

**Indexes:**
```sql
-- Check index usage
SELECT schemaname, tablename, indexname, idx_scan 
FROM pg_stat_user_indexes 
ORDER BY idx_scan;

-- Vacuum and analyze regularly
VACUUM ANALYZE;
```

### Backup Strategy

**Automated Backups:**
```bash
#!/bin/bash
# backup.sh

BACKUP_DIR="/backups/database"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_$DATE.sql"

# Create backup
pg_dump adult_content_prod > $BACKUP_FILE

# Compress
gzip $BACKUP_FILE

# Delete backups older than 30 days
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +30 -delete

# Upload to S3 (optional)
aws s3 cp $BACKUP_FILE.gz s3://your-backup-bucket/
```

**Cron Job:**
```bash
# Daily backup at 2 AM
0 2 * * * /usr/local/bin/backup.sh
```

---

## 6. CDN Configuration

### Cloudflare Setup

**1. Add Domain to Cloudflare:**
- Sign up for Cloudflare
- Add domain `yourapp.com`
- Update nameservers
- Enable SSL/TLS

**2. Configure Caching:**
- Page Rules: Cache HTML aggressively
- Browser Cache: 4 hours for static assets
- Cloudflare Cache: 2 hours for dynamic content

**3. Speed Optimizations:**
- Enable Auto Minify (JavaScript, CSS, HTML)
- Enable Brotli compression
- Enable HTTP/2 and HTTP/3

**4. Security Settings:**
- SSL/TLS: Full (strict)
- WAF: Enabled
- Bot Fight Mode: Enabled
- Rate Limiting: Configured

### AWS CloudFront Setup (Alternative)

**1. Create Distribution:**
- Origin: Application load balancer or S3 bucket
- Behaviors: Separate for static and dynamic
- SSL Certificate: Custom SSL certificate

**2. Configure Behaviors:**
```json
{
  "Static Assets": {
    "Path": "/static/*",
    "Cache Policy": "CachingOptimized",
    "TTL": 31536000
  },
  "API": {
    "Path": "/api/*",
    "Cache Policy": "CachingDisabled",
    "TTL": 0
  }
}
```

### S3/Cloudflare R2 Setup

**Video Storage:**
```bash
# Install AWS CLI
pip install awscli

# Configure credentials
aws configure

# Create bucket
aws s3 mb s3://your-video-bucket

# Enable CORS
aws s3api put-bucket-cors --bucket your-video-bucket --cors-configuration file://cors.json

# Setup lifecycle policies
aws s3api put-bucket-lifecycle-configuration \
  --bucket your-video-bucket \
  --lifecycle-configuration file://lifecycle.json
```

---

## 7. Environment Variables

### Production Secrets

**Secure Storage:**
```bash
# Use environment variable manager
export $(cat .env.production | xargs)

# Or use secret management service
# AWS Secrets Manager
# HashiCorp Vault
```

**Required Variables:**
```env
# Node Environment
NODE_ENV=production

# Database (managed service)
DB_HOST=prod-db.region.rds.amazonaws.com
DB_PORT=5432
DB_NAME=adult_content_prod
DB_USER=prod_user
DB_PASSWORD=<generated-password>

# Redis (managed service)
REDIS_HOST=prod-redis.redis.com
REDIS_PORT=6379
REDIS_PASSWORD=<generated-password>

# JWT
JWT_SECRET=<strong-random-string>
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=<strong-random-string>
JWT_REFRESH_EXPIRES_IN=7d

# Server
PORT=3000
CORS_ORIGIN=https://yourapp.com

# CDN
CDN_URL=https://cdn.yourapp.com
AWS_S3_BUCKET=prod-video-storage
AWS_ACCESS_KEY_ID=<access-key>
AWS_SECRET_ACCESS_KEY=<secret-key>

# Payments
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Age Verification
YOTI_API_KEY=<key>
YOTI_APPLICATION_ID=<id>

# Email
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=<sendgrid-api-key>

# Monitoring
SENTRY_DSN=<sentry-dsn>
DATADOG_API_KEY=<key>
```

### Secrets Management Best Practices

**1. Rotate Secrets Regularly:**
- Change passwords every 90 days
- Rotate API keys quarterly
- Regenerate JWT secrets annually

**2. Access Control:**
- Limit access to production secrets
- Use different keys per environment
- Log secret access

**3. Backup Secrets:**
- Store encrypted backups off-site
- Document secret locations
- Maintain access list

---

## 8. CI/CD Pipeline

### GitHub Actions Workflow

**Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/production
            git pull origin main
            npm install --production
            npm run build
            pm2 restart all
```

### GitLab CI/CD (Alternative)

**Create `.gitlab-ci.yml`:**
```yaml
stages:
  - test
  - deploy

variables:
  NODE_VERSION: "20"

before_script:
  - npm install

test:
  stage: test
  script:
    - npm test
    - npm run lint

deploy_production:
  stage: deploy
  script:
    - ssh user@server 'cd /var/www/production && git pull && npm install --production && pm2 restart all'
  only:
    - main
```

---

## 9. Monitoring & Logging

### Application Monitoring

**1. Sentry Setup:**
```javascript
// backend/src/config/sentry.js
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

**2. PM2 Monitoring:**
```bash
# Install PM2 Plus
pm2 plus

# Monitor logs
pm2 logs

# Monitor processes
pm2 monit
```

**3. Server Monitoring:**
- **Uptime Robot:** Free uptime monitoring
- **StatusCake:** Advanced monitoring
- **Pingdom:** Performance monitoring

### Logging

**Winston Setup:**
```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
```

**Log Rotation:**
```bash
# Install logrotate
sudo apt install logrotate

# Configure rotation
sudo nano /etc/logrotate.d/nodejs
```

**Logrotate Config:**
```
/var/www/production/backend/logs/*.log {
    daily
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 www-data www-data
    sharedscripts
}
```

### Performance Monitoring

**1. New Relic Setup:**
```bash
npm install newrelic

# Configure
cp node_modules/newrelic/newrelic.js newrelic.js
```

**2. DataDog Setup:**
```bash
npm install dd-trace
```

---

## 10. Scaling Strategy

### Horizontal Scaling

**Load Balancer Setup:**
```nginx
upstream app_servers {
    least_conn;
    server 10.0.0.1:3000;
    server 10.0.0.2:3000;
    server 10.0.0.3:3000;
}

server {
    listen 80;
    location / {
        proxy_pass http://app_servers;
    }
}
```

**Auto Scaling Groups:**
- Configure in AWS EC2
- Set min/max instances
- Scale based on CPU/memory

### Database Scaling

**Read Replicas:**
```sql
-- Create read replica
CREATE DATABASE adult_content_prod_replica;

-- Configure replication in postgresql.conf
wal_level = replica
max_wal_senders = 3
```

**Connection Pooling:**
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  max: 20, // Maximum pool size
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### Caching Strategy

**Redis Caching:**
```javascript
const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

// Cache video list for 5 minutes
app.get('/api/videos', async (req, res) => {
  const cacheKey = 'videos:all';
  const cached = await client.get(cacheKey);
  
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  const videos = await Video.findAll();
  await client.setex(cacheKey, 300, JSON.stringify(videos));
  res.json(videos);
});
```

---

## 11. Backup & Disaster Recovery

### Backup Strategy

**1. Database Backups:**
```bash
# Daily full backup
0 2 * * * pg_dump adult_content_prod | gzip > /backups/db_$(date +\%Y\%m\%d).sql.gz

# Weekly backup retention: 30 days
# Monthly archive: 12 months
```

**2. File Backups:**
```bash
# Backup video files
rsync -avz /var/videos/ backup@backup-server:/backups/videos/

# Backup config files
tar -czf /backups/config_$(date +%Y%m%d).tar.gz /var/www/production/backend/.env
```

**3. Off-Site Backups:**
- AWS S3 Glacier
- Azure Blob Storage
- Google Cloud Storage

### Disaster Recovery Plan

**1. RTO (Recovery Time Objective):** 4 hours
**2. RPO (Recovery Point Objective):** 24 hours

**Recovery Procedures:**
```bash
# 1. Provision new server
# 2. Restore database
gunzip < backup.sql.gz | psql adult_content_prod

# 3. Restore application files
rsync -avz backup-server:/backups/app/ /var/www/production/

# 4. Restore environment variables
cp /backups/config.tar.gz . && tar -xzf config.tar.gz

# 5. Start services
pm2 start all
```

---

## 12. Post-Deployment Checklist

### Security Audit

- [ ] SSL certificate installed and valid
- [ ] HTTPS redirect working
- [ ] Security headers configured
- [ ] Firewall rules configured
- [ ] SSH key-only access
- [ ] Database backups running
- [ ] Secrets rotated

### Performance Testing

- [ ] Page load time < 2 seconds
- [ ] Video start time < 2 seconds
- [ ] CDN delivering static assets
- [ ] Database queries optimized
- [ ] Caching enabled
- [ ] Compression enabled

### Legal Compliance

- [ ] Age verification page configured
- [ ] Terms of Service published
- [ ] Privacy Policy published
- [ ] Cookie consent implemented
- [ ] DMCA agent registered
- [ ] 2257 compliance statement visible

### Monitoring

- [ ] Error tracking configured
- [ ] Uptime monitoring active
- [ ] Performance monitoring active
- [ ] Log aggregation configured
- [ ] Alert thresholds set

### Documentation

- [ ] Deployment runbook updated
- [ ] Architecture diagram updated
- [ ] API documentation published
- [ ] Incident response plan documented

---

## Summary

### Deployment Checklist

**Environment Setup:**
- Server provisioned and configured
- Software stack installed
- Database created and migrated
- Environment variables configured

**Application Deployment:**
- Code deployed to production
- Dependencies installed
- Application started with PM2
- Nginx configured and SSL enabled

**Infrastructure:**
- CDN configured
- Backup strategy implemented
- Monitoring set up
- Logging configured

**Post-Deployment:**
- Security audit completed
- Performance testing passed
- Legal compliance verified
- Documentation updated

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Project:** Adult Content Streaming Platform
