# Comprehensive Ralph Task List

## REUSABLE COMPONENTS - USE THESE (Variety with Coherence)

**CRITICAL**: Before creating new components, CHECK what already exists. The homepage has rich, polished section variants that should be reused and adapted for other pages. This ensures visual coherence while allowing layout variety.

### Existing Hero Variants (components/sections/)
| Component | Layout | When to Use |
|-----------|--------|-------------|
| `hero.tsx` | Centered with feature tabs + auto-rotation | Homepage, feature landing pages |
| `hero-split.tsx` | Split (text left, image right) with stats | Role pages, product pages |

**Hero DNA**:
- HeroPill with BorderBeam (animated announcement badge)
- HeroButton with glow + press effects (motion/react)
- MainDashedGridLines decoration
- BlurFade staggered entrance animations
- Responsive tab bar (scrollable on mobile)

### Existing Feature Layouts (features-bento-tabs.tsx)
| Layout | Description | When to Use |
|--------|-------------|-------------|
| `image-right` | Content left, image right | Default feature section |
| `image-left` | Image left, content right | Alternating sections |
| `image-top` | Full-width image, features in 4-col grid below | Analytics, dashboard showcases |
| `bento-grid` | 12-col grid with large image + feature cards | SDK, technical product pages |

**Feature DNA**:
- FeatureCard with hover scale + border highlight
- FeatureImage with hover scale + monochrome mode support
- Stat badges (rounded-full bg-muted)
- Icon containers (rounded-lg bg-primary/10)

### Existing Testimonial Variants
| Component | Style | When to Use |
|-----------|-------|-------------|
| `testimonials.tsx` | Carousel/wall | End of page, social proof |
| `testimonials-editorial.tsx` | Large editorial quotes | Case study pages |
| `testimonials-clean.tsx` | Minimal, clean design | Inline mid-page quotes |

### Existing Stats Variants (stats.tsx)
- Cards, inline, graph, floating layouts
- Animated counters support

### Existing Logos (logos.tsx, logos-linear.tsx)
- Marquee animation
- Static grid
- Linear minimal (max 7 logos)

### Animation DNA (motion/react patterns)

**Decision Tree - What type of motion?**
| Type | When | Easing | Duration |
|------|------|--------|----------|
| Enter/Exit | Popovers, modals, dropdowns | ease-out-quart | 180ms |
| Morph/Reposition | Layout shifts, accordions | ease-in-out-cubic | 240ms |
| Progress | Bars, spinners, countdowns | linear | varies |
| Hover states | Color, opacity changes | ease | 150ms |
| Keyboard-driven | Arrow keys, tabs | none | 0ms |

**Easing Tokens (use these)**
```tsx
// Enter/Exit animations (elements appearing/disappearing)
ease: [0.165, 0.84, 0.44, 1]  // --ease-out-quart (DEFAULT)
ease: [0.32, 0.72, 0, 1]      // --ease-out-expo (aggressive)

// Layout/morph animations (already on-screen changes)
ease: [0.645, 0.045, 0.355, 1]  // --ease-in-out-cubic
```

**Duration Tokens**
| Token | Value | Use Case |
|-------|-------|----------|
| dur-1 | 120ms | Micro feedback, button press |
| dur-2 | 180ms | Dropdowns, popovers (DEFAULT) |
| dur-3 | 240ms | Modals, sheets |
| dur-4 | 300ms | Upper bound for UI |
| dur-5 | 500ms+ | Marketing/illustrative only |

**Scale Values - Never animate from scale(0)**
- Small elements: `scale(0.97-0.98)`
- Medium elements: `scale(0.95-0.96)`
- Large elements: `scale(0.94-0.95)`

**Transform Origin - Match trigger position**
```tsx
// Dropdown opening from top
transformOrigin: 'top center'

// Tooltip from button
transformOrigin: 'bottom center'
```

