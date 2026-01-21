'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { PaywallLocalizationHero } from '~/components/sections/paywall-localization-hero';
import { PaywallLocalizationFeatures } from '~/components/sections/paywall-localization-features';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Paywall Localization page: Multi-language paywall support
export default function PaywallLocalizationPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Localization hero */}
      {heroVariant !== 'off' && <PaywallLocalizationHero />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

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
