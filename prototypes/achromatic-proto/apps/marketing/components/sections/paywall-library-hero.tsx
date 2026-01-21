'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/paywall-library (scraped 2026-01-21)
// Title: "Mobile Paywall Library"
// Description: "Get inspired by 10,000+ app paywalls. Learn how to design the best paywall for your app."
// CTAs: "Try Adapty for free", link to real library

export function PaywallLibraryHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'try' | 'browse' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="Paywall Library"
              title="Mobile Paywall Library"
              description="Get inspired by 10,000+ app paywalls. Learn how to design the best paywall for your app."
            />
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('try')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'try' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Try Adapty for free
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: isHovered === 'try' ? 3 : 0 }}
                    transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('browse')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'browse' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://adapty.io/paywall-library/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Browse full library
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
