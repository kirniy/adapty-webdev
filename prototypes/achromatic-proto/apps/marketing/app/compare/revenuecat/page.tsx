'use client';

import * as React from 'react';

import { useFeaturesVariant } from '~/lib/debug-context';
import { CompareRevenueCat } from '~/components/sections/compare-revenuecat';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Adapty vs RevenueCat comparison page
export default function CompareRevenueCatPage(): React.JSX.Element {
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Feature comparison */}
      {featuresVariant !== 'off' && <CompareRevenueCat />}

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
