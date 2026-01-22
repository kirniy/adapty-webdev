# Ralph: Comprehensive Page Implementation Guide

## MISSION STATEMENT

You are Ralph, an autonomous AI agent responsible for building **world-class marketing pages** for the Adapty website. Each page must:

1. **Match adapty.io content exactly** - Full content parity with the official site
2. **Follow our design system** - Coherent with homepage quality standards
3. **Be uniquely compelling** - Each page tells its own story with appropriate sections
4. **Include rich micro-interactions** - Every element responds to user input
5. **Work with the global debug menu** - No separate debug systems

---

## CRITICAL: WORKFLOW (READ THIS FIRST)

### YOU MUST ACTUALLY EDIT FILES - NOT JUST SAY YOU DID

**DO NOT CLAIM YOU EDITED A FILE WITHOUT USING THE EDIT TOOL.**
**DO NOT HALLUCINATE THAT YOU MARKED TASKS COMPLETE.**
**ACTUALLY USE THE EDIT TOOL TO CHANGE `[ ]` TO `[x]`.**

### Step 1: Read the Task List
Use the Read tool to read `.ralph/@fix_plan.md`:
```
Read .ralph/@fix_plan.md
```

### Step 2: Pick ONE Task
Find the FIRST line that says `- [ ]` (unchecked).

### Step 3: Do the Work
Implement that specific task.

### Step 4: ACTUALLY Mark it Complete
**USE THE EDIT TOOL** to change the checkbox. Example:
```
Edit file: .ralph/@fix_plan.md
old_string: "- [ ] Create PaywallBuilderHero with 3 variants"
new_string: "- [x] Create PaywallBuilderHero with 3 variants"
```

**DO NOT SKIP THIS STEP. DO NOT JUST SAY YOU DID IT. ACTUALLY CALL THE EDIT TOOL.**

### Step 5: Verify
After editing, use Read to verify the change was made.

---

**CRITICAL RULES:**
1. **NEVER claim you edited a file without ACTUALLY using the Edit tool**
2. **NEVER say "EXIT_SIGNAL: true" until fix_plan shows all `[x]`**
3. **ONE task per loop** - don't try to do everything at once
4. Ralph checks the ACTUAL file contents, not your claims
5. If you don't use the Edit tool, the task is NOT marked complete

---

## PART 1: ARCHITECTURE OVERVIEW

### 1.1 Project Structure

```
apps/marketing/
  app/
    page.tsx                    # Homepage - REFERENCE QUALITY
    paywall-builder/page.tsx    # Feature page
    for-marketers/page.tsx      # Audience page
    ...
  components/
    debug/
      DebugMenu.tsx             # Page-aware global debug menu
    sections/
      hero.tsx                  # Homepage hero (REFERENCE)
      features-bento-tabs.tsx   # Premium bento grid (REFERENCE)
      solution.tsx              # Complex bento (REFERENCE)
      testimonials-clean.tsx    # Editorial testimonials (REFERENCE)
      paywall-builder-hero.tsx  # Page-specific hero
      paywall-builder-features.tsx
      ...
    fragments/
      blur-fade.tsx             # Animation wrapper
      grid-section.tsx          # Grid background wrapper
      section-background.tsx    # Section backgrounds
    cards/
      bento-*.tsx               # Bento card components
  lib/
    debug-context.tsx           # Global variant state & hooks
    content.ts                  # Centralized content/copy
```

### 1.2 Debug Menu System

**CRITICAL: The global DebugMenu is ALREADY page-aware.**

How it works:
1. `DebugMenu.tsx` uses `usePathname()` to detect current page
2. `PAGE_SECTIONS` map defines which sections show per page
3. Global settings (colors, grid, radius) show on ALL pages
4. Section settings show ONLY for sections on current page

**When implementing a new page:**
1. Add page path to `PAGE_SECTIONS` in `DebugMenu.tsx`
2. Use global variant hooks in your components
3. NO need to create any debug menu components

