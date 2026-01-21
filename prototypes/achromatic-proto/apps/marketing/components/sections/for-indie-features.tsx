'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RocketIcon,
  MailIcon,
  UsersIcon,
  BarChart3Icon,
  ArrowRightIcon,
  CodeIcon,
  TrendingUpIcon,
  BuildingIcon,
  ChevronDownIcon,
  CheckIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Button, buttonVariants } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';

const FEATURES = [
  {
    title: 'Turn your indie/pet project into a business',
    description:
      'Manage your monetization and paywalls with Adapty: Change your paywalls and pricing on the fly without wasting your time; localize and target paywalls to various groups of users; bit by bit turn your pet project into a profitable business.',
    icon: RocketIcon,
    details: 'No-code paywall editor, real-time changes, audience segmentation, and localization support included.',
  },
  {
    title: 'Get regular overview email reports',
    description:
      'Receive daily, weekly, or monthly email reports to stay up to date with the state of your apps. Tailor the report\'s content to your preferences and choose to access summary or detailed data for specific apps.',
    icon: MailIcon,
    link: 'https://adapty.io/docs/reports',
    linkText: 'More in the docs',
    details: 'Customizable frequency, app-specific reports, revenue breakdowns, and subscriber metrics at a glance.',
  },
  {
    title: 'Know your customers. Each of them',
    description:
      'Adapty creates a unique user profile for everyone, including paid subscribers. Stay in touch with them and track all the payments.',
    icon: UsersIcon,
    details: 'Individual user profiles, payment history, subscription status, and cohort analysis tools.',
  },
  {
    title: 'Keep track of your revenue, subscribers, cohorts, and other metrics',
    description:
      'Get your financial and acquisition data in one place in real time. The dashboards are optimized for mobile, so you can check the statistics on the go.',
    icon: BarChart3Icon,
    details: 'Real-time dashboards, mobile-optimized views, cohort analysis, and export capabilities.',
  },
];

const RELATED_ROLES = [
  {
    title: 'For developers',
    description:
      'Focus on interesting development - your product. Delegate the boring infrastructure to us.',
    href: '/for-developers',
    icon: CodeIcon,
  },
  {
    title: 'For marketers',
    description:
      'Double subscription revenue with A/B testing paywalls and 3rd party integrations.',
    href: '/for-marketers',
    icon: TrendingUpIcon,
  },
  {
    title: 'For app owners',
    description: 'Instantly available cross-platform subscription analytics.',
    href: '/for-app-owners',
    icon: BuildingIcon,
  },
];

