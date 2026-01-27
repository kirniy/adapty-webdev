'use client';

import * as React from 'react';

import { LTVAnalyticsFeatures } from '~/components/sections/ltv-analytics-features';
import { LTVAnalyticsHero } from '~/components/sections/ltv-analytics-hero';
import {
  CTASwitcher,
  FAQSwitcher,
  TestimonialsSwitcher
} from '~/components/sections/section-switchers';
import {
  useHeroVariant,
  useLtvAnalyticsFeaturesVariant
} from '~/lib/debug-context';

// LTV Analytics page: Revenue prediction and analytics features
export default function LTVAnalyticsPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useLtvAnalyticsFeaturesVariant();

  return (
    <>
      {/* LTV Analytics hero */}
      {heroVariant !== 'off' && <LTVAnalyticsHero />}

      {/* Analytics features */}
      {featuresVariant !== 'off' && (
        <LTVAnalyticsFeatures variant={featuresVariant} />
      )}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* FAQ - shared switcher */}
      <FAQSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
