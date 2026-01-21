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

// Orbital ring animation
function OrbitalRing({ delay, size, duration }: { delay: number; size: number; duration: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute rounded-full border border-border/20"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        x: '-50%',
        y: '-50%',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={shouldReduceMotion ? { opacity: 0.3 } : {
        opacity: [0.1, 0.3, 0.1],
        scale: [0.95, 1, 0.95],
        rotate: [0, 360],
      }}
      transition={shouldReduceMotion ? { duration: 0.3 } : {
        opacity: { duration: duration / 2, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: duration / 2, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration, repeat: Infinity, ease: 'linear', delay },
      }}
    />
  );
}

// Floating particle
function FloatingParticle({ index }: { index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const angle = (index * 72) * (Math.PI / 180);
  const radius = 120 + Math.random() * 40;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/40"
      style={{
        left: '50%',
        top: '50%',
      }}
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: [x, x + 20, x],
        y: [y, y - 20, y],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      }}
    />
  );
}

// Single stat card with orbital design
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
        className="relative group cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Card background with gradient border on hover */}
        <div className={cn(
          'relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm p-8 h-full',
          'transition-all duration-300',
          isHovered && 'border-primary/30 shadow-lg shadow-primary/5'
        )}>
          {/* Orbital rings background */}
          <div className="absolute inset-0 overflow-hidden">
            <OrbitalRing delay={0} size={200} duration={20} />
            <OrbitalRing delay={5} size={280} duration={30} />
            <OrbitalRing delay={10} size={360} duration={40} />
            {[...Array(5)].map((_, i) => (
              <FloatingParticle key={i} index={i} />
            ))}
          </div>

          {/* Gradient glow on hover */}
          <motion.div
            className={cn(
              'absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500',
              `bg-gradient-to-br ${stat.color}`
            )}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Large number */}
            <motion.div
              className="text-5xl md:text-6xl font-bold tracking-tight mb-2"
              animate={shouldReduceMotion ? undefined : {
                color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
              }}
              transition={{ duration: 0.2 }}
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={decimals}
              />
            </motion.div>

            {/* Label */}
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>

            {/* Description - reveals on hover */}
            <motion.p
              className="text-sm text-muted-foreground leading-relaxed"
              initial={{ opacity: 0.6, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0.6,
                height: isHovered ? 'auto' : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {stat.description}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className={cn('h-0.5 mt-4 rounded-full bg-gradient-to-r', stat.color)}
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '30%' }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            />
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
