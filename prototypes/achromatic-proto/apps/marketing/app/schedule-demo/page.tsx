'use client';

import * as React from 'react';

import { useHeroVariant } from '~/lib/debug-context';
import { ScheduleDemoHero } from '~/components/sections/schedule-demo-hero';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Schedule Demo page: Demo booking form with social proof
export default function ScheduleDemoPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();

  return (
    <>
      {/* Demo booking form */}
      {heroVariant !== 'off' && <ScheduleDemoHero />}

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
