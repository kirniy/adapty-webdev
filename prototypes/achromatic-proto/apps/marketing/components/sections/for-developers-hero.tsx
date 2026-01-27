'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  BookOpenIcon,
  CheckIcon,
  CodeIcon,
  RefreshCwIcon,
  ShieldIcon,
  TerminalIcon,
  ZapIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Magic animation: SDK integration progress
function SDKIntegrationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = React.useState(0);

  const steps = [
    { label: 'npm install adapty-sdk', icon: '1' },
    { label: 'Adapty.activate()', icon: '2' },
    { label: 'Ready to monetize!', icon: '3' }
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, steps.length]);

  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2 rounded-lg border bg-background/95 p-3 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <TerminalIcon className="size-3" />
        Integration
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="flex size-5 items-center justify-center rounded bg-primary text-[10px] font-bold text-primary-foreground">
            {steps[step].icon}
          </div>
          <span className="text-xs font-mono">{steps[step].label}</span>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-1">
        {steps.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 flex-1 rounded-full"
            animate={{
              backgroundColor:
                i <= step ? 'hsl(var(--primary))' : 'hsl(var(--muted))'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

// Magic animation: Lines of code counter
function LinesOfCodeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [lines, setLines] = React.useState(0);
  const targetLines = 12;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setLines(targetLines);
      return;
    }
    const duration = 1500;
    const steps = 20;
    const stepValue = targetLines / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= targetLines) {
        setLines(targetLines);
        clearInterval(interval);
      } else {
        setLines(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute top-4 right-4 flex items-center gap-2 rounded-lg border bg-background/95 px-3 py-2 backdrop-blur-sm">
      <CodeIcon className="size-4 text-primary" />
      <div className="flex flex-col">
        <motion.span
          className="text-lg font-bold tabular-nums"
          key={lines}
          initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {lines}
        </motion.span>
        <span className="text-[10px] text-muted-foreground">
          lines to integrate
        </span>
      </div>
    </div>
  );
}

// EXACT content from adapty.io/for-developers (scraped 2026-01-21)
const BENEFITS = [
  { icon: CodeIcon, text: 'Single line integration' },
  { icon: ZapIcon, text: '5-minute setup' },
  { icon: ShieldIcon, text: 'StoreKit 2 & Billing 5' },
  { icon: RefreshCwIcon, text: 'Auto-sync subscribers' }
];

// Code snippets for different platforms
const CODE_SNIPPETS = {
  swift: {
    filename: 'AdaptyIntegration.swift',
    code: `// Initialize Adapty SDK
Adapty.activate("YOUR_API_KEY")

// Show paywall
let paywall = try await Adapty.getPaywall("premium")
let config = try await Adapty.getViewConfiguration(paywall)

// Handle purchase
try await Adapty.makePurchase(product)`
  },
  kotlin: {
    filename: 'AdaptyIntegration.kt',
    code: `// Initialize Adapty SDK
Adapty.activate(applicationContext, "YOUR_API_KEY")

// Show paywall
val paywall = Adapty.getPaywall("premium")
val config = Adapty.getViewConfiguration(paywall)

// Handle purchase
Adapty.makePurchase(activity, product)`
  },
  react: {
    filename: 'AdaptyIntegration.tsx',
    code: `// Initialize Adapty SDK
adapty.activate('YOUR_API_KEY');

// Show paywall
const paywall = await adapty.getPaywall('premium');
const config = await adapty.getViewConfiguration(paywall);

// Handle purchase
await adapty.makePurchase(product);`
  }
};

type Platform = keyof typeof CODE_SNIPPETS;

// =============================================================================
// VARIANT: SPLIT - Text left, code right (default)
// =============================================================================
function SplitHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'docs' | 'start' | null>(
    null
  );
  const [platform, setPlatform] = React.useState<Platform>('swift');

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge
                variant="outline"
                className="relative w-fit overflow-hidden rounded-full px-4 py-1.5"
              >
                <BorderBeam
                  size={40}
                  duration={4}
                  borderWidth={1.5}
                  colorFrom="#3b82f6"
                  colorTo="#8b5cf6"
                />
                For developers
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Integrate in-app purchases in minutes with a single line of code
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                Focus on building new products, leave subscription
                infrastructure to us. Our SDK handles all the complexity of
                in-app purchases across iOS, Android, and cross-platform
                frameworks.
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="size-4 text-primary" />
                    </div>
                    {benefit.text}
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <motion.div
                  onMouseEnter={() => setIsHovered('docs')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'docs' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://docs.adapty.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    View documentation
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    Start for free
                  </Link>
                </motion.div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Code snippet with platform tabs */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
              }
              transition={{
                delay: 0.1,
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="group relative w-full overflow-hidden rounded-xl border bg-muted/30 "
            >
              <Spotlight
                className="from-blue-500/20 via-purple-500/10 to-transparent"
                size={300}
              />
              {/* Platform tabs */}
              <div className="flex items-center gap-1 border-b border-zinc-800 px-4 py-2">
                {(Object.keys(CODE_SNIPPETS) as Platform[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={cn(
                      'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                      platform === p
                        ? 'bg-primary text-primary-foreground'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                    )}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
              {/* Code header */}
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-primary" />
                </div>
                <span className="ml-2 text-xs text-zinc-500">
                  {CODE_SNIPPETS[platform].filename}
                </span>
              </div>
              {/* Code content */}
              <AnimatePresence mode="wait">
                <motion.pre
                  key={platform}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-x-auto p-4 text-sm leading-relaxed"
                >
                  <code className="text-zinc-300">
                    {CODE_SNIPPETS[platform].code.split('\n').map((line, i) => (
                      <div
                        key={i}
                        className="whitespace-pre"
                      >
                        {line.startsWith('//') ? (
                          <span className="text-zinc-500">{line}</span>
                        ) : line.includes('Adapty') ||
                          line.includes('adapty') ? (
                          <>
                            {line
                              .split(
                                /(Adapty\.\w+|adapty\.\w+|"[^"]*"|'[^']*'|\btry\b|\bawait\b|\blet\b|\bval\b|\bconst\b)/
                              )
                              .map((part, j) => {
                                if (part.match(/^(Adapty|adapty)\./))
                                  return (
                                    <span
                                      key={j}
                                      className="text-purple-400"
                                    >
                                      {part}
                                    </span>
                                  );
                                if (part.match(/^["']/))
                                  return (
                                    <span
                                      key={j}
                                      className="text-primary"
                                    >
                                      {part}
                                    </span>
                                  );
                                if (
                                  [
                                    'try',
                                    'await',
                                    'let',
                                    'val',
                                    'const'
                                  ].includes(part)
                                )
                                  return (
                                    <span
                                      key={j}
                                      className="text-pink-400"
                                    >
                                      {part}
                                    </span>
                                  );
                                return <span key={j}>{part}</span>;
                              })}
                          </>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>

              {/* Magic animations */}
              <SDKIntegrationMagic />
              <LinesOfCodeMagic />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: CENTERED - Classic centered layout with code below
// =============================================================================
function CenteredHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'docs' | 'start' | null>(
    null
  );

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <BlurFade delay={0.05}>
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 mb-6"
            >
              For developers
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Integrate in-app purchases in{' '}
              <span className="text-primary">minutes</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Focus on building new products, leave subscription infrastructure
              to us. Our SDK handles all the complexity across iOS, Android, and
              cross-platform frameworks.
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm"
                >
                  <benefit.icon className="size-4 text-primary" />
                  {benefit.text}
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <motion.div
                onMouseEnter={() => setIsHovered('docs')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'docs' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://docs.adapty.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  View documentation
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Start for free
                </Link>
              </motion.div>
            </div>
          </BlurFade>

          {/* Code snippet below */}
          <BlurFade delay={0.3}>
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{
                delay: 0.2,
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="mt-12 w-full max-w-2xl mx-auto overflow-hidden rounded-xl border bg-muted/30 "
            >
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-zinc-500">
                  Quick integration
                </span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-left">
                <code className="text-zinc-300">
                  <span className="text-zinc-500">
                    // Just 3 lines to get started
                  </span>
                  {'\n'}
                  <span className="text-pink-400">const</span> paywall ={' '}
                  <span className="text-pink-400">await</span>{' '}
                  <span className="text-purple-400">adapty.getPaywall</span>(
                  <span className="text-green-400">&apos;premium&apos;</span>);
                  {'\n'}
                  <span className="text-pink-400">const</span> config ={' '}
                  <span className="text-pink-400">await</span>{' '}
                  <span className="text-purple-400">
                    adapty.getViewConfiguration
                  </span>
                  (paywall);{'\n'}
                  <span className="text-pink-400">await</span>{' '}
                  <span className="text-purple-400">adapty.makePurchase</span>
                  (product);
                </code>
              </pre>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TERMINAL - Interactive terminal demo
// =============================================================================
function TerminalHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'docs' | 'start' | null>(
    null
  );
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);

  const TERMINAL_STEPS = [
    { command: '$ npm install adapty-sdk', output: 'added 1 package in 2.3s' },
    {
      command: '$ adapty init --key YOUR_API_KEY',
      output: 'Adapty initialized successfully!'
    },
    {
      command: '$ adapty show-paywall premium',
      output: 'Paywall "premium" loaded with 3 products'
    }
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentStep(TERMINAL_STEPS.length - 1);
      setIsTyping(false);
      return;
    }

    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setCurrentStep((prev) => (prev + 1) % TERMINAL_STEPS.length);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, TERMINAL_STEPS.length]);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={850} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Terminal demo */}
          <BlurFade delay={0.1}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
              }
              transition={{
                delay: 0.1,
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="group relative w-full overflow-hidden rounded-xl border bg-muted/30 "
            >
              <Spotlight
                className="from-green-500/20 via-emerald-500/10 to-transparent"
                size={300}
              />
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-2 flex items-center gap-2">
                  <TerminalIcon className="size-3 text-zinc-500" />
                  <span className="text-xs text-zinc-500">
                    Terminal - adapty-quickstart
                  </span>
                </div>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm min-h-[200px]">
                {TERMINAL_STEPS.slice(0, currentStep + 1).map((step, i) => (
                  <div
                    key={i}
                    className="mb-3"
                  >
                    <div className="text-green-400">
                      {i === currentStep && isTyping ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {step.command}
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-4 bg-primary ml-1"
                          />
                        </motion.span>
                      ) : (
                        step.command
                      )}
                    </div>
                    {(!isTyping || i < currentStep) && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-400 mt-1"
                      >
                        {step.output}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </BlurFade>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge
                variant="outline"
                className="w-fit rounded-full px-4 py-1.5"
              >
                <TerminalIcon className="mr-2 size-3" />
                For developers
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Ship faster with the simplest IAP SDK
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                Install our SDK, initialize with your API key, and start showing
                paywalls. No complex setup, no backend required. Just code.
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="space-y-3">
                {[
                  { icon: CheckIcon, text: '5-minute integration' },
                  {
                    icon: CheckIcon,
                    text: 'Cross-platform support (iOS, Android, RN, Flutter, Unity)'
                  },
                  { icon: CheckIcon, text: '99.99% uptime SLA' },
                  { icon: CheckIcon, text: 'Open source SDKs on GitHub' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <motion.div
                  onMouseEnter={() => setIsHovered('docs')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'docs' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://docs.adapty.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    <BookOpenIcon className="mr-2 size-4" />
                    Read the docs
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://github.com/adaptyteam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    View on GitHub
                  </Link>
                </motion.div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export const FOR_DEVELOPERS_HERO_VARIANTS = [
  'split',
  'centered',
  'terminal'
] as const;
export type ForDevelopersHeroVariant =
  (typeof FOR_DEVELOPERS_HERO_VARIANTS)[number];

type Props = {
  variant?: ForDevelopersHeroVariant;
};

export function ForDevelopersHero({
  variant = 'split'
}: Props): React.JSX.Element {
  switch (variant) {
    case 'centered':
      return <CenteredHero />;
    case 'terminal':
      return <TerminalHero />;
    case 'split':
    default:
      return <SplitHero />;
  }
}