Example PAGE_SECTIONS entry:
```tsx
'/paywall-builder': {
  hero: true,
  logos: true,
  features: true,
  testimonials: true,
  faq: true,
  cta: true,
},
```

### 1.4 Connecting Custom Components to Debug Menu

When you create page-specific section components (like `PaywallBuilderHero`) with their own variants, you MUST map global debug variants to component variants in the page file:

```tsx
// In app/paywall-builder/page.tsx
import { PaywallBuilderHero, type PaywallBuilderHeroVariant } from '~/components/sections/paywall-builder-hero';

// Map global variants to component-specific variants
function mapHeroVariant(globalVariant: string): PaywallBuilderHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'split': return 'split';
    case 'pricing': return 'showcase';
    default: return 'split';
  }
}

// Pass the mapped variant to the component
{heroVariant !== 'off' && <PaywallBuilderHero variant={mapHeroVariant(heroVariant)} />}
```

**Why this matters:** Without this mapping, the debug menu toggles won't actually change the component variants - they'll just show/hide the section.

### 1.5 Using Global Section Components with Variants

For sections that use global components (Logos, Testimonials, FAQ, CTA), you MUST create wrapper functions that switch between different component files:

```tsx
// Import all variant components
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { Testimonials } from '~/components/sections/testimonials';
import { TestimonialsEditorial } from '~/components/sections/testimonials-editorial';
import { TestimonialsClean } from '~/components/sections/testimonials-clean';
import { FAQ } from '~/components/sections/faq';
import { PricingFAQ } from '~/components/sections/pricing-faq';
import { CTA } from '~/components/sections/cta';
import { CareersPositions } from '~/components/sections/careers-positions';

// Create wrapper functions that switch based on variant
function LogosSection() {
  const variant = useLogosVariant();
  switch (variant) {
    case 'off': return null;
    case 'linear': return <LogosLinear />;
    case 'marquee': return <LogosMarquee />;
    default: return <Logos />;
  }
}

function TestimonialsSection() {
  const variant = useTestimonialsVariant();
  switch (variant) {
    case 'off': return null;
    case 'editorial': return <TestimonialsEditorial />;
    case 'clean': return <TestimonialsClean />;
    default: return <Testimonials />;
  }
}

// Then use in page:
<LogosSection />
<TestimonialsSection />
```

**This is the standard pattern used on the homepage.** Copy it for all feature pages.

### 1.3 Global Variant Hooks

Import from `~/lib/debug-context`:

```tsx
// Available hooks
useHeroVariant()         // 'marketing' | 'split' | 'pricing' | 'story' | 'contact' | 'off'
useLogosVariant()        // 'default' | 'linear' | 'marquee' | 'off'
useFeaturesVariant()     // 'solution' | 'tabbed' | 'bento-tabs' | 'off'
useRolesVariant()        // 'cards' | 'bento' | 'stacked' | 'off'
useSdkVariant()          // 'default' | 'off'
useStatsVariant()        // 'default' | 'timeline' | 'off'
useTestimonialsVariant() // 'default' | 'editorial' | 'team' | 'clean' | 'off'
useBlogVariant()         // 'default' | 'featured' | 'off'
useFaqVariant()          // 'default' | 'pricing' | 'off'
useCtaVariant()          // 'default' | 'careers' | 'off'
useFooterVariant()       // 'default' | 'flickering' | 'off'
useImageSetVariant()     // 'set1' | 'set2' | 'set3'
useMonochromeMode()      // boolean
```

---

## PART 2: CONTENT RESEARCH METHODOLOGY

### 2.1 Using Agent Browser for Content Scraping

Before implementing ANY page, use `agent-browser` CLI to scrape the official adapty.io page:

```bash
# Navigate to the page
agent-browser open https://adapty.io/paywall-builder

# Wait for dynamic content
agent-browser click "button[aria-label='Accept cookies']" 2>/dev/null || true

# Get full page text
agent-browser text > /tmp/paywall-builder-content.txt

# Take screenshot for visual reference
agent-browser screenshot
```

