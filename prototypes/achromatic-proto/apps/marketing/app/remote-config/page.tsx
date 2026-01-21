import type { Metadata } from "next";

import { RemoteConfigHero } from "~/components/sections/remote-config-hero";
import { RemoteConfigFeatures } from "~/components/sections/remote-config-features";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Customize paywalls on-the-fly without app updates | Adapty",
  description:
    "Adapty's Remote Config empowers you to customize paywalls and run A/B tests seamlessly, with automatic measurement of subscription metrics.",
};

export default function RemoteConfigPage(): React.JSX.Element {
  return (
    <>
      <RemoteConfigHero />
      <Logos />
      <RemoteConfigFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
