'use client';

import * as React from 'react';

// Import Linear-style feature sections
import {
  ABTestingLinear,
  AdaptyValueProps,
  AnalyticsLinear,
  IntegrationsLinear,
  PaywallBuilderTSeparator
} from '~/components/sections/features-linear-style';
// Import all section switchers from the shared module
import {
  CTASwitcher,
  FAQSwitcher,
  HeroSwitcher,
  SDKSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';

// ============================================================================
// MAIN PAGE - Linear.app inspired design
// - Generous whitespace (py-24 lg:py-32 for sections)
// - Subtle separators instead of heavy dividers
// - Clean card design with rounded-[20px] corners
// - Muted backgrounds and subtle borders
// - Feature tags with elongated pill dots
// ============================================================================

export default function IndexPage(): React.JSX.Element {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Section - includes logo trust bar */}
      <HeroSwitcher />

      {/* 2. Value Props - 3 column cards (Linear style) */}
      <AdaptyValueProps />

      {/* 3. Paywall Builder - T-Separator layout (Linear style) */}
      <PaywallBuilderTSeparator />

      {/* 4. A/B Testing - Interactive selector (Linear style) */}
      <ABTestingLinear />

      {/* 5. Analytics - Feature list (Linear style) */}
      <AnalyticsLinear />

      {/* 6. Integrations - Card carousel with modals (Linear style) */}
      <IntegrationsLinear />

      {/* 7. SDK Code Section */}
      <SDKSwitcher />

      {/* 8. Testimonials Section */}
      <TestimonialsSwitcher />

      {/* 9. FAQ Section */}
      <FAQSwitcher />

      {/* 10. CTA Section */}
      <CTASwitcher />
    </main>
  );
}
