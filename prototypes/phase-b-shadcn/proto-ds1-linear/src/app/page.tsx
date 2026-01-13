import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { RoleCards } from "@/components/sections/RoleCards";
import { Stats } from "@/components/sections/Stats";
import { SDKCodeSnippet } from "@/components/sections/SDKCodeSnippet";
import { Testimonials } from "@/components/sections/Testimonials";
import { G2Badges } from "@/components/sections/G2Badges";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Enterprise } from "@/components/sections/Enterprise";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

// Feature data based on SKELETON.md
const features = [
  {
    id: "ab-testing",
    title: "Test your way to higher conversions",
    subtitle: "Run experiments with statistical confidence",
    features: [
      { text: "Test paywalls, pricing, and offers" },
      { text: "Statistical significance calculator" },
      { text: "Audience segmentation" },
      { text: "Automatic winner selection" },
    ],
    metrics: [
      { label: "Conversion Rate", value: "+23%", positive: true },
      { label: "Revenue per User", value: "+18%", positive: true },
      { label: "Trial-to-Paid", value: "+31%", positive: true },
    ],
  },
  {
    id: "refund-saver",
    title: "Recover revenue automatically",
    subtitle: "Reduce refunds with intelligent intervention",
    features: [
      { text: "Save up to 40% of refund requests" },
      { text: "Automated customer recovery" },
    ],
    reversed: true,
  },
  {
    id: "analytics",
    title: "Understand your subscription business",
    subtitle: "Real-time insights into revenue and user behavior",
    features: [
      { text: "MRR / ARR tracking" },
      { text: "LTV by cohort" },
      { text: "Churn rate analysis" },
      { text: "Trial conversion metrics" },
      { text: "Refund rate monitoring" },
    ],
  },
  {
    id: "paywall-builder",
    title: "Build paywalls without code",
    subtitle: "Design, test, and deploy paywalls in minutes",
    features: [
      { text: "Drag-and-drop visual builder" },
      { text: "Pre-built templates" },
      { text: "Real-time preview on device" },
      { text: "Instant updates without app release" },
    ],
    reversed: true,
  },
  {
    id: "funnelfox",
    title: "Bridge the gap from web to app",
    subtitle: "Convert web visitors into app subscribers",
  },
  {
    id: "integrations",
    title: "Connect with your favorite tools",
    subtitle: "Send subscription data everywhere",
    features: [{ text: "22+ integration partners" }],
    reversed: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <TrustedBy />

      {/* Feature Sections */}
      {features.map((feature) => (
        <FeatureSection
          key={feature.id}
          title={feature.title}
          subtitle={feature.subtitle}
          features={feature.features}
          metrics={feature.metrics}
          reversed={feature.reversed}
        />
      ))}

      <RoleCards />
      <Stats />
      <SDKCodeSnippet />
      <Testimonials />
      <G2Badges />
      <CaseStudies />
      <Enterprise />
      <FinalCTA />
      <Footer />
    </main>
  );
}
