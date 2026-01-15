# Achromatic Prototype

This prototype is based on the **achromatic-template** and implements the debug menu system from **Oatmeal**.

## Status

- **Location**: `/prototypes/achromatic-proto/`
- **URL**: `http://localhost:3011`
- **Base**: `templates/achromatic-template` (Apps/Marketing)

## Features

- **Debug Menu**: Ported from Oatmeal, allows switching design variants.
- **Section Variants**:
  - **Hero**:
    - `centered-demo`: Default Achromatic Hero
    - `minimal-text`: Minimal text-only hero (new)
    - `split-left`: Split layout with image (new)
  - **Trusted By**:
    - `marquee`: Scrolling marquee (using Achromatic Marquee)
    - `static-grid`: Grid layout (using Achromatic Logos)
    - `static-minimal`: Simple row (new)
  - **Other Sections**: Currently mapped to default Achromatic sections (Problem, Solution, Stats, Testimonials, FAQ, CTA).

## Development

Run the marketing app:

```bash
pnpm --filter marketing dev
```

## Component Mapping

| Section | Oatmeal Variant | Achromatic Component | Status |
|---------|-----------------|----------------------|--------|
| Hero | Centered + Demo | `hero-variants/HeroCentered` | ✅ Implemented |
| | Minimal Text | `hero-variants/HeroMinimal` | ✅ Implemented |
| | Split Layout | `hero-variants/HeroSplit` | ✅ Implemented |
| TrustedBy | Marquee | `trusted-by-variants/TrustedByMarquee` | ✅ Implemented |
| | Static Grid | `trusted-by-variants/TrustedByGrid` | ✅ Implemented |
| | Minimal | `trusted-by-variants/TrustedByMinimal` | ✅ Implemented |
| Features | Zigzag | `sections/problem.tsx` | ⚠️ Default |
| Stats | Cards | `sections/stats.tsx` | ⚠️ Default |
| Testimonials | Grid | `sections/testimonials.tsx` | ⚠️ Default |
| FAQ | - | `sections/faq.tsx` | ⚠️ Default |
| CTA | - | `sections/cta.tsx` | ⚠️ Default |

## Next Steps

1.  Implement variants for Features, Stats, Testimonials.
2.  Add missing sections: Integrations, Case Studies, Role Cards, Pricing.
3.  Refine styling to match Oatmeal's polish.
