'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  SlidersHorizontalIcon,
  BarChartIcon,
  GlobeIcon,
  TableIcon,
  ArrowRightIcon,
  CodeIcon,
  SettingsIcon,
  CloudIcon,
  RefreshCwIcon,
  CheckCircle2Icon,
  ZapIcon,
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

// Config Slider Magic - Animated sliders with live adjustment feel
function ConfigSliderMagic() {
  const shouldReduceMotion = useReducedMotion();
  const sliders = [
    { label: 'Price', value: 65, color: 'bg-primary' },
    { label: 'Trial', value: 40, color: 'bg-emerald-500' },
    { label: 'Offer', value: 85, color: 'bg-amber-500' },
  ];

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex flex-col gap-2.5">
      {sliders.map((slider, i) => (
        <div key={slider.label} className="flex items-center gap-3">
          <span className="text-[9px] font-medium text-muted-foreground w-8">{slider.label}</span>
          <div className="flex-1 h-2 bg-muted/80 rounded-full overflow-hidden relative">
            <motion.div
              animate={shouldReduceMotion ? { width: `${slider.value}%` } : {
                width: [`${slider.value - 15}%`, `${slider.value}%`, `${slider.value - 8}%`, `${slider.value + 5}%`],
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className={cn("h-full rounded-full relative", slider.color)}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md border-2 border-current"
                style={{ borderColor: 'inherit' }}
              />
            </motion.div>
          </div>
          <motion.span
            animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] font-mono text-muted-foreground w-6 text-right"
          >
            {slider.value}%
          </motion.span>
        </div>
      ))}
    </div>
  );
}

