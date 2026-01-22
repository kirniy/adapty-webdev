'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, TrendingUpIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/case-studies (scraped 2026-01-21)

// Featured testimonials carousel
const FEATURED_TESTIMONIALS = [
  {
    company: 'Impala Studios',
    quote: "We've been using Adapty's analytics for a long time, but the predictive analytics feature turned out to be our crystal ball for future growth.",
    name: 'Sergey Lagutyonok',
    title: 'Product manager at Impala Studios'
  },
  {
    company: 'Prosto',
    appType: 'Meditation app',
    quote: "We're planning to be #1, and Adapty is one of our secret weapons.",
    name: 'Dmitry Provotorov',
    title: 'CPO at Prosto'
  },
  {
    company: 'OctaZone',
    appType: 'Fitness app',
    quote: "We integrated Adapty within a couple of days and immediately started using it. Now the A/B testing cycle, from the idea to launch, takes much less time and doesn't require any developers involvement.",
    name: 'Arsen Ibragimov',
    title: 'Founder & CEO at OctaZone'
  },
  {
    company: 'SocialKit',
    quote: "With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
    name: 'Roi Mulia',
    title: 'Founder & CEO at SocialKit'
  }
];

// Case studies from adapty.io/case-studies
const CASE_STUDIES = [
  {
    name: 'Welmi',
    category: 'Health & Fitness',
    result: '3x growth in MRR',
    description: 'Steady growth with Adapty UA',
    link: '/case-studies/welmi/'
  },
  {
    name: 'Productivity app',
    category: 'Productivity',
    result: '+50% in total revenue',
    description: "How pricing tests unlocked app's potential",
    link: '/case-studies/productivity-app-and-autopilot/'
  },
  {
    name: 'Text on Pic',
    category: 'Photo & Video',
    result: 'Over 30% MRR growth',
    description: 'How to boost revenue with the right experiments',
    link: '/case-studies/photo-editing-app-and-autopilot/'
  },
  {
    name: 'Trip planning',
    category: 'Travel',
    result: '+102% ARPU growth',
    description: 'New onboarding and pricing strategy doubled revenue per user',
    link: '/case-studies/travel-app/'
  },
  {
    name: 'Going Merry',
    category: 'App publisher',
    result: '5x MRR growth',
    description: 'How to scale subscription revenue with Paywall Builder',
    link: '/case-studies/going-merry/'
  },
  {
    name: 'Shmoody',
    category: 'Mental health',
    result: 'ARR scaled from $0 to $2M',
    description: 'How to grow from a free app to $2M ARR with Adapty',
    link: '/case-studies/shmoody/'
  },
  {
    name: 'Lively',
    category: 'Health & Fitness',
    result: 'Refund rate dropped by 83%',
    description: 'Saved 82% of potentially lost revenue',
    link: '/case-studies/lively/'
  },
  {
    name: 'Glam AI',
    category: 'Makeup & Beauty',
    result: 'ROAS from Adapty - 108%',
    description: 'How to scale to $1.2M ARR in 3 months',
    link: '/case-studies/glam-ai/'
  },
  {
    name: 'Pepapp',
    category: 'Health & Fitness',
    result: '400% ROI on Adapty',
    description: 'How to make Adapty free with Refund Saver',
    link: '/case-studies/pepapp/'
  },
  {
    name: 'Fotorama',
    category: 'Photo & Video',
    result: 'Refund rate dropped 40%',
    description: 'How to decrease the refund rate with Adapty',
    link: '/case-studies/fotorama/'
  },
  {
    name: 'Wave',
    category: 'Voice To Text',
    result: '$2M ARR in 6 months',
    description: 'How to reach $2M ARR in 6 months with an indie app',
    link: '/case-studies/wave/'
  },
  {
    name: 'Impala',
    category: 'Publishing company',
    result: 'Migrated in 1 week',
    description: "How to migrate to Adapty from a competitor's solution",
    link: '/case-studies/impala/'
  },
  {
    name: 'ABBYY',
    category: 'Business',
    result: '+58.5% revenue',
    description: 'ABBYY: +58.5% to the annual subscription revenue',
    link: '/case-studies/abbyy/'
  },
  {
    name: 'Moonly',
    category: 'Lifestyle',
    result: '+$2.45M ARR',
    description: 'How Moonly bootstrapped from $0 to $2.45M ARR with Adapty',
    link: '/case-studies/moonly/'
  },
  {
    name: 'Prosto',
    category: 'Health & Fitness',
    result: '+30% revenue',
    description: 'Prosto: 30% revenue increase with paywall A/B testing',
    link: '/case-studies/prosto/'
  },
  {
    name: 'Union Apps',
    category: 'Publishing company',
    result: '+4.5M ARR',
    description: 'Helps apps grow to millions of dollars ARR with Adapty',
    link: '/case-studies/union-apps/'
  },
  {
    name: 'SocialKit',
    category: 'Tools for content creators',
    result: '+2x MRR growth',
    description: 'SocialKit doubled its MRR with A/B testing for paywalls',
    link: '/case-studies/socialkit/'
  },
  {
    name: 'Avatarify',
    category: 'Photo & Video',
    result: '+$200K MRR',
    description: 'Built as a joke, grown to be the top-1 app on the App Store',
    link: '/case-studies/avatarify/'
  }
];

