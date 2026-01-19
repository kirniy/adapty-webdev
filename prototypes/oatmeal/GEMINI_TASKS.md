# Oatmeal Prototype - Variant-by-Variant Improvement Instructions

## Document for Gemini (Jan 19, 2026)

**Purpose**: This document contains EXACT improvement instructions for EACH VARIANT of each section, based on research from Linear, Vercel, Attio, and Stripe.

---

## Required Reading (DO NOT SKIP)

Before ANY work, read these skill documents:

| Skill | Path | Key Focus |
|-------|------|-----------|
| UI/UX Pro Max | `~/.claude/skills/ui-ux-pro-max/README.md` | 50 styles, 21 palettes, design rules |
| React Best Practices | `~/.claude/skills/react-best-practices/README.md` | Performance optimization patterns |
| UI Skills | `~/.claude/skills/ui-skills/README.md` | Tailwind defaults, motion/react |

---

## Design System Reference

```
Color System (OKLCH):
- Primary: olive-50 to olive-950
- Accent: adapty-500 (#6720FF)
- Background: cream/white tones

Typography:
- Font: Inter (display + body)
- Mono: JetBrains Mono
- Use text-balance for headings, text-pretty for body

Animation Rules:
- Library: motion/react
- Duration: 150-300ms
- Only animate: transform, opacity
- NEVER animate: width, height, margin, padding
```

---

## SECTION 1: HERO

**File**: `/src/components/sections/Hero.tsx`
**Variants**: `hero-variants/` folder

### Variant: `centered-demo`

**Current State**: Centered headline with full-width screenshot below

**Problem**: Feels empty, doesn't immediately show product value (per Sergey's feedback)

**Improvement Instructions**:
1. Add trust indicators below headline: "15,000+ apps | $2B+ revenue tracked | SOC 2 Certified"
2. Add small customer avatar row (like Linear) above or below CTA buttons
3. Ensure screenshot has browser chrome and slight perspective transform
4. Add subtle gradient orbs in background (adapty-100/20 + olive-100/30, blur-3xl)

**Reference Pattern (Linear)**:
```
[Headline - large, multi-line]
[Subtitle - concise value prop]
[Two CTAs: "Start building" + "Learn more"]
[Avatar row: small circular photos + "+1,000 teams"]
```

### Variant: `split-left`

**Current State**: Content left, visual right (AGREED DIRECTION)

**Problem**: Visual side may need more interactivity

**Improvement Instructions**:
1. LEFT SIDE: Keep headline, subtitle, CTAs
2. Add trust badges below CTAs (small logos or "Trusted by 15,000+ apps")
3. RIGHT SIDE: Product screenshot with ONE of these treatments:
   - Tabbed interface showing different product areas (like Vercel hero)
   - Animated dashboard preview (like Stripe)
   - Browser window with subtle float animation
4. Add grayscale-on-hover logo bar immediately below hero as transition to next section

**Reference Pattern (Vercel)**:
```
LEFT: "Build and deploy on the AI Cloud" + CTAs
RIGHT: Tabbed preview (AI Apps | Web Apps | Ecommerce | Marketing)
       Each tab shows different product state
```

**Reference Pattern (Attio)**:
```
TOP: Large testimonial quote as social proof
LEFT: "Customer relationship magic" + subtitle + CTAs
RIGHT: Full CRM interface screenshot (realistic, data-filled)
```

### Variant: `achromatic`

**Current State**: Tabbed illustration with split layout

**Improvement Instructions**:
1. Ensure tabs are VISIBLY CLICKABLE (per Sergey: "tabs must be much more noticeable")
2. Add visual indicator for active tab (underline, background change)
3. Tab content should show actual product states, not generic illustrations
4. Consider adding mini-animation when switching tabs (opacity + y-transform)

---

## SECTION 2: TRUSTED BY (Customer Logos)

**File**: `/src/components/sections/TrustedBy.tsx`

### Variant: `marquee`

**Current State**: Scrolling logos with grayscale-to-color on hover

**Problem**: Marquee doesn't let users find THEIR company/use case

