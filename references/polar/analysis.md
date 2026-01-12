---
project: adapty-redesign
type: analysis
tags: [reference, polar, design-system, dark-theme, minimal]
extracted: 2026-01-12
---

# Polar Design System Analysis

## Overview
Polar uses a minimal, developer-focused dark design with Geist fonts (Vercel's typeface). Clean, code-aesthetic feel with excellent readability for technical content.

## Color Philosophy
- **Dark-first**: Near-black backgrounds (#171719)
- **Custom "polar" scale**: 11 levels from light (#d7d7db) to dark (#070708)
- **LAB color space**: For semantic colors (blue, green, red, yellow)
- **Blue accent**: Deep blue as primary (lab 44% - vivid but not overwhelming)
- **Muted foreground**: #6f717b for secondary text

### Key Colors
| Token | Value | Use |
|-------|-------|-----|
| background | #171719 | Main bg |
| card | #171719 | Card surfaces |
| popover | #101011 | Dropdowns, popovers |
| sidebar | #070708 | Darkest surface |
| border | #1d1d20 | All borders |
| foreground | #6f717b | Secondary text |
| primary | lab(44% ...) | Blue accent |

## Typography
- **Sans**: Geist Sans (Vercel's font)
- **Mono**: Geist Mono (excellent for code)
- **Weights**: 300 (light) → 700 (bold)
- **Default line-height**: 1.5 (normal)

### Type Scale
| Size | Rem | Pixels |
|------|-----|--------|
| xxs | .65rem | 10.4px |
| xs | .75rem | 12px |
| sm | .875rem | 14px |
| base | 1rem | 16px |
| lg | 1.125rem | 18px |
| xl | 1.25rem | 20px |
| 2xl | 1.5rem | 24px |
| 3xl | 1.875rem | 30px |
| 4xl | 2.25rem | 36px |
| 5xl | 3rem | 48px |
| 6xl | 3.75rem | 60px |
| 7xl | 4.5rem | 72px |

## Border Radius
- **Base**: 0.6rem (9.6px) - slightly larger than typical
- **Calculated sm/md**: Based on base minus pixels
- **Large cards**: Up to 2rem (32px)

## Spacing
- **Base unit**: 0.25rem (4px)
- **Tailwind-compatible**: Uses standard Tailwind spacing

## Animation
- **Duration**: 0.15s (fast, snappy)
- **Easing**: cubic-bezier(.4,0,.2,1) - standard ease-in-out

## Layout
| Breakpoint | Width |
|------------|-------|
| sm | 640px |
| md | 768px |
| xl | 1280px |
| 2xl | 1536px |

## Component Patterns

### Cards
- Background matches main background (#171719)
- Subtle borders (#1d1d20)
- Large radius (visible in screenshot)

### Buttons
- "Get Started" - white background, dark text, rounded
- "Why Polar" - dark background, light text, rounded

## ASCII Wireframes

### Full Page Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (transparent, sticky)                                    │
│ ◯ Logo          Features  Docs  Company              [Log In]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    HERO SECTION                                 │
│                                                                 │
│              "Monetize your software"                           │
│                 (large, centered)                               │
│                                                                 │
│       Turn your software into a business with 4 lines of code  │
│                                                                 │
│           [Get Started →]  [Why Polar]                          │
│              (white btn)    (dark btn)                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                   3-COLUMN FEATURE CARDS                        │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐          │
│  │ Payments,     │ │ Customer      │ │ Global        │          │
│  │ Usage &       │ │ Management    │ │ Merchant      │          │
│  │ Billing       │ │               │ │ of Record     │          │
│  │               │ │ [profile card]│ │               │          │
│  │ [tag pills]   │ │ John Doe      │ │ [tax report]  │          │
│  │ Subscriptions │ │ Premium Plan  │ │ VAT €2,450    │          │
│  │ Usage Billing │ │               │ │ Sales $3,120  │          │
│  │ Benefits      │ │               │ │               │          │
│  │ Customer Port │ │               │ │               │          │
│  │ Checkout Links│ │               │ │               │          │
│  │ Metrics       │ │               │ │               │          │
│  └───────────────┘ └───────────────┘ └───────────────┘          │
├─────────────────────────────────────────────────────────────────┤
│                   DASHBOARD PREVIEW                             │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  [blurred/bokeh dashboard screenshot]                   │    │
│  │   Latest Orders    |  Active Subscribers: 252           │    │
│  │   June 5 12:56     |  [bar chart with blue accent]      │    │
│  │   Bitspace Pro     |                                    │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│                      "polar.sh"                                 │
│                   (italic script logo)                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                  REALTIME METRICS (Beta)                        │
│  ┌────────────────────────┐ ┌────────────────────────────┐      │
│  │ [Now in Beta] pill     │ │ Activity      Profit: -$50 │      │
│  │                        │ │ ─────────────────────────  │      │
│  │ A realtime view of     │ │ Anthropic Inf.   $0.52 ▼   │      │
│  │ your revenue & costs   │ │ OpenAI Inf.      $0.78 ▼   │      │
│  │                        │ │ Trial Started    -         │      │
│  │ Track revenue, costs   │ │ Customer Acq.    $50  ▼    │      │
│  │ & profits in realtime  │ │                            │      │
│  │                        │ │                            │      │
│  │ [Read the docs →]      │ │                            │      │
│  └────────────────────────┘ └────────────────────────────┘      │
├─────────────────────────────────────────────────────────────────┤
│                  FRAMEWORK ADAPTERS                             │
│                                                                 │
│          "Integrate in under a minute"                          │
│                                                                 │
│     [Next.js]  BetterAuth  TypeScript  All 13 Adapters →        │
│      (selected)                                                 │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Next.js Adapter           │ ┌─────────────────────────┐│    │
│  │                           │ │ import { Checkout }     ││    │
│  │ Payments and Checkouts    │ │ from "@polar-sh/nextjs";││    │
│  │ made dead simple          │ │                         ││    │
│  │                           │ │ export const GET =      ││    │
│  │ ✓ Secure & Simple         │ │   Checkout({            ││    │
│  │ ✓ Integrated Portal       │ │     accessToken: 'xxx'  ││    │
│  │ ✓ Webhook Handler         │ │   });                   ││    │
│  │ ✓ Merchant of Record      │ │                         ││    │
│  │                           │ │ [gradient bg: orange →  ││    │
│  │ [Learn More →]            │ │  pink → blue]           ││    │
│  └───────────────────────────┴─└─────────────────────────┘┘    │
├─────────────────────────────────────────────────────────────────┤
│                  INGESTION STRATEGIES                           │
│                                                                 │
│     "Usage Based Billing on Autopilot with Ingestion"           │
│                                                                 │
│      [LLM]  Delta Time  Custom  All Strategies →                │
│     (selected)                                                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ LLM Strategy             │ [long code example with     │    │
│  │                          │  @polar-sh/ingestion        │    │
│  │ Capture Customer's       │  LLMStrategy, generateText  │    │
│  │ LLM Usage & bill them    │  openai integration         │    │
│  │                          │  externalCustomerId         │    │
│  │ ✓ Auto Token Ingestion   │  model, system, prompt]     │    │
│  │ ✓ Prompt & Completion    │                             │    │
│  │ ✓ Vercel AI SDK Support  │ [gradient bg: orange →      │    │
│  │                          │  pink → blue → purple]      │    │
│  │ [Learn More →]           │                             │    │
│  └──────────────────────────┴─────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────┤
│                  TESTIMONIAL (Featured)                         │
│                                                                 │
│                         " "                                     │
│                                                                 │
│     "The speed at which Polar is executing on the               │
│      financial infrastructure primitives the new                │
│      world needs is very impressive"                            │
│                                                                 │
│                        (◯)                                      │
│                   Guillermo Rauch                               │
│                 CEO & Founder of Vercel                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                  CHECKOUTS SECTION                              │
│                  "Built for simplicity"                         │
│           "Powerful Checkouts made simple"                      │
│                                                                 │
│               [Integrate Checkouts →]                           │
│                                                                 │
│  ┌────────────────────────┬──────────────────────────────┐      │
│  │ ◯ Pro Tier             │ Email: janedoe@gmail.com     │      │
│  │                        │ Cardholder: Jane Doe         │      │
│  │ [spotlight/beam effect]│ □ I'm purchasing as business │      │
│  │                        │ Billing address: [Country ▼] │      │
│  │                        │ Discount code: [________]    │      │
│  └────────────────────────┴──────────────────────────────┘      │
├─────────────────────────────────────────────────────────────────┤
│                  MERCHANT OF RECORD                             │
│                                                                 │
│  ┌────────────────────────┬──────────────────────────────┐      │
│  │ Polar as Merchant      │ [Dashboard screenshot]       │      │
│  │ of Record              │ Finance tab                  │      │
│  │                        │ Balance: $1,328.56           │      │
│  │ Forget billing & taxes │ Transactions:                │      │
│  │ We handle it all       │ Jan 1, 2025  Subscription    │      │
│  │                        │ Dec 24, 2024 Subscription    │      │
│  │ ✓ Sales Tax, VAT, GST  │ Dec 1, 2024  Subscription    │      │
│  │ ✓ Stripe Connect       │ Nov 24, 2024 Subscription    │      │
│  │ ✓ Transaction Ledger   │                              │      │
│  │                        │                              │      │
│  │ [Learn more →]         │                              │      │
│  └────────────────────────┴──────────────────────────────┘      │
├─────────────────────────────────────────────────────────────────┤
│                  TESTIMONIALS GRID                              │
│                       "Testimonials"                            │
│                  "Why people love Polar"                        │
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│  │ (◯) Guiller │ │ (◯) Steven  │ │ (◯) Mitchell│                │
│  │ "The speed  │ │ "Open source│ │ "I've joined│                │
│  │ at which..."│ │ + great DX" │ │ as advisor" │                │
│  │             │ │             │ │             │                │
│  │ ─────────── │ │ ─────────── │ │ ─────────── │                │
│  │ Guillermo   │ │ Steven Tey  │ │ Mitchell H. │                │
│  │ Vercel      │ │ Dub         │ │ Ghostty     │                │
│  └─────────────┘ └─────────────┘ └─────────────┘                │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│  │ (◯) Samuel  │ │ (◯) Morgan  │ │ (◯) Lee     │                │
│  │ "Amazing!"  │ │ "Huge cong- │ │ "I switched │                │
│  │ Pydantic    │ │ rats..."    │ │ Best ever"  │                │
│  │             │ │ Bold Metrics│ │ 1042 Studio │                │
│  └─────────────┘ └─────────────┘ └─────────────┘                │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│  │ (◯) Alex    │ │ (◯) Pontus  │ │ (◯) Suhas   │                │
│  │ "killer API"│ │ "DX first"  │ │ "BEST       │                │
│  │ Efficient   │ │ Midday      │ │ onboarding" │                │
│  │             │ │             │ │ Cubix       │                │
│  └─────────────┘ └─────────────┘ └─────────────┘                │
├─────────────────────────────────────────────────────────────────┤
│                  COMPETITIVE PRICING                            │
│                                                                 │
│  ┌────────────────────────┬──────────────────────────────┐      │
│  │ Competitive Pricing    │ Feature         Polar Stripe │      │
│  │                        │ ────────────────────────────  │      │
│  │ Polar is proud to be   │ Payment Proc.    ✓     ✓     │      │
│  │ the cheapest Merchant  │ Subscription     ✓     ✓     │      │
│  │ of Record              │ Merchant of Rec  ✓     ✗     │      │
│  │                        │ Tax Compliance   ✓     ✗     │      │
│  │ ✓ 4% + 40¢ per trans   │ Framework Adapt  ✓     ✗     │      │
│  │ ✓ No hidden fees       │ 6 lines of code  ✓     ✗     │      │
│  │ ✓ Global MoR           │ Flex Usage Bill  ✓     ✗     │      │
│  │ ✓ Volume Discounts     │                              │      │
│  │                        │ [gradient bg: pink/blue]     │      │
│  │ [Pricing] [vs Stripe→] │                              │      │
│  └────────────────────────┴──────────────────────────────┘      │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER (dark)                                                   │
│                                                                 │
│ ◯ Polar           Features    Resources    Company    Support   │
│                   Products    Why Polar    About      Docs      │
│ [Join Polar →]    Usage Bill  MoR          GitHub     Contact   │
│                   Customers   Pricing      X/Twitter  Status    │
│ © Polar 2026      Analytics   Downloads    Discord              │
│                   Benefits                 Brand Assets         │
│                   Finance                  Terms/Privacy        │
└─────────────────────────────────────────────────────────────────┘
```

### Section Inventory (12 sections)

| # | Section | Description |
|---|---------|-------------|
| 1 | Header | Transparent, minimal nav, logo left, links center, login right |
| 2 | Hero | Large headline, subline, dual CTAs (white/dark) |
| 3 | Feature Cards | 3-column grid with tag pills, embedded UI previews |
| 4 | Dashboard Preview | Blurred/bokeh screenshot, script logo below |
| 5 | Realtime Metrics | Beta badge, 2-column with activity feed |
| 6 | Framework Adapters | Tab switcher, feature + code side-by-side |
| 7 | Ingestion Strategies | Tab switcher, LLM billing code example |
| 8 | Featured Testimonial | Large centered quote, avatar, title |
| 9 | Checkouts | Product card + form preview |
| 10 | Merchant of Record | Feature list + dashboard screenshot |
| 11 | Testimonials Grid | 3x3 masonry grid of quote cards |
| 12 | Pricing Comparison | Feature list + comparison table |
| 13 | Footer | 5-column links, legal |

### Key Visual Patterns

1. **Code-First Aesthetic**: Multiple code snippets with syntax highlighting on gradient backgrounds
2. **Gradient Backgrounds**: Orange → pink → blue gradients for code blocks
3. **Tab Switchers**: Horizontal tabs for switching between framework/strategy options
4. **Feature + Code Layout**: Left side features, right side code example
5. **Pill Badges**: "Now in Beta" blue pills, feature tags in cards
6. **Masonry Testimonials**: 3-column grid with varying heights
7. **Comparison Tables**: Feature checkmark tables with gradient bg
8. **Blurred Dashboard Previews**: Bokeh effect on dashboard screenshots
9. **Minimal Buttons**: Outlined or solid, arrow icons (→)
10. **Green Checkmarks**: Feature lists use ✓ in brand green

### Component Patterns

#### Buttons
```
Primary:   [Get Started →]  white bg, dark text, rounded-full
Secondary: [Why Polar]      dark bg (#1d1d20), light text, rounded-full
Ghost:     [Learn More →]   transparent, light text, arrow icon
Outlined:  [Pricing Guide]  border only, rounded-full
```

#### Cards
```
Feature Card:
┌─────────────────────────┐
│ Title (white, bold)     │
│ Description (gray)      │
│                         │
│ [embedded UI preview]   │
│ or                      │
│ [tag] [tag] [tag]       │
│ [tag] [tag] [tag]       │
└─────────────────────────┘
Border: #1d1d20, radius: 0.6rem
```

#### Testimonial Card
```
┌─────────────────────────┐
│ (◯) avatar              │
│                         │
│ "Quote text in white"   │
│                         │
│ ────────────            │
│ Name                    │
│ Company (muted)         │
└─────────────────────────┘
```

## Key Insights for Adapty

1. **Geist fonts** are modern, clean, excellent for technical products
2. **Very subtle surface hierarchy** (same bg for cards and page)
3. **Blue accent** similar to Linear's indigo but more vivid
4. **0.6rem base radius** creates consistent, rounded feel
5. **Muted foreground (#6f717b)** for body text reduces harshness
6. **Fast animations (0.15s)** feel responsive
7. **Simple color system** - fewer tokens than Linear, more focused
8. **Code aesthetic** - monospace font prominently featured in brand
9. **Gradient code blocks** - distinctive orange/pink/blue gradients
10. **Tab-based content switching** - clean way to show multiple options
11. **Side-by-side feature+code** - effective for developer products
12. **Testimonial diversity** - notable tech leaders (Vercel, Pydantic, Ghostty creators)
