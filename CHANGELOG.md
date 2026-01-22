# Changelog

All notable changes to the Adapty Website Redesign project are documented here.

This changelog transforms technical commits into user-friendly updates for stakeholders.

---

## [Unreleased]

---

## [4.1.0] - 2026-01-22

### Debug System & Architecture Improvements

Major overhaul of the debug context system and comprehensive codebase cleanup.

#### New Features

- **Page-Specific Feature Variants** - Added 10 dedicated feature variant hooks:
  - `usePaywallBuilderFeaturesVariant()`
  - `useAbTestingFeaturesVariant()`
  - `useOnboardingBuilderFeaturesVariant()`
  - `useAutopilotFeaturesVariant()`
  - `useLtvAnalyticsFeaturesVariant()`
  - `useRefundSaverFeaturesVariant()`
  - `useForMarketersFeaturesVariant()`
  - `useForAppOwnersFeaturesVariant()`
  - `useForDevelopersFeaturesVariant()`
  - `useForIndieFeaturesVariant()`

- **Debug Menu PAGE_SECTIONS** - All 42 pages now have explicit section configs

#### Improvements

- **Default Variant Change** - All feature sections now default to 'bento' layout instead of 'grid'
- **Product Page Cleanup** - Removed LogosSwitcher from 14 product feature pages:
  - paywall-builder, paywall-ab-testing, onboarding-builder
  - autopilot, ltv-analytics, refund-saver
  - predictive-analytics, ai-paywall-generator
  - paywall-library, paywall-localization, paywall-targeting
  - remote-config, fallback-paywalls, revenue-growth
- **Logos remain** on role pages and main pages (homepage, pricing, schedule-demo)

#### Code Cleanup

- **Deleted 6 Unused Components** (~1,061 lines removed):
  - `compare-inhouse.tsx` - Duplicate of `compare-in-house.tsx`
  - `features-sticky-scroll.tsx` - Unused section variant
  - `problem.tsx` - Superseded by Solution component
  - `role-cards.tsx` - Superseded by Roles component
  - `text-link.tsx` - Fragment never imported
  - `text-generate-effect.tsx` - Fragment never imported

#### Bug Fixes

- **Build Configuration** - Added `--webpack` flag to fix Turbopack font loading errors in Next.js 16

#### Documentation

- **CLAUDE.md** - Added Debug Context Architecture section with patterns
- **CLAUDE.md** - Documented page-specific vs generic hook pattern
- **CLAUDE.md** - Added codebase analysis best practices

---

## [4.0.0] - 2026-01-20

### Achromatic Production Release

Full migration to Achromatic monorepo structure with comprehensive debug system.

#### New Features

- **42 Marketing Pages** - Complete page structure matching adapty.io
- **Debug Menu System** - Comprehensive variant switching for all sections
- **Roles Section** - 3 variants (cards, bento, stacked)
- **AI-Generated Images** - 3 image sets for hero and roles

#### Infrastructure

- **Monorepo Structure** - Based on Achromatic SaaS starter kit
- **Single Vercel Deployment** - Only achromatic-proto auto-deploys
- **Content Collections** - MDX support for blog and docs

---

## [0.3.0] - 2026-01-13

### Production Readiness & Best Practices

This release brings the prototype to production-ready status with comprehensive Next.js best practices implementation.

#### New Features

- **Error Handling** - Added graceful error boundary that catches runtime errors and offers retry functionality, styled to match any active design system
- **404 Page** - Custom not-found page with branded styling and navigation back to home
- **Loading States** - Skeleton loading screen with animated spinner for better perceived performance

#### Improvements

- **Enhanced SEO** - Comprehensive metadata including:
  - 10 targeted keywords for search visibility
  - Full OpenGraph configuration for social sharing
  - Twitter card support with large image previews
  - Proper favicon hierarchy (16x16, 32x32, apple-touch)
  - Robots directives for optimal indexing

- **Security Hardening** - Added security headers:
  - X-Frame-Options to prevent clickjacking
  - X-Content-Type-Options to prevent MIME sniffing
  - Referrer-Policy for privacy protection
  - Permissions-Policy to disable unused APIs

