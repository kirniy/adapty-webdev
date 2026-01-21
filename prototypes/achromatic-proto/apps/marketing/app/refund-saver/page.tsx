import type { Metadata } from 'next';

import { RefundSaverHero } from '~/components/sections/refund-saver-hero';
import { RefundSaverFeatures } from '~/components/sections/refund-saver-features';
import { RefundSaverFAQ } from '~/components/sections/refund-saver-faq';
import { Logos } from '~/components/sections/logos';
import { Testimonials } from '~/components/sections/testimonials';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'Adapty Refund Saver: Reduce Refund Rates by 40%',
  description:
    "Reduce refund rates for your subscription app by 40% with Adapty Refund Saver. Automate refund management, retain users, and maximize revenue effortlessly."
};

export default function RefundSaverPage(): React.JSX.Element {
  return (
    <>
      <RefundSaverHero />
      <RefundSaverFeatures />
      <RefundSaverFAQ />
      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
