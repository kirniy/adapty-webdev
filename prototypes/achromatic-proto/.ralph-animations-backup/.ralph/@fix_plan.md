# Page Creation Fix Plan

## CRITICAL: URL MAPPING REFERENCE

**ALWAYS scrape the EXACT adapty.io URL before building each page:**

| Our Page | Scrape This URL | Check for Subpages |
|----------|-----------------|-------------------|
| `/pricing` | https://adapty.io/pricing | Yes - check for /enterprise, /faq links |
| `/schedule-demo` | https://adapty.io/schedule-demo | Yes - check form fields, benefits |
| `/paywall-builder` | https://adapty.io/paywall-builder | Yes - may have /templates, /features |
| `/paywall-ab-testing` | https://adapty.io/paywall-ab-testing | Yes |
| `/onboarding-builder` | https://adapty.io/onboarding-builder | Yes |
| `/for-marketers` | https://adapty.io/for-marketers | Yes |
| `/for-developers` | https://adapty.io/for-developers | Yes |
| `/for-app-owners` | https://adapty.io/for-app-owners | Yes |

**WORKFLOW FOR EACH PAGE:**
1. `mcp__firecrawl__firecrawl_scrape` the exact URL above
2. `agent-browser open [url]` and `screenshot` to study layout
3. Read ALL scraped content - list every section found
4. Compare with this fix plan - ADD any missing sections
5. ONLY THEN start coding with REAL content

---

## Priority Guide
- **P0**: Critical pages for launch (Pricing, Demo)
- **P1**: Feature pages (product capabilities)
- **P2**: Audience pages (role-specific)

---

## P0: Critical Pages

### [>] Pricing Page - Full Rebuild (IN PROGRESS)
**Target**: `apps/marketing/app/pricing/page.tsx`
**Source content**: https://adapty.io/pricing
**Template reference**: Existing `pricing/page.tsx` + `pricing-hero.tsx` + `pricing-faq.tsx`

**Tasks**:
1. [ ] Scrape adapty.io/pricing with firecrawl for final content verification
2. [x] FIX: Updated billing config to match real adapty.io pricing:
   - Free: $0 for up to $10K MTR
   - Pro: 1% of MTR, min $99/month
   - Pro+: 1.2% of MTR, min $499/month
   - Enterprise: Custom pricing
3. [ ] CREATE: PricingComparison section - feature comparison table (9 categories, 60+ features)
4. [ ] CREATE: StartupCallout section - "Startup with less than $5K MTR?"
5. [x] Enhanced `pricing-hero.tsx` with BlurFade animations
6. [x] Updated `pricing-faq.tsx` with FAQs (revised for percentage-based pricing)
7. [ ] Add Logos, Testimonials, CaseStudies sections to page
8. [x] Build passes
9. [ ] Visual check with agent-browser

**Sections to use/create**:
- PricingHero (enhance existing) - tier cards: Free, Pro (1% min $99), Pro+ (1.2% min $499), Enterprise
- StartupCallout (create) - "Startup with less than $5K MTR?" CTA
- Logos (reuse) - "Trusted by 15,000+ apps"
- **PricingComparison (CREATE - CRITICAL)** - feature comparison table with 9 categories:
  - Purchases Infrastructure, Integrations, Paywall management, Analytics
  - Monetization experiments, CRM, Security & Compliance, Admin controls, Customer service
- PricingFAQ (enhance existing)
- Testimonials (reuse)
- CaseStudies (reuse) - "Read the real cases"

---

### [ ] Schedule Demo Page - NEEDS CONTENT PARITY CHECK
**Target**: `apps/marketing/app/schedule-demo/page.tsx` (CREATE)
**Source content**: https://adapty.io/schedule-demo
**Template reference**: `contact/page.tsx` for form pattern

**VERIFY AGAINST REAL SITE**: Loop 2 created this page but may have invented content.
Must scrape https://adapty.io/schedule-demo and verify ALL content matches.

**Tasks**:
1. [ ] VERIFY: Scrape https://adapty.io/schedule-demo - compare with current implementation
2. [ ] VERIFY: Screenshot original vs our version - same sections? Same content?
3. [x] Created `app/schedule-demo/page.tsx` with metadata
4. [x] Created `schedule-demo-hero.tsx` section
5. [x] Added route to `@workspace/routes` (ScheduleDemo)
6. [x] Build passes
7. [ ] MANDATORY: Visual check with agent-browser - compare to adapty.io original
8. [ ] FIX any content discrepancies found

