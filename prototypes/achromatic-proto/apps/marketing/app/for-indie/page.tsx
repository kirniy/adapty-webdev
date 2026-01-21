import type { Metadata } from "next";

import { ForIndieHero } from "~/components/sections/for-indie-hero";
import { ForIndieFeatures } from "~/components/sections/for-indie-features";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Your Partner in Indie App Success | Adapty",
  description:
    "Adapty empowers indie developers to monetize their apps and turn their projects into profitable business.",
};

export default function ForIndiePage(): React.JSX.Element {
  return (
    <>
      <ForIndieHero />
      <Logos />
      <ForIndieFeatures />
      <Testimonials />
      <CTA />
    </>
  );
}
