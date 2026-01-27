'use client';

import * as React from 'react';

import { PaywallLibraryFeatures } from '~/components/sections/paywall-library-features';
import { PaywallLibraryHero } from '~/components/sections/paywall-library-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Paywall Library page: 10,000+ paywall examples
export default function PaywallLibraryPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Paywall library hero */}
      {heroVariant !== 'off' && <PaywallLibraryHero />}

      {/* Library features */}
      {featuresVariant !== 'off' && <PaywallLibraryFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