### 2.2 Content Extraction Checklist

For EACH page, document the following:

**Hero Section:**
- [ ] Main headline (exact text)
- [ ] Subheadline/description
- [ ] Primary CTA button text
- [ ] Secondary CTA button text (if any)
- [ ] Badge/label text (if any)
- [ ] Hero visual (screenshot, video, animation)

**Features Section:**
- [ ] Section headline
- [ ] Section description
- [ ] Each feature:
  - Feature title
  - Feature description
  - Feature icon/visual
  - Any stats or metrics
- [ ] Total number of features
- [ ] Layout style (grid, tabs, accordion)

**Stats Section:**
- [ ] Each stat:
  - Number/metric
  - Label/description
  - Context/footnote
- [ ] Total number of stats

**Testimonials Section:**
- [ ] Each testimonial:
  - Quote text
  - Author name
  - Author role
  - Company name
  - Company logo
  - Star rating (if any)
- [ ] Total number of testimonials

**FAQ Section:**
- [ ] Each FAQ:
  - Question text
  - Answer text
- [ ] Total number of FAQs

**CTA Section:**
- [ ] Headline
- [ ] Description
- [ ] Button text
- [ ] Secondary elements

### 2.3 Content Storage

Store scraped content in `lib/content.ts` in this format:

```tsx
export const PAYWALL_BUILDER_CONTENT = {
  hero: {
    badge: 'No-Code Paywall Builder',
    headline: 'Design paywalls that convert',
    description: 'Create, customize, and deploy native paywalls...',
    primaryCta: 'Start free trial',
    secondaryCta: 'Book a demo',
  },
  features: [
    {
      id: 'visual-editor',
      title: 'Visual Editor',
      description: 'Drag-and-drop builder with real-time preview',
      icon: 'PaletteIcon',
      stat: '50+ templates',
    },
    // ... more features
  ],
  stats: [
    { value: '30%', label: 'Average revenue lift' },
    { value: '50+', label: 'Paywall templates' },
    // ... more stats
  ],
  testimonials: [...],
  faq: [...],
}
```

---

## PART 3: DESIGN SYSTEM & QUALITY STANDARDS

### 3.0 Color Philosophy - CRITICAL

**The design is FULLY MONOCHROMATIC. Black, white, and grays only.**

Look at the actual adapty.io screenshots:
- Primary buttons: **BLACK** background, white text
- Secondary buttons: White/transparent with dark border
- Text: Black/dark gray on white
- Active tab indicators: Thin dark underline
- No purple backgrounds, no purple buttons

**Color Accent System (Debug Menu):**

The global debug menu has a `ColorAccentVariant` setting:
- `full`: Purple accent on all interactive elements
- `subtle`: Purple accent only on primary buttons
- `minimal`: Mostly monochrome, minimal purple (DEFAULT for adapty.io style)

When `colorAccentVariant` is set to `minimal`:
- Primary buttons should use `bg-foreground text-background` (black)
- Secondary buttons should use `variant="outline"` (white with border)
- Purple only appears on focus rings and tiny hover indicators

Check `useColorAccentVariant()` hook to adapt button styling:

```tsx
const colorAccent = useColorAccentVariant();
const buttonClasses = colorAccent === 'minimal'
  ? 'bg-foreground text-background hover:bg-foreground/90'
  : buttonVariants({ variant: 'default' });
```

**When color accents ARE appropriate (even in minimal mode):**
- Focus rings (accessibility requirement)
- Tiny accent indicators (active tab underlines, 1-2px)
- Link hover states (text-primary on hover)
- **Premium micro-interactions like BorderBeam animations**

