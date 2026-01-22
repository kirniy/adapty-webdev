# Ralph Implementation Plan

## ACTIVE TASKS (Track These)

### Debug Menu Per-Page (CRITICAL)
- [x] DebugMenu shows only relevant sections per page via PAGE_SECTIONS map
- [x] Add /paywall-builder to PAGE_SECTIONS with hero, logos, features, testimonials, faq, cta
- [x] Add /paywall-ab-testing to PAGE_SECTIONS
- [x] Add /ltv-analytics to PAGE_SECTIONS
- [x] Add /pricing to PAGE_SECTIONS
- [x] Add /for-marketers to PAGE_SECTIONS
- [x] Add /for-developers to PAGE_SECTIONS
- [x] Add /for-app-owners to PAGE_SECTIONS
- [x] Add /for-indie to PAGE_SECTIONS
- [x] Add /onboarding-builder to PAGE_SECTIONS
- [x] Add /refund-saver to PAGE_SECTIONS
- [x] Add /autopilot to PAGE_SECTIONS

### Variant Switching (CRITICAL)
- [x] Hero variants switchable via debug menu (3 variants per page)
- [x] Features variants switchable via debug menu (3 variants per page)
- [x] Variant mapping functions in page.tsx files
- [x] Global components (Logos, Testimonials, FAQ, CTA) switch via wrappers

### Animation Quality
- [x] BorderBeam effect on hero sections
- [x] Staggered reveal animations on all sections
- [x] Card hover effects (scale, shadow, y-offset)
- [x] Button hover/press states throughout
- [x] Icon animations on hover

### Build Status
- [x] pnpm --filter marketing build PASSES

---

## Overview

This plan tracks the implementation of production-quality pages for the Adapty marketing website. Each page requires full content parity with adapty.io and must meet the quality standards established by the homepage.

---

## Priority Tiers

### TIER 1: Core Product Pages (HIGHEST PRIORITY)

| Page | Official URL | Status | Sections | Notes |
|------|--------------|--------|----------|-------|
| `/paywall-builder` | adapty.io/paywall-builder | [x] | Hero, Logos, Features, Gallery, FAQ, CTA | COMPLETE - 3 hero variants, 3 features variants, 3 customization variants |
| `/paywall-ab-testing` | adapty.io/ab-testing | [x] | Hero, Logos, Features, Stats, Testimonials, CTA | COMPLETE - 3 hero variants, 3 features variants, CaseStudiesGrid |
| `/ltv-analytics` | adapty.io/analytics | [x] | Hero, Features, Stats, CTA | COMPLETE - 3 hero variants, 3 features variants, Logos, Testimonials, CTA |
| `/pricing` | adapty.io/pricing | [x] | Hero, PricingCards, FAQ, CTA | COMPLETE - 3 hero variants, PricingComparison, FAQ, Testimonials, CTA |

### TIER 2: Audience Pages

| Page | Official URL | Status | Sections | Notes |
|------|--------------|--------|----------|-------|
| `/for-marketers` | adapty.io/for-marketers | [x] | Hero, Logos, Features, Stats, Testimonials, CTA | COMPLETE - Hero, Features, Stats components |
| `/for-developers` | adapty.io/for-developers | [x] | Hero, Logos, Features, SDK, Testimonials, CTA | COMPLETE - Hero, Features, SDKCode components |
| `/for-app-owners` | adapty.io/for-app-owners | [x] | Hero, Logos, Features, Stats, Testimonials, CTA | COMPLETE - Hero, Features, Stats components |
| `/for-indie` | adapty.io/for-indie | [x] | Hero, Logos, Features, Testimonials, CTA | COMPLETE - Hero, Features components |

### TIER 3: Additional Feature Pages

| Page | Official URL | Status | Sections | Notes |
|------|--------------|--------|----------|-------|
| `/onboarding-builder` | adapty.io/onboarding-builder | [x] | Hero, Features, Gallery, FAQ, CTA | COMPLETE - Hero, Features, FAQ components |
| `/refund-saver` | adapty.io/refund-saver | [x] | Hero, Features, Stats, FAQ, Testimonials, CTA | COMPLETE - Hero, Features, FAQ components |
| `/autopilot` | adapty.io/autopilot | [x] | Hero, Features, Testimonials, CTA | COMPLETE - Hero, Features components |
| `/ai-paywall-generator` | adapty.io/ai-paywall-generator | [x] | Hero, Features, CTA | EXISTS - already in route list |

