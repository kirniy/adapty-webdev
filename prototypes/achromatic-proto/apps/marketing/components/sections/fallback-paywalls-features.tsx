"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShieldCheckIcon,
  LayersIcon,
  RefreshCwIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const FEATURES = [
  {
    title: "100% fall tolerance",
    description:
      "Download your paywalls and use them in case Adapty is unavailable. Subscribe customers in any circumstance and never miss one.",
    icon: ShieldCheckIcon,
    link: "https://adapty.io/docs/fallback-paywalls",
    linkText: "Learn more",
  },
  {
    title: "Multi-cache layers of security",
    description:
      "Adapty caches paywalls on the offline, device, CDN, network, and database layers. We make sure you get 100% availability in the most extreme cases.",
    icon: LayersIcon,
  },
  {
    title: "Auto data restore",
    description:
      "Adapty never misses a single subscription event from subscribers. If our servers are unavailable, we'll auto-restore data on the next launch.",
    icon: RefreshCwIcon,
    link: "https://status.adapty.io/",
    linkText: "Check the system status",
  },
];

const STATS = [
  { value: "500M+", label: "subscription events / month" },
  { value: "1.4B", label: "users" },
  { value: "2.8M", label: "subscribers / month" },
  { value: "9B", label: "API calls / month" },
];

const RELATED_PAGES = [
  { name: "Subscriber sync", href: "/subscription-sync" },
  { name: "Subscription SDK", href: "/sdk" },
];

export function FallbackPaywallsFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.1 + index * 0.1}>
              <div className="flex h-full flex-col rounded-lg border bg-card p-8">
                <feature.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">
                  {feature.description}
                </p>
                {feature.link && (
                  <Link
                    href={feature.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {feature.linkText}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.4}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "Adapty SDK made integrating in-app purchases a walk in the park.
              With just a few lines of code, I was able to implement
              subscriptions seamlessly for both iOS and Android."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold">Magnus Olafsson</div>
              <div className="text-sm text-muted-foreground">
                Chief Technology Officer at Smitten
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border bg-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary">
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

        {/* Learn More */}
        <BlurFade delay={0.6}>
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
                  <ArrowRightIcon className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
