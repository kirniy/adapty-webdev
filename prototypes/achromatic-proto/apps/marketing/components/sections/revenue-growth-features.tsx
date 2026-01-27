'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BarChart3Icon,
  CheckCircle2Icon,
  DollarSignIcon,
  GlobeIcon,
  PaletteIcon,
  RocketIcon,
  SplitIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

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

// Conversion Rate Magic - Animated progress with percentage counter
function ConversionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [percentage, setPercentage] = React.useState(30);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPercentage(70);
      return;
    }
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 70) return 30;
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[9px] font-medium text-muted-foreground">
          Conversion Rate
        </span>
        <div className="flex items-center gap-1">
          <motion.span
            key={percentage}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg font-bold text-primary font-mono"
          >
            {percentage}%
          </motion.span>
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -2, 0]
                  }
            }
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <ArrowUpRightIcon className="size-4 text-emerald-500" />
          </motion.div>
        </div>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          animate={{ width: `${percentage}%` }}
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={shouldReduceMotion ? {} : { x: ['-100%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[8px] text-muted-foreground">Before: 30%</span>
        <span className="text-[8px] text-emerald-500 font-medium">
          +40% improvement
        </span>
      </div>
    </div>
  );
}

// Revenue Growth Magic - Rising bar chart with trend line
function RevenueChartMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [25, 35, 30, 45, 55, 65, 80, 95];
  const [activeBar, setActiveBar] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveBar((prev) => (prev + 1) % bars.length);
    }, 400);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, bars.length]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUpIcon className="size-3 text-emerald-500" />
        <span className="text-[8px] font-medium text-muted-foreground">
          MRR Growth
        </span>
        <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-medium ml-auto">
          +127%
        </span>
      </div>
      <div className="flex items-end gap-1 h-[48px]">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{
              height: `${h}%`,
              opacity: i <= activeBar ? 1 : 0.3
            }}
            transition={{
              height: { duration: 0.5, delay: i * 0.05 },
              opacity: { duration: 0.2 }
            }}
            className={cn(
              'flex-1 rounded-t-sm relative overflow-hidden transition-colors',
              i <= activeBar
                ? i >= bars.length - 3
                  ? 'bg-emerald-500'
                  : 'bg-primary'
                : 'bg-muted-foreground/20'
            )}
          >
            {i === activeBar && (
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// A/B Test Magic - Split comparison with winner animation
function ABTestMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [showWinner, setShowWinner] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setShowWinner(true);
      return;
    }
    const interval = setInterval(() => {
      setShowWinner((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center gap-3 h-full">
        <motion.div
          animate={{
            scale: showWinner ? 0.95 : 1,
            opacity: showWinner ? 0.5 : 1
          }}
          transition={{ duration: 0.3 }}
          className="flex-1 h-full rounded-lg bg-muted flex flex-col items-center justify-center relative"
        >
          <span className="text-lg font-bold text-muted-foreground">A</span>
          <span className="text-[8px] text-muted-foreground">2.4%</span>
        </motion.div>
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-medium text-muted-foreground">
            VS
          </span>
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.2, 1]
                  }
            }
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary mt-1"
          />
        </div>
        <motion.div
          animate={{
            scale: showWinner ? 1.05 : 1,
            borderColor: showWinner
              ? 'rgb(16 185 129 / 0.5)'
              : 'hsl(var(--border))'
          }}
          transition={{ duration: 0.3 }}
          className="flex-1 h-full rounded-lg bg-emerald-500/10 border-2 border-transparent flex flex-col items-center justify-center relative"
        >
          <span className="text-lg font-bold text-emerald-600">B</span>
          <span className="text-[8px] text-emerald-600 font-medium">3.2%</span>
          {showWinner && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <CheckCircle2Icon className="size-4 text-emerald-500" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// LTV Chart Magic - Animated line chart with projection
function LTVChartMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [pathProgress, setPathProgress] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPathProgress(1);
      return;
    }
    const interval = setInterval(() => {
      setPathProgress((prev) => (prev >= 1 ? 0 : prev + 0.02));
    }, 50);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[8px] font-medium text-muted-foreground">
          Predicted LTV
        </span>
        <motion.span
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[9px] font-mono text-primary"
        >
          $142.50
        </motion.span>
      </div>
      <svg
        className="w-full h-[48px]"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        {/* Historical line */}
        <motion.path
          d="M 0 35 Q 15 30 30 25 T 60 15"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: pathProgress > 0.6 ? 1 : pathProgress / 0.6 }}
          transition={{ duration: 0 }}
        />
        {/* Predicted line (dashed) */}
        <motion.path
          d="M 60 15 Q 75 10 85 6 T 100 2"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: pathProgress > 0.6 ? (pathProgress - 0.6) / 0.4 : 0,
            opacity: pathProgress > 0.6 ? 1 : 0
          }}
          transition={{ duration: 0 }}
        />
        {/* Current point */}
        <motion.circle
          cx="60"
          cy="15"
          r="3"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: pathProgress > 0.55 ? 1 : 0 }}
        />
      </svg>
      <div className="absolute bottom-2 right-2 flex items-center gap-1">
        <div className="w-3 h-0.5 bg-primary rounded" />
        <span className="text-[7px] text-muted-foreground">Actual</span>
        <div
          className="w-3 h-0.5 bg-primary rounded ml-2"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, hsl(var(--primary)) 0 2px, transparent 2px 4px)'
          }}
        />
        <span className="text-[7px] text-muted-foreground">Predicted</span>
      </div>
    </div>
  );
}

