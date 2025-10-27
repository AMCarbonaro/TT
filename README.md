# Adult Content Streaming Platform

A modern adult content streaming platform with a fully functional frontend and backend architecture ready for development.

## Current Status: Frontend Complete ✅

**Frontend is 100% functional** with working navigation, photo lightboxes, and responsive design. Backend APIs and database integration are ready to be implemented.

## Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript (ready for development)
- **Database:** PostgreSQL (Supabase) - schema defined
- **Storage:** Cloudflare R2 (planned)
- **Authentication:** JWT (planned)
- **Payments:** CCBill (planned)
- **Hosting:** Vercel (Frontend), Railway (Backend)

## ✅ Working Features

- **7 Content Collections** with unique branding and themes
- **Video Pages** with tabbed interface (Video/Photos/Performers)
- **Performer Profiles** with photo galleries and social media
- **Photo Lightbox** - click any photo for full-screen popup
- **Search Functionality** with real-time results
- **Responsive Design** - works on all devices
- **Navigation** - seamless routing between all pages

## Quick Start (Resume Development)

1. **Install dependencies:**
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001
   - Health Check: http://localhost:3001/health

## Project Structure

```
├── frontend/          # Next.js frontend application
├── backend/           # Node.js/Express backend API
├── docs/             # Documentation
└── package.json      # Root package.json for monorepo
```

## Next Steps for Development

1. **Set up Supabase database** and run Prisma migrations
2. **Create database seeding script** with real content
3. **Build Collections API** endpoints
4. **Build Videos API** endpoints  
5. **Build Performers API** endpoints
6. **Replace mock data** with API calls
7. **Implement authentication** system

## Current Limitations

- **Mock Data Only** - All content is placeholder data
- **No Backend APIs** - Frontend is completely static
- **No Authentication** - No user system implemented
- **No Video Streaming** - Video players are placeholders
- **No Database** - Prisma schema defined but not connected

## Documentation

- **PROJECT_STATUS.md** - Detailed project status and technical details
- **Frontend Components** - Well-documented and reusable
- **Database Schema** - Complete Prisma schema defined
- **Mock Data Structure** - Matches database schema exactly

## Development URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Health Check: http://localhost:3001/health

## Future Features (Planned)

- Video streaming with HLS
- User authentication and subscriptions
- Admin panel for content management
- Age verification system
- Payment processing
- Legal compliance pages

