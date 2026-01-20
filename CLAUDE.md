---
project: adapty-redesign
version: 4.0.0
last_updated: 2026-01-20T01:30:00Z
owner: kirill-kholodenko
stakeholder: sergey-muratov
phase: achromatic-production
status: active
tags: [redesign, nextjs, tailwind, design-system, achromatic, vanilla-tailwind, monorepo]
---

# ADAPTY Website Redesign - Navigation & Context

> **IMPORTANT**: This is a living navigation document. Update after every significant change.
> Last significant update: 2026-01-20 - Achromatic-proto is now the main active project. Roles section added with 3 variants. Repository cleanup completed.

---

## ABSOLUTE RULES (NON-NEGOTIABLE)

### NO EMOJIS - EVER
**NEVER use emojis in any code, comments, UI text, documentation, or any file in this project.**
- No emoji flags for language switchers (use text abbreviations or SVG icons)
- No emoji icons in UI components
- No emoji in commit messages
- No emoji in documentation
- No exceptions. Zero tolerance.

---

## SESSION START INSTRUCTIONS (READ FIRST)

### Current Status: ACHROMATIC-PROTO ACTIVE

**Main project: `/prototypes/achromatic-proto/`**

This is a monorepo based on the Achromatic SaaS starter kit with:
- Marketing app at `/apps/marketing/` (port 3001)
- Comprehensive debug menu system with 20+ section variants
- AI-generated illustrations (3 style sets)
- Full content parity with adapty.io navigation