// Cohort Magic - User retention grid
function CohortMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeRow, setActiveRow] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % 3);
    }, 1200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const retention = [
    [100, 85, 72, 68, 65],
    [100, 82, 70, 64, 60],
    [100, 88, 75, 70, 67]
  ];

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[8px] font-medium text-muted-foreground">
          Cohort Retention
        </span>
        <span className="text-[8px] text-primary">Week 0-4</span>
      </div>
      <div className="grid grid-cols-5 gap-1 h-[48px]">
        {retention.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              animate={{
                scale: rowIndex === activeRow ? 1.05 : 1,
                opacity: value / 100
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                'rounded-sm flex items-center justify-center text-[7px] font-mono',
                rowIndex === activeRow
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/30 text-primary'
              )}
            >
              {value}%
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

// Localization Magic - Language switching
function LocalizationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const currencies = ['$9.99', '8,99', '1,099', '74.99'];
  const labels = ['USD', 'EUR', 'JPY', 'HKD'];
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currencies.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, currencies.length]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex flex-col items-center justify-center">
      <GlobeIcon className="size-5 text-primary mb-2" />
      <motion.div
        key={activeIndex}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="flex items-baseline gap-1"
      >
        <span className="text-2xl font-bold text-foreground">
          {currencies[activeIndex]}
        </span>
        <span className="text-[10px] text-muted-foreground">
          {labels[activeIndex]}
        </span>
      </motion.div>
      <span className="text-[8px] text-muted-foreground mt-1">
        Auto-localized pricing
      </span>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

const PAYWALL_FEATURES = [
  {
    id: 'builder',
    title: 'No-code paywall builder',
    description:
      'Create beautiful paywalls without writing a single line of code. Use our visual editor to design, customize, and deploy paywalls that convert.',
    icon: PaletteIcon,
    link: '/paywall-builder',
    magic: ConversionMagic
  },
  {
    id: 'testing',
    title: 'Paywall A/B testing',
    description:
      'Test different paywall designs, pricing, and messaging to find what works best for your audience. Make data-driven decisions to maximize revenue.',
    icon: SplitIcon,
    link: '/paywall-ab-testing',
    magic: ABTestMagic
  },
  {
    id: 'localization',
    title: 'Localization & targeting',
    description:
      'Show personalized paywalls based on user location, behavior, and attributes. Speak to your users in their language and currency.',
    icon: GlobeIcon,
    link: '/paywall-localization',
    magic: LocalizationMagic
  }
];

