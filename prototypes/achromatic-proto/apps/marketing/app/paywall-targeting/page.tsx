'use client';

import * as React from 'react';

import { PaywallTargetingFeatures } from '~/components/sections/paywall-targeting-features';
import { PaywallTargetingHero } from '~/components/sections/paywall-targeting-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Paywall Targeting page: Segment-based paywall customization
export default function PaywallTargetingPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Targeting hero */}
      {heroVariant !== 'off' && <PaywallTargetingHero />}

      {/* Targeting features */}
      {featuresVariant !== 'off' && <PaywallTargetingFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
