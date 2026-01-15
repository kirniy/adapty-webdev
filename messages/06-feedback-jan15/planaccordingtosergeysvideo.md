# Action Plan: Homepage Redesign (Block-by-Block)

**Source**: Sergey's video feedback (January 15, 2026)
**Status**: APPROVED - In Progress
**Last Updated**: 2026-01-15

---

## Critical Context

**Sergey's Main Message**: Stop "carpet bombing" with new templates. Go deep block-by-block. This is the LAST full-site review. Future work must be focused on specific blocks.

**Strategic Decision**: Build a **Debug Menu System** that allows:
- Switching between block variants in real-time
- Testing different behaviors (grid: tracking vs drift vs static vs off)
- Easy A/B comparison for Sergey's review
- Progressive enhancement of each block with multiple options

This transforms the prototype into a **living design system demo**.

---

## Verified Corrections to Original AI Plan

| Original Plan Said | What Sergey ACTUALLY Said | Correct Action |
|-------------------|---------------------------|----------------|
| "REMOVE grid following cursor" | "Floating grid = OK. Following cursor = cheesy" | Keep grid, remove ONLY cursor-following behavior |
| "Take header from Aura" | Aura header is simpler than needed | Use AuraBuild as base, enhance to match adapty.io 2-3 levels |
| Implied: just swap colors | Oatmeal is too "dead/muted" | Need structural contrast changes (white on gray, not gray on gray) |

**Note**: The original summary stated the header should come from Aura. However, the current prototypes do NOT use the AdaptyPT2 header. Oatmeal has a 102-line simplified navbar (4 links, no dropdowns). AdaptyPT2 has a 621-line mega-menu system. Sergey wants the COMPLEXITY of adapty.io, styled in the new aesthetic.

---

## Implementation Phases

### Phase 1: Infrastructure (Current Session)

#### 1.1 Font Swap
- [x] Remove `Instrument_Serif` from layout.tsx
- [x] Use `Inter` as both display and body font
- [x] Update `--font-display` CSS variable

