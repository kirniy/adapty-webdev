import type { Metadata } from "next";

import { GridSection } from "~/components/fragments/grid-section";
import { SiteHeading } from "~/components/fragments/site-heading";
import { BlurFade } from "~/components/fragments/blur-fade";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, CheckIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Logos } from "~/components/sections/logos";
import { Testimonials } from "~/components/sections/testimonials";
import { CTA } from "~/components/sections/cta";

export const metadata: Metadata = {
  title: "Why Adapty?",
  description:
    "Explore Adapty's features and discover why it's the most powerful choice over any alternative.",
};

const FEATURES = [
  {
    title: "Add in-app payments without server code",
    description:
      "Integrate in-app purchases quickly with Adapty's SDK. We handle server-side verification, subscription events, and more.",
    link: "/sdk",
    linkText: "Get started with SDK",
  },
  {
    title: "Sync subscriptions across platforms and services",
    description:
      "Manage all subscribers in one place and forward subscription events to analytics, attribution, and ad services with one-click integrations.",
    link: "/integrations",
    linkText: "Check integrations",
  },
  {
    title: "Create custom paywalls in minutes",
    description:
      "Build and launch paywalls from your dashboard with our no-code paywall builder or customize your own with remote config.",
    link: "/paywall-builder",
    linkText: "Learn more",
  },
  {
    title: "Target the right audience with your paywalls",
    description:
      "Segment users by country, store, ad or custom attributes, and localize in any language - all from your dashboard.",
    link: "/paywall-targeting",
    linkText: "Learn more",
  },
  {
    title: "Run A/B tests with winner prediction",
    description:
      "Launch paywall A/B tests with real-time metrics and AI-powered predictive models to predict a test winner.",
    link: "/paywall-ab-testing",
    linkText: "Learn more",
  },
  {
    title: "Gain insights with analytics and AI predictions",
    description:
      "Track metrics like ARR, MRR, and LTV in real time. Use AI predictions to forecast LTV and revenue.",
    link: "/predictive-analytics",
    linkText: "Learn more",
  },
];

const COMPARISON_DATA = [
  { feature: "In-App purchases SDK", adapty: true, revenuecat: true, qonversion: true, superwall: true },
  { feature: "StoreKit 2 and Billing 5/6 support", adapty: true, revenuecat: true, qonversion: true, superwall: true },
  { feature: "Sales funnel", adapty: true, revenuecat: false, qonversion: false, superwall: false },
  { feature: "Conversions", adapty: "10 metrics", revenuecat: "3 metrics", qonversion: "2 metrics", superwall: "3 metrics" },
  { feature: "Revenue and LTV prediction with ML", adapty: true, revenuecat: "Beta-version", qonversion: false, superwall: false },
  { feature: "Prediction of the winner in an A/B test", adapty: true, revenuecat: false, qonversion: false, superwall: false },
  { feature: "Paywall A/B testing", adapty: true, revenuecat: true, qonversion: true, superwall: true },
  { feature: "Onboarding A/B testing", adapty: true, revenuecat: false, qonversion: true, superwall: true },
  { feature: "Paywall and onboarding localizations", adapty: "70+ languages", revenuecat: "Only through Offering metadata", qonversion: "18 languages", superwall: false },
  { feature: "Targeted paywalls and A/B tests", adapty: true, revenuecat: "Paywalls only", qonversion: "Yes, but no targeting by attribution", superwall: "Yes, but only by country and store" },
  { feature: "No-code Paywall Builder", adapty: "Yes, 100% custom paywalls", revenuecat: "Yes, 5 templates", qonversion: true, superwall: true },
  { feature: "Discount on Pro plans for startups", adapty: true, revenuecat: false, qonversion: false, superwall: false },
];

function StatusIcon({ value }: { value: boolean | string }): React.JSX.Element {
  if (value === true) {
    return <CheckIcon className="h-5 w-5 text-green-600" />;
  }
  if (value === false) {
    return <XIcon className="h-5 w-5 text-muted-foreground/50" />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export default function WhyAdaptyPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <GridSection>
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <BlurFade delay={0.1}>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Why Adapty?
              </span>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="mt-4">
                <SiteHeading
                  title="Boost your app revenue with minimal effort"
                  description="Adapty empowers you to integrate in-app purchases, set up paywalls, and run A/B tests - without app updates. Use our low-code solution to boost LTV by an average of 24% in just three months."
                />
              </div>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/schedule-demo">Book a demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://app.adapty.io/registration">
                    Start for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </GridSection>

      {/* Role Benefits */}
      <GridSection>
        <div className="container py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Enterprise-grade platform, still easy to use
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold">For engineering</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Manage subscription logic and integrations without building and maintaining the backend logic yourself.
              </p>
              <Link href="/for-developers" className="text-primary mt-4 inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold">For marketing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Launch paywall tests and double your conversion rates without releasing a new app version.
              </p>
              <Link href="/for-marketers" className="text-primary mt-4 inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold">For product</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Make data-driven decisions with subscription metrics and real-time data.
              </p>
              <Link href="/paywall-ab-testing" className="text-primary mt-4 inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </GridSection>

      {/* Features */}
      <GridSection>
        <div className="container py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Why choose Adapty?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <Link href={feature.link} className="text-primary inline-flex items-center text-sm font-medium">
                  {feature.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </GridSection>

      {/* Comparison Table */}
      <GridSection>
        <div className="container py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Adapty vs alternatives
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-left font-medium">Features</th>
                  <th className="py-4 text-center font-medium">Adapty</th>
                  <th className="py-4 text-center font-medium">RevenueCat</th>
                  <th className="py-4 text-center font-medium">Qonversion</th>
                  <th className="py-4 text-center font-medium">Superwall</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row) => (
                  <tr key={row.feature} className="border-b">
                    <td className="py-4">{row.feature}</td>
                    <td className="py-4 text-center"><StatusIcon value={row.adapty} /></td>
                    <td className="py-4 text-center"><StatusIcon value={row.revenuecat} /></td>
                    <td className="py-4 text-center"><StatusIcon value={row.qonversion} /></td>
                    <td className="py-4 text-center"><StatusIcon value={row.superwall} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </GridSection>

      <Logos />
      <Testimonials />
      <CTA />
    </>
  );
}
