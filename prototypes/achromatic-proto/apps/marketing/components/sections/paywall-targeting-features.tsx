'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  UsersIcon,
  TargetIcon,
  FlaskConicalIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MapPinIcon,
  CrownIcon,
  SparklesIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Segment Builder Magic - User avatars flowing into segments
function SegmentBuilderMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center justify-center gap-4">
      {/* Users group */}
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            animate={shouldReduceMotion ? {} : {
              x: [0, i % 2 === 0 ? 5 : -5, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="size-6 rounded-full bg-muted border-2 border-background flex items-center justify-center"
          >
            <UsersIcon className="size-3 text-muted-foreground" />
          </motion.div>
        ))}
      </div>

      {/* Arrow flow */}
      <div className="flex items-center gap-1">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Segments */}
      <div className="flex flex-col gap-1">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-5 px-3 rounded bg-primary/10 border border-primary/30 flex items-center gap-1.5"
        >
          <CrownIcon className="size-3 text-primary" />
          <span className="text-[9px] font-medium text-primary">Premium</span>
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="h-5 px-3 rounded bg-muted/50 border border-border flex items-center gap-1.5"
        >
          <SparklesIcon className="size-3 text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground">New Users</span>
        </motion.div>
      </div>
    </div>
  );
}

// Targeting Magic - Target with personalized content
function TargetingMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSegment, setActiveSegment] = React.useState(0);
  const segments = ['US Users', 'EU Users', 'Trial'];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center gap-4">
      {/* Segment selector */}
      <div className="flex flex-col gap-1">
        {segments.map((segment, i) => (
          <motion.div
            key={segment}
            animate={{
              scale: i === activeSegment ? 1.05 : 1,
              opacity: i === activeSegment ? 1 : 0.5,
              backgroundColor: i === activeSegment ? 'hsl(var(--primary) / 0.1)' : 'transparent'
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "h-4 px-2 rounded text-[8px] font-medium flex items-center border",
              i === activeSegment ? "border-primary/30 text-primary" : "border-transparent text-muted-foreground"
            )}
          >
            {segment}
          </motion.div>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronRightIcon className="size-4 text-muted-foreground" />
      </motion.div>

      {/* Paywall preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="w-14 h-16 rounded border-2 border-border bg-background flex flex-col items-center justify-center gap-1 p-1"
        >
          <div className="w-full h-1.5 bg-primary/30 rounded" />
          <motion.div
            animate={shouldReduceMotion ? {} : { width: ['60%', '80%', '60%'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1 bg-muted rounded"
          />
          <div className="w-4/5 h-2 bg-primary rounded mt-auto" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// AB Test Magic - Split traffic visualization
function ABTestMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center justify-center gap-3">
      {/* Segment badge */}
      <div className="h-6 px-2 rounded bg-primary/10 border border-primary/30 flex items-center gap-1">
        <MapPinIcon className="size-3 text-primary" />
        <span className="text-[9px] font-medium text-primary">US</span>
      </div>

      {/* Arrow */}
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronRightIcon className="size-4 text-muted-foreground" />
      </motion.div>

      {/* A/B split */}
      <div className="flex gap-2 items-end">
        <motion.div
          initial={{ height: '50%' }}
          animate={shouldReduceMotion ? {} : {
            height: ['50%', '60%', '50%'],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-8 h-10 rounded-t border border-b-0 bg-muted/50 flex items-center justify-center text-[10px] font-bold text-muted-foreground"
        >
          A
        </motion.div>
        <motion.div
          initial={{ height: '50%' }}
          animate={shouldReduceMotion ? {} : {
            height: ['50%', '80%', '50%'],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-8 h-14 rounded-t border border-b-0 bg-primary/15 border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary"
        >
          B
        </motion.div>
      </div>

      {/* Winner badge */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-green-500/10 text-green-600 text-[9px] px-2 py-0.5 rounded-full border border-green-500/30"
      >
        +24%
      </motion.div>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

const FEATURES = [
  {
    id: 'segments',
    icon: UsersIcon,
    title: 'Create custom segments',
    description: 'Use standard or custom attributes to create user segments of any size. Flexible setting of targeting conditions.',
    magic: SegmentBuilderMagic,
  },
  {
    id: 'targeting',
    icon: TargetIcon,
    title: 'Target segments with personalized offers',
    description: 'Personalize the paywall experience for different user groups. Change copy, creatives, pricing, offers, and more - all in the Adapty Dashboard.',
    magic: TargetingMagic,
  },
  {
    id: 'ab-test',
    icon: FlaskConicalIcon,
    title: 'Target with a Paywall or A/B test',
    description: 'Show your target user segment a paywall or run an A/B test of a paywall to find the most convertible offers.',
    magic: ABTestMagic,
  },
];

const STATS = [
  { value: '500M', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' },
];

const RELATED_PAGES = [
  { title: 'Remote Config', href: '/remote-config' },
  { title: 'Localize', href: '/paywall-localization' },
  { title: 'Paywall Builder', href: '/paywall-builder' },
  { title: 'A/B testing', href: '/paywall-ab-testing' },
];

// =============================================================================
// COMPONENTS
// =============================================================================

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);
  const MagicComponent = feature.magic;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={shouldReduceMotion ? undefined : {
        y: isHovered ? -6 : 0,
        scale: isHovered ? 1.01 : 1,
      }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-xl border bg-card transition-all duration-200 cursor-pointer group",
        isHovered && "border-primary/30 shadow-xl"
      )}>
        <Spotlight
          className="from-primary/20 via-primary/10 to-transparent"
          size={300}
        />
        {isHovered && (
          <BorderBeam
            size={120}
            duration={8}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        <div className="p-8 relative z-10">
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
            className={cn(
              "flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors",
              isHovered && "bg-primary/20"
            )}
          >
            <feature.icon className="size-7" />
          </motion.div>
          <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
          <p className="mt-3 text-muted-foreground">
            {feature.description}
          </p>

          {/* Magic Area */}
          {MagicComponent && <MagicComponent />}
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={shouldReduceMotion ? undefined : {
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
      className="text-center cursor-default"
    >
      <motion.p
        animate={shouldReduceMotion ? undefined : {
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="text-4xl font-bold text-primary"
      >
        {stat.value}
      </motion.p>
      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

function RelatedPageButton({ page, index }: { page: typeof RELATED_PAGES[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
    >
      <Link
        href={page.href}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background text-sm font-medium transition-all duration-150",
          isHovered && "border-primary/30 text-primary shadow-md"
        )}
      >
        {page.title}
        <motion.span
          animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ArrowRightIcon className="size-4" />
        </motion.span>
      </Link>
    </motion.div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function PaywallTargetingFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-16 md:py-24 relative z-10">
        {/* Features */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Target the right users with the right offers"
            description="Create segments, personalize experiences, and find what converts best for each audience."
          />
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.id} delay={0.1 + index * 0.05}>
              <FeatureCard feature={feature} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.3}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
              <Spotlight
                className="from-primary/20 via-primary/10 to-transparent"
                size={400}
              />
              <BorderBeam
                size={180}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-50"
              />
              <div className="relative z-10">
                <TargetIcon className="size-8 text-primary/50 mb-4" />
                <blockquote className="text-lg italic text-muted-foreground">
                  "Adapty turned out to be a great solution to the IDFA problem.
                  Thanks to its convenient user segmentation, we managed to target
                  paywalls and A/B tests for specific regions and user cohorts,
                  which resulted in steady MoM growth in separate markets."
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold">Magnus Olafsson</p>
                  <p className="text-sm text-muted-foreground">
                    Chief Technology Officer at Smitten
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Related pages */}
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <h2 className="text-center text-xl font-semibold">
              Learn more about Paywall management
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <RelatedPageButton key={index} page={page} index={index} />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="mt-20 text-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block"
            >
              <Link
                href="https://app.adapty.io/registration"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Start targeting paywalls
                <ArrowRightIcon className="size-5" />
              </Link>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
