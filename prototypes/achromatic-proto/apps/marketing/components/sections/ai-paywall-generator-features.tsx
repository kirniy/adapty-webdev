'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  SparklesIcon,
  ZapIcon,
  MousePointerClickIcon,
  InfinityIcon,
  LinkIcon,
  PaletteIcon,
  RefreshCwIcon,
  ArrowRightIcon,
  WandSparklesIcon,
  ChevronDownIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// AI Sparkle Magic - Particles flying around with sparkle effect
function AISparklesMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center relative overflow-hidden">
      {/* Central AI icon */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <WandSparklesIcon className="size-6 text-primary" />
      </motion.div>

      {/* Orbiting sparkles */}
      {!shouldReduceMotion && [0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${i * 90}deg)` }}
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            className="absolute size-2 rounded-full bg-primary"
            style={{ left: `${70 + i * 3}%` }}
          />
        </motion.div>
      ))}

      {/* Glow effect */}
      <motion.div
        animate={shouldReduceMotion ? {} : { opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent"
      />
    </div>
  );
}

// Generation Speed Magic - Timer counting down fast
function SpeedMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [seconds, setSeconds] = React.useState(30);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setSeconds((prev) => (prev <= 0 ? 30 : prev - 1));
    }, 100);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-3">
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="text-primary"
      >
        <ZapIcon className="size-5" />
      </motion.div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground">{seconds}s</span>
        <span className="text-[9px] text-muted-foreground">5 paywalls ready</span>
      </div>
      <div className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : {
              opacity: seconds <= 30 - (i + 1) * 6 ? 1 : 0.3,
              scale: seconds <= 30 - (i + 1) * 6 ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
            className="size-3 rounded bg-primary/60"
          />
        ))}
      </div>
    </div>
  );
}

// One Click Magic - Click animation with result
function OneClickMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setClicked(true);
      setTimeout(() => setClicked(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-3 relative overflow-hidden">
      {/* Input field simulation */}
      <div className="flex-1 flex items-center gap-2 px-2 py-1 rounded bg-background/50 border border-border/50">
        <LinkIcon className="size-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground truncate">apps.apple.com/app/...</span>
      </div>

      {/* Generate button */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          scale: clicked ? [1, 0.9, 1] : 1,
          backgroundColor: clicked ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.1)',
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center size-8 rounded-lg text-primary"
      >
        <SparklesIcon className="size-4" />
      </motion.div>

      {/* Click ripple */}
      <AnimatePresence>
        {clicked && !shouldReduceMotion && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-4 size-8 rounded-full bg-primary/30"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Infinite Variants Magic - Cards cycling through
function InfiniteMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [variant, setVariant] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setVariant((prev) => (prev + 1) % 5);
    }, 1200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[60px] rounded-lg bg-muted/30 border border-border/50 p-3 flex items-center justify-center gap-2 relative overflow-hidden">
      {/* Miniature paywall cards */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={shouldReduceMotion ? {} : {
            y: i === 1 ? [0, -4, 0] : 0,
            opacity: i === 1 ? 1 : 0.5,
            scale: i === 1 ? 1.1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-8 h-10 rounded border bg-card flex flex-col items-center justify-center gap-0.5",
            i === 1 && "border-primary/50"
          )}
        >
          <div className="w-4 h-0.5 rounded bg-muted" />
          <div className="w-3 h-0.5 rounded bg-muted" />
          <div className="w-5 h-1.5 rounded bg-primary/30 mt-1" />
        </motion.div>
      ))}

      {/* Variant counter */}
      <div className="absolute bottom-2 right-3 text-[8px] text-muted-foreground">
        v{variant + 1}/5+
      </div>
    </div>
  );
}

// Process Step Magic Animations
function LinkInputMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [typing, setTyping] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setTyping(true);
      setTimeout(() => setTyping(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-2 flex items-center gap-2">
      <div className="flex-1 flex items-center gap-2 px-2 py-1.5 rounded bg-background/50 border border-border/50">
        <LinkIcon className="size-3 text-primary" />
        <motion.span
          animate={shouldReduceMotion ? {} : { opacity: typing ? [1, 0, 1] : 1 }}
          transition={{ duration: 0.5, repeat: typing ? Infinity : 0 }}
          className="text-[9px] text-foreground truncate"
        >
          {typing ? 'apps.apple.com/..._' : 'Paste URL'}
        </motion.span>
      </div>
    </div>
  );
}

function BrandExtractionMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-2 flex items-center justify-center gap-2">
      {/* Color swatches being extracted */}
      {['bg-purple-500', 'bg-blue-500', 'bg-pink-500'].map((color, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={shouldReduceMotion ? { scale: 1, opacity: 1 } : {
            scale: [0, 1.2, 1],
            opacity: [0, 1, 1],
          }}
          transition={{
            duration: 0.4,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className={cn("size-5 rounded", color)}
        />
      ))}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="text-primary ml-2"
      >
        <PaletteIcon className="size-4" />
      </motion.div>
    </div>
  );
}

function RegenerateMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [iteration, setIteration] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIteration((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[50px] rounded-lg bg-muted/30 border border-border/50 p-2 flex items-center justify-center gap-3">
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <RefreshCwIcon className="size-4 text-primary" />
      </motion.div>
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={shouldReduceMotion ? {} : {
              scale: i === iteration ? 1.2 : 1,
              opacity: i === iteration ? 1 : 0.4,
              borderColor: i === iteration ? 'hsl(var(--primary))' : 'hsl(var(--border))',
            }}
            transition={{ duration: 0.2 }}
            className="size-4 rounded border-2 bg-card"
          />
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

const FEATURES = [
  {
    id: 'personalized',
    icon: SparklesIcon,
    title: 'Hyper personalized',
    description: "AI uses your design and copy to generate paywalls that match your app's DNA.",
    magic: AISparklesMagic,
  },
  {
    id: 'speed',
    icon: ZapIcon,
    title: 'Ready in seconds',
    description: 'Get 5 paywalls in under 30 seconds.',
    magic: SpeedMagic,
  },
  {
    id: 'oneclick',
    icon: MousePointerClickIcon,
    title: 'One-click simple',
    description: 'Drop a link. Get full, ready-to-use paywalls.',
    magic: OneClickMagic,
  },
  {
    id: 'unlimited',
    icon: InfinityIcon,
    title: 'Unlimited versions',
    description: 'Keep generating until it fits. Try as many variants as you need.',
    magic: InfiniteMagic,
  },
];

const PROCESS_STEPS = [
  {
    id: 'paste',
    icon: LinkIcon,
    step: 'Step 1',
    title: 'Paste your app link',
    description: "AI extracts your app's visuals, copy, and metadata.",
    magic: LinkInputMagic,
  },
  {
    id: 'brand',
    icon: PaletteIcon,
    step: 'Step 2',
    title: 'Get branded paywalls',
    description: 'AI creates paywalls using your brand assets.',
    magic: BrandExtractionMagic,
  },
  {
    id: 'iterate',
    icon: RefreshCwIcon,
    step: 'Step 3',
    title: 'Generate options',
    description: 'Review, regenerate, launch. Repeat until it fits.',
    magic: RegenerateMagic,
  },
];

const FAQS = [
  {
    question: 'How to paywall apps easily?',
    answer: 'You can build it manually from scratch, create with Adapty no-code Paywall Builder, or generate it with AI Paywall Generator in seconds.',
  },
  {
    question: 'Can AI generate an iOS paywall for me?',
    answer: "Yes, Adapty's AI Paywall Generator can create iOS paywalls. Drop your App Store link, and you'll get a customizable design. It also works for apps built for Android, Flutter, React Native and other cross-platform frameworks.",
  },
  {
    question: 'Can AI A/B test different paywalls?',
    answer: 'You can quickly create a paywall with AI Generator and then run cross-placement A/B tests in your Adapty workspace. Use AI to forecast the winning variant and grow your revenue faster.',
  },
  {
    question: "What's the best way to implement a paywall in my app?",
    answer: 'Once your AI paywall is ready, you can add it to your app in your Adapty workspace and go live with no app updates needed. Just make sure the Adapty SDK is installed.',
  },
  {
    question: "How to create a successful paywall that Apple won't reject?",
    answer: "The AI Paywall Generator follows Apple's rules, so the paywalls it creates are safe to use in your iOS app.",
  },
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
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-xl border bg-card transition-all duration-200 cursor-pointer group",
        isHovered && "border-primary/30 shadow-xl"
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
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
            className={cn(
              "flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors",
              isHovered && "bg-primary/20"
            )}
          >
            <feature.icon className="size-6" />
          </motion.div>
          <h3 className="mt-4 font-semibold group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {feature.description}
          </p>

          {/* Magic Animation */}
          <MagicComponent />
        </div>
      </div>
    </motion.div>
  );
}

function ProcessStepCard({ step, index }: { step: typeof PROCESS_STEPS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);
  const MagicComponent = step.magic;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={shouldReduceMotion ? undefined : {
        y: isHovered ? -6 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-xl border bg-card transition-all duration-200 cursor-pointer group text-center",
        isHovered && "border-primary/30 shadow-xl"
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
        <div className="p-8 relative z-10">
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
            className={cn(
              "mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors",
              isHovered && "bg-primary/20"
            )}
          >
            <step.icon className="size-8" />
          </motion.div>
          <div className="mt-4 text-sm font-medium text-primary">
            {step.step}
          </div>
          <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
            {step.title}
          </h3>
          <p className="mt-2 text-muted-foreground">{step.description}</p>

          {/* Magic Animation */}
          <MagicComponent />
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={shouldReduceMotion ? undefined : {
        scale: isHovered ? 1.01 : 1,
      }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card transition-all duration-200",
        isHovered && "border-primary/30 shadow-md"
      )}
    >
      <Spotlight
        className="from-primary/10 via-transparent to-transparent"
        size={300}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left relative z-10"
      >
        <span className="font-medium group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground"
        >
          <ChevronDownIcon className="size-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-muted-foreground relative z-10">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function AIPaywallGeneratorFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2800} />
      <div className="container py-16 md:py-24 relative z-10">
        {/* Features */}
        <BlurFade delay={0.05}>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            No design skills needed. Built from your UI
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            AI analyzes your app and generates paywalls that match your brand perfectly.
          </p>
        </BlurFade>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.id} delay={0.1 + index * 0.05}>
              <FeatureCard feature={feature} index={index} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.3}>
          <div className="mt-10 text-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block"
            >
              <Link
                href="https://app.adapty.io/registration"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Try AI Paywall Generator
                <SparklesIcon className="size-4" />
              </Link>
            </motion.div>
          </div>
        </BlurFade>

        {/* How it works */}
        <BlurFade delay={0.35}>
          <h2 className="mt-24 text-center text-2xl font-bold tracking-tight md:text-3xl">
            How does AI Paywall Generator work?
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            Three simple steps to generate professional paywalls for your app.
          </p>
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <BlurFade key={step.id} delay={0.4 + index * 0.05}>
              <ProcessStepCard step={step} index={index} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.55}>
          <div className="mt-10 text-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block"
            >
              <Link
                href="https://app.adapty.io/registration"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                Generate AI paywalls
                <ArrowRightIcon className="size-5" />
              </Link>
            </motion.div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-12 text-center">
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
              <div className="relative z-10">
                <motion.div
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/20 text-primary mb-6"
                >
                  <WandSparklesIcon className="size-8" />
                </motion.div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Create personalized AI paywalls in seconds
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Drop your app link. The AI Paywall Generator creates unlimited
                  variants based on your app's UI and copy.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  >
                    <Link
                      href="https://app.adapty.io/registration"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      Generate AI paywalls
                      <SparklesIcon className="size-4" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  >
                    <Link
                      href="/schedule-demo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border bg-background font-medium hover:bg-muted transition-colors"
                    >
                      Schedule a demo
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* FAQ */}
        <BlurFade delay={0.65}>
          <h2 className="mt-24 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Frequently asked questions
          </h2>
        </BlurFade>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {FAQS.map((faq, index) => (
            <BlurFade key={index} delay={0.7 + index * 0.03}>
              <FAQItem faq={faq} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Final CTA */}
        <BlurFade delay={0.85}>
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              No need to brief a designer. Drop a link and get ready-to-use
              paywalls.
            </p>
            <div className="mt-6">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="inline-block"
              >
                <Link
                  href="https://app.adapty.io/registration"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-lg"
                >
                  Generate AI paywalls
                  <ArrowRightIcon className="size-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