// Auto Measuring Magic - Live chart with data updates
function AutoMeasuringMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [30, 45, 55, 40, 65, 75, 60, 80];

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <RefreshCwIcon className="size-3 text-primary" />
        </motion.div>
        <span className="text-[8px] font-medium text-muted-foreground">Live metrics</span>
      </div>
      <div className="flex items-end gap-1 h-[50px]">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={shouldReduceMotion ? { height: `${h}%` } : {
              height: [`${h - 20}%`, `${h}%`, `${h - 10}%`, `${h + 10}%`],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
            className={cn(
              "flex-1 rounded-t-sm relative overflow-hidden",
              i >= bars.length - 2 ? "bg-primary" : "bg-muted-foreground/30"
            )}
          >
            {i >= bars.length - 2 && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"
                animate={shouldReduceMotion ? {} : { opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Localization Magic - Language switching with flag animation
function LocalizationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Spanish' },
    { code: 'DE', name: 'German' },
    { code: 'FR', name: 'French' },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % languages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, languages.length]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center justify-center gap-3">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.code}
            animate={{
              scale: i === activeIndex ? 1.2 : 1,
              y: i === activeIndex ? -4 : 0,
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
            className={cn(
              "relative w-10 h-10 rounded-lg flex items-center justify-center text-[11px] font-bold transition-colors duration-200",
              i === activeIndex
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground"
            )}
          >
            {lang.code}
            {i === activeIndex && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle2Icon className="size-2 text-white" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.p
        key={activeIndex}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-3 text-[9px] text-muted-foreground"
      >
        {languages[activeIndex].name} locale active
      </motion.p>
    </div>
  );
}

// View Toggle Magic - JSON/Table switch with preview
function ViewToggleMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [isJson, setIsJson] = React.useState(true);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIsJson((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex gap-2 mb-3">
        <motion.button
          animate={{
            backgroundColor: isJson ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
            scale: isJson ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "px-3 py-1.5 rounded-md text-[9px] font-medium flex items-center gap-1.5",
            isJson ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          <CodeIcon className="size-3" />
          JSON
        </motion.button>
        <motion.button
          animate={{
            backgroundColor: !isJson ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
            scale: !isJson ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "px-3 py-1.5 rounded-md text-[9px] font-medium flex items-center gap-1.5",
            !isJson ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          <TableIcon className="size-3" />
          Table
        </motion.button>
      </div>
      <motion.div
        key={isJson ? 'json' : 'table'}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="h-[36px] rounded-md bg-muted/60 flex items-center justify-center overflow-hidden"
      >
        {isJson ? (
          <code className="text-[8px] text-muted-foreground font-mono">
            {`{ "price": 9.99 }`}
          </code>
        ) : (
          <div className="flex gap-2 text-[8px] text-muted-foreground">
            <span className="px-2 py-0.5 bg-muted rounded">Price</span>
            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded font-mono">9.99</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Cloud Sync Magic - Real-time sync visualization
function CloudSyncMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [syncState, setSyncState] = React.useState<'syncing' | 'synced'>('syncing');

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setSyncState((prev) => prev === 'syncing' ? 'synced' : 'syncing');
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4 flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: syncState === 'syncing' ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.8, repeat: syncState === 'syncing' ? Infinity : 0 }}
        >
          <CloudIcon className={cn(
            "size-8 transition-colors duration-300",
            syncState === 'synced' ? "text-emerald-500" : "text-primary"
          )} />
        </motion.div>
        {syncState === 'syncing' && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1 -right-1"
          >
            <RefreshCwIcon className="size-3 text-primary" />
          </motion.div>
        )}
        {syncState === 'synced' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -bottom-1 -right-1"
          >
            <CheckCircle2Icon className="size-4 text-emerald-500" />
          </motion.div>
        )}
      </div>
      <motion.p
        key={syncState}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[9px] text-muted-foreground mt-2"
      >
        {syncState === 'syncing' ? 'Syncing changes...' : 'All changes synced'}
      </motion.p>
    </div>
  );
}

// Instant Deploy Magic - Zero downtime deployment
function InstantDeployMagic() {
  const shouldReduceMotion = useReducedMotion();
  const devices = ['iOS', 'Android', 'Web'];
  const [deployedCount, setDeployedCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setDeployedCount((prev) => (prev + 1) % 4);
    }, 800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="mt-6 h-[90px] rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-4">
      <div className="flex items-center gap-2 mb-3">
        <ZapIcon className="size-3 text-amber-500" />
        <span className="text-[9px] font-medium text-muted-foreground">Instant deployment</span>
      </div>
      <div className="flex justify-center gap-3">
        {devices.map((device, i) => (
          <motion.div
            key={device}
            animate={{
              scale: i < deployedCount ? 1.1 : 1,
              opacity: i < deployedCount ? 1 : 0.5,
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.4 }}
            className={cn(
              "px-3 py-2 rounded-lg text-[9px] font-medium flex items-center gap-1.5 transition-colors",
              i < deployedCount
                ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30"
                : "bg-muted text-muted-foreground"
            )}
          >
            {i < deployedCount && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <CheckCircle2Icon className="size-3" />
              </motion.span>
            )}
            {device}
          </motion.div>
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
    id: 'customize',
    icon: SlidersHorizontalIcon,
    title: 'Customize anything',
    description: "Use Adapty's Remote Config to personalize the app monetization experience. It works best when you measure the effect in revenue.",
    magic: ConfigSliderMagic,
  },
  {
    id: 'measuring',
    icon: BarChartIcon,
    title: 'Auto measuring',
    description: "Customize your paywall or run an A/B test by making changes to the remote config and Adapty will measure all subscription metrics for you.",
    link: '/paywall-ab-testing',
    linkText: 'More about paywall A/B testing',
    magic: AutoMeasuringMagic,
  },
  {
    id: 'localization',
    icon: GlobeIcon,
    title: 'Localization',
    description: 'Add new locales as separate JSONs and conveniently edit all the translations.',
    link: '/paywall-localization',
    linkText: 'More about localizations',
    magic: LocalizationMagic,
  },
  {
    id: 'view',
    icon: TableIcon,
    title: 'Table or JSON view',
    description: 'Choose the developer- or marketing-friendly view to work with the remote config.',
    magic: ViewToggleMagic,
  },
  {
    id: 'sync',
    icon: CloudIcon,
    title: 'Real-time sync',
    description: 'Changes propagate instantly across all connected devices without requiring app updates or restarts.',
    magic: CloudSyncMagic,
  },
  {
    id: 'deploy',
    icon: ZapIcon,
    title: 'Zero-downtime deployment',
    description: 'Deploy config changes to millions of users instantly with automatic rollback if issues are detected.',
    magic: InstantDeployMagic,
  },
];

const RELATED_PAGES = [
  { title: 'Localize', href: '/paywall-localization' },
  { title: 'Targeting', href: '/paywall-targeting' },
  { title: 'Paywall Builder', href: '/paywall-builder' },
  { title: 'A/B testing', href: '/paywall-ab-testing' },
];

const STATS = [
  { value: '500M', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' },
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
      className="relative text-center p-6 rounded-2xl border bg-card/50 overflow-hidden group"
    >
      <Spotlight
        className="from-primary/20 via-primary/5 to-transparent"
        size={200}
      />
      <motion.p
        animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.15 : 1 }}
        transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
        className="text-4xl font-bold text-primary relative z-10"
      >
        {stat.value}
      </motion.p>
      <p className="mt-2 text-sm text-muted-foreground relative z-10">{stat.label}</p>
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

export function RemoteConfigFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2000} />
      <div className="container py-20 md:py-28 relative z-10">
        {/* Features */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Flexible remote configuration"
            description="Customize your app's monetization experience without app store updates. Deploy changes instantly."
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
        <BlurFade delay={0.4}>
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
                  <SettingsIcon className="size-6" />
                </motion.div>
                <blockquote className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                  "We like it that Adapty provides deep customization possibilities for paywalls and A/B tests. For a long time we've been using Remote config to change elements and localize our paywalls in a matter of minutes without having to wait for another app review."
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
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <BlurFade key={stat.label} delay={0.55 + index * 0.05}>
                  <StatCard stat={stat} index={index} />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Related pages */}
        <BlurFade delay={0.7}>
          <div className="mt-20">
            <h2 className="text-center text-xl font-semibold">Learn more about Paywall management</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <BlurFade key={page.href} delay={0.75 + index * 0.05}>
                  <RelatedPageLink page={page} />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.85}>
          <div className="mt-20 text-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="https://app.adapty.io/registration"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Start using Remote Config
                <ArrowRightIcon className="size-5" />
              </Link>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
