'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  DownloadIcon,
  GlobeIcon,
  TrendingUpIcon,
  UsersIcon,
  BarChart3Icon,
  RefreshCwIcon,
  ReceiptIcon,
  TestTubesIcon,
  ArrowRightIcon,
  CheckIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// EXACT content from adapty.io/state-of-in-app-subscriptions (scraped 2026-01-21)

// Key stats from the report
const KEY_STATS = [
  { value: '$1.9B', label: 'subscription revenue' },
  { value: '$1.7B', label: 'users' },
  { value: '73K', label: 'real-world paywalls' }
];

// Report sections/chapters from adapty.io
const REPORT_SECTIONS = [
  {
    icon: GlobeIcon,
    title: 'Adapty pricing index',
    description: 'See where revenue comes from by region and plan to prioritize what converts best.'
  },
  {
    icon: BarChart3Icon,
    title: 'Subscription market breakdown',
    description: 'Compare revenue share across regions and plan types to prioritize what converts where.'
  },
  {
    icon: TrendingUpIcon,
    title: 'Conversion benchmarks',
    description: "Spot funnel drop-offs by plan, price, and trial - and fix what's slowing users down."
  },
  {
    icon: UsersIcon,
    title: 'LTV & profitability',
    description: 'Find the most profitable plans by region, price, and trial to monetize smarter.'
  },
  {
    icon: RefreshCwIcon,
    title: 'Retention and renewals',
    description: 'Explore how trials and plan types impact retention - and focus on what drives renewals.'
  },
  {
    icon: ReceiptIcon,
    title: 'Refund trends',
    description: 'Break down refund rates by price and plan to reduce churn before it spikes.'
  },
  {
    icon: TestTubesIcon,
    title: 'A/B experiments and paywalls',
    description: 'Discover which paywalls convert best, what drives uplift, and how testing impacts revenue at scale.'
  }
];

// Key insights from the A/B testing section
const KEY_INSIGHTS = [
  'Three-plan paywalls (weekly, monthly, yearly) deliver the highest LTV.',
  'Simple weekly plans with short trials convert best.',
  'Annual + weekly combos create a clear upgrade path.'
];

// Revenue share by region
const REVENUE_BY_REGION = [
  { region: 'US', share: '48.9%', percentage: 49 },
  { region: 'Europe', share: '24.8%', percentage: 25 },
  { region: 'APAC', share: '10.3%', percentage: 10 },
  { region: 'MEA', share: '6.6%', percentage: 7 },
  { region: 'North America (excl. US)', share: '5.0%', percentage: 5 },
  { region: 'LATAM', share: '4.5%', percentage: 4 }
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Counter animation for stats
function CounterMagic({ value, suffix = '' }: { value: string; suffix?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9]*/)?.[0] || '';
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(numericValue);
      return;
    }

    let frame: number;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(numericValue * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [numericValue, shouldReduceMotion]);

  const displayValue = numericValue >= 1000
    ? `${(count / 1000).toFixed(1)}B`
    : numericValue >= 1
    ? count.toFixed(1)
    : count.toFixed(0);

  return (
    <span>
      {prefix}{displayValue.replace(/\.0$/, '')}{suffix}
    </span>
  );
}

// Revenue bar animation
function RevenueBarMagic({ percentage, delay }: { percentage: number; delay: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className="h-2 bg-primary/60 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    );
  }

  return (
    <motion.div
      className="h-2 bg-primary/60 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${percentage}%` }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.165, 0.84, 0.44, 1],
      }}
    />
  );
}

// Growth chart animation
function GrowthMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [30, 45, 55, 70, 65, 80, 85, 90];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-end gap-1 h-10 justify-center">
        {bars.map((h, i) => (
          <div key={i} className="w-2 bg-primary/60 rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-1 h-10 justify-center">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-2 bg-primary/60 rounded-sm"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        />
      ))}
    </div>
  );
}

