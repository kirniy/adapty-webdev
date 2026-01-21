import type { Metadata } from "next";

import { PaywallLocalizationHero } from "~/components/sections/paywall-localization-hero";
import { PaywallLocalizationFeatures } from "~/components/sections/paywall-localization-features";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Expand your reach: Localize paywalls instantly with Adapty",
  description:
    "Localize paywalls for any language using the Paywall Builder or Remote Config, allowing you to adapt texts, prices, and copy with convenience and precision.",
};

export default function PaywallLocalizationPage(): React.JSX.Element {
  return (
    <>
      <PaywallLocalizationHero />
      <Logos />
      <PaywallLocalizationFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
