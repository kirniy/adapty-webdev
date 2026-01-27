'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  TrendingUpIcon,
  DollarSignIcon,
  FilterIcon,
  TargetIcon,
  UsersIcon,
  CalendarCheckIcon,
  ArrowRightIcon,
  BrainCircuitIcon,
  LineChartIcon,
  BarChart3Icon
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

// LTV Chart Magic - Rising prediction line
function LTVChartMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-end gap-1">
      {/* Historical data bars */}
      {[40, 55, 65, 70].map((h, i) => (
        <motion.div
          key={i}
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          style={{ height: `${h}%` }}
          className="w-4 rounded-t bg-muted border border-border/50"
        />
      ))}

      {/* Prediction divider */}
      <div className="w-px h-full bg-primary/30 mx-1" />

      {/* Predicted values with glow */}
      {[75, 85, 92, 100].map((h, i) => (
        <motion.div
          key={`pred-${i}`}
          initial={{ height: 0, opacity: 0 }}
          animate={shouldReduceMotion ? { height: `${h}%`, opacity: 1 } : {
            height: [`${h - 10}%`, `${h}%`, `${h - 5}%`],
            opacity: [0.6, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          className="w-4 rounded-t bg-primary/30 border border-primary/50 relative"
        >
          {i === 3 && (
            <motion.div
              animate={shouldReduceMotion ? {} : { opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-primary font-bold whitespace-nowrap"
            >
              +28%
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Revenue Prediction Magic - Dollar growth animation
function RevenuePredictionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const displayValue = Math.round(value * 1.28);

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center justify-center gap-4">
      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex size-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30"
      >
        <DollarSignIcon className="size-6 text-primary" />
      </motion.div>

      <div className="flex flex-col">
        <span className="text-[10px] text-muted-foreground">Predicted Revenue</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">${displayValue}k</span>
          <motion.span
            animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-xs text-green-500 font-medium"
          >
            +28%
          </motion.span>
        </div>
      </div>
    </div>
  );
}

// Cohort Prediction Magic - User cohort visualization
function CohortPredictionMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center gap-3">
      {/* Cohort grid */}
      <div className="grid grid-cols-4 gap-0.5">
        {[...Array(16)].map((_, i) => {
          const row = Math.floor(i / 4);
          const opacity = 1 - (row * 0.2) + (Math.random() * 0.1);
          return (
            <motion.div
              key={i}
              animate={shouldReduceMotion ? {} : {
                opacity: [opacity * 0.5, opacity, opacity * 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
              className={cn(
                "size-3 rounded-sm",
                row === 0 ? "bg-primary" :
                row === 1 ? "bg-primary/70" :
                row === 2 ? "bg-primary/40" :
                "bg-primary/20"
              )}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1 text-[9px]">
        <div className="flex items-center gap-1">
          <div className="size-2 rounded-sm bg-primary" />
          <span className="text-muted-foreground">M1: 100%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-2 rounded-sm bg-primary/70" />
          <span className="text-muted-foreground">M3: 78%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-2 rounded-sm bg-primary/40" />
          <span className="text-muted-foreground">M6: 52%</span>
        </div>
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-1"
        >
          <div className="size-2 rounded-sm bg-primary/20 border border-primary/30" />
          <span className="text-primary font-medium">M12: 41%*</span>
        </motion.div>
      </div>
    </div>
  );
}

// Filter Magic - Filter animation
function FilterMagic() {
  const shouldReduceMotion = useReducedMotion();
  const filters = ['Country', 'Product', 'Plan'];
  const [activeFilter, setActiveFilter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFilter((prev) => (prev + 1) % filters.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center gap-3">
      {/* Filter pills */}
      <div className="flex flex-col gap-1">
        {filters.map((filter, i) => (
          <motion.div
            key={filter}
            animate={{
              scale: i === activeFilter ? 1.05 : 1,
              backgroundColor: i === activeFilter ? 'hsl(var(--primary) / 0.1)' : 'transparent',
              borderColor: i === activeFilter ? 'hsl(var(--primary) / 0.3)' : 'transparent'
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "h-5 px-2 rounded text-[9px] font-medium flex items-center border",
              i === activeFilter ? "text-primary" : "text-muted-foreground"
            )}
          >
            {filter}
          </motion.div>
        ))}
      </div>

      {/* Result bars */}
      <div className="flex-1 flex flex-col gap-1">
        {[80, 60, 45].map((w, i) => (
          <motion.div
            key={i}
            animate={shouldReduceMotion ? {} : {
              width: i === activeFilter ? [`${w - 20}%`, `${w}%`] : `${w * 0.7}%`,
              opacity: i === activeFilter ? 1 : 0.4
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "h-4 rounded",
              i === activeFilter ? "bg-primary/30 border border-primary/50" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}

// Accuracy Magic - 90% accuracy visualization
function AccuracyMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center justify-center gap-4">
      {/* Circular progress */}
      <div className="relative size-14">
        <svg className="size-14 -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="3"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeDasharray="90, 100"
            initial={{ strokeDashoffset: 100 }}
            animate={shouldReduceMotion ? { strokeDashoffset: 0 } : {
              strokeDashoffset: [100, 0, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">90%</span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-medium">Model Accuracy</span>
        <span className="text-[10px] text-muted-foreground">2-quarter predictions</span>
      </div>
    </div>
  );
}

// Quarterly Magic - 4 quarters visualization
function QuarterlyMagic() {
  const shouldReduceMotion = useReducedMotion();
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center justify-center gap-2">
      {quarters.map((q, i) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : {
            opacity: [0.3, 1, 0.3],
            y: [5, 0, 5],
            scale: [0.95, 1, 0.95]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          className={cn(
            "flex flex-col items-center justify-center size-12 rounded-lg border",
            i < 2 ? "bg-muted border-border" : "bg-primary/10 border-primary/30"
          )}
        >
          <span className={cn(
            "text-xs font-bold",
            i < 2 ? "text-muted-foreground" : "text-primary"
          )}>
            {q}
          </span>
          {i >= 2 && (
            <motion.span
              animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[8px] text-primary"
            >
              Predicted
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

const BENEFITS = [
  {
    id: 'ltv',
    icon: TrendingUpIcon,
    text: 'Find out the predicted LTV and revenue of your user cohorts.',
    magic: LTVChartMagic,
  },
  {
    id: 'investment',
    icon: DollarSignIcon,
    text: 'See how much you can invest by being aware of the predicted payoff.',
    magic: RevenuePredictionMagic,
  },
  {
    id: 'cohorts',
    icon: TargetIcon,
    text: 'Learn which cohorts are likely to generate the highest revenue in the future.',
    magic: CohortPredictionMagic,
  },
];

const FEATURES = [
  {
    id: 'quarterly',
    title: 'Predict the next 4 quarters',
    description: 'Build LTV and revenue predictions for 3, 6, 9, or 12 months based on your historical data.',
    icon: CalendarCheckIcon,
    magic: QuarterlyMagic,
  },
  {
    id: 'filtering',
    title: 'Diverse filtering',
    description: 'Filter and group the predicted LTV data by product, duration, country, and other attributes to find more insights.',
    icon: FilterIcon,
    magic: FilterMagic,
  },
  {
    id: 'accuracy',
    title: 'Accurate prediction model',
    description: "Our backtests show 90% accuracy with the real LTV when making predictions for the next 2 quarters.",
    icon: TargetIcon,
    magic: AccuracyMagic,
  },
  {
    id: 'cohort',
    title: 'Cohort prediction',
    description: 'The prediction model is tightly tied with the cohort chart that enables you to see how your subscribers renew, churn, and bring revenue each subscription period.',
    icon: UsersIcon,
    magic: CohortPredictionMagic,
  },
];

const RELATED_PAGES = [
  { name: 'LTV analytics', href: '/ltv-analytics' },
  { name: 'Revenue analytics', href: '/revenue-growth' },
];

// =============================================================================
// COMPONENTS
// =============================================================================

function BenefitCard({ benefit, index }: { benefit: typeof BENEFITS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);
  const MagicComponent = benefit.magic;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={shouldReduceMotion ? undefined : {
        y: isHovered ? -4 : 0,
      }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-xl border bg-card transition-all duration-200 cursor-pointer group",
        isHovered && "border-primary/30 "
      )}>
        <Spotlight
          className="from-primary/20 via-primary/10 to-transparent"
          size={200}
        />
        {isHovered && (
          <BorderBeam
            size={100}
            duration={8}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        <div className="p-6 relative z-10">
          <div className="flex gap-4">
            <motion.div
              animate={shouldReduceMotion ? undefined : {
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
              className="flex-shrink-0"
            >
              <benefit.icon className="size-6 text-primary" />
            </motion.div>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit.text}</p>
          </div>

          {/* Magic Area */}
          {MagicComponent && <MagicComponent />}
        </div>
      </div>
    </motion.div>
  );
}

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
        isHovered && "border-primary/30 "
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
              "flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors",
              isHovered && "bg-primary/20"
            )}
          >
            <feature.icon className="size-6" />
          </motion.div>
          <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
          <p className="mt-2 text-muted-foreground">{feature.description}</p>

          {/* Magic Area */}
          {MagicComponent && <MagicComponent />}
        </div>
      </div>
    </motion.div>
  );
}

function RelatedPageLink({ page, index }: { page: typeof RELATED_PAGES[0]; index: number }) {
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
          "flex items-center gap-2 rounded-lg border bg-card px-4 py-3 text-sm font-medium transition-all duration-150",
          isHovered && "border-primary/30 text-primary "
        )}
      >
        {page.name}
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

export function PredictiveAnalyticsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2200} />
      <div className="container py-16 md:py-24 relative z-10">
        {/* Benefits */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="What can I do with AI predictions?"
            description="Make data-driven decisions about user acquisition and monetization strategy."
          />
        </BlurFade>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <BlurFade key={benefit.id} delay={0.1 + index * 0.05}>
              <BenefitCard benefit={benefit} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Features */}
        <BlurFade delay={0.25}>
          <div className="mt-20">
            <SiteHeading
              title="Powerful prediction capabilities"
              description="Built on advanced machine learning models trained on subscription data."
            />
          </div>
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.id} delay={0.3 + index * 0.05}>
              <FeatureCard feature={feature} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.5}>
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
                <BrainCircuitIcon className="size-8 text-primary/50 mb-4" />
                <blockquote className="text-lg italic text-muted-foreground">
                  "We've been using Adapty's analytics for a long time, but the
                  predictive analytics feature turned out to be our crystal ball for
                  future growth."
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold">Sergey Lagutyonok</p>
                  <p className="text-sm text-muted-foreground">
                    Product manager at Impala Studios
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Migration CTA */}
        <BlurFade delay={0.6}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl border bg-card p-8 md:p-12">
              <Spotlight
                className="from-primary/20 via-primary/10 to-transparent"
                size={400}
              />
              <BorderBeam
                size={200}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-40"
              />
              <div className="grid gap-8 md:grid-cols-2 items-center relative z-10">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Using another or in-house solution for subscriptions?
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    We've got you covered and will help you move your data
                    securely and seamlessly without losing a single subscriber.
                  </p>
                  <div className="mt-6">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                      className="inline-block"
                    >
                      <Link
                        href="/schedule-demo"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                      >
                        Schedule a call to know more
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <motion.div
                    animate={shouldReduceMotion ? {} : {
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative h-48 w-full max-w-sm rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center"
                  >
                    <LineChartIcon className="size-20 text-primary/30" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Learn More */}
        <BlurFade delay={0.7}>
          <div className="mt-20">
            <h2 className="text-xl font-semibold text-center">Learn more</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <RelatedPageLink key={page.href} page={page} index={index} />
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
