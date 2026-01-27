# Linear-Quality Modals and Micro-Animations Implementation

## Overview
This document details the implementation of Linear-quality modals and micro-animations across the marketing site components.

---

## Modal System (features-linear-style.tsx)

### CardModal Component
Location: `/apps/marketing/components/sections/features-linear-style.tsx`

#### Animation Specifications
| Property | Enter | Exit |
|----------|-------|------|
| Scale | 0.96 → 1 | 1 → 0.98 |
| Opacity | 0 → 1 | 1 → 0 |
| Duration | 200ms | 150ms |
| Easing | [0.16, 1, 0.3, 1] (ease-out-expo) | [0.16, 1, 0.3, 1] |

#### Implementation
```tsx
const modalBackdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 }
};

const modalTransition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1]
};
```

#### Visual Design
- **Backdrop**: `bg-black/60 backdrop-blur-sm`
- **Container**: `bg-[#111111] rounded-2xl max-w-[680px]`
- **Border**: `border border-white/10`
- **Close Button**: Top-right position, circular, `bg-white/5 hover:bg-white/10`, X icon with 1.5px stroke

#### Features
- Escape key handling for closing
- Body scroll lock when open
- Portal-based rendering for proper z-index
- Reduced motion support via `useReducedMotion()`

---

## Micro-Animations

### 1. Card Hover Effects

#### ValuePropsSection Cards
Location: `/apps/marketing/components/sections/features-linear-style.tsx`

```tsx
<motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
  className="... transition-colors duration-150 ease-out cursor-pointer"
>
```

**Specs:**
- Transform: `translateY(-2px)`
- Duration: 150ms
- Easing: ease-out
- NO scale transform (complies with "never scale > 1.02")

#### Modal Cards (CardCarousel)
```tsx
<motion.div
  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
  className="... transition-colors duration-150 ease-out"
>
```

#### Integration Cards
Location: `/apps/marketing/components/sections/integrations-grid.tsx`

```tsx
<motion.div
  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>
  <Link className="... active:scale-[0.98] ...">
```

**Changes Made:**
- Removed spring physics (replaced with simple ease-out)
- Removed scale transform (was 1.02, now disabled)
- Reduced translateY from -4px to -2px
- Reduced duration from spring-based to fixed 150ms

### 2. Button Hover Effects

#### SquircleButton
Location: `/apps/marketing/components/sections/features-linear-style.tsx`

```tsx
const className = cn(
  '...',
  'hover:bg-muted hover:border-border/80',
  'transition-colors duration-150 ease-out',
  'active:scale-[0.98]'
);
```

**Specs:**
- Animation: Color transition only (no movement)
- Duration: 150ms
- Active state: `scale(0.98)`

#### SDK Badges & Event Badges
Location: `/apps/marketing/components/sections/integrations-grid.tsx`

```tsx
// SDK Badge
<motion.div
  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>
  <Link className="... active:scale-[0.98] ...">
```

**Specs:**
- Lift: `translateY(-2px)` on hover
- Duration: 150ms
- Active: `scale(0.98)`
- Color transition: 150ms ease-out

### 3. Plus/Chevron Icon Buttons

```tsx
<span
  className={cn(
    '...',
    'transition-colors duration-150 ease-out',
    'active:scale-[0.98]'
  )}
>
```

**Changes:**
- Removed `transition-all` (reduces GPU load)
- Changed to `transition-colors` only
- Added `active:scale-[0.98]` for press feedback
- Duration: 150ms

---

## Accessibility

### Reduced Motion Support
All animations respect `useReducedMotion()` from framer-motion:

```tsx
const shouldReduceMotion = useReducedMotion();

<motion.div
  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>
```

When reduced motion is preferred:
- Hover animations are disabled
- Modal animations use instant transitions

---

## Anti-Patterns Fixed

| Before | After | Reason |
|--------|-------|--------|
| `scale: 1.02` on hover | Removed scale | Never use scale > 1.02 |
| `translateY(-4px)` | `translateY(-2px)` | Never use translateY > 3px |
| Spring physics | Simple ease-out | Linear uses subtle, not bouncy |
| `transition-all` | `transition-colors` | Better performance |
| 200ms card hover | 150ms | Faster feels more responsive |
| `whileTap` spring | `active:scale-[0.98]` | CSS-only, no JS overhead |

---

## Sections Updated

1. **features-linear-style.tsx**
   - CardModal component (Linear-quality modal)
   - ModalCard component
   - ValuePropsSection cards
   - SquircleButton
   - Plus/chevron icon buttons

2. **integrations-grid.tsx**
   - IntegrationCard
   - SDKBadge
   - EventBadge

---

## Key Principles Applied

1. ✅ **Fast animations**: 200ms max for UI
2. ✅ **Minimal movement**: 2px hover lift max
3. ✅ **No bouncy springs**: Linear uses subtle, purposeful motion
4. ✅ **Scale constraints**: Never exceed 1.02
5. ✅ **Color transitions**: 150ms for hover states
6. ✅ **Active states**: scale(0.98) for tactile feedback
7. ✅ **Reduced motion**: Full support for accessibility

---

## Testing Checklist

- [ ] Modal opens with scale 0.96 → 1, 200ms
- [ ] Modal closes with scale 1 → 0.98, 150ms
- [ ] Backdrop has blur and correct opacity
- [ ] Cards lift 2px on hover
- [ ] Buttons have color-only transitions
- [ ] Active states show scale(0.98)
- [ ] Escape key closes modal
- [ ] Click outside closes modal
- [ ] Reduced motion disables animations

---

## Related Files

- `/apps/marketing/components/sections/features-linear-style.tsx`
- `/apps/marketing/components/sections/integrations-grid.tsx`
- `/linear-analysis/DESIGN-SYSTEM.md`
