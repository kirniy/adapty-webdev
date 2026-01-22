# Adapty Website Illustration Generation Plan

> **Purpose**: Comprehensive task list for generating AI illustrations using Nano Banana Pro for the Adapty website redesign.
> **Last Updated**: 2026-01-20
> **Style System**: TBD (to be determined after style exploration)

---

## Executive Summary

This document catalogs all visual assets needed for the Adapty website, categorizes them by type, specifies exact content requirements based on real Adapty product features, and provides guidance for AI image generation.

---

## 1. Current Illustration Categories (from adaptyillustrations analysis)

### 1.1 Dashboard/Analytics Screenshots
UI mockups showing the Adapty dashboard with real metrics.

| File | Description | Key Elements |
|------|-------------|--------------|
| `hero-overview.webp` | Main analytics dashboard | Revenue ($351.4K), MRR ($113.7K), ARR ($1,364,646), New subscriptions (7K), ARPPU ($24.74), Active trials (789), country filters |
| `analytics.webp` | Cohorts & Funnels view | Cohort tables, Revenue chart ($56,823), Funnels (Install 100% > Paywall 54% > Trial 8.3% > Paid 0.9%), Conversion rate |
| `feature-analytics.webp` | Revenue chart card | Stacked bar chart with Campaign 1-4, $56,823 revenue, +11.4% growth |

### 1.2 Mobile Paywall Examples
iPhone mockups showing subscription screens.

| File | Description | Key Elements |
|------|-------------|--------------|
| `hero-paywall.webp` | Yoga app paywall | "FIRSTPOSE PRO", "Breathe, Bend, Begin", pricing (3-day trial, $24.99/year), review card, "Start with trial" CTA |
| `role-marketers-new.webp` | 3 paywall examples | Fitness app (dark), Trail discovery app, Yoga app - showing variety of styles |
| `paywall-builder.webp` | Builder + Preview | Left panel with controls (Layout, Products, Text, Buttons), right side iPhone preview |

### 1.3 Feature Illustrations
Abstract/simplified visuals for specific features.

| File | Description | Key Elements |
|------|-------------|--------------|
| `feature-ab.webp` | A/B testing concept | Two phones with blue/green variants, showing different paywall layouts |
| `feature-paywall.webp` | Paywall builder features | Phone outline with floating element cards (Media, Quiz, Typography, Loaders) |
| `main-feature-slide-7.webp` | Paywall elements | Phone + feature cards (Media, Quiz, Typography, Loaders) |

### 1.4 Developer-Focused Graphics
Code snippets and SDK integration visuals.

| File | Description | Key Elements |
|------|-------------|--------------|
| `sdk-install-cover.webp` | SDK setup steps | 3 numbered steps: 1. Configuring platforms, 2. Installing Adapty SDK (code snippet), 3. Processing purchasing events |
| `role-developers-new.webp` | Same as above | Developer integration flow |

### 1.5 Product Screenshots (FunnelFox)
Web-to-app funnel builder UI.

| File | Description | Key Elements |
|------|-------------|--------------|
| `funnelfox.webp` | FunnelFox onboarding | 4 phone screens: Picture picker (gender), Single-select question, Pricing plans, Payment form with PayPal/Credit Card |

### 1.6 Conceptual/Marketing Graphics
Abstract illustrations for marketing sections.

| File | Description | Content |
|------|-------------|---------|
| Various PNG screenshots | Stacked dashboard cards | Revenue, Conversion rate, Funnels - arranged in 3D perspective |
| `image - 2026-01-19 23-57-27.png` | A/B test configurator | Left: option cards ("Add a weekly plan", "Add a 3-day trial", "Raise annual price"), Right: phone paywall |

### 1.7 Avatar/Testimonial Photos
Professional headshots for testimonial sections.

| Folder | Count | Style |
|--------|-------|-------|
| `avatars/` | 16 images | AI-generated professional portraits, diverse, office/casual backgrounds |

### 1.8 UI Mockup Templates (from Oatmeal template)
Various sizes for different section layouts.

| Pattern | Sizes | Use Case |
|---------|-------|----------|
| `1-color-olive-*.webp` | 1000x800 to 2000x1408 | SaaS dashboard mockups with olive color palette |

---

## 2. Required Graphics by Website Section

Based on adapty.io website analysis:

### 2.1 Homepage Hero

**Current**: Dashboard overview + Paywall preview toggle
**Need to Generate**:
- [ ] Analytics dashboard overview (similar to `hero-overview.webp`)
- [ ] Paywall preview on iPhone mockup
- [ ] Alternative: Abstract 3D visualization of subscription flow

**Exact Content Requirements**:
- Metrics: Revenue, MRR, ARR, Subscriptions, ARPPU, Active trials
- App examples: "My Yoga app", "My Habits app"
- Countries: United States, Mexico, Ukraine, Turkey, Chile

### 2.2 For Developers Section

**Current**: SDK code snippet visualization
**Need to Generate**:
- [ ] 3-step SDK integration flow
- [ ] Code editor mockup with Adapty.activate() snippet
- [ ] Cross-platform sync visualization

