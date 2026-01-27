'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';

// Case studies with real metrics
const CASE_STUDIES = [
  {
    id: 'hubx',
    company: 'HubX',
    logo: '/logos/trusted-by/hubx.svg',
    metric: '3x',
    metricLabel: 'MRR growth',
    quote:
      'Adapty helped us triple our monthly recurring revenue in just 6 months through systematic paywall optimization.',
    person: {
      name: 'Cem Ortabas',
      role: 'Co-founder and CEO',
      image: '/images/testimonials/cem-ortabas.webp'
    },
    link: 'https://adapty.io/customer-stories/'
  },
  {
    id: 'socialkit',
    company: 'SocialKit',
    logo: '/logos/trusted-by/socialkit.svg',
    metric: '$0 to $2M',
    metricLabel: 'ARR in 18 months',
    quote:
      "We've tested more than three hundred paywalls in four months. With Adapty's A/B testing, we managed to double our monthly revenue.",
    person: {
      name: 'Roi Mulia',
      role: 'Founder and CEO',
      image: '/images/testimonials/roi-mulia.webp'
    },
    link: 'https://adapty.io/customer-stories/'
  },
  {
    id: 'bickster',
    company: 'Bickster',
    logo: '/logos/trusted-by/bickster.png',
    metric: '+35%',
    metricLabel: 'Conversion rate',
    quote:
      "We've been working with Adapty since 2021 and I couldn't be happier. They have the best analytics on the market.",
    person: {
      name: 'Chris Bick',
      role: 'Founder and CEO',
      image: '/images/testimonials/chris-bick.webp'
    },
    link: 'https://adapty.io/customer-stories/'
  }
];

// Featured testimonial (larger display)
const FEATURED = CASE_STUDIES[1]; // SocialKit - impressive metric

// Linear-style tag
function FeatureTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <span className="size-2 rounded-full bg-primary" />
      <span>{label}</span>
    </div>
  );
}

// Linear-style squircle button
function SquircleButton({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium',
        'rounded-xl border border-border/50 bg-muted/30',
        'hover:bg-muted hover:border-border transition-all duration-150 ease-out',
        'active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
      )}
    >
      {children}
      <ChevronRightIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}

function FeaturedTestimonial() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05}>
      <motion.div
        className={cn(
          'group relative rounded-[20px] overflow-hidden',
          'border border-white/10 bg-white/[0.03]',
          'hover:border-white/15 hover:bg-white/[0.04]',
          'hover:shadow-lg',
          'transition-all duration-200 ease-out',
          'p-8 lg:p-10'
        )}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Company logo + Metric */}
        <div className="mb-6 flex items-center justify-between">
          <Image
            src={FEATURED.logo}
            alt={FEATURED.company}
            width={100}
            height={32}
            className="h-6 w-auto object-contain grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-150"
          />
          <div className="flex items-baseline gap-1.5 rounded-full border border-border/50 bg-background px-4 py-2">
            <span className="text-lg font-bold text-primary">
              {FEATURED.metric}
            </span>
            <span className="text-xs text-muted-foreground">
              {FEATURED.metricLabel}
            </span>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mb-8">
          <p className="text-xl font-medium leading-relaxed lg:text-2xl tracking-tight">
            &ldquo;{FEATURED.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={FEATURED.person.image}
              alt={FEATURED.person.name}
              width={48}
              height={48}
              className="size-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div>
              <p className="font-medium">{FEATURED.person.name}</p>
              <p className="text-sm text-muted-foreground">
                {FEATURED.person.role} at {FEATURED.company}
              </p>
            </div>
          </div>

          <Link
            href={FEATURED.link}
            className="group hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Read story
            <ChevronRightIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    </BlurFade>
  );
}

function CaseStudyCard({
  study,
  index
}: {
  study: (typeof CASE_STUDIES)[0];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.1 + index * 0.05}>
      <Link href={study.link}>
        <motion.div
          className={cn(
            'group relative flex h-full flex-col rounded-[20px] overflow-hidden',
            'border border-white/10 bg-white/[0.03]',
            'hover:border-white/15 hover:bg-white/[0.04]',
            'hover:shadow-lg',
            'transition-all duration-200 ease-out',
            'p-6'
          )}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top row: Logo + Metric */}
          <div className="mb-4 flex items-center justify-between">
            <Image
              src={study.logo}
              alt={study.company}
              width={72}
              height={24}
              className="h-4 w-auto object-contain grayscale opacity-50 group-hover:opacity-70 transition-opacity duration-150"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-base font-bold text-primary">
                {study.metric}
              </span>
              <span className="text-xs text-muted-foreground">
                {study.metricLabel}
              </span>
            </div>
          </div>

          {/* Quote */}
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            &ldquo;{study.quote}&rdquo;
          </p>

          {/* Author row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src={study.person.image}
                alt={study.person.name}
                width={28}
                height={28}
                className="size-7 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-xs">
                <p className="font-medium">{study.person.name}</p>
                <p className="text-muted-foreground">{study.person.role}</p>
              </div>
            </div>

            {/* Plus button (Linear style) */}
            <span
              className={cn(
                'flex items-center justify-center size-7 rounded-full',
                'bg-white/10 border border-white/10',
                'group-hover:bg-white/15 group-hover:border-white/20',
                'transition-colors duration-150 ease-out'
              )}
            >
              <ChevronRightIcon className="size-3.5 text-white/60 transition-transform duration-150 group-hover:translate-x-0.5" />
            </span>
          </div>
        </motion.div>
      </Link>
    </BlurFade>
  );
}

export function TestimonialsEditorial(): React.JSX.Element {
  const otherCaseStudies = CASE_STUDIES.filter((s) => s.id !== FEATURED.id);

  return (
    <GridSection
      className="relative"
      hideVerticalGridLines
      hideBottomGridLine
    >
      <div className="container py-16 lg:py-24">
        {/* Section Header - Linear style */}
        <BlurFade className="mb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4">
                <FeatureTag label="Customer Stories" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Trusted by apps that ship
              </h2>
            </div>
            <SquircleButton href="https://adapty.io/customer-stories/">
              View all stories
            </SquircleButton>
          </div>
        </BlurFade>

        {/* Editorial Layout: Featured + Cards */}
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          {/* Featured Testimonial */}
          <FeaturedTestimonial />

          {/* Supporting Case Studies */}
          <div className="grid gap-4">
            {otherCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
