"use client";

import * as React from "react";
import Link from "next/link";
import {
  SlidersHorizontalIcon,
  BarChartIcon,
  GlobeIcon,
  TableIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const FEATURES = [
  {
    icon: SlidersHorizontalIcon,
    title: "Customize anything",
    description:
      "Use Adapty's Remote Config to personalize the app monetization experience. It works best when you measure the effect in revenue.",
  },
  {
    icon: BarChartIcon,
    title: "Auto measuring",
    description:
      "Customize your paywall or run an A/B test by making changes to the remote config and Adapty will measure all subscription metrics for you.",
    link: "/paywall-ab-testing",
    linkText: "More about paywall A/B testing",
  },
  {
    icon: GlobeIcon,
    title: "Localization",
    description:
      "Add new locales as separate JSONs and conveniently edit all the translations.",
    link: "/paywall-localization",
    linkText: "More about localizations",
  },
  {
    icon: TableIcon,
    title: "Table or JSON view",
    description:
      "Choose the developer- or marketing-friendly view to work with the remote config.",
  },
];

const RELATED_PAGES = [
  { title: "Localize", href: "/paywall-localization" },
  { title: "Targeting", href: "/paywall-targeting" },
  { title: "Paywall Builder", href: "/paywall-builder" },
  { title: "A/B testing", href: "/paywall-ab-testing" },
];

export function RemoteConfigFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2">
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
                {feature.link && (
                  <Link
                    href={feature.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {feature.linkText}
                    <ArrowRightIcon className="size-4" />
                  </Link>
                )}
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.5}>
          <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "We like it that Adapty provides deep customization possibilities
              for paywalls and A/B tests. For a long time we've been using
              Remote config to change elements and localize our paywalls in a
              matter of minutes without having to wait for another app review."
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
        <BlurFade delay={0.6}>
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
        <BlurFade delay={0.7}>
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
        <BlurFade delay={0.8}>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="https://app.adapty.io/registration">
                Start using Remote Config
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
