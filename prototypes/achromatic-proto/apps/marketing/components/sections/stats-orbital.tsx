'use client';

import * as React from 'react';
import { motion, useReducedMotion, useInView, useMotionValue, useSpring, animate } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

const STATS = [
  {
    value: 2,
    prefix: '$',
    suffix: 'B+',
    label: 'Revenue Tracked',
    description: 'Total subscription revenue processed through our platform',
    color: 'from-purple-500 to-violet-600',
  },
  {
    value: 99.99,
    suffix: '%',
    label: 'Uptime SLA',
    description: 'Industry-leading reliability for mission-critical operations',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    value: 15,
    suffix: 'K+',
    label: 'Apps Powered',
    description: 'Mobile applications trusting Adapty for their subscriptions',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    value: 60,
    suffix: 'B+',
    label: 'API Calls/Month',
    description: 'Massive scale handling billions of requests seamlessly',
    color: 'from-orange-500 to-amber-600',
  },
];

// Animated counter that counts up when in view
function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (isInView) {
      if (shouldReduceMotion) {
        motionValue.set(value);
      } else {
        animate(motionValue, value, { duration: 2, ease: [0.32, 0.72, 0, 1] });
      }
    }
  }, [isInView, value, motionValue, shouldReduceMotion]);

  React.useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

// Single stat card - clean design with animated counter
function StatCard({
  stat,
  index,
}: {
  stat: typeof STATS[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const decimals = stat.value % 1 !== 0 ? 2 : 0;

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.1 + index * 0.1}>
      <motion.div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card */}
        <div className={cn(
          'relative rounded-2xl border bg-card p-8 h-full',
          'transition-all duration-200',
          isHovered && 'border-border/80 shadow-lg'
        )}>
          {/* Content */}
          <div className="relative z-10">
            {/* Large number */}
            <div className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={decimals}
              />
            </div>

            {/* Label */}
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>

            {/* Description - always visible */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className={cn(
                'bg-gradient-to-r bg-clip-text',
                stat.color,
                'text-transparent'
              )}>
                {stat.description.split(' ').slice(0, 2).join(' ')}
              </span>
              {' '}
              {stat.description.split(' ').slice(2).join(' ')}
            </p>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function StatsOrbital(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section header */}
        <BlurFade className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Platform Scale</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trusted by the world&apos;s best apps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powering subscription revenue for thousands of applications worldwide
          </p>
        </BlurFade>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
