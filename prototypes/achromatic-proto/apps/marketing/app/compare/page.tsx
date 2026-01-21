'use client';

import * as React from 'react';

import { useHeroVariant, useTestimonialsVariant } from '~/lib/debug-context';
import { CompareHero } from '~/components/sections/compare-hero';
import { CompareTestimonials } from '~/components/sections/compare-testimonials';
import {
  LogosSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Compare landing page: Overview of Adapty vs competitors
export default function ComparePage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const testimonialsVariant = useTestimonialsVariant();

  return (
    <>
      {/* Compare hero */}
      {heroVariant !== 'off' && <CompareHero />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Migration testimonials */}
      {testimonialsVariant !== 'off' && <CompareTestimonials />}

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
