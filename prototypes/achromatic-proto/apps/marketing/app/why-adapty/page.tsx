'use client';

import * as React from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { GridSection } from "~/components/fragments/grid-section";
import { SectionBackground } from "~/components/fragments/section-background";
import { SiteHeading } from "~/components/fragments/site-heading";
import { BlurFade } from "~/components/fragments/blur-fade";
import { Spotlight } from "~/components/fragments/spotlight";
import { BorderBeam } from "~/components/fragments/border-beam";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight, CheckIcon, XIcon, CodeIcon, UsersIcon, BarChartIcon, TrendingUpIcon, ZapIcon, TargetIcon } from "lucide-react";
import Link from "next/link";
import {
  LogosSwitcher,
  TestimonialsSwitcher,
  CTASwitcher,
} from '~/components/sections/section-switchers';

// Why Adapty page: Feature comparison and benefits

const FEATURES = [
  {
    title: "Add in-app payments without server code",
    description:
      "Integrate in-app purchases quickly with Adapty's SDK. We handle server-side verification, subscription events, and more.",
    link: "/sdk",
    linkText: "Get started with SDK",
    icon: CodeIcon,
  },
  {
    title: "Sync subscriptions across platforms and services",
    description:
      "Manage all subscribers in one place and forward subscription events to analytics, attribution, and ad services with one-click integrations.",
    link: "/integrations",
    linkText: "Check integrations",
    icon: UsersIcon,
  },
  {
    title: "Create custom paywalls in minutes",
    description:
      "Build and launch paywalls from your dashboard with our no-code paywall builder or customize your own with remote config.",
    link: "/paywall-builder",
    linkText: "Learn more",
    icon: ZapIcon,
  },
  {
    title: "Target the right audience with your paywalls",
    description:
      "Segment users by country, store, ad or custom attributes, and localize in any language - all from your dashboard.",
    link: "/paywall-targeting",
    linkText: "Learn more",
    icon: TargetIcon,
  },
  {
    title: "Run A/B tests with winner prediction",
    description:
      "Launch paywall A/B tests with real-time metrics and AI-powered predictive models to predict a test winner.",
    link: "/paywall-ab-testing",
    linkText: "Learn more",
    icon: BarChartIcon,
  },
  {
    title: "Gain insights with analytics and AI predictions",
    description:
      "Track metrics like ARR, MRR, and LTV in real time. Use AI predictions to forecast LTV and revenue.",
    link: "/predictive-analytics",
    linkText: "Learn more",
    icon: TrendingUpIcon,
  },
];

const COMPARISON_DATA = [
  { feature: "In-App purchases SDK", adapty: true, revenuecat: true, qonversion: true, superwall: true },
  { feature: "StoreKit 2 and Billing 5/6 support", adapty: true, revenuecat: true, qonversion: true, superwall: true },
  { feature: "Sales funnel", adapty: true, revenuecat: false, qonversion: false, superwall: false },
  { feature: "Conversions", adapty: "10 metrics", revenuecat: "3 metrics", qonversion: "2 metrics", superwall: "3 metrics" },
  { feature: "Revenue and LTV prediction with ML", adapty: true, revenuecat: "Beta-version", qonversion: false, superwall: false },
  { feature: "Prediction of the winner in an A/B test", adapty: true, revenuecat: false, qonversion: false, superwall: false },
  { feature: "Paywall A/B testing", adapty: true, revenuecat: true, qonversion: true, superwall: true },
  { feature: "Onboarding A/B testing", adapty: true, revenuecat: false, qonversion: true, superwall: true },
  { feature: "Paywall and onboarding localizations", adapty: "70+ languages", revenuecat: "Only through Offering metadata", qonversion: "18 languages", superwall: false },
  { feature: "Targeted paywalls and A/B tests", adapty: true, revenuecat: "Paywalls only", qonversion: "Yes, but no targeting by attribution", superwall: "Yes, but only by country and store" },
  { feature: "No-code Paywall Builder", adapty: "Yes, 100% custom paywalls", revenuecat: "Yes, 5 templates", qonversion: true, superwall: true },
  { feature: "Discount on Pro plans for startups", adapty: true, revenuecat: false, qonversion: false, superwall: false },
];