const ANALYTICS_FEATURES = [
  {
    id: 'revenue',
    title: 'Revenue metrics',
    description:
      'Track MRR, ARR, ARPU, and other key metrics in real-time. Understand your revenue streams and identify growth opportunities.',
    icon: BarChart3Icon,
    link: '/revenue-analytics',
    magic: RevenueChartMagic
  },
  {
    id: 'cohort',
    title: 'Cohort analysis',
    description:
      'See how your subscribers renew, churn, and bring revenue each subscription period. Understand user behavior over time.',
    icon: UsersIcon,
    link: '/ltv-analytics',
    magic: CohortMagic
  },
  {
    id: 'ltv',
    title: 'LTV prediction',
    description:
      'Use AI-powered predictions to forecast future revenue and make smarter marketing decisions. Know your ROI before you spend.',
    icon: TrendingUpIcon,
    link: '/predictive-analytics',
    magic: LTVChartMagic
  }
];

const STATS = [
  { value: '2x', label: 'Average revenue increase', icon: DollarSignIcon },
  { value: '40%', label: 'Higher conversion rates', icon: TargetIcon },
  { value: '3mo', label: 'Time to see results', icon: ZapIcon },
  { value: '0', label: 'Lines of code needed', icon: PaletteIcon }
];

const RELATED_PAGES = [
  { name: 'Analyze revenue performance', href: '/revenue-analytics' },
  { name: 'Integrate subscriptions', href: '/sdk' }
];

// =============================================================================
// COMPONENTS
// =============================================================================

function FeatureCard({
  feature,
  index
}: {
  feature: (typeof PAYWALL_FEATURES)[0];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);
  const MagicComponent = feature.magic;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
    >
      <Link
        href={feature.link}
        className="block h-full"
      >
        <div
          className={cn(
            'relative h-full overflow-hidden rounded-2xl border bg-card transition-all duration-300 cursor-pointer group',
            isHovered && 'border-primary/40  '
          )}
        >
          <Spotlight
            className="from-primary/25 via-primary/10 to-transparent"
            size={280}
          />
          {isHovered && (
            <BorderBeam
              size={140}
              duration={8}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
            />
          )}
          <div className="p-8 relative z-10">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: isHovered ? 1.15 : 1,
                      rotate: isHovered ? 8 : 0
                    }
              }
              transition={{ type: 'spring', duration: 0.35, bounce: 0.3 }}
              className={cn(
                'flex size-14 items-center justify-center rounded-2xl transition-colors duration-300',
                isHovered
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary'
              )}
            >
              <feature.icon className="size-7" />
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors duration-200">
              {feature.title}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {MagicComponent && <MagicComponent />}

            <motion.span
              animate={
                shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }
              }
              className="mt-5 text-sm font-medium text-primary inline-flex items-center gap-2"
            >
              Learn more
              <ArrowRightIcon className="size-4" />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.08 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
      className="text-center relative"
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 10 : 0
              }
        }
        transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
        className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4"
      >
        <stat.icon className="size-6" />
      </motion.div>
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: isHovered ? 1.1 : 1
              }
        }
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
      >
        {stat.value}
      </motion.div>
      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
}

