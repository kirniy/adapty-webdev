import * as React from 'react';
import type { Metadata } from 'next';

import { Logos } from '~/components/sections/logos';
import { ABTestingHero } from '~/components/sections/ab-testing-hero';
import { ABTestingFeatures } from '~/components/sections/ab-testing-features';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('A/B Testing'),
  description: 'A/B test paywalls without coding. Compare paywalls without leaving Adapty Dashboard and find the winner without data analysis.'
};

// Page structure matches adapty.io/paywall-ab-testing (scraped 2026-01-21)
export default function PaywallABTestingPage(): React.JSX.Element {
  return (
    <>
      <ABTestingHero />
      <Logos />
      <ABTestingFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
