'use client';

import * as React from 'react';

import { RevenueGrowthFeatures } from '~/components/sections/revenue-growth-features';
import { RevenueGrowthHero } from '~/components/sections/revenue-growth-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  StatsSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import { useFeaturesVariant, useHeroVariant } from '~/lib/debug-context';

// Revenue Growth page: Maximize subscription revenue
export default function RevenueGrowthPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* Revenue growth hero */}
      {heroVariant !== 'off' && <RevenueGrowthHero />}

      {/* Revenue features */}
      {featuresVariant !== 'off' && <RevenueGrowthFeatures />}

      {/* Stats - shared switcher */}
      <StatsSwitcher />

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
