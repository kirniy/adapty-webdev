# Grid System Analysis & Fix Plan

## Issues Identified (Jan 19, 2026)

### 1. Z-Index Problems
**Current State (Oatmeal):**
- `GridLines.tsx`: Uses `z-40` ❌
- `DashedGridOverlay.tsx`: Uses `z-30` ❌
- Result: Lines cover content, weird layering issues

**Achromatic Template (Reference):**
- Base grid lines: No z-index (default 0) ✅
- Supportive lines: `z-10` ✅
- Content: `z-20` ✅
- Result: Clean, predictable layering

**Fix:** Use z-index scale 0-20, not 30-40.

---

### 2. Color System Issues
**Current State (Oatmeal):**
```tsx
stroke="rgb(168 162 158)" // Hardcoded olive-300
backgroundColor: 'rgb(168 162 158)'
```
❌ Doesn't adapt to dark mode
❌ Not themeable

**Achromatic Template (Reference):**
```tsx
stroke="var(--border)"
className="bg-border"
```
✅ Uses CSS variables
✅ Adapts to light/dark mode automatically

**Fix:** Replace hardcoded RGB with `hsl(var(--border))` or Tailwind `bg-border` class.

---

### 3. Architecture Complexity
**Current State (Oatmeal):**
- `GridLines.tsx` - Fixed vertical edges (z-40)
- `DashedGridOverlay.tsx` - Decorative overlay (z-30)
- `GridSection.tsx` - Section wrapper with borders
- `GridSectionConditional.tsx` - Conditional wrapper
- Result: 4 separate components, hard to maintain

**Achromatic Template (Reference):**
- `GridSection` component - Simple wrapper with vertical lines
- Dashed lines as inline SVG within sections where needed
- Result: 1-2 components, easy to understand

**Fix:** Simplify to 2 components max:
1. `GridSection` - Section borders (solid)
2. Optional dashed decorative lines within specific hero sections

---

### 4. Positioning Logic
**Current State (Oatmeal):**
```tsx
className="left-4 sm:left-[max(1rem,calc((100vw_-_1280px)_/_2))]"
```
❌ Complex calc() logic
❌ Assumes fixed container width

**Achromatic Template (Reference):**
```tsx
<line x1="16.85%" y1="0" x2="16.85%" y2="100%" />
<line x1="83.15%" y1="0" x2="83.15%" y2="100%" />
```
✅ Simple percentage positioning
✅ Responsive by default

**Fix:** Use percentage-based SVG lines instead of fixed positioning with calc().

---

## Recommended Solution

### Option A: Adopt Achromatic Approach (Recommended)
**Replace oatmeal's complex system with achromatic's simple approach:**

1. **Simplify GridSection.tsx:**
   - Keep basic structure
   - Use `bg-border` CSS variable instead of hardcoded colors
   - Remove dashed option (handle separately)

2. **Remove or simplify GridLines.tsx:**
   - If keeping: Change `z-40` → `z-0` or no z-index
   - Use `bg-border` variable
   - Or: Delete entirely, use GridSection borders only

3. **Fix DashedGridOverlay.tsx:**
   - Change `z-30` → `z-10` (behind content)
   - Replace `stroke="rgb(168 162 158)"` with `stroke="hsl(var(--border))"`
   - Or: Delete and add dashed lines inline in Hero section only

4. **Update Tailwind config:**
   - Ensure `--border` CSS variable is defined
   - Add to theme extend if missing

### Option B: Keep Current System, Fix Issues
If keeping current architecture:

1. **Fix z-indexes:**
   ```tsx
   GridLines.tsx: z-40 → z-0 or remove
   DashedGridOverlay.tsx: z-30 → z-10
   Content: Ensure z-20 or higher
   ```

2. **Fix colors:**
   ```tsx
   Replace: stroke="rgb(168 162 158)"
   With: stroke="hsl(var(--border))"

   Replace: backgroundColor: 'rgb(168 162 158)'
   With: className="bg-border"
   ```

3. **Simplify positioning:**
   - Consider using GridSection's approach for consistency
   - Or keep calc() but document why it's needed

---

## Implementation Steps (Option A - Recommended)

### Step 1: Update GridSection.tsx
```tsx
// Before
bg-olive-200/50

// After
bg-border
```

### Step 2: Fix or Remove GridLines.tsx
- Change `z-40` to no z-index
- Use `bg-border` variable
- Or delete if not needed (GridSection handles borders)

### Step 3: Fix DashedGridOverlay.tsx
- Change `z-30` to `z-10`
- Replace all `rgb(168 162 158)` with `hsl(var(--border))`
- Ensure it's only used in Hero section

### Step 4: Test
- Check Hero section with dashed overlay
- Verify no content is covered by grid lines
- Test light/dark mode transitions
- Confirm grid lines respect theme colors

---

## Z-Index Scale (Fixed)
```
z-0  (or no z-index): Base grid lines, section borders
z-10: Decorative dashed overlay
z-20: Section content
z-30: Modals, dialogs (reserved for UI components)
z-40: Tooltips, dropdowns (reserved for floating UI)
z-50: Debug menu, dev tools
```

---

## Files to Modify
1. `/prototypes/oatmeal/src/components/layout/GridSection.tsx`
2. `/prototypes/oatmeal/src/components/layout/GridLines.tsx`
3. `/prototypes/oatmeal/src/components/layout/DashedGridOverlay.tsx`
4. `/prototypes/oatmeal/tailwind.config.ts` (verify border variable)

---

## Reference Files (Achromatic Template)
- `/templates/achromatic-template/apps/marketing/components/fragments/grid-section.tsx`
- `/templates/achromatic-template/apps/marketing/components/sections/hero.tsx` (lines 122-204)

---

## Testing Checklist
- [ ] Grid lines visible in correct positions
- [ ] No z-index layering issues
- [ ] Content not covered by grid overlay
- [ ] Lines adapt to light/dark mode
- [ ] Lines respect theme colors
- [ ] No horizontal scroll caused by positioning
- [ ] Responsive on mobile/tablet/desktop
- [ ] Debug menu can toggle grid lines on/off

---

*Analysis completed: Jan 19, 2026*
*Referenced achromatic-template for best practices*
