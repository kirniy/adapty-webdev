"use client";

import * as React from "react";
import Link from "next/link";
import {
  UsersIcon,
  TargetIcon,
  FlaskConicalIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const FEATURES = [
  {
    icon: UsersIcon,
    title: "Create custom segments",
    description:
      "Use standard or custom attributes to create user segments of any size. Flexible setting of targeting conditions.",
  },
  {
    icon: TargetIcon,
    title: "Target segments with personalized offers",
    description:
      "Personalize the paywall experience for different user groups. Change copy, creatives, pricing, offers, and more - all in the Adapty Dashboard.",
  },
  {
    icon: FlaskConicalIcon,
    title: "Target with a Paywall or A/B test",
    description:
      "Show your target user segment a paywall or run an A/B test of a paywall to find the most convertible offers.",
  },
];

const RELATED_PAGES = [
  { title: "Remote Config", href: "/remote-config" },
  { title: "Localize", href: "/paywall-localization" },
  { title: "Paywall Builder", href: "/paywall-builder" },
  { title: "A/B testing", href: "/paywall-ab-testing" },
];

export function PaywallTargetingFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border bg-card p-8 h-full">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.4}>
          <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "Adapty turned out to be a great solution to the IDFA problem.
              Thanks to its convenient user segmentation, we managed to target
              paywalls and A/B tests for specific regions and user cohorts,
              which resulted in steady MoM growth in separate markets."
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold">Magnus Olafsson</p>
              <p className="text-sm text-muted-foreground">
                Chief Technology Officer at Smitten
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">500M</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  subscription events / month
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">1.4B</p>
                <p className="mt-2 text-sm text-muted-foreground">users</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">2.8M</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  subscribers / month
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">9B</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  API calls / month
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Related pages */}
        <BlurFade delay={0.6}>
          <div className="mt-16">
            <h2 className="text-center text-xl font-semibold">
              Learn more about Paywall management
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <Button key={index} asChild variant="outline">
                  <Link href={page.href} className="gap-2">
                    {page.title}
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.7}>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="https://app.adapty.io/registration">
                Start targeting paywalls
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
