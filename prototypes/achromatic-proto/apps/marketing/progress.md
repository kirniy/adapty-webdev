# Progress Log

## 2026-01-19 (Evening Session)

### What We Did

1. **Features Section - Created `bento-tabs` variant**
   - New tabbed bento grid layout
   - 4 tabs: Paywall Builder, A/B Testing, Analytics, SDK
   - Each tab has DIFFERENT layout to avoid visual monotony:
     - `image-right`: Features left, image right
     - `image-left`: Image left, features right (reversed)
     - `image-top`: Full-width image, 4-column features below
     - `bento-grid`: Large image card + 4 small feature cards
   - File: `components/sections/features-bento-tabs.tsx`

2. **Logos Section - Reduced to 7 logos**
   - Per Sergey's "7 logos rule" feedback
   - File: `components/sections/logos.tsx`

3. **CTA Section - Enhanced**
   - Added badge with sparkles icon
   - Better headline with line break
   - Value props row (4 items with checkmarks)
   - Social proof stats bar (3 columns)
   - File: `components/sections/cta.tsx`

4. **Features Variants Cleanup**
   - Removed unused variants: `problem`, `values`, `vision`, `benefits`, `sticky-scroll`
   - Kept: `bento-tabs`, `solution`, `tabbed`, `roles`, `off`
   - File: `lib/debug-context.tsx`

5. **Hero Section - Horizontal dashed line conditional**
   - Hidden when hero variant is `marketing`
   - Visible for other variants
   - File: `components/sections/hero.tsx`

6. **Navbar - Pill variant with compact dropdowns**
   - Created `CompactDropdown` component for simple link lists
   - Replaced massive mega-menus with 192px-wide dropdowns
   - Menus: Product (6 links), Cases (4), Resources (4), Docs (5)
   - File: `components/navbar.tsx`

### What We Learned

- **Don't reuse mega-menus across navbar variants** - The pill navbar needs proportionally sized dropdowns, not full mega-menus
- **Tab content layouts must vary** - Same layout for all tabs is confusing and monotonous
- **Remove cruft early** - Unused variants add confusion; better to prune aggressively

### Files Modified

```
components/navbar.tsx              - Added compact dropdowns for pill variant
components/sections/features-bento-tabs.tsx - New file with 4 layout types
components/sections/logos.tsx      - Reduced to 7 logos
components/sections/cta.tsx        - Enhanced with value props + stats
components/sections/hero.tsx       - Conditional horizontal line
lib/debug-context.tsx              - Cleaned up Features variants
app/page.tsx                       - Updated imports and switch cases
```

### Known Issues

- **Build error**: Font configuration issue in `layout.tsx` - affects `pnpm build` but dev server works fine
- **Mobile menu**: Pill navbar variant doesn't have mobile menu yet

---

## Previous Sessions

### 2026-01-19 (Earlier)
- Debug menu ordering improvements
- Blog variants work
- Dashed lines in grid fixed

### 2026-01-18
- Initial variant system setup
- Hero variants implemented
- Grid system with dashed lines

### 2026-01-15-17
- Achromatic template integration
- Mega-menu header ported from Aura
- Base section implementations
