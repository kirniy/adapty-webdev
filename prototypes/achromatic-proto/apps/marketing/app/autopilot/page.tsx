'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { AutopilotHero } from '~/components/sections/autopilot-hero';
import { AutopilotFeatures } from '~/components/sections/autopilot-features';
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

// Page structure matches adapty.io/autopilot (scraped 2026-01-21)
export default function AutopilotPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <AutopilotHero />}
      {logosVariant === 'linear' && <LogosLinear />}
      {logosVariant === 'marquee' && <LogosMarquee />}
      {logosVariant === 'default' && <Logos />}
      {featuresVariant !== 'off' && <AutopilotFeatures />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
