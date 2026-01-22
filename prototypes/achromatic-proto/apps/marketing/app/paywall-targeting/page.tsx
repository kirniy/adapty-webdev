'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { PaywallTargetingHero } from '~/components/sections/paywall-targeting-hero';
import { PaywallTargetingFeatures } from '~/components/sections/paywall-targeting-features';
import {
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
