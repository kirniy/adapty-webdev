'use client';

import * as React from 'react';

// Import all section switchers from the shared module
import {
  HeroSwitcher,
  SDKSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Import dedicated feature sections (per Linear analysis - 66% of page should be features)
import { PaywallBuilderFeatures } from '~/components/sections/paywall-builder-features';
import { ABTestingFeatures } from '~/components/sections/ab-testing-features';
import { LTVAnalyticsFeatures } from '~/components/sections/ltv-analytics-features';

// ============================================================================
// MAIN PAGE - Restructured per Lera's feedback and Linear analysis
// - Features moved from hero tabs to dedicated sections
// - Blog, Stats, Roles removed
// - Logos merged into Hero as compact trust bar
// - Focus on core product value (Paywall Builder, A/B Testing, Analytics)
// ============================================================================

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      {/* 1. Hero Section - includes logo trust bar */}
      <HeroSwitcher />

      {/* 2. Paywall Builder Features - dedicated section */}
      <PaywallBuilderFeatures variant="bento" />

      {/* 4. A/B Testing Features - dedicated section */}
      <ABTestingFeatures variant="bento" />

      {/* 5. Analytics Features - dedicated section */}
      <LTVAnalyticsFeatures variant="bento" />

      {/* 6. SDK Code Section */}
      <SDKSwitcher />

      {/* 7. Testimonials Section */}
      <TestimonialsSwitcher />

      {/* 8. FAQ Section */}
      <FAQSwitcher />

      {/* 9. CTA Section */}
      <CTASwitcher />
    </>
  );
}