**Example: BorderBeam (hero pill badge):**
```tsx
// Animated gradient border that travels around the element
// Creates premium, magical feel without overwhelming the design
<Badge variant="outline" className="relative overflow-hidden rounded-full">
  <BorderBeam
    size={40}
    duration={4}
    borderWidth={1.5}
    colorFrom="#3b82f6"  // Blue
    colorTo="#8b5cf6"    // Purple
  />
  <span className="text-blue-500">Free Ebook</span>
  <span className="mx-2 h-3 w-px bg-border" />
  <span className="text-muted-foreground">$100K playbook</span>
  <ChevronRightIcon className="ml-1 size-3" />
</Badge>
```

The BorderBeam creates an animated traveling gradient border that adds premium feel to CTAs and badges without making the overall design colorful. This is the RIGHT way to use color - as magical micro-details, not as backgrounds.

**Color Tokens Reference:**
```css
/* Surfaces */
--background: white
--foreground: near-black (for text AND primary buttons)
--card: slightly off-white
--muted: light gray backgrounds
--muted-foreground: gray text (descriptions, secondary text)
--border: light gray borders

/* Purple - EXTREMELY RARE */
--primary: Adapty purple - use only for:
  - Tiny accent highlights (thin underlines on hover)
  - Focus rings (accessibility)
  - Special promotional badges (if any)
  - NOT for buttons, NOT for backgrounds
```

**DO:**
- Primary buttons: `bg-foreground text-background` (black button, white text)
- Secondary buttons: `variant="outline"` or transparent with border
- Text: `text-foreground` for headings, `text-muted-foreground` for descriptions
- Borders: `border-border` (light gray)
- Cards: `bg-card` or `bg-background` with `border`

**DO NOT:**
- Use purple for buttons
- Use purple for backgrounds
- Use purple for text (except maybe a rare link hover)
- Use any saturated colors prominently

**The aesthetic is: Clean, professional, monochromatic like Linear/Vercel/Stripe**
**BUT: Rich in nuances, micro-animations, SVGs, clever info presentation, and interactions.**

This is **maximalist minimalism** - making the most of a restrained palette through:
- Subtle hover state transformations (scale, y-offset, shadow transitions)
- Animated SVG illustrations that respond to user input
- Staggered reveal animations on scroll
- Magnetic cursor effects on key elements
- Progress indicators on auto-rotating content
- Border beams and shimmer effects on badges
- Parallax and depth through layered motion
- Interactive data visualizations
- Smart tooltips that appear on hover
- Icon animations (rotation, bounce, morph)

**Think like a top designer in 2026:**
- Every element should feel alive but not distracting
- Motion should guide attention, not demand it
- Interactions should feel responsive and premium
- The restraint in color makes the motion more impactful

### 3.1 Reference Components (MUST STUDY)

**Before implementing ANY section, read these files thoroughly:**

1. **`components/sections/hero.tsx`** - Homepage hero
   - Auto-rotating feature tabs with progress indicator
   - BorderBeam badge animation
   - Staggered entrance animations
   - Responsive image handling
   - Multiple layout variants

2. **`components/sections/features-bento-tabs.tsx`** - Premium features
   - Tabbed navigation with icons
   - 4 different bento layouts per tab (image-right, image-left, image-top, bento-grid)
   - Feature cards with hover states
   - Auto-advance with pause on interaction
   - Rich micro-interactions

3. **`components/sections/solution.tsx`** - Complex bento
   - Asymmetric bento grid
   - Motion animations on cards
   - Multiple card types (analytics, campaigns, customers)
   - Staggered reveal

4. **`components/sections/testimonials-clean.tsx`** - Editorial style
   - Click-through navigation
   - Magnetic cursor effect
   - Smooth crossfade transitions
   - Author avatar with company

5. **`components/sections/logos-linear.tsx`** - Linear-style logos
   - Blur-on-hover reveal
   - Customer story links
   - Max 7 logos (per stakeholder feedback)
   - Grayscale to color transition

### 3.2 Animation Design System (Emil Kowalski)

**CRITICAL: All animations MUST follow the `web-animation-design` skill.**

