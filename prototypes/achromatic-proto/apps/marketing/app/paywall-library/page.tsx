import type { Metadata } from 'next';

import { PaywallLibraryHero } from '~/components/sections/paywall-library-hero';
import { PaywallLibraryFeatures } from '~/components/sections/paywall-library-features';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'Mobile Paywall Library: 10,000+ App Paywall Examples',
  description:
    'Get inspired by 10,000+ app paywalls. Learn how to design the best paywall for your app from top-grossing apps like YouTube, TikTok, and Duolingo.'
};

export default function PaywallLibraryPage(): React.JSX.Element {
  return (
    <>
      <PaywallLibraryHero />
      <PaywallLibraryFeatures />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
