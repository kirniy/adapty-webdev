# Linear Typography & Spacing System Changes

This document records all typography and spacing changes applied to the Adapty marketing site to align with Linear's design system.

## Summary of Changes

Applied Linear's typography system (font weights, sizes, tracking) and spacing system (section padding, container widths) to all key marketing sections.

---

## 1. Hero Section (`hero.tsx`)

### Typography Changes
| Element | Before | After |
|---------|--------|-------|
| Hero Title | `font-bold`, multiple sizes (19px-7xl) | `font-semibold`, `text-4xl sm:text-5xl lg:text-6xl` |
| Hero Description | `text-[12px]` to `text-xl`, `text-muted-foreground` | `text-sm sm:text-base`, `text-zinc-400` |
| Trust Signal | `text-sm` | `text-xs`, `font-medium` |

### Spacing Changes
| Element | Before | After |
|---------|--------|-------|
| Section Padding | `pt-20... pb-16...` (varied) | `py-24 lg:py-32` |
| Container | `sm:container` | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| Description Max-Width | `max-w-2xl` | `max-w-xl` |

---

## 2. Features Linear Style (`features-linear-style.tsx`)

### Typography Changes
| Element | Before | After |
|---------|--------|-------|
| Section Titles | `text-[40px]` | `text-4xl sm:text-5xl`, `leading-tight` |
| Feature Tag | `text-[15px]` | `text-sm`, `text-zinc-400`, `font-medium` |
| Card Titles | `text-lg`, `font-semibold` | `text-xl`, `font-medium` |
| Card Descriptions | `text-[15px]`, `text-muted-foreground` | `text-sm`, `text-zinc-400` |
| Interactive Selector Title | `text-xl font-semibold` | `text-2xl font-medium` |
| Interactive Selector Subtitle | `text-[15px]` | `text-sm` |
| List Item Title | `text-[15px]` | `text-base` |
| List Item Description | `text-[15px]` | `text-sm`, `text-zinc-400` |
| Small Feature Title | `text-[14px]` | `text-sm` |
| Small Feature Description | `text-[13px]` | `text-xs`, `text-zinc-400` |

### Spacing Changes
| Element | Before | After |
|---------|--------|-------|
| Section Padding | `py-[120px] lg:py-[160px]` | `py-24 lg:py-32` |
| Container | `container max-w-6xl mx-auto px-6` | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| Value Props Heading Margin | `mb-20` | `mb-16` |
| Tag Spacing | `mb-5` | `mb-6` |

### Content Changes
- Modal paragraphs now limited to max 3 lines (`.slice(0, 3)`)

---

## 3. FAQ Cards (`faq-cards.tsx`)

### Typography Changes
| Element | Before | After |
|---------|--------|-------|
| Section Title | `text-3xl font-bold` | `text-4xl sm:text-5xl font-semibold` |
| Section Description | `text-muted-foreground` | `text-zinc-400`, `text-sm` |
| Feature Tag | `text-sm` | `text-xs`, `font-medium` |

### Spacing Changes
| Element | Before | After |
|---------|--------|-------|
| Section Padding | `py-24` | `py-24 lg:py-32` |
| Container | `container` | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| Tag Spacing | `mb-4` | `mb-6` |
| Bottom CTA Margin | `mt-10` | `mt-12` |

---

## 4. Testimonials Clean (`testimonials-clean.tsx`)

### Spacing Changes
| Element | Before | After |
|---------|--------|-------|
| Section Padding | `py-16 lg:py-24` | `py-24 lg:py-32` |
| Container | `container` | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |

---

## 5. CTA Section (`cta.tsx`)

### Typography Changes
| Element | Before | After |
|---------|--------|-------|
| CTA Text | `text-lg sm:text-xl` | `text-base sm:text-lg` |

### Spacing Changes
| Element | Before | After |
|---------|--------|-------|
| Section Padding | `py-16` | `py-24` |
| Container | `container` | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |

---

## 6. SDK Code Section (`sdk-code.tsx`)

### Typography Changes
| Element | Before | After |
|---------|--------|-------|
| Section Title | `text-3xl font-bold` | `text-4xl sm:text-5xl font-semibold` |
| Description | `text-muted-foreground` | `text-zinc-400`, `text-sm` |
| Feature Tag | `text-sm` | `text-xs`, `font-medium` |
| Feature List | `text-muted-foreground` | `text-zinc-400` |
| Platform Links | `text-sm` | `text-xs`, `font-medium` |

### Spacing Changes
| Element | Before | After |
|---------|--------|-------|
| Section Padding | `py-16` | `py-24 lg:py-32` |
| Container | `container` | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| Description Max-Width | none | `max-w-md` |
| Platform Links Margin | `mt-10` | `mt-12` |

---

## Key Typography Rules Applied

### Font Weights
- **Never use `font-bold` (700)** - only `font-semibold` (600) max for headings
- Card titles use `font-medium` (500)
- Labels/tags use `font-medium` (500)
- Body text uses default weight (400)

### Font Sizes
| Element | Size |
|---------|------|
| Hero Title | `text-5xl` or `text-6xl` |
| Section Headings | `text-4xl` or `text-5xl` |
| Card Titles | `text-xl` or `text-2xl` |
| Body Text | `text-sm` or `text-base` |
| Labels/Tags | `text-xs` or `text-sm` |

### Tracking & Leading
- Headings: `tracking-tight`, `leading-tight`
- Body text: default tracking, `leading-relaxed`

### Colors
- Descriptions: `text-zinc-400` (muted text)
- Primary text: `text-foreground`

---

## Key Spacing Rules Applied

### Section Spacing
- Default: `py-24 lg:py-32` (96px-128px)

### Container
- Max width: `max-w-6xl` (1200px)
- Padding: `px-4 sm:px-6 lg:px-8`

### Card Spacing
- Padding: `p-6` (24px)

### Grid Gaps
- Default: `gap-4` or `gap-6` (16-24px)

---

## Anti-Patterns Fixed

1. ✅ Removed all `font-bold` usage
2. ✅ Limited text blocks to 3 lines max
3. ✅ Consistent `text-zinc-400` for muted descriptions
4. ✅ Consistent container width (`max-w-6xl`)
5. ✅ Consistent section padding (`py-24 lg:py-32`)
6. ✅ Tight tracking on all headings
7. ✅ Standardized on Tailwind's font-size scale

---

## Files Modified

1. `apps/marketing/components/sections/hero.tsx` - Hero title, description, trust signal, spacing
2. `apps/marketing/components/sections/features-linear-style.tsx` - All Linear-style feature sections
3. `apps/marketing/components/sections/faq-cards.tsx` - FAQ section header and cards
4. `apps/marketing/components/sections/testimonials-clean.tsx` - Section spacing
5. `apps/marketing/components/sections/cta.tsx` - CTA section spacing
6. `apps/marketing/components/sections/sdk-code.tsx` - SDK section typography

---

*Changes applied based on Linear Design System from `/linear-analysis/DESIGN-SYSTEM.md`*