export function StateOfSubscriptionsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);
  const [hoveredSection, setHoveredSection] = React.useState<number | null>(null);
  const [hoveredRegion, setHoveredRegion] = React.useState<number | null>(null);
  const [hoveredInsight, setHoveredInsight] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2500} />
      <div className="container py-20 relative z-10">
        {/* Key stats */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="15,000+ apps' data, distilled into growth moves you can copy today"
          />
        </BlurFade>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEY_STATS.map((stat, index) => {
              const isHovered = hoveredStat === index;
              return (
                <BlurFade key={index} delay={0.1 + index * 0.05}>
                  <motion.div
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    animate={shouldReduceMotion ? undefined : {
                      y: isHovered ? -6 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  >
                    <Card className={cn(
                      "bg-background/50 backdrop-blur-sm border-border/50 text-center relative overflow-hidden transition-all duration-200",
                      isHovered && "border-primary/50 shadow-lg"
                    )}>
                      <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={200} />
                      <CardContent className="p-6 relative">
                        <motion.p
                          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.05 : 1,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                        >
                          <CounterMagic value={stat.value} />
                        </motion.p>
                        <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>

        {/* Report sections */}
        <div className="mt-20">
          <BlurFade delay={0.15}>
            <SiteHeading
              title="Designed to make every decision easier and faster"
            />
          </BlurFade>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REPORT_SECTIONS.map((section, index) => {
              const Icon = section.icon;
              const isHovered = hoveredSection === index;
              return (
                <BlurFade key={index} delay={0.2 + index * 0.03}>
                  <motion.div
                    onMouseEnter={() => setHoveredSection(index)}
                    onMouseLeave={() => setHoveredSection(null)}
                    animate={shouldReduceMotion ? undefined : {
                      y: isHovered ? -6 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  >
                    <Card className={cn(
                      "h-full bg-background/50 backdrop-blur-sm border-border/50 relative overflow-hidden transition-all duration-200",
                      isHovered && "border-primary/50 shadow-lg"
                    )}>
                      <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={220} />
                      <CardContent className="p-6 relative">
                        <motion.div
                          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4"
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.15 : 1,
                            rotate: isHovered ? 8 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                        >
                          <Icon className="size-6" />
                        </motion.div>
                        <h3 className={cn(
                          "font-semibold text-lg mb-2 transition-colors duration-150",
                          isHovered && "text-primary"
                        )}>
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>

        {/* Revenue by region snapshot */}
        <div className="mt-20">
          <BlurFade delay={0.25}>
            <SiteHeading
              title="Subscription revenue share by region"
              description="Where does subscription revenue come from globally?"
            />
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="bg-card/50 relative overflow-hidden">
                <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={300} />
                <CardContent className="p-6 relative">
                  <div className="space-y-4">
                    {REVENUE_BY_REGION.map((item, index) => {
                      const isHovered = hoveredRegion === index;
                      return (
                        <motion.div
                          key={index}
                          className="cursor-default"
                          onMouseEnter={() => setHoveredRegion(index)}
                          onMouseLeave={() => setHoveredRegion(null)}
                          animate={shouldReduceMotion ? undefined : {
                            x: isHovered ? 4 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={cn(
                              "font-medium transition-colors duration-150",
                              isHovered && "text-primary"
                            )}>
                              {item.region}
                            </span>
                            <motion.span
                              className="text-primary font-bold"
                              animate={shouldReduceMotion ? undefined : {
                                scale: isHovered ? 1.1 : 1,
                              }}
                              transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                            >
                              {item.share}
                            </motion.span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <RevenueBarMagic percentage={item.percentage} delay={index * 0.1} />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        </div>

        {/* Key insights */}
        <div className="mt-20">
          <BlurFade delay={0.35}>
            <SiteHeading
              title="Key insights from A/B testing"
            />
            <div className="flex justify-center mt-2">
              <GrowthMagic />
            </div>
          </BlurFade>

          <div className="mt-8 max-w-2xl mx-auto">
            <ul className="space-y-4">
              {KEY_INSIGHTS.map((insight, index) => {
                const isHovered = hoveredInsight === index;
                return (
                  <BlurFade key={index} delay={0.4 + index * 0.05}>
                    <motion.li
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30 cursor-default relative overflow-hidden"
                      onMouseEnter={() => setHoveredInsight(index)}
                      onMouseLeave={() => setHoveredInsight(null)}
                      animate={shouldReduceMotion ? undefined : {
                        y: isHovered ? -4 : 0,
                        scale: isHovered ? 1.02 : 1,
                      }}
                      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                    >
                      <motion.span
                        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold"
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? 1.2 : 1,
                          rotate: isHovered ? 10 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                      >
                        <CheckIcon className="size-3" />
                      </motion.span>
                      <span className={cn(
                        "text-foreground transition-colors duration-150",
                        isHovered && "text-primary"
                      )}>
                        {insight}
                      </span>
                    </motion.li>
                  </BlurFade>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <BlurFade delay={0.45}>
          <div className="mt-20 text-center">
            <Card className="inline-block max-w-2xl relative overflow-hidden">
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
              <BorderBeam size={250} duration={12} />
              <CardContent className="p-8 relative">
                <h3 className="text-xl font-semibold mb-2">Your next growth decision starts with better data</h3>
                <p className="text-muted-foreground mb-6">
                  For teams making pricing, paywall, and monetization decisions today.
                </p>
                <motion.div
                  className="inline-block"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="https://uploads.adapty.io/state_of_in_app_subscriptions_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    <DownloadIcon className="mr-2 size-4" />
                    Download the report
                    <ArrowRightIcon className="ml-2 size-4" />
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