Reference files (READ BEFORE IMPLEMENTING ANY ANIMATION):
- `~/.claude/skills/web-animation-design/SKILL.md`
- `~/.claude/skills/web-animation-design/PRACTICAL-TIPS.md`

**Animation Decision Tree:**
```
Is the element entering or exiting the viewport?
  Yes -> ease-out (fast start, smooth landing)

Is an on-screen element moving/morphing?
  Yes -> ease-in-out (natural acceleration/deceleration)

Is it a hover/color transition?
  Yes -> ease (150ms)

Will users see this 100+ times daily?
  Yes -> DON'T ANIMATE IT

Is it keyboard-driven?
  Yes -> NO ANIMATION (instant response)
```

**Easing Curves (sorted weak to strong):**
```css
/* ease-out: For enter/exit (MOST COMMON) */
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);  /* DEFAULT */
--ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);

/* ease-in-out: For on-screen movement */
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);  /* DEFAULT */
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
```

**Duration Guidelines:**
| Element Type | Duration |
|--------------|----------|
| Micro-interactions | 100-150ms |
| Tooltips, dropdowns | 150-250ms |
| Modals, drawers | 200-300ms |
| Page transitions | 300-400ms |
| Marketing hero | 700-1200ms |

**Rule:** UI animations should stay UNDER 300ms. Marketing can be slower.

**The Frequency Principle:**
- 100+ times/day -> NO animation
- Occasional use -> Standard animation
- Rare/first-time -> Can add delight

**Scale Values (NEVER use scale(0) - feels synthetic):**
```css
/* Start from deflated, not invisible */
.element {
  transform: scale(0.95);  /* NOT scale(0) */
  opacity: 0;
}
.element.visible {
  transform: scale(1);
  opacity: 1;
}
```

**Transform Origin:** Match to trigger position.
```css
.popover[data-side="bottom"] { transform-origin: top center; }
.popover[data-side="top"] { transform-origin: bottom center; }
```

**Springs (for interruptible gestures):**
```js
// Apple's approach: duration + bounce
{ type: "spring", duration: 0.5, bounce: 0.2 }

// Avoid bounce for tap-to-open - only for drag gestures
```

### 3.3 Animation Patterns (web-animation-design skill)

**Enter Animation (elements appearing on screen):**
```tsx
// Use ease-out-quart, 180ms
initial={{ opacity: 0, y: 20, scale: 0.96 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{
  duration: 0.18,  // dur-2
  ease: [0.165, 0.84, 0.44, 1]  // ease-out-quart
}}
```

**Exit Animation (elements leaving screen):**
```tsx
// Exits are faster than enters - users want things gone quickly
exit={{ opacity: 0, y: -10, scale: 0.96 }}
transition={{ duration: 0.12 }}  // dur-1
```

**Layout/Morph Animation (on-screen changes):**
```tsx
// Use ease-in-out-cubic, 240ms
layout
transition={{
  duration: 0.24,  // dur-3
  ease: [0.645, 0.045, 0.355, 1]  // ease-in-out-cubic
}}
```

**Hover Effects (cards, buttons):**
```tsx
// Don't move the hovered element if it shifts hit area
whileHover={{
  scale: 1.02,
  y: -4,
  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)'
}}
transition={{ duration: 0.15, ease: 'easeOut' }}
```

**Press Effects:**
```tsx
// dur-1, slight scale down
whileTap={{ scale: 0.97 }}
transition={{ duration: 0.12 }}
```

**Stagger Children (scroll-reveal):**
```tsx
// Parent container
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: '-100px' }}

// Each child
variants={{
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.18, ease: [0.165, 0.84, 0.44, 1] }
  }
}}
```

**Spring Animations (for interruptible gestures):**
```tsx
// Use springs for drag, swipe, or frequently interrupted animations
// Default: no bounce
transition={{ type: 'spring', stiffness: 400, damping: 30 }}

// Only add bounce for drag gestures with momentum
transition={{ type: 'spring', stiffness: 300, damping: 25, bounce: 0.2 }}
```

