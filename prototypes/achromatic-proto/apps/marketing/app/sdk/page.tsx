import type { Metadata } from 'next';

import { SDKHero } from '~/components/sections/sdk-hero';
import { SDKFeatures } from '~/components/sections/sdk-features';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'Adapty SDK: In-App Purchase and Subscription Infrastructure',
  description:
    "Make purchases, subscriptions, restore purchases and run price testing for iOS and Android with Adapty's SDK. No server code required, install with 3 lines of code."
};

export default function SDKPage(): React.JSX.Element {
  return (
    <>
      <SDKHero />
      <SDKFeatures />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
