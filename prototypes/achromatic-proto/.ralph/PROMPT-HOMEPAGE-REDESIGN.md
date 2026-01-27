# RALPH SESSION: Homepage Redesign - Linear-Style Simplification

## MISSION

Transform the Adapty homepage from a bloated 11,113px layout to a focused ~4,550px page following Linear design principles. Remove visual noise, simplify structure, increase feature coverage.

**Target Metrics:**
- Page height: 11,113px -> ~4,550px (-59%)
- Sections: 12 -> 8
- Feature coverage: 14% -> 66%

## ABSOLUTE RULES

1. **NO EMOJIS** - Zero tolerance. Never use emojis anywhere.
2. **Use `motion/react`** not `framer-motion`
3. **One task at a time** - Complete fully before moving on
4. **Test after each change** - No TypeScript errors allowed
5. **Follow the phase order** - P0 before P1, etc.

## PHASE 0: Architecture Changes (CRITICAL - DO FIRST)

### Task 0.1: Delete Blog Section
```bash
# Delete this file
rm apps/marketing/components/sections/blog.tsx
```

Then in `apps/marketing/app/(marketing)/page.tsx`:
- Remove Blog import
- Remove <Blog /> usage

### Task 0.2: Merge Logos into Hero
In `apps/marketing/components/sections/hero.tsx`:
- Add a minimal logo strip directly below the headline
- Import logo data from content.ts
- Use subtle gray logos, small size
- Add "Trusted by 10,000+ apps" text

```tsx
// Add after headline, before CTA
<div className="flex items-center justify-center gap-8 py-6 opacity-60">
  <span className="text-sm text-muted-foreground">Trusted by 10,000+ apps</span>
  {/* Inline logos here */}
</div>
```

Then in page.tsx:
- Remove standalone TrustedBy section import and usage

### Task 0.3: Remove Standalone Stats Section
In `apps/marketing/app/(marketing)/page.tsx`:
- Remove Stats section import
- Remove <Stats /> usage
- Key stats can be integrated into hero or features later

### Task 0.4: Remove Roles Section
In `apps/marketing/app/(marketing)/page.tsx`:
- Remove Roles section import
- Remove <Roles /> usage
- Role pages still exist, just not on homepage

### Task 0.5: Strip Hero Complexity
In `apps/marketing/components/sections/hero.tsx`:
- Remove auto-rotating tabs system
- Remove floating shapes/decorations
- Keep only: headline, subheadline, ONE CTA button, hero image
- Reduce padding (py-24 max)

## PHASE 1: Visual Cleanup (HIGH PRIORITY)

### Task 1.1: Remove All Drop Shadows
Search and replace across all marketing components:
```bash
# Find all shadow usages
grep -rn "shadow" apps/marketing/components/
```

Replace with borders or background contrast:
- `shadow-sm` -> `border border-gray-200`
- `shadow-md` -> `border border-gray-200`
- `shadow-lg` -> Remove entirely or use `bg-gray-50`
- `shadow-xl` -> Remove entirely

### Task 1.2: Remove Green Dots
Search for green indicators:
```bash
grep -rn "bg-green\|text-green\|green-" apps/marketing/components/
```

Remove green dot indicators or replace with subtle checkmarks.

### Task 1.3: Remove Tags/Badges
Search for badge elements:
```bash
grep -rn "badge\|Badge\|NEW\|POPULAR\|BETA" apps/marketing/components/
```

Remove promotional badges from features.

### Task 1.4: Remove Button Arrows
Search for arrow icons in buttons:
```bash
grep -rn "ArrowRight\|Arrow\|ChevronRight" apps/marketing/components/
```

Remove trailing arrows from CTA buttons. Keep only text.

### Task 1.5: Fix Snake Layout
In feature sections with alternating layouts:
- Make all features consistent (either all image-right or all stacked)
- No zig-zag pattern

## PHASE 2: Polish (MEDIUM PRIORITY)

### Task 2.1: Standardize Section Spacing
All major sections should use `py-24`:
```bash
grep -rn "py-16\|py-20\|py-28\|py-32" apps/marketing/components/sections/
```

Replace inconsistent padding with `py-24`.

### Task 2.2: Align Section Headings
All section headers should be centered with consistent hierarchy:
```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl font-bold tracking-tight">Title</h2>
  <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
    Description
  </p>
</div>
```

### Task 2.3: Simplify Feature Images
- Remove complex multi-layer illustrations
- Prefer UI screenshots or simple single-concept images
- No gradients, max 2 colors per illustration

### Task 2.4: Condense Testimonials
Simplify testimonial cards:
```tsx
// From large cards with photos to minimal quotes
<blockquote className="text-lg italic text-muted-foreground">
  "Quote here"
  <cite className="text-sm mt-2 block">- Name, Company</cite>
</blockquote>
```

### Task 2.5: Simplify Code Blocks
Reduce SDK examples from 20+ lines to 3-5 lines max.

## PHASE 3: Enhancements (LOW PRIORITY)

### Task 3.1: Simplify CTA Section
Single focused CTA with no competing elements:
```tsx
<section className="py-24 bg-muted/30">
  <div className="container text-center">
    <h2 className="text-3xl font-bold">Ready to grow?</h2>
    <p className="text-lg text-muted-foreground mt-4">
      Start free, upgrade when ready
    </p>
    <Button size="lg" className="mt-8">Start Free Trial</Button>
  </div>
</section>
```

### Task 3.2: Simplify Footer
Reduce from 4-column to 2-column:
```
[Logo]                    [Product | Pricing | Docs | Blog]
Copyright 2026 Adapty     [Social icons]
```

## PROPOSED FINAL STRUCTURE

```
Section               | Target Height
----------------------|--------------
1. Hero (with logos)  | 800px
2. Features (4 cards) | 600px
3. SDK/Integration    | 500px
4. How It Works       | 600px
5. Testimonials       | 400px
6. Pricing Preview    | 500px
7. CTA                | 300px
8. Footer             | 250px
----------------------|--------------
TOTAL                 | ~4,550px
```

## WORKFLOW

1. Start with Phase 0, Task 0.1
2. Complete each task fully before moving to next
3. Run TypeScript check after each file change: `pnpm --filter marketing tsc --noEmit`
4. If errors, fix before proceeding
5. Commit progress after each phase

## VERIFICATION CHECKLIST

After each task, verify:
- [ ] No TypeScript errors
- [ ] No emojis
- [ ] Uses motion/react, not framer-motion
- [ ] Changes match the specification

## SESSION CONTINUITY

**CRITICAL: DO NOT STOP EARLY.**

Work through ALL phases systematically:
- Phase 0: 5 tasks (architecture)
- Phase 1: 5 tasks (visual cleanup)
- Phase 2: 5 tasks (polish)
- Phase 3: 2 tasks (enhancements)

Track progress by checking which tasks are complete. If a task is done, skip to the next one.

## START HERE

1. Read `apps/marketing/app/(marketing)/page.tsx` to see current structure
2. Check if Phase 0 tasks are done:
   - Is blog.tsx deleted?
   - Are logos in hero?
   - Is Stats removed from page?
   - Is Roles removed from page?
   - Is Hero simplified?
3. If not, start with first incomplete Phase 0 task
4. If Phase 0 done, move to Phase 1
5. Continue until all phases complete

**BEGIN NOW. Do not ask questions. Just execute.**
