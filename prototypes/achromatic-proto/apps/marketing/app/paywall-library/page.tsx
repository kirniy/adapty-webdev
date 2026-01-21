'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { PaywallLibraryHero } from '~/components/sections/paywall-library-hero';
import { PaywallLibraryFeatures } from '~/components/sections/paywall-library-features';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
