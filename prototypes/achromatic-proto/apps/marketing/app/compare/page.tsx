import type { Metadata } from "next";

import { CompareHero } from "~/components/sections/compare-hero";
import { CompareTestimonials } from "~/components/sections/compare-testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Why choose Adapty over competitors | Adapty",
  description:
    "Find out why you should choose Adapty over competitors. Learn a fast way to migrate to Adapty from any solution, including in-house.",
};

export default function ComparePage(): React.JSX.Element {
  return (
    <>
      <CompareHero />
      <CompareTestimonials />
      <CTA />
    </>
  );
}
