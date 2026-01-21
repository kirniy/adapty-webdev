import type { Metadata } from 'next';

import { StateOfSubscriptionsHero } from '~/components/sections/state-of-subscriptions-hero';
import { StateOfSubscriptionsFeatures } from '~/components/sections/state-of-subscriptions-features';
import { CTA } from '~/components/sections/cta';

export const metadata: Metadata = {
  title: 'State of In-App Subscriptions 2025 | Adapty Report',
  description:
    "Download Adapty's 2025 State of in-app subscriptions report powered by $1.9B in revenue from 15,000+ apps to uncover pricing, monetization & growth benchmarks."
};

export default function StateOfInAppSubscriptionsPage(): React.JSX.Element {
  return (
    <>
      <StateOfSubscriptionsHero />
      <StateOfSubscriptionsFeatures />
      <CTA />
    </>
  );
}
