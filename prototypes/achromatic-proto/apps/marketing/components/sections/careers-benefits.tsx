'use client';

import * as React from 'react';
import { BriefcaseBusinessIcon, Users2Icon, ZapIcon, HeartIcon, GlobeIcon, RocketIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { APP_NAME } from '@workspace/common/app';
import { cn } from '@workspace/ui/lib/utils';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

const DATA = [
  {
    icon: ZapIcon,
    title: 'Innovation at its core',
    description:
      'We are committed to pushing boundaries and fostering a culture of creativity.',
  },
  {
    icon: Users2Icon,
    title: 'Inclusive environment',
    description:
      'Our diverse and collaborative team welcomes individuals from all backgrounds.',
  },
  {
    icon: BriefcaseBusinessIcon,
    title: 'Opportunities for growth',
    description:
      'We support continuous learning and career development through mentorship and resources.',
  },
  {
    icon: GlobeIcon,
    title: 'Remote-first culture',
    description:
      'Work from anywhere in the world with flexible hours that fit your lifestyle.',
  },
  {
    icon: HeartIcon,
    title: 'Competitive benefits',
    description:
      'Comprehensive health coverage, equity options, and generous time off policies.',
  },
  {
    icon: RocketIcon,
    title: 'High-impact work',
    description:
      'Build products used by thousands of apps and millions of users worldwide.',
  },
];

// Magic animation: Team growth indicator
function TeamGrowthMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        className="size-2 rounded-full bg-emerald-500"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>Hiring across all teams</span>
    </motion.div>
  );
}

// Culture stat animation
function StatMagic({ value, label }: { value: string; label: string }) {
  const shouldReduceMotion = useReducedMotion();
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const [count, setCount] = React.useState(0);
  const suffix = value.replace(/[0-9]/g, '');

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(numericValue);
      return;
    }

    const duration = 1200;
    const steps = 40;
    const increment = numericValue / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, numericValue]);

  return (
    <div className="text-center">
      <motion.div
        initial={shouldReduceMotion ? undefined : { scale: 0.9, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-primary"
      >
        {count}{suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function CareersBenefits(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="space-y-16 pt-20 relative z-10">
        <div className="container">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="Careers"
              title="Join our team"
              description={`Work remotely from wherever you want and help us build the future of ${APP_NAME}`}
            />
            <div className="mt-4 flex justify-center">
              <TeamGrowthMagic />
            </div>
          </BlurFade>

          {/* Company stats */}
          <BlurFade delay={0.1}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <StatMagic value="50+" label="Team members" />
              <StatMagic value="15+" label="Countries" />
              <StatMagic value="10K+" label="Apps powered" />
              <StatMagic value="100%" label="Remote" />
            </div>
          </BlurFade>
        </div>

        {/* Benefits grid */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.map((benefit, index) => {
              const isHovered = hoveredIndex === index;
              const Icon = benefit.icon;

              return (
                <BlurFade key={index} delay={0.15 + index * 0.03}>
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={shouldReduceMotion ? undefined : {
                      y: isHovered ? -6 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                    className={cn(
                      'group relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 transition-all duration-200',
                      isHovered && 'border-primary/30 shadow-lg shadow-primary/5'
                    )}
                  >
                    {isHovered && (
                      <BorderBeam
                        size={150}
                        duration={8}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />

                    <div className="relative">
                      <motion.div
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 8 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                        className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      >
                        <Icon className="size-6" />
                      </motion.div>
                      <h3 className="mb-3 text-lg font-semibold group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
