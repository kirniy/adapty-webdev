'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { ForIndieHero } from '~/components/sections/for-indie-hero';
import { ForIndieFeatures } from '~/components/sections/for-indie-features';
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import type { ForIndieHeroVariant } from '~/components/sections/for-indie-hero';

// Map global Hero variant to page-specific variants
function mapHeroVariant(globalVariant: string): ForIndieHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'story': return 'startup';
    case 'split': return 'split';
    default: return 'split';
  }
}

export default function ForIndiePage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <ForIndieHero variant={mapHeroVariant(heroVariant)} />}
      {logosVariant === 'linear' && <LogosLinear />}
      {logosVariant === 'marquee' && <LogosMarquee />}
      {logosVariant === 'default' && <Logos />}
      {featuresVariant !== 'off' && <ForIndieFeatures />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