**Code Patterns**
```tsx
// Standard entrance (enter/exit)
initial={{ opacity: 0, y: 20, scale: 0.96 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.18, ease: [0.165, 0.84, 0.44, 1] }}

// Hover scale (subtle)
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.15 }}

// Stagger children
delay: 0.05 + index * 0.05

// ALWAYS respect reduced motion
const shouldReduceMotion = useReducedMotion();
if (shouldReduceMotion) return { opacity: 0 } // no transforms
```

**Performance Rules**
- ONLY animate `transform` and `opacity` (compositor-only)
- NEVER animate `width`, `height`, `top`, `left`
- Keep `backdrop-filter: blur()` under 20px
- Use `will-change` sparingly

### Fragment Components (components/fragments/)
| Fragment | Purpose |
|----------|---------|
| `GridSection` | Section wrapper with consistent padding |
| `SectionBackground` | Gradient/grid background |
| `BlurFade` | Entrance animation wrapper |
| `BorderBeam` | Animated border effect for badges |

### Color & Style Tokens
```tsx
// Use these, don't hardcode colors
text-primary          // Brand purple actions
text-muted-foreground // Secondary text
bg-card               // Card backgrounds
bg-muted              // Subtle backgrounds
border                // Standard borders
bg-primary/10         // Icon containers
```

---

## UX BEST PRACTICES (from ui-ux-pro-max)

### Critical - Accessibility
- Color contrast: minimum 4.5:1 for normal text
- Visible focus rings on ALL interactive elements
- Alt text for meaningful images
- aria-label for icon-only buttons
- Tab order matches visual order
- Form inputs have labels

### Critical - Touch & Interaction
- Minimum 44x44px touch targets
- `cursor-pointer` on ALL clickable elements
- Disable buttons during async operations
- Clear error messages near the problem

### High Priority - Performance
- WebP images with srcset and lazy loading
- Check `prefers-reduced-motion` (see animation DNA)
- Reserve space for async content (no layout jumps)

### High Priority - Layout & Responsive
- Minimum 16px body text on mobile
- No horizontal scroll on any viewport
- Test at: 375px, 768px, 1024px, 1440px

### Medium Priority - Typography
- Line height 1.5-1.75 for body text
- Line length 65-75 characters max
- Font pairing: Inter (headings + body) for this project

### Icons & Visual Elements
| Do | Don't |
|----|-------|
| Use `@phosphor-icons/react` (consistent set) | Mix icon libraries |
| SVG icons only | Emojis as UI icons |
| Fixed viewBox (24x24) | Random icon sizes |
| Stable hover states (color/opacity) | Scale transforms that shift layout |

**Icon Import Pattern**:
```tsx
import { Icon } from "@phosphor-icons/react"
<Icon size={24} weight="regular" />
// Weights: thin, light, regular, bold, fill, duotone
```

### DO NOT OVERUSE TESTIMONIALS
**Testimonials are NOT required on every page.** Only add testimonials where they serve a clear purpose:

| Page Type | Testimonials? | Reasoning |
|-----------|---------------|-----------|
| Homepage | Yes | Social proof for new visitors |
| Case Studies | Yes | The whole point |
| Pricing | Maybe | Can help with conversion |
| Feature pages | Sparingly | Only if directly relevant to feature |
| SDK/Docs pages | No | Developers want code, not quotes |
| Legal pages | No | Obviously not |
| Compare pages | Maybe | Only competitor switcher quotes |

**Rule**: If you're adding testimonials just to "fill space" - DON'T. Leave the page shorter and more focused.

### Pre-Delivery Checklist
- [ ] No emojis as icons
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide visual feedback
- [ ] Transitions are 150-300ms
- [ ] Focus states visible for keyboard nav
- [ ] Light mode text has sufficient contrast
- [ ] No horizontal scroll on mobile
- [ ] `prefers-reduced-motion` respected
- [ ] Testimonials only where actually needed (not on every page)

