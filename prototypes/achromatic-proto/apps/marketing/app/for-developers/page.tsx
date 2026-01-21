'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useSdkVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { ForDevelopersHero } from '~/components/sections/for-developers-hero';
import { ForDevelopersFeatures } from '~/components/sections/for-developers-features';
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { SDKCode } from '~/components/sections/sdk-code';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import type { ForDevelopersHeroVariant } from '~/components/sections/for-developers-hero';

// Map global Hero variant to page-specific variants
function mapHeroVariant(globalVariant: string): ForDevelopersHeroVariant {
  switch (globalVariant) {
    case 'marketing': return 'centered';
    case 'story': return 'terminal';
    case 'split': return 'split';
    default: return 'split';
  }
}

export default function ForDevelopersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const sdkVariant = useSdkVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <ForDevelopersHero variant={mapHeroVariant(heroVariant)} />}
      {logosVariant === 'linear' && <LogosLinear />}
      {logosVariant === 'marquee' && <LogosMarquee />}
      {logosVariant === 'default' && <Logos />}
      {featuresVariant !== 'off' && <ForDevelopersFeatures />}
      {sdkVariant !== 'off' && <SDKCode />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
