'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useSdkVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { ForDevelopersHero } from '~/components/sections/for-developers-hero';
import { ForDevelopersFeatures } from '~/components/sections/for-developers-features';
import { Logos } from '~/components/sections/logos';
import { SDKCode } from '~/components/sections/sdk-code';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export default function ForDevelopersPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const sdkVariant = useSdkVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <ForDevelopersHero />}
      {logosVariant !== 'off' && <Logos />}
      {featuresVariant !== 'off' && <ForDevelopersFeatures />}
      {sdkVariant !== 'off' && <SDKCode />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
