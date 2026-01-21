'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, TrendingUpIcon } from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

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

export function CaseStudiesGrid(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={3000} />
      <div className="container py-20 relative z-10">
        {/* Featured testimonials */}
        <BlurFade delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {FEATURED_TESTIMONIALS.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none"
              >
                <CardContent className="p-6">
                  <p className="font-semibold text-primary mb-2">{testimonial.company}</p>
                  {testimonial.appType && (
                    <p className="text-xs text-muted-foreground mb-3">{testimonial.appType}</p>
                  )}
                  <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </BlurFade>

        {/* Case studies grid */}
        <BlurFade delay={0.1}>
          <SiteHeading
            title="Success stories"
            description="See how apps of all sizes grow their subscription revenue with Adapty."
          />
        </BlurFade>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.02}>
              <Link href={`https://adapty.io${study.link}`} target="_blank" rel="noopener noreferrer">
                <Card interactive className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <TrendingUpIcon className="size-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{study.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{study.category}</p>
                    <p className="text-lg font-bold text-primary mb-2">{study.result}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {study.description}
                    </p>
                    <span className="text-sm text-primary group-hover:underline inline-flex items-center gap-1">
                      Read more
                      <ArrowRightIcon className="size-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* G2 Awards section */}
        <BlurFade delay={0.5}>
          <div className="mt-20 text-center">
            <SiteHeading
              title="Trusted for usability and customer service"
              description="Based on 500+ reviews on G2"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {G2_AWARDS.map((award, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium text-sm"
                >
                  G2 Award: {award}
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
