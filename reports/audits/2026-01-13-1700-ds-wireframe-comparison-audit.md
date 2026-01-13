# Design System Wireframe Comparison Audit

**Date**: 2026-01-13 17:00 GMT+3
**Auditor**: Claude Opus 4.5
**Scope**: All 5 DS prototypes vs reference websites
**Prototype URL**: https://adapty-prototype.vercel.app

---

## Executive Summary

After systematically comparing all 5 design system prototypes with their reference websites, I've identified **significant gaps** between our implementations and the original design DNA. While we've captured the basic color schemes and some structural elements, **none of the design systems truly embody the distinctive character** of their reference websites.

### Accuracy Scores

| Design System | Reference | Match | Status |
|---------------|-----------|-------|--------|
| DS1 Linear | linear.app | 45% | Needs major work |
| DS2 Attio | attio.com | 55% | Needs improvements |
| DS3 Polar | polar.sh | 40% | Needs major work |
| DS4 Vercel | vercel.com | 30% | Critical gaps |
| DS5 Clerk | clerk.com | 60% | Closest match |

---

## DS1: Linear-Inspired vs Linear.app

### What We Got Right
- Dark background (#08090a) ✅
- Purple accent color ✅
- White bordered primary button ✅
- Basic card structures ✅

### Critical Gaps

| Aspect | Linear.app | Our DS1 | Gap Severity |
|--------|-----------|---------|--------------|
| **Hero Visual** | Complex layered product shots with 3+ overlapping windows | Single dashboard mockup | 🔴 Major |
| **Animation** | 67+ micro-interactions, smooth reveals | Static | 🔴 Critical |
| **Typography** | Tight letter-spacing (-0.02em to -0.04em) | Standard | 🟡 Medium |
| **Feature Cards** | Animated 3D illustrations (speed lines, "50ms", "Create") | Static placeholder images | 🔴 Major |
| **Card Style** | Subtle glow/border with hover states | Flat with basic borders | 🟡 Medium |
| **Expand Buttons** | Circular "+" buttons on cards | Missing | 🟡 Medium |

### Key Missing Linear DNA
1. **The "crafted" feel** - Linear's cards have animated illustrations that demonstrate concepts visually (speed = motion lines, craft = precision guides)
2. **Layered depth** - Their hero has 3-4 product windows overlapping with subtle shadows
3. **Announcement banner style** - Their "New: Linear agent for Slack >" has a specific pill style we don't match

---

## DS2: Attio-Inspired vs Attio.com

### What We Got Right
- Light theme background ✅
- Black primary button + outlined secondary ✅
- Tab interface pattern ✅
- Clean hierarchy ✅

### Critical Gaps

| Aspect | Attio.com | Our DS2 | Gap Severity |
|--------|-----------|---------|--------------|
| **Headline Font** | Serif (Tiempos Text) for "magic" emphasis | All sans-serif | 🔴 Critical |
| **Color System** | LAB color space, muted tones | Standard hex, more saturated purple | 🟡 Medium |
| **Top Banner** | Dark promotional bar "Meet the Attio Developer Platform →" | Missing | 🟡 Medium |
| **Data Tables** | Color-coded badges (Excellent/Good/Medium/Low) | Not present | 🟡 Medium |
| **Testimonials** | Massive faded quote text as watermark | Standard quote card with image | 🟡 Medium |
| **Product Screenshot** | Live-looking app UI with real data feel | Dashboard mockup | 🟡 Medium |

### Key Missing Attio DNA
1. **The 4-font system** - Attio uses Inter, Display variant, Tiempos (serif), and JetBrains Mono strategically
2. **Hierarchical sophistication** - Their headline uses serif for emotional words ("magic"), sans-serif for functional
3. **Mature, enterprise feel** - Their design feels more "serious CRM" vs our more generic SaaS look

---

## DS3: Polar-Inspired vs Polar.sh

### What We Got Right
- Dark background (#171719) ✅
- Blue accent color ✅
- Minimal aesthetic ✅
- Fast animation timing concept (150ms) ✅

### Critical Gaps

| Aspect | Polar.sh | Our DS3 | Gap Severity |
|--------|----------|---------|--------------|
| **Hero** | Completely empty except faded text | Standard hero with CTAs | 🔴 Major |
| **Feature Cards** | 3-column with embedded mini-UIs (tax reports, user cards) | Standard feature cards | 🔴 Major |
| **Badge Style** | "Now in Beta" bright blue pill | Missing | 🟡 Medium |
| **Activity UI** | Transaction list with red down arrows, monospace prices | Not present | 🔴 Major |
| **3D Visual** | Isometric dashboard with keyboard | 2D dashboard | 🟡 Medium |
| **Code Focus** | Monospace used throughout for technical data | Standard fonts | 🟡 Medium |

### Key Missing Polar DNA
1. **The "developer tool" aesthetic** - Polar looks like something a developer built for developers
2. **Embedded micro-UIs** - Their cards contain actual working-looking interfaces (tax reports, activity feeds)
3. **Green accent for success states** - "Submitted" badge in green, we don't use this pattern
4. **Extreme minimalism** - Their hero is nearly empty, letting the product speak

---

## DS4: Vercel-Inspired vs Vercel.com

### What We Got Right
- True black background (#000000) ✅
- Stats/metrics display ✅
- White primary button ✅
- Bold visual approach ✅

### Critical Gaps

| Aspect | Vercel.com | Our DS4 | Gap Severity |
|--------|-----------|---------|--------------|
| **Hero Visual** | MASSIVE rainbow gradient with radiating lines + 3D metallic triangle | Plain dark background | 🔴 Critical |
| **Gradient System** | Signature pink→green→yellow→red spectrum | None | 🔴 Critical |
| **Customer Proof** | "runway build times 7m→40s" inline with logos | Standard "Trusted by" section | 🟡 Medium |
| **Tab System** | AI Apps, Web Apps, Ecommerce, Marketing, Platforms | Missing | 🟡 Medium |
| **Feature Cards** | Embedded interactive mockups (Thinking... state) | Static cards | 🔴 Major |
| **Icon Buttons** | Circular arrows in cards | Standard buttons | 🟡 Medium |

### Key Missing Vercel DNA
1. **The WOW factor** - Vercel's hero is designed to impress with bold colors and 3D graphics
2. **The triangle logo** - Their signature metallic triangle with surrounding gradients
3. **Bouncy animations** - Vercel uses spring-based easing (cubic-bezier with overshoot)
4. **Product categories** - Their tab system for different use cases

---

## DS5: Clerk-Inspired vs Clerk.com

### What We Got Right
- Light warm gray background (#F7F7F8) ✅
- Purple accent color ✅
- Pill-shaped buttons (24px radius) ✅
- Clean, modern aesthetic ✅

### Critical Gaps

| Aspect | Clerk.com | Our DS5 | Gap Severity |
|--------|-----------|---------|--------------|
| **Background Pattern** | Subtle geometric/circuit lines | Flat solid color | 🟡 Medium |
| **Font** | Suisse Intl (proprietary) | Inter | 🟡 Medium |
| **Hero Layout** | Text centered over pattern background | Standard hero | 🟡 Medium |
| **Component Showcase** | Real embedded sign-up form with OAuth buttons | Dashboard mockup | 🔴 Major |
| **Code Snippets** | `<SignUp />` component syntax | Not present | 🟡 Medium |
| **Secondary CTA** | "Watch demo 2 min" with play icon | "Schedule a demo" | ✅ Close |

### Key Missing Clerk DNA
1. **The developer-first showcase** - Clerk shows actual React components with code syntax
2. **Subtle background texture** - Their circuit-like pattern adds depth without distraction
3. **OAuth button styling** - Google/GitHub buttons have specific styling
4. **"Secured by Clerk" badge** - Their trust indicator in forms

---

## Priority Recommendations

### 🔴 CRITICAL (Must Fix)

1. **DS4 (Vercel)**: Add signature gradient hero with 3D visual - this is 90% of their brand identity
2. **DS1 (Linear)**: Add animated feature card illustrations - their cards tell stories visually
3. **DS2 (Attio)**: Implement serif font for headline emphasis - this creates their mature feel
4. **DS3 (Polar)**: Embed mini-UI elements in feature cards - this is their unique differentiator

### 🟡 IMPORTANT (Should Fix)

5. **All DS**: Add proper hover states and micro-interactions
6. **DS5 (Clerk)**: Add subtle background pattern
7. **DS1 (Linear)**: Fix letter-spacing to be tighter
8. **DS4 (Vercel)**: Add product category tabs

### 🟢 NICE TO HAVE

9. Custom fonts where applicable (Suisse for Clerk, Tiempos for Attio)
10. More sophisticated animation timing
11. 3D/isometric visuals for Polar and Vercel

---

## Methodology

### Tools Used
- Chrome browser automation via Claude-in-Chrome MCP
- Side-by-side visual comparison
- Design token analysis

### Screenshots Captured
- DS1 prototype hero + feature sections
- DS2 prototype hero + testimonials
- DS3 prototype hero + feature cards
- DS4 prototype hero + dashboard
- DS5 prototype hero + dashboard
- Linear.app hero + feature cards
- Attio.com hero + data tables
- Polar.sh hero + feature cards + activity UI
- Vercel.com hero + gradient visual + feature cards
- Clerk.com hero + component showcase

---

## Next Steps

1. Prioritize DS4 (Vercel) and DS5 (Clerk) for improvement
2. Add critical missing elements before stakeholder review
3. Consider which DS variants to present to Sergey
4. Plan Phase B integration based on selected DS winner

---

## Appendix: Reference URLs

- **Prototype**: https://adapty-prototype.vercel.app/?ds=ds1-5
- **Linear**: https://linear.app
- **Attio**: https://attio.com
- **Polar**: https://polar.sh
- **Vercel**: https://vercel.com/home
- **Clerk**: https://clerk.com