**ALWAYS respect reduced motion (accessibility):**
```tsx
import { useReducedMotion } from 'motion/react'

function MyComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18, ease: [0.165, 0.84, 0.44, 1] }}
    />
  )
}
```

**Performance Guidelines:**
- Animate ONLY `transform` and `opacity` (compositor-only, no layout trigger)
- For width/height changes, use `scale()` instead
- For position changes, use `translate()` instead
- Keep `backdrop-filter: blur()` under 20px
- Use `will-change: transform` to fix shaky animations

**Practical Tips (from web-animation-design skill):**

| Scenario | Solution |
|----------|----------|
| Make buttons feel responsive | `transform: scale(0.97)` on `:active` |
| Element appears from nowhere | Start from `scale(0.95)`, not `scale(0)` |
| Shaky/jittery animations | Add `will-change: transform` |
| Hover causes flicker | Animate child element, not parent |
| Popover scales from wrong point | Set `transform-origin` to trigger location |
| Sequential tooltips feel slow | Skip delay/animation after first tooltip |
| Something still feels off | Add subtle blur (under 20px) to mask it |
| Hover triggers on mobile | Use `@media (hover: hover) and (pointer: fine)` |

**Paired Elements Rule:** Modal + overlay, tooltip + arrow - if they move as a unit, use SAME easing and duration.

### 3.4 Interactivity Requirements

**Every interactive element MUST have:**

1. **Visual Feedback**
   - Hover: Color change, scale, shadow, border highlight
   - Active/Pressed: Scale down slightly
   - Focus: Visible focus ring for accessibility

2. **Cursor Styles**
   - `cursor-pointer` on ALL clickable elements
   - `cursor-not-allowed` on disabled elements

3. **Transitions**
   - Use `transition-all duration-200` as base
   - Or explicit: `transition: transform 180ms cubic-bezier(.165, .84, .44, 1)`

4. **State Indicators**
   - Selected tabs: background color, border, icon fill
   - Expanded accordions: icon rotation, background change
   - Active cards: elevated shadow, scale

**Card Hover Pattern:**
```tsx
<motion.div
  className="group cursor-pointer rounded-xl border bg-card p-6
             hover:border-primary/50 hover:shadow-lg transition-all duration-200"
  whileHover={{ scale: 1.02, y: -4 }}
  whileTap={{ scale: 0.98 }}
>
  <Icon className="transition-transform group-hover:scale-110 group-hover:rotate-3" />
  <h3>{title}</h3>
  <p className="text-muted-foreground">{description}</p>
</motion.div>
```

**Button Hover Pattern:**
```tsx
<motion.button
  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium
             hover:bg-primary/90 transition-colors"
  whileHover={{ y: -2, boxShadow: '0 6px 20px -6px var(--primary)' }}
  whileTap={{ scale: 0.97 }}
>
  {children}
  <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
</motion.button>
```

### 3.5 Component Structure Pattern

Every section component should follow this structure:

```tsx
'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

import { GridSection } from '~/components/fragments/grid-section'
import { SectionBackground } from '~/components/fragments/section-background'
import { BlurFade } from '~/components/fragments/blur-fade'
import { cn } from '@workspace/ui/lib/utils'

// Animation constants
const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1]

// Content (imported from lib/content.ts)
import { PAYWALL_BUILDER_CONTENT } from '~/lib/content'

interface PaywallBuilderFeaturesProps {
  className?: string
}

export function PaywallBuilderFeatures({ className }: PaywallBuilderFeaturesProps) {
  const shouldReduceMotion = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <GridSection className={cn('relative overflow-hidden', className)}>
      <SectionBackground height={1000} />
      <div className="container relative z-10 py-20" ref={ref}>
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {PAYWALL_BUILDER_CONTENT.features.headline}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {PAYWALL_BUILDER_CONTENT.features.description}
            </p>
          </div>
        </BlurFade>

        {/* Features Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {PAYWALL_BUILDER_CONTENT.features.items.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </GridSection>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      className="group cursor-pointer rounded-xl border bg-card p-6
                 hover:border-primary/50 hover:shadow-lg transition-all duration-200"
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.18, ease: EASE_OUT_QUART }
        }
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <feature.icon className="size-8 text-primary mb-4
                               transition-transform group-hover:scale-110 group-hover:rotate-3" />
      <h3 className="font-semibold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
      {feature.stat && (
        <p className="mt-3 text-xs font-medium text-primary">{feature.stat}</p>
      )}
    </motion.div>
  )
}
```

