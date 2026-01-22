'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ShieldCheckIcon, RefreshCwIcon, ServerIcon, BellIcon, CheckIcon, AppleIcon, SmartphoneIcon, MonitorIcon, DownloadIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: SDK installation progress
function SDKInstallMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = React.useState(0);

  const steps = [
    { label: 'Installing SDK...', icon: DownloadIcon },
    { label: 'Configuring API key...', icon: ShieldCheckIcon },
    { label: 'SDK ready!', icon: CheckIcon },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 shadow-lg"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {step === 2 ? (
              <div className="size-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckIcon className="size-2.5 text-green-600" />
              </div>
            ) : (
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="size-4"
              >
                {React.createElement(steps[step].icon, { className: 'size-4 text-primary' })}
              </motion.div>
            )}
            <span className={cn(
              "text-xs font-medium",
              step === 2 ? "text-green-600" : "text-muted-foreground"
            )}>
              {steps[step].label}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Magic animation: Platform support badges
function PlatformBadgesMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activePlatform, setActivePlatform] = React.useState(0);

  const platforms = [
    { name: 'iOS', icon: AppleIcon },
    { name: 'Android', icon: SmartphoneIcon },
    { name: 'React Native', icon: MonitorIcon },
    { name: 'Flutter', icon: SmartphoneIcon },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, platforms.length]);

  return (
    <div className="absolute bottom-4 left-4 z-10 flex gap-1.5">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          animate={shouldReduceMotion ? undefined : {
            scale: activePlatform === index ? 1.1 : 1,
            opacity: activePlatform === index ? 1 : 0.5,
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium border bg-background/95 backdrop-blur-sm",
            activePlatform === index && "border-primary/50"
          )}
        >
          <platform.icon className="size-3" />
          <span className="hidden sm:inline">{platform.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

// EXACT content from adapty.io/sdk (scraped 2026-01-21)
// Badge: "Subscriptions SDK"
// Title: "Integrate in-app purchases in minutes"
// Description: "Use Adapty SDK to quickly integrate in-app purchases and subscriptions with no server coding. Adapty handles server-side receipt verification, subscription state, subscription events, and more."

// Key benefits for SDK
const BENEFITS = [
  { icon: ShieldCheckIcon, text: 'Server-side receipt verification' },
  { icon: RefreshCwIcon, text: 'Real-time subscription state' },
  { icon: ServerIcon, text: 'No backend required' },
  { icon: BellIcon, text: 'Subscription event webhooks' },
];

// Code snippet showing SDK capabilities
const CODE_SNIPPET = `// Initialize Adapty
Adapty.activate("YOUR_API_KEY")

// Get subscriber profile
let profile = try await Adapty.getProfile()

// Check subscription status
if profile.accessLevels["premium"]?.isActive {
    // User has active subscription
    enablePremiumFeatures()
}

// Listen for updates
Adapty.delegate = self`;

export function SDKHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'docs' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        {/* Split layout: text left, code right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5">
                Subscriptions SDK
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Integrate in-app purchases in minutes
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                Use Adapty SDK to quickly integrate in-app purchases and subscriptions with no server coding. We handle receipt verification, subscription state, events, and more.
              </p>
            </BlurFade>

            {/* Benefits grid */}
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
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
                    y: shouldReduceMotion ? 0 : isHovered === 'docs' ? -2 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://docs.adapty.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    View documentation
                    <motion.span
                      animate={shouldReduceMotion ? undefined : { x: isHovered === 'docs' ? 3 : 0 }}
                      transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="ml-2 size-4" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    Start for free
                  </Link>
                </motion.div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Code snippet */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full overflow-hidden rounded-xl border bg-zinc-950 shadow-lg"
            >
              <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={350} />
              <SDKInstallMagic />
              <PlatformBadgesMagic />
              <BorderBeam
                size={200}
                duration={12}
                delay={9}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
              />
              {/* Code header */}
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-zinc-500">AdaptySubscriptions.swift</span>
              </div>
              {/* Code content */}
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
                <code className="text-zinc-300">
                  {CODE_SNIPPET.split('\n').map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {line.startsWith('//') ? (
                        <span className="text-zinc-500">{line}</span>
                      ) : line.includes('Adapty') || line.includes('profile') ? (
                        <>
                          {line.split(/(Adapty\.\w+|profile\.\w+\[?"?\w*"?\]?\.?\w*|"[^"]*"|try|await|let|if|self)/).map((part, j) => {
                            if (part.startsWith('Adapty.') || part.startsWith('profile.')) return <span key={j} className="text-purple-400">{part}</span>;
                            if (part.startsWith('"')) return <span key={j} className="text-green-400">{part}</span>;
                            if (['try', 'await', 'let', 'if', 'self'].includes(part)) return <span key={j} className="text-pink-400">{part}</span>;
                            return <span key={j}>{part}</span>;
                          })}
                        </>
                      ) : line.includes('enablePremiumFeatures') ? (
                        <>
                          {line.split(/(enablePremiumFeatures\(\))/).map((part, j) => {
                            if (part === 'enablePremiumFeatures()') return <span key={j} className="text-blue-400">{part}</span>;
                            return <span key={j}>{part}</span>;
                          })}
                        </>
                      ) : (
                        line
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
