# Achromatic Template Reference

## Overview
Achromatic is a premium SaaS starter kit. We've customized it for Adapty's marketing site.
The homepage is complete and serves as the **gold standard** for all other pages.

---

## EXISTING PAGES (Copy these structures!)

### Homepage (`app/page.tsx`) - THE REFERENCE
```typescript
// This is your template for ALL pages
// Study this file before creating any new page
Sections used:
- HeroSection (with variant switching)
- LogosSection (with variant switching)
- FeaturesSection (with variant switching)
- RolesSection (with variant switching)
- StatsSection
- SDKSection
- TestimonialsSection (with variant switching)
- IntegrationsSection
- CaseStudiesSection
- PricingSection
- CTASection
- FooterSection (with variant switching)
```

### Pricing (`app/pricing/page.tsx`)
```typescript
Sections:
- PricingHero
- PricingFAQ
```

### Contact (`app/contact/page.tsx`)
```typescript
Sections:
- ContactHero
- ContactForm
```

### Story/About (`app/story/page.tsx`)
```typescript
Sections:
- StoryHero
- StoryTeam
- StoryTimeline
- StoryVision
- StoryValues
```

### Careers (`app/careers/page.tsx`)
```typescript
Sections:
- CareersHero
- CareersPositions
- CareersBenefits
```

### Blog (`app/blog/page.tsx`)
```typescript
Sections:
- BlogPosts
- BlogPostsFeatured
```

---

## SECTION INVENTORY (Reuse these!)

### Heroes (Pick one per page)
| Component | Best For | Variants |
|-----------|----------|----------|
| `hero.tsx` | Homepage, feature pages | achromatic, centered-demo, minimal-text, split-left |
| `hero-split.tsx` | Landing pages | Default only |
| `pricing-hero.tsx` | Pricing page | Default only |
| `story-hero.tsx` | About page | Default only |

### Features (Show product capabilities)
| Component | Best For |
|-----------|----------|
| `features-bento-tabs.tsx` | Complex features, multiple categories (RECOMMENDED) |
| `features-tabbed.tsx` | Simpler feature lists |
| `roles.tsx` | Audience-specific features |

### Social Proof
| Component | Best For |
|-----------|----------|
| `testimonials.tsx` | Customer quotes grid |
| `testimonials-editorial.tsx` | Featured case studies |
| `testimonials-clean.tsx` | Minimal carousel |
| `logos.tsx` | Customer logo grid |
| `logos-linear.tsx` | Logos with hover CTA |
| `stats.tsx` | Metrics display |

### Calls to Action
| Component | Best For |
|-----------|----------|
| `cta.tsx` | End of page CTA |
| `pricing-hero.tsx` | Pricing CTA |

### Content
| Component | Best For |
|-----------|----------|
| `faq.tsx` | FAQ accordion |
| `pricing-faq.tsx` | Pricing-specific FAQ |
| `sdk-code.tsx` | Code snippets |
| `blog-posts.tsx` | Blog cards |
| `blog-posts-featured.tsx` | Featured blog layout |

### Team/Company
| Component | Best For |
|-----------|----------|
| `story-team.tsx` | Team member grid |
| `story-timeline.tsx` | Company history |
| `story-vision.tsx` | Vision statement |
| `story-values.tsx` | Company values |

### Forms
| Component | Best For |
|-----------|----------|
| `contact.tsx` | Contact form |

---

## CONTENT STRUCTURE (`lib/content.ts`)

All text content is centralized here. Pattern:

```typescript
export const PAGE_NAME = {
  hero: {
    title: "Main Headline",
    description: "Supporting text",
    cta: { text: "Button Text", href: "/path" }
  },
  features: [
    { title: "Feature 1", description: "...", icon: IconName }
  ],
  testimonials: [...],
  faq: [
    { question: "...", answer: "..." }
  ]
};
```

**ALWAYS add content here, never hardcode in components.**

---

## DEBUG CONTEXT SYSTEM (`lib/debug-context.tsx`)

### How It Works
1. Variant types defined at top of file
2. `DebugSettings` interface lists all variant states
3. `defaultSettings` provides initial values
4. `useDebugSettings()` hook reads current values
5. Debug menu UI allows toggling

### Adding a New Variant
```typescript
// 1. Add type
export type NewSectionVariant = 'default' | 'alt' | 'off';

// 2. Add to interface
interface DebugSettings {
  // ... existing
  newSectionVariant: NewSectionVariant;
}

// 3. Add default
const defaultSettings: DebugSettings = {
  // ... existing
  newSectionVariant: 'default',
};
```

### Using in a Section
```typescript
function NewSection() {
  const { newSectionVariant } = useDebugSettings();

  if (newSectionVariant === 'off') return null;

  return newSectionVariant === 'alt'
    ? <NewSectionAlt />
    : <NewSectionDefault />;
}
```

---

## COMPONENT IMPORTS

### From Workspace UI (`@workspace/ui`)
```typescript
import { Button } from '@workspace/ui/components/button';
import { Card } from '@workspace/ui/components/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@workspace/ui/components/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@workspace/ui/components/accordion';
```

### From Local Components
```typescript
import { GridSection, SectionBackground } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
```

### Icons
```typescript
import { IconName } from '@phosphor-icons/react';
// Available weights: thin, light, regular, bold, fill, duotone
```

---

## STYLING PATTERNS

### Section Container
```tsx
<GridSection className="py-16 md:py-24">
  <SectionBackground />
  <div className="container relative">
    {/* Content */}
  </div>
</GridSection>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Animation Wrapper
```tsx
<BlurFade delay={0.1}>
  <Component />
</BlurFade>
```

---

## ADAPTY-SPECIFIC CUSTOMIZATIONS

### Brand Colors
- Primary: `#6720FF` (Adapty purple) - use `primary` token
- Use semantic tokens, never hardcode colors

### Logo Assets
- Located in `public/assets/`
- Logo grid uses actual customer logos

### Content Already Adapted
- Homepage testimonials use real Adapty customers
- Stats use real Adapty metrics
- Logo grid uses real customer logos

---

## SCRAPING ADAPTY.IO

When scraping pages, look for:

### Pricing Page
- Tier names (Startup, Team, Enterprise)
- Monthly/annual prices
- Feature lists per tier
- Enterprise contact CTA
- Pricing FAQ

### Demo Page
- Hero headline
- Form fields
- Benefits list
- Social proof

### Feature Pages
- Hero with feature name
- Feature benefits
- Screenshots/demos
- Use cases
- Comparison tables

### Role Pages
- Audience-specific headline
- Pain points solved
- Features relevant to role
- Testimonials from that role