### TIER 4: Resource Pages

| Page | Official URL | Status | Sections | Notes |
|------|--------------|--------|----------|-------|
| `/schedule-demo` | adapty.io/schedule-demo | [x] | Hero, Logos, Form, Testimonials | COMPLETE - Page exists |
| `/case-studies` | adapty.io/case-studies | [x] | Hero, CaseStudyGrid, CTA | COMPLETE - Page exists |
| `/sdk` | adapty.io/sdk | [x] | Hero, SDK, Features, CTA | COMPLETE - Page exists |
| `/integrations` | adapty.io/integrations | [x] | Hero, IntegrationGrid, CTA | COMPLETE - Page exists |

### TIER 5: Compare Pages

| Page | Official URL | Status | Sections | Notes |
|------|--------------|--------|----------|-------|
| `/compare` | adapty.io/compare | [x] | Hero, CompareTable, CTA | COMPLETE - Page exists |
| `/compare/revenuecat` | adapty.io/compare/revenuecat | [x] | Hero, ComparisonTable, CTA | COMPLETE - Page exists |
| `/compare/qonversion` | adapty.io/compare/qonversion | [x] | Hero, ComparisonTable, CTA | COMPLETE - Page exists |
| `/compare/superwall` | adapty.io/compare/superwall | [x] | Hero, ComparisonTable, CTA | COMPLETE - Page exists |
| `/compare/purchasely` | adapty.io/compare/purchasely | [x] | Hero, ComparisonTable, CTA | COMPLETE - Page exists |
| `/compare/in-house` | adapty.io/compare/in-house-development | [x] | Hero, ComparisonTable, CTA | COMPLETE - Page exists |

---

## Per-Page Implementation Checklist

For EACH page, complete ALL items before marking as done:

### Research Phase
* Use `agent-browser open https://adapty.io/[page]` to view official page
* Run `agent-browser text` to extract all content
* Take `agent-browser screenshot` for visual reference
* Document hero content (headline, description, CTAs, badge)
* Document feature list (title, description, icon, stat for each)
* Document stats section (value, label for each)
* Document testimonials (quote, author, role, company for each)
* Document FAQ items (question, answer for each)
* Document CTA content (headline, description, button text)

### Content Entry
* Add page content object to `lib/content.ts`
* Follow content schema from PROMPT.md Part 2.3
* Ensure all text is EXACT match to adapty.io

### Component Implementation
* Create `components/sections/[page]-hero.tsx`
* Create `components/sections/[page]-features.tsx`
* Create any page-specific sections needed
* Use global variant hooks from `~/lib/debug-context`
* Follow component structure from PROMPT.md Part 3.5
* Add animations using motion design tokens
* Add hover states to ALL interactive elements
* Add `cursor-pointer` to clickable elements
* Add `useReducedMotion()` check

### Page Assembly
* Create `app/[page]/page.tsx`
* Import and compose section components
* Add page metadata for SEO
* Test section ordering matches adapty.io

### Debug Menu Integration
* Add page path to `PAGE_SECTIONS` in `DebugMenu.tsx`
* List correct sections for the page

### Quality Verification
* Run `pnpm --filter marketing build` - MUST PASS
* Test all variant switches in debug menu
* Check mobile responsiveness (375px, 768px, 1024px)
* Compare side-by-side with adapty.io
* Verify all animations feel smooth
* Verify all hover states work

---

## Quality Standards (Reference - NOT tracked)

Before marking ANY page complete, verify these quality items:

### Content Parity
* Headlines match adapty.io exactly
* Descriptions match adapty.io exactly
* Stats/metrics match adapty.io (or are updated)
* Features list is complete
* Testimonials are real (not placeholder)

### Motion Design
* Uses `EASE_OUT_QUART` for enter animations
* Uses 180ms duration for fast transitions
* Uses 240ms duration for layout shifts
* Never uses `scale(0)` - uses `scale(0.96)` minimum
* Respects `prefers-reduced-motion`
* Stagger animations use 0.05-0.1s delay

### Interactivity
* All cards have hover effects
* All buttons have hover and press states
* All clickable elements have `cursor-pointer`
* Focus states visible for accessibility
* Icons animate on hover