**Exact Content Requirements**:
```swift
// Must show actual SDK methods:
Adapty.activate("PUBLIC_SDK_KEY", customerUserId: "YOUR_USER_ID")
Adapty.getPaywall(placementId: "YOUR_PLACEMENT_ID")
Adapty.makePurchase(product: product)
Adapty.getProfile()
Adapty.restorePurchases()
```

### 2.3 For Marketers Section

**Current**: Multiple paywall examples
**Need to Generate**:
- [ ] 3-4 diverse paywall designs (different app categories)
- [ ] A/B test comparison visual
- [ ] Localization/personalization concept

**App Categories to Cover**:
1. Fitness/Health (dark theme, imagery-heavy)
2. Productivity (clean, minimal)
3. Photo/Video editing (creative, colorful)
4. Finance/Utility (professional, trust-focused)

### 2.4 For App Owners Section

**Current**: Revenue analytics charts
**Need to Generate**:
- [ ] Revenue growth chart (line + bar)
- [ ] Cohort analysis table
- [ ] LTV prediction visualization
- [ ] Funnel drop-off chart

**Exact Metrics to Show**:
- Revenue: ~$50K-$500K range
- MRR growth: +10-40% indicators
- Conversion funnel: Install > Paywall > Trial > Paid
- Cohort periods: P2, P3, P4 with predicted revenue/LTV

### 2.5 Paywall Builder Page

**Current**: Builder UI + Preview
**Need to Generate**:
- [ ] Full builder interface mockup
- [ ] Multiple template examples (5+ styles)
- [ ] Element customization panels

**Builder Elements**:
- Layout controls
- Products configuration
- Text editing
- Button styling
- Background/media upload
- Localization table

### 2.6 A/B Testing Page

**Current**: Test comparison visualization
**Need to Generate**:
- [ ] A/B/C variant comparison
- [ ] Metrics calculation visual
- [ ] Predicted winner indicator
- [ ] Test timeline/progress

**Test Metrics to Display**:
- Revenue per variant
- Conversion rate %
- Statistical significance
- Predicted winner probability

### 2.7 Revenue Analytics Page

**Current**: Dashboard charts
**Need to Generate**:
- [ ] Real-time metrics dashboard
- [ ] Segmentation/grouping visual
- [ ] Cohort analysis view
- [ ] Revenue prediction chart

### 2.8 Integrations Section

**Current**: Logo grid + event flow
**Need to Generate**:
- [ ] Event flow diagram (Adapty > 3rd party services)
- [ ] Integration logos arrangement

**Integration Partners** (from website):
Adjust, Airbridge, Amazon S3, Amplitude, Apple Ads, AppsFlyer, AppMetrica, Asapty, Branch, Braze, Facebook Ads, Firebase, Google Cloud Storage, Google Analytics, Mixpanel, OneSignal, PostHog, Pushwoosh, Singular, SplitMetrics, Stripe, Tenjin, Webhooks

### 2.9 Case Studies Section

**Current**: App icons + result cards
**Need to Generate**:
- [ ] Generic app icon placeholders (if needed)
- [ ] Result metric cards (+X% revenue, etc.)

### 2.10 Testimonial Section

**Current**: AI-generated professional portraits
**Need to Generate**:
- [ ] 8-12 diverse professional headshots
- [ ] Mix of genders, ethnicities, ages
- [ ] Professional/casual office backgrounds

---

## 3. Abstract/Decorative Graphics

For backgrounds and visual interest:

### 3.1 Fluid Minimalism Backgrounds
Using the fluid-minimalism skill template:

- [ ] Hero section background (purple > pink gradient, 3D tubes)
- [ ] Feature section dividers
- [ ] CTA section backgrounds

**Color Palettes**:
1. **Adapty Brand**: #6720FF (purple) > soft pink
2. **Fresh Mint**: #00d4aa > #fffacd
3. **Ocean Blue**: #0066ff > #b3e5fc
4. **Monochrome**: #2c2c2c > #f5f5f5

### 3.2 3D Perspective Screenshots
Stacked/angled dashboard cards:

- [ ] Revenue + Funnels + Conversion (3-card stack)
- [ ] Analytics dashboard with depth

---

## 4. Content Accuracy Checklist

All generated illustrations must show REAL Adapty features:

### 4.1 Metrics (must be realistic)
- [x] Revenue: $10K - $1M+ range
- [x] MRR: $5K - $200K range
- [x] Conversion rates: 0.5% - 5% (Install to Paid)
- [x] ARPPU: $10 - $50 range
- [x] Churn rate: 3% - 15% monthly

### 4.2 SDK Methods (exact names)
- [x] `Adapty.activate()`
- [x] `Adapty.getPaywall()`
- [x] `Adapty.makePurchase()`
- [x] `Adapty.getProfile()`
- [x] `Adapty.restorePurchases()`

### 4.3 Platform Support
- [x] iOS (Swift SDK)
- [x] Android (Kotlin SDK)
- [x] React Native
- [x] Flutter
- [x] Unity
- [x] Capacitor (new)
- [x] KMP (new)
- [x] Web/Stripe

