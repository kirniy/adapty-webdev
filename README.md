<p align="center">
  <img src="https://raw.githubusercontent.com/kirniy/adapty-webdev/main/.github/adapty-logo-color.svg" alt="Adapty" width="200">
</p>

# ADAPTY Website Redesign Project

<p align="center">
  <strong>A systematic, production-ready approach to redesigning the ADAPTY marketing website</strong>
</p>

<p align="center">
  <a href="https://adapty-achromatic-proto.vercel.app"><img src="https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo"></a>
  <a href="#"><img src="https://img.shields.io/badge/next.js-15.5-black?style=for-the-badge&logo=next.js" alt="Next.js 15"></a>
  <a href="#"><img src="https://img.shields.io/badge/react-19-61dafb?style=for-the-badge&logo=react" alt="React 19"></a>
  <a href="#"><img src="https://img.shields.io/badge/tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4"></a>
  <a href="#"><img src="https://img.shields.io/badge/typescript-5.0-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript"></a>
</p>

<p align="center">
  <a href="#live-demo">Live Demo</a> |
  <a href="#features">Features</a> |
  <a href="#quick-start">Quick Start</a> |
  <a href="#architecture">Architecture</a> |
  <a href="#documentation">Docs</a>
</p>

---

## Live Demo

**Production Prototype**: [adapty-achromatic-proto.vercel.app](https://adapty-achromatic-proto.vercel.app)

Built on the Achromatic SaaS starter kit with comprehensive debug menu system for rapid iteration.

---

## Features

### Debug Menu System

Floating panel with 20+ section variants. Switch between design approaches in real-time:

- **Grid Background**: cursor-tracking, slow-drift, static, off + guide lines
- **Header Variants**: Pill-navbar, Mega-menu with 4 dropdowns
- **Hero**: 4 variants (achromatic, centered-demo, minimal-text, split-left) + auto-rotating tabs
- **TrustedBy**: marquee, static-grid, static-minimal
- **Features**: colorful, muted, monochrome tabs
- **Roles**: cards, bento layout, stacked full-width
- **Stats**: cards, inline, graph, floating (spring physics, parallax)
- **Testimonials**: editorial, wall, carousel
- **Integrations**: static-grid, marquee, categorized
- **Image Sets**: 3 AI-generated illustration styles (set1, set2, set3)

All preferences saved to localStorage.

### Production Ready

- Mega-menu header with 17 product items, 11 case studies
- Full content parity with adapty.io navigation
- Error boundaries, 404 pages, loading states
- SEO metadata, security headers
- Responsive design (mobile-first)
- Accessibility features

### Performance Optimized

- `optimizePackageImports` for motion/react + @phosphor-icons
- Dynamic imports for heavy components
- React.cache() patterns
- Zero-flash theme switching
- Modern image formats (WebP)

---

## Quick Start

### Prerequisites

- Node.js 18.17+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/kirniy/adapty-webdev.git
cd adapty-webdev

# Navigate to active prototype
cd prototypes/achromatic-proto

# Install dependencies
pnpm install

# Start development server (marketing app on port 3001)
pnpm --filter marketing dev
```

### Available Scripts

| Command | Description |
|:--------|:------------|
| `pnpm --filter marketing dev` | Start marketing site at `localhost:3001` |
| `pnpm --filter marketing build` | Create production build |
| `pnpm --filter marketing lint` | Run ESLint |

### Debug Menu Usage

1. Open the live prototype: https://adapty-achromatic-proto.vercel.app
2. Look for the floating debug panel in the bottom-right corner
3. Toggle grid variants, header styles, section designs, and image sets
4. Preferences are saved to localStorage automatically

---

## Architecture

### Project Structure

```
adapty-webdev/
|
+-- prototypes/
|   +-- achromatic-proto/              # Main active prototype (monorepo)
|       +-- apps/
|       |   +-- marketing/             # Marketing website (port 3001)
|       |       +-- app/               # Next.js App Router
|       |       +-- components/
|       |       |   +-- debug/         # Debug menu system
|       |       |   +-- fragments/     # Reusable UI fragments
|       |       |   +-- layout/        # Header (mega-menu), Footer
|       |       |   +-- sections/      # 14+ sections with variants
|       |       +-- lib/
|       |       |   +-- content.ts     # All content/copy
|       |       |   +-- debug-context.tsx  # Debug state management
|       |       +-- public/            # Assets, logos, images
|       |       |   +-- assets/hero/   # AI-generated illustrations (set1, set2, set3)
|       |       |   +-- assets/roles/  # Role-specific images
|       |       +-- prototypes/        # Experimental section variants
|       +-- packages/
|           +-- ui/                    # Shared UI components
|           +-- database/              # Prisma schema (future)
|
+-- design-systems/                    # DS specifications (5 variants)
+-- references/                        # Site analysis data (Linear, Attio, etc.)
+-- skeleton/                          # Shared content specification
+-- docs/                              # Documentation
+-- messages/                          # Stakeholder communications
|
+-- CLAUDE.md                          # AI assistant context (living doc)
+-- README.md                          # You are here!
```

### Tech Stack

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| Next.js | 15.5 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.0 | Type safety |
| Tailwind CSS | 4.0 | Styling |
| motion/react | latest | Animations |
| @phosphor-icons/react | latest | Icons |
| Vercel | - | Deployment |

### Component Architecture

```
RootLayout
  +-- DebugMenuProvider
      +-- PageFrame
          +-- Header (Pill-navbar or Mega-menu)
          +-- Hero (4 variants)
          +-- TrustedBy (3 variants)
          +-- CoreFeatures (3 variants)
          +-- Roles (3 variants)
          +-- Stats (4 variants)
          +-- Testimonials (3 variants)
          +-- Integrations (3 variants)
          +-- ... (14+ sections total)
          +-- Footer
          +-- DebugMenu (floating panel)
```

---

## Documentation

| Document | Description | Location |
|:---------|:------------|:---------|
| **CLAUDE.md** | Living navigation doc, current state | `/CLAUDE.md` |
| **Section CLAUDE.md** | Component-specific context | `/prototypes/achromatic-proto/apps/marketing/components/sections/CLAUDE.md` |
| **DS Specifications** | Design system specs with tokens | `/design-systems/*/` |
| **Skeleton Spec** | 14-section homepage specification | `/skeleton/SKELETON.md` |

---

## Development Notes

### Key Learnings from Phase A/B

- Vanilla Tailwind > shadcn/ui for marketing sites (pixel-perfect control)
- Debug menu system enables rapid iteration and stakeholder feedback
- `optimizePackageImports` critical for barrel import performance
- Server Components require Client wrapper pattern for interactive features
- Content parity essential - adapty.io has 17 product items vs initial 9

### Design System

- **Palette**: Adapty purple (#6720FF) as primary accent
- **Typography**: Inter throughout
- **Grid**: Animated background with slow-drift (cursor-tracking optional)
- **Style**: Clean, modern SaaS aesthetic

---

## Security & Performance

### Security Headers

```javascript
// Implemented in next.config.js
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Performance Optimizations

- `optimizePackageImports` for motion/react + @phosphor-icons
- Dynamic imports for heavy components (TheInfiniteGrid wrapper)
- React.cache() for server-side data fetching
- Modern image formats (WebP)
- Font optimization with `display: swap`
- Zero-flash theme switching (inline script)

---

## Recent Updates (January 2026)

### January 19-20, 2026

- Added Roles section with 3 variants (cards, bento, stacked)
- Fixed hover-to-reveal-color effect on role cards
- Auto-rotating tabs in Hero achromatic variant
- Mobile responsiveness fixes across all sections
- AI-generated role images (set1, set2, set3)
- Cleaned up repository structure
- Single Vercel deployment (adapty-achromatic-proto)

### January 18-19, 2026

- Comprehensive motion improvements and micro-interactions
- SDK section with 5-platform support
- Features section with tabs and colorful/muted/monochrome variants
- Stats section with 4 layout variants (spring physics, parallax)

---

## Contributing

This is a proprietary project for ADAPTY.

### Development Guidelines

- Follow existing code style and patterns
- Use CSS custom properties for all styling
- Test with debug menu across all variants
- Update relevant documentation
- **NO EMOJIS** in any code, comments, or documentation

### Git Workflow

- Use conventional commit messages
- Test locally before pushing
- Update CLAUDE.md for architectural decisions

---

## License

This project is proprietary to ADAPTY. All rights reserved.

---

## Author

**Kirill Kholodenko**
AI-Native Web Developer @ ADAPTY

[GitHub: @kirniy](https://github.com/kirniy)

---

<p align="center">
  Built with precision and <a href="https://claude.ai">Claude</a>
</p>
