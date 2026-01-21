'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { PricingComparison } from '~/components/sections/pricing-comparison';
import { PricingHero } from '~/components/sections/pricing-hero';
import { StartupCallout } from '~/components/sections/startup-callout';
import {
  LogosSwitcher,
  FAQSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Map global Hero variant to PricingHero variant
type PricingHeroVariant = 'table' | 'cards' | 'compact';

function mapHeroVariant(globalVariant: string): PricingHeroVariant {
  switch (globalVariant) {
    case 'pricing': return 'compact';
    case 'marketing': return 'cards';
    case 'split': return 'table';
    default: return 'table';
  }
}

// Pricing page: Plans, comparison, and FAQ
// Page structure matches adapty.io/pricing
export default function PricingPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Pricing Hero with plans */}
      {heroVariant !== 'off' && <PricingHero variant={mapHeroVariant(heroVariant)} />}

      {/* Startup discount callout */}
      <StartupCallout />

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Feature comparison table */}
      {featuresVariant !== 'off' && <PricingComparison />}

      {/* FAQ - uses pricing variant by default on this page */}
      <FAQSwitcher />

      {/* Social proof */}
      <TestimonialsSwitcher />

      {/* CTA */}
      <CTASwitcher />
    </>
  );
}
