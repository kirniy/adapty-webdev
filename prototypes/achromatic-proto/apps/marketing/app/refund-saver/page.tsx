'use client';

import * as React from 'react';

import { useHeroVariant, useFeaturesVariant, useLogosVariant, useFaqVariant, useTestimonialsVariant, useCtaVariant } from '~/lib/debug-context';
import { RefundSaverHero } from '~/components/sections/refund-saver-hero';
import { RefundSaverFeatures } from '~/components/sections/refund-saver-features';
import { RefundSaverFAQ } from '~/components/sections/refund-saver-faq';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

// Page structure matches adapty.io/refund-saver (scraped 2026-01-21)
export default function RefundSaverPage(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const featuresVariant = useFeaturesVariant();
  const logosVariant = useLogosVariant();
  const faqVariant = useFaqVariant();
  const testimonialsVariant = useTestimonialsVariant();
  const ctaVariant = useCtaVariant();

  return (
    <>
      {heroVariant !== 'off' && <RefundSaverHero />}
      {logosVariant !== 'off' && <Logos />}
      {featuresVariant !== 'off' && <RefundSaverFeatures />}
      {faqVariant !== 'off' && <RefundSaverFAQ />}
      {testimonialsVariant !== 'off' && <Testimonials />}
      {ctaVariant !== 'off' && <CTA />}
    </>
  );
}
