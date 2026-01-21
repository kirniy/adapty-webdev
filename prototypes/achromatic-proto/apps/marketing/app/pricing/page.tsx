'use client';

import * as React from 'react';

import { useHeroVariant, useFaqVariant, useLogosVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { Logos } from '~/components/sections/logos';
import { PricingComparison } from '~/components/sections/pricing-comparison';
import { PricingFAQ } from '~/components/sections/pricing-faq';
import { PricingHero } from '~/components/sections/pricing-hero';
import { StartupCallout } from '~/components/sections/startup-callout';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

// Map global Hero variant to PricingHero variant
type PricingHeroVariant = 'table' | 'cards' | 'compact';

function mapHeroVariant(globalVariant: string): PricingHeroVariant {
  switch (globalVariant) {
    case 'pricing': return 'compact';
    case 'marketing': return 'cards';
    case 'split': return 'table';
    default: return 'table';
  }
}

// Page structure matches adapty.io/pricing (scraped 2026-01-22)
export default function PricingPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const logosVariant = useLogosVariant();
  const faqVariant = useFaqVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <PricingHero variant={mapHeroVariant(heroVariant)} />}
      <StartupCallout />
      {logosVariant !== 'off' && <Logos />}
      <PricingComparison />
      {faqVariant !== 'off' && <PricingFAQ />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
