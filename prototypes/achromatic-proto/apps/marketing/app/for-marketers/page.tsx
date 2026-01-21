import * as React from 'react';
import type { Metadata } from 'next';

import { Logos } from '~/components/sections/logos';
import { ForMarketersHero } from '~/components/sections/for-marketers-hero';
import { ForMarketersFeatures } from '~/components/sections/for-marketers-features';
import { ForMarketersStats } from '~/components/sections/for-marketers-stats';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('For Marketers'),
  description: "Optimize your marketing strategy with Adapty's comprehensive dashboard for paywall management. Test, target, and personalize paywalls for diverse audiences."
};

// Page structure matches adapty.io/for-marketers (scraped 2026-01-21)
// Sections: Hero, Features, Stats, Logos, Testimonials, CTA
export default function ForMarketersPage(): React.JSX.Element {
  return (
    <>
      <ForMarketersHero />
      <ForMarketersFeatures />
      <ForMarketersStats />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
