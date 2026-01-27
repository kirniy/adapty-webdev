'use client';

import * as React from 'react';

import { PaywallLocalizationFeatures } from '~/components/sections/paywall-localization-features';
import { PaywallLocalizationHero } from '~/components/sections/paywall-localization-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Paywall Localization page: Multi-language paywall support
export default function PaywallLocalizationPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Localization hero */}
      {heroVariant !== 'off' && <PaywallLocalizationHero />}

      {/* Localization features */}
      {featuresVariant !== 'off' && <PaywallLocalizationFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