- **Performance Optimizations**:
  - Modern image formats (AVIF, WebP) enabled
  - Tree-shaking for lucide-react icons
  - React Strict Mode for development quality
  - Compression enabled

---

## [0.2.0] - 2026-01-13

### Design System Fidelity Release

Major improvements to match reference site wireframes with pixel-perfect accuracy.

#### New Features

- **Wireframe-Accurate Design Systems** - Clerk (DS5) and Polar (DS3) now match their reference sites precisely
- **Polymorphic Components** - Feature sections now adapt their structure based on design system context
- **Section Ordering** - Each design system variant now displays sections in authentic order matching original wireframes

#### Improvements

- **ThemeSwitcher** - Now uses fixed dark styling for consistent visibility across all themes
- **Color Accuracy** - Primary button colors for Linear (DS1), Attio (DS2), and Vercel (DS4) now exactly match reference sites
- **Background Consistency** - Removed hardcoded section backgrounds; all colors now flow from CSS tokens

#### Bug Fixes

- Fixed hydration mismatch causing content flash on page load
- Resolved regex collision in syntax highlighter breaking code displays
- Restored missing testimonial content that caused build failures
- Whitelisted placehold.co images to fix broken placeholder graphics

---

## [0.1.0] - 2026-01-12

### Initial Prototype Release

Foundation release establishing the multi-design-system architecture for A/B testing.

#### New Features

- **5 Complete Design Systems** - Full implementation of:
  - **DS1 (Linear)** - Dark premium theme with micro-interactions
  - **DS2 (Attio)** - Light editorial theme with serif accents
  - **DS3 (Polar)** - Minimal dark theme with fast animations
  - **DS4 (Vercel)** - Bold black theme with compound shadows
  - **DS5 (Clerk)** - Warm light theme with pill buttons

- **Dynamic Theme Switching** - Real-time design system switching via:
  - URL parameter (`?ds=ds1` through `?ds=ds5`)
  - ThemeSwitcher dropdown
  - localStorage persistence

- **CSS Token Architecture** - 100+ design tokens covering:
  - Colors (primary, secondary, semantic, text, borders)
  - Typography (fonts, letter-spacing)
  - Borders & Radius (consistent scale across components)
  - Shadows (from subtle to dramatic)
  - Animations (easing functions, durations)

- **Component Library** - Production-ready components:
  - Button (5 variants: primary, secondary, outline, ghost, text)
  - Container (responsive width management)
  - Section (semantic page structure)
  - All section components (Hero, Features, Stats, Testimonials, etc.)

- **Vercel Deployment** - Configured for one-click deployment

#### Documentation

- Added reference site analysis PDF with ASCII wireframes
- Comprehensive README with project structure
- Reference project from entry task included

---

## Project Timeline

| Date | Milestone |
|------|-----------|
| 2026-01-12 | Initial commit and project structure |
| 2026-01-12 | First prototype deployed to Vercel |
| 2026-01-13 | Design system fidelity improvements |
| 2026-01-13 | Production readiness features added |
| 2026-01-18 | Achromatic monorepo migration started |
| 2026-01-19 | Debug menu system implemented |
| 2026-01-20 | 42 marketing pages scaffolded |
| 2026-01-21 | Page-specific feature variants added |
| 2026-01-22 | Debug system fully wired, dead code removed |

---

## Technical Details

**Stack**: Next.js 16, React 19, Tailwind CSS 4, TypeScript, motion/react

**Architecture**:
- Monorepo with pnpm workspaces
- Marketing app with 42 pages
- Debug context system with 24+ variant types
- Content Collections for MDX

**Design References**:
- Linear.app, Attio.com, Polar.sh, Vercel.com, Clerk.com

**Live Prototype**: [adapty-achromatic-proto.vercel.app](https://adapty-achromatic-proto.vercel.app)

---

*This changelog follows [Keep a Changelog](https://keepachangelog.com/) principles.*
