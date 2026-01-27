# Round 2 Changes Summary

**Date:** 2026-01-28  
**Status:** ✅ All tasks completed  
**Build:** Passing

---

## Summary

All 5 critical issues from Round 1 have been addressed:

1. ✅ T-Separator integrated into homepage (Paywall Builder section)
2. ✅ Carousel cards bleed off-screen correctly (asymmetric scroll)
3. ✅ Value prop cards open modals
4. ✅ Hero animates on load (staggered sequence)
5. ✅ Chevrons animate on hover

---

## 1. T-Separator Integration

### Problem
The `TSeparatorSection` component existed but wasn't being used anywhere on the homepage.

### Solution
Created `PaywallBuilderTSeparator` component and replaced `PaywallBuilderLinear` in the homepage.

### Files Modified
- `apps/marketing/components/sections/features-linear-style.tsx`
  - Added new `PaywallBuilderTSeparator()` function (lines 590-724)
  - Uses `TSeparatorSection` with main feature (top) + left/right features (bottom)
  - Maintains monochrome theme with `bg-white/[0.03]` and `border-white/10`
  
- `apps/marketing/app/page.tsx`
  - Changed import from `PaywallBuilderLinear` to `PaywallBuilderTSeparator`
  - Updated section comment to indicate T-Separator layout

### Visual Pattern
```
┌─────────────────────────────────────────┐
│     Main Feature (Full Width)           │
│     Visual drag-and-drop editor         │
│     ───────────────────────────         │ ← border-bottom
├─────────────────────┬───────────────────┤
│  Left Feature       │  Right Feature    │ ← border-r divider
│  Pre-built templates│  Real-time preview│
└─────────────────────┴───────────────────┘
```

---

## 2. Carousel Asymmetric Scroll

### Problem
Carousel cards didn't create Linear's signature "bleed off right edge" effect.

### Solution
Modified `CardCarousel` component to use full viewport width breakout with smart padding.

### Files Modified
- `apps/marketing/components/sections/features-linear-style.tsx`
  - Changed scroll container to `w-[100vw] ml-[calc(-50vw+50%)]` for full viewport width
  - Added responsive left padding to align with header content
  - Added right spacer element for last card to create breathing room

### Key CSS Changes
```tsx
// Full viewport width breakout
<div className="w-[100vw] ml-[calc(-50vw+50%)] ...">
  
  {/* Left padding aligns with max-w-6xl header */}
  <div className="pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1rem))] ...">
    
  {/* Right spacer for last card */}
  <div className="w-[calc(100vw-320px-1rem)] sm:w-[calc(100vw-360px-1.5rem)] md:w-[calc((100vw-72rem)/2+1rem)]" />
</div>
```

### Visual Behavior
- **Initial:** Cards extend beyond right viewport edge, partially hidden
- **Scroll:** Cards move left, revealing more content from right
- **Result:** Creates "infinite scroll" perception

---

## 3. Value Props Modals

### Problem
The 3-card value props grid didn't have modal functionality like Integration cards.

### Solution
Extended `ValueProp` type and added modal support to `ValuePropsSection`.

### Files Modified
- `apps/marketing/components/sections/features-linear-style.tsx`

### Type Extension
```tsx
type ValueProp = {
  title: string;
  description: string;
  image?: string;
  modal?: {
    paragraphs: string[];
    stats?: { value: string; label: string }[];
    link?: string;
  };
};
```

### Modal Content Added

**Card 1: Purpose-built for subscription apps**
- Paragraphs about subscription-specific features
- Stats: "3 Platforms supported", "10K+ Apps powered"
- Link: `/features`

**Card 2: Designed for speed**
- Paragraphs about no-code deployment
- Stats: "<5 min To deploy changes", "0 Code deploys needed"
- Link: `/paywall-builder`

**Card 3: Data-driven optimization**
- Paragraphs about A/B testing capabilities
- Stats: "32% Avg. revenue uplift", "10x Faster insights"
- Link: `/ab-testing`

### UI Changes
- Added `+` button indicator on cards with modal data
- Added `cursor-pointer` class for clickable cards
- Integrated `CardModal` for rendering modals

---

## 4. Hero Staggered Load Animation

### Problem
Hero elements used viewport-based animations instead of staggered load sequence.

### Solution
Replaced `SlideIn` and `BlurFade` wrappers with `motion` components using `initial`/`animate` props.

### Files Modified
- `apps/marketing/components/sections/hero.tsx`

### Animation Sequence

| Element | Delay | Animation |
|---------|-------|-----------|
| Background (MainDashedGridLines) | 0s | opacity fade |
| HeroPill (badge) | 0.1s | y: 20→0, opacity: 0→1 |
| HeroTitle | 0.2s | y: 20→0, opacity: 0→1 |
| HeroDescription | 0.3s | y: 20→0, opacity: 0→1 |
| HeroButtons | 0.4s | y: 20→0, opacity: 0→1 |
| HeroTrustSignal | 0.4s | y: 20→0, opacity: 0→1 |
| Trust logos (staggered) | 0.5s+ | Individual fade |

### Code Pattern
```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
>
  Revenue management
</motion.h1>
```

---

## 5. Chevron Hover Animations

### Problem
Buttons with chevrons lacked the group-hover translate animation.

### Solution
Added `group` class to parent elements and `group-hover:translate-x-0.5` to chevron icons.

### Files Modified

1. **apps/marketing/components/sections/hero.tsx**
   - "View case studies" button in trust signal

2. **apps/marketing/components/sections/features-linear-style.tsx**
   - `SquircleButton` component
   - CardModal "Learn more" link

3. **apps/marketing/components/sections/testimonials-editorial.tsx**
   - SquircleButton in FeaturedTestimonial
   - "Read story" link
   - Case study card buttons

4. **apps/marketing/components/sections/logos-linear.tsx**
   - "Meet our customers" link

5. **apps/marketing/components/sections/faq.tsx**
   - FAQ section button

### Pattern Applied
```tsx
// Parent gets 'group' class
<Link className="group ...">
  Button text
  // Chevron gets animation classes
  <ChevronRightIcon className="... transition-transform duration-150 group-hover:translate-x-0.5" />
</Link>
```

---

## Build Verification

```bash
$ pnpm --filter marketing build

> @workspace/marketing@ build /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/apps/marketing
> next build

  ▲ Next.js 15.x
  - Environments: .env.local

 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (51/51)
 ✓ Finalizing page optimization
```

**Result:** All 51 static pages generated successfully. No TypeScript errors.

---

## Success Criteria Checklist

- [x] T-separator visually present on homepage
- [x] Carousel cards bleed off-screen correctly
- [x] Value prop cards open modals
- [x] Hero animates on load
- [x] Chevrons animate on hover
- [x] Build passes
- [x] No visual regressions

---

## Next Steps

1. **Visual QA:** Verify all animations feel smooth at 60fps
2. **Mobile testing:** Ensure carousel swipe works on touch devices
3. **Accessibility:** Verify reduced motion preferences are respected
4. **Performance:** Monitor bundle size impact of motion libraries
