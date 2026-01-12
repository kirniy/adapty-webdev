# Homepage Skeleton Specification

This document defines the exact structure, content, and components required for each prototype build. All prototypes must implement this skeleton identically to enable valid comparison.

---

## Overview

**Page**: Homepage only
**Purpose**: Test Design Systems (Phase A) and UI Libraries (Phase B)
**Requirement**: Identical content across all variants - only styling differs

---

## Section-by-Section Specification

### 1. Header / Navigation

**Components Required**:
- Logo (left aligned)
- Main navigation items with dropdown capability
- Auth buttons (right aligned)

**Navigation Structure**:
```
[Logo] [Product ▼] [Solutions ▼] [Resources ▼] [Pricing] [Docs] | [Log in] [Sign up]

Product Dropdown:
- Subscriptions SDK
- Paywall Builder
- A/B Testing
- Analytics
- Integrations

Solutions Dropdown:
- For Developers
- For Marketers
- For App Owners
- For Indie
- For Startups
- For Enterprise

Resources Dropdown:
- Blog
- Documentation
- Case Studies
- Ebooks
- Webinars
- Community
```

**Assets**: `/assets/logos/adapty-logo.svg`

---

### 2. Hero Section

**Components Required**:
- Promotional badge (optional, can be styled differently per DS)
- Main headline (H1)
- Subheadline (paragraph)
- Email input with CTA button
- Trust statement

**Content**:
```
Badge: "Ebook: $100K playbook | download →"

Headline: "Revenue management for in-app purchases"

Subheadline: "Save months on integrating subscriptions and double your app revenue with paywall management."

Email CTA:
- Placeholder: "Enter your work email"
- Button: "Get started"

Trust: "Trusted by 15,000+ apps worldwide"
```

**Hero Image**: `/assets/images/hero-overview.webp` (1400x720)
**Mobile Preview**: `/assets/images/hero/adapty-paywall-demo-preview@2x.webp`

---

### 3. Trusted By Section

**Components Required**:
- Section label
- Logo marquee/carousel

**Content**:
```
Label: "Trusted by 15,000+ apps and the world's largest app publishers"
```

**Logos** (from `/assets/logos/trusted-by/`):
- feeld.svg
- bumble.svg
- weewoo.svg
- appnation.webp
- almus.svg
- impala-studios.svg
- hubx.svg

---

### 4. Feature Sections (6 total)

#### 4A. Paywall A/B Testing
```
Title: "Test your way to higher conversions"
Subtitle: "Run experiments with statistical confidence"

Features:
- Test paywalls, pricing, and offers
- Statistical significance calculator
- Audience segmentation
- Automatic winner selection

Metrics to display:
- Conversion Rate: +23%
- Revenue per User: +18%
- Trial-to-Paid: +31%
```

#### 4B. Refund Saver
```
Title: "Recover revenue automatically"
Subtitle: "Reduce refunds with intelligent intervention"

Stats:
- "Save up to 40% of refund requests"
- "Automated customer recovery"
```

#### 4C. Subscription Analytics
```
Title: "Understand your subscription business"
Subtitle: "Real-time insights into revenue and user behavior"

Metrics:
- MRR / ARR
- LTV by cohort
- Churn rate
- Trial conversion
- Refund rate
```

#### 4D. No-Code Paywall Builder
```
Title: "Build paywalls without code"
Subtitle: "Design, test, and deploy paywalls in minutes"

Features:
- Drag-and-drop visual builder
- Pre-built templates
- Real-time preview on device
- Instant updates without app release
```

#### 4E. FunnelFox (Web-to-App)
```
Title: "Bridge the gap from web to app"
Subtitle: "Convert web visitors into app subscribers"
```

#### 4F. Revenue Sync (Integrations)
```
Title: "Connect with your favorite tools"
Subtitle: "Send subscription data everywhere"

Integration count: 22+
```

---

### 5. Integrations Marquee

**Components Required**:
- Section title
- Logo marquee (infinite scroll)

**Content**:
```
Title: "Connect with your favorite tools"
Subtitle: "Send subscription data to analytics, attribution, and marketing platforms"
```

**Integration Logos** (from `/assets/integrations/`):
24 integration partner logos

---

### 6. Role Cards Section

**Components Required**:
- Section headline
- 3-column card grid

**Content**:
```
Headline: "Help your team run the mobile subscription business. Faster and cheaper."

Card 1 - For Developers:
- Icon: Code bracket
- Description: "Integrate subscriptions in minutes with our SDK. Handle receipt validation, manage entitlements, and sync purchase data automatically."
- Features: Native SDKs, Server-side API, Webhook events

Card 2 - For Marketers:
- Icon: Chart/Growth
- Description: "Design paywalls, run A/B tests, and optimize conversions without engineering help."
- Features: No-code builder, A/B testing, Audience targeting

Card 3 - For App Owners:
- Icon: Dashboard
- Description: "Get real-time visibility into your subscription business."
- Features: Revenue analytics, Cohort analysis, Custom dashboards
```

---

### 7. Stats Section

**Components Required**:
- 4 large metric displays

**Content**:
```
Stat 1: "$2B+" - "Processed subscription revenue"
Stat 2: "15,000+" - "Apps powered by Adapty"
Stat 3: "99.99%" - "Uptime SLA"
Stat 4: "200M+" - "Monthly API requests"
```

---

### 8. SDK Code Snippet Section

**Components Required**:
- Tab selector (4 tabs)
- Code block with syntax highlighting
- Platform icons

