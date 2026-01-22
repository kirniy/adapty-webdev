'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { FallbackPaywallsHero } from '~/components/sections/fallback-paywalls-hero';
import { FallbackPaywallsFeatures } from '~/components/sections/fallback-paywalls-features';
import {
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