### Technical
* Component is client-side (`'use client'`)
* Uses global debug hooks (not local state)
* No TypeScript errors
* No build warnings
* Imports are optimized (no barrel files)

---

## Reference Components to Study

Before implementing any page, read these files:

| File | What to Learn |
|------|---------------|
| `components/sections/hero.tsx` | Auto-rotating tabs, badge animation, stagger |
| `components/sections/features-bento-tabs.tsx` | Tabbed bento, 4 layouts, hover states |
| `components/sections/solution.tsx` | Complex bento, card animations |
| `components/sections/testimonials-clean.tsx` | Click-through, magnetic cursor |
| `components/sections/logos-linear.tsx` | Blur reveal, max 7 logos |

---

## Progress Log

| Date | Page | Action | Status |
|------|------|--------|--------|
| 2026-01-22 | /paywall-builder | Verified implementation - Hero(3), Features(3), Customization(3) variants, build passes | Complete |
| 2026-01-22 | /paywall-ab-testing | Verified implementation - Hero(3), Features(3) variants, CaseStudiesGrid | Complete |
| 2026-01-22 | /ltv-analytics | Verified implementation - Hero(3), Features(3) variants, Logos, Testimonials, CTA | Complete |
| 2026-01-22 | /pricing | Verified implementation - Hero(3 variants), PricingComparison, FAQ, Testimonials, CTA | Complete |
| 2026-01-22 | TIER 2 Pages | All 4 audience pages verified - for-marketers, for-developers, for-app-owners, for-indie | Complete |
| 2026-01-22 | TIER 3 Pages | All 4 feature pages verified - onboarding-builder, refund-saver, autopilot, ai-paywall-generator | Complete |
| 2026-01-22 | TIER 4 Pages | All 4 resource pages verified - schedule-demo, case-studies, sdk, integrations | Complete |
| 2026-01-22 | TIER 5 Pages | All 6 compare pages verified - compare/, revenuecat, qonversion, superwall, purchasely, in-house-development | Complete |
| 2026-01-22 | BUILD STATUS | pnpm --filter marketing build PASSES - 51 pages generated | Success |

---

## Notes

### Architecture Decisions
- ONE global DebugMenu (page-aware via `usePathname`)
- NO separate per-page debug menus
- All variants via `lib/debug-context.tsx`
- Content centralized in `lib/content.ts`

### Key Stakeholder Feedback (from Jan 16-19 reports)
- Bento grids are the winning pattern for features
- Max 7 logos (not 10)
- Linear-style blur-on-hover logos preferred
- SDK code block is critical for developer pages
- Smart hover interactions everywhere
- Motion should follow Emil Kowalski principles

### Build Command
```bash
pnpm --filter marketing build
```

### Dev Server
```bash
pnpm --filter marketing dev
# Runs on http://localhost:3011
```

---

## FINAL VERIFICATION PROCEDURE

**CRITICAL: Run this procedure for EVERY page before marking complete.**

### Step 1: Side-by-Side Content Comparison

```bash
# Open official adapty.io page
agent-browser open https://adapty.io/[page-name]

# Take full-page screenshot
agent-browser screenshot

# Extract all text content
agent-browser text > /tmp/adapty-[page-name].txt
```

Then compare:
* Every headline matches or improves upon adapty.io
* Every feature description is present
* Every stat/metric is included
* Every testimonial is real (from adapty.io customers)
* No placeholder or fake content ("Lorem ipsum", "Company X", etc.)

### Step 2: Content Completeness Check

Our pages should have **MORE content and blocks, not less:**

| Section | Minimum Requirements |
|---------|---------------------|
| Hero | Badge, headline, description, 2 CTAs, visual |
| Logos | 5-7 real customer logos with hover effects |
| Features | All features from adapty.io + rich descriptions |
| Stats | All metrics with real numbers |
| Testimonials | 3+ real customer testimonials |
| FAQ | All FAQ items from adapty.io |
| CTA | Headline, description, button |

### Step 3: Design Quality Verification

**Note: We are NOT copying adapty.io's design/colors. We use our own design system.**

