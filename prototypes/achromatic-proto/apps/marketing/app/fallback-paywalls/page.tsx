'use client';

import * as React from 'react';

import { FallbackPaywallsFeatures } from '~/components/sections/fallback-paywalls-features';
import { FallbackPaywallsHero } from '~/components/sections/fallback-paywalls-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Fallback Paywalls page: Offline paywall reliability
export default function FallbackPaywallsPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Fallback paywalls hero */}
      {heroVariant !== 'off' && <FallbackPaywallsHero />}

      {/* Fallback features */}
      {featuresVariant !== 'off' && <FallbackPaywallsFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
