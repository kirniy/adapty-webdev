'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpIcon,
  DollarSignIcon,
  FlaskConicalIcon,
  GlobeIcon,
  TargetIcon,
  TrendingUpIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';
import {
  useImageSetVariant,
  useMonochromeMode,
  type ImageSetVariant
} from '~/lib/debug-context';

// Magic animation: Revenue growth counter
function RevenueCounterMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = React.useState(0);
  const targetValue = 247;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setValue(targetValue);
      return;
    }
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 "
      >
        <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
          <ArrowUpIcon className="size-3 text-primary" />
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-primary">+{value}%</p>
          <p className="text-[10px] text-muted-foreground">Revenue growth</p>
        </div>
      </motion.div>
    </div>
  );
}

// Magic animation: MRR growth chart
function MRRChartMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [animationProgress, setAnimationProgress] = React.useState(0);

  const dataPoints = [20, 35, 28, 45, 52, 68, 75, 95];

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setAnimationProgress(1);
      return;
    }
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.02;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  const visiblePoints = Math.floor(dataPoints.length * animationProgress);

  return (
    <div className="absolute bottom-4 left-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 "
      >
        <div className="flex items-center gap-2 mb-1">
          <DollarSignIcon className="size-3 text-primary" />
          <span className="text-[10px] font-medium text-muted-foreground">
            MRR Growth
          </span>
        </div>
        <div className="flex items-end gap-0.5 h-6">
          {dataPoints.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{
                height: index < visiblePoints ? `${height}%` : 0
              }}
              transition={{ duration: 0.15, delay: index * 0.05 }}
              className={cn(
                'w-1.5 rounded-t-sm',
                index < visiblePoints - 1 ? 'bg-primary/40' : 'bg-primary'
              )}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Content from adapty.io/revenue-growth
// Badge: "Revenue growth"
// Title: "Double your subscription revenue in 3 months"
// Description: "With Adapty, your paywalls are not static pictures. Turn them into powerful no-code tools with A/B testing, localization, and targeting to maximize your subscription revenue."

// Key benefits for revenue growth
const BENEFITS = [
  { icon: FlaskConicalIcon, text: 'A/B test everything' },
  { icon: GlobeIcon, text: 'Localize for 180+ markets' },
  { icon: TargetIcon, text: 'Target the right users' },
  { icon: TrendingUpIcon, text: 'Real-time analytics' }
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

export function RevenueGrowthHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(
    null
  );

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        {/* Split layout: text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge
                variant="outline"
                className="w-fit rounded-full px-4 py-1.5"
              >
                Revenue Growth
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Double your subscription revenue in 3 months
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                With Adapty, your paywalls are not static pictures. Turn them
                into powerful no-code tools with A/B testing, localization, and
                targeting to maximize your subscription revenue.
              </p>
            </BlurFade>

            {/* Benefits grid */}
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
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
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0
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
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
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

          {/* Right: Analytics dashboard screenshot */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
              }
              transition={{
                delay: shouldReduceMotion ? 0 : 0.1,
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1]
              }}
              className={cn(
                'relative w-full overflow-hidden rounded-xl border bg-background ',
                monochromeMode &&
                  'grayscale hover:grayscale-0 transition-[filter] duration-500'
              )}
            >
              <Spotlight
                className="from-primary/10 via-primary/5 to-transparent"
                size={350}
              />
              <RevenueCounterMagic />
              <MRRChartMagic />
              <BorderBeam
                size={200}
                duration={12}
                delay={9}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Revenue Analytics - track MRR, ARR, and subscription metrics"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Revenue Analytics - track MRR, ARR, and subscription metrics"
                className="hidden w-full dark:block"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
