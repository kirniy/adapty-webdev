# Changes Made - Round 1: Linear DNA Extraction

This document summarizes all changes made to transform the Adapty marketing site to match Linear's design quality.

---

## 1. DESIGN SYSTEM DOCUMENTATION

### Created: `linear-analysis/DESIGN-SYSTEM.md`
Comprehensive design system extracted from Linear.app homepage videos:
- Typography scale (exact sizes, weights, tracking)
- Spacing system (section padding, container widths)
- Border radius system (4 consistent values)
- Color system (backgrounds, borders, text)
- T-separator pattern specifications
- Modal animation specifications
- Animation timing guidelines

---

## 2. TYPOGRAPHY & SPACING UPDATES

### Modified Files:
- `apps/marketing/components/sections/hero.tsx`
- `apps/marketing/components/sections/features-linear-style.tsx`
- `apps/marketing/components/sections/faq-cards.tsx`
- `apps/marketing/components/sections/testimonials-clean.tsx`
- `apps/marketing/components/sections/cta.tsx`
- `apps/marketing/components/sections/sdk-code.tsx`

### Key Changes:
| Element | Before | After |
|---------|--------|-------|
| Hero title | text-3xl font-bold | text-4xl sm:text-5xl lg:text-6xl font-semibold |
| Section headings | Various sizes | text-4xl sm:text-5xl font-semibold tracking-tight |
| Body text | text-gray-600 | text-zinc-400 (60% opacity) |
| Section padding | py-12 lg:py-20 | py-24 lg:py-32 (96-128px) |
| Container | max-w-7xl | max-w-6xl (1200px) |

### Rules Applied:
- ✅ No font-bold (700) - only semibold (600) max
- ✅ No text blocks exceed 3 lines
- ✅ Tight tracking on headings (-0.02em)
- ✅ Consistent muted text color

---

## 3. MODAL SYSTEM IMPLEMENTATION

### Modified: `apps/marketing/components/sections/features-linear-style.tsx`

### Linear-Quality Modal Specs:
```tsx
// Animation
initial: { opacity: 0, scale: 0.96 }
animate: { opacity: 1, scale: 1 }
exit: { opacity: 0, scale: 0.98 }
transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }

// Backdrop
className="bg-black/60 backdrop-blur-sm"

// Modal container
className="bg-[#111111] rounded-2xl max-w-[680px]"
```

### Modal Features:
- Scale animation (0.96 → 1)
- Fast duration (200ms enter, 150ms exit)
- ease-out-expo easing
- Body scroll lock when open
- Escape key to close
- Click backdrop to close
- Portal rendering to document.body

---

## 4. MICRO-ANIMATIONS

### Card Hover Effects:
```tsx
<motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>
```
- ✅ 2px lift only (never more)
- ✅ 150ms duration
- ✅ Color transition on border

### Button States:
- Hover: Color change only, no movement
- Active: scale-[0.98] for press feedback
- Duration: 150ms

### Anti-Patterns Fixed:
- ❌ Removed scale transforms > 1.02
- ❌ Removed translateY > 3px
- ❌ Removed bouncy spring animations
- ❌ Removed animations > 300ms

---

## 5. T-SEPARATOR LAYOUT PATTERN

### Created: `apps/marketing/components/fragments/t-separator-section.tsx`

### Implementation:
```tsx
<TSeparatorSection
  mainFeature={<MainCard />}     // Full width, pb-8 border-b
  leftFeature={<LeftCard />}     // pt-8 pr-8 border-r
  rightFeature={<RightCard />}   // pt-8 pl-8
/>
```

### Specifications:
- Main feature: Full width with bottom border (border-white/10)
- Bottom grid: 2 columns with vertical divider
- Left: pt-8 pr-8 border-r border-white/10
- Right: pt-8 pl-8
- Responsive: Stacks vertically on mobile

---

## 6. MOBILE RESPONSIVENESS

### Modified Files:
- hero.tsx
- features-linear-style.tsx
- faq-cards.tsx
- testimonials-clean.tsx
- navbar.tsx
- footer.tsx

### Key Improvements:
- ✅ No horizontal scroll at 390px
- ✅ Touch targets minimum 44px (most 48px)
- ✅ Text readable at 16px minimum
- ✅ Proper stacking on mobile
- ✅ Responsive typography (text-4xl sm:text-5xl lg:text-6xl)

---

## 7. CONSISTENT BORDER RADIUS

### Applied Throughout:
| Element | Radius | Class |
|---------|--------|-------|
| Cards | 20px | rounded-[20px] |
| Modals | 16-20px | rounded-2xl |
| Buttons | 8px | rounded-lg |
| Tags/Badges | 6px | rounded-md |

---

## 8. REDUCED MOTION SUPPORT

All animations respect `useReducedMotion()`:
```tsx
const shouldReduceMotion = useReducedMotion();

<motion.div
  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
/>
```

---

## 9. FILES CREATED

### New Components:
- `apps/marketing/components/fragments/t-separator-section.tsx`

### Documentation:
- `linear-analysis/DESIGN-SYSTEM.md`
- `linear-analysis/CONTENT-INVENTORY.md`
- `linear-analysis/CHANGES-MADE.md` (this file)
- `linear-analysis/CHANGES-TYPOGRAPHY.md`
- `linear-analysis/CHANGES-ANIMATIONS.md`
- `linear-analysis/CHANGES-LAYOUT.md`
- `linear-analysis/CHANGES-MOBILE.md`

---

## 10. VERIFICATION CHECKLIST

- [x] Typography matches Linear scale
- [x] Spacing consistent (py-24 lg:py-32)
- [x] Border radius consistent (rounded-[20px] for cards)
- [x] Modal animations correct (scale 0.96 → 1, 200ms)
- [x] Micro-animations subtle (2px hover lift)
- [x] T-separator pattern implemented
- [x] Mobile responsive (no overflow at 390px)
- [x] Reduced motion support added
- [x] No text blocks > 3 lines
- [x] No font-bold (only semibold)

---

## 11. NEXT STEPS FOR ROUND 2

1. **Content parity** - Verify all content matches adapty.io exactly
2. **Visual assets** - Ensure product screenshots match style
3. **Performance** - Optimize images and animations
4. **Accessibility** - Full a11y audit
5. **Testing** - Cross-browser and device testing

---

*Round 1 Complete - Linear DNA extraction and implementation*
