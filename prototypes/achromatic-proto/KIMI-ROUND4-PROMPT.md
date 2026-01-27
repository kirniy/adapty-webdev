# KIMI ROUND 4 - DRAMATIC TRANSFORMATION

## THE GOAL
**When the user returns, they should NOT RECOGNIZE this website.**

Round 3 was polish. Round 4 is TRANSFORMATION.

This is not about incremental improvements. This is about making changes so dramatic that the website looks like it was rebuilt from scratch by a world-class design team.

## YOUR WORKING DIRECTORY
```
/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/
```

## CRITICAL ISSUES FROM USER FEEDBACK

### 1. HERO SECTION - FULL REDESIGN REQUIRED

**Current state**: Basic centered layout with staggered text
**Required**: Completely new hero that feels AAA-quality

**Options to explore (pick the best one):**

**A) Split Hero (Linear-style)**
- Left side: Text content (left-aligned)
- Right side: Product screenshot or 3D illustration
- Clean asymmetric balance

**B) Full-width Hero with WebGL Background**
- Subtle animated gradient orbs
- Text centered over animation
- Glassmorphism elements

**C) Bento Hero**
- Main text in left cell
- Product preview in right cells
- Stats or features in smaller cells

**Implementation requirements:**
- Must feel dramatically different from current
- Super clean and minimalistic but still impressive
- Consider using `@react-three/fiber` for subtle 3D effects
- Or use CSS gradient animations for movement

### 2. LIGHT THEME MODALS - COMPLETE OVERHAUL

**Current problems:**
- Modal has dark background (`bg-[#111111]`)
- Modal is too small (`max-w-[680px]`)
- Dark text section at bottom

**Required:**
- Full-screen or near full-screen modal (like Linear)
- WHITE background (`bg-white`)
- Dark text (`text-gray-900`)
- Modal should fill 90%+ of viewport height
- Width: `max-w-4xl` or larger
- Subtle border and shadow on light background

**Update in `features-linear-style.tsx`:**
```tsx
// CardModal changes needed:
// - bg-[#111111] -> bg-white
// - text-white -> text-gray-900
// - text-zinc-400 -> text-gray-600
// - border-white/10 -> border-gray-200
// - max-w-[680px] -> max-w-4xl or larger
// - Add min-h-[80vh] for height
```

### 3. 30+ INTEGRATION CARDS

**Current state**: Only 4 cards (Amplitude, AppsFlyer, Slack, Webhooks)
**Required**: 30+ integration cards

**Add ALL these integrations:**
```tsx
const INTEGRATIONS = [
  // Analytics
  { id: 'amplitude', title: 'Amplitude', category: 'Analytics' },
  { id: 'mixpanel', title: 'Mixpanel', category: 'Analytics' },
  { id: 'firebase', title: 'Firebase Analytics', category: 'Analytics' },
  { id: 'segment', title: 'Segment', category: 'Analytics' },

  // Attribution
  { id: 'appsflyer', title: 'AppsFlyer', category: 'Attribution' },
  { id: 'adjust', title: 'Adjust', category: 'Attribution' },
  { id: 'branch', title: 'Branch', category: 'Attribution' },
  { id: 'singular', title: 'Singular', category: 'Attribution' },
  { id: 'kochava', title: 'Kochava', category: 'Attribution' },
  { id: 'tenjin', title: 'Tenjin', category: 'Attribution' },

  // Marketing
  { id: 'braze', title: 'Braze', category: 'Marketing' },
  { id: 'onesignal', title: 'OneSignal', category: 'Marketing' },
  { id: 'clevertap', title: 'CleverTap', category: 'Marketing' },
  { id: 'airship', title: 'Airship', category: 'Marketing' },
  { id: 'iterable', title: 'Iterable', category: 'Marketing' },
  { id: 'customer-io', title: 'Customer.io', category: 'Marketing' },

  // Communication
  { id: 'slack', title: 'Slack', category: 'Communication' },
  { id: 'discord', title: 'Discord', category: 'Communication' },
  { id: 'telegram', title: 'Telegram', category: 'Communication' },

  // Developer
  { id: 'webhooks', title: 'Webhooks', category: 'Developer' },
  { id: 'aws-s3', title: 'AWS S3', category: 'Developer' },
  { id: 'google-cloud', title: 'Google Cloud', category: 'Developer' },
  { id: 'bigquery', title: 'BigQuery', category: 'Developer' },
  { id: 'snowflake', title: 'Snowflake', category: 'Developer' },

  // CRM
  { id: 'hubspot', title: 'HubSpot', category: 'CRM' },
  { id: 'salesforce', title: 'Salesforce', category: 'CRM' },
  { id: 'intercom', title: 'Intercom', category: 'CRM' },
  { id: 'zendesk', title: 'Zendesk', category: 'CRM' },

  // Revenue
  { id: 'revenucat', title: 'RevenueCat (migration)', category: 'Revenue' },
  { id: 'stripe', title: 'Stripe', category: 'Revenue' },
  { id: 'chargebee', title: 'Chargebee', category: 'Revenue' },
];
```

