'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useFaqVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { OnboardingBuilderHero } from '~/components/sections/onboarding-builder-hero';
import { OnboardingBuilderFeatures } from '~/components/sections/onboarding-builder-features';
import { OnboardingBuilderFAQ } from '~/components/sections/onboarding-builder-faq';
import { Logos } from '~/components/sections/logos';
import { LogosLinear } from '~/components/sections/logos-linear';
import { LogosMarquee } from '~/components/sections/logos-marquee';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

// Page structure matches adapty.io/onboarding-builder (scraped 2026-01-21)
export default function OnboardingBuilderPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const faqVariant = useFaqVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <OnboardingBuilderHero />}
      {logosVariant === 'linear' && <LogosLinear />}
      {logosVariant === 'marquee' && <LogosMarquee />}
      {logosVariant === 'default' && <Logos />}
      {featuresVariant !== 'off' && <OnboardingBuilderFeatures />}
      {faqVariant !== 'off' && <OnboardingBuilderFAQ />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
