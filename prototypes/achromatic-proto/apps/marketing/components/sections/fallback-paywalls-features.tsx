'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ShieldCheckIcon,
  LayersIcon,
  RefreshCwIcon,
  ArrowRightIcon,
  CloudIcon,
  DatabaseIcon,
  ServerIcon,
  WifiIcon,
  WifiOffIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  ArrowDownIcon,
  ZapIcon,
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

// Shield Tolerance Magic - Animated uptime visualization with pulse rings
function ShieldMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [percentage, setPercentage] = React.useState(97);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPercentage(100);
      return;
    }
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;
        return 97;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[100px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex items-center justify-center gap-6">
      <div className="relative">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ShieldCheckIcon className="size-14 text-emerald-500" />
        </motion.div>
        {/* Pulse rings */}
        {!shouldReduceMotion && [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-emerald-500/30"
            animate={{
              scale: [1, 2.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-baseline gap-1">
          <motion.span
            key={percentage}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-emerald-500"
          >
            {percentage}
          </motion.span>
          <span className="text-2xl font-bold text-emerald-500">%</span>
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">Guaranteed uptime</span>
        <div className="flex items-center gap-1 mt-1">
          <CheckCircle2Icon className="size-3 text-emerald-500" />
          <span className="text-[8px] text-emerald-600">All systems operational</span>
        </div>
      </div>
    </div>
  );
}

// Multi-Cache Layers Magic - Interactive cascading fallback visualization
function CacheLayersMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = React.useState(0);
  const layers = [
    { icon: WifiIcon, label: 'Network', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: CloudIcon, label: 'CDN', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: ServerIcon, label: 'Device', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { icon: DatabaseIcon, label: 'Offline', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % (layers.length + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, layers.length]);

  return (
    <div className="mt-6 h-[100px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center justify-between h-full">
        {layers.map((layer, i) => (
          <React.Fragment key={layer.label}>
            <motion.div
              animate={{
                scale: activeLayer === i ? 1.15 : 1,
                y: activeLayer === i ? -4 : 0,
              }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
              className="flex flex-col items-center gap-1.5"
            >
              <motion.div
                animate={{
                  backgroundColor: activeLayer >= i
                    ? i === layers.length - 1 ? 'rgb(16 185 129 / 0.2)' : 'rgb(239 68 68 / 0.2)'
                    : 'hsl(var(--muted))',
                }}
                className={cn(
                  "flex size-10 items-center justify-center rounded-xl transition-all duration-300",
                  activeLayer === i ? layer.bg : "bg-muted"
                )}
              >
                {activeLayer >= i && i < activeLayer ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <AlertTriangleIcon className="size-5 text-red-500" />
                  </motion.div>
                ) : activeLayer === layers.length && i === layers.length - 1 ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <CheckCircle2Icon className="size-5 text-emerald-500" />
                  </motion.div>
                ) : (
                  <layer.icon className={cn(
                    "size-5 transition-colors",
                    activeLayer === i ? layer.color : "text-muted-foreground"
                  )} />
                )}
              </motion.div>
              <span className={cn(
                "text-[8px] font-medium transition-colors",
                activeLayer === i ? layer.color : "text-muted-foreground"
              )}>
                {layer.label}
              </span>
            </motion.div>
            {i < layers.length - 1 && (
              <motion.div
                animate={{
                  opacity: activeLayer > i ? 1 : 0.3,
                  scale: activeLayer === i + 1 ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRightIcon className={cn(
                  "size-4",
                  activeLayer > i ? "text-red-400" : "text-muted-foreground/30"
                )} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Auto Restore Magic - Data sync with event queue visualization
function AutoRestoreMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [events, setEvents] = React.useState([
    { id: 1, status: 'pending' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'pending' },
  ]);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setEvents((prev) => {
        const pending = prev.filter((e) => e.status === 'pending');
        if (pending.length === 0) {
          return [
            { id: Date.now(), status: 'pending' },
            { id: Date.now() + 1, status: 'pending' },
            { id: Date.now() + 2, status: 'pending' },
          ];
        }
        return prev.map((e, i) =>
          i === prev.findIndex((x) => x.status === 'pending')
            ? { ...e, status: 'synced' }
            : e
        );
      });
    }, 600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[100px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex items-center gap-4">
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="flex size-12 items-center justify-center rounded-xl bg-primary/10 shrink-0"
      >
        <RefreshCwIcon className="size-6 text-primary" />
      </motion.div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] font-medium text-muted-foreground">Event Queue</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono">
            {events.filter((e) => e.status === 'synced').length}/{events.length} synced
          </span>
        </div>
        <div className="flex gap-2">
          <AnimatePresence mode="popLayout">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  backgroundColor: event.status === 'synced'
                    ? 'rgb(16 185 129 / 0.2)'
                    : 'hsl(var(--muted))',
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex-1 h-8 rounded-lg flex items-center justify-center"
              >
                {event.status === 'synced' ? (
                  <CheckCircle2Icon className="size-4 text-emerald-500" />
                ) : (
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-amber-500/50"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Offline Paywall Magic - Shows fallback flow
function OfflinePaywallMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [isOffline, setIsOffline] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIsOffline((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[100px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex flex-col items-center justify-center">
      <div className="flex items-center gap-4">
        <motion.div
          animate={{
            backgroundColor: isOffline ? 'rgb(239 68 68 / 0.2)' : 'rgb(16 185 129 / 0.2)',
          }}
          className="flex size-10 items-center justify-center rounded-xl"
        >
          {isOffline ? (
            <WifiOffIcon className="size-5 text-red-500" />
          ) : (
            <WifiIcon className="size-5 text-emerald-500" />
          )}
        </motion.div>
        <motion.div
          animate={{ x: isOffline ? [0, 5, 0] : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRightIcon className="size-4 text-muted-foreground" />
        </motion.div>
        <motion.div
          animate={{
            scale: isOffline ? 1.1 : 1,
            borderColor: isOffline ? 'rgb(139 92 246 / 0.5)' : 'hsl(var(--border))',
          }}
          className="px-4 py-2 rounded-lg border bg-card"
        >
          <span className="text-[10px] font-medium">
            {isOffline ? 'Fallback Paywall' : 'Live Paywall'}
          </span>
        </motion.div>
        <motion.div
          animate={{ x: isOffline ? [0, 5, 0] : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <ArrowRightIcon className="size-4 text-muted-foreground" />
        </motion.div>
        <motion.div
          animate={{
            backgroundColor: 'rgb(16 185 129 / 0.2)',
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex size-10 items-center justify-center rounded-xl"
        >
          <CheckCircle2Icon className="size-5 text-emerald-500" />
        </motion.div>
      </div>
      <motion.p
        key={isOffline ? 'offline' : 'online'}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[9px] text-muted-foreground mt-3"
      >
        {isOffline ? 'Network down - using cached paywall' : 'Connected - serving live paywall'}
      </motion.p>
    </div>
  );
}

// Zero Revenue Loss Magic - Revenue protection visualization
function ZeroRevenueLossMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [protected_, setProtected] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setProtected(100);
      return;
    }
    const interval = setInterval(() => {
      setProtected((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 150);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[100px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-medium text-muted-foreground">Revenue protected</span>
          <span className="text-[9px] font-mono text-emerald-500">{protected_}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${protected_}%` }}
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={shouldReduceMotion ? {} : { x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[8px] text-muted-foreground">$0 lost</span>
          <span className="text-[8px] text-emerald-500 font-medium">$12.4K protected</span>
        </div>
      </div>
    </div>
  );
}

// Instant Recovery Magic - Fast recovery time visualization
function InstantRecoveryMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [ms, setMs] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setMs(50);
      return;
    }
    const interval = setInterval(() => {
      setMs((prev) => (prev >= 50 ? 0 : prev + 2));
    }, 80);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[100px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex items-center justify-center gap-6">
      <motion.div
        animate={shouldReduceMotion ? {} : {
          rotate: [0, 360],
        }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
        className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10"
      >
        <ZapIcon className="size-6 text-amber-500" />
      </motion.div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-foreground">&lt;</span>
          <motion.span
            key={ms}
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-amber-500 font-mono"
          >
            {ms}
          </motion.span>
          <span className="text-lg font-medium text-muted-foreground">ms</span>
        </div>
        <span className="text-[10px] text-muted-foreground">Fallback switch time</span>
      </div>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

const FEATURES = [
  {
    id: 'tolerance',
    title: '100% fall tolerance',
    description: 'Download your paywalls and use them in case Adapty is unavailable. Subscribe customers in any circumstance and never miss one.',
    icon: ShieldCheckIcon,
    link: 'https://adapty.io/docs/fallback-paywalls',
    linkText: 'Learn more',
    magic: ShieldMagic,
  },
  {
    id: 'cache',
    title: 'Multi-cache layers of security',
    description: "Adapty caches paywalls on the offline, device, CDN, network, and database layers. We make sure you get 100% availability in the most extreme cases.",
    icon: LayersIcon,
    magic: CacheLayersMagic,
  },
  {
    id: 'restore',
    title: 'Auto data restore',
    description: "Adapty never misses a single subscription event from subscribers. If our servers are unavailable, we'll auto-restore data on the next launch.",
    icon: RefreshCwIcon,
    link: 'https://status.adapty.io/',
    linkText: 'Check the system status',
    magic: AutoRestoreMagic,
  },
  {
    id: 'offline',
    title: 'Works offline',
    description: 'Your paywalls continue to function even without an internet connection, ensuring a seamless user experience.',
    icon: WifiOffIcon,
    magic: OfflinePaywallMagic,
  },
  {
    id: 'revenue',
    title: 'Zero revenue loss',
    description: 'Never lose a potential subscriber due to technical issues. Fallback paywalls ensure every purchase opportunity is captured.',
    icon: DatabaseIcon,
    magic: ZeroRevenueLossMagic,
  },
  {
    id: 'recovery',
    title: 'Instant recovery',
    description: 'Switch to fallback paywalls in under 50ms, so fast your users will never notice any disruption.',
    icon: ZapIcon,
    magic: InstantRecoveryMagic,
  },
];

const STATS = [
  { value: '500M+', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' },
];

const RELATED_PAGES = [
  { name: 'Subscriber sync', href: '/subscription-sync' },
  { name: 'Subscription SDK', href: '/sdk' },
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
              "flex size-14 items-center justify-center rounded-2xl transition-colors duration-300",
              isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
            )}
          >
            <feature.icon className="size-7" />
          </motion.div>
          <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors duration-200">
            {feature.title}
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>

          {MagicComponent && <MagicComponent />}

          {feature.link && (
            <Link
              href={feature.link}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group/link"
            >
              {feature.linkText}
              <motion.span
                animate={shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon className="size-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.span>
            </Link>
          )}
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
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.08 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
      className="relative overflow-hidden"
    >
      <div className={cn(
        "rounded-2xl border bg-card p-6 text-center transition-all duration-300 relative overflow-hidden",
        isHovered && "border-primary/40 shadow-lg shadow-primary/5"
      )}>
        <Spotlight
          className="from-primary/20 via-primary/5 to-transparent"
          size={200}
        />
        <motion.div
          animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.15 : 1 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
          className="text-4xl font-bold text-primary relative z-10"
        >
          {stat.value}
        </motion.div>
        <div className="mt-2 text-sm text-muted-foreground relative z-10">{stat.label}</div>
      </div>
    </motion.div>
  );
}

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
        href={page.href}
        className={cn(
          "flex items-center gap-2 rounded-xl border bg-card px-5 py-3.5 text-sm font-medium transition-all duration-200",
          isHovered && "border-primary/40 text-primary shadow-lg shadow-primary/5"
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

export function FallbackPaywallsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2200} />
      <div className="container py-20 md:py-28 relative z-10">
        {/* Features */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Never miss a subscription"
            description="Enterprise-grade reliability ensures your paywalls work even when things go wrong. Zero downtime, zero revenue loss."
          />
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.id} delay={0.1 + index * 0.05}>
              <FeatureCard feature={feature} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.45}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="mt-20"
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
              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.div
                  animate={shouldReduceMotion ? {} : { rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6"
                >
                  <ShieldCheckIcon className="size-6" />
                </motion.div>
                <blockquote className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                  "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android. The fallback system gives us peace of mind."
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-lg">Magnus Olafsson</p>
                  <p className="text-muted-foreground">Chief Technology Officer at Smitten</p>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.55}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <BlurFade key={stat.label} delay={0.6 + index * 0.05}>
                  <StatCard stat={stat} index={index} />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Learn More */}
        <BlurFade delay={0.75}>
          <div className="mt-20">
            <h2 className="text-xl font-semibold text-center">Learn more</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <BlurFade key={page.href} delay={0.8 + index * 0.05}>
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
