'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, TrophyIcon, TrendingUpIcon, SparklesIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// Success stories magic animation
function SuccessStoriesMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStory, setActiveStory] = React.useState(0);
  const stories = [
    { company: 'SocialKit', metric: '2x', label: 'Revenue growth' },
    { company: 'HubX', metric: '+35%', label: 'Conversion rate' },
    { company: 'AppNation', metric: '300+', label: 'Paywalls tested' },
    { company: 'Bickster', metric: '4 years', label: 'With Adapty' },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, stories.length]);

  if (shouldReduceMotion) {
    return (
      <div className="text-center space-y-2">
        <div className="text-3xl font-bold text-primary">2x</div>
        <div className="text-sm text-muted-foreground">Revenue growth</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Trophy icon with pulse */}
      <div className="flex justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex size-14 items-center justify-center rounded-full bg-amber-500/20"
        >
          <TrophyIcon className="size-7 text-amber-500" />
        </motion.div>
      </div>

      {/* Current success story */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg border bg-background/50 p-4 text-center"
        >
          <div className="text-xs text-muted-foreground mb-1">{stories[activeStory]?.company}</div>
          <div className="flex items-center justify-center gap-2">
            <TrendingUpIcon className="size-5 text-emerald-500" />
            <span className="text-2xl font-bold text-primary">{stories[activeStory]?.metric}</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">{stories[activeStory]?.label}</div>
        </motion.div>
      </AnimatePresence>

      {/* Story dots */}
      <div className="flex justify-center gap-2">
        {stories.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: i === activeStory ? 1.2 : 1,
              opacity: i === activeStory ? 1 : 0.4,
            }}
            className="size-1.5 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  );
}

// Stories count badge
function StoriesCountBadge() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const target = 50;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    const duration = 1500;
    const steps = 25;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
    >
      <SparklesIcon className="size-4 text-emerald-500" />
      <span className="text-sm font-medium">
        <span className="text-emerald-600 font-bold">{count}+</span> success stories
      </span>
    </motion.div>
  );
}

export function CaseStudiesHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <TrophyIcon className="size-4" />
              Case Studies
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <SiteHeading
              title="Read our case studies to find out why app developers choose Adapty"
              description="Check out the success stories of our clients who managed to achieve high results with the help of Adapty. Learn how easily you can grow too!"
            />
          </BlurFade>

          {/* Success stories visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Success stories
                </div>
                <SuccessStoriesMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <StoriesCountBadge />
          </BlurFade>

          <BlurFade delay={0.25}>
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                y: shouldReduceMotion ? 0 : isHovered ? -2 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block relative"
            >
              <Link
                href="/schedule-demo"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                )}
              >
                Schedule A Demo
                <motion.span
                  animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ArrowRightIcon className="ml-2 size-4" />
                </motion.span>
              </Link>
              <BorderBeam
                size={120}
                duration={8}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-60"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