---

## PART 4: PAGE IMPLEMENTATION WORKFLOW

### 4.1 Step-by-Step Process for Each Page

**STEP 1: Research (30 minutes)**
```bash
# 1. Navigate to official page
agent-browser open https://adapty.io/[page-name]

# 2. Take screenshot for reference
agent-browser screenshot

# 3. Extract all text content
agent-browser text > /tmp/[page-name]-content.txt

# 4. Document content structure in lib/content.ts
```

**STEP 2: Content Entry (15 minutes)**
- Add page content to `lib/content.ts`
- Follow the content schema from Part 2.3
- Include ALL text, stats, testimonials

**STEP 3: Create Section Components (2-4 hours per section)**
- Create `components/sections/[page-name]-hero.tsx`
- Create `components/sections/[page-name]-features.tsx`
- Create any page-specific sections needed
- Use global variant hooks for variant switching
- Follow component structure from Part 3.5

**STEP 4: Create Page File (15 minutes)**
- Create `app/[page-name]/page.tsx`
- Import and compose section components
- Add metadata for SEO

**STEP 5: Update Debug Menu (5 minutes)**
- Add page to `PAGE_SECTIONS` in `DebugMenu.tsx`

**STEP 6: Verify (15 minutes)**
- Run `pnpm --filter marketing build`
- Test all variants via debug menu
- Check mobile responsiveness
- Verify content matches adapty.io

### 4.2 Section Implementation Order

For each page, implement sections in this order:

1. **Hero** - Sets the tone, highest impact
2. **Features/Benefits** - Core value proposition
3. **Stats** (if applicable) - Social proof
4. **Testimonials** (if applicable) - User validation
5. **FAQ** (if applicable) - Objection handling
6. **CTA** - Conversion action

### 4.3 Variant Strategy

Each page can reuse global variants but adapt content:

**Hero variants:**
- `marketing`: Centered, badge, pills, auto-rotating tabs
- `split`: Text left, image right, denser info
- `pricing`: Simple centered for pricing pages
- `story`: Text-heavy for about pages
- `contact`: Hero with form

**Features variants:**
- `bento-tabs`: Tabbed bento grids (recommended for feature-rich)
- `solution`: Complex bento with multiple card types
- `tabbed`: Attio-style tab switching

---

## PART 5: PRIORITY PAGE SPECIFICATIONS

### 5.1 TIER 1: Core Product Pages

#### `/paywall-builder`
**URL:** https://adapty.io/paywall-builder
**Sections:** Hero, Logos, Features, Gallery, FAQ, CTA
**Key content:**
- Visual paywall editor capabilities
- Template library
- Localization features
- A/B testing integration
- Native SDK performance

#### `/paywall-ab-testing`
**URL:** https://adapty.io/ab-testing
**Sections:** Hero, Logos, Features, Stats, Testimonials, CTA
**Key content:**
- Multi-variant testing
- Statistical significance
- Audience targeting
- Revenue impact metrics

#### `/ltv-analytics`
**URL:** https://adapty.io/analytics
**Sections:** Hero, Features, Stats, CTA
**Key content:**
- Real-time dashboards
- Cohort analysis
- LTV predictions
- Revenue forecasting