### 4. CAROUSEL ALIGNMENT FIX

**Current problem**: Cards are skewed left, not aligned with content
**Required**: Left edge of first card should align with the orange pill/tag

**Fix:**
```tsx
// The pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1rem))] needs adjustment
// Left edge should align perfectly with the "Integrations" tag above
// Ensure first card starts where section content starts
```

### 5. T-SEPARATOR VISIBILITY

**Current problem**: T-separator uses `bg-white/[0.03]` - nearly invisible
**Required**: Make T-separators actually visible

**Fix options:**
- Use `bg-gray-50` or `bg-muted/50` for light theme
- Add more prominent borders `border-gray-200`
- Consider adding subtle shadows

### 6. GLOBAL PAGE BACKGROUND SYSTEM

**Problem**: User doesn't understand the grid/lines system

**Audit and unify:**
1. Read `apps/marketing/components/fragments/grid-section.tsx`
2. Read `apps/marketing/components/fragments/section-background.tsx`
3. Ensure all sections use consistent backgrounds
4. Make the grid lines subtle but visible
5. Create unified light-theme background system

**Pattern to follow:**
```tsx
// All sections should use GridSection wrapper
// Backgrounds should be light: bg-white, bg-gray-50, bg-muted
// Grid lines should be subtle: border-gray-100 or border-gray-200
// Vertical lines should connect across sections
```

### 7. TYPOGRAPHY LIGHT THEME

Ensure ALL text follows light theme:
- Primary headings: `text-gray-900`
- Body text: `text-gray-600` or `text-gray-700`
- Muted text: `text-gray-500`
- NO white text except on primary-colored buttons

### 8. CARD STYLING LIGHT THEME

All cards should be light:
- Background: `bg-white` with subtle shadow
- Border: `border-gray-200`
- Hover: `shadow-lg` lift effect
- Text: Dark colors

## FILES TO MODIFY

1. **apps/marketing/components/sections/hero.tsx** - FULL REDESIGN
2. **apps/marketing/components/sections/features-linear-style.tsx**
   - Light theme modal
   - 30+ integration cards
   - Carousel alignment
   - T-separator visibility
3. **apps/marketing/components/fragments/grid-section.tsx** - Background system
4. **apps/marketing/components/fragments/section-background.tsx** - Light backgrounds
5. **apps/marketing/app/page.tsx** - Section wrapper review

## VERIFICATION

After EACH significant change:
1. `pnpm --filter marketing build` - must pass
2. Check localhost:3011 - must look dramatically better
3. Test all modals - must be light and large
4. Test carousel - must align with content
5. Test T-separator - must be visible

## SUCCESS CRITERIA

- [ ] Hero is COMPLETELY REDESIGNED (unrecognizable)
- [ ] Modals are LIGHT theme, LARGE (near full-screen)
- [ ] 30+ integration cards in carousel
- [ ] Carousel aligned with content
- [ ] T-separators visible
- [ ] All backgrounds are LIGHT theme
- [ ] All text follows light theme palette
- [ ] Grid/lines system is unified
- [ ] Build passes
- [ ] User should be STUNNED by the transformation

## OUTPUT

Create `linear-analysis/ROUND4-CHANGES.md` documenting:
1. Hero redesign approach and rationale
2. All theme changes (dark -> light)
3. New integrations added
4. Alignment fixes
5. Background system changes
6. Before/after description

---
**THIS IS THE TRANSFORMATION ROUND. BE BOLD. BE DRAMATIC. MAKE IT STUNNING.**
