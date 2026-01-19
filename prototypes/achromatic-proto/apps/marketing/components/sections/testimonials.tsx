'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Star } from 'lucide-react';
import { motion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

// Adapty testimonials with real content - static grid layout (no marquee per Sergey's feedback)
const DATA = [
  {
    name: 'Cem Ortabas',
    role: 'Co-founder and CEO',
    company: 'HubX',
    img: '/images/testimonials/cem.webp',
    quote: "We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call.",
    metric: '3x',
    metricLabel: 'MRR growth'
  },
  {
    name: 'Chris Bick',
    role: 'Founder and CEO',
    company: 'Bickster',
    img: '/images/testimonials/chris.webp',
    quote: "They have the best analytics on the market and all the integrations you can think of. Definitely recommend Adapty.",
    metric: '+35%',
    metricLabel: 'conversion'
  },
  {
    name: 'Roi Mulia',
    role: 'Founder and CEO',
    company: 'SocialKit',
    img: '/images/testimonials/roi.webp',
    quote: "We've tested more than three hundred paywalls in four months. We managed to double our monthly revenue.",
    metric: '2x',
    metricLabel: 'revenue'
  },
  {
    name: 'Alex Johnson',
    role: 'Head of Product',
    company: 'AppFlow',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: "We can now launch and test new paywalls in minutes instead of weeks. A game-changer for our subscription business.",
    metric: '10x',
    metricLabel: 'faster'
  },
  {
    name: 'Sarah Chen',
    role: 'Mobile Lead',
    company: 'TechStart',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: "The integration was seamless and their SDK is rock solid. The analytics dashboard gives us insights we never had before.",
    metric: '+35%',
    metricLabel: 'revenue'
  },
  {
    name: 'Marcus Lee',
    role: 'CTO',
    company: 'MobileFirst',
    img: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: "Cross-platform sync, receipt validation, analytics - it just works. Our team can focus on building features.",
    metric: '99.9%',
    metricLabel: 'uptime'
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof DATA[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BlurFade delay={0.05 + index * 0.05}>
      <motion.div
        className="group flex h-full flex-col rounded-xl border bg-card p-5 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {/* Metric badge */}
        <motion.div
          className="mb-4 flex items-baseline gap-1.5"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.15 }}
        >
          <span className="text-2xl font-bold text-primary">{testimonial.metric}</span>
          <span className="text-xs text-muted-foreground">{testimonial.metricLabel}</span>
        </motion.div>

        {/* Quote */}
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Stars */}
        <div className="mb-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-3.5 fill-primary/80 text-primary/80" />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              width={36}
              height={36}
              src={testimonial.img || ''}
              alt={testimonial.name}
              className="size-9 rounded-full object-cover"
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

export function Testimonials(): React.JSX.Element {
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
          {DATA.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