---

## Critical Issues to Address

### 1. TEMPLATE COMPONENTS NOT USED
Ralph created all pages using the SAME generic pattern instead of using the rich components from `/templates/achromatic-template/`:

**Template components that EXIST but were IGNORED**:
- `hero.tsx` - Has tabs, animated illustration, dashed grid lines
- `story-timeline.tsx` - Timeline visualization
- `story-team.tsx` - Team grid with photos
- `story-values.tsx` - Values grid
- `story-vision.tsx` - Vision section
- `careers-positions.tsx` - Job positions list
- `careers-benefits.tsx` - Benefits grid
- `contact.tsx` - Contact form
- `problem.tsx` - Problem statement section
- `solution.tsx` - Solution showcase

**Template PAGES that EXIST**:
- `/story/page.tsx` - Uses StoryHero, StoryTimeline, StoryValues, StoryVision, StoryTeam
- `/careers/page.tsx` - Uses story sections + CareersPositions, CareersBenefits
- `/contact/page.tsx` - Uses Contact section
- `/pricing/page.tsx` - Uses PricingHero, PricingFAQ

### 2. Layout Variety Problem
All Ralph pages use the SAME centered hero pattern:
```tsx
<div className="max-w-4xl mx-auto text-center">
```

But the template hero.tsx has:
- HeroPill announcement badge
- HeroIllustration with UnderlinedTabs (5 feature tabs)
- MainDashedGridLines visual decoration
- Animated motion effects

Original adapty.io uses DIFFERENT layouts per page:
- `/for-app-owners`: Split hero (text left, large image right)
- `/paywall-builder`: Centered with video demo below
- `/sdk`: Centered with SDK selector grid below
- `/for-indie`: Split with startup callout and decorative arrows
- `/compare/revenuecat`: Comparison table hero

### 3. Missing Page-Specific Elements
Each page has unique interactive elements that are missing:
- Code tabs (SDK page) - Template has UnderlinedTabs component
- Comparison tables (Compare pages)
- Video embeds (Paywall Builder)
- Inline testimonials (mid-page quotes)
- SDK platform selector grid
- Template carousels
- G2 award badges

### 4. Per-Page Debug Menus
Currently there's ONE global debug menu. Each page needs its OWN debug menu that only shows sections relevant to that page.

---

## Per-Page Task Breakdown

### /for-app-owners
**Current**: Centered hero, generic features, generic testimonials
**Original**: Split hero with image, alternating feature blocks, inline testimonials, FunnelFox promo, role cards

**Tasks**:
1. Change hero to split layout (text left, large image right)
2. Add alternating feature blocks (left/right image placement)
3. Add inline testimonial component (mid-page quote with photo)
4. Add FunnelFox cross-sell callout section
5. Add role cards section ("We're here for your team")
6. Create page-specific debug menu with variants for each section

**Sections Order**:
- ForAppOwnersHero (split variant)
- FeatureBlocks (alternating)
- InlineTestimonial
- AccessRights
- FunnelFoxCallout
- RoleCards
- Logos
- TestimonialsCarousel
- Stats
- CaseStudiesCarousel
- LearnMoreLinks
- CTA

---

### /paywall-builder
**Current**: Centered hero, customization section, features, testimonials
**Original**: Hero with video demo, stats counters, interactive paywall preview, template carousel, G2 awards

**Tasks**:
1. Add video demo section after hero
2. Add stats section with animated counters ($13M, 50K+, etc.)
3. Create interactive paywall customization preview
4. Add template carousel (horizontal scroll)
5. Add G2 awards section
6. Create page-specific debug menu

**Sections Order**:
- PaywallBuilderHero
- VideoDemo
- StatsCounters
- PaywallCustomizationPreview
- FeatureGrid (8 feature blocks)
- TemplateCarousel
- Stats
- CaseStudiesCarousel
- G2Awards
- RelatedLinks
- CTA

---

