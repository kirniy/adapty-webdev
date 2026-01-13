---
project: adapty-redesign
type: analysis
tags: [reference, clerk, design-system, light-theme, developer-friendly]
extracted: 2026-01-12
---

# Clerk Design System Analysis

## Overview
Clerk uses a clean, light theme with developer-friendly aesthetics. Suisse International font gives it a modern, European feel. Purple brand color stands out against the neutral gray backgrounds.

## Color Philosophy
- **Light theme**: Warm gray background (#F7F7F8)
- **Near-black text**: #131316 for headings
- **Muted body text**: #42434D
- **Purple accent**: #6C47FF (vibrant, distinctive)
- **Subtle borders**: #D9D9DE, #EEEEF0

### Key Colors
| Token | Value | Use |
|-------|-------|-----|
| root-bg | #F7F7F8 | Page background |
| heading | #131316 | Titles |
| body | #42434D | Body text |
| brand | #6C47FF | CTAs, links, labels |
| border | #D9D9DE | Borders |
| muted-border | #EEEEF0 | Subtle dividers |

## Typography
- **Primary**: Suisse International (geometric, modern)
- **Numbers**: Geist Numbers (for tabular data)
- **Mono**: Söhne Mono (premium monospace)
- **Very tight letter-spacing**: -2.24px on H1 (-3.5%)

### Type Scale
| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| H1 | 64px | 700 | -2.24px | 72px |
| H2 Label | 13px | 500 | normal | 24px |
| H3 | 16px | 400 | normal | 24px |
| Body | 16px | 400 | - | 24px |

## Button Patterns
- **Pill buttons**: 24px radius (fully rounded)
- **Nav links**: No border-radius, minimal padding
- **CTA**: Purple background with white text

## Layout
- **Header margin-top**: 3rem (48px)
- **Background**: Subtle warm gray, not pure white

## Page Structure & Section Inventory

### ASCII Wireframe - Homepage

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Clerk raises $50m Series C                        Learn more >]    │
├─────────────────────────────────────────────────────────────────────┤
│ ©clerk   Products  Docs  Changelog  Company  Pricing   Sign in [→] │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│        ╭──○──────○──────○──────○──────○──╮   (circuit pattern bg)   │
│        │                                 │                          │
│                More than authentication,                            │
│                Complete User Management                             │
│                                                                     │
│     Need more than sign-in? Clerk gives you full stack auth and     │
│     user management — so you can launch faster, scale easier,       │
│     and stay focused on building your business.                     │
│                                                                     │
│           [Start building for free]    (▷) Watch demo 2 min         │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ Trusted by fast-growing companies around the world.                 │
│ [B] Browserbase    braintrust    🌿 Higgsfield    ↺ Consensus       │
├─────────────────────────────────────────────────────────────────────┤
│                       Clerk Components                              │
│                                                                     │
│              Pixel-perfect UIs, embedded in minutes                 │
│                                                                     │
│   Drop-in UI components for authentication, profile management,     │
│   organization management, and billing. Match to your brand with    │
│   any CSS library, then deploy to your own domain.                  │
│                                                                     │
│                    Explore all components >                         │
│                                                                     │
│ ┌──────────────────────┐    ┌───────────────────────────────────┐   │
│ │ ● USER AUTHENTICATION│    │  ┌─────────────────────────────┐  │   │
│ │                      │    │  │     Create your account     │  │   │
│ │ Add user <SignUp/>   │    │  │  Welcome! Please fill in... │  │   │
│ │ and <SignIn/>...     │    │  │  [Continue with Google]     │  │   │
│ │                      │    │  │  [Continue with GitHub]     │  │   │
│ │ <SignUp />           │    │  │         or                  │  │   │
│ │ <SignIn />           │    │  │  Email: [____________]      │  │   │
│ │ <UserButton />       │    │  │  Password: [__________]     │  │   │
│ │ <UserProfile />      │    │  │  [Continue >]               │  │   │
│ │ <Waitlist />         │    │  │  Secured by ©clerk          │  │   │
│ │                      │    │  └─────────────────────────────┘  │   │
│ │ ○ ORGANIZATIONS      │    │                                   │   │
│ │ ○ BILLING            │    │         Choose an account         │   │
│ └──────────────────────┘    │         ┌─────────────────┐       │   │
│                             │         │ Personal account│       │   │
│                             │         │ Clerk App Admin │       │   │
│                             │         └─────────────────┘       │   │
│                             └───────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│ █████████████████████  DARK SECTION  ███████████████████████████████│
│                                                                     │
│                       User authentication                           │
│                                                                     │
│            Everything you need for authentication                   │
│                                                                     │
│   Ever feel like authentication requirements change with the        │
│   season? Clerk keeps up with the latest trends and security        │
│   best practices.                                                   │
│                                                                     │
│                   Explore user authentication >                     │
│                                                                     │
│ ┌────────────────────────┐  ┌────────────────────────┐              │
│ │ ▪ ▪ ▪ ▪ ▪ ▪           │  │ Fraud and Abuse        │              │
│ │ Multifactor Auth       │  │ Prevention             │              │
│ │ Each user's self-serve │  │ ○──●──○──●──○          │              │
│ │ multifactor settings...│  │ Reduce fraudulent...   │              │
│ └────────────────────────┘  └────────────────────────┘              │
│ ┌────────────────────────┐  ┌────────────────────────┐              │
│ │ 👆 Advanced Security   │  │ G ◉ ⚡ X               │              │
│ │ SOC 2 type 2 compliant │  │ 📝 ☁ ▲                 │              │
│ │ and CCPA compliant...  │  │ Social Sign-On         │              │
│ └────────────────────────┘  │ 20+ options and growing│              │
│ ┌────────────────────────┐  └────────────────────────┘              │
│ │ Session Management     │  ┌────────────────────────┐              │
│ │ ┌──────────────────┐   │  │ Bot Detection          │              │
│ │ │ Device           │   │  │ ML-powered fraud       │              │
│ │ │ Browser          │   │  │ detection              │              │
│ │ │ Location         │   │  └────────────────────────┘              │
│ │ │ [Sign out device]│   │  ┌────────────────────────┐              │
│ │ └──────────────────┘   │  │ Magic Links            │              │
│ └────────────────────────┘  │ Yb9WrnC5nFrvvz         │              │
│ ┌────────────────────────┐  │ Joseph Cole            │              │
│ │ 📱 OTP: Phone, SMS,    │  │ j.cole@example.com     │              │
│ │ Books, TV              │  └────────────────────────┘              │
│ │ Email and SMS one-time │  ┌────────────────────────┐              │
│ │ passcodes              │  │ 🔒 Passwords           │              │
│ └────────────────────────┘  │ Breach detection       │              │
│                             └────────────────────────┘              │
│█████████████████████████████████████████████████████████████████████│
├─────────────────────────────────────────────────────────────────────┤
│                        Organizations                                │
│                                                                     │
│              The easy solution to multi-tenancy                     │
│                                                                     │
│   Clerk has all the features you need to onboard and manage the     │
│   users and organizations of your multi-tenant SaaS application.    │
│                                                                     │
│                     Explore B2B features >                          │
│                                                                     │
│ ┌────────────────────────┐  ┌────────────────────────┐              │
│ │ Auto-join              │  │ Invitations            │              │
│ │    👤──👤──👤           │  │ [✉ Invite this person]│              │
│ │    └── ⊕ Auto-join     │  │ Fuel your app's growth │              │
│ └────────────────────────┘  └────────────────────────┘              │
│ ┌────────────────────────┐  ┌────────────────────────┐              │
│ │ Custom roles           │  │ Organization UI        │              │
│ │ ┌──┬──┬──┐             │  │ Components             │              │
│ │ │👤│👤│👤│             │  │ ┌─────────────────┐    │              │
│ │ ├──┼──┼──┤             │  │ │ ©Clerk ▼        │    │              │
│ │ │👤│  │👤│             │  │ └─────────────────┘    │              │
│ │ └──┴──┴──┘             │  │ Turn-key simplicity    │              │
│ │ [Product Member]       │  └────────────────────────┘              │
│ │ [Administrator][Editor]│                                          │
│ └────────────────────────┘                                          │
├─────────────────────────────────────────────────────────────────────┤
│                        Billing [Beta]                               │
│                                                                     │
│           Subscription billing, without the headache                │
│                                                                     │
│   Add subscriptions to your B2C or B2B application without having   │
│   to write payment code, custom UI, or wrangle webhooks.            │
│                                                                     │
│   ✓ Define and manage plans    ┌──────────────────────────────┐     │
│   ✓ Unify user and sub data    │ Acme, Inc.                   │     │
│   ✓ Gate access to content     │ Product Pricing Integrations │     │
│                                │                              │     │
│   Explore Billing features >   │  ┌─────────────────────────┐│     │
│                                │  │ Checkout           ✕    ││     │
│                                │  │ Starter Plan    $9/mo   ││     │
│                                │  │ Tax             $5.00   ││     │
│                                │  │ Total          $14.00   ││     │
│                                │  │ Visa ···· 4242          ││     │
│                                │  │ [Payment successful! ✓] ││     │
│                                │  │ [Pay with Apple Pay]    ││     │
│                                │  │ [Go to app]             ││     │
│                                │  └─────────────────────────┘│     │
│                                └──────────────────────────────┘     │
├─────────────────────────────────────────────────────────────────────┤
│ █████████████████████  DARK SECTION  ███████████████████████████████│
│                                                                     │
│  Frameworks                        Integrations                     │
│  Build with SDKs for               Integrate with                   │
│  modern frameworks                 the tools you love               │
│                                                                     │
│  ┌──┬──┬──┐ ┌──┬──┬──┐            ┌──┬──┬──┐ ┌──┬──┬──┐            │
│  │Ⓝ │⚛ │▲│ │⚡│🔄│▲│            │  │  │  │ │  │  │  │            │
│  └──┴──┴──┘ └──┴──┴──┘            └──┴──┴──┘ └──┴──┴──┘            │
│                                                                     │
│  All frameworks >                  All integrations >               │
│█████████████████████████████████████████████████████████████████████│
├─────────────────────────────────────────────────────────────────────┤
│                    What people are saying                           │
│                                                                     │
│           Trusted by startups and the world's largest companies     │
│                                                                     │
│ ┌────────────────────────────┐  ┌────────────────────────────┐      │
│ │ ▲Vercel                    │  │ "After spending many hours │      │
│ │                            │  │  on auth issues..."        │      │
│ │                            │  │                            │      │
│ │                            │  │  Julian Benegas            │      │
│ │                            │  │  CEO / BaseHub        👤   │      │
│ └────────────────────────────┘  └────────────────────────────┘      │
│ ┌────────────────────────────┐  ┌────────────────────────────┐      │
│ │ "Clerk feels like the      │  │ "Clerk's integration gives │      │
│ │  first time I booted my    │  │  Supabase developers..."   │      │
│ │  computer with an SSD."    │  │                            │      │
│ │                            │  │  Paul Copplestone          │      │
│ │  Theo Browne               │  │  CEO / Supabase       👤   │      │
│ │  CEO / Ping Labs      👤   │  └────────────────────────────┘      │
│ └────────────────────────────┘  ┌────────────────────────────────┐  │
│ ┌────────────────────────────┐  │ ████ STRIPE FEATURED ████████  │  │
│ │ "Clerk let us spin up a    │  │ "We're big admirers of what   │  │
│ │  new product in hours..."  │  │  the @clerk team are building │  │
│ │                            │  │  and looking forward to       │  │
│ │  Kevin Van Gundy           │  │  working more closely."       │  │
│ │  CEO / Hypermode      👤   │  │                               │  │
│ └────────────────────────────┘  │  Patrick Collison             │  │
│                                 │  CEO / Stripe            👤   │  │
│                                 └────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                              │
│ ©clerk  Products  Docs  Company  Resources                          │
│         Authentication  Quickstarts  About  Blog                    │
│         Organizations   Components   Careers Changelog              │
│         ...                                                         │
└─────────────────────────────────────────────────────────────────────┘
```

### Section-by-Section Breakdown

| # | Section | Background | Key Visual Elements |
|---|---------|------------|---------------------|
| 1 | Announcement Bar | Purple/brand | Funding news banner |
| 2 | Hero | Warm gray #F7F7F8 + circuit pattern | Large H1, pill CTA, demo link |
| 3 | Logo Bar | White | 4 customer logos |
| 4 | Clerk Components | Light gray | Interactive accordion + live form preview |
| 5 | User Authentication | Dark gray/black | 2-column feature card grid (8 cards) |
| 6 | Organizations | Light | 4 feature cards with org visualizations |
| 7 | Billing (Beta) | Light | Checkout flow preview with payment modal |
| 8 | Frameworks/Integrations | Dark | 2x3 icon grids for SDKs and integrations |
| 9 | Testimonials | Light | 2-column masonry grid, Stripe featured card |
| 10 | Footer | Light | Multi-column link structure |

### Unique Patterns

- **Interactive Component Showcase**: Live accordion tabs that update the form preview
- **Purple Label-Style H2s**: Section headers use brand purple color
- **Stripe Featured Testimonial**: Purple gradient background card for Patrick Collison quote
- **Announcement Bar**: Top-of-page funding news with arrow CTA
- **Circuit/Node Background Pattern**: Subtle geometric pattern in hero section

## Key Insights for Adapty

1. **Suisse font** gives European, professional feel
2. **Purple accent** (#6C47FF) is memorable and distinctive
3. **Warm gray background** (#F7F7F8) easier on eyes than white
4. **Extreme letter-spacing** on headlines (-3.5%)
5. **Pill-shaped buttons** (24px radius) for CTAs
6. **Minimal nav styling** - no visible buttons, just text
7. **Label-style H2s** in brand color for section headers
8. **16px/24px body** rhythm is comfortable and readable
9. **Premium monospace** (Söhne Mono) for code blocks
10. **Light, airy feel** achieved through spacing and color
11. **Interactive component showcase** with accordion + live preview
12. **Alternating light/dark sections** for visual rhythm
13. **Featured testimonial with gradient background** for social proof emphasis
