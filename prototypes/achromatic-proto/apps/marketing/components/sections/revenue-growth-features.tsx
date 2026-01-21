"use client";

import * as React from "react";
import Link from "next/link";
import {
  PaletteIcon,
  SplitIcon,
  GlobeIcon,
  BarChart3Icon,
  UsersIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const PAYWALL_FEATURES = [
  {
    title: "No-code paywall builder",
    description:
      "Create beautiful paywalls without writing a single line of code. Use our visual editor to design, customize, and deploy paywalls that convert.",
    icon: PaletteIcon,
    link: "/paywall-builder",
  },
  {
    title: "Paywall A/B testing",
    description:
      "Test different paywall designs, pricing, and messaging to find what works best for your audience. Make data-driven decisions to maximize revenue.",
    icon: SplitIcon,
    link: "/paywall-ab-testing",
  },
  {
    title: "Localization & targeting",
    description:
      "Show personalized paywalls based on user location, behavior, and attributes. Speak to your users in their language and currency.",
    icon: GlobeIcon,
    link: "/paywall-builder",
  },
];

const ANALYTICS_FEATURES = [
  {
    title: "Revenue metrics",
    description:
      "Track MRR, ARR, ARPU, and other key metrics in real-time. Understand your revenue streams and identify growth opportunities.",
    icon: BarChart3Icon,
    link: "/revenue-analytics",
  },
  {
    title: "Cohort analysis",
    description:
      "See how your subscribers renew, churn, and bring revenue each subscription period. Understand user behavior over time.",
    icon: UsersIcon,
    link: "/ltv-analytics",
  },
  {
    title: "LTV prediction",
    description:
      "Use AI-powered predictions to forecast future revenue and make smarter marketing decisions. Know your ROI before you spend.",
    icon: TrendingUpIcon,
    link: "/predictive-analytics",
  },
];

const STATS = [
  { value: "2x", label: "Average revenue increase" },
  { value: "40%", label: "Higher conversion rates" },
  { value: "3mo", label: "Time to see results" },
  { value: "0", label: "Lines of code needed" },
];

const RELATED_PAGES = [
  { name: "Analyze revenue performance", href: "/revenue-analytics" },
  { name: "Integrate subscriptions", href: "/sdk" },
];

export function RevenueGrowthFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Paywall Features */}
        <BlurFade delay={0.1}>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Build paywalls that convert
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Your paywall is your most important revenue tool. Make it work
            harder with powerful no-code features.
          </p>
        </BlurFade>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PAYWALL_FEATURES.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.2 + index * 0.1}>
              <Link
                href={feature.link}
                className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
              >
                <feature.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                  Learn more
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* Analytics Features */}
        <div className="mt-20">
          <BlurFade delay={0.3}>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Understand your revenue
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Get the insights you need to make data-driven decisions and grow
              your subscription business.
            </p>
          </BlurFade>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ANALYTICS_FEATURES.map((feature, index) => (
              <BlurFade key={feature.title} delay={0.4 + index * 0.1}>
                <Link
                  href={feature.link}
                  className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
                >
                  <feature.icon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                    Learn more
                  </span>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="mt-20 rounded-2xl border bg-card p-8 md:p-12">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Results you can count on
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-primary md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* FunnelFox CTA */}
        <BlurFade delay={0.6}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  New
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  FunnelFox web funnels
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Extend your revenue beyond the app stores. Create web-based
                  subscription funnels to capture users before they even
                  download your app.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/schedule-demo">Learn about FunnelFox</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-48 w-full max-w-sm rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">WEB</div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Learn More */}
        <BlurFade delay={0.7}>
          <div className="mt-16">
            <h2 className="text-xl font-semibold">Learn more</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {RELATED_PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
                >
                  {page.name}
                  <span className="text-primary">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
