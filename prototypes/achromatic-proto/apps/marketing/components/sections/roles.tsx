'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  BarChartIcon,
  CodeIcon,
  MegaphoneIcon
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';
import {
  useImageSetVariant,
  useMonochromeMode,
  useRolesVariant,
  type ImageSetVariant
} from '~/lib/debug-context';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Magic animation: Code lines counter for developers
function DevCodeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [lines, setLines] = React.useState(0);
  const targetLines = 10;

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
    <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg border bg-background/95 px-2.5 py-1.5 backdrop-blur-sm">
      <CodeIcon className="size-3.5 text-primary" />
      <motion.span
        className="text-sm font-bold tabular-nums"
        key={lines}
        initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {lines}
      </motion.span>
      <span className="text-[10px] text-muted-foreground">lines</span>
    </div>
  );
}

// Magic animation: Revenue tracked counter for owners
function RevenueTrackedMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [revenue, setRevenue] = React.useState(0);
  const targetRevenue = 2;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setRevenue(targetRevenue);
      return;
    }
    const duration = 2000;
    const steps = 20;
    const stepValue = targetRevenue / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= targetRevenue) {
        setRevenue(targetRevenue);
        clearInterval(interval);
      } else {
        setRevenue(Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg border bg-background/95 px-2.5 py-1.5 backdrop-blur-sm">
      <BarChartIcon className="size-3.5 text-primary" />
      <motion.span
        className="text-sm font-bold tabular-nums text-primary"
        key={revenue}
        initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        ${revenue}B+
      </motion.span>
      <span className="text-[10px] text-muted-foreground">tracked</span>
    </div>
  );
}

// Magic animation: Conversion boost for marketers
function ConversionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [conversion, setConversion] = React.useState(0);
  const targetConversion = 40;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setConversion(targetConversion);
      return;
    }
    const duration = 1800;
    const steps = 20;
    const stepValue = targetConversion / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= targetConversion) {
        setConversion(targetConversion);
        clearInterval(interval);
      } else {
        setConversion(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg border bg-background/95 px-2.5 py-1.5 backdrop-blur-sm">
      <MegaphoneIcon className="size-3.5 text-primary" />
      <motion.span
        className="text-sm font-bold tabular-nums text-primary"
        key={conversion}
        initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        +{conversion}%
      </motion.span>
      <span className="text-[10px] text-muted-foreground">conversion</span>
    </div>
  );
}

// Helper to get magic component for each role
function RoleMagic({ roleId }: { roleId: string }) {
  switch (roleId) {
    case 'developers':
      return <DevCodeMagic />;
    case 'owners':
      return <RevenueTrackedMagic />;
    case 'marketers':
      return <ConversionMagic />;
    default:
      return null;
  }
}

// Helper function to get image path based on image set variant
function getRoleImagePath(roleId: string, imageSet: ImageSetVariant): string {
  return `/images/roles/${imageSet}/${roleId}.webp`;
}

// Role data with value propositions
const ROLES = [
  {
    id: 'developers',
    title: 'For Developers',
    subtitle: 'Build faster, ship sooner',
    description:
      'Skip the boilerplate. Our SDK handles subscription infrastructure so you can focus on your app.',
    link: '/for-developers',
    icon: CodeIcon,
    stats: '10 lines of code',
    tags: ['Server-side validation', 'Cross-platform SDK', 'Offline-first'],
    features: [
      'Server-side receipt validation',
      'Cross-platform SDK (iOS, Android, RN, Flutter, Unity)',
      'Automatic subscription status sync',
      'Offline-first architecture'
    ]
  },
  {
    id: 'owners',
    title: 'For App Owners',
    subtitle: 'Know your numbers',
    description:
      'Real-time revenue analytics, LTV predictions, and cohort analysis to make data-driven decisions.',
    link: '/for-app-owners',
    icon: BarChartIcon,
    stats: '$2B+ tracked',
    tags: ['Revenue dashboards', 'LTV predictions', 'Cohort analysis'],
    features: [
      'Revenue and MRR dashboards',
      'AI-powered LTV predictions',
      'Cohort and retention analysis',
      'Churn prevention insights'
    ]
  },
  {
    id: 'marketers',
    title: 'For Marketers',
    subtitle: 'Optimize without code',
    description:
      'A/B test paywalls, localize content, and target user segments - all without app updates.',
    link: '/for-marketers',
    icon: MegaphoneIcon,
    stats: '+40% conversions',
    tags: ['No-code paywalls', 'A/B testing', 'User targeting'],
    features: [
      'No-code paywall builder',
      'A/B testing with statistical significance',
      'Remote config for instant updates',
      'User segmentation and targeting'
    ]
  }
];

