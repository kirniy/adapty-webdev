'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  DownloadIcon,
  ToggleRightIcon,
  TrendingUpIcon,
  ScissorsIcon,
  SparklesIcon,
  DollarSignIcon,
  ShieldIcon,
  ChevronDownIcon,
  CheckIcon,
  XIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
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

// SDK Install Magic - Progress animation
function SDKInstallMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 50);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center gap-3">
      <div className="flex-1">
        <div className="flex items-center justify-between text-[9px] mb-1">
          <span className="text-muted-foreground">Installing SDK...</span>
          <span className="text-primary font-medium">{progress}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
      {progress >= 100 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="size-5 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <CheckIcon className="size-3 text-primary" />
        </motion.div>
      )}
    </div>
  );
}

// Toggle Magic - Switch animation
function ToggleMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [isOn, setIsOn] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIsOn((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-3">
      <span className="text-[10px] text-muted-foreground">Refund Saver</span>
      <motion.div
        animate={{
          backgroundColor: isOn ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
        }}
        className="w-12 h-6 rounded-full p-1 cursor-pointer"
      >
        <motion.div
          animate={{ x: isOn ? 24 : 0 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
          className="size-4 rounded-full bg-white "
        />
      </motion.div>
      {isOn && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] text-primary font-medium"
        >
          Active
        </motion.span>
      )}
    </div>
  );
}

// Revenue Magic - Counter animation
function RevenueMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 5 ? 0 : prev + 0.1));
    }, 100);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <span className="text-[9px] text-muted-foreground">MRR Saved</span>
        <div className="flex items-baseline">
          <motion.span
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-lg font-bold text-primary"
          >
            +{value.toFixed(1)}%
          </motion.span>
        </div>
      </div>
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-primary"
      >
        <TrendingUpIcon className="size-5" />
      </motion.div>
    </div>
  );
}

// Refund Reduction Magic - 40% cut visualization
function RefundReductionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [showCut, setShowCut] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setShowCut((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-4">
      {/* Before bar */}
      <div className="flex flex-col items-center">
        <span className="text-[8px] text-muted-foreground mb-1">Before</span>
        <div className="w-6 h-10 bg-red-500/30 rounded relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] text-red-500 font-bold">100%</span>
          </div>
        </div>
      </div>

      {/* Arrow with scissors */}
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-primary"
      >
        <ScissorsIcon className="size-4" />
      </motion.div>

      {/* After bar */}
      <div className="flex flex-col items-center">
        <span className="text-[8px] text-muted-foreground mb-1">After</span>
        <div className="w-6 h-10 bg-muted rounded relative overflow-hidden">
          <motion.div
            animate={{ height: showCut ? '60%' : '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 bg-primary/20 rounded-b"
          />
          <AnimatePresence>
            {showCut && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center text-[8px] text-primary font-bold"
              >
                60%
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {showCut && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[9px] text-primary font-bold"
        >
          -40%
        </motion.div>
      )}
    </div>
  );
}

// Zero Effort Magic - Automated checkmarks
function ZeroEffortMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [checks, setChecks] = React.useState([false, false, false]);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    let index = 0;
    const interval = setInterval(() => {
      setChecks((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      index++;
      if (index >= 3) {
        setTimeout(() => setChecks([false, false, false]), 1000);
        index = 0;
      }
    }, 600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const steps = ['Detect', 'Respond', 'Save'];

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1">
          <motion.div
            animate={{
              backgroundColor: checks[i] ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
              scale: checks[i] ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.2 }}
            className="size-4 rounded-full flex items-center justify-center"
          >
            {checks[i] && <CheckIcon className="size-2.5 text-primary-foreground" />}
          </motion.div>
          <span className={cn(
            "text-[9px] font-medium",
            checks[i] ? "text-primary" : "text-muted-foreground"
          )}>
            {step}
          </span>
          {i < 2 && <ArrowRightIcon className="size-2.5 text-muted-foreground mx-1" />}
        </div>
      ))}
    </div>
  );
}