### /paywall-ab-testing
**Current**: Centered hero, features, testimonials
**Original**: Hero with prediction image, A/B/C testing visual, inline testimonials, metrics cloud, ML-powered section

**Tasks**:
1. Add "Predicted Winner" image to hero
2. Add A/B/C testing supported section with visual
3. Add inline testimonial (Smitten quote mid-page)
4. Add "Auto metric calculation" section with metrics cloud
5. Add "Powered by machine learning" section
6. Add "Start and stop test at any time" section
7. Create page-specific debug menu

---

### /sdk
**Current**: Centered hero, SDK features, testimonials
**Original**: SDK platform selector grid, code tabs (5 languages), world map CDN, inline testimonials

**Tasks**:
1. Add SDK platform selector grid (10 platforms with icons)
2. Add code block with language tabs (Swift, Kotlin, React Native, Flutter, Unity)
3. Add GitHub badge ("100% Open Source")
4. Add world map CDN visualization
5. Add inline testimonials (Locals, Bickster)
6. Create page-specific debug menu

**Sections Order**:
- SDKHero
- SDKPlatformGrid
- CodeBlockWithTabs
- WorldMapCDN
- FeatureAlternating (sync, verification, data lake)
- Stats
- CaseStudiesCarousel
- LearnMoreLinks
- CTA

---

### /for-indie
**Current**: Centered hero, features, testimonials
**Original**: Split hero, startup plan callout with decorative arrows, community links (Discord, Telegram), role cards

**Tasks**:
1. Add startup plan callout with decorative arrow graphics
2. Add community links section (Discord, Telegram channels)
3. Add email reports section
4. Add role cards at bottom
5. Create page-specific debug menu

---

### /onboarding-builder
**Current**: Centered hero, features, FAQ
**Original**: Video preview hero, tab-based feature navigation (5 tabs), case study callout

**Tasks**:
1. Add video preview to hero
2. Create tab-based feature navigation (Drag-and-drop, Personalization, A/B testing, Analytics, Localization)
3. Add case study callout section
4. Create page-specific debug menu

---

### /compare/revenuecat
**Current**: Centered hero, comparison component, FAQ
**Original**: Large comparison table with icons, SDK code tabs, migration mapping, detailed feature comparison

**Tasks**:
1. Improve comparison table with checkmark/X/partial icons
2. Add SDK code tabs section (5 languages)
3. Add migration mapping table
4. Improve FAQ with migration-specific questions
5. Create page-specific debug menu

---

### /integrations
**Current**: Hero, grid
**Original**: Integration categories, search/filter, detailed integration cards

**Tasks**:
1. Add integration category tabs
2. Add search/filter functionality
3. Improve integration cards with more detail
4. Create page-specific debug menu

---

### /pricing
**Current**: Hero, comparison, FAQ
**Original**: Plan comparison cards, feature matrix, startup program callout, FAQ

**Tasks**:
1. Review and improve pricing cards layout
2. Add startup program callout
3. Ensure FAQ is pricing-specific
4. Create page-specific debug menu

---

## Navigation Links Fix

### Files to Update
1. **`components/marketing-links.tsx`** - Contains MENU_LINKS and FOOTER_LINKS
2. **`lib/menu-data.ts`** - Contains PRODUCT_TABS, SOLUTION_ITEMS, SDK_ITEMS, etc.

### URL Mapping (External -> Internal)
These pages EXIST locally and should use internal routes:

