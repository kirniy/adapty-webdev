"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";
import { SiteHeading } from "~/components/fragments/site-heading";

const COMPETITORS = [
  { name: "RevenueCat", slug: "revenuecat" },
  { name: "Qonversion", slug: "qonversion" },
  { name: "Purchasely", slug: "purchasely" },
  { name: "Superwall", slug: "superwall" },
  { name: "In-house Solution", slug: "in-house-development" },
];

export function CompareHero(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.1}>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Comparisons
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="mt-4">
              <SiteHeading
                title="Adapty is the #1 Subscription Management Platform"
                description="Adapty is an all-in-one mobile revenue growth system."
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/schedule-demo">Schedule A Demo</Link>
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.4}>
          <div className="mt-16">
            <h2 className="text-center text-lg font-semibold text-muted-foreground mb-8">
              Compare with
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {COMPETITORS.map((competitor) => (
                <Link
                  key={competitor.slug}
                  href={`/compare/${competitor.slug}`}
                  className="flex items-center justify-center rounded-lg border bg-card px-6 py-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground min-w-[160px]"
                >
                  {competitor.name}
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="mt-20 rounded-2xl border bg-card p-8 md:p-12">
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
                  <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-lg bg-primary/10" />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
