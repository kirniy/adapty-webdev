'use client';

import * as React from 'react';

import { CompareInHouse } from '~/components/sections/compare-in-house';
import {
  CTASwitcher,
  FAQSwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant } from '~/lib/debug-context';

// Adapty vs In-House Development comparison page
export default function CompareInHousePage(): React.JSX.Element {
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Feature comparison */}
      {featuresVariant !== 'off' && <CompareInHouse />}

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
