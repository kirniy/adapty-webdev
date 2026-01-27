# ROUND 2 & 3 REQUIREMENTS - Master Reference

## END GOAL (By End of Round 3)
**The main page should be UNRECOGNIZABLE from current state.**
- AAA Linear-quality
- Ultra impressive, ultra tasteful
- Flawless logic and consistency
- Every micro-detail considered

---

## WEB REFERENCE (kimi-web-reference/)

**Location**: `/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/kimi-web-reference/app/`
**Running at**: http://localhost:3012

### What to STUDY from it:
- Modal implementation (excellent - better than ours)
- Component structure
- Animation patterns
- Layout approaches

### What to AVOID from it:
- Multi-color approach (too many colors)
- Taking design cues from original Adapty colors
- We want MONOCHROME + Purple accent only

**Kimi should study this reference itself and adapt good parts.**

---

## SPECIFIC MICRO-INTERACTIONS REQUIRED

### 1. Chevron Animation on Button Hover
When hovering over a button with a chevron icon, the chevron should:
- Move slightly to the right (2-3px)
- Smooth transition (150ms ease-out)
- Return on mouse leave

```tsx
// Example implementation
<button className="group">
  Learn more
  <ChevronRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
</button>
```

### 2. Consistent Corner Radii
**MUST be consistent across entire site:**
- Small elements (tags, badges): 6px
- Buttons: 8px (rounded-lg)
- Cards: 16-20px (rounded-2xl)
- Modals: 20-24px (rounded-2xl)

### 3. Hero Section Load Animation
**From Video 1** - Hero elements animate in on page load:
- Background layers fade in first
- Main heading fades up (y: 20 → 0, opacity: 0 → 1)
- Subheading follows (stagger delay 0.1s)
- CTA buttons follow (stagger delay 0.2s)
- Product screenshot fades in last (stagger delay 0.3s)

```tsx
// Staggered animation example
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

### 4. Tasteful Micro-animations (SUBTLE)
- Card hover: 2px lift max, border opacity increase
- Button press: scale(0.98)
- Link underline: animates from left to right
- Modal: scale 0.96 → 1 with 200ms ease-out
- NO bouncy animations
- NO large travel distances
- NO flashy effects

---

## LINEAR WEBSITE STUDY POINTS

Study linear.app directly for:

1. **Exact animation timing** - How fast do things animate?
2. **Easing curves** - What easing does Linear use?
3. **Hover states** - Exactly how do elements respond?
4. **Typography** - Exact font sizes, weights, tracking
5. **Spacing rhythm** - Section padding, element margins
6. **Color usage** - How they use subtle grays
7. **Separator patterns** - T-patterns, divider lines

---

## CONTENT PARITY (adapty.io)

Must have EXACT same content as adapty.io:
- All testimonials (quotes, names, companies, photos)
- Feature descriptions (exact wording)
- Stats and numbers
- Integration logos
- FAQ content
- Everything

**But delivered in OUR design system:**
- Light theme
- Adapty purple (#6720FF) as primary accent
- Monochrome palette (grays + purple)
- Linear-inspired layout and interactions

---

## SUCCESS CRITERIA

By end of Round 3:

1. **Visually**: Looks like a AAA product site (Linear-tier)
2. **Animation**: Every interaction feels inevitable, not flashy
3. **Consistency**: Same corner radii, same spacing, same colors throughout
4. **Content**: Full parity with adapty.io
5. **Mobile**: Perfect on all screen sizes
6. **Logic**: Every element has purpose, nothing arbitrary
7. **Polish**: No rough edges, no placeholder content, no bugs

**Test**: Show to someone who knows Linear - they should say "this feels premium"

---

## VIDEOS TO REFERENCE

1. `tempvideo/linearmainpage1.mp4` - Hero animation, page load sequence
2. `tempvideo/linearmainpage2.mp4` - Feature cards, modal behavior
3. `tempvideo/linearmainpage3.mp4` - T-separators, more features

---

---

## ROUND 1 ASSESSMENT (COMPLETED)

### What Kimi Accomplished
- Created comprehensive design system documentation in `linear-analysis/`
- Implemented typography scale (H1 48-56px, H2 40-48px, semibold 600)
- Updated section spacing to py-24 lg:py-32
- Created `CardModal` component with Linear animation specs (scale 0.96->1, 200ms)
- Created `t-separator-section.tsx` component (not yet integrated)
- Applied consistent border radius system (cards 20px, modals 16-20px, buttons 8px)
- Added micro-animations (2px hover lift, 150ms duration)
- Fixed mobile responsiveness
- Added reduced motion support

### Issues Found and Fixed by Claude
1. **Card hover cropping** - Changed `overflow-hidden` to `overflow-x-hidden` on main
2. **ValuePropsSection fake modal** - Removed non-functional onClick and plus button
3. **Build lock** - Cleared stale .next/lock file

### Issues Remaining for Round 2

#### CRITICAL
1. **T-Separator not integrated** - Component exists but not used on homepage
2. **Carousel layout wrong** - Cards should bleed off-screen like Linear:
   - Initially: gap on LEFT, 4th card partially visible on RIGHT
   - After navigation: cards slide, eventually gap on RIGHT
   - This creates the "infinite scroll" feel
3. **ValuePropsSection needs modals** - Currently static cards, should open modals like Linear

#### HIGH PRIORITY
4. **Hero load animation** - Elements should stagger-animate on page load
5. **Chevron animation** - Buttons with chevrons need hover animation
6. **Study kimi-web-reference modals** - Better than current implementation

#### MEDIUM PRIORITY
7. **Content parity audit** - Verify exact content match with adapty.io
8. **Color consistency** - Ensure monochrome + purple only (no kimi-web-reference colors)

---

## ROUND 2 FOCUS (UPDATED)

### Must Fix First
1. **Carousel layout** - Implement Linear's asymmetric scrolling:
   ```
   Initial state:
   [gap] [card1] [card2] [card3] [card4...]
                                    ↑ bleeding off screen

   After scroll right:
   [...card1] [card2] [card3] [card4] [gap]
        ↑ exiting left
   ```

2. **Integrate T-separator** - Use `TSeparatorSection` component on homepage

3. **Add modals to ValuePropsSection** - Convert to use `ModalCardData` and `CardModal`

### Then Address
4. Hero staggered load animation
5. Chevron animations on buttons
6. Study and adapt kimi-web-reference modal patterns
7. Content parity pass

---

## ROUND 3 FOCUS

1. Final polish
2. Mobile perfection
3. Animation timing refinement
4. Typography and spacing audit
5. Remove any remaining rough edges
6. Final content check

---

*This document should be included in every Kimi prompt to maintain continuity.*