function StatusIcon({ value }: { value: boolean | string }): React.JSX.Element {
  if (value === true) {
    return (
      <div className="flex size-6 items-center justify-center rounded-full bg-green-500/20">
        <CheckIcon className="size-4 text-green-500" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex size-6 items-center justify-center rounded-full bg-muted">
        <XIcon className="size-4 text-muted-foreground/50" />
      </div>
    );
  }
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// LTV Growth animation
function LTVGrowthMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPercentage(24);
      return;
    }

    let frame: number;
    const duration = 2000;
    const targetValue = 24;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercentage(Math.floor(targetValue * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
        <TrendingUpIcon className="size-4 text-primary" />
        <span className="text-sm font-medium text-primary">+24% LTV in 3 months</span>
      </div>
    );
  }

  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <TrendingUpIcon className="size-4 text-primary" />
      </motion.div>
      <span className="text-sm font-medium text-primary">+{percentage}% LTV in 3 months</span>
    </motion.div>
  );
}

// Growth bar chart animation
function GrowthChartMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [30, 45, 40, 60, 55, 75, 70, 85, 90];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-end gap-1 h-12 justify-center py-2">
        {bars.map((h, i) => (
          <div key={i} className="w-2 bg-primary/60 rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-1 h-12 justify-center py-2">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-2 bg-primary/60 rounded-sm"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
        />
      ))}
    </div>
  );
}