function RelatedPageLink({ page }: { page: (typeof RELATED_PAGES)[0] }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.05 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.15 }}
    >
      <Link
        href={page.href}
        className={cn(
          'flex items-center gap-2 rounded-xl border bg-card px-5 py-3.5 text-sm font-medium transition-all duration-200',
          isHovered && 'border-primary/40 text-primary  '
        )}
      >
        {page.name}
        <motion.span
          animate={shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
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

export function RevenueGrowthFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2400} />
      <div className="container py-20 md:py-28 relative z-10">
        {/* Paywall Features */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Build paywalls that convert"
            description="Your paywall is your most important revenue tool. Make it work harder with powerful no-code features."
          />
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PAYWALL_FEATURES.map((feature, index) => (
            <BlurFade
              key={feature.id}
              delay={0.1 + index * 0.05}
            >
              <FeatureCard
                feature={feature}
                index={index}
              />
            </BlurFade>
          ))}
        </div>

        {/* Analytics Features */}
        <BlurFade delay={0.3}>
          <div className="mt-24">
            <SiteHeading
              title="Understand your revenue"
              description="Get the insights you need to make data-driven decisions and grow your subscription business."
            />
          </div>
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ANALYTICS_FEATURES.map((feature, index) => (
            <BlurFade
              key={feature.id}
              delay={0.35 + index * 0.05}
            >
              <FeatureCard
                feature={feature}
                index={index}
              />
            </BlurFade>
          ))}
        </div>

        {/* Stats */}
        <BlurFade delay={0.55}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-10 md:p-14">
              <Spotlight
                className="from-primary/25 via-primary/10 to-transparent"
                size={500}
              />
              <BorderBeam
                size={200}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-50"
              />
              <div className="relative z-10">
                <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
                  Results you can count on
                </h2>
                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  {STATS.map((stat, index) => (
                    <BlurFade
                      key={stat.label}
                      delay={0.6 + index * 0.05}
                    >
                      <StatCard
                        stat={stat}
                        index={index}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* FunnelFox CTA */}
        <BlurFade delay={0.75}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-background p-10 md:p-14">
              <Spotlight
                className="from-primary/25 via-primary/10 to-transparent"
                size={500}
              />
              <BorderBeam
                size={200}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-40"
              />
              <div className="grid gap-10 md:grid-cols-2 items-center relative z-10">
                <div>
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: [1, 1.05, 1]
                          }
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block text-primary text-sm font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10"
                  >
                    New
                  </motion.span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                    FunnelFox web funnels
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Extend your revenue beyond the app stores. Create web-based
                    subscription funnels to capture users before they even
                    download your app.
                  </p>
                  <div className="mt-8">
                    <motion.div
                      whileHover={
                        shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }
                      }
                      whileTap={
                        shouldReduceMotion ? undefined : { scale: 0.97 }
                      }
                      className="inline-block"
                    >
                      <Link
                        href="/schedule-demo"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors  "
                      >
                        Learn about FunnelFox
                        <ArrowRightIcon className="size-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, -12, 0]
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="relative h-56 w-full max-w-sm rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden"
                  >
                    <motion.div
                      animate={
                        shouldReduceMotion ? {} : { opacity: [0.15, 0.3, 0.15] }
                      }
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary/30"
                    >
                      WEB
                    </motion.div>
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: [0, -5, 0],
                              rotate: [0, 5, 0]
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="absolute bottom-4 right-4"
                    >
                      <RocketIcon className="size-10 text-primary/30" />
                    </motion.div>
                    {/* Floating elements */}
                    {!shouldReduceMotion && (
                      <>
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0
                          }}
                          className="absolute top-6 left-8 w-8 h-8 rounded-lg bg-primary/20"
                        />
                        <motion.div
                          animate={{
                            y: [0, -15, 0],
                            x: [0, -8, 0],
                            opacity: [0.3, 0.5, 0.3]
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                          className="absolute top-12 right-12 w-6 h-6 rounded-full bg-primary/20"
                        />
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: 1
                          }}
                          className="absolute bottom-12 left-12 w-4 h-4 rounded-sm bg-primary/20"
                        />
                      </>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Learn More */}
        <BlurFade delay={0.9}>
          <div className="mt-20">
            <h2 className="text-xl font-semibold text-center">Learn more</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <BlurFade
                  key={page.href}
                  delay={0.95 + index * 0.05}
                >
                  <RelatedPageLink page={page} />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