**Content**:
```
Title: "One SDK for every platform"
Subtitle: "Integrate Adapty in minutes with native SDKs"

Tabs: JavaScript | React Native | Flutter | Swift

JavaScript Code:
```js
import { adapty } from 'adapty';

await adapty.activate('YOUR_API_KEY');

const profile = await adapty.getProfile();
const isPremium = profile.accessLevels['premium']?.isActive;
```

Platforms: iOS, Android, Flutter, React Native, Unity, Web, Stripe, Capacitor, KMP, FlutterFlow
```

**SDK Icons** (from `/assets/sdks/`):
10 platform icons

---

### 9. Testimonials Carousel

**Components Required**:
- Carousel/slider with navigation
- Testimonial cards with quotes, avatars, names

**Content** (5 testimonials):
```
Testimonial 1:
- Quote: "Adapty helped us increase our trial-to-paid conversion by 34%."
- Name: [Author Name]
- Role: [Title]
- Company: [Company]

[4 more testimonials with similar structure]
```

---

### 10. G2 Badges Section

**Components Required**:
- Badge grid/row

**Content**:
```
Title: "Top-rated on G2 | Winter 2025"

Badges:
- High Performer
- Easiest to Use
- Best Support
- Fastest Implementation
- Users Love Us
```

---

### 11. Case Studies Section

**Components Required**:
- Section headline
- Card grid (3x3 or responsive)

**Content** (9 case studies):
```
Title: "Trusted by thousands of scaling apps"

Case 1: Productivity app | +50% | "How pricing tests unlocked app's potential"
Case 2: Text on Pic | +30% | "How to boost revenue with the right experiments"
Case 3: Trip planning | +102% | "New onboarding and pricing strategy doubled revenue"
Case 4: Going Merry | 5x | "How to scale subscription revenue with Paywall Builder"
Case 5: Shmoody | $2M | "How to grow from a free app to $2M ARR"
Case 6: Lively | -83% | "Saved 82% of potentially lost revenue"
Case 7: Glam AI | 108% | "How to scale to $1.2M ARR in 3 months"
Case 8: Pepapp | 400% | "How to make Adapty free with Refund Saver"
Case 9: Fotorama | -40% | "How to decrease the refund rate with Adapty"
```

**Case Study Icons** (from `/assets/images/case-studies/`):
9 app icons

---

### 12. Enterprise Section

**Components Required**:
- Section with badges/icons
- CTA button

**Content**:
```
Title: "Enterprise-ready infrastructure"
Subtitle: "Built for scale, security, and compliance"

Features:
- SOC 2 Type II certified
- GDPR compliant
- 99.99% uptime SLA
- Dedicated support
- Custom contracts

CTA: "Contact sales"
```

---

### 13. Final CTA Section

**Components Required**:
- Dark background section
- Large headline
- Email CTA
- Secondary link

**Content**:
```
Headline: "Get started today or schedule a demo for your personal onboarding"

Primary CTA: [Email input] + "Start for free" button
Secondary: "Or schedule a demo →"
```

---

### 14. Footer

**Components Required**:
- Multi-column link grid
- Social icons
- Copyright

**Columns**:
```
Product: Subscriptions SDK, Paywall Builder, A/B Testing, Analytics, Integrations, Pricing

Solutions: For Developers, For Marketers, For App Owners, For Indie, For Startups, For Enterprise

Resources: Blog, Documentation, Case Studies, Ebooks, Webinars, Community, Changelog

Company: About Us, Careers, Contact, Partners, Terms, Privacy

Social: GitHub, LinkedIn, X (Twitter), Discord, YouTube

Copyright: "© 2026 Adapty. All rights reserved."
```

---

## Component Inventory

### Required UI Components

| Component | Variants | Notes |
|-----------|----------|-------|
| Button | primary, secondary, ghost | Email CTA, navigation |
| Input | email, with button | Hero, Final CTA |
| Card | feature, testimonial, case study, role | Multiple sections |
| Badge | text, icon | Categories, G2 |
| Marquee | logos | Trusted By, Integrations |
| Carousel | testimonials | Testimonials section |
| Tabs | code snippet | SDK section |
| Code Block | syntax highlighted | SDK section |
| Dropdown | navigation | Header |
| Icon | 50+ | Throughout |

### Layout Components

| Component | Usage |
|-----------|-------|
| Container | Max-width wrapper (1440px default) |
| Section | Vertical padding (80-120px) |
| Grid | 2, 3, 4 column layouts |
| Flex | Navigation, card rows |

---

## Asset Locations

All assets are in `/skeleton/assets/`:

```
/assets/
├── /images/
│   ├── hero-overview.webp
│   ├── /hero/
│   ├── /features/
│   └── /case-studies/ (9 app icons)
├── /logos/
│   ├── adapty-logo.svg
│   └── /trusted-by/ (7 logos)
├── /icons/
│   ├── /ui/
│   └── /social/
├── /sdks/ (10 platform icons)
└── /integrations/ (24 logos)
```

---

## Implementation Checklist

For each prototype, verify:

- [ ] All 14 sections implemented
- [ ] All content matches this spec exactly
- [ ] All images load correctly
- [ ] Mobile responsive (375px, 768px, 1024px, 1440px)
- [ ] No broken links or missing assets
- [ ] Consistent spacing based on DS tokens

---

## Notes

- **DO NOT** add or remove content across prototypes
- **DO NOT** change copy or structure
- **ONLY** change styling, colors, typography, spacing, animations
- Keep component structure consistent for valid comparison