**Production URL**: [adapty-achromatic-proto.vercel.app](https://adapty-achromatic-proto.vercel.app)

### What Exists Now

| Prototype | Location | Status | Notes |
|-----------|----------|--------|-------|
| **Achromatic** | `/prototypes/achromatic-proto/` | PRODUCTION | Main active project |
| Oatmeal | `/prototypes/oatmeal/` | Archived | Earlier iteration |
| AuraBuild | `/prototypes/aura-build/` | Archived | Performance experiments |
| Phase A | `/prototypes/adapty-prototype/` | Archived | Initial 5-way theme switcher |

### Required Skills (ALWAYS LOAD)

**For ALL React/Next.js work in this project:**
```
react-best-practices     - Vercel Engineering performance guidelines (MANDATORY)
```

Apply patterns from highest impact first:
1. **CRITICAL**: Eliminate waterfalls (`Promise.all`, defer await)
2. **CRITICAL**: Bundle size (avoid barrel imports, dynamic imports)
3. **HIGH**: Server performance (`React.cache()`, parallel fetching)
4. **MEDIUM**: Re-render optimization (memo, transitions, derived state)

**Reference files**: `~/.claude/skills/react-best-practices/references/rules/`

---

## Quick Navigation

| Area | Path | Purpose | Status |
|------|------|---------|--------|
| **Main Prototype** | `/prototypes/achromatic-proto/` | Production build | Active |
| **Marketing App** | `/prototypes/achromatic-proto/apps/marketing/` | Website code | Active |
| **Design Systems** | `/design-systems/` | 5 DS variants | Reference |
| **Skeleton** | `/skeleton/` | Shared content/assets | Reference |
| **References** | `/references/` | Site analysis data | Complete |
| **Messages** | `/messages/` | Sergey communications | 09-daily-report-jan19 |

---

## Current State

```yaml
current_phase: "Production iteration - Homepage complete"
next_phase: "Additional pages (Pricing, Demo, Feature pages)"
blocking_tasks: []

# Main Prototype
achromatic_proto:
  status: "PRODUCTION"
  location: "/prototypes/achromatic-proto/apps/marketing/"
  url: "adapty-achromatic-proto.vercel.app"
  quality: "9/10"

  sections_implemented:
    - Hero (4 variants: achromatic, centered-demo, minimal-text, split-left)
    - TrustedBy (3 variants: marquee, static-grid, static-minimal)
    - CoreFeatures (3 variants: colorful, muted, monochrome + tabs)
    - Roles (3 variants: cards, bento, stacked)
    - Stats (4 variants: cards, inline, graph, floating)
    - SDK (5-platform support)
    - Testimonials (3 variants: editorial, wall, carousel)
    - Integrations (3 variants: grid, marquee, categorized)
    - CaseStudies
    - Pricing
    - CTA
    - Footer

  debug_menu_features:
    - Grid background (cursor-tracking, slow-drift, static, off)
    - Guide lines toggle
    - Header variants (pill-navbar, mega-menu)
    - All section variant switching
    - Image set switching (set1, set2, set3)
    - localStorage persistence

  recent_additions:
    - "Roles section (cards, bento, stacked variants)"
    - "Hover-to-reveal-color effect on role cards"
    - "Auto-rotating tabs in Hero achromatic variant"
    - "Mobile responsiveness fixes"
    - "AI-generated role images (3 sets)"

# Key Learnings
key_insights:
  - "Vanilla Tailwind > shadcn/ui for marketing sites"
  - "Debug menu enables rapid iteration"
  - "optimizePackageImports critical for barrel imports"
  - "Content parity with adapty.io essential"
  - "Monorepo structure (achromatic) scales better than single-app"
```

---

## Project Structure

```
adapty-webdev/
|
+-- prototypes/
|   +-- achromatic-proto/              # MAIN ACTIVE PROJECT
|       +-- apps/
|       |   +-- marketing/             # Marketing website (port 3001)
|       |       +-- app/               # Next.js App Router
|       |       +-- components/
|       |       |   +-- debug/         # DebugMenu.tsx
|       |       |   +-- fragments/     # Reusable UI fragments
|       |       |   +-- layout/        # Header, Footer
|       |       |   +-- sections/      # All page sections
|       |       +-- lib/
|       |       |   +-- content.ts     # All content/copy
|       |       |   +-- debug-context.tsx  # Debug state
|       |       +-- public/
|       |           +-- assets/hero/   # AI-generated (set1, set2, set3)
|       |           +-- assets/roles/  # Role images (set1, set2, set3)
|       +-- packages/
|           +-- ui/                    # Shared components
|
+-- design-systems/                    # DS specs (reference)
+-- references/                        # Site analysis (reference)
+-- skeleton/                          # Content spec (reference)
+-- messages/                          # Stakeholder comms
|
+-- CLAUDE.md                          # This file
+-- README.md                          # Project README
```

---

## Development Commands

```bash
# Navigate to main project
cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto

# Start dev server (marketing on port 3001)
pnpm --filter marketing dev

# Build
pnpm --filter marketing build

# Lint
pnpm --filter marketing lint
```

---

## Stakeholder Requirements

### Priority Pages (in order)
1. **Homepage** - COMPLETE
2. **Pricing** - Next
3. **Schedule a demo** - Planned
4. **Feature pages**: paywall-builder, paywall-ab-testing, onboarding-builder
5. **Role pages**: for-marketers, for-developers, for-app-owners

### Design Direction
- **Theme**: LIGHT theme, less dense information
- **Primary refs**: Linear, Attio, Polar.sh, Vercel, Clerk
- **Color**: Adapty purple (#6720FF) as primary accent
- **Typography**: Inter throughout

---

## Tech Stack

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| Next.js | 15.5 | React framework |
| React | 19 | UI library |
| TypeScript | 5.0 | Type safety |
| Tailwind CSS | 4.0 | Styling |
| motion/react | latest | Animations |
| @phosphor-icons/react | latest | Icons |
| Vercel | - | Deployment |

---

## Icon Library

**Using**: @phosphor-icons/react (4,500+ icons, 6 weights)

```tsx
import { Icon } from "@phosphor-icons/react"
<Icon size={24} weight="regular" />
```

Weights: thin, light, regular, bold, fill, duotone

---

## Completed Work

### Phase A (Complete)
- 5 design system variants tested
- Vanilla Tailwind approach validated
- Deployed to adapty-prototype.vercel.app

### Phase B (Evaluated)
- shadcn/ui tested, not recommended for marketing
- Component libraries add friction for landing pages

### Achromatic Integration (Complete)
- Premium SaaS starter kit integrated
- Debug menu system added
- 20+ section variants implemented
- Content parity achieved

### January 19-20, 2026
- Roles section with 3 variants
- Auto-rotating tabs in Hero
- Mobile responsiveness fixes
- AI-generated role images
- Repository cleanup
- Single Vercel deployment configured

---

## Documentation Files (Update Periodically)

These files should be updated at the end of significant work sessions:

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `/docs/PROGRESS.md` | Daily work log, accomplishments | End of each session |
| `/docs/TASKS.md` | Task tracker, sprint status | When tasks change |
| `/CLAUDE.md` | Project navigation, current state | After significant changes |
| `/README.md` | Public-facing project info | After major milestones |

### How to Update

**PROGRESS.md**: Add new entry with session summary, accomplishments, metrics
**TASKS.md**: Update task states ([x], [>], [ ]), add new tasks as needed
**CLAUDE.md**: Update "Current State" yaml block, add new sections if needed

---

## Notes

### Memory System (claude-mem)
**Status**: DISABLED for this project (see `.claude/settings.json`)

### Vercel Deployment
Only `adapty-achromatic-proto` auto-deploys. Other projects disconnected.
