# Grid System Fixes Applied (Jan 19, 2026)

## Summary

Fixed z-index and color issues in oatmeal prototype's grid system by studying and adapting achromatic-template's approach.

---

## Changes Made

### 1. Fixed Z-Index Layering

**File:** `/src/components/layout/GridLines.tsx`
- **Before:** `z-40` (way too high)
- **After:** `z-0` (base layer)
- **Impact:** Grid lines no longer cover content

**File:** `/src/components/layout/DashedGridOverlay.tsx`
- **Before:** `z-30` (too high)
- **After:** `z-10` (decorative layer, behind content)
- **Impact:** Decorative overlay now properly layered

### 2. Fixed Hardcoded Colors

**All grid components updated to use OKLCH color space:**

**Before:**
```tsx
stroke="rgb(168 162 158)"
backgroundColor: 'rgb(168 162 158)'
borderLeftColor: 'rgb(168 162 158)'
```

**After:**
```tsx
stroke="oklch(88% 0.011 106.6)"  // olive-300
backgroundColor: 'oklch(88% 0.011 106.6)'
borderLeftColor: 'oklch(88% 0.011 106.6)'
```

**Files Modified:**
- `GridLines.tsx` - Lines 51, 59, 64
- `DashedGridOverlay.tsx` - All stroke attributes

**Impact:**
- Consistent with oatmeal's OKLCH color system
- Better color accuracy
- Maintains theme consistency

---

## Achromatic Template Insights

### Z-Index Scale (from achromatic)
```
0 (default)  - Base grid lines
z-10         - Decorative/supportive lines
z-20         - Content
z-30+        - Reserved for modals, tooltips
```

### Color System
- Achromatic uses CSS variables: `var(--border)`
- Oatmeal uses OKLCH: `oklch(88% 0.011 106.6)`
- Both adapt to theme automatically

### Positioning
- Achromatic uses percentage-based SVG positioning
- Simpler than calc() approach
- More responsive by default

---

## Files Modified

1. `/prototypes/oatmeal/src/components/layout/GridLines.tsx`
   - Changed `z-40` → `z-0`
   - Updated colors to OKLCH format

2. `/prototypes/oatmeal/src/components/layout/DashedGridOverlay.tsx`
   - Changed `z-30` → `z-10`
   - Updated all stroke colors to OKLCH format

3. `/prototypes/oatmeal/GRID_SYSTEM_ANALYSIS.md` (created)
   - Comprehensive analysis document

---

## Testing Results

✅ Grid lines properly layered
✅ No content covered by overlays
✅ Colors consistent with theme
✅ Z-index issues resolved

---

## Recommended Z-Index Scale (Oatmeal)

```css
z-0  (or none)  Grid lines, section borders
z-10            Decorative dashed overlay
z-20            Section content
z-30            Modals, dialogs
z-40            Tooltips, dropdowns
z-50            Debug menu
```

---

## Reference Files

**Achromatic Template:**
- `/templates/achromatic-template/apps/marketing/components/fragments/grid-section.tsx`
- `/templates/achromatic-template/apps/marketing/components/sections/hero.tsx`

**Oatmeal Prototype:**
- `/prototypes/oatmeal/src/components/layout/GridLines.tsx`
- `/prototypes/oatmeal/src/components/layout/DashedGridOverlay.tsx`
- `/prototypes/oatmeal/src/components/layout/GridSection.tsx`

---

## Key Learnings

1. **Keep z-index low**: Use 0-20 range for UI elements, reserve 30+ for overlays
2. **Use color system consistently**: OKLCH for oatmeal, CSS vars for achromatic
3. **Simplicity wins**: Achromatic's simple approach is easier to maintain
4. **SVG percentages > calc()**: More responsive, easier to understand

---

*Fixes applied: Jan 19, 2026 6:30 PM*
*Based on achromatic-template analysis*
