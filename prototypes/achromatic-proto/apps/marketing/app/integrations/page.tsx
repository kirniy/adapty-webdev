import type { Metadata } from 'next';

import { IntegrationsHero } from '~/components/sections/integrations-hero';
import { IntegrationsGrid } from '~/components/sections/integrations-grid';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'Integrate Adapty with 3rd-party tools and services | Adapty',
  description:
    "Adapty supports 20+ integrations of 3rd-party services. Integrate your favorite analytics, messaging, cloud tools to create the most convenient workflow."
};

export default function IntegrationsPage(): React.JSX.Element {
  return (
    <>
      <IntegrationsHero />
      <IntegrationsGrid />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