#### 1.2 Color Palette
- [x] Add Adapty purple (#6720FF) palette in OKLCH format
- [x] Keep olive palette for now (will be phased out gradually)
- [x] Update component references to use `adapty` colors where accent needed

#### 1.3 Debug Menu System
- [x] Create `DebugProvider` context (`/src/lib/debug-context.tsx`)
- [x] Create `DebugMenu` component (`/src/components/debug/DebugMenu.tsx`)
- [x] Store: `gridVariant` (cursor-tracking | slow-drift | static | off)
- [x] Persist to localStorage
- [x] Integrate into PageFrame

#### 1.4 AnimatedGrid Variants
- [x] Refactor to read variant from context
- [x] Implement all 4 modes:
  - `cursor-tracking`: Current behavior (for comparison)
  - `slow-drift`: Animation without mouse tracking
  - `static`: No animation, just pattern
  - `off`: No grid

---

### Phase 2: Header Mega-Menu (Priority per Sergey)

**Goal**: Full navigation complexity from adapty.io in new visual style

**Reference Sources**:
- AuraBuild header structure (starting point)
- AdaptyPT2 mega-menu components (4 dropdowns, 2-3 levels)
- adapty.io live site (source of truth for content)

**Requirements**:
- [ ] All navigation items from adapty.io
- [ ] 2-3 level dropdown support (Product, Cases, Resources, Docs)
- [ ] Mobile hamburger menu with full depth
- [ ] Styled in Oatmeal/hybrid aesthetic
- [ ] Add as first block variant in debug menu

---

### Phase 3: Block-by-Block Improvements

Each block gets:
- Current implementation as "Variant A"
- Improved version as "Variant B"
- Optional alternatives from references

#### 3.1 TrustedBy (Logos)
- **Current**: Marquee ticker (scrolling)
- **Sergey wants**: Static grid, Stripe-style presentation
- **Rationale**: Only 7-15 top clients, each should have weight

Action:
- [ ] Build static grid variant (Stripe-style)
- [ ] Add to debug menu switcher
- [ ] Remove infinite scroll option from default

#### 3.2 Bento / Features
- **Current**: High contrast cards (too colorful)
- **Sergey wants**: Calmer, more like Oatmeal/next-adapty
- [ ] Reduce color saturation
- [ ] Unify button styling (no caps inconsistency)
- [ ] Remove "Ready/Active/Syncing" tags

#### 3.3 Feature Presentation (Product Tour)
**CRITICAL REQUIREMENT**: Sticky Scroll mechanism
- [ ] Build scroll-triggered feature switching
- [ ] Fixed image panel + scrolling text
- [ ] Collect ALL key features (current prototypes incomplete)

#### 3.4 Role Cards (For Developers/Marketers)
- [ ] Simplify - only keep bottom text description
- [ ] Remove two-line titles
- [ ] Remove decorative tags

#### 3.5 Integrations
- **Current**: Marquee (scrolling)
- **Sergey wants**: Static grid, less motion
- [ ] Build static grid variant
- [ ] Reduce visual noise

#### 3.6 Testimonials
- **Current Oatmeal**: Static 3-col grid (OK)
- **Sergey wants**: Large, prominent, Stripe-style
- [ ] Keep current as Variant A
- [ ] Build larger/accent variant as Variant B

#### 3.7 Stats
- **Current**: Too colorful/overloaded
- [ ] Simplify design
- [ ] Easier to read numbers

#### 3.8 Footer
- **Status**: Good in both prototypes
- [ ] No changes needed

---

## Technical Specifications

### Color Palette (Adapty Purple)
```css
--color-adapty-50:  oklch(97% 0.02 285);
--color-adapty-100: oklch(94% 0.04 285);
--color-adapty-200: oklch(88% 0.08 285);
--color-adapty-300: oklch(78% 0.12 285);
--color-adapty-400: oklch(65% 0.18 285);
--color-adapty-500: oklch(52% 0.22 285);  /* ~#6720FF */
--color-adapty-600: oklch(45% 0.20 285);
--color-adapty-700: oklch(38% 0.18 285);
--color-adapty-800: oklch(30% 0.14 285);
--color-adapty-900: oklch(22% 0.10 285);
--color-adapty-950: oklch(15% 0.06 285);
```

### Debug Menu Behavior
- Position: Bottom-right corner
- Default state: Collapsed (just icon)
- Expands on click
- Shows controls for visible blocks
- Arrow buttons to cycle variants
- Persists state to localStorage

### AnimatedGrid Modes

| Mode | Mouse Tracking | Animation | Mask |
|------|---------------|-----------|------|
| cursor-tracking | Yes | Continuous drift | Radial gradient at cursor |
| slow-drift | No | Continuous drift | None (ambient glow only) |
| static | No | None | None |
| off | N/A | N/A | Component not rendered |

---

## Reference Sites (from Sergey)

| Site | What to Take |
|------|--------------|
| **Stripe** | Client logo presentation (big, focused, each with weight) |
| **Attio** | Background patterns, proper contrast (white on gray) |
| **Vercel** | Lively feel, directional grid, good contrast |
| **Linear** | Static grid background |
| **Oatmeal** | Overall minimalist spirit |

---

## Files Modified/Created

### This Session
| Action | Path |
|--------|------|
| EDIT | `/prototypes/oatmeal/src/app/layout.tsx` |
| EDIT | `/prototypes/oatmeal/src/app/globals.css` |
| CREATE | `/prototypes/oatmeal/src/lib/debug-context.tsx` |
| CREATE | `/prototypes/oatmeal/src/components/debug/DebugMenu.tsx` |
| EDIT | `/prototypes/oatmeal/src/components/effects/AnimatedGrid.tsx` |
| EDIT | `/prototypes/oatmeal/src/components/layout/PageFrame.tsx` |

---

## Verification Checklist

After implementation:
- [ ] Fonts render as Inter throughout (no serif)
- [ ] Debug menu appears in bottom-right, collapses/expands
- [ ] Grid variant selector works
- [ ] Variants persist across page refresh
- [ ] All 4 grid modes function correctly
- [ ] No visual regressions in other components
- [ ] `pnpm build` passes

---

## Session Summary

**Focus**: Visual fixes + Debug menu skeleton + Grid variants

1. Font swap: Instrument Serif -> Inter
2. Color palette: Add Adapty purple (#6720FF)
3. Debug menu: Collapsible panel with block variant controls
4. Grid variants: 4 modes switchable via debug menu
5. Integration: Wire everything together
