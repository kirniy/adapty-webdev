'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronRightIcon,
  LineChartIcon,
  ReceiptIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// LTV Chart Magic - Rising line chart
function LTVChartMagic() {
  const shouldReduceMotion = useReducedMotion();
  const points = [20, 35, 42, 55, 65, 72, 85];

  return (
    <div className="mt-4 h-[70px] rounded-lg bg-muted/30 border border-border/50 p-3 relative overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 140 50"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1="0"
            y1={i * 25}
            x2="140"
            y2={i * 25}
            stroke="hsl(var(--border))"
            strokeOpacity="0.3"
          />
        ))}

        {/* LTV line */}
        <motion.path
          d={`M ${points.map((p, i) => `${i * 20},${50 - p * 0.55}`).join(' L ')}`}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 1 }
              : {
                  pathLength: 1,
                  opacity: 1
                }
          }
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={i * 20}
            cy={50 - p * 0.55}
            r="3"
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={shouldReduceMotion ? { scale: 1 } : { scale: [0, 1.3, 1] }}
            transition={{ delay: 0.1 * i + 0.5, duration: 0.3 }}
          />
        ))}
      </svg>

      {/* Label */}
      <motion.div
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-2 right-2 text-[8px] text-primary font-medium"
      >
        +325% LTV
      </motion.div>
    </div>
  );
}

// Cohort Grid Magic - User cohort visualization
function CohortGridMagic() {
  const shouldReduceMotion = useReducedMotion();
  const cohortSizes = [
    [100, 85, 70, 60, 55],
    [100, 80, 65, 55, 50],
    [100, 90, 75, 68, 62],
    [100, 82, 68, 58, 52]
  ];

  return (
    <div className="mt-4 h-[70px] rounded-lg bg-muted/30 border border-border/50 p-2 flex items-center justify-center gap-1">
      {cohortSizes.map((cohort, ci) => (
        <div
          key={ci}
          className="flex flex-col gap-0.5"
        >
          {cohort.map((value, vi) => (
            <motion.div
              key={vi}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                shouldReduceMotion
                  ? { opacity: value / 100, scale: 1 }
                  : {
                      opacity: [value / 200, value / 100, value / 200],
                      scale: 1
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (ci + vi) * 0.1
              }}
              className="w-4 h-2 rounded-sm bg-primary"
              style={{ opacity: value / 100 }}
            />
          ))}
        </div>
      ))}
      <div className="ml-2 text-[8px] text-muted-foreground flex flex-col">
        <span>M1</span>
        <span>M3</span>
        <span>M6</span>
        <span>M9</span>
        <span>M12</span>
      </div>
    </div>
  );
}

// Calendar LTV Magic - Days/Renewals switch visualization
function CalendarMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = React.useState<'days' | 'renewals'>('days');

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setMode((prev) => (prev === 'days' ? 'renewals' : 'days'));
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-2 flex items-center gap-3">
      {/* Mode toggle */}
      <div className="flex gap-1">
        <motion.div
          animate={{
            backgroundColor:
              mode === 'days' ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
            color:
              mode === 'days'
                ? 'hsl(var(--primary-foreground))'
                : 'hsl(var(--muted-foreground))'
          }}
          transition={{ duration: 0.2 }}
          className="px-2 py-1 rounded text-[8px] font-medium"
        >
          Days
        </motion.div>
        <motion.div
          animate={{
            backgroundColor:
              mode === 'renewals' ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
            color:
              mode === 'renewals'
                ? 'hsl(var(--primary-foreground))'
                : 'hsl(var(--muted-foreground))'
          }}
          transition={{ duration: 0.2 }}
          className="px-2 py-1 rounded text-[8px] font-medium"
        >
          Renewals
        </motion.div>
      </div>

      {/* Mini chart that changes based on mode */}
      <div className="flex-1 flex items-end gap-0.5 h-8">
        {(mode === 'days'
          ? [15, 25, 35, 42, 50, 55, 60]
          : [20, 40, 55, 62, 68, 72, 78]
        ).map((h, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="flex-1 bg-primary/40 rounded-t"
          />
        ))}
      </div>
    </div>
  );
}

