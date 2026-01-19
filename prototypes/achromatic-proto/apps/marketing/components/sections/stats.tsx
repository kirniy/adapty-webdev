'use client';

import * as React from 'react';
import { motion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { NumberTicker } from '~/components/fragments/number-ticket';
import { SectionBackground } from '~/components/fragments/section-background';

const DATA = [
  {
    value: 2,
    prefix: '$',
    suffix: 'B+',
    description: 'tracked revenue',
    decimalPlaces: 0,
  },
  {
    value: 99.99,
    suffix: '%',
    description: 'historical uptime',
    decimalPlaces: 2,
  },
  {
    value: 2.5,
    suffix: 'B+',
    description: 'users served',
    decimalPlaces: 1,
  },
  {
    value: 60,
    suffix: 'B+',
    description: 'API calls / month',
    decimalPlaces: 0,
  }
];

function StatCard({ stat, index }: { stat: typeof DATA[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BlurFade delay={0.1 + index * 0.1}>
      <motion.div
        className={cn(
          'flex flex-col items-center justify-center p-6 text-center lg:p-8 cursor-default',
          'border-r border-border/50 last:border-r-0',
          (index === 2 || index === 3) && 'border-t border-border/50 lg:border-t-0'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.p
          className="whitespace-nowrap text-3xl font-bold md:text-4xl"
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <span className="text-primary">
            {stat.prefix}
            <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
            {stat.suffix}
          </span>
        </motion.p>
        <motion.p
          className="mt-2 whitespace-nowrap text-sm text-muted-foreground"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.15 }}
        >
          {stat.description}
        </motion.p>
      </motion.div>
    </BlurFade>
  );
}

export function Stats(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={350} />
      <div className="container py-12 lg:py-16 relative z-10">
        {/* Tagline */}
        <BlurFade className="mb-8 text-center">
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Adapty processes subscription revenue with the industry&apos;s highest SLA
          </p>
        </BlurFade>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden">
          {DATA.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