Check these design elements:
* Uses FULLY monochromatic palette (black, white, grays)
* Primary buttons are BLACK (bg-foreground), NOT purple
* Secondary buttons are white/outline with dark border
* Purple (#6720FF) used ONLY for:
  - Focus rings (accessibility)
  - Tiny active/selected indicators (tab underlines)
  - Link hover states (text color only)
  - NOT for buttons, NOT for backgrounds
* Uses Inter font throughout
* Grid background follows our pattern
* Cards use our bento grid style
* Follows light theme (per stakeholder direction)

**Micro-interactions & Motion Quality (web-animation-design skill):**

Reference: `~/.claude/skills/web-animation-design/SKILL.md`

* Every card has hover effects (scale, y-offset, shadow)
* Buttons have press states (scale 0.97)
* Icons animate on hover (rotation, scale, bounce)
* Staggered reveals on scroll-into-view
* SVG illustrations are animated where appropriate
* Progress indicators on auto-rotating content
* Smooth transitions (150-250ms for UI, ease-out)
* NEVER animate from scale(0) - use scale(0.95)
* Transform-origin matches trigger position
* Respects `prefers-reduced-motion`
* NO animation for keyboard-driven interactions
* NO animation for frequently-used elements (100+ times/day)

### Step 4: Interactivity & Animation Checklist

Open our page in browser and verify:

**Cards:**
* Hover: scale(1.02), y: -4, shadow transition
* Cursor changes to pointer
* Border highlights on hover

**Buttons:**
* Hover: y: -2, glow effect
* Press: scale: 0.97
* Arrow icons move on hover

**Sections:**
* Stagger animation on scroll into view
* BlurFade wrapper on section headers
* Smooth transitions (no jarring movements)

**Stats:**
* Count-up animation (if applicable)
* Hover feedback

**Tabs (if present):**
* Smooth tab switching
* Auto-rotation with pause on hover
* Progress indicator

### Step 5: Technical Verification

```bash
# Build must pass
pnpm --filter marketing build

# Check for TypeScript errors
# Build command will catch these

# Verify no console errors in browser
# Open DevTools console while testing
```

### Step 6: Mobile Responsiveness

Test at these breakpoints:
* 375px (iPhone SE)
* 768px (iPad)
* 1024px (iPad landscape)
* 1440px (Desktop)

Check:
* No horizontal scroll
* Text is readable
* Touch targets are 44px minimum
* Cards stack properly

### Step 7: Final Sign-Off Checklist

Before marking page as [x] complete:

```
PAGE: /[page-name]
DATE: [YYYY-MM-DD]

CONTENT PARITY:
  [x] All hero content from adapty.io
  [x] All features from adapty.io
  [x] All stats from adapty.io
  [x] All testimonials (real customers)
  [x] All FAQ items
  [x] No placeholder/fake content

DESIGN QUALITY:
  [x] Uses our design system
  [x] Cards have hover states
  [x] Buttons have hover/press states
  [x] Animations use correct easing
  [x] Respects reduced motion

INTERACTIVITY:
  [x] All clickable elements have cursor-pointer
  [x] Stagger animations on scroll
  [x] Smooth transitions throughout
  [x] Tab switching works (if applicable)

TECHNICAL:
  [x] Build passes
  [x] No TypeScript errors
  [x] No console errors
  [x] Mobile responsive

VERIFIED BY: Ralph
```

---

## Content vs Design: Important Distinction

**CONTENT WE COPY:**
- All text (headlines, descriptions, features, testimonials)
- All stats and metrics
- All FAQ questions and answers
- Information architecture (what sections exist)
- Customer names and real testimonials

**DESIGN WE DO NOT COPY:**
- Colors: We use a MONOCHROMATIC palette (black, white, grays) with purple as SPARSE accent
  - Purple only for: buttons, active states, focus rings, links, small accents
  - NO large purple backgrounds or purple-dominant sections
- Typography (we use Inter)
- Layout patterns (we use bento grids)
- Animation style (we use Emil Kowalski principles)
- Component styling (we use our own)

The goal is: **Same great content, presented through our new premium design language with rich micro-interactions.**

---

## NO FAKE CONTENT RULE

**ABSOLUTELY NO:**
- "Lorem ipsum" or placeholder text
- "Company X" or fake company names
- Made-up statistics
- Generic testimonials
- Placeholder images
- "Coming soon" sections

**ALWAYS USE:**
- Real content from adapty.io
- Real customer names and companies
- Real statistics (or updated ones)
- Real testimonials
- Real or AI-generated illustrations (from /assets/)

If content doesn't exist on adapty.io for a section, either:
1. Skip that section entirely
2. Use content from a related adapty.io page
3. Ask for guidance (BLOCKED status)
