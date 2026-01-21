import type { Metadata } from "next";

import { AIPaywallGeneratorHero } from "~/components/sections/ai-paywall-generator-hero";
import { AIPaywallGeneratorFeatures } from "~/components/sections/ai-paywall-generator-features";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "AI Paywall Generator - Build and Test Paywalls in Minutes | Adapty",
  description:
    "Generate 5 custom paywalls for your app in seconds. No code, no design tools, no release needed. Pick, edit, and test directly in Adapty.",
};

export default function AIPaywallGeneratorPage(): React.JSX.Element {
  return (
    <>
      <AIPaywallGeneratorHero />
      <Logos />
      <AIPaywallGeneratorFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
