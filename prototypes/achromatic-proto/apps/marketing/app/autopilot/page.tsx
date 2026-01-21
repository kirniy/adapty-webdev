import type { Metadata } from "next";

import { AutopilotHero } from "~/components/sections/autopilot-hero";
import { AutopilotFeatures } from "~/components/sections/autopilot-features";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Adapty Autopilot: High-Impact App Paywall Optimization",
  description:
    "Boost your app revenue by up to 80% with Adapty Autopilot. Run winning paywall experiments powered by insights from thousands of A/B tests.",
};

export default function AutopilotPage(): React.JSX.Element {
  return (
    <>
      <AutopilotHero />
      <Logos />
      <AutopilotFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
