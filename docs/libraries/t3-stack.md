---
project: adapty-redesign
type: library-doc
library: t3-stack
version: latest
last_verified: 2026-01-12
tags: [library, nextjs, boilerplate, typescript]
---

# T3 Stack - Local Documentation

> **Source**: https://create.t3.gg
> **Purpose**: Typesafe Next.js application boilerplate

---

## Overview

Create T3 App is a CLI tool that streamlines setup of typesafe Next.js applications.

**Philosophy**: "Do one thing: Streamline the setup of typesafe Next.js apps WITHOUT compromising modularity."

**Key Principle**: "Take what you want and nothing more" - NOT an all-inclusive template.

---

## Core Technologies

| Technology | Purpose | Notes |
|------------|---------|-------|
| **Next.js** | Framework | App Router, optimized React |
| **TypeScript** | Type safety | Required, not optional |
| **Tailwind CSS** | Styling | Utility-first CSS |
| **tRPC** | API layer | End-to-end type safety |
| **Prisma** | Database ORM | Type-safe database queries |
| **NextAuth.js** | Authentication | Flexible, secure auth |

---

## Quick Start

```bash
# Create new T3 app
npm create t3-app@latest

# Or with specific options
npx create-t3-app@latest my-app --tailwind --trpc
```

---

## When to Use T3 for ADAPTY

### Use T3 If:
- Need full-stack typesafe application
- Want tRPC for API routes
- Need authentication (NextAuth)
- Want database integration (Prisma)

### Skip T3 If:
- Building static/marketing site only
- Using external CMS (like Sanity)
- Don't need tRPC/Prisma complexity
- Simple prototype that won't need backend

---

## ADAPTY Recommendation

**For Phase A/B Prototypes**: Skip T3
- Prototypes are UI-focused, no backend needed
- Keep dependencies minimal for comparison
- Use basic create-next-app instead

**For Production Build**: Evaluate T3
- If adding user dashboard features
- If implementing subscription management
- If need typesafe API layer

---

## T3 vs Plain Next.js

| Feature | Plain Next.js | T3 Stack |
|---------|---------------|----------|
| Setup time | 1 min | 2-3 min |
| TypeScript | Optional | Required |
| Tailwind | Manual setup | Included |
| tRPC | Not included | Optional |
| Prisma | Not included | Optional |
| Auth | Not included | Optional |
| Complexity | Low | Medium |

---

## Relevant T3 Commands

```bash
# Initialize new project
npm create t3-app@latest

# Available flags
--noGit          # Skip git initialization
--noInstall      # Skip dependency installation
--default        # Use default options (Next.js + TypeScript)
--tailwind       # Include Tailwind CSS
--trpc           # Include tRPC
--prisma         # Include Prisma
--nextAuth       # Include NextAuth.js
--dbProvider     # Choose database provider
```

---

## Local Decision

**Decision**: Do NOT use T3 for prototypes. Use plain create-next-app.
**Rationale**: Prototypes need minimal setup, no backend complexity.
**Revisit**: When building production version with user features.
