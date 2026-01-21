import * as React from 'react';
import type { Metadata } from 'next';

import { Logos } from '~/components/sections/logos';
import { ForAppOwnersHero } from '~/components/sections/for-app-owners-hero';
import { ForAppOwnersFeatures } from '~/components/sections/for-app-owners-features';
import { ForMarketersStats } from '~/components/sections/for-marketers-stats';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('For App Owners'),
  description: 'Adapty simplifies subscription business management, allowing app owners to focus on growth. Iterate quickly with Paywall A/B testing by Adapty.'
};

// Page structure matches adapty.io/for-app-owners (scraped 2026-01-21)
// Sections: Hero, Features, Stats, Logos, Testimonials, CTA
export default function ForAppOwnersPage(): React.JSX.Element {
  return (
    <>
      <ForAppOwnersHero />
      <ForAppOwnersFeatures />
      <ForMarketersStats />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
