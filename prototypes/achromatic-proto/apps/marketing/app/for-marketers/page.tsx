'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useStatsVariant } from '~/lib/debug-context';
import { ForMarketersHero } from '~/components/sections/for-marketers-hero';
import { ForMarketersFeatures } from '~/components/sections/for-marketers-features';
import { ForMarketersStats } from '~/components/sections/for-marketers-stats';
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

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

// For Marketers page: Marketing-focused features and stats
export default function ForMarketersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const statsVariant = useStatsVariant();

  return (
    <>
      {/* Marketer-focused hero */}
      {heroVariant !== 'off' && <ForMarketersHero variant={mapHeroVariant(heroVariant)} />}

      {/* Logos - shared switcher */}
      <LogosSwitcher />

      {/* Marketing features */}
      {featuresVariant !== 'off' && <ForMarketersFeatures variant={mapFeaturesVariant(featuresVariant)} />}

      {/* Marketing stats */}
      {statsVariant !== 'off' && <ForMarketersStats />}

      {/* Testimonials - shared switcher */}
      <TestimonialsSwitcher />

      {/* CTA - shared switcher */}
      <CTASwitcher />
    </>
  );
}
