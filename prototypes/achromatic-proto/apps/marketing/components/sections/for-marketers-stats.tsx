'use client';

import * as React from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { TrendingUpIcon, ActivityIcon, InfoIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';
import { Card, CardContent } from '@workspace/ui/components/card';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { NumberTicker } from '~/components/fragments/number-ticket';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { SlideIn } from '~/components/fragments/slide-in';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// Magic animation: Enterprise scale badge
function EnterpriseScaleMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        className="size-2 rounded-full bg-green-500"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>Live infrastructure</span>
    </motion.div>
  );
}

// EXACT stats from adapty.io/for-marketers (scraped 2026-01-21)
// "Enterprise-grade battle-tested solution"
const STATS = [
  {
    value: 500,
    suffix: 'M',
    description: 'subscription events / month',
    decimalPlaces: 0,
    detail: 'Processing half a billion subscription events monthly with 99.99% uptime',
    color: 'text-blue-500',
  },
  {
    value: 1.4,
    suffix: 'B',
    description: 'users',
    decimalPlaces: 1,
    detail: 'Trusted by apps serving over 1.4 billion users worldwide',
    color: 'text-green-500',
  },
  {
    value: 2.8,
    suffix: 'M',
    description: 'subscribers / month',
    decimalPlaces: 1,
    detail: 'Managing millions of active subscriptions across all platforms',
    color: 'text-purple-500',
  },
  {
    value: 9,
    suffix: 'B',
    description: 'API calls / month',
    decimalPlaces: 0,
    detail: 'Handling 9 billion API requests with sub-100ms response times',
    color: 'text-orange-500',
  }
];

export type ForMarketersStatsVariant = 'cards' | 'inline' | 'graph';

export const FOR_MARKETERS_STATS_VARIANTS = ['cards', 'inline', 'graph'] as const;

type Props = {
  variant?: ForMarketersStatsVariant;
};

// Variant 1: Cards - Grid of stat cards (original)
function CardsStats(): React.JSX.Element {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={400} />
      <div className="container py-16 lg:py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={300} />
        {/* Heading */}
        <SlideIn className="mb-10 text-center" direction="up">
          <SiteHeading
            title="Enterprise-grade battle-tested solution"
          />
          <div className="mt-4 flex justify-center">
            <EnterpriseScaleMagic />
          </div>
        </SlideIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden max-w-4xl mx-auto">
          {STATS.map((stat, index) => (
            <SlideIn key={index} delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05} direction="up">
              <motion.div
                className={cn(
                  'flex flex-col items-center justify-center p-6 text-center lg:p-8 cursor-default',
                  'border-r border-border/50 last:border-r-0',
                  (index === 2 || index === 3) && 'border-t border-border/50 lg:border-t-0'
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
              >
                <motion.p
                  className="whitespace-nowrap text-3xl font-bold md:text-4xl"
                  animate={shouldReduceMotion ? undefined : { scale: hoveredIndex === index ? 1.02 : 1 }}
                  transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <span className="text-primary">
                    <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
                    {stat.suffix}
                  </span>
                </motion.p>
                <motion.p
                  className="mt-2 whitespace-nowrap text-sm text-muted-foreground"
                  animate={shouldReduceMotion ? undefined : { opacity: hoveredIndex === index ? 1 : 0.7 }}
                  transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// Variant 2: Inline - Horizontal row with large numbers
function InlineStats(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [showDetail, setShowDetail] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={350} />
      <div className="container py-16 lg:py-20 relative z-10">
        {/* Heading */}
        <BlurFade className="mb-12 text-center">
          <SiteHeading
            title="Enterprise-grade battle-tested solution"
          />
        </BlurFade>

        {/* Inline stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {STATS.map((stat, index) => (
            <BlurFade key={index} delay={shouldReduceMotion ? 0 : 0.05 + index * 0.08}>
              <motion.div
                className="relative text-center cursor-pointer"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setShowDetail(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setShowDetail(null);
                }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
              >
                <motion.div
                  className={cn("text-5xl md:text-6xl lg:text-7xl font-bold", stat.color)}
                  animate={shouldReduceMotion ? undefined : {
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                >
                  <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
                  {stat.suffix}
                </motion.div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.description}
                </p>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {showDetail === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-3 rounded-lg bg-popover border shadow-lg text-xs text-left z-10"
                    >
                      <div className="flex items-start gap-2">
                        <InfoIcon className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{stat.detail}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// Animated bar component for graph variant
function AnimatedBar({
  value,
  maxValue,
  color,
  delay,
  isHovered
}: {
  value: number;
  maxValue: number;
  color: string;
  delay: number;
  isHovered: boolean;
}): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const percentage = (value / maxValue) * 100;

  return (
    <div className="h-32 flex items-end">
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: `${percentage}%`,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          height: { delay, duration: shouldReduceMotion ? 0 : 0.8, ease: [0.32, 0.72, 0, 1] },
          scale: { duration: 0.2 }
        }}
        className={cn(
          "w-full rounded-t-lg transition-colors duration-200",
          color.replace('text-', 'bg-'),
          isHovered ? "opacity-100" : "opacity-80"
        )}
      />
    </div>
  );
}

// Variant 3: Graph - Visual bars with animated growth
function GraphStats(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Normalize values for visual display
  const maxValue = Math.max(...STATS.map(s => s.value));

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={500} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Heading */}
        <BlurFade className="mb-12 text-center">
          <SiteHeading
            badge={<><ActivityIcon className="size-4 mr-1" /> Live Metrics</>}
            title="Enterprise-grade battle-tested solution"
            description="Real-time infrastructure handling massive scale"
          />
        </BlurFade>

        {/* Graph visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <BlurFade key={index} delay={shouldReduceMotion ? 0 : 0.1 + index * 0.05}>
                <motion.div
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card className={cn(
                    "relative bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 overflow-hidden",
                    hoveredIndex === index && "border-primary/30 shadow-lg"
                  )}>
                    {hoveredIndex === index && (
                      <BorderBeam
                        size={120}
                        duration={8}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <CardContent className="relative z-10 p-4">
                      {/* Bar */}
                      <AnimatedBar
                        value={stat.value}
                        maxValue={maxValue}
                        color={stat.color}
                        delay={0.2 + index * 0.1}
                        isHovered={hoveredIndex === index}
                      />

                      {/* Value */}
                      <motion.div
                        className={cn("text-2xl md:text-3xl font-bold mt-4 text-center", stat.color)}
                        animate={shouldReduceMotion ? undefined : {
                          scale: hoveredIndex === index ? 1.05 : 1,
                        }}
                      >
                        <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
                        {stat.suffix}
                      </motion.div>

                      {/* Label */}
                      <p className="mt-1 text-xs text-muted-foreground text-center">
                        {stat.description}
                      </p>

                      {/* Trend indicator */}
                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t overflow-hidden"
                          >
                            <div className="flex items-center justify-center gap-1 text-xs text-green-500">
                              <TrendingUpIcon className="size-3" />
                              <span>Growing</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            ))}
          </div>

          {/* Legend */}
          <BlurFade delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-blue-500" />
                Events
              </span>
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-green-500" />
                Users
              </span>
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-purple-500" />
                Subscribers
              </span>
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-orange-500" />
                API Calls
              </span>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

export function ForMarketersStats({ variant = 'cards' }: Props): React.JSX.Element {
  switch (variant) {
    case 'inline':
      return <InlineStats />;
    case 'graph':
      return <GraphStats />;
    case 'cards':
    default:
      return <CardsStats />;
  }
}
