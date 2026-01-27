'use client';

import * as React from 'react';

import { PaywallBuilderCustomization } from '~/components/sections/paywall-builder-customization';
import {
  PaywallBuilderFeatures,
  type PaywallBuilderFeaturesVariant
} from '~/components/sections/paywall-builder-features';
// Page-specific components
import {
  PaywallBuilderHero,
  type PaywallBuilderHeroVariant
} from '~/components/sections/paywall-builder-hero';
// Shared section switchers
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import {
  useCustomizationVariant,
  useHeroVariant,
  usePaywallBuilderFeaturesVariant
} from '~/lib/debug-context';

// Map global hero variants to PaywallBuilderHero variants
function mapHeroVariant(globalVariant: string): PaywallBuilderHeroVariant {
  switch (globalVariant) {
    case 'marketing':
      return 'centered';
    case 'split':
      return 'split';
    case 'pricing':
      return 'showcase';
    case 'story':
      return 'centered';
    case 'contact':
      return 'split';
    default:
      return 'split';
  }
}

// Paywall Builder page: No-code paywall creation features
export default function PaywallBuilderPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = usePaywallBuilderFeaturesVariant();
  const customizationVariant = useCustomizationVariant();

  return (
    <>
      {/* Paywall Builder hero */}
      {heroVariant !== 'off' && (
        <PaywallBuilderHero variant={mapHeroVariant(heroVariant)} />
      )}

      {/* Features and customization */}
      {featuresVariant !== 'off' && (
        <>
          <PaywallBuilderFeatures variant={featuresVariant} />
          {customizationVariant !== 'off' && (
            <PaywallBuilderCustomization variant={customizationVariant} />
          )}
        </>
      )}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
