'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, RocketIcon, CreditCardIcon, ClockIcon, HeartIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// EXACT content from adapty.io/for-indie (scraped 2026-01-21)
// Badge: "For Indie"
// Title: "Scale your indie or pet project to a profitable app business"
// Description: "Whether starting with a single app, working alone, or with a small bootstrapped team - we've got you covered and will help you focus on your product, not the infrastructure."

// Key benefits for indie developers
const BENEFITS = [
  { icon: CreditCardIcon, text: 'Free tier for starters' },
  { icon: ClockIcon, text: 'Setup in under 10 minutes' },
  { icon: RocketIcon, text: 'Scale as you grow' },
  { icon: HeartIcon, text: 'Built by indie devs' },
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

export function ForIndieHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'start' | 'demo' | null>(null);

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
                For indie developers
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Scale your indie project to a profitable app business
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether starting with a single app, working alone, or with a small bootstrapped team - we have got you covered. Focus on your product, not the infrastructure.
              </p>
            </BlurFade>

            {/* Benefits grid */}
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="size-4 text-primary" />
                    </div>
                    {benefit.text}
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
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
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    Start for free
                    <motion.span
                      animate={shouldReduceMotion ? undefined : { x: isHovered === 'start' ? 3 : 0 }}
                      transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="ml-2 size-4" />
                    </motion.span>
                  </Link>
                </motion.div>

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
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    Book a demo
                  </Link>
                </motion.div>
              </div>
            </BlurFade>

            {/* Social proof */}
            <BlurFade delay={0.3}>
              <p className="text-sm text-muted-foreground">
                Join 15,000+ developers who use Adapty
              </p>
            </BlurFade>
          </div>

          {/* Right: SDK/Dashboard illustration */}
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
                src={getImagePath('/assets/hero/light-feature4.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty SDK integration - simple setup for indie developers"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature4.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty SDK integration - simple setup for indie developers"
                className="hidden w-full dark:block"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
