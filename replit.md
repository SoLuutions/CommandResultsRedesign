# CommandResults - Business Value Accelerator Program

## Overview

CommandResults is a comprehensive business training platform focused on the Business Value Accelerator (BVA) Program. The application provides Lean-Agile training solutions to help organizations drive measurable business improvement through proven methodologies. The platform offers training programs, facilitated workshops, and educational content designed to help teams build improvement plans in 30 days and see results in 90 days.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Progressive Web App**: PWA capabilities with service worker for offline functionality and app installation

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production builds
- **API Design**: RESTful API structure with `/api` prefix routing

### Data Layer
- **Database**: PostgreSQL configured for production use
- **ORM**: Drizzle ORM with Drizzle Kit for schema management and migrations
- **Database Provider**: Neon Database serverless PostgreSQL
- **Schema**: Type-safe database schema with Zod integration for validation
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication & Sessions
- **Session Management**: connect-pg-simple for PostgreSQL-backed session storage
- **User Management**: Basic user schema with username/password authentication

### Development & Build Pipeline
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: Vite for client build, esbuild for server bundling
- **Type Checking**: TypeScript strict mode with comprehensive type safety
- **Code Quality**: ESLint and Prettier configurations for consistent code style

### UI/UX Design System
- **Design System**: Custom design tokens using CSS variables
- **Component Library**: Comprehensive set of reusable UI components
- **Accessibility**: ARIA-compliant components with keyboard navigation support
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Typography**: Inter font family with JetBrains Mono for code elements

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Database URL**: Environment-based configuration for database connections

### UI & Component Libraries
- **Radix UI**: Headless UI components for accessibility and customization
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider components for content presentation
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Development Tools
- **Replit Integration**: Specialized plugins for Replit development environment
  - Runtime error overlay for better debugging
  - Cartographer for code mapping
  - Development banner for environment awareness

### Build & Development
- **Vite**: Frontend build tool with plugin ecosystem
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TypeScript**: Type checking and compilation

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library for type-safe data validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Utility Libraries
- **clsx & tailwind-merge**: Conditional class name utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation for various use cases