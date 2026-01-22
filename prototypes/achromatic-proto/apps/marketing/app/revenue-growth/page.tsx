'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { RevenueGrowthHero } from '~/components/sections/revenue-growth-hero';
import { RevenueGrowthFeatures } from '~/components/sections/revenue-growth-features';
import {
  StatsSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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
