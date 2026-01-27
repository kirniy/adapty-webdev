'use client';

import * as React from 'react';

import { CompareSuperwall } from '~/components/sections/compare-superwall';
import {
  CTASwitcher,
  FAQSwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant } from '~/lib/debug-context';

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
