# DelftPrep - TU Delft Aerospace Engineering Admission Prep Platform

A comprehensive front-end web platform designed to help students prepare for admission to TU Delft's Aerospace Engineering program. Built with Next.js 14, TypeScript, and TailwindCSS.

## Features

### Current Implementation (Front-End Only)

- **Landing Page**: Hero section, feature highlights, sample problems, and pricing tiers
- **Authentication Pages**: Login, register, and forgot password (mock authentication)
- **User Dashboard**: Progress tracking, accuracy by topic, recent activity, and recommendations
- **Problem Bank**: Browse 150+ problems with filtering by subject, difficulty, and topic
- **Problem Detail Pages**: View problems, submit answers, and access solutions/hints
- **AI Analysis Page**: Mock AI-powered performance analysis and personalized study plans
- **Pricing Page**: Three-tier pricing structure with detailed feature comparison
- **Settings Page**: Update email, change password, and account management

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Icons**: Lucide React

## Project Structure

```
delftprep/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── login/             # Login page
│   │   ├── register/          # Register page
│   │   ├── forgot-password/   # Forgot password page
│   │   ├── dashboard/         # User dashboard
│   │   ├── problems/          # Problem bank & detail pages
│   │   ├── analysis/          # AI analysis page
│   │   ├── pricing/           # Pricing page
│   │   └── settings/          # Settings page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Header, Footer components
│   │   ├── problems/          # Problem-related components
│   │   └── dashboard/         # Dashboard components
│   ├── lib/
│   │   ├── api/               # Mock API functions
│   │   │   ├── auth.ts        # Authentication API
│   │   │   ├── problems.ts    # Problems API
│   │   │   └── analysis.ts    # Analysis API
│   │   ├── store/             # Zustand stores
│   │   │   ├── userStore.ts   # User state management
│   │   │   └── problemsStore.ts # Problems state management
│   │   └── utils.ts           # Utility functions
│   └── data/
│       ├── problems.json      # Mock problem data
│       └── mockUser.ts        # Mock user data
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Run the development server**:

```bash
npm run dev
```

3. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Current Limitations (Front-End Only)

This is a **front-end only** implementation. The following features are mocked and need backend integration:

### Mock Functionality

1. **Authentication**:
   - Login always succeeds with any credentials
   - Registration creates mock user session
   - No actual JWT tokens or session management

2. **API Calls**:
   - All API functions in `src/lib/api/` are mocked
   - Data is loaded from local JSON files
   - No actual HTTP requests are made

3. **State Persistence**:
   - User state is stored in memory only
   - Data is lost on page refresh
   - No database integration

4. **AI Analysis**:
   - Analysis data is static/mocked
   - No actual AI/ML processing
   - Recommendations are pre-generated

## Backend Integration Checklist

To make this platform production-ready, implement the following:

### 1. Authentication & Authorization

- [ ] Implement real authentication backend (JWT, OAuth, etc.)
- [ ] Replace mock `login()` in `src/lib/api/auth.ts`
- [ ] Replace mock `register()` in `src/lib/api/auth.ts`
- [ ] Add password reset email functionality
- [ ] Implement session management
- [ ] Add protected route middleware

**API Endpoints Needed**:
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
- `POST /api/auth/forgot-password`
- `GET /api/auth/me`

### 2. User Management

- [ ] Create user database schema
- [ ] Implement user CRUD operations
- [ ] Add email verification
- [ ] Implement password change logic
- [ ] Add account deletion with data cleanup

**API Endpoints Needed**:
- `GET /api/user/profile`
- `PATCH /api/user/email`
- `PATCH /api/user/password`
- `DELETE /api/user`
- `GET /api/user/progress`

### 3. Problems & Solutions

- [ ] Create problems database
- [ ] Implement problem CRUD operations
- [ ] Add solution access control (tier-based)
- [ ] Track user submissions and attempts
- [ ] Implement answer validation

**API Endpoints Needed**:
- `GET /api/problems` (with filtering)
- `GET /api/problems/[id]`
- `GET /api/problems/[id]/solution`
- `POST /api/problems/[id]/submit`

### 4. AI Analysis (Future Enhancement)

- [ ] Implement ML model for weakness detection
- [ ] Create recommendation engine
- [ ] Add personalized study plan generation
- [ ] Track and analyze user performance over time
- [ ] Generate insights based on historical data

**API Endpoints Needed**:
- `GET /api/analysis/user`
- `GET /api/analysis/topics`
- `GET /api/analysis/recommendations`
- `GET /api/analysis/study-plan`
- `POST /api/analysis/insights`

### 5. Payment & Subscriptions

- [ ] Integrate payment processor (Stripe, PayPal, etc.)
- [ ] Implement tier-based access control
- [ ] Add subscription management
- [ ] Create checkout flow
- [ ] Handle webhooks for payment events

**API Endpoints Needed**:
- `POST /api/checkout/create-session`
- `POST /api/checkout/webhook`
- `GET /api/subscription/status`
- `POST /api/subscription/upgrade`

### 6. Database Schema Suggestions

**Users Table**:
```sql
- id
- email
- password_hash
- name
- tier (starter/enhanced/complete)
- created_at
- updated_at
```

**Problems Table**:
```sql
- id
- title
- subject
- difficulty
- topics (JSON)
- statement
- solution
- hint
- tier_required
- created_at
```

**User_Progress Table**:
```sql
- id
- user_id
- problem_id
- solved
- attempts
- last_attempted
- created_at
```

## Environment Variables

Create a `.env.local` file with:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
JWT_SECRET=your_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Payment (Stripe example)
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# AI/ML API (future)
OPENAI_API_KEY=your_openai_key
```

## Development Notes

### Finding TODOs

Search for `TODO:` comments throughout the codebase to find places that need backend integration:

```bash
grep -r "TODO:" src/
```

### Mock Data

Mock data is located in:
- `src/data/problems.json` - 12 sample problems
- `src/data/mockUser.ts` - Sample user with progress data

### State Management

- User state: `useUserStore()` from `src/lib/store/userStore.ts`
- Problems state: `useProblemsStore()` from `src/lib/store/problemsStore.ts`

## Contributing

When contributing, please:

1. Follow the existing code structure
2. Use TypeScript strictly
3. Add proper type definitions
4. Include TODO comments for backend integration points
5. Test all UI flows

## License

Private project - All rights reserved

## Contact

For questions or support, contact: [your-email@example.com]

---

**Note**: This is a front-end only implementation. All authentication, API calls, and data persistence are mocked. Backend integration is required for production use.
