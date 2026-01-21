'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useStatsVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { ForAppOwnersHero } from '~/components/sections/for-app-owners-hero';
import { ForAppOwnersFeatures } from '~/components/sections/for-app-owners-features';
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { Stats } from '~/components/sections/stats';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import type { ForAppOwnersHeroVariant } from '~/components/sections/for-app-owners-hero';

// Map global Hero variant to page-specific variants
function mapHeroVariant(globalVariant: string): ForAppOwnersHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'story': return 'metrics';
    case 'split': return 'split';
    default: return 'split';
  }
}

export default function ForAppOwnersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const statsVariant = useStatsVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <ForAppOwnersHero variant={mapHeroVariant(heroVariant)} />}
      {logosVariant === 'linear' && <LogosLinear />}
      {logosVariant === 'marquee' && <LogosMarquee />}
      {logosVariant === 'default' && <Logos />}
      {featuresVariant !== 'off' && <ForAppOwnersFeatures />}
      {statsVariant !== 'off' && <Stats />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
