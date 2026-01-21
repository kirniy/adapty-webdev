"use client";

import * as React from "react";
import Link from "next/link";
import { GlobeIcon, CodeIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const FEATURES = [
  {
    icon: GlobeIcon,
    title: "Localize with the Paywall Builder",
    description:
      "Add translations and preview the result within one dashboard for the paywalls made in the Paywall Builder.",
    link: "/paywall-builder",
    linkText: "Learn more about Paywall Builder",
  },
  {
    icon: CodeIcon,
    title: "Localize with Remote Config",
    description:
      "Easily add new locales as separate JSONs and conveniently edit all the translations.",
    link: "/remote-config",
    linkText: "Learn more about Remote Config",
  },
];

const RELATED_PAGES = [
  { title: "Remote Config", href: "/remote-config" },
  { title: "Targeting", href: "/paywall-targeting" },
  { title: "Paywall Builder", href: "/paywall-builder" },
  { title: "A/B testing", href: "/paywall-ab-testing" },
];

export function PaywallLocalizationFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Features */}
        <div className="grid gap-12 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border bg-card p-8">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {feature.linkText}
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.4}>
          <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "Adapty's Paywall Builder and A/B testing tools paired together
              are a game changer for anyone trying to do high-velocity testing
              and find quick wins."
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold">Mike McSweeney</p>
              <p className="text-sm text-muted-foreground">
                Chief Product Officer at Moodworks Inc.
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
                Start localizing paywalls
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