export default function WhyAdaptyPage(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredRole, setHoveredRole] = React.useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <GridSection className="relative overflow-hidden">
        <SectionBackground height={800} />
        <div className="container py-16 md:py-24 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <BlurFade delay={0.1}>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Why Adapty?
              </span>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="mt-4">
                <SiteHeading
                  title="Boost your app revenue with minimal effort"
                  description="Adapty empowers you to integrate in-app purchases, set up paywalls, and run A/B tests - without app updates. Use our low-code solution to boost LTV by an average of 24% in just three months."
                />
              </div>
            </BlurFade>
            <BlurFade delay={0.25}>
              <div className="mt-6 flex justify-center">
                <LTVGrowthMagic />
              </div>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg">
                    <Link href="/schedule-demo">Book a demo</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://app.adapty.io/registration">
                      Start for free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </BlurFade>
          </div>
        </div>
      </GridSection>

      {/* Role Benefits */}
      <GridSection>
        <div className="container py-16">
          <BlurFade delay={0.1}>
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade platform, still easy to use
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "For engineering", description: "Manage subscription logic and integrations without building and maintaining the backend logic yourself.", link: "/for-developers", icon: CodeIcon },
              { title: "For marketing", description: "Launch paywall tests and double your conversion rates without releasing a new app version.", link: "/for-marketers", icon: TargetIcon },
              { title: "For product", description: "Make data-driven decisions with subscription metrics and real-time data.", link: "/paywall-ab-testing", icon: BarChartIcon },
            ].map((role, index) => {
              const Icon = role.icon;
              const isHovered = hoveredRole === index;
              return (
                <BlurFade key={role.title} delay={0.15 + index * 0.05}>
                  <motion.div
                    onMouseEnter={() => setHoveredRole(index)}
                    onMouseLeave={() => setHoveredRole(null)}
                    animate={shouldReduceMotion ? undefined : {
                      y: isHovered ? -6 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  >
                    <Card className={cn(
                      "h-full relative overflow-hidden transition-all duration-200",
                      isHovered && "border-primary/50 shadow-lg"
                    )}>
                      <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />
                      {isHovered && (
                        <BorderBeam
                          size={120}
                          duration={8}
                          borderWidth={1.5}
                          colorFrom="hsl(var(--primary))"
                          colorTo="hsl(var(--primary)/0)"
                        />
                      )}
                      <CardContent className="p-6 relative z-10">
                        <motion.div
                          className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4"
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 5 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                        >
                          <Icon className="size-5 text-primary" />
                        </motion.div>
                        <h3 className={cn(
                          "font-semibold transition-colors duration-150",
                          isHovered && "text-primary"
                        )}>
                          {role.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {role.description}
                        </p>
                        <Link href={role.link} className="text-primary mt-4 inline-flex items-center text-sm font-medium group">
                          Learn more
                          <motion.span
                            animate={shouldReduceMotion ? undefined : {
                              x: isHovered ? 4 : 0,
                            }}
                            transition={{ duration: 0.15 }}
                          >
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </motion.span>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </GridSection>

      {/* Features */}
      <GridSection className="relative overflow-hidden">
        <SectionBackground height={800} />
        <div className="container py-16 relative z-10">
          <BlurFade delay={0.1}>
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Why choose Adapty?
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;
              return (
                <BlurFade key={feature.title} delay={0.15 + index * 0.03}>
                  <motion.div
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    animate={shouldReduceMotion ? undefined : {
                      y: isHovered ? -6 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  >
                    <Card className={cn(
                      "h-full relative overflow-hidden transition-all duration-200",
                      isHovered && "border-primary/50 shadow-lg"
                    )}>
                      <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={220} />
                      {isHovered && (
                        <BorderBeam
                          size={120}
                          duration={8}
                          borderWidth={1.5}
                          colorFrom="hsl(var(--primary))"
                          colorTo="hsl(var(--primary)/0)"
                        />
                      )}
                      <CardContent className="p-6 relative z-10">
                        <motion.div
                          className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4"
                          animate={shouldReduceMotion ? undefined : {
                            scale: isHovered ? 1.15 : 1,
                            rotate: isHovered ? 8 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                        >
                          <Icon className="size-5 text-primary" />
                        </motion.div>
                        <h3 className={cn(
                          "font-semibold transition-colors duration-150",
                          isHovered && "text-primary"
                        )}>
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                        <Link href={feature.link} className="text-primary mt-4 inline-flex items-center text-sm font-medium">
                          {feature.linkText}
                          <motion.span
                            animate={shouldReduceMotion ? undefined : {
                              x: isHovered ? 4 : 0,
                              opacity: isHovered ? 1 : 0.7,
                            }}
                            transition={{ duration: 0.15 }}
                          >
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </motion.span>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </GridSection>

      {/* Comparison Table */}
      <GridSection>
        <div className="container py-16">
          <BlurFade delay={0.1}>
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Adapty vs alternatives
            </h2>
            <div className="flex justify-center mt-4">
              <GrowthChartMagic />
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            {/* Mobile: Card-based layout */}
            <div className="mt-12 space-y-4 md:hidden">
              {COMPARISON_DATA.map((row, index) => (
                <Card key={row.feature} className="overflow-hidden">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-3">{row.feature}</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-primary/5">
                        <span className="text-primary font-medium">Adapty</span>
                        <StatusIcon value={row.adapty} />
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-muted-foreground">RevenueCat</span>
                        <StatusIcon value={row.revenuecat} />
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-muted-foreground">Qonversion</span>
                        <StatusIcon value={row.qonversion} />
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-muted-foreground">Superwall</span>
                        <StatusIcon value={row.superwall} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Desktop: Table layout */}
            <div className="mt-12 hidden md:block rounded-xl border bg-card/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="py-4 px-4 text-left font-semibold">Features</th>
                    <th className="py-4 px-4 text-center font-semibold text-primary">Adapty</th>
                    <th className="py-4 px-4 text-center font-semibold text-muted-foreground">RevenueCat</th>
                    <th className="py-4 px-4 text-center font-semibold text-muted-foreground">Qonversion</th>
                    <th className="py-4 px-4 text-center font-semibold text-muted-foreground">Superwall</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={cn(
                        "border-b border-border/50 transition-colors cursor-default",
                        hoveredRow === index && "bg-primary/5"
                      )}
                    >
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4">
                        <motion.div
                          className="flex justify-center"
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredRow === index ? 1.1 : 1,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                        >
                          <StatusIcon value={row.adapty} />
                        </motion.div>
                      </td>
                      <td className="py-4 px-4"><div className="flex justify-center"><StatusIcon value={row.revenuecat} /></div></td>
                      <td className="py-4 px-4"><div className="flex justify-center"><StatusIcon value={row.qonversion} /></div></td>
                      <td className="py-4 px-4"><div className="flex justify-center"><StatusIcon value={row.superwall} /></div></td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BlurFade>
        </div>
      </GridSection>

      <LogosSwitcher />
      <TestimonialsSwitcher />
      <CTASwitcher />
    </>
  );
}
