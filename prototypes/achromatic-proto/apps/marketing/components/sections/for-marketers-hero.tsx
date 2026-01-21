'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// EXACT content from adapty.io/for-marketers (scraped 2026-01-21)
// Badge: "For marketers"
// Title: "Build, manage, and target paywalls without leaving the dashboard"
// Description: "Create and deploy beautiful native paywalls with Adapty Paywall Builder. A/B test paywalls and target them using one dashboard. Track metrics with 99% accuracy with stores."

// Key benefits for marketers
const BENEFITS = [
  'No-code paywall builder',
  'A/B testing without engineers',
  '99% accurate analytics',
  'Real-time targeting',
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

export function ForMarketersHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        {/* Split layout: text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5">
                For marketers
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Build, manage, and target paywalls without leaving the dashboard
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                Create and deploy beautiful native paywalls with Adapty Paywall Builder. A/B test paywalls and target them using one dashboard. Track metrics with 99% accuracy with stores.
              </p>
            </BlurFade>

            {/* Benefits list */}
            <BlurFade delay={0.2}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex size-5 items-center justify-center rounded-full border border-primary/30">
                      <CheckIcon className="size-3 text-primary" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <motion.div
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="/schedule-demo"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    Book a demo
                    <motion.span
                      animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                      transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="ml-2 size-4" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    Start for free
                  </Link>
                </motion.div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Dashboard illustration */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "relative w-full overflow-hidden rounded-xl border bg-background shadow-lg",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder - no-code visual editor for marketers"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder - no-code visual editor for marketers"
                className="hidden w-full dark:block"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