### 4.4 Dashboard Sections
- [x] Overview (main metrics)
- [x] Revenue analytics
- [x] Cohorts
- [x] Funnels
- [x] A/B tests
- [x] Paywalls
- [x] Placements
- [x] Products
- [x] Integrations

---

## 5. Generation Workflow

### Step 1: Style Exploration
1. Generate 5-10 style variations using Nano Banana Pro
2. Test different approaches:
   - Fluid minimalism (3D tubes)
   - Clean UI mockups
   - Abstract tech illustrations
   - Isometric 3D scenes
3. Select preferred style for consistency

### Step 2: Template Creation
1. Create base templates for each category
2. Document prompt patterns that work
3. Establish color palette rules

### Step 3: Batch Generation
1. Generate all assets in chosen style
2. Use consistent resolution (2K or 4K for final)
3. Name files systematically: `{section}-{element}-{variant}.png`

### Step 4: Review & Iteration
1. Check for content accuracy
2. Verify brand consistency
3. Iterate on underperforming assets

---

## 6. Technical Specifications

### 6.1 Resolution Requirements
| Use Case | Resolution | Nano Banana Setting |
|----------|------------|---------------------|
| Hero images | 4K | `--resolution 4K` |
| Feature sections | 2K | `--resolution 2K` |
| Thumbnails/cards | 1K | `--resolution 1K` |
| Drafts/iteration | 1K | `--resolution 1K` |

### 6.2 Aspect Ratios
| Type | Ratio | Example Size |
|------|-------|--------------|
| Hero banner | 16:9 | 1920x1080 |
| Feature image | 4:3 | 1600x1200 |
| Square card | 1:1 | 1200x1200 |
| Phone mockup | 9:19.5 | 390x844 (iPhone 14 Pro) |

### 6.3 File Naming Convention
```
adapty-{section}-{element}-{variant}-{resolution}.png

Examples:
adapty-hero-dashboard-overview-4k.png
adapty-paywall-fitness-dark-2k.png
adapty-analytics-revenue-chart-2k.png
```

---

## 7. Priority Order

### P0 - Critical (Homepage)
1. Hero dashboard overview
2. Hero paywall preview
3. Logo section (existing assets)

### P1 - High Priority (Core Features)
1. For Developers: SDK integration visual
2. For Marketers: 3 paywall examples
3. For App Owners: Analytics dashboard
4. Paywall Builder: UI mockup

### P2 - Medium Priority (Feature Pages)
1. A/B Testing: Comparison visual
2. Revenue Analytics: Charts
3. Integrations: Event flow
4. Case Studies: Result cards

### P3 - Lower Priority (Polish)
1. Abstract backgrounds
2. Section dividers
3. Additional paywall variants
4. Testimonial avatars

---

## 8. Style Options to Explore

### Option A: Clean UI Mockups
- Realistic dashboard screenshots
- Actual UI elements
- Professional, product-focused

### Option B: Fluid Minimalism (3D Abstract)
- Soft 3D tubular shapes
- Gradient backgrounds
- Modern tech aesthetic

### Option C: Isometric Illustrations
- 3D isometric scenes
- Simplified UI elements
- Playful but professional

### Option D: Hybrid
- UI mockups with abstract background elements
- Floating cards with depth
- Combines realism with style

---

## 9. Next Steps

1. **Style Exploration Session**: Generate 5-10 test images to find the right aesthetic
2. **Style Selection**: Review with stakeholder, pick direction
3. **Template Documentation**: Document winning prompts
4. **Batch Generation**: Create all P0 and P1 assets
5. **Integration**: Add to prototype website
6. **Iteration**: Refine based on context

---

## Appendix A: Nano Banana Pro Prompt Templates

### Dashboard Screenshot Style
```
Professional SaaS analytics dashboard UI mockup. Clean white background,
purple accent color (#6720FF). Shows revenue chart, subscription metrics,
cohort table. Modern minimal design, soft shadows, rounded corners.
High resolution, crisp UI elements.
```

### Paywall Mockup Style
```
iPhone 14 Pro mockup showing subscription paywall screen. Dark/light theme,
[app category] app aesthetic. Shows pricing options (monthly/yearly),
free trial CTA, feature benefits list. Professional mobile UI design.
```

### Abstract Background Style
```
Abstract 3D background featuring organic fluid tubular shapes.
Material: soft-touch matte silicone with smooth gradient.
Color palette: deep purple (#6720FF) fading into soft pink.
Lighting: airy, bright, diffuse with soft ambient occlusion.
Minimalist clean corporate tech aesthetic, negative space in center.
```

---

## Appendix B: Reference Images Location

Current illustrations stored at:
`/Users/kirniy/Downloads/adaptyillustrations/`

Subdirectories:
- `avatars/` - Testimonial portraits
- `ui-mockups-fromtemplate/` - Oatmeal template mockups

---

*Document created for Adapty website redesign project. Use with Nano Banana Pro skill for AI image generation.*
