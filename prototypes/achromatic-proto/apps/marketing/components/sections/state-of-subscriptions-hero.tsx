'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, DownloadIcon, FileTextIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/state-of-in-app-subscriptions (scraped 2026-01-21)
// Title: "State of in-app subscriptions 2025"
// Description: "The most comprehensive report on mobile subscription growth, based on $1.9B in revenue from 15,000+ apps."

export function StateOfSubscriptionsHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="2025 report"
              title="State of in-app subscriptions 2025"
              description="The most comprehensive report on mobile subscription growth, based on $1.9B in revenue from 15,000+ apps. Learn how to price, monetize, and scale faster in 2025."
            />
          </BlurFade>

          <BlurFade delay={0.1}>
            <p className="text-sm text-muted-foreground">
              Includes the exclusive Adapty Pricing Index, insights you won't find anywhere else.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                y: shouldReduceMotion ? 0 : isHovered ? -2 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block"
            >
              <Link
                href="https://uploads.adapty.io/state_of_in_app_subscriptions_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                )}
              >
                <DownloadIcon className="mr-2 size-4" />
                Download the report
                <motion.span
                  animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ArrowRightIcon className="ml-2 size-4" />
                </motion.span>
              </Link>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
