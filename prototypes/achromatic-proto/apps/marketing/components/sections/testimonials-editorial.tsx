'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, QuoteIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

// Case studies with real metrics - logos will be rendered grayscale
const CASE_STUDIES = [
  {
    id: 'hubx',
    company: 'HubX',
    logo: '/logos/trusted-by/hubx.svg',
    metric: '3x',
    metricLabel: 'MRR growth',
    quote: 'Adapty helped us triple our monthly recurring revenue in just 6 months through systematic paywall optimization.',
    person: {
      name: 'Cem Ortabas',
      role: 'Co-founder and CEO',
      image: '/images/testimonials/cem.webp'
    },
    link: 'https://adapty.io/customer-stories/'
  },
  {
    id: 'socialkit',
    company: 'SocialKit',
    logo: '/logos/trusted-by/socialkit.svg',
    metric: '$0 to $2M',
    metricLabel: 'ARR in 18 months',
    quote: "We've tested more than three hundred paywalls in four months. With Adapty's A/B testing, we managed to double our monthly revenue.",
    person: {
      name: 'Roi Mulia',
      role: 'Founder and CEO',
      image: '/images/testimonials/roi.webp'
    },
    link: 'https://adapty.io/customer-stories/'
  },
  {
    id: 'bickster',
    company: 'Bickster',
    logo: '/logos/trusted-by/bickster.png',
    metric: '+35%',
    metricLabel: 'Conversion rate',
    quote: "We've been working with Adapty since 2021 and I couldn't be happier. They have the best analytics on the market.",
    person: {
      name: 'Chris Bick',
      role: 'Founder and CEO',
      image: '/images/testimonials/chris.webp'
    },
    link: 'https://adapty.io/customer-stories/'
  }
];

// Featured testimonial (larger display)
const FEATURED = CASE_STUDIES[1]; // SocialKit - impressive metric

function FeaturedTestimonial() {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05}>
      <motion.div
        className="group relative rounded-2xl border bg-card p-8 lg:p-12 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Subtle gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/0 pointer-events-none"
          animate={shouldReduceMotion ? undefined : { borderColor: isHovered ? 'hsl(var(--primary) / 0.2)' : 'hsl(var(--primary) / 0)' }}
          transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        />

        {/* Quote icon with micro-animation */}
        <motion.div
          className="absolute right-8 top-8"
          animate={shouldReduceMotion ? undefined : {
            opacity: isHovered ? 0.15 : 0.05,
            scale: isHovered ? 1.03 : 1
          }}
          transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
        >
          <QuoteIcon className="size-16 text-muted-foreground" />
        </motion.div>

        {/* Company logo + Metric - logos are grayscale */}
        <div className="mb-6 flex items-center justify-between">
          <motion.div
            animate={shouldReduceMotion ? undefined : { opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
          >
            <Image
              src={FEATURED.logo}
              alt={FEATURED.company}
              width={120}
              height={40}
              className="h-8 w-auto object-contain grayscale"
            />
          </motion.div>
          <motion.div
            className="flex items-baseline gap-1.5 rounded-full border bg-muted/50 px-4 py-2"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="text-xl font-bold text-primary">{FEATURED.metric}</span>
            <span className="text-sm text-muted-foreground">{FEATURED.metricLabel}</span>
          </motion.div>
        </div>

        {/* Quote with subtle highlight animation */}
        <blockquote className="mb-8 relative">
          <p className="text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
            &ldquo;{FEATURED.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author with image */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              <Image
                src={FEATURED.person.image}
                alt={FEATURED.person.name}
                width={56}
                height={56}
                className="size-14 rounded-full border-2 border-background shadow-md object-cover"
              />
            </motion.div>
            <div>
              <p className="font-semibold">{FEATURED.person.name}</p>
              <p className="text-sm text-muted-foreground">{FEATURED.person.role} at {FEATURED.company}</p>
            </div>
          </div>

          {/* CTA arrow */}
          <Link
            href={FEATURED.link}
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Read story
            <motion.span
              animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
            >
              <ArrowRightIcon className="size-4" />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </BlurFade>
  );
}

function CaseStudyCard({ study, index }: { study: typeof CASE_STUDIES[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.1 + index * 0.05}>
      <Link href={study.link}>
        <motion.div
          className="group flex h-full flex-col rounded-xl border bg-card p-6 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Top row: Logo + Metric */}
          <div className="mb-4 flex items-center justify-between">
            {/* Logo - grayscale */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
            >
              <Image
                src={study.logo}
                alt={study.company}
                width={80}
                height={28}
                className="h-5 w-auto object-contain grayscale"
              />
            </motion.div>
            {/* Metric badge */}
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-primary">{study.metric}</span>
              <span className="text-xs text-muted-foreground">{study.metricLabel}</span>
            </div>
          </div>

          {/* Quote */}
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            &ldquo;{study.quote}&rdquo;
          </p>

          {/* Author row */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                <Image
                  src={study.person.image}
                  alt={study.person.name}
                  width={32}
                  height={32}
                  className="size-8 rounded-full object-cover"
                />
              </motion.div>
              <div className="text-xs">
                <p className="font-medium">{study.person.name}</p>
                <p className="text-muted-foreground">{study.person.role}</p>
              </div>
            </div>

            {/* Arrow indicator */}
            <motion.div
              className="text-muted-foreground"
              animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0, opacity: isHovered ? 1 : 0.5 }}
              transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
            >
              <ArrowRightIcon className="size-4" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </BlurFade>
  );
}

export function TestimonialsEditorial(): React.JSX.Element {
  const otherCaseStudies = CASE_STUDIES.filter(s => s.id !== FEATURED.id);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-12">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Customer Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Trusted by apps that ship
              </h2>
            </div>
            <Link
              href="https://adapty.io/customer-stories/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:mt-0"
            >
              View all stories
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </BlurFade>

        {/* Editorial Layout: Featured + Cards */}
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          {/* Featured Testimonial */}
          <FeaturedTestimonial />

          {/* Supporting Case Studies */}
          <div className="grid gap-4">
            {otherCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