**Improvement Instructions**:
1. REMOVE this variant entirely OR repurpose for "volume" display only
2. Marquee ONLY acceptable for showing: transaction counts, API calls, stats in motion
3. If keeping, add pause-on-hover that's more obvious

### Variant: `static-grid` (RECOMMENDED - Use Linear's approach)

**Current State**: 5-column grid with hover glow effects

**Improvement Instructions**:
1. Add BLUR EFFECT on hover for all OTHER logos (Linear's signature pattern)
2. Hovered logo should be in full color, sharp
3. Each logo should link to `/customers/{company}` page
4. Below logos, add trust indicators as pills:
   - "15,000+ apps worldwide"
   - "$2B+ revenue tracked"
   - "SOC 2 Compliant"
5. Simple header: "Powering the world's best apps" (not "Trusted Worldwide")

**Reference Pattern (Linear)**:
```
"Powering the world's best product teams.
From next-gen startups to established enterprises."

[Logo Grid - grayscale, BLUR on hover except hovered one]
[Link: "Meet our customers"]
```

**Code Pattern for Blur Effect**:
```tsx
// On logo hover, add to other logos:
className={cn(
  isAnyHovered && !isThisHovered && "blur-sm opacity-50",
  "transition-all duration-300"
)}
```

### Variant: `linear` (CREATE NEW if doesn't exist)

**Improvement Instructions**:
1. Copy Linear's exact approach:
   - Header + subheader
   - Logo grid (grayscale default)
   - On hover: hovered logo = full color + scale, others = blur
   - "Meet our customers" link at bottom
2. No glow effects, no decorative elements
3. Clean, minimal, functional

---

## SECTION 3: CORE FEATURES

**File**: `/src/components/sections/CoreFeatures.tsx`

### Variant: `zigzag`

**Current State**: Alternating left-right layout with screenshots

**Problem**: "Too basic, repeats current site" (per Sergey)

**Improvement Instructions**:
1. Add interactive elements to screenshots:
   - Hover to reveal detail callouts
   - Animated cursor showing feature in action
   - Mini-tabs within screenshot showing different states
2. Eyebrow should have line accent: `[--- Paywall Builder]`
3. Add micro-animation on scroll-into-view (not just fade)

### Variant: `tabbed-bento` (RECOMMENDED - Create if doesn't exist)

**Current State**: May not exist

**Improvement Instructions**:
1. Create tabbed interface at top: Analytics | Paywall Builder | A/B Testing | Onboarding
2. Each tab reveals a BENTO GRID specific to that product area
3. Bento cards should have:
   - Hover effects that "do something" (reveal data, animate state)
   - Small product screenshots or visualizations
   - Bold metric or headline
   - Short description (2 lines max)

**Reference Pattern (Attio)**:
```
[01] Powerful platform
/ item 1 of 4

"GTM at full throttle."

[Tabs: Automate | Deploy AI | Connect data | Reporting]
[Each tab shows different feature with workflow visualization]
```

**Reference Pattern (Vercel)**:
```
"Your product, delivered."
Security, speed, and AI included.

[Tabbed content: AI Apps | Web Apps | Ecommerce | Marketing | Platforms]
[Each shows relevant product preview with descriptive overlay]
```

### Variant: `bento` (if exists)

**Improvement Instructions**:
1. Cards should have HOVER EFFECTS that reveal more info
2. Consider using numbered sections like Attio: `[01] Analytics`, `[02] Paywalls`
3. Interactive cards > Static cards
4. Use adapty purple for accent elements, not full card backgrounds

---

## SECTION 4: STATS

**File**: `/src/components/sections/Stats.tsx`

### Variant: `cards`

**Current State**: 4-column grid with NumberTicker animation

**Improvement Instructions**:
1. Keep as-is if working well
2. Add subtle background texture or gradient
3. Ensure numbers are prominent (text-5xl minimum on desktop)
4. Consider adding visual icons above each stat (Phosphor icons, duotone weight)

### Variant: `inline`

**Current State**: Compact horizontal bar

**Improvement Instructions**:
1. Good for use as credibility stripe between sections
2. Ensure responsive wrapping on mobile
3. Keep styling minimal - this is supplementary content

### Variant: `graph` (if exists)

**Improvement Instructions**:
1. Remove if decorative chart adds no information
2. If chart shows real data trend, keep but simplify
3. Motion should be subtle scroll-triggered animation

---

## SECTION 5: TESTIMONIALS (HIGH PRIORITY)

**File**: `/src/components/sections/Testimonials.tsx`

### Variant: `editorial`

**Current State**: Magazine-style with large quote, scroll-based parallax

**Problem**: DATED per Sergey - "sticky stack approach is dated"

**Improvement Instructions**:
1. REMOVE ALL parallax/scroll-based effects
2. Keep the large quote format but simplify:
   - Feature ONE testimonial prominently
   - Large customer LOGO (primary)
   - Bold METRIC achieved (secondary): "+40% conversion"
   - Short quote (tertiary, 1-2 sentences)
   - Author attribution (small)
3. Remove animated gradient background
4. Remove decorative quote marks (or make very subtle)

**Target Layout**:
```
[Customer Logo - LARGE]
["+40% conversion in 3 months"]
["The no-code paywall builder saved us months..." - short]
[Author avatar | Name | Title at Company]
```

### Variant: `sticky-stack` (DELETE THIS VARIANT)

**Current State**: Cards stack on scroll

**Problem**: EXPLICITLY CALLED OUT AS DATED

**Improvement Instructions**:
1. DELETE this variant entirely
2. Replace with `clean-slider` variant (see below)

### Variant: `slider` (MODIFY HEAVILY)

**Current State**: Horizontal slider with navigation

**Problem**: Over-emphasized quote text, under-emphasized logo + metric

**Improvement Instructions**:
1. Restructure each slide:
   ```
   [LOGO - large, prominent, full color]
   [METRIC - bold, adapty purple: "+40% revenue"]
   [Quote - secondary, 2 lines max]
   [Author row - avatar, name, role]
   ```
2. Improve navigation buttons:
   - Use clear arrows (not abstract shapes)
   - Add subtle pagination dots
3. Remove decorative backgrounds
4. Smooth CSS scroll-snap, not motion library

**Reference Pattern (Stripe)**:
```
Customer stories with full-width images
[Company Logo]
[Read story: "Learn why BMW chose Stripe..."]
[Category pills at bottom]
```

### Variant: `metric-focused` (CREATE NEW)

**Improvement Instructions**:
1. Create simple grid layout (3 columns)
2. Each card structure:
   ```
   [Customer Logo - grayscale, 120px wide]
   [Metric - "3x faster iteration"]
   [Quote - 1 sentence max]
   [Learn more ->]
   ```
3. NO animation except subtle hover lift
4. Cards link to full case study pages

---

## SECTION 6: ROLE CARDS (HIGH PRIORITY)

**File**: `/src/components/sections/RoleCards.tsx`

### Variant: `cards`

**Current State**: Rich cards with images, tags, hover effects

**Problem**: "Too clunky with tags" (per Sergey)

**Improvement Instructions**:
1. REMOVE all tags/badges
2. Simplify card structure:
   ```
   [Role Icon or Illustration - small]
   [Role Title - "For Marketers"]
   [Single compelling sentence]
   [CTA: "Learn more ->"]
   ```
3. Reduce card padding and visual weight
4. Remove image section (or make much smaller)
5. Cards should "rhyme" with Feature block style

**Reference (WorkOS, Retool)**:
```
Clean role cards with:
- Subtle icon
- Clear title
- Single sentence value prop
- Link (not button)
```

### Variant: `tabs`

**Current State**: Interactive tabs showing one role at a time

**Improvement Instructions**:
1. Ensure tabs are clearly visible and clickable
2. Content area should show:
   - Role-specific headline
   - 3-4 bullet points (not paragraph text)
   - CTA to role-specific page
3. Consider showing mini-dashboard preview relevant to that role

### Variant: `minimal` (CREATE or MODIFY)

**Improvement Instructions**:
1. Simple horizontal layout: Icon | Title | One-liner | Arrow
2. No cards, just clean list items
3. Subtle separator between items
4. Hover shows arrow movement (translateX)

**Target Style**:
```
[Marketing icon] For Marketers   "Build and test paywalls without code"   ->
[Dev icon]      For Developers  "Integrate in hours, not weeks"          ->
[Growth icon]   For Growth      "Optimize with real-time A/B testing"    ->
```

---

## SECTION 7: SDK/CODE BLOCK

**File**: `/src/components/sections/SdkShowcase.tsx` (or similar)

### Current State: Unknown - AUDIT FIRST

**Research Findings**:

**Stripe Pattern**:
- Language tabs at top (JavaScript, Python, Ruby, etc.)
- Clean syntax highlighting
- Copy button
- Live preview of result below

**Vercel Pattern**:
- Framework tabs (AI SDK, Python, OpenAI HTTP)
- Numbered lines
- Clean monospace font
- Subtle animations on focus

### Improvement Instructions (All Variants):

1. MUST have platform tabs: Swift | Kotlin | React Native | Flutter | Unity
2. Syntax highlighting with theme matching site (olive tones for comments)
3. Copy button (top right of code block)
4. Show actual Adapty SDK code, not placeholder
5. Optional: Animated typing effect (SUBTLE, 150ms delay between chars)
6. Optional: Side-by-side with result preview

**Code Block Structure**:
```
[Platform Tabs]
[Code Block with syntax highlighting]
[Copy button]
[Optional: "See full documentation ->" link]
```

**Technical Requirements**:
- Use `react-syntax-highlighter` or similar
- Theme: dark code on light background OR light code on dark card
- Ensure proper line numbers
- Mobile: Horizontal scroll with fade indicators

---

## SECTION 8: INTEGRATIONS

**File**: `/src/components/sections/Integrations.tsx`

### Variant: `grid` (RECOMMENDED)

**Current State**: Clean grid with hover effects

**Improvement Instructions**:
1. Keep browsable grid - this is correct approach
2. FUNCTION OVER FORM - users need to find their integration
3. Add category filters at top (optional):
   - Analytics | Attribution | Push | Webhooks | All
4. Hover effect: subtle lift + border color change
5. Consider search input if >20 integrations

**DO NOT**:
- Use marquee/scrolling
- Add decorative effects that distract from logos
- Make cards too large

### Variant: `categories` (CREATE if doesn't exist)

**Improvement Instructions**:
1. Group integrations by category:
   ```
   Analytics
   [Amplitude] [Mixpanel] [Firebase] [Segment]

   Attribution
   [AppsFlyer] [Adjust] [Branch] [Singular]

   ...
   ```
2. Collapsible sections on mobile
3. Each logo should be identifiable at 32-40px height

### Variant: `marquee` (DELETE or REPURPOSE)

**Current State**: Scrolling integration logos

**Problem**: "Function over form - users want to FIND their integration"

**Improvement Instructions**:
1. DELETE this variant for integrations
2. Marquee ONLY acceptable for showing volume metrics, NOT for browsing content

---

## EXECUTION PRIORITY

1. **Testimonials** - Remove sticky stack, create metric-focused variant
2. **Role Cards** - Remove tags, simplify to minimal design
3. **Trusted By** - Implement Linear's blur-on-hover pattern
4. **Features** - Add tabbed bento variant
5. **Hero** - Improve split-left variant with interactivity
6. **SDK** - Add platform tabs and proper syntax highlighting
7. **Integrations** - Ensure grid is browsable, add categories
8. **Stats** - Minor polish only

---

## Quality Checklist

Before submitting ANY variant:

- [ ] No emojis used anywhere
- [ ] Colors use theme tokens (olive-*, adapty-*)
- [ ] Animations only on transform/opacity
- [ ] No sticky scroll or card stacking effects
- [ ] Function over form (except Hero)
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] Follows Sergey's feedback exactly

---

## Reference URLs

Study these BEFORE implementing:
- linear.app - Trusted By section, Feature tabs
- vercel.com - Hero tabs, Framework showcase
- attio.com - Numbered sections, Testimonial cards
- stripe.com - Code examples, Customer stories

---

*Document updated: Jan 19, 2026*
*Based on: Jan 16 feedback transcript + site research*
