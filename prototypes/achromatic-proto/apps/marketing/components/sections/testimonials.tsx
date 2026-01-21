'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

// All 8 real testimonials from adapty.io homepage - content parity with clean variant
const DATA = [
  {
    name: 'Cem Ortabas',
    role: 'Co-founder and CEO',
    company: 'HubX',
    img: '/images/testimonials/cem-ortabas.webp',
    quote: "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call.",
    metric: '3x',
    metricLabel: 'MRR growth'
  },
  {
    name: 'Chris Bick',
    role: 'Founder and CEO',
    company: 'Bickster',
    img: '/images/testimonials/chris-bick.webp',
    quote: "We've been working with Adapty since 2021 and I couldn't be happier about it. They have the best analytics on the market and all the integrations you can think of.",
    metric: '+35%',
    metricLabel: 'conversion'
  },
  {
    name: 'Yalcin Ozdemir',
    role: 'Founder and CEO',
    company: 'AppNation',
    img: '/images/testimonials/asman.webp',
    quote: "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively.",
    metric: '2.5x',
    metricLabel: 'ARPU'
  },
  {
    name: 'Kyle Smith',
    role: 'Head of Data',
    company: 'Smitten Dating',
    img: '/images/testimonials/kyle.webp',
    quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure.",
    metric: '+40%',
    metricLabel: 'trial CVR'
  },
  {
    name: 'Roi Mulia',
    role: 'Founder and CEO',
    company: 'SocialKit',
    img: '/images/testimonials/roi-mulia.webp',
    quote: "We've tested more than three hundred paywalls in four months. With Adapty's A/B testing, we managed to double our monthly revenue.",
    metric: '2x',
    metricLabel: 'revenue'
  },
  {
    name: 'Magnus Olafsson',
    role: 'Chief Technology Officer',
    company: 'Smitten',
    img: '/images/testimonials/magnus-olafsson.webp',
    quote: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly.",
    metric: '10x',
    metricLabel: 'faster'
  },
  {
    name: 'Ilgar Tali',
    role: 'Founder and Chief Vision Officer',
    company: 'Smartist',
    img: '/images/testimonials/ilgar-tali.webp',
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    metric: '+50%',
    metricLabel: 'LTV'
  },
  {
    name: 'Mike McSweeney',
    role: 'Chief Product Officer',
    company: 'Moodworks Inc',
    img: '/images/testimonials/mike-mcsweeney.webp',
    quote: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
    metric: '99.9%',
    metricLabel: 'uptime'
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof DATA[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Jakub's shadow pattern: multi-layer shadows that deepen on hover
  const cardShadow = isHovered
    ? '0 0 0 1px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.12), 0 8px 24px 0 rgba(0,0,0,0.08)'
    : '0 0 0 1px rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04), 0 2px 4px 0 rgba(0,0,0,0.02)';

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <motion.div
        className="group flex h-full flex-col rounded-xl border border-border/50 bg-card p-5 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        animate={shouldReduceMotion ? undefined : { boxShadow: cardShadow }}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Metric badge with scale micro-interaction */}
        <motion.div
          className="mb-4 flex items-baseline gap-1.5"
          animate={shouldReduceMotion ? undefined : {
            scale: isHovered ? 1.02 : 1,
            opacity: isHovered ? 1 : 0.9
          }}
          transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-2xl font-bold text-primary">{testimonial.metric}</span>
          <span className="text-xs text-muted-foreground">{testimonial.metricLabel}</span>
        </motion.div>

        {/* Quote */}
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Stars with stagger animation on hover */}
        <div className="mb-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={shouldReduceMotion ? undefined : {
                scale: isHovered ? 1.06 : 1,
                rotate: isHovered ? (i % 2 === 0 ? 3 : -3) : 0
              }}
              transition={{
                duration: 0.15,
                delay: shouldReduceMotion ? 0 : (isHovered ? i * 0.02 : 0),
                ease: [0.32, 0.72, 0, 1]
              }}
            >
              <Star className="size-3.5 fill-primary/80 text-primary/80" />
            </motion.div>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
          >
            <Image
              width={36}
              height={36}
              src={testimonial.img || ''}
              alt={testimonial.name}
              loading="lazy"
              className="size-9 rounded-full object-cover ring-2 ring-transparent transition-all group-hover:ring-primary/20"
            />
          </motion.div>
          <div className="text-xs">
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}


interface TestimonialsProps {
  items?: typeof DATA;
}

export function Testimonials({ items = DATA }: TestimonialsProps): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade className="mb-12">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Loved by developers worldwide
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

        {/* Static Grid - 3 columns on desktop */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
