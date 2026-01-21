'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant } from '~/lib/debug-context';
import { LTVAnalyticsHero } from '~/components/sections/ltv-analytics-hero';
import { LTVAnalyticsFeatures } from '~/components/sections/ltv-analytics-features';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// LTV Analytics page: Revenue prediction and analytics features
export default function LTVAnalyticsPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();

  return (
    <>
      {/* LTV Analytics hero */}
      {heroVariant !== 'off' && <LTVAnalyticsHero />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Analytics features */}
      {featuresVariant !== 'off' && <LTVAnalyticsFeatures />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
