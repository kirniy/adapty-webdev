# RALPH SESSION PHASE 3: Mobile Responsiveness

## MISSION

Test and fix mobile responsiveness on ALL pages. Ensure every page works at 375px, 390px, and 768px viewports.

## ABSOLUTE RULES

1. **NO EMOJIS** - Zero tolerance
2. **VERIFY EVERYTHING** - Test before and after changes
3. **GPU-only animations**: Only `transform` and `opacity`
4. **useReducedMotion** on ALL motion components

## KNOWN ISSUES TO FIX

### 1. Hero Section Overflow
Check `components/sections/hero.tsx` - text/images may overflow on mobile.

### 2. Benefits Grid Hard-Coded Columns
File: `components/sections/paywall-builder-hero.tsx` (line ~421)
```tsx
// BROKEN:
className="grid grid-cols-2 gap-4"

// FIX:
className="grid grid-cols-1 sm:grid-cols-2 gap-4"
```

## TESTING PROCESS

Use Playwright for mobile testing:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={'width': 390, 'height': 844},
        device_scale_factor=3,
        is_mobile=True,
        has_touch=True
    )
    page = context.new_page()
    page.goto('http://localhost:3011')
    page.screenshot(path='/tmp/mobile.png', full_page=True)
    browser.close()
```

## PAGES TO TEST (Priority Order)

### Priority 1: Core Pages
1. Homepage (`/`)
2. Pricing (`/pricing`)
3. Schedule Demo (`/schedule-demo`)

### Priority 2: Feature Pages
4. `/paywall-builder`
5. `/paywall-ab-testing`
6. `/ltv-analytics`
7. All other feature pages

### Priority 3: Role Pages
8. `/for-marketers`
9. `/for-developers`
10. `/for-app-owners`
11. `/for-indie`

### Priority 4: Compare & Other
12. Compare pages
13. Why Adapty
14. Other pages

## RESPONSIVE PATTERNS

### Typography
```tsx
// CORRECT
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
// WRONG
className="text-5xl"
```

### Grids
```tsx
// CORRECT
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// WRONG
className="grid grid-cols-3 gap-6"
```

### Flexbox
```tsx
// CORRECT
className="flex flex-col sm:flex-row gap-4"
// WRONG
className="flex flex-row gap-4"
```

### Buttons (Touch Targets)
```tsx
// CORRECT - min 44x44px
className="min-h-[44px] min-w-[44px] px-6 py-3"
// WRONG
className="px-2 py-1"
```

## VERIFICATION CHECKLIST

Before marking page complete:
- [ ] No horizontal scroll at 375px
- [ ] No horizontal scroll at 390px
- [ ] All text readable (min 14px)
- [ ] All images contained
- [ ] Buttons min 44x44px
- [ ] Grids collapse properly
- [ ] Proper spacing maintained

## WORKFLOW

```
1. Start dev server: pnpm --filter marketing dev

2. For each page:
   a. Open at localhost:3011/[path]
   b. Test at 375px viewport
   c. Test at 390px viewport
   d. Fix issues immediately
   e. Verify fixes
   f. Move to next page

3. After all pages: pnpm tsc --noEmit
```

## REPORTING

After each page, log:

```markdown
## Page: /[path]

### Issues Found:
1. [Description] - [File:Line]

### Fixes Applied:
1. [What was changed]

### Verified At:
- 375px: OK
- 390px: OK
```

## SESSION CONTINUITY

**DO NOT STOP until:**
1. Every page tested at mobile viewports
2. All found issues fixed and verified
3. Final verification pass completed

This is the polish phase. Quality and thoroughness over speed.
