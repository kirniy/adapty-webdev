"use client";

import * as React from "react";
import Link from "next/link";
import {
  TrendingUpIcon,
  DollarSignIcon,
  FilterIcon,
  TargetIcon,
  UsersIcon,
  CalendarCheckIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const BENEFITS = [
  {
    icon: TrendingUpIcon,
    text: "Find out the predicted LTV and revenue of your user cohorts.",
  },
  {
    icon: DollarSignIcon,
    text: "See how much you can invest by being aware of the predicted payoff.",
  },
  {
    icon: TargetIcon,
    text: "Learn which cohorts are likely to generate the highest revenue in the future.",
  },
];

const FEATURES = [
  {
    title: "Predict the next 4 quarters",
    description:
      "Build LTV and revenue predictions for 3, 6, 9, or 12 months based on your historical data.",
    icon: CalendarCheckIcon,
  },
  {
    title: "Diverse filtering",
    description:
      "Filter and group the predicted LTV data by product, duration, country, and other attributes to find more insights.",
    icon: FilterIcon,
  },
  {
    title: "Accurate prediction model",
    description:
      "Our backtests show 90% accuracy with the real LTV when making predictions for the next 2 quarters.",
    icon: TargetIcon,
  },
  {
    title: "Cohort prediction",
    description:
      "The prediction model is tightly tied with the cohort chart that enables you to see how your subscribers renew, churn, and bring revenue each subscription period.",
    icon: UsersIcon,
  },
];

const RELATED_PAGES = [
  { name: "LTV analytics", href: "/ltv-analytics" },
  { name: "Revenue analytics", href: "/revenue-analytics" },
];

export function PredictiveAnalyticsFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Benefits */}
        <BlurFade delay={0.1}>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            What can I do with AI predictions?
          </h2>
        </BlurFade>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div className="flex gap-4 rounded-lg border bg-card p-6">
                <div className="flex-shrink-0">
                  <benefit.icon
                    className="h-6 w-6 text-primary"
                                      />
                </div>
                <p className="text-muted-foreground">{benefit.text}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.3 + index * 0.1}>
              <div className="rounded-lg border bg-card p-8">
                <feature.icon
                  className="h-10 w-10 text-primary"
                                  />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.5}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "We've been using Adapty's analytics for a long time, but the
              predictive analytics feature turned out to be our crystal ball for
              future growth."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold">Sergey Lagutyonok</div>
              <div className="text-sm text-muted-foreground">
                Product manager at Impala Studios
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Migration CTA */}
        <BlurFade delay={0.6}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Using another or in-house solution for subscriptions?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We've got you covered and will help you move your data
                  securely and seamlessly without losing a single subscriber.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/schedule-demo">
                      Schedule a call to know more
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-48 w-full max-w-sm rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">SDK</div>
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