// Tax Deduction Magic - Revenue breakdown
function TaxMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [showNet, setShowNet] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setShowNet((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <span className="text-[9px] text-muted-foreground">Gross</span>
        <span className="text-sm font-bold text-foreground">$100</span>
      </div>

      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-muted-foreground"
      ></motion.div>

      <AnimatePresence mode="wait">
        {showNet ? (
          <motion.div
            key="net"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-[9px] text-muted-foreground">Net</span>
            <span className="text-sm font-bold text-primary">$70</span>
          </motion.div>
        ) : (
          <motion.div
            key="deductions"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-[9px] text-red-500">-30% fees</span>
            <span className="text-sm font-medium text-muted-foreground">
              Taxes
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Prediction Magic - AI forecast visualization
function PredictionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const historical = [30, 40, 48, 55, 60];
  const predicted = [65, 72, 78, 85];

  return (
    <div className="mt-4 h-[70px] rounded-lg bg-muted/30 border border-border/50 p-3 relative overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 140 50"
        preserveAspectRatio="none"
      >
        {/* Historical line */}
        <motion.path
          d={`M ${historical.map((p, i) => `${i * 18},${50 - p * 0.55}`).join(' L ')}`}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Predicted line (dashed) */}
        <motion.path
          d={`M 72,${50 - 60 * 0.55} ${predicted.map((p, i) => `L ${72 + (i + 1) * 18},${50 - p * 0.55}`).join(' ')}`}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 1 }
              : {
                  pathLength: 1,
                  opacity: [0, 1]
                }
          }
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* AI indicator */}
        <motion.circle
          cx="126"
          cy={50 - 85 * 0.55}
          r="5"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={shouldReduceMotion ? { scale: 1 } : { scale: [0, 1.5, 1] }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />
      </svg>

      {/* AI badge */}
      <motion.div
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10 text-[8px] text-primary font-medium"
      >
        <SparklesIcon className="size-2.5" />
        AI Forecast
      </motion.div>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

// Map features to magic components
const FEATURE_MAGIC: Record<string, React.ComponentType> = {
  'Real-time LTV chart': LTVChartMagic,
  'Know the LTV of any group of users': CohortGridMagic,
  'Get cumulative lifetime value by days or renewals': CalendarMagic,
  'Deduct taxes and commissions': TaxMagic,
  'Predict LTV growth': PredictionMagic
};

// EXACT content from adapty.io/ltv-analytics (scraped 2026-01-21)
const FEATURES = [
  {
    icon: LineChartIcon,
    title: 'Real-time LTV chart',
    description:
      "Keep track of your subscriber's lifetime value either by subscription periods or by days. Use it to adjust your CPA and paid campaigns.",
    category: 'analytics'
  },
  {
    icon: UsersIcon,
    title: 'Know the LTV of any group of users',
    description:
      'Break down LTV by any group of users, any paywall, or A/B test. Find the most performed segments and grow them.',
    category: 'segmentation'
  },
  {
    icon: CalendarIcon,
    title: 'Get cumulative lifetime value by days or renewals',
    description: 'Switch LTV calculations by charging periods or by days.',
    category: 'analytics'
  },
  {
    icon: ReceiptIcon,
    title: 'Deduct taxes and commissions',
    description:
      'View revenue data considering taxes and store commissions to know your true earnings.',
    category: 'revenue'
  },
  {
    icon: SparklesIcon,
    title: 'Predict LTV growth',
    description:
      'Predict your LTV and revenue data for up to 12 months to see when your traffic starts to pay off.',
    category: 'prediction',
    link: '/predictive-analytics',
    linkText: 'More about AI prediction'
  }
];

const CATEGORIES = [
  'all',
  'analytics',
  'segmentation',
  'revenue',
  'prediction'
] as const;
type Category = (typeof CATEGORIES)[number];

// Testimonial from adapty.io/ltv-analytics
const FEATURED_TESTIMONIAL = {
  quote:
    "Adapty's analytics platform has become an invaluable asset for optimizing our app's monetization strategy. The detailed subscription metrics and LTV prediction tools provide us with real insights to drive our revenue growth.",
  name: 'Burak Berber',
  title: 'Marketing Team Lead at Appnation'
};

// Related pages from adapty.io/ltv-analytics
const RELATED_PAGES = [
  { title: 'AI LTV and revenue predictions', link: '/predictive-analytics' },
  { title: 'Revenue analytics', link: '/revenue-growth' }
];

// =============================================================================
// VARIANT: GRID - Classic grid with testimonial and features
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-16 relative z-10">
        {/* Featured testimonial */}
        <BlurFade delay={0.05}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="relative rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 p-8">
              <div className="text-center">
                <TrendingUpIcon className="size-8 text-primary/50 mx-auto mb-4" />
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">
                  {FEATURED_TESTIMONIAL.title}
                </p>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const MagicComponent = FEATURE_MAGIC[feature.title];
            const isHovered = hoveredIndex === index;

            return (
              <BlurFade
                key={index}
                delay={0.1 + index * 0.05}
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: isHovered ? -6 : 0,
                          scale: isHovered ? 1.02 : 1
                        }
                  }
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <div
                    className={cn(
                      'relative h-full rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200 cursor-pointer',
                      isHovered && 'border-primary/50'
                    )}
                  >
                    <div className="p-6">
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: isHovered ? 1.15 : 1,
                                rotate: isHovered ? 5 : 0
                              }
                        }
                        transition={{
                          type: 'spring',
                          duration: 0.3,
                          bounce: 0.2
                        }}
                        className={cn(
                          'flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 transition-colors',
                          isHovered && 'bg-primary/20'
                        )}
                      >
                        <feature.icon className="size-6" />
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      {feature.link && feature.linkText && (
                        <Link
                          href={feature.link}
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {feature.linkText}
                        </Link>
                      )}

                      {/* Magic Animation */}
                      {MagicComponent && <MagicComponent />}
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Migration CTA */}
        <BlurFade delay={0.35}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl bg-muted/50 border border-border/50 p-8 md:p-12 max-w-2xl mx-auto text-center">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">
                  Using another or in-house solution for subscriptions?
                </h3>
                <p className="text-muted-foreground mb-4">
                  We've got you covered and will help you move your data
                  securely and seamlessly without losing a single subscriber.
                </p>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="inline-block"
                >
                  <Link
                    href="/schedule-demo"
                    className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Schedule a call to know more
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.4}>
          <div className="mt-16">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <motion.div
                  key={index}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href={page.link}
                    className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 inline-flex items-center gap-2"
                  >
                    {page.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid with featured cards
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // First two are featured
  const featured = FEATURES.slice(0, 2);
  const regular = FEATURES.slice(2);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-16 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Powerful LTV analytics tools"
            description="Understand your subscriber lifetime value in detail and make data-driven decisions."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured cards */}
          {featured.map((feature, index) => {
            const MagicComponent = FEATURE_MAGIC[feature.title];
            const isHovered = hoveredIndex === index;

            return (
              <BlurFade
                key={`featured-${index}`}
                delay={0.1 + index * 0.05}
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: isHovered ? -6 : 0,
                          scale: isHovered ? 1.01 : 1
                        }
                  }
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    'lg:col-span-1',
                    index === 0 && 'lg:row-span-2'
                  )}
                >
                  <div
                    className={cn(
                      'relative h-full rounded-xl border bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-200 cursor-pointer',
                      isHovered && 'border-primary/50',
                      index === 0 && 'min-h-[380px]'
                    )}
                  >
                    <div className="p-8 h-full flex flex-col">
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: isHovered ? 1.15 : 1,
                                rotate: isHovered ? -5 : 0
                              }
                        }
                        transition={{
                          type: 'spring',
                          duration: 0.3,
                          bounce: 0.2
                        }}
                        className={cn(
                          'flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-colors',
                          isHovered && 'bg-primary/20'
                        )}
                      >
                        <feature.icon className="size-7" />
                      </motion.div>
                      <h3 className="font-bold text-xl mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {feature.description}
                      </p>

                      {/* Magic Animation */}
                      {MagicComponent && <MagicComponent />}

                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                x: isHovered ? 4 : 0,
                                opacity: isHovered ? 1 : 0.6
                              }
                        }
                        className="mt-4 flex items-center text-sm font-medium text-primary"
                      >
                        Learn more <ChevronRightIcon className="ml-1 size-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}

          {/* Regular cards */}
          {regular.map((feature, index) => {
            const MagicComponent = FEATURE_MAGIC[feature.title];
            const isHovered = hoveredIndex === index + featured.length;

            return (
              <BlurFade
                key={`regular-${index}`}
                delay={0.15 + index * 0.03}
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index + featured.length)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: isHovered ? -4 : 0
                        }
                  }
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <div
                    className={cn(
                      'relative h-full rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-150 cursor-pointer',
                      isHovered && 'border-primary/30'
                    )}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: isHovered ? 1.1 : 1,
                                  rotate: isHovered ? 5 : 0
                                }
                          }
                          transition={{
                            type: 'spring',
                            duration: 0.2,
                            bounce: 0.2
                          }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                          <feature.icon className="size-5" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                          {feature.link && feature.linkText && (
                            <Link
                              href={feature.link}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2"
                            >
                              {feature.linkText}
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Magic Animation */}
                      {MagicComponent && <MagicComponent />}
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.3}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 p-8">
              <div className="text-center">
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">
                  {FEATURED_TESTIMONIAL.title}
                </p>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Tabbed content with category filter
// =============================================================================
function TabsFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState<Category>('all');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const filteredFeatures =
    activeCategory === 'all'
      ? FEATURES
      : FEATURES.filter((f) => f.category === activeCategory);

  const categoryLabels: Record<Category, string> = {
    all: 'All Features',
    analytics: 'Analytics',
    segmentation: 'Segmentation',
    revenue: 'Revenue',
    prediction: 'Prediction'
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-16 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Powerful LTV analytics tools"
            description="Understand your subscriber lifetime value in detail and make data-driven decisions."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                )}
              >
                {categoryLabels[category]}
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Features grid with animation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => {
              const MagicComponent = FEATURE_MAGIC[feature.title];
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={feature.title}
                  layout
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, scale: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={cn(
                      'relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200 cursor-pointer',
                      isHovered && 'border-primary/50 -translate-y-1'
                    )}
                  >
                    <div className="p-6 relative z-10">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={
                              shouldReduceMotion
                                ? undefined
                                : {
                                    scale: isHovered ? 1.1 : 1,
                                    rotate: isHovered ? 5 : 0
                                  }
                            }
                            transition={{
                              type: 'spring',
                              duration: 0.2,
                              bounce: 0.2
                            }}
                            className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                          >
                            <feature.icon className="size-5" />
                          </motion.div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {categoryLabels[feature.category as Category]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                          {feature.link && feature.linkText && (
                            <Link
                              href={feature.link}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2"
                            >
                              {feature.linkText}
                            </Link>
                          )}
                        </div>

                        {/* Magic Animation */}
                        {MagicComponent && <MagicComponent />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.3}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 p-8">
              <div className="text-center">
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">
                  {FEATURED_TESTIMONIAL.title}
                </p>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.35}>
          <div className="mt-16">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <motion.div
                  key={index}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href={page.link}
                    className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 inline-flex items-center gap-2"
                  >
                    {page.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type LTVAnalyticsFeaturesVariant = 'grid' | 'bento' | 'tabs';

type Props = {
  variant?: LTVAnalyticsFeaturesVariant;
};

export function LTVAnalyticsFeatures({
  variant = 'bento'
}: Props): React.JSX.Element {
  switch (variant) {
    case 'grid':
      return <GridFeatures />;
    case 'tabs':
      return <TabsFeatures />;
    case 'bento':
    default:
      return <BentoFeatures />;
  }
}