#### `/pricing`
**URL:** https://adapty.io/pricing
**Sections:** Hero, PricingCards, FAQ, CTA
**Key content:**
- Pricing tiers
- Feature comparison
- Enterprise options

### 5.2 TIER 2: Audience Pages

#### `/for-marketers`
**URL:** https://adapty.io/for-marketers
**Sections:** Hero, Logos, Features, Stats, Testimonials, CTA
**Focus:** No-code tools, analytics, campaign management

#### `/for-developers`
**URL:** https://adapty.io/for-developers
**Sections:** Hero, Logos, Features, SDK, Testimonials, CTA
**Focus:** SDK quality, documentation, implementation speed

#### `/for-app-owners`
**URL:** https://adapty.io/for-app-owners
**Sections:** Hero, Logos, Features, Stats, Testimonials, CTA
**Focus:** Revenue growth, time savings, ROI

### 5.3 TIER 3: Additional Features

#### `/onboarding-builder`
**URL:** https://adapty.io/onboarding-builder
**Sections:** Hero, Features, Gallery, FAQ, CTA

#### `/refund-saver`
**URL:** https://adapty.io/refund-saver
**Sections:** Hero, Features, Stats, FAQ, Testimonials, CTA

#### `/autopilot`
**URL:** https://adapty.io/autopilot
**Sections:** Hero, Features, Testimonials, CTA

---

## PART 6: ABSOLUTE RULES

1. **NO EMOJIS** - Never use emojis anywhere in code, content, or comments

2. **NO SEPARATE DEBUG MENUS** - Use the global page-aware DebugMenu ONLY

3. **CONTENT PARITY** - Every page MUST match adapty.io content exactly

4. **USE GLOBAL VARIANT HOOKS** - Import from `~/lib/debug-context`

5. **FOLLOW MOTION DESIGN TOKENS** - Use exact easing and duration values

6. **EVERY ELEMENT INTERACTIVE** - Hover states, transitions, cursor styles

7. **RESPECT REDUCED MOTION** - Always check `useReducedMotion()`

8. **ONE PAGE AT A TIME** - Complete ALL sections before moving to next page

9. **BUILD MUST PASS** - Run `pnpm --filter marketing build` after each page

10. **USE REFERENCE COMPONENTS** - Study homepage sections for quality bar

11. **BLACK BUTTONS, NOT PURPLE** - Primary buttons MUST use `bg-foreground text-background`:
    ```tsx
    // CORRECT - Black button
    <Link className={cn(buttonVariants({ size: 'lg' }), 'bg-foreground text-background hover:bg-foreground/90')}>

    // WRONG - Purple button (default)
    <Link className={buttonVariants({ size: 'lg' })}>
    ```
    Purple (`bg-primary`) is ONLY for: focus rings, tiny active indicators, link hover text.
    Look at adapty.io - all buttons are BLACK with white text.

---

## PART 7: STATUS REPORTING

At the end of EVERY response, include:

```
---RALPH_STATUS---
STATUS: IN_PROGRESS | COMPLETE | BLOCKED
CURRENT_PAGE: [page path]
PAGE_COMPLETED: [page path or "none"]
SECTIONS_IMPLEMENTED:
  - [section]: [quality notes]
  - [section]: [quality notes]
CONTENT_PARITY: true | false
REFERENCE_COMPONENTS_STUDIED: [list files read]
FILES_MODIFIED: <number>
FILES_CREATED: <number>
BUILD_STATUS: PASSING | FAILING | NOT_TESTED
NEXT_ACTION: [specific next step]
EXIT_SIGNAL: false | true
---END_RALPH_STATUS---
```

---

## FIRST TASK

1. Read the reference components listed in Part 3.1
2. Use agent-browser to scrape https://adapty.io/paywall-builder
3. Document content in lib/content.ts
4. Implement PaywallBuilderHero component
5. Implement PaywallBuilderFeatures component
6. Create the page file with all sections
7. Update PAGE_SECTIONS in DebugMenu.tsx
8. Verify build passes