// ============================================================================
// VARIANT: Cards - Clean 3-column grid with icons and images
// ============================================================================

interface RoleCardProps {
  role: (typeof ROLES)[number];
  index: number;
  imageSet: ImageSetVariant;
  monochromeMode: boolean;
}

function RoleCard({ role, index, imageSet, monochromeMode }: RoleCardProps) {
  const Icon = role.icon;
  const imageSrc = getRoleImagePath(role.id, imageSet);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BlurFade
      inView
      delay={0.15 + index * 0.15}
      className="group"
    >
      <Link
        href={role.link}
        target="_blank"
        className="relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/20 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BorderBeam
            size={150}
            duration={8}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        {/* Icon and Stats */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {role.stats}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="mb-1 text-xl font-semibold">{role.title}</h3>
        <p className="mb-2 text-sm font-medium text-primary">{role.subtitle}</p>
        <p className="mb-6 text-sm text-muted-foreground">{role.description}</p>

        {/* Image - using object-contain to prevent cropping */}
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-white">
          <Spotlight
            className="from-primary/20 via-purple-500/10 to-transparent"
            size={200}
          />
          <Image
            src={imageSrc}
            alt={role.title}
            fill
            className={cn(
              'object-contain transition-all duration-300 group-hover:scale-105',
              monochromeMode &&
                'grayscale hover:grayscale-0 transition-[filter] duration-500'
            )}
          />
          <RoleMagic roleId={role.id} />
        </div>

        {/* Features List */}
        <ul className="mb-6 flex-1 space-y-2">
          {role.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
          Learn more
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </BlurFade>
  );
}

function RolesCards() {
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Help your team run the
            <br />
            <span className="text-muted-foreground">
              mobile subscription business
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From engineering to marketing, Adapty gives every team the tools
            they need to grow revenue.
          </p>
        </BlurFade>

        {/* Role Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role, index) => (
            <RoleCard
              key={role.id}
              role={role}
              index={index}
              imageSet={imageSet}
              monochromeMode={monochromeMode}
            />
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// ============================================================================
// VARIANT: Bento - Asymmetric grid layout with featured card
// ============================================================================

interface BentoCardProps {
  role: (typeof ROLES)[number];
  index: number;
  imageSet: ImageSetVariant;
  monochromeMode: boolean;
  featured?: boolean;
}

function BentoCard({
  role,
  index,
  imageSet,
  monochromeMode,
  featured = false
}: BentoCardProps) {
  const Icon = role.icon;
  const imageSrc = getRoleImagePath(role.id, imageSet);
  const [isHovered, setIsHovered] = React.useState(false);

  if (featured) {
    // Featured card - large horizontal layout
    return (
      <BlurFade
        inView
        delay={0.15}
        className="group col-span-full lg:col-span-2"
      >
        <Link
          href={role.link}
          target="_blank"
          className="relative flex h-full flex-col lg:flex-row rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:border-primary/20 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <BorderBeam
              size={200}
              duration={10}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
            />
          )}
          {/* Image - larger on featured */}
          <div className="relative lg:w-1/2 aspect-[16/10] lg:aspect-auto bg-white">
            <Spotlight
              className="from-primary/20 via-purple-500/10 to-transparent"
              size={300}
            />
            <Image
              src={imageSrc}
              alt={role.title}
              fill
              className={cn(
                'object-contain transition-all duration-300 group-hover:scale-105',
                monochromeMode &&
                  'grayscale hover:grayscale-0 transition-[filter] duration-500'
              )}
            />
            <RoleMagic roleId={role.id} />
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 lg:p-8 lg:w-1/2">
            {/* Icon and Stats */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </div>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                {role.stats}
              </span>
            </div>

            {/* Title and Description */}
            <h3 className="mb-1 text-2xl font-semibold">{role.title}</h3>
            <p className="mb-2 text-sm font-medium text-primary">
              {role.subtitle}
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              {role.description}
            </p>

            {/* Features List */}
            <ul className="mb-6 flex-1 space-y-2">
              {role.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
              Learn more
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </BlurFade>
    );
  }

  // Compact card for non-featured roles
  return (
    <BlurFade
      inView
      delay={0.15 + index * 0.15}
      className="group"
    >
      <Link
        href={role.link}
        target="_blank"
        className="relative flex h-full flex-col rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:border-primary/20 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BorderBeam
            size={120}
            duration={8}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        {/* Image */}
        <div className="relative aspect-[16/10] bg-white">
          <Spotlight
            className="from-primary/20 via-purple-500/10 to-transparent"
            size={200}
          />
          <Image
            src={imageSrc}
            alt={role.title}
            fill
            className={cn(
              'object-contain transition-all duration-300 group-hover:scale-105',
              monochromeMode &&
                'grayscale hover:grayscale-0 transition-[filter] duration-500'
            )}
          />
          <RoleMagic roleId={role.id} />
        </div>

        {/* Content */}
        <div className="flex flex-col p-5 flex-1">
          {/* Icon and Stats Row */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {role.stats}
            </span>
          </div>

          {/* Title and Subtitle */}
          <h3 className="mb-1 text-lg font-semibold">{role.title}</h3>
          <p className="mb-2 text-xs font-medium text-primary">
            {role.subtitle}
          </p>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {role.description}
          </p>

          {/* Tags as compact pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
            Learn more
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </BlurFade>
  );
}

function RolesBento() {
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  // First role is featured, rest are compact
  const [featured, ...rest] = ROLES;

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Help your team run the
            <br />
            <span className="text-muted-foreground">
              mobile subscription business
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From engineering to marketing, Adapty gives every team the tools
            they need to grow revenue.
          </p>
        </BlurFade>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured card - spans full width on mobile, 2 cols on desktop */}
          <BentoCard
            role={featured}
            index={0}
            imageSet={imageSet}
            monochromeMode={monochromeMode}
            featured
          />

          {/* Compact cards */}
          {rest.map((role, index) => (
            <BentoCard
              key={role.id}
              role={role}
              index={index + 1}
              imageSet={imageSet}
              monochromeMode={monochromeMode}
            />
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// ============================================================================
// VARIANT: Stacked - Full-width horizontal cards with alternating layouts
// ============================================================================

function RolesStacked() {
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Help your team run the
            <br />
            <span className="text-muted-foreground">
              mobile subscription business
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From engineering to marketing, Adapty gives every team the tools
            they need to grow revenue.
          </p>
        </BlurFade>

        {/* Stacked Cards */}
        <div className="space-y-8 lg:space-y-12">
          {ROLES.map((role, index) => {
            const Icon = role.icon;
            const imageSrc = getRoleImagePath(role.id, imageSet);

            return (
              <motion.div
                key={role.id}
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }
                }
                whileInView={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.15 : 0.4,
                  ease: [0.32, 0.72, 0, 1],
                  delay: shouldReduceMotion ? 0 : index * 0.08
                }}
              >
                <Link
                  href={role.link}
                  target="_blank"
                  className={cn(
                    'group flex flex-col rounded-2xl border bg-card overflow-hidden',
                    'transition-all duration-300 hover:border-primary/20 cursor-pointer',
                    'lg:flex-row'
                  )}
                >
                  {/* Image */}
                  <div className="relative lg:w-1/2 aspect-[16/10] lg:aspect-[4/3] bg-white overflow-hidden">
                    <Spotlight
                      className="from-primary/20 via-purple-500/10 to-transparent"
                      size={300}
                    />
                    <Image
                      src={imageSrc}
                      alt={role.title}
                      fill
                      className={cn(
                        'object-contain transition-all duration-500 group-hover:scale-105',
                        monochromeMode &&
                          'grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500'
                      )}
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                    <RoleMagic roleId={role.id} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 lg:p-10 lg:w-1/2 justify-center">
                    {/* Icon badge with animation */}
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.95 }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 1, scale: 1 }
                      }
                      viewport={{ once: true }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : 0.15 + index * 0.08,
                        duration: 0.25,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit"
                    >
                      <Icon className="size-4" />
                      {role.stats}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
                      {role.title}
                    </h3>
                    <p className="text-base lg:text-lg font-medium text-primary mb-3">
                      {role.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {role.description}
                    </p>

                    {/* Features as horizontal pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {role.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          whileInView={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { opacity: 1, x: 0 }
                          }
                          viewport={{ once: true }}
                          transition={{
                            delay: shouldReduceMotion
                              ? 0
                              : 0.2 + tagIndex * 0.05,
                            duration: 0.2,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA with arrow animation */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                      <span>Learn more</span>
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </GridSection>
  );
}

// ============================================================================
// MAIN EXPORT - Switches based on debug context variant
// ============================================================================

export function Roles(): React.JSX.Element {
  const variant = useRolesVariant();

  switch (variant) {
    case 'off':
      return <></>;
    case 'bento':
      return <RolesBento />;
    case 'stacked':
      return <RolesStacked />;
    case 'cards':
    default:
      return <RolesCards />;
  }
}
