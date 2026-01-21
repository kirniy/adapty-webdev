'use client';

import * as React from 'react';
import Link from 'next/link';

import { PricingTable } from '@workspace/billing/components/pricing-table';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

export function PricingHero(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container space-y-12 py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            badge="Pricing"
            title="Start for free or go Pro"
            description="Trusted by 15,000+ apps and the world's largest app publishers"
          />
        </BlurFade>
        <BlurFade delay={0.1}>
          <PricingTable />
        </BlurFade>
        <BlurFade delay={0.15}>
          <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            <p>
              All plans include unlimited paywalls, SDK integration, and real-time analytics.
              Need a custom solution?{' '}
              <Link href="/contact" className="text-primary transition-colors duration-150 ease-out hover:underline motion-reduce:transition-none">
                Contact our sales team
              </Link>
              .
            </p>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