| External URL | Internal Route |
|--------------|----------------|
| `https://adapty.io/sdk/` | `/sdk` |
| `https://adapty.io/paywall-builder/` | `/paywall-builder` |
| `https://adapty.io/paywall-ab-testing/` | `/paywall-ab-testing` |
| `https://adapty.io/onboarding-builder/` | `/onboarding-builder` |
| `https://adapty.io/for-marketers/` | `/for-marketers` |
| `https://adapty.io/for-developers/` | `/for-developers` |
| `https://adapty.io/for-app-owners/` | `/for-app-owners` |
| `https://adapty.io/for-indie/` | `/for-indie` |
| `https://adapty.io/pricing/` | `/pricing` |
| `https://adapty.io/integrations/` | `/integrations` |
| `https://adapty.io/refund-saver/` | `/refund-saver` |
| `https://adapty.io/fallback-paywalls/` | `/fallback-paywalls` |
| `https://adapty.io/ltv-analytics/` | `/ltv-analytics` |
| `https://adapty.io/predictive-analytics/` | `/predictive-analytics` |
| `https://adapty.io/revenue-analytics/` | `/revenue-growth` |
| `https://adapty.io/careers/` | `/careers` |
| `https://adapty.io/contact/` | `/contact` |
| `https://adapty.io/about/` | `/story` |
| `https://adapty.io/case-studies/` | `/case-studies` |
| `https://adapty.io/clients/` | `/case-studies` |
| `https://adapty.io/terms/` | `/terms-of-use` |
| `https://adapty.io/privacy/` | `/privacy-policy` |
| `https://adapty.io/cookies/` | `/cookie-policy` |
| `https://adapty.io/paywall-library/` | `/paywall-library` |
| `https://adapty.io/apple-fiscal-calendar/` | `/apple-fiscal-calendar` |
| `https://adapty.io/schedule-demo/` | `/schedule-demo` |
| `https://adapty.io/compare/revenuecat/` | `/compare/revenuecat` |
| `https://adapty.io/compare/qonversion/` | `/compare/qonversion` |
| `https://adapty.io/compare/superwall/` | `/compare/superwall` |
| `https://adapty.io/compare/purchasely/` | `/compare/purchasely` |

### URLs to Keep External
These should remain external (no local page exists):
- `https://docs.adapty.io/*` - Documentation site
- `https://status.adapty.io/` - Status page
- `https://app.adapty.io/*` - App dashboard
- `https://adapty.io/blog/*` - Blog (if not local)
- `https://adapty.io/webinars/*` - External content
- `https://adapty.io/community/*` - External community

### Implementation Steps
1. In `marketing-links.tsx`:
   - Update `MENU_LINKS` array - change href values
   - Update `FOOTER_LINKS` array - change href values
   - Keep `external: true` only for truly external links

2. In `lib/menu-data.ts`:
   - Update `PRODUCT_TABS` object
   - Update `SOLUTION_ITEMS` array
   - Update `MOBILE_MAIN_MENU` array
   - Update `MOBILE_SUBMENU_DATA` object
   - Update `COMPACT_*_LINKS` arrays

---

## Technical Requirements

### Import Conventions
- Use `~/` alias (NOT `@/`)
- Icons from `@phosphor-icons/react` (4,500+ icons, 6 weights)
- UI components from `@workspace/ui/components/*`

### Component Patterns
```tsx
// Section wrapper
<GridSection className="...">
  <SectionBackground />
  <div className="container">...</div>
</GridSection>

// Animation wrapper
<BlurFade delay={0.1}>
  <Content />
</BlurFade>
```

### Per-Page Debug Menu Pattern
Each page should have its own debug context that only manages sections on that page:
```tsx
// Example: /for-app-owners/page.tsx
const FOR_APP_OWNERS_SECTIONS = {
  hero: ['split', 'centered'],
  features: ['alternating', 'grid'],
  testimonials: ['inline', 'carousel', 'off'],
  // etc.
}
```

---

## Priority Order

1. **HIGH**: Vastly improve section block variety (3 thought through slick and animated variants per section per page)
2. **HIGH**: Add layout variety to hero sections
3. **MEDIUM**: Add page-specific interactive elements (code tabs, comparison tables)
4. **MEDIUM**: Add inline testimonials
5. **LOW**: Per-page debug menus
6. **LOW**: Visual polish (animations, hover states)
