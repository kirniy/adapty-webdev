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

// Import Linear-style feature sections
import {
  AdaptyValueProps,
  PaywallBuilderLinear,
  ABTestingLinear,
  AnalyticsLinear,
  IntegrationsLinear,
} from '~/components/sections/features-linear-style';

// ============================================================================
// MAIN PAGE - Restructured per Lera's feedback and Linear analysis
// - Features moved from hero tabs to dedicated sections
// - Blog, Stats, Roles removed
// - Logos merged into Hero as compact trust bar
// - Focus on core product value (Paywall Builder, A/B Testing, Analytics)
// - Thin separator lines between major groups (Linear style)
// ============================================================================

// Linear-style thin separator line
function Separator() {
  return (
    <div className="container">
      <div className="h-px bg-border/50" />
    </div>
  );
}

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      {/* 1. Hero Section - includes logo trust bar */}
      <HeroSwitcher />

      <Separator />

      {/* 2. Value Props - 3 column cards (Linear style) */}
      <AdaptyValueProps />

      <Separator />

      {/* 3. Paywall Builder - Interactive selector (Linear style) */}
      <PaywallBuilderLinear />

      <Separator />

      {/* 4. A/B Testing - Interactive selector (Linear style) */}
      <ABTestingLinear />

      <Separator />

      {/* 5. Analytics - Feature list (Linear style) */}
      <AnalyticsLinear />

      <Separator />

      {/* 6. Integrations - Card carousel (Linear style) */}
      <IntegrationsLinear />

      <Separator />

      {/* 7. SDK Code Section */}
      <SDKSwitcher />

      <Separator />

      {/* 8. Testimonials Section */}
      <TestimonialsSwitcher />

      {/* 9. FAQ Section */}
      <FAQSwitcher />

      <Separator />

      {/* 10. CTA Section */}
      <CTASwitcher />
    </>
  );
}
