'use client';

import * as React from 'react';

import { useHeroVariant, useLtvAnalyticsFeaturesVariant } from '~/lib/debug-context';
import { LTVAnalyticsHero } from '~/components/sections/ltv-analytics-hero';
import { LTVAnalyticsFeatures } from '~/components/sections/ltv-analytics-features';
import {
  TestimonialsSwitcher,
  FAQSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// LTV Analytics page: Revenue prediction and analytics features
export default function LTVAnalyticsPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useLtvAnalyticsFeaturesVariant();

  return (
    <>
      {/* LTV Analytics hero */}
      {heroVariant !== 'off' && <LTVAnalyticsHero />}

      {/* Analytics features */}
      {featuresVariant !== 'off' && <LTVAnalyticsFeatures variant={featuresVariant} />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
