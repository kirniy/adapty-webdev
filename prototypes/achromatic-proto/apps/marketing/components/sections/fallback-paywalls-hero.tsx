"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";
import { SiteHeading } from "~/components/fragments/site-heading";

export function FallbackPaywallsHero(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.1}>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Fallback paywalls
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="mt-4">
              <SiteHeading
                title="Reach 100% uptime with fallback paywalls"
                description="Save your paywalls offline on-device and use them in case your user doesn't have internet or Adapty servers are down."
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/schedule-demo">Book a demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://app.adapty.io/registration">
                  Start for free
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