const STATS = [
  { value: '500M+', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' },
];

const STARTUP_BENEFITS = [
  'Free for 1 year (or 50% off)',
  'Full access to all features',
  'Priority support channel',
  'No credit card required',
];

// =============================================================================
// VARIANT: GRID - Classic 2-column grid with cards
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);
  const [hoveredRole, setHoveredRole] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1800} />
      <div className="container py-16 md:py-24 relative z-10">
        {/* Startup Callout */}
        <BlurFade delay={0.1}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01, y: -4 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.1 }}
            className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 text-center cursor-pointer"
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Startup with less than $5K MRR?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Just like you, we are a startup as well and we know the pain. We have made a startup plan to help you move faster and focus on what matters - your products and users.
            </p>
            <div className="mt-6">
              <Link
                href="https://startups.adapty.io/en/startup-plan-application"
                target="_blank"
                className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
              >
                Apply for startup plan
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </div>
          </motion.div>
        </BlurFade>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.2 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredFeature === index ? -4 : 0,
                  scale: hoveredFeature === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Card className={cn(
                  "h-full transition-all duration-200",
                  hoveredFeature === index && "border-primary/50 shadow-lg"
                )}>
                  <CardContent className="p-8">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredFeature === index ? 1.1 : 1,
                        rotate: hoveredFeature === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                    >
                      <feature.icon className={cn(
                        "h-10 w-10 transition-colors duration-200",
                        hoveredFeature === index ? "text-primary" : "text-primary/70"
                      )} />
                    </motion.div>
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">
                      {feature.description}
                    </p>
                    {feature.link && (
                      <Link
                        href={feature.link}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {feature.linkText}
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.5}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "Whether it is A/B testing paywalls, predicting LTV, or analyzing
              subscription metrics, Adapty is the ultimate toolkit for app
              success."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold">Ilgar Tali</div>
              <div className="text-sm text-muted-foreground">
                Founder & Chief Vision Officer at Smartist
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.6}>
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  className="rounded-lg border bg-card p-6 text-center cursor-default"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Discord Community */}
        <BlurFade delay={0.7}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0.1 }}
            className="mt-16 rounded-2xl border bg-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Join SubHub - Discord community for app growth insights
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trusted by a community of mobile developers
            </p>
            <div className="mt-6">
              <Link
                href="https://discord.gg/subscriptions-hub"
                target="_blank"
                className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'rounded-xl')}
              >
                Join now
              </Link>
            </div>
          </motion.div>
        </BlurFade>

        {/* Related Roles */}
        <BlurFade delay={0.8}>
          <div className="mt-16">
            <h2 className="text-xl font-semibold">
              Focused on growth and cost-savings at the same time
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {RELATED_ROLES.map((role, index) => (
                <motion.div
                  key={role.href}
                  onMouseEnter={() => setHoveredRole(index)}
                  onMouseLeave={() => setHoveredRole(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredRole === index ? -4 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href={role.href}
                    className={cn(
                      "flex flex-col rounded-lg border bg-card p-6 h-full transition-all duration-200",
                      hoveredRole === index && "border-primary/50 shadow-lg bg-accent"
                    )}
                  >
                    <role.icon className={cn(
                      "h-8 w-8 transition-colors duration-200",
                      hoveredRole === index ? "text-primary" : "text-primary/70"
                    )} />
                    <h3 className="mt-4 font-semibold">{role.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {role.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read more
                      <motion.span
                        animate={{ x: hoveredRole === index ? 3 : 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid layout
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1600} />
      <div className="container py-16 md:py-24 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything an indie dev needs"
            description="From monetization to analytics, we have got you covered so you can focus on building great apps."
          />
        </BlurFade>

        {/* Bento Grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-3">
          {/* Large card - Startup plan */}
          <BlurFade delay={0.1}>
            <motion.div
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={shouldReduceMotion ? undefined : {
                y: hoveredIndex === 0 ? -4 : 0,
                scale: hoveredIndex === 0 ? 1.01 : 1,
              }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.1 }}
              className={cn(
                "md:col-span-2 md:row-span-2 rounded-2xl border-2 p-8 flex flex-col justify-between transition-all duration-300",
                hoveredIndex === 0
                  ? "border-primary bg-primary/5 shadow-xl"
                  : "border-primary/30 bg-gradient-to-br from-primary/10 to-purple-500/5"
              )}
            >
              <div>
                <span className="text-sm font-medium text-primary">Startup Program</span>
                <h3 className="mt-2 text-3xl font-bold">Get Adapty free for 1 year</h3>
                <p className="mt-4 text-muted-foreground max-w-lg">
                  Less than $5K MRR? Apply for our startup program and get full access to all features with no cost for 12 months.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {STARTUP_BENEFITS.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckIcon className="size-4 text-green-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="https://startups.adapty.io/en/startup-plan-application"
                  target="_blank"
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
                >
                  Apply now
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </div>
            </motion.div>
          </BlurFade>

          {/* Feature cards */}
          {FEATURES.slice(0, 3).map((feature, index) => (
            <BlurFade key={feature.title} delay={0.15 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index + 1 ? -4 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className={cn(
                  "h-full rounded-xl border bg-card p-6 transition-all duration-200",
                  hoveredIndex === index + 1 && "border-primary/50 shadow-lg"
                )}
              >
                <motion.div
                  animate={shouldReduceMotion ? undefined : {
                    scale: hoveredIndex === index + 1 ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.2 }}
                >
                  <feature.icon className="size-8 text-primary" />
                </motion.div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {feature.description}
                </p>
              </motion.div>
            </BlurFade>
          ))}

          {/* Stats row */}
          <BlurFade delay={0.3}>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="rounded-lg border bg-card p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.35}>
          <div className="mt-12 rounded-2xl border bg-muted/30 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <blockquote className="text-xl italic">
                  "Adapty is the ultimate toolkit for app success."
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Ilgar Tali</div>
                  <div className="text-sm text-muted-foreground">Founder at Smartist</div>
                </div>
              </div>
              <div className="md:w-64">
                <Link
                  href="https://discord.gg/subscriptions-hub"
                  target="_blank"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full rounded-xl')}
                >
                  Join SubHub Discord
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Related Roles */}
        <BlurFade delay={0.4}>
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6">Explore by role</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {RELATED_ROLES.map((role) => (
                <Link
                  key={role.href}
                  href={role.href}
                  className="flex items-center gap-4 rounded-xl border bg-card p-4 hover:border-primary/50 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <role.icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{role.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TIMELINE - Vertical timeline journey
// =============================================================================
function TimelineFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0);

  const TIMELINE_STEPS = [
    {
      step: '01',
      title: 'Start with the startup plan',
      description: 'Apply for 1 year free access if you have less than $5K MRR. Get full access to all features.',
      cta: { label: 'Apply now', href: 'https://startups.adapty.io/en/startup-plan-application' },
    },
    {
      step: '02',
      title: 'Integrate in under 10 minutes',
      description: 'Our SDK is designed for simplicity. Just 5 methods to learn. Works across iOS, Android, Flutter, React Native, and Unity.',
      cta: { label: 'View docs', href: 'https://adapty.io/docs' },
    },
    {
      step: '03',
      title: 'Design your paywalls',
      description: 'Use our no-code builder to create beautiful paywalls. Change pricing, copy, and design without app updates.',
      cta: { label: 'Explore builder', href: '/paywall-builder' },
    },
    {
      step: '04',
      title: 'Analyze and optimize',
      description: 'Track revenue, subscribers, and cohorts in real-time. Get email reports and mobile-friendly dashboards.',
      cta: { label: 'See analytics', href: '/subscription-analytics' },
    },
    {
      step: '05',
      title: 'Scale to profitability',
      description: 'A/B test paywalls, segment users, and optimize pricing. Join 15,000+ developers who have grown with Adapty.',
      cta: { label: 'Read case studies', href: '/case-studies' },
    },
  ];

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-16 md:py-24 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Your journey from side project to profitable business"
            description="Follow the path that thousands of indie developers have taken to monetize their apps successfully."
          />
        </BlurFade>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {TIMELINE_STEPS.map((step, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.05}>
                <motion.div
                  className={cn(
                    "relative pl-20 md:pl-0",
                    index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                  )}
                >
                  {/* Step number */}
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                    className={cn(
                      "absolute left-0 flex size-16 items-center justify-center rounded-full border-4 bg-background font-bold text-lg cursor-pointer transition-colors duration-200",
                      "md:left-1/2 md:-translate-x-1/2",
                      expandedIndex === index
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    )}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {step.step}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    animate={shouldReduceMotion ? undefined : {
                      y: expandedIndex === index ? -4 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                    className={cn(
                      "rounded-xl border bg-card p-6 cursor-pointer transition-all duration-200",
                      expandedIndex === index && "border-primary/50 shadow-lg"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDownIcon className="size-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                        >
                          <p className="mt-4 text-muted-foreground">
                            {step.description}
                          </p>
                          <div className="mt-4">
                            <Link
                              href={step.cta.href}
                              target={step.cta.href.startsWith('http') ? '_blank' : undefined}
                              className={cn(buttonVariants({ size: 'sm' }), 'rounded-lg')}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {step.cta.label}
                              <ArrowRightIcon className="ml-2 size-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Stats */}
        <BlurFade delay={0.4}>
          <div className="mt-20 rounded-2xl border bg-muted/30 p-8">
            <h3 className="text-center text-lg font-semibold mb-6">
              Enterprise-grade infrastructure you can trust
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Testimonial + Discord */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <BlurFade delay={0.45}>
            <div className="rounded-2xl border bg-card p-8 h-full">
              <blockquote className="text-lg italic text-muted-foreground">
                "Whether it is A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success."
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold">Ilgar Tali</div>
                <div className="text-sm text-muted-foreground">Founder & Chief Vision Officer at Smartist</div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="rounded-2xl border bg-card p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">Join the community</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect with thousands of indie developers on SubHub Discord. Share insights, get help, and grow together.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="https://discord.gg/subscriptions-hub"
                  target="_blank"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full rounded-xl')}
                >
                  Join SubHub Discord
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Related Roles */}
        <BlurFade delay={0.55}>
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6">Explore by role</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {RELATED_ROLES.map((role) => (
                <Link
                  key={role.href}
                  href={role.href}
                  className="flex items-center gap-4 rounded-xl border bg-card p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <role.icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{role.description}</p>
                  </div>
                  <ArrowRightIcon className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export const FOR_INDIE_FEATURES_VARIANTS = ['grid', 'bento', 'timeline'] as const;
export type ForIndieFeaturesVariant = typeof FOR_INDIE_FEATURES_VARIANTS[number];

type Props = {
  variant?: ForIndieFeaturesVariant;
};

export function ForIndieFeatures({ variant = 'grid' }: Props): React.JSX.Element {
  switch (variant) {
    case 'bento':
      return <BentoFeatures />;
    case 'timeline':
      return <TimelineFeatures />;
    case 'grid':
    default:
      return <GridFeatures />;
  }
}
