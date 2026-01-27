'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { NumberTicker } from '~/components/fragments/number-ticket';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

const DATA = [
  {
    value: 2,
    prefix: '$',
    suffix: 'B+',
    description: 'tracked revenue',
    decimalPlaces: 0,
    icon: 'revenue'
  },
  {
    value: 99.99,
    suffix: '%',
    description: 'historical uptime',
    decimalPlaces: 2,
    icon: 'uptime'
  },
  {
    value: 2.5,
    suffix: 'B+',
    description: 'users served',
    decimalPlaces: 1,
    icon: 'users'
  },
  {
    value: 60,
    suffix: 'B+',
    description: 'API calls / month',
    decimalPlaces: 0,
    icon: 'api'
  }
];

// Live indicator - green dot removed per Lera's feedback
function LiveIndicatorMagic() {
  return (
    <motion.div
      className="flex items-center gap-1.5 text-xs text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <span>Real-time data</span>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: (typeof DATA)[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <motion.div
        className={cn(
          'flex flex-col items-center justify-center p-6 text-center lg:p-8 cursor-default',
          'border-r border-border/50 last:border-r-0',
          (index === 2 || index === 3) &&
            'border-t border-border/50 lg:border-t-0'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
      >
        <motion.p
          className="whitespace-nowrap text-3xl font-bold md:text-4xl"
          animate={
            shouldReduceMotion ? undefined : { scale: isHovered ? 1.02 : 1 }
          }
          transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-primary">
            {stat.prefix}
            <NumberTicker
              value={stat.value}
              decimalPlaces={stat.decimalPlaces}
            />
            {stat.suffix}
          </span>
        </motion.p>
        <motion.p
          className="mt-2 whitespace-nowrap text-sm text-muted-foreground"
          animate={
            shouldReduceMotion ? undefined : { opacity: isHovered ? 1 : 0.7 }
          }
          transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
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
            Adapty processes subscription revenue with the industry&apos;s
            highest SLA
          </p>
        </BlurFade>

        {/* Stats Grid */}
        <div className="relative">
          <Spotlight
            className="from-primary/15 via-primary/5 to-transparent"
            size={350}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden relative">
            <BorderBeam
              size={150}
              duration={15}
              borderWidth={1}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
              className="opacity-40"
            />
            {DATA.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Live indicator */}
        <BlurFade
          delay={0.3}
          className="mt-4 flex justify-center"
        >
          <LiveIndicatorMagic />
        </BlurFade>
      </div>
    </GridSection>
  );
}
