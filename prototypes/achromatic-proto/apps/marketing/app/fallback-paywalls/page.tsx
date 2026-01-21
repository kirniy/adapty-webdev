import type { Metadata } from "next";

import { FallbackPaywallsHero } from "~/components/sections/fallback-paywalls-hero";
import { FallbackPaywallsFeatures } from "~/components/sections/fallback-paywalls-features";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Fallback Paywalls to Ensure 100% Uptime for Your Users | Adapty",
  description:
    "Adapty's fallback paywalls guarantee 100% uptime by allowing you to save paywalls offline on-device, ensuring subscriber access even without internet.",
};

export default function FallbackPaywallsPage(): React.JSX.Element {
  return (
    <>
      <FallbackPaywallsHero />
      <FallbackPaywallsFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
