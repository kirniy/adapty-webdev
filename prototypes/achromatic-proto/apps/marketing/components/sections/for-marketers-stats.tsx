'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { NumberTicker } from '~/components/fragments/number-ticket';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';

// EXACT stats from adapty.io/for-marketers (scraped 2026-01-21)
// "Enterprise-grade battle-tested solution"
// - 500M subscription events / month
// - 1.4B users
// - 2.8M subscribers / month
// - 9B API calls / month
const STATS = [
  {
    value: 500,
    suffix: 'M',
    description: 'subscription events / month',
    decimalPlaces: 0,
  },
  {
    value: 1.4,
    suffix: 'B',
    description: 'users',
    decimalPlaces: 1,
  },
  {
    value: 2.8,
    suffix: 'M',
    description: 'subscribers / month',
    decimalPlaces: 1,
  },
  {
    value: 9,
    suffix: 'B',
    description: 'API calls / month',
    decimalPlaces: 0,
  }
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <motion.div
        className={cn(
          'flex flex-col items-center justify-center p-6 text-center lg:p-8 cursor-default',
          'border-r border-border/50 last:border-r-0',
          (index === 2 || index === 3) && 'border-t border-border/50 lg:border-t-0'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
      >
        <motion.p
          className="whitespace-nowrap text-3xl font-bold md:text-4xl"
          animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-primary">
            <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
            {stat.suffix}
          </span>
        </motion.p>
        <motion.p
          className="mt-2 whitespace-nowrap text-sm text-muted-foreground"
          animate={shouldReduceMotion ? undefined : { opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          {stat.description}
        </motion.p>
      </motion.div>
    </BlurFade>
  );
}

export function ForMarketersStats(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={400} />
      <div className="container py-16 lg:py-20 relative z-10">
        {/* Heading */}
        <BlurFade className="mb-10 text-center">
          <SiteHeading
            title="Enterprise-grade battle-tested solution"
          />
        </BlurFade>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden max-w-4xl mx-auto">
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
