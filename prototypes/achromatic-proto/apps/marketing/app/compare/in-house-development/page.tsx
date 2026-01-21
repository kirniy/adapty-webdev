import type { Metadata } from "next";

import { CompareInHouse } from "~/components/sections/compare-in-house";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Compare In-House Development vs Adapty",
  description:
    "Discover the pros and cons of in-house development vs. using Adapty's platform for app monetization. Learn which approach best suits your business goals, budget, and timeline to drive growth effectively.",
  openGraph: {
    title: "Compare In-House Development vs Adapty",
    description:
      "Discover the pros and cons of in-house development vs. using Adapty's platform for app monetization. Learn which approach best suits your business goals, budget, and timeline to drive growth effectively.",
    url: "https://adapty.io/compare/in-house-development/",
    siteName: "Adapty",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare In-House Development vs Adapty",
    description:
      "Discover the pros and cons of in-house development vs. using Adapty's platform for app monetization. Learn which approach best suits your business goals, budget, and timeline to drive growth effectively.",
    site: "@AdaptyTeam",
    creator: "@AdaptyTeam",
  },
};

// Page structure matches adapty.io/compare/in-house-development (scraped 2026-01-21)
export default function CompareInHousePage(): React.JSX.Element {
  return (
    <>
      <CompareInHouse />
      <CTA />
    </>
  );
}
