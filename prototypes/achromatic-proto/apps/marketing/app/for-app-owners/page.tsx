'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useStatsVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { ForAppOwnersHero } from '~/components/sections/for-app-owners-hero';
import { ForAppOwnersFeatures } from '~/components/sections/for-app-owners-features';
import { Logos } from '~/components/sections/logos';
import { Stats } from '~/components/sections/stats';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export default function ForAppOwnersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const statsVariant = useStatsVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <ForAppOwnersHero />}
      {logosVariant !== 'off' && <Logos />}
      {featuresVariant !== 'off' && <ForAppOwnersFeatures />}
      {statsVariant !== 'off' && <Stats />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
