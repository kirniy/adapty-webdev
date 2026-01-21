'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useStatsVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { ForMarketersHero } from '~/components/sections/for-marketers-hero';
import { ForMarketersFeatures } from '~/components/sections/for-marketers-features';
import { ForMarketersStats } from '~/components/sections/for-marketers-stats';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

// Map global Hero variant to local variants
type ForMarketersHeroVariant = 'split' | 'centered' | 'video';

function mapHeroVariant(globalVariant: string): ForMarketersHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'story': return 'video';
    case 'split': return 'split';
    default: return 'split';
  }
}

// Map global Features variant to local variants
type ForMarketersFeaturesVariant = 'grid' | 'bento' | 'tabs';

function mapFeaturesVariant(globalVariant: string): ForMarketersFeaturesVariant {
  switch (globalVariant) {
    case 'bento-tabs': return 'bento';
    case 'tabbed': return 'tabs';
    case 'solution': return 'grid';
    default: return 'grid';
  }
}

export default function ForMarketersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const statsVariant = useStatsVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <ForMarketersHero variant={mapHeroVariant(heroVariant)} />}
      {logosVariant !== 'off' && <Logos />}
      {featuresVariant !== 'off' && <ForMarketersFeatures variant={mapFeaturesVariant(featuresVariant)} />}
      {statsVariant !== 'off' && <ForMarketersStats />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
