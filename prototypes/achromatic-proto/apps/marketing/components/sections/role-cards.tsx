'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CodeIcon, BarChartIcon, MegaphoneIcon } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// Helper function to get image path based on image set variant
function getRoleImagePath(roleId: string, imageSet: ImageSetVariant): string {
  return `/images/roles/${imageSet}/${roleId}.webp`;
}

// Role cards with value propositions instead of generic feature tags
const ROLES = [
  {
    id: 'developers',
    title: 'For Developers',
    subtitle: 'Build faster, ship sooner',
    description: 'Skip the boilerplate. Our SDK handles subscription infrastructure so you can focus on your app.',
    link: '/for-developers',
    icon: CodeIcon,
    stats: '10 lines of code',
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
    description: 'Real-time revenue analytics, LTV predictions, and cohort analysis to make data-driven decisions.',
    link: '/for-app-owners',
    icon: BarChartIcon,
    stats: '$2B+ tracked',
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
    description: 'A/B test paywalls, localize content, and target user segments - all without app updates.',
    link: '/for-marketers',
    icon: MegaphoneIcon,
    stats: '+40% conversions',
    features: [
      'No-code paywall builder',
      'A/B testing with statistical significance',
      'Remote config for instant updates',
      'User segmentation and targeting'
    ]
  },
];

interface RoleCardProps {
  role: typeof ROLES[number];
  index: number;
  imageSet: ImageSetVariant;
  monochromeMode: boolean;
}

function RoleCard({ role, index, imageSet, monochromeMode }: RoleCardProps) {
  const Icon = role.icon;
  const imageSrc = getRoleImagePath(role.id, imageSet);

  return (
    <BlurFade
      inView
      delay={0.15 + index * 0.15}
      className="group"
    >
      <Link
        href={role.link}
        target="_blank"
        className="flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg cursor-pointer"
      >
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
        <p className="mb-6 text-sm text-muted-foreground">
          {role.description}
        </p>

        {/* Image */}
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
          <Image
            src={imageSrc}
            alt={role.title}
            fill
            className={cn(
              "object-cover transition-all duration-300 group-hover:scale-105",
              monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
            )}
          />
        </div>

        {/* Features List */}
        <ul className="mb-6 flex-1 space-y-2">
          {role.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
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

export function RoleCards(): React.JSX.Element {
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
            <span className="text-muted-foreground">mobile subscription business</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From engineering to marketing, Adapty gives every team the tools they need to grow revenue.
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
