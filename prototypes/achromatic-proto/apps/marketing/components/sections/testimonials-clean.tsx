'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { CleanTestimonial, type TestimonialItem } from '@workspace/ui/components/clean-testimonial';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: Customer count badge
function CustomerCountMagic() {
  const shouldReduceMotion = useReducedMotion();
  const totalCustomers = ADAPTY_TESTIMONIALS.length;

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>{totalCustomers}+ happy customers</span>
    </motion.div>
  );
}

// All testimonials from adapty.io homepage
const ADAPTY_TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call.",
    author: 'Cem Ortabas',
    role: 'Co-founder and CEO',
    company: 'HubX',
    avatar: '/images/testimonials/cem-ortabas.webp',
  },
  {
    quote: "We've been working with Adapty since 2021 and I couldn't be happier about it. They have the best analytics on the market and all the integrations you can think of. Definitely recommend Adapty.",
    author: 'Chris Bick',
    role: 'Founder and CEO',
    company: 'Bickster',
    avatar: '/images/testimonials/chris-bick.webp',
  },
  {
    quote: "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively.",
    author: 'Yalcin Ozdemir',
    role: 'Founder and CEO',
    company: 'AppNation',
    avatar: '/images/testimonials/asman.webp',
  },
  {
    quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure.",
    author: 'Kyle Smith',
    role: 'Head of Data',
    company: 'Smitten Dating',
    avatar: '/images/testimonials/kyle.webp',
  },
  {
    quote: "We've tested more than three hundred paywalls in four months. With Adapty's A/B testing, we managed to double our monthly revenue.",
    author: 'Roi Mulia',
    role: 'Founder and CEO',
    company: 'SocialKit',
    avatar: '/images/testimonials/roi-mulia.webp',
  },
  {
    quote: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly.",
    author: 'Magnus Olafsson',
    role: 'Chief Technology Officer',
    company: 'Smitten',
    avatar: '/images/testimonials/magnus-olafsson.webp',
  },
  {
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    author: 'Ilgar Tali',
    role: 'Founder and Chief Vision Officer',
    company: 'Smartist',
    avatar: '/images/testimonials/ilgar-tali.webp',
  },
  {
    quote: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
    author: 'Mike McSweeney',
    role: 'Chief Product Officer',
    company: 'Moodworks Inc',
    avatar: '/images/testimonials/mike-mcsweeney.webp',
  },
];

export function TestimonialsClean(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={500} />
      <div className="container py-16 lg:py-24 relative z-10 flex flex-col items-center justify-center gap-8">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
        <BlurFade>
          <CustomerCountMagic />
        </BlurFade>
        {/* Wrapper applies grayscale to all avatar images inside CleanTestimonial */}
        <div className="w-full [&_img]:grayscale [&_img]:transition-all [&_img]:duration-300 [&_img]:hover:grayscale-0">
          <CleanTestimonial testimonials={ADAPTY_TESTIMONIALS} />
        </div>
      </div>
    </GridSection>
  );
}
