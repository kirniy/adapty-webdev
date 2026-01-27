# KIMI ROUND 3 - Final Polish to "Unrecognizable" Quality

## CONTEXT
Rounds 1 and 2 are complete. The foundation is solid. Round 3 is about the FINAL 20% that separates "good" from "Linear-level AAA quality."

The goal: **The homepage should be UNRECOGNIZABLE from where we started.**

## YOUR WORKING DIRECTORY
```
/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/
```

## REFERENCE VIDEOS
Study these for animation timing and interaction patterns:
- `tempvideo/linearmainpage1.mp4`
- `tempvideo/linearmainpage2.mp4`
- `tempvideo/linearmainpage3.mp4`

## ROUND 3 FOCUS AREAS

### 1. ANIMATION TIMING PERFECTION

**Hero Sequence Refinement**
- Current: Basic staggered delays (0.1s, 0.2s, 0.3s, 0.4s)
- Linear uses: Faster initial elements, slower product image reveal
- Adjust: Background 0ms, Badge 50ms, Title 100ms, Subtitle 150ms, Buttons 200ms, Product 400ms
- Add subtle scale on product image: `scale: 0.98 -> 1` with 600ms duration

**Card Hover States**
- Cards should lift on hover: `translateY: -4px` (not -8px, subtle is better)
- Shadow should intensify: `shadow-md -> shadow-lg`
- Transition: 200ms with `ease-out` (not ease-in-out)
- Border should lighten: `border-white/10 -> border-white/15`

**Modal Animations**
Check current modal open/close feels snappy. Linear uses:
```tsx
// Modal open
scale: [0.96, 1]
opacity: [0, 1]
duration: 200ms
ease: [0.16, 1, 0.3, 1] // ease-out-expo
```

### 2. MOBILE PERFECTION

**Carousel on Mobile**
- Touch swipe must be smooth (check momentum)
- Hide scrollbar completely on all browsers
- Snap to card centers: `scroll-snap-type: x mandatory`
- Cards should be `scroll-snap-align: start`

**Hero on Mobile**
- Title should wrap elegantly (no orphan words)
- Buttons should stack vertically below 400px
- Trust logos should scroll horizontally if needed

**Section Spacing on Mobile**
- Desktop: `py-24` (96px)
- Tablet: `py-20` (80px)
- Mobile: `py-16` (64px)
- Verify all sections follow this pattern

### 3. TYPOGRAPHY AUDIT

**Heading Hierarchy**
- H1 (Hero): `text-4xl sm:text-5xl lg:text-6xl` - CHECK
- H2 (Sections): Should all be `text-3xl sm:text-4xl lg:text-5xl`
- H3 (Cards): Should all be `text-xl sm:text-2xl`
- Ensure `tracking-tight` on all headings

**Text Color Consistency**
- Primary text: `text-foreground` or explicit `text-white` on dark sections
- Secondary text: `text-muted-foreground` or `text-zinc-400`
- Never use `text-gray-*` (use zinc for consistency)

**Line Heights**
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)
- Small text: `leading-normal` (1.5)

### 4. SPACING AUDIT

**Section Spacing Consistency**
All major sections should use identical padding:
```tsx
className="py-24 lg:py-32"
```

**Content Width**
- Main container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Wide sections (carousel): Can break out with viewport tricks
- All section headers should align with `max-w-6xl`

**Card Gaps**
- Card grids: `gap-4 sm:gap-6`
- Feature lists: `gap-3 sm:gap-4`
- Ensure consistency across all card sections

### 5. VISUAL POLISH

**Border Consistency**
All cards/containers should use:
- Border: `border border-white/10` (or `border-border`)
- Border radius: `rounded-[20px]` for cards, `rounded-[24px]` for modals
- No mixed radius values

**Background Consistency**
- Card backgrounds: `bg-white/[0.03]` or `bg-muted/30`
- Section backgrounds: Use `SectionBackground` component
- No random gray values

**Plus Button Indicators**
Cards with modals should have consistent `+` indicators:
```tsx
<div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
  <span className="text-white/60 text-sm">+</span>
</div>
```

### 6. INTERACTION REFINEMENTS

**Button Hover States**
All buttons should have:
- Background shift on hover
- No jarring color changes
- 150ms transition duration
- Active state (slight scale down)

**Link Underlines**
Text links should use:
```tsx
className="underline underline-offset-4 hover:text-primary transition-colors duration-150"
```

**Focus States**
All interactive elements need visible focus rings:
```tsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
```

### 7. CONTENT QUALITY CHECK

**Value Props Section**
- Verify all 3 cards have compelling modal content
- Stats should be impressive and specific
- Links should point to real pages

**Integrations Section**
- Verify all integration cards work
- Modal content should be detailed
- Icons should be crisp

**Remove Any Placeholders**
- Search for "Lorem", "TODO", "FIXME"
- Replace any placeholder text
- Remove any debug console.logs

### 8. PERFORMANCE CHECKS

**Animation Performance**
- All animations should use `transform` and `opacity` only
- No `layout` animations on large elements
- Add `will-change-transform` to frequently animated elements

**Image Optimization**
- All images should use `next/image`
- Add appropriate `sizes` prop
- Use `priority` for above-fold images

## FILES TO MODIFY

1. **apps/marketing/components/sections/hero.tsx**
   - Refine animation timing
   - Mobile responsiveness
   - Add scale to product image animation

2. **apps/marketing/components/sections/features-linear-style.tsx**
   - Card hover consistency
   - Modal animation timing
   - Plus button styling
   - Carousel mobile UX

3. **apps/marketing/components/sections/testimonials-editorial.tsx**
   - Card hover states
   - Typography consistency

4. **apps/marketing/components/sections/faq.tsx**
   - Accordion animation timing
   - Typography audit

5. **apps/marketing/components/sections/cta.tsx**
   - Button styling
   - Typography

6. **apps/marketing/app/page.tsx**
   - Section spacing verification

## VERIFICATION

After each change:
1. Run `pnpm --filter marketing build` to verify no errors
2. Check localhost:3011 in browser
3. Test mobile view (Chrome DevTools)
4. Verify animations are 60fps smooth

## SUCCESS CRITERIA FOR ROUND 3

- [ ] All animations feel "Linear smooth" (snappy, not sluggish)
- [ ] Mobile experience is flawless
- [ ] Typography is perfectly consistent
- [ ] Spacing follows the system exactly
- [ ] All cards have identical border/radius/bg treatment
- [ ] No placeholder content remains
- [ ] Focus states work for accessibility
- [ ] Build passes with no warnings
- [ ] The page is UNRECOGNIZABLE from the starting point

## OUTPUT

Create `linear-analysis/ROUND3-CHANGES.md` documenting:
1. Every file modified
2. Every animation timing changed
3. Every spacing/typography fix
4. Before/after comparisons where relevant
5. Final quality assessment

---
START NOW. This is the final round. Make it perfect.