**Sections to use/create**:
- DemoHero (create from hero-split template)
- DemoForm (create from contact template)
- Testimonials (reuse existing)
- Logos (reuse existing)

---

## P1: Feature Pages (Future)

### [ ] Paywall Builder Page
**Target**: `apps/marketing/app/paywall-builder/page.tsx`
**Source**: https://adapty.io/paywall-builder
**Notes**: Feature showcase page - use features-bento-tabs pattern

### [ ] A/B Testing Page
**Target**: `apps/marketing/app/paywall-ab-testing/page.tsx`
**Source**: https://adapty.io/paywall-ab-testing
**Notes**: Feature showcase page

### [ ] Onboarding Builder Page
**Target**: `apps/marketing/app/onboarding-builder/page.tsx`
**Source**: https://adapty.io/onboarding-builder
**Notes**: Feature showcase page

---

## P2: Audience Pages (Future)

### [ ] For Marketers
**Target**: `apps/marketing/app/for-marketers/page.tsx`
**Source**: https://adapty.io/for-marketers
**Notes**: Use roles.tsx section patterns

### [ ] For Developers
**Target**: `apps/marketing/app/for-developers/page.tsx`
**Source**: https://adapty.io/for-developers
**Notes**: Include SDK code section

### [ ] For App Owners
**Target**: `apps/marketing/app/for-app-owners/page.tsx`
**Source**: https://adapty.io/for-app-owners
**Notes**: Business-focused content

---

## Completion Criteria

**A page is NOT complete until ALL of these are true:**

1. [ ] **SCRAPED**: Content scraped from exact adapty.io URL (not invented)
2. [ ] **CONTENT PARITY**: Every headline, price, feature, FAQ matches adapty.io exactly
3. [ ] **VISUAL VERIFIED**: Screenshot of our page compared to adapty.io original
4. [ ] **ALL SECTIONS**: Every section from adapty.io exists in our version
5. [ ] **BUILD PASSES**: `pnpm --filter marketing build` succeeds
6. [ ] **DESIGN APPLIED**: Uses achromatic template patterns (not custom CSS)
7. [ ] **SKILLS APPLIED**: react-best-practices, web-animation-design, ui-ux-pro-max patterns used

**If ANY content was invented/guessed instead of scraped, the page is NOT complete.**

---

## Progress Log
<!-- Add notes here after each loop -->

### Loop 1 - Pricing Page Rebuild (partial - needs revision)
- Updated `packages/billing/src/config.ts` with pricing (NEEDS REVISION to match real adapty.io)
- Updated `pricing-hero.tsx` with BlurFade animations and Adapty messaging
- Updated `pricing-faq.tsx` with 8 Adapty-specific FAQs
- Build: PASSING
- NOTE: Used placeholder pricing (flat rates) - must fix to percentage-based

### Loop 2 - Schedule Demo Page
- Created `app/schedule-demo/page.tsx` with SEO metadata
- Created `schedule-demo-hero.tsx` section:
  - Split layout: content left, form right
  - Demo benefits with icons (Personalized walkthrough, Revenue insights, Expert consultation)
  - Full demo request form (name, email, company, size, MTR range)
  - BlurFade animations throughout
  - Select dropdowns for company size and MTR range
- Added `ScheduleDemo` route to `@workspace/routes`
- Reused Logos and Testimonials sections for social proof
- Build: PASSING

### Loop 3 - Pricing Page Revision (percentage-based pricing)
- Updated `packages/billing/src/config.ts`:
  - Changed tier names: Free, Pro, Pro+, Enterprise (was Startup, Scale)
  - Added percentage pricing in descriptions: "1% of MTR", "1.2% of MTR"
  - Updated minimum costs: $99 for Pro, $499 for Pro+
  - Added new features: CRM, Webhooks, TeamAccess
- Updated `pricing-faq.tsx`:
  - Fixed plan descriptions to show percentage-based pricing
  - Updated FAQ answers to explain MTR percentage model
- Build: PASSING
