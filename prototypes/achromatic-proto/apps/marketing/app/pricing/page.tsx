import * as React from 'react';
import type { Metadata } from 'next';

import { Logos } from '~/components/sections/logos';
import { PricingComparison } from '~/components/sections/pricing-comparison';
import { PricingFAQ } from '~/components/sections/pricing-faq';
import { PricingHero } from '~/components/sections/pricing-hero';
import { StartupCallout } from '~/components/sections/startup-callout';
import { Testimonials } from '~/components/sections/testimonials';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('Pricing'),
  description: 'Simple, transparent pricing based on your revenue. Free tier available for apps with up to $10K MTR.'
};

// Page structure matches adapty.io/pricing (scraped 2026-01-21)
export default function PricingPage(): React.JSX.Element {
  return (
    <>
      <PricingHero />
      <StartupCallout />
      <Logos />
      <PricingComparison />
      <PricingFAQ />
      <Testimonials />
    </>
  );
}
