'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { LTVAnalyticsHero } from '~/components/sections/ltv-analytics-hero';
import { LTVAnalyticsFeatures } from '~/components/sections/ltv-analytics-features';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

// Page structure matches adapty.io/ltv-analytics (scraped 2026-01-21)
export default function LTVAnalyticsPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <LTVAnalyticsHero />}
      {featuresVariant !== 'off' && <LTVAnalyticsFeatures />}
      {logosVariant !== 'off' && <Logos />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
