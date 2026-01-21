"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";
import { SiteHeading } from "~/components/fragments/site-heading";

export function AIPaywallGeneratorHero(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.1}>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              AI Paywall Generator
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="mt-4">
              <SiteHeading
                title="Your personalized AI paywall is seconds away"
                description="Drop your link, no sign-up, no card required. Get a real paywall generated from your app."
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="https://app.adapty.io/registration">
                  Try AI Paywall Generator
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/schedule-demo">Schedule a demo</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
