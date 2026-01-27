'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CodeIcon,
  GlobeIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  CheckCircle2Icon,
  SmartphoneIcon,
  TabletSmartphoneIcon,
  MonitorIcon,
  GamepadIcon,
  CopyIcon,
  TerminalIcon,
  ZapIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs';
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

// CDN Magic - Global network visualization
function CDNMagic() {
  const shouldReduceMotion = useReducedMotion();
  const nodes = [
    { x: 20, y: 20, delay: 0 },
    { x: 80, y: 25, delay: 0.2 },
    { x: 50, y: 50, delay: 0.1 },
    { x: 15, y: 75, delay: 0.3 },
    { x: 85, y: 70, delay: 0.4 },
  ];
  const [activeNode, setActiveNode] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, nodes.length]);

  return (
    <div className="mt-4 h-[80px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-3 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <GlobeIcon className="size-3 text-primary" />
        <span className="text-[8px] font-medium text-muted-foreground">Global CDN</span>
        <span className="text-[7px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 ml-auto">&lt;50ms</span>
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connection lines */}
        {nodes.map((node, i) => (
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity={0.2}
              animate={shouldReduceMotion ? {} : {
                strokeOpacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: (i + j) * 0.2 }}
            />
          ))
        ))}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill={i === activeNode ? "hsl(var(--primary))" : "hsl(var(--muted))"}
            animate={shouldReduceMotion ? {} : {
              scale: i === activeNode ? [1, 1.5, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
        {/* Pulse from active node */}
        {!shouldReduceMotion && (
          <motion.circle
            key={activeNode}
            cx={`${nodes[activeNode].x}%`}
            cy={`${nodes[activeNode].y}%`}
            r="4"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        )}
      </svg>
    </div>
  );
}

// Cross-platform Sync Magic - Device sync animation
function SyncMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [syncState, setSyncState] = React.useState<'ios' | 'android' | 'web' | 'synced'>('ios');

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setSyncState('synced');
      return;
    }
    const states: Array<'ios' | 'android' | 'web' | 'synced'> = ['ios', 'android', 'web', 'synced'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % states.length;
      setSyncState(states[index]);
    }, 800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const devices = [
    { id: 'ios', icon: SmartphoneIcon, label: 'iOS' },
    { id: 'android', icon: TabletSmartphoneIcon, label: 'Android' },
    { id: 'web', icon: MonitorIcon, label: 'Web' },
  ];

  return (
    <div className="mt-4 h-[80px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-3">
      <div className="flex items-center justify-center gap-3 h-full">
        {devices.map((device, i) => (
          <React.Fragment key={device.id}>
            <motion.div
              animate={{
                scale: syncState === device.id || syncState === 'synced' ? 1.1 : 1,
                opacity: syncState === device.id || syncState === 'synced' ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-1"
            >
              <motion.div
                animate={{
                  backgroundColor: syncState === 'synced'
                    ? 'rgb(16 185 129 / 0.2)'
                    : syncState === device.id
                      ? 'hsl(var(--primary) / 0.2)'
                      : 'hsl(var(--muted))',
                }}
                className="flex size-10 items-center justify-center rounded-lg"
              >
                <device.icon className={cn(
                  "size-5",
                  syncState === 'synced' ? "text-emerald-500" :
                  syncState === device.id ? "text-primary" : "text-muted-foreground"
                )} />
              </motion.div>
              <span className="text-[7px] text-muted-foreground">{device.label}</span>
            </motion.div>
            {i < devices.length - 1 && (
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  x: syncState === devices[i + 1].id ? [0, 4, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <RefreshCwIcon className={cn(
                  "size-3",
                  syncState === 'synced' ? "text-emerald-500" : "text-muted-foreground/50"
                )} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Receipt Verification Magic - Shield with check animation
function VerificationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setStep(2);
      return;
    }
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 1200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const steps = ['Receiving', 'Verifying', 'Verified'];

  return (
    <div className="mt-4 h-[80px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-3 flex items-center justify-center gap-4">
      <div className="relative">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ShieldCheckIcon className={cn(
            "size-10 transition-colors duration-300",
            step === 2 ? "text-emerald-500" : "text-primary"
          )} />
        </motion.div>
        {step === 2 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center"
          >
            <CheckCircle2Icon className="size-3 text-white" />
          </motion.div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={step}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className={cn(
              "text-sm font-medium",
              step === 2 ? "text-emerald-500" : "text-foreground"
            )}
          >
            {steps[step]}
          </motion.span>
        </AnimatePresence>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor: i <= step ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                scale: i === step ? 1.2 : 1,
              }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Data Lake Magic - Event streaming visualization
function DataLakeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [events, setEvents] = React.useState([1, 2, 3]);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setEvents((prev) => {
        const newEvents = [...prev];
        newEvents.shift();
        newEvents.push(Date.now());
        return newEvents;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-4 h-[80px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-3">
      <div className="flex items-center gap-2 mb-2">
        <DatabaseIcon className="size-3 text-primary" />
        <span className="text-[8px] font-medium text-muted-foreground">Event Stream</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 flex gap-1">
          <AnimatePresence mode="popLayout">
            {events.map((event, i) => (
              <motion.div
                key={event}
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                exit={{ scale: 0, x: 20 }}
                className={cn(
                  "flex-1 h-8 rounded-md flex items-center justify-center",
                  i === events.length - 1 ? "bg-primary/20" : "bg-muted"
                )}
              >
                <ZapIcon className={cn(
                  "size-3",
                  i === events.length - 1 ? "text-primary" : "text-muted-foreground"
                )} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <ArrowRightIcon className="size-3 text-muted-foreground" />
        <div className="w-10 h-8 rounded-md bg-emerald-500/20 flex items-center justify-center">
          <DatabaseIcon className="size-3 text-emerald-500" />
        </div>
      </div>
    </div>
  );
}

// Code Typewriter Magic - Typing animation
function CodeTypeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const codeLines = [
    'Adapty.activate()',
    'makePurchase()',
    'getPaywall()',
  ];
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setLineIndex(codeLines.length - 1);
      setCharIndex(codeLines[codeLines.length - 1].length);
      return;
    }
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        const currentLine = codeLines[lineIndex];
        if (prev >= currentLine.length) {
          setTimeout(() => {
            setLineIndex((li) => (li + 1) % codeLines.length);
            setCharIndex(0);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, lineIndex, codeLines]);

  return (
    <div className="mt-4 h-[80px] rounded-xl bg-zinc-900 border border-border/50 p-3 font-mono">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
        </div>
        <span className="text-[8px] text-zinc-500">main.swift</span>
      </div>
      <div className="text-[10px] text-emerald-400">
        {codeLines[lineIndex].slice(0, charIndex)}
        <motion.span
          animate={shouldReduceMotion ? {} : { opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-3 bg-emerald-400 ml-0.5"
        />
      </div>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

// SDK platforms
const SDKS = [
  { name: 'Swift SDK', link: '/sdk/ios/', platform: 'iOS', icon: SmartphoneIcon },
  { name: 'Kotlin SDK', link: '/sdk/android/', platform: 'Android', icon: TabletSmartphoneIcon },
  { name: 'React Native SDK', link: '/sdk/react-native/', platform: 'Cross-platform', icon: CodeIcon },
  { name: 'Unity SDK', link: '/sdk/unity/', platform: 'Game engines', icon: GamepadIcon },
  { name: 'Flutter SDK', link: '/sdk/flutter/', platform: 'Cross-platform', icon: CodeIcon },
  { name: 'Capacitor SDK', link: '/sdk/capacitor/', platform: 'Cross-platform', icon: CodeIcon },
  { name: 'KMP SDK', link: '/sdk/kmp/', platform: 'Kotlin Multiplatform', icon: CodeIcon },
  { name: 'FlutterFlow', link: '/sdk/flutterflow/', platform: 'Low-code', icon: CodeIcon },
  { name: 'Web API', link: '/sdk/web/', platform: 'Web', icon: MonitorIcon },
  { name: 'Stripe', link: '/integrations/stripe/', platform: 'Payments', icon: CodeIcon }
];

// Code examples from adapty.io/sdk
const CODE_EXAMPLES = {
  swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
  kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
  when (result) {
    is AdaptyResult.Success -> {
      if (result.value is AdaptyPurchaseResult.Success)
        // successful purchase
    }
    is AdaptyResult.Error -> {
      // handle the error
    }
  }
}`,
  reactNative: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
  const profile = await adapty.makePurchase(product);
  // successful purchase
} catch (error) {
  // handle the error
}`,
  flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

try {
  await Adapty().activate();

  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
  unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
  if (error == null) {
    // successful purchase
  }
});`
};

// Features from adapty.io/sdk
const FEATURES = [
  {
    icon: GlobeIcon,
    title: 'Fast API with worldwide CDN',
    description: 'Wherever your user is in the world, Adapty API will work blazingly fast, minimizing friction with payments.',
    magic: CDNMagic,
  },
  {
    icon: RefreshCwIcon,
    title: 'Cross-platform subscriber sync',
    description: "Adapty syncs your subscribers' state across iOS, Android, and Web. Use Adapty as a source of truth to safely grant premium access to your users.",
    link: '/subscription-sync/',
    linkText: 'Learn more about sync',
    magic: SyncMagic,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Server-side receipt verification',
    description: "You don't need to write server processing for receipt verification, we've done it for you.",
    magic: VerificationMagic,
  },
  {
    icon: DatabaseIcon,
    title: 'Ready-to-go subscription data lake',
    description: 'Adapty collects and enriches subscription events from subscribers and can push them to 3rd party services or your ETL.',
    link: '/integrations/',
    linkText: 'Learn more about integrations',
    magic: DataLakeMagic,
  }
];

// Testimonials from adapty.io/sdk
const TESTIMONIALS = [
  {
    quote: "The server-side API for subscribers is a game-changer, allowing us to check subscriber states and manage user attributes effortlessly.",
    name: 'Yana Belenkaya',
    title: 'Product manager at Locals'
  },
  {
    quote: "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel.",
    name: 'Chris Bick',
    title: 'Founder and CEO, Bickster'
  }
];

// Stats from adapty.io/sdk
const STATS = [
  { value: '500M', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' }
];

// Related pages
const RELATED_PAGES = [
  { title: 'Fallback paywalls', link: '/fallback-paywalls/' },
  { title: 'Subscriber sync', link: '/subscription-sync/' }
];

// =============================================================================
// ANIMATED COMPONENTS
// =============================================================================

// SDK Badge with hover animation
function SDKBadge({ sdk, index }: { sdk: typeof SDKS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.05 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.15 }}
    >
      <Link
        href={sdk.link}
        className={cn(
          "px-4 py-2.5 rounded-xl bg-card border text-sm font-medium transition-all duration-200 inline-flex items-center gap-2",
          isHovered ? "border-primary/40 text-primary shadow-lg shadow-primary/5" : "border-border/50"
        )}
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : {
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
        >
          <sdk.icon className="size-4" />
        </motion.div>
        {sdk.name}
      </Link>
    </motion.div>
  );
}

// Feature Card with Spotlight and hover animation
function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
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
      <div className={cn(
        "relative h-full overflow-hidden rounded-2xl border bg-card transition-all duration-300 cursor-pointer group",
        isHovered && "border-primary/40 shadow-xl shadow-primary/5"
      )}>
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
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 8 : 0,
            }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.3 }}
            className={cn(
              "flex size-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300",
              isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
            )}
          >
            <feature.icon className="size-7" />
          </motion.div>
          <h3 className="font-semibold text-xl mt-6 mb-3 group-hover:text-primary transition-colors duration-200">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">{feature.description}</p>

          {MagicComponent && <MagicComponent />}

          {feature.link && feature.linkText && (
            <Link
              href={feature.link}
              className="mt-4 text-sm text-primary hover:underline inline-flex items-center gap-2 font-medium"
            >
              {feature.linkText}
              <motion.span
                animate={shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon className="size-4" />
              </motion.span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Testimonial Card with Spotlight
function TestimonialCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
      transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-2xl border bg-card transition-all duration-300",
        isHovered && "border-primary/40 shadow-xl shadow-primary/5"
      )}>
        <Spotlight
          className="from-primary/20 via-primary/5 to-transparent"
          size={250}
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
            animate={shouldReduceMotion ? {} : { rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4"
          >
            <CodeIcon className="size-5" />
          </motion.div>
          <p className="text-lg text-foreground italic leading-relaxed mb-6">"{testimonial.quote}"</p>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Stat Card with hover animation
function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.08 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
      className="text-center relative p-6 rounded-2xl border bg-card/50 overflow-hidden"
    >
      <Spotlight
        className="from-primary/20 via-primary/5 to-transparent"
        size={200}
      />
      <motion.p
        animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.15 : 1 }}
        transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary relative z-10"
      >
        {stat.value}
      </motion.p>
      <p className="text-sm text-muted-foreground mt-2 relative z-10">{stat.label}</p>
    </motion.div>
  );
}

// Related Page Link with arrow animation
function RelatedPageLink({ page }: { page: typeof RELATED_PAGES[0] }) {
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
        href={page.link}
        className={cn(
          "px-6 py-3.5 rounded-xl bg-card border font-medium transition-all duration-200 inline-flex items-center gap-2",
          isHovered && "border-primary/40 text-primary shadow-lg shadow-primary/5"
        )}
      >
        {page.title}
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

export function SDKFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2800} />
      <div className="container py-20 md:py-28 relative z-10">
        {/* SDK Picker */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Pick the SDK for your platform"
            description="Native SDKs for every major platform. Get started in minutes with our developer-friendly documentation."
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SDKS.map((sdk, index) => (
              <SDKBadge key={index} sdk={sdk} index={index} />
            ))}
          </div>
        </BlurFade>

        {/* Developer-friendly SDK with code examples */}
        <BlurFade delay={0.2}>
          <div className="mt-24">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Developer-friendly SDK</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get started with in-app payments in a couple of hours, even if you do it from scratch. You only need 3 SDK methods to begin.
              </p>
              <Link
                href="https://adapty.io/docs/quickstart-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-2 mt-4"
              >
                Get started with SDK
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>

            <Tabs defaultValue="swift" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-5 mb-4">
                <TabsTrigger value="swift" className="text-sm">Swift</TabsTrigger>
                <TabsTrigger value="kotlin" className="text-sm">Kotlin</TabsTrigger>
                <TabsTrigger value="reactNative" className="text-sm">React Native</TabsTrigger>
                <TabsTrigger value="flutter" className="text-sm">Flutter</TabsTrigger>
                <TabsTrigger value="unity" className="text-sm">Unity</TabsTrigger>
              </TabsList>
              {Object.entries(CODE_EXAMPLES).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  >
                    <Card className="bg-zinc-950 border-border/50 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-500/70" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                            </div>
                            <span className="text-xs text-zinc-500 ml-2">main.{key === 'swift' ? 'swift' : key === 'kotlin' ? 'kt' : key === 'flutter' ? 'dart' : key === 'unity' ? 'cs' : 'js'}</span>
                          </div>
                          <motion.button
                            onClick={() => handleCopy(code)}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                            className="text-zinc-500 hover:text-zinc-300 transition-colors"
                          >
                            {copied ? (
                              <CheckCircle2Icon className="size-4 text-emerald-500" />
                            ) : (
                              <CopyIcon className="size-4" />
                            )}
                          </motion.button>
                        </div>
                        <pre className="text-sm text-zinc-300 overflow-x-auto p-6">
                          <code>{code}</code>
                        </pre>
                        <div className="px-4 py-3 border-t border-zinc-800 flex items-center justify-between">
                          <span className="text-xs text-zinc-500 flex items-center gap-2">
                            <TerminalIcon className="size-3" />
                            100% Open Source
                          </span>
                          <Link
                            href="https://github.com/adaptyteam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                          >
                            Go to GitHub
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </BlurFade>

        {/* Features grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.05}>
              <FeatureCard feature={feature} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Testimonials */}
        <BlurFade delay={0.5}>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </BlurFade>

        {/* Stats section */}
        <BlurFade delay={0.6}>
          <div className="mt-24">
            <SiteHeading title="Enterprise-grade battle-tested solution" />
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, index) => (
                <BlurFade key={index} delay={0.65 + index * 0.05}>
                  <StatCard stat={stat} index={index} />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.8}>
          <div className="mt-24">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <BlurFade key={index} delay={0.85 + index * 0.05}>
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