// Cost Recovery Magic - Balance animation
function CostRecoveryMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setBalance((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 80);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const isPaid = balance >= 50;

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center gap-3">
      <div className="flex-1">
        <div className="flex items-center justify-between text-[9px] mb-1">
          <span className="text-muted-foreground">Adapty Cost</span>
          <span className={cn("font-medium", isPaid ? "text-green-500" : "text-muted-foreground")}>
            {isPaid ? "Paid off" : "Recovering..."}
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden relative">
          <motion.div
            initial={false}
            animate={{ width: `${Math.min(balance, 100)}%` }}
            className={cn(
              "h-full rounded-full transition-colors",
              isPaid ? "bg-primary" : "bg-muted"
            )}
          />
        </div>
      </div>
      {isPaid && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-[9px] text-green-500 font-bold"
        >
          FREE
        </motion.div>
      )}
    </div>
  );
}

// Legal Shield Magic - Protection animation
function LegalShieldMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-3">
      <motion.div
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="size-8 rounded-lg bg-primary/10 flex items-center justify-center"
      >
        <ShieldIcon className="size-4 text-primary" />
      </motion.div>
      <div className="flex flex-col">
        <span className="text-[9px] text-muted-foreground">Apple decides</span>
        <span className="text-[10px] font-medium text-foreground">You stay protected</span>
      </div>
    </div>
  );
}

// Map benefits to magic components
const BENEFIT_MAGIC: Record<string, React.ComponentType> = {
  'Cut refunds by 40%': RefundReductionMagic,
  'Zero extra effort': ZeroEffortMagic,
  'Adapty pays for itself': CostRecoveryMagic,
  'No legal consequences': LegalShieldMagic,
};

// Map steps to magic components
const STEP_MAGIC: Record<string, React.ComponentType> = {
  'Install the Adapty SDK': SDKInstallMagic,
  'Turn on Refund Saver': ToggleMagic,
  'Win back up to 5% of MRR': RevenueMagic,
};

// =============================================================================
// DATA
// =============================================================================

// EXACT content from adapty.io/refund-saver (scraped 2026-01-21)

// "Start saving refunds with just one click" - 3 steps
const STEPS = [
  {
    number: '1',
    icon: DownloadIcon,
    title: 'Install the Adapty SDK',
    description: 'Use Adapty as your subscription infrastructure.',
    link: 'https://adapty.io/docs/installation-of-adapty-sdks',
    linkText: 'Install the Adapty SDK'
  },
  {
    number: '2',
    icon: ToggleRightIcon,
    title: 'Turn on Refund Saver',
    description: 'Let Adapty handle refund requests by sharing key app usage info with Apple.',
    link: null,
    linkText: null
  },
  {
    number: '3',
    icon: TrendingUpIcon,
    title: 'Win back up to 5% of MRR',
    description: 'Get extra revenue back with zero effort.',
    link: null,
    linkText: null
  }
];

// "Why Adapty Refund Saver?" - 4 benefits
const BENEFITS = [
  {
    icon: ScissorsIcon,
    title: 'Cut refunds by 40%',
    description: 'Keep more of your hard-earned revenue with smarter refund handling.'
  },
  {
    icon: SparklesIcon,
    title: 'Zero extra effort',
    description: "It's fully automated - sit back and let it do the work for you."
  },
  {
    icon: DollarSignIcon,
    title: 'Adapty pays for itself',
    description: "Recover enough revenue, and Adapty can practically cost you nothing."
  },
  {
    icon: ShieldIcon,
    title: 'No legal consequences',
    description: "Refund Saver automates everything, while Apple makes the final decision - no legal responsibility on your side."
  }
];

// SDKs from adapty.io/refund-saver
const SDKS = [
  { name: 'Swift SDK', link: '/sdk/ios/' },
  { name: 'Kotlin SDK', link: '/sdk/android/' },
  { name: 'React Native SDK', link: '/sdk/react-native/' },
  { name: 'Unity SDK', link: '/sdk/unity/' },
  { name: 'Flutter SDK', link: '/sdk/flutter/' },
  { name: 'Capacitor SDK', link: '/sdk/capacitor/' },
  { name: 'KMP SDK', link: '/sdk/kmp/' },
  { name: 'FlutterFlow', link: '/sdk/flutterflow/' },
  { name: 'Web API', link: '/sdk/web/' },
  { name: 'Stripe', link: '/integrations/stripe/' }
];

