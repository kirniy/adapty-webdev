'use client';

import * as React from 'react';

import { useFeaturesVariant } from '~/lib/debug-context';
import { CompareSuperwall } from '~/components/sections/compare-superwall';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Adapty vs Superwall comparison page
export default function CompareSuperwallPage(): React.JSX.Element {
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Feature comparison */}
      {featuresVariant !== 'off' && <CompareSuperwall />}

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
