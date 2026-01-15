# AGENTS.md - Achromatic Template

## General Principles
- You are an expert in TypeScript, Node.js, Next.js 16 with the app router, React 19, shadcn/ui, Tailwind CSS, Auth.js v5 and Prisma.
- Write clean, concise and well-commented TypeScript code.
- Favor functional and declarative programming patterns over object-oriented approaches.
- Prioritize code reuse and modularization over duplication.
- Ensure code is maintainable, scalable and easy to understand.
- Follow best practices for security, performance and accessibility.

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack), TypeScript, React 19
- **UI**: Shadcn UI, Tailwind CSS, Radix UI primitives
- **Key libraries**: React Hook Form, Zod, Lucide React, Nuqs (URL state)
- **Auth**: Auth.js v5 (NextAuth)
- **Database**: Prisma ORM with PostgreSQL
- **Billing**: Stripe integration
- **Email**: NodeMailer, Resend, Postmark, SendGrid providers
- **Monitoring**: Sentry integration
- **Analytics**: Google Analytics, PostHog, Umami providers
- **Monorepo**: Turborepo with pnpm workspaces
- **Namespace**: `@workspace/*`

## Code Organization
This is a monorepo using Turborepo and pnpm workspaces.

### Workspace Structure
```
/apps                     # Applications (executable)
  /dashboard              # Main SaaS dashboard application
  /marketing              # Marketing/landing pages
  /public-api             # Public API endpoints

/packages                 # Shared packages
  /analytics              # Analytics providers (GA, PostHog, Umami)
  /api-keys               # API key management
  /auth                   # Authentication logic (Auth.js v5)
  /billing                # Payment handling (Stripe)
  /common                 # Shared utilities and types
  /database               # Prisma schema & client
  /email                  # Email providers (NodeMailer, Resend, etc.)
  /monitoring             # Error monitoring (Sentry)
  /rate-limit             # Rate limiting utilities
  /routes                 # Shared route definitions
  /ui                     # Design system (shadcn/ui components)
  /webhooks               # Webhook handling

/tooling                  # Configuration packages
  /eslint-config          # Linting rules
  /prettier-config        # Code formatting
  /requirements-check     # Environment validation
  /typescript-config      # TypeScript presets
```

### File Naming Conventions
- Use kebab-case for file names: `add-item-form.tsx`
- Schema files: `*-schema.ts` (e.g., `add-item-schema.ts`)
- Action files: `*.ts` in `/actions` folder
- Data fetching: `get-*.ts` in `/data` folder
- DTOs: `*-dto.ts` in `/types/dtos`

## Data Management
- Interact with the database using Prisma ORM client
- Import from `@workspace/database/client` and `@workspace/database`
- Leverage Prisma's generated types for type safety
- Use server actions for mutations instead of route handlers

## Error Handling
- Implement robust error handling and logging mechanisms
- Provide clear and user-friendly error messages
- Use custom error types for consistent error handling
- Handle errors gracefully using proper error types and boundaries

## Naming Conventions
- **PascalCase**: Component names, type definitions, classes
- **camelCase**: Variables, functions, methods
- **kebab-case**: File and directory names
- **UPPERCASE**: Environment variables and constants
- Avoid magic numbers by defining constants with meaningful names
- Start function names with a verb: `get*`, `create*`, `validate*`, `handle*`
- Use descriptive variable names with auxiliary verbs: `isLoading`, `hasError`, `canSubmit`

## Next.js Conventions
- Favor React Server Components (RSC) where possible
- Minimize `'use client'` directives
- Optimize for performance and Web Vitals
- Use server actions for mutations instead of route handlers
- Use `next/image` for optimized image loading
- Use Nuqs for URL-based state management

## TypeScript Conventions
- Use TypeScript for all code
- Prefer `type` over `interface` for consistency
- Avoid `any` type completely; use `unknown` when input type is uncertain
- Use strict null checks; prefer explicit undefined handling
- Use Zod schemas for runtime validation and TypeScript inference
- Prefer union types over enums for string literals
- Use functional components with hooks exclusively

## UI and Styling
- Use Shadcn UI, Radix UI and Tailwind for components and styling
- Import from `@workspace/ui/components`, `@workspace/ui/hooks` and `@workspace/ui/lib`
- Implement responsive design with Tailwind CSS; use a mobile-first approach
- Follow existing component patterns in the UI package

## Commit Messages
Write commit messages in the following format:
```
feat: add user profile page
- Created a new React component for the user profile page
- Added API endpoints to fetch and update user details
- Updated the routing logic to include the new profile page
```

Prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`

## Agent Instructions

### After Schema Changes
```bash
pnpm --filter @workspace/database generate
```

### After Dependency Changes
```bash
pnpm install
```

### Before Completing Tasks
1. Ensure all code follows the conventions in this document
2. Verify new code is well-documented where necessary
3. No TypeScript errors or warnings
4. Run formatting: `turbo format` (fix with `turbo format:fix`)
5. Run linting: `turbo lint` (fix with `turbo lint:fix`)
6. Run build: `turbo build`

### Running Development Servers
```bash
# All apps
pnpm dev

# Specific app
pnpm --filter @workspace/dashboard dev
pnpm --filter @workspace/marketing dev
pnpm --filter @workspace/public-api dev
```

### Database Commands
```bash
# Generate Prisma client
pnpm --filter @workspace/database generate

# Run migrations
pnpm --filter @workspace/database migrate

# Open Prisma Studio
pnpm --filter @workspace/database studio
```