// G2 Awards
const G2_AWARDS = [
  'Best Results',
  'High Performer',
  'Best Usability',
  'Best Relationship',
  'Most Implementable'
];

// Magic animation: Success stories counter
function SuccessStoriesMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const totalStories = CASE_STUDIES.length;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(totalStories);
      return;
    }
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= totalStories) return totalStories;
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, totalStories]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.span
        key={count}
        initial={shouldReduceMotion ? {} : { y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {count}+ success stories
      </motion.span>
    </motion.div>
  );
}

// Magic animation: G2 rating badge
function G2RatingBadgeMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.span
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      >
        500+
      </motion.span>
      <span>reviews on G2</span>
    </motion.div>
  );
}

// Featured testimonial card with hover animation
function TestimonialCard({ testimonial, index }: { testimonial: typeof FEATURED_TESTIMONIALS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.1 }}
    >
      <Card
        className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-150 ease-out motion-reduce:transition-none relative overflow-hidden"
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
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={200} />
        <CardContent className="p-6 relative">
          <motion.p
            className="font-semibold text-primary mb-2"
            animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.15 }}
          >
            {testimonial.company}
          </motion.p>
          {testimonial.appType && (
            <p className="text-xs text-muted-foreground mb-3">{testimonial.appType}</p>
          )}
          <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Case study card with enhanced hover animation
function CaseStudyCard({ study, index }: { study: typeof CASE_STUDIES[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.1 }}
    >
      <Link href={`https://adapty.io${study.link}`} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card interactive className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg group cursor-pointer transition-shadow duration-150 relative overflow-hidden">
          {isHovered && (
            <BorderBeam
              size={120}
              duration={8}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
            />
          )}
          <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={180} />
          <CardContent className="p-6 relative">
            <motion.div
              animate={shouldReduceMotion ? undefined : {
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4"
            >
              <TrendingUpIcon className="size-6" />
            </motion.div>
            <h3 className="font-semibold text-lg mb-1">{study.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">{study.category}</p>
            <p className="text-lg font-bold text-primary mb-2">{study.result}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {study.description}
            </p>
            <motion.span
              className="text-sm text-primary inline-flex items-center gap-1"
              animate={shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.15 }}
            >
              Read more
              <ArrowRightIcon className="size-3" />
            </motion.span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

// G2 Award badge with hover animation
function G2AwardBadge({ award }: { award: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
      className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium text-sm hover:border-primary/20 hover:shadow-md transition-all duration-150 cursor-default"
    >
      G2 Award: {award}
    </motion.div>
  );
}

export function CaseStudiesGrid(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={3000} />
      <div className="container py-20 relative z-10">
        {/* Featured testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {FEATURED_TESTIMONIALS.map((testimonial, index) => (
            <BlurFade key={index} delay={0.05 + index * 0.05}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Case studies grid */}
        <BlurFade delay={0.1}>
          <SiteHeading
            title="Success stories"
            description="See how apps of all sizes grow their subscription revenue with Adapty."
          />
          <div className="mt-4 flex justify-center">
            <SuccessStoriesMagic />
          </div>
        </BlurFade>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.02}>
              <CaseStudyCard study={study} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* G2 Awards section */}
        <BlurFade delay={0.5}>
          <div className="mt-20 text-center">
            <SiteHeading
              title="Trusted for usability and customer service"
            />
            <div className="mt-4 flex justify-center">
              <G2RatingBadgeMagic />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {G2_AWARDS.map((award, index) => (
                <G2AwardBadge key={index} award={award} />
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
