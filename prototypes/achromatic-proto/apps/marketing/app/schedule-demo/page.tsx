'use client';

import * as React from 'react';

import { ScheduleDemoHero } from '~/components/sections/schedule-demo-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  LogosSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useHeroVariant } from '~/lib/debug-context';

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
