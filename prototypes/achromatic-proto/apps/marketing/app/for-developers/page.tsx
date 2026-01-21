import * as React from 'react';
import type { Metadata } from 'next';

import { Logos } from '~/components/sections/logos';
import { ForDevelopersHero } from '~/components/sections/for-developers-hero';
import { ForDevelopersFeatures } from '~/components/sections/for-developers-features';
import { ForMarketersStats } from '~/components/sections/for-marketers-stats';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('For Developers'),
  description: 'Save hours of coding with quick IAPs integration and just five SDK methods, while enjoying well-maintained SDKs and seamless cross-platform sync.'
};

// Page structure matches adapty.io/for-developers (scraped 2026-01-21)
// Sections: Hero, Features, SDKs, Stats, Logos, Testimonials, CTA
export default function ForDevelopersPage(): React.JSX.Element {
  return (
    <>
      <ForDevelopersHero />
      <ForDevelopersFeatures />
      <ForMarketersStats />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
