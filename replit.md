# Aakash Sharma Portfolio - Personal Website

## Overview

This is a modern portfolio website built for Aakash Sharma, a data and governance professional. The application is a full-stack web application showcasing personal projects, blog posts, CV, and professional work in the intersection of public policy, technology, and social impact.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: React Router for client-side navigation
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with Express routes
- **Session Management**: PostgreSQL session store

### Key Technology Stack
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Custom CSS animations and transitions
- **Development**: Hot module replacement with Vite
- **Deployment**: Production-ready with esbuild bundling

## Key Components

### Core Pages
1. **Home Page** (`/`) - Hero section with animated background
2. **About Section** - Personal story and core values
3. **CV Section** - Professional experience and skills
4. **Portfolio Section** - Project showcases and data assets
5. **Blog Section** - Articles and professional insights
6. **Contact Section** - Contact form and social links
7. **Data Assets** (`/data-assets`) - Standalone dashboard portfolio
8. **Admin Panel** (`/admin`) - Content management system

### Database Schema
- **Users Table**: Basic user authentication structure
- **Projects Table**: Portfolio project management
- **Blog Posts Table**: Content management for articles
- **Admin Users Table**: Role-based access control

### UI Component System
- Comprehensive design system with consistent theming
- Dark/light mode support with system preference detection
- Responsive design with mobile-first approach
- Accessible components using Radix UI primitives

## Data Flow

### Client-Side Data Flow
1. React components fetch data using React Query
2. API calls to Express backend endpoints
3. Real-time updates with optimistic UI patterns
4. State management through React Query cache

### Server-Side Data Flow
1. Express routes handle API requests
2. Drizzle ORM manages database operations
3. Data validation with Zod schemas
4. Session management with PostgreSQL store

### Database Operations
- CRUD operations through storage interface
- Type-safe database queries with Drizzle
- Migration system for schema changes
- Connection pooling with Neon serverless

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connectivity
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **react-router-dom**: Client-side routing
- **react-hook-form**: Form handling
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **esbuild**: Production bundling
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- TypeScript compilation checking
- Database migrations with Drizzle Kit
- Environment variable management

### Production Build
1. Frontend built with Vite (static files)
2. Backend bundled with esbuild (ESM format)
3. Database migrations applied automatically
4. Static files served from Express

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment detection
- Development vs production configurations
- Replit-specific optimizations

### Database Management
- Migration system using Drizzle Kit
- Schema versioning and evolution
- Connection pooling for performance
- Backup and recovery considerations

## Changelog

- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.