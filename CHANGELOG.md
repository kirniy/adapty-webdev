# Changelog

All notable changes to the Adapty Website Redesign project are documented here.

This changelog transforms technical commits into user-friendly updates for stakeholders.

---

## [Unreleased]

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

---

## Technical Details

**Stack**: Next.js 15, React 19, Tailwind CSS 4, TypeScript

**Design Systems Reference**:
- Linear.app (DS1)
- Attio.com (DS2)
- Polar.sh (DS3)
- Vercel.com (DS4)
- Clerk.com (DS5)

**Live Prototype**: [adapty-prototype.vercel.app](https://adapty-prototype.vercel.app)

---

*This changelog follows [Keep a Changelog](https://keepachangelog.com/) principles.*
