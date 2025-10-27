# Setup Instructions

## 1. Database Setup (Supabase)

1. Go to [Supabase](https://supabase.com) and create a new project
2. Get your database URL from Settings > Database
3. Update the `DATABASE_URL` in `backend/.env` with your Supabase connection string

## 2. Environment Variables

Copy `backend/env.example` to `backend/.env` and update the following:

### Required Variables:
- `DATABASE_URL` - Your Supabase PostgreSQL connection string
- `JWT_SECRET` - Generate a secure random string
- `JWT_REFRESH_SECRET` - Generate another secure random string

### Optional Variables (for full functionality):
- `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY` - Cloudflare R2 for file storage
- `CCBILL_*` - Payment processing
- `SMTP_*` - Email verification

## 3. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install
```

## 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed the database
npm run db:seed
```

## 5. Start Development Servers

```bash
# Start both frontend and backend
npm run dev

# Or start individually:
# Frontend: npm run dev:frontend
# Backend: npm run dev:backend
```

## 6. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- API Health Check: http://localhost:3001/health

## Next Steps

1. Set up Cloudflare R2 for file storage
2. Configure CCBill for payments
3. Set up email service for verification
4. Deploy to Vercel (frontend) and Railway (backend)

