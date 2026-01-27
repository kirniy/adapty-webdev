# KIMI ROUND 2 - Fix Issues from Round 1

## CONTEXT
Round 1 is complete. You created good documentation and made progress, but several critical issues remain unfixed.

## YOUR WORKING DIRECTORY
```
/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/
```

## CRITICAL ISSUES TO FIX (IN ORDER)

### 1. T-SEPARATOR NOT INTEGRATED
You created `apps/marketing/components/fragments/t-separator-section.tsx` but it's NOT being used anywhere.

**Task**: Integrate TSeparatorSection into the homepage. Use it for one of the feature sections (like PaywallBuilder or ABTesting) to create Linear's signature T-pattern layout.

### 2. CAROUSEL LAYOUT - LINEAR STYLE
The integration cards carousel needs to match Linear's asymmetric scroll:
- Cards should bleed off the RIGHT edge of the viewport initially
- When scrolling, cards exit LEFT, eventually leaving gap on RIGHT
- This creates the "infinite scroll" visual feel

Current implementation is close but needs refinement. Check `IntegrationsLinear` function in `features-linear-style.tsx`.

### 3. VALUE PROPS NEED MODALS
The `AdaptyValueProps` section (3-card grid at top) should open modals when clicked, like the Integration cards do.

**Task**:
- Extend the `ValueProp` type to include modal data (paragraphs, quotes, stats)
- Add `CardModal` rendering to `ValuePropsSection`
- Add proper modal content for each value prop

### 4. HERO STAGGERED LOAD ANIMATION
Hero elements should animate in sequence on page load:
1. Background fades in first
2. Heading fades up (y: 20 → 0, opacity: 0 → 1)
3. Subheading follows (delay 0.1s)
4. CTA buttons follow (delay 0.2s)
5. Product image fades in last (delay 0.3s)

Check `apps/marketing/components/sections/hero.tsx`

### 5. CHEVRON ANIMATION ON BUTTONS
All buttons with chevron/arrow icons need hover animation:
```tsx
<button className="group">
  Learn more
  <ChevronRight className="transition-transform duration-150 group-hover:translate-x-0.5" />
</button>
```

Search for all chevron buttons and add this pattern.

### 6. STUDY KIMI-WEB-REFERENCE MODALS
Location: `/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/kimi-web-reference/`

Study how modals work there - they have better implementation. Adapt good patterns but:
- DO NOT copy the multi-color approach
- Keep our monochrome + purple only theme

## REFERENCE DOCUMENTS
- `linear-analysis/DESIGN-SYSTEM.md` - Your design specs from Round 1
- `ROUND2-REQUIREMENTS.md` - Full requirements document
- `tempvideo/` - Linear website recordings to reference

## VERIFICATION
After each fix:
1. Run `pnpm --filter marketing build` to verify no errors
2. Check the dev server at localhost:3011

## SPAWN SUB-AGENTS
You should spawn parallel sub-agents for:
1. T-separator integration
2. Hero animation
3. Chevron animations
4. Modal improvements

## SUCCESS CRITERIA FOR ROUND 2
- [ ] T-separator visually present on homepage
- [ ] Carousel cards bleed off-screen correctly
- [ ] Value prop cards open modals
- [ ] Hero animates on load
- [ ] Chevrons animate on hover
- [ ] Build passes
- [ ] No visual regressions

## OUTPUT
Create `linear-analysis/ROUND2-CHANGES.md` documenting everything you changed.

---
START NOW. Work systematically through each issue.
