'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, ZapIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Button, buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';
import { SectionBackground } from '~/components/fragments/section-background';

const COMPETITORS = [
  { name: 'RevenueCat', slug: 'revenuecat' },
  { name: 'Qonversion', slug: 'qonversion' },
  { name: 'Purchasely', slug: 'purchasely' },
  { name: 'Superwall', slug: 'superwall' },
  { name: 'In-house Solution', slug: 'in-house-development' },
];

// Animated counter for win rate
function WinRateMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const targetCount = 94;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(targetCount);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const increment = targetCount / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="flex items-baseline gap-1">
      <motion.span
        key={count}
        initial={shouldReduceMotion ? false : { scale: 1.1 }}
        animate={{ scale: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
      >
        {count}%
      </motion.span>
      <span className="text-sm text-muted-foreground">win rate</span>
    </div>
  );
}

export function CompareHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isCtaHovered, setIsCtaHovered] = React.useState(false);
  const [isMigrationHovered, setIsMigrationHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <ZapIcon className="size-4" />
              Comparisons
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <div className="mt-4">
              <SiteHeading
                title="Adapty is the #1 Subscription Management Platform"
                description="Adapty is an all-in-one mobile revenue growth system."
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="mt-8">
              <motion.div
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
                animate={shouldReduceMotion ? undefined : {
                  y: isCtaHovered ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="inline-block"
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Schedule A Demo
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: isCtaHovered ? 3 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2}>
          <div className="mt-16">
            <h2 className="text-center text-lg font-semibold text-muted-foreground mb-8">
              Compare with
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {COMPETITORS.map((competitor, index) => (
                <BlurFade key={competitor.slug} delay={0.25 + index * 0.03}>
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={shouldReduceMotion ? undefined : {
                      y: hoveredIndex === index ? -4 : 0,
                      scale: hoveredIndex === index ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  >
                    <Link
                      href={`/compare/${competitor.slug}`}
                      className={cn(
                        'group relative flex items-center justify-center rounded-xl border bg-background/50 backdrop-blur-sm px-6 py-4 text-sm font-medium transition-colors min-w-[160px] overflow-hidden',
                        hoveredIndex === index && 'border-primary/30  '
                      )}
                    >
                      {hoveredIndex === index && (
                        <BorderBeam
                          size={80}
                          duration={6}
                          borderWidth={1.5}
                          colorFrom="hsl(var(--primary))"
                          colorTo="hsl(var(--primary)/0)"
                        />
                      )}
                      <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={150} />
                      <span className="relative group-hover:text-primary transition-colors">
                        {competitor.name}
                      </span>
                      <motion.span
                        animate={shouldReduceMotion ? undefined : {
                          x: hoveredIndex === index ? 4 : 0,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.15 }}
                        className="relative ml-2"
                      >
                        <ArrowRightIcon className="size-4 text-primary" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <motion.div
            onMouseEnter={() => setIsMigrationHovered(true)}
            onMouseLeave={() => setIsMigrationHovered(false)}
            animate={shouldReduceMotion ? undefined : {
              y: isMigrationHovered ? -4 : 0,
            }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-20 relative rounded-2xl border bg-gradient-to-br from-primary/5 via-background/80 to-background/50 border-primary/20 p-8 md:p-12 overflow-hidden"
          >
            <Spotlight className="from-primary/20 via-primary/5 to-transparent" size={400} />
            <BorderBeam
              size={250}
              duration={15}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
              className="opacity-50"
            />

            <div className="relative grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Using another or in-house solution for subscriptions?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We have got you covered and will help you move your data
                  securely and seamlessly without losing a single subscriber.
                </p>

                {/* Migration benefits */}
                <div className="mt-6 space-y-3">
                  {['Zero downtime migration', 'Full data integrity', 'Dedicated support team'].map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={shouldReduceMotion ? undefined : { opacity: 0, x: -10 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10">
                        <CheckIcon className="size-3 text-emerald-500" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/schedule-demo">
                      Schedule a call to know more
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-6">
                {/* Win rate stat */}
                <div className="text-center">
                  <WinRateMagic />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Customers who switch to Adapty
                  </p>
                </div>

                {/* Migration visualization */}
                <div className="relative flex items-center justify-center gap-4">
                  <motion.div
                    animate={shouldReduceMotion ? undefined : { scale: [1, 0.95, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-16 w-24 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center"
                  >
                    <span className="text-xs text-muted-foreground">Old SDK</span>
                  </motion.div>

                  <div className="relative w-16">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : { x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center justify-center"
                    >
                      <ArrowRightIcon className="size-6 text-primary" />
                    </motion.div>
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-1/2 left-0 h-0.5 w-4 bg-primary rounded"
                      />
                    )}
                  </div>

                  <motion.div
                    animate={shouldReduceMotion ? undefined : { scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-16 w-24 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                  >
                    <span className="text-xs text-primary font-medium">Adapty</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
