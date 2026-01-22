'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { AIPaywallGeneratorHero } from '~/components/sections/ai-paywall-generator-hero';
import { AIPaywallGeneratorFeatures } from '~/components/sections/ai-paywall-generator-features';
import {
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// AI Paywall Generator page: Generate paywalls with AI
export default function AIPaywallGeneratorPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* AI Generator hero */}
      {heroVariant !== 'off' && <AIPaywallGeneratorHero />}

      {/* AI features */}
      {featuresVariant !== 'off' && <AIPaywallGeneratorFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
