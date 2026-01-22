# Page Creation Project - Agent Instructions

## Project Overview
Creating new pages for Adapty marketing website by copying and adapting from achromatic template.

## Build & Run Commands

```bash
cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto
pnpm --filter marketing dev    # Dev server on localhost:3001
pnpm --filter marketing build  # Production build (verify changes)
```

## Key Directories

### Pages (create/modify here)
```
apps/marketing/app/
├── pricing/           # Enhance this
├── schedule-demo/     # Create this
├── paywall-builder/   # Future
└── for-marketers/     # Future
```

### Sections (reuse from here)
```
apps/marketing/components/sections/
├── hero.tsx, hero-split.tsx    # Hero patterns
├── features-bento-tabs.tsx     # Feature showcase
├── pricing-hero.tsx            # Pricing display
├── testimonials.tsx            # Social proof
├── cta.tsx                     # Call to action
└── faq.tsx                     # FAQ accordion
```

### Content (add text here)
```
apps/marketing/lib/content.ts   # All page content
```

### Debug Context (add variants here)
```
apps/marketing/lib/debug-context.tsx
```

## Tools Reference

### Firecrawl (Content Scraping)
```
mcp__firecrawl__firecrawl_scrape
  url: https://adapty.io/pricing
  formats: ["markdown"]
```

### Agent Browser (Visual Testing)
```bash
agent-browser open http://localhost:3001/pricing
agent-browser screenshot
agent-browser text
```

## Skills Applied

1. **react-best-practices** - Performance, no waterfalls, Server Components
2. **web-animation-design** - ease-out, <300ms, useReducedMotion
3. **ui-ux-pro-max** - Spacing, typography, accessibility

## Design Tokens

```
primary            - #6720FF (Adapty purple)
muted-foreground   - Secondary text
background         - Page backgrounds
border             - Borders
```

## Patterns to Follow

### Page Structure
```typescript
// Follow this pattern from homepage
export default function NewPage() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
```

### Content in lib/content.ts
```typescript
export const PAGE_NAME = {
  hero: { title: "...", description: "..." },
  features: [...],
  faq: [...],
};
```

## Progress Notes
<!-- Add learnings after each loop -->
