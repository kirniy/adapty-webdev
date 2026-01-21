import type { Metadata } from "next";

import { PaywallTargetingHero } from "~/components/sections/paywall-targeting-hero";
import { PaywallTargetingFeatures } from "~/components/sections/paywall-targeting-features";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Customize paywalls for targeted user segments with Adapty",
  description:
    "Create custom segments, personalize offers, and conduct A/B tests to optimize conversion rates without the need for coding.",
};

export default function PaywallTargetingPage(): React.JSX.Element {
  return (
    <>
      <PaywallTargetingHero />
      <Logos />
      <PaywallTargetingFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