// Case studies from adapty.io/refund-saver
const CASE_STUDIES = [
  {
    name: 'Fotorama',
    category: 'Photo & Video',
    result: 'Refund rate dropped 40%',
    description: 'How to decrease the refund rate with Adapty.',
    link: '/case-studies/fotorama/'
  },
  {
    name: 'Pepapp',
    category: 'Health & Fitness',
    result: '400% ROI on Adapty',
    description: 'How to make Adapty for free with Refund Saver.',
    link: '/case-studies/pepapp/'
  }
];

export type RefundSaverFeaturesVariant = 'grid' | 'bento' | 'tabs';

export const REFUND_SAVER_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: RefundSaverFeaturesVariant;
};

// =============================================================================
// VARIANT: GRID - Classic grid layout (default)
// =============================================================================
function GridFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredBenefitIndex, setHoveredBenefitIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1800} />
      <div className="container py-20 relative z-10">
        {/* How it works - 3 steps */}
        <BlurFade delay={0.05}>
          <SiteHeading title="Start saving refunds with just one click" />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, index) => {
            const MagicComponent = STEP_MAGIC[step.title];
            return (
              <BlurFade key={index} delay={0.1 + index * 0.05}>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className="relative"
                >
                  <div className="relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm border-border/50 p-6 hover:border-primary/30 transition-all duration-200">
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={200}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          {step.link ? (
                            <Link
                              href={step.link}
                              className="font-semibold text-lg mb-2 hover:text-primary transition-colors inline-flex items-center gap-1"
                            >
                              {step.title}
                              <ArrowRightIcon className="size-4" />
                            </Link>
                          ) : (
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          )}
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>

                      {/* Magic Animation */}
                      {MagicComponent && <MagicComponent />}
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* SDK list */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-3">
              {SDKS.map((sdk, index) => (
                <motion.div
                  key={index}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href={sdk.link}
                    className="block px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150"
                  >
                    {sdk.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Why Adapty Refund Saver? - 4 benefits */}
        <BlurFade delay={0.35}>
          <div className="mt-20">
            <SiteHeading title="Why Adapty Refund Saver?" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, index) => {
            const MagicComponent = BENEFIT_MAGIC[benefit.title];
            const isHovered = hoveredBenefitIndex === index;

            return (
              <BlurFade key={index} delay={0.4 + index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredBenefitIndex(index)}
                  onMouseLeave={() => setHoveredBenefitIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered ? -6 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <div className={cn(
                    "relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200 cursor-pointer",
                    isHovered && "border-primary/30 "
                  )}>
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={250}
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
                    <div className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.15 : 1,
                            rotate: isHovered ? 5 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                          className={cn(
                            "flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors",
                            isHovered && "bg-primary/20"
                          )}
                        >
                          <benefit.icon className="size-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>

                      {/* Magic Animation */}
                      {MagicComponent && <MagicComponent />}
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Case studies section */}
        <BlurFade delay={0.6}>
          <div className="mt-20">
            <SiteHeading title="Real success stories" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.65 + index * 0.05}>
              <Link href={study.link} className="group">
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <div className="relative h-full overflow-hidden rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/20 p-6 hover:border-primary/40 transition-all duration-200">
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={250}
                    />
                    <div className="relative z-10">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{study.result}</p>
                      <p className="text-sm text-muted-foreground">{study.description}</p>
                      <motion.p
                        animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-sm text-primary mt-3 inline-flex items-center gap-1 group-hover:underline"
                      >
                        Read more
                        <ArrowRightIcon className="size-3" />
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid
// =============================================================================
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-20 relative z-10">
        {/* Steps as a wide card */}
        <BlurFade delay={0.05}>
          <SiteHeading title="Start saving refunds with just one click" />
        </BlurFade>

        <BlurFade delay={0.1}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
          >
            <div className="relative mt-12 p-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-background/80 to-background/50 backdrop-blur-sm border border-primary/20">
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
                className="opacity-50"
              />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {STEPS.map((step, index) => {
                  const MagicComponent = STEP_MAGIC[step.title];
                  return (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg"
                        >
                          {step.number}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      {/* Magic Animation */}
                      {MagicComponent && <MagicComponent />}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Benefits grid */}
        <BlurFade delay={0.2}>
          <div className="mt-20">
            <SiteHeading title="Why Adapty Refund Saver?" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((benefit, index) => {
            const MagicComponent = BENEFIT_MAGIC[benefit.title];
            const isExpanded = expandedIndex === index;

            return (
              <BlurFade key={index} delay={0.25 + index * 0.03}>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <div
                    className={cn(
                      "relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 cursor-pointer transition-all duration-200",
                      isExpanded && "border-primary/30 "
                    )}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={180}
                    />
                    <div className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <benefit.icon className="size-5" />
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="text-muted-foreground"
                        >
                          <ChevronDownIcon className="size-4" />
                        </motion.div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                              {benefit.description}
                            </p>
                            {/* Magic Animation */}
                            {MagicComponent && <MagicComponent />}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Case studies */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <SiteHeading title="Real success stories" />
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.45 + index * 0.05}>
              <Link href={study.link} className="group">
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <div className="relative h-full overflow-hidden rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/20 p-6 hover:border-primary/40 transition-all duration-200">
                    <Spotlight
                      className="from-primary/20 via-primary/10 to-transparent"
                      size={250}
                    />
                    <div className="relative z-10">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{study.result}</p>
                      <p className="text-sm text-muted-foreground">{study.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Section tabs for different content areas
// =============================================================================
function TabsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = React.useState<'steps' | 'benefits' | 'stories'>('steps');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const TABS = [
    { id: 'steps', label: 'How it works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'stories', label: 'Success Stories' },
  ] as const;

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need to save refunds"
            description="Automated refund protection that pays for itself."
          />
        </BlurFade>

        {/* Tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TABS.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200",
                  activeTab === tab.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeRefundTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Tab content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === 'steps' && (
              <motion.div
                key="steps"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {STEPS.map((step, index) => {
                  const MagicComponent = STEP_MAGIC[step.title];
                  return (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    >
                      <div className="relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-colors">
                        <Spotlight
                          className="from-primary/20 via-primary/10 to-transparent"
                          size={200}
                        />
                        <div className="relative z-10">
                          <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                            {step.number}
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                          {MagicComponent && <MagicComponent />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {BENEFITS.map((benefit, index) => {
                  const MagicComponent = BENEFIT_MAGIC[benefit.title];
                  const isHovered = hoveredIndex === index;

                  return (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    >
                      <div className={cn(
                        "relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200",
                        isHovered && "border-primary/30 "
                      )}>
                        <Spotlight
                          className="from-primary/20 via-primary/10 to-transparent"
                          size={250}
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
                        <div className="p-6 relative z-10">
                          <div className="flex items-start gap-4">
                            <motion.div
                              animate={shouldReduceMotion ? undefined : {
                                scale: isHovered ? 1.1 : 1,
                              }}
                              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                            >
                              <benefit.icon className="size-6" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </div>
                          </div>
                          {MagicComponent && <MagicComponent />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'stories' && (
              <motion.div
                key="stories"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
              >
                {CASE_STUDIES.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={study.link} className="group">
                      <motion.div whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
                        <div className="relative h-full overflow-hidden rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/20 p-6 hover:border-primary/40 transition-colors duration-150">
                          <Spotlight
                            className="from-primary/20 via-primary/10 to-transparent"
                            size={250}
                          />
                          <div className="relative z-10">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.category}</p>
                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{study.name}</h3>
                            <p className="text-2xl font-bold text-primary mb-2">{study.result}</p>
                            <p className="text-sm text-muted-foreground">{study.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export function RefundSaverFeatures({ variant = 'bento' }: Props): React.JSX.Element {
  switch (variant) {
    case 'grid':
      return <GridFeatures />;
    case 'tabs':
      return <TabsFeatures />;
    case 'bento':
    default:
      return <BentoFeatures />;
  }
}
