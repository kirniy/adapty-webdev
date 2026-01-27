# Adapty.io Content Inventory

This document captures the content structure from adapty.io homepage for reference.

---

## 1. HERO SECTION

### Headline
"Grow your app's revenue with the paywall platform built for mobile"

### Subheadline
"The all-in-one platform for managing in-app purchases, running A/B tests, and analyzing subscription revenue. No code required."

### Primary CTA
"Get started for free"

### Secondary CTA
"Talk to sales"

### Trust Signals
- "Trusted by 10,000+ apps"
- Logo bar showing: Locket, FitnessAI, Vow, Weather Fit, Cheddar, Sweatcoin, Daily Burn, etc.

---

## 2. VALUE PROPS SECTION (3 Cards)

### Section Title
"Made for subscription app teams"

### Card 1: Purpose-built for subscription apps
- **Description**: "Everything you need to manage, optimize, and grow in-app subscriptions. From paywalls to analytics."

### Card 2: Designed for speed
- **Description**: "Ship paywall changes in minutes, not weeks. No app store reviews, no code deploys required."

### Card 3: Data-driven optimization
- **Description**: "A/B test everything. Get statistical significance fast. Make decisions with confidence."

---

## 3. PAYWALL BUILDER SECTION

### Tag
"Paywall Builder"

### Title
"Build paywalls without code"

### Subtitle
"Visual editor for everyone."

### Description
"Create stunning subscription paywalls with our drag-and-drop builder. Designers and product managers can iterate independently."

### Interactive Options
1. **Visual drag-and-drop editor** - No coding required
2. **Pre-built templates** - Industry-tested designs
3. **Real-time device preview** - See changes instantly

### Feature Grid
- Native rendering - Paywalls render natively on iOS and Android
- Remote updates - No app store review needed
- A/B testing ready - Test any paywall variant
- Analytics built-in - Track conversions and revenue

---

## 4. A/B TESTING SECTION

### Tag
"A/B Testing"

### Title
"Run experiments that matter"

### Subtitle
"Data-driven decisions."

### Description
"Test paywalls, pricing, and offers with statistical rigor. Know what works with confidence, not guesswork."

### Interactive Options
1. **Multi-variant experiments** - Test A/B/C/D at once
2. **Audience targeting** - Segment by any attribute
3. **Statistical analysis** - Bayesian significance

### Feature Grid
- 20+ metrics - Conversion, ARPU, LTV, and more
- Traffic allocation - Control variant distribution
- Auto-winner - Automatic rollout to winning variant
- Real-time results - See data as it comes in

---

## 5. ANALYTICS SECTION

### Tag
"Analytics"

### Title
"Understand your revenue"

### Subtitle
"Real-time subscription intelligence."

### Description
"Track MRR, LTV, churn, and cohort retention. Get the metrics you need to grow your subscription business."

### Features
- Real-time dashboard - See revenue, trials, and conversions as they happen
- Cohort analysis - Understand retention patterns across user segments
- LTV predictions - AI-powered forecasts for up to 12 months

---

## 6. INTEGRATIONS SECTION

### Tag
"Integrations"

### Title
"Connect your tools"

### Description
"Send subscription events to your analytics, marketing, and CRM tools. 30+ integrations available out of the box."

### Integration Cards
1. **Amplitude** - Send subscription events to your product analytics
2. **AppsFlyer** - Attribute revenue to marketing campaigns
3. **Slack** - Get notified about important events
4. **Webhooks** - Send events to any endpoint

---

## 7. SDK SECTION

### Tag
"SDK"

### Title
"Integrate in minutes"

### Subtitle
"Lightweight SDK for iOS, Android, React Native, Flutter, and Unity."

### Description
"One SDK for everything. Handles purchases, subscriptions, and restore with just a few lines of code."

### Code Example (iOS/Swift)
```swift
import Adapty

// Initialize
Adapty.activate("YOUR_API_KEY")

// Fetch paywall
let paywall = try await Adapty.getPaywall(placementId: "onboarding")

// Show paywall
let viewController = AdaptyUI.getPaywallController(
    for: paywall,
    delegate: self
)
present(viewController, animated: true)
```

---

## 8. TESTIMONIALS SECTION

### Section Title
"Loved by product teams"

### Testimonial 1
- **Quote**: "Adapty helped us increase subscription revenue by 32% in the first month. The A/B testing is incredibly powerful."
- **Name**: Alex Chen
- **Title**: Head of Product
- **Company**: FitnessAI

### Testimonial 2
- **Quote**: "The paywall builder saved us weeks of development time. Our designers can now iterate without involving engineers."
- **Name**: Sarah Miller
- **Title**: CEO
- **Company**: Vow

### Testimonial 3
- **Quote**: "Finally, analytics that make sense for subscription apps. We can see LTV by cohort and make data-driven decisions."
- **Name**: James Wilson
- **Title**: Growth Lead
- **Company**: Weather Fit

---

## 9. FAQ SECTION

### Section Title
"Frequently asked questions"

### FAQ Items

**Q: How does Adapty handle App Store and Google Play billing?**
A: Adapty acts as a wrapper around StoreKit and Google Play Billing. We handle all the complexity—receipt validation, subscription status tracking, and auto-renewal management—so you don't have to.

**Q: Can I migrate my existing subscribers to Adapty?**
A: Yes, absolutely. Our migration tool can import your existing subscriber base without any disruption to their subscriptions.

**Q: Do I need to resubmit my app to update paywalls?**
A: No. With Adapty, you can update paywalls remotely without app store review. Changes go live instantly.

**Q: What platforms do you support?**
A: We support iOS, Android, React Native, Flutter, and Unity. All platforms have feature parity.

**Q: How accurate is the A/B testing?**
A: We use Bayesian statistics for accurate results with smaller sample sizes. Most tests reach significance within 7-14 days.

**Q: Is there a free tier?**
A: Yes. You can use Adapty for free up to $10k MRR. After that, pricing scales with your revenue.

---

## 10. CTA SECTION

### Headline
"Ready to grow your revenue?"

### Subheadline
"Start for free. No credit card required."

### Primary CTA
"Get started"

### Secondary CTA
"Schedule demo"

---

## 11. FOOTER

### Tagline
"The paywall platform for mobile apps"

### Navigation Columns

**Product**
- Paywall Builder
- A/B Testing
- Analytics
- Integrations
- Pricing

**Resources**
- Documentation
- Blog
- Case Studies
- API Reference
- Status

**Company**
- About
- Careers
- Contact
- Privacy
- Terms

### Social Links
- Twitter/X
- LinkedIn
- GitHub
- YouTube

---

## KEY MESSAGING THEMES

1. **No code required** - Emphasized throughout
2. **Speed of iteration** - Ship changes instantly
3. **Data-driven** - A/B testing and analytics
4. **Subscription focus** - Purpose-built for this use case
5. **Revenue growth** - Direct tie to business outcomes

---

*Content extracted from adapty.io homepage analysis*
