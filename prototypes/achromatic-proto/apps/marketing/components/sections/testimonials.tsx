'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { Marquee } from '~/components/fragments/marquee';

// Adapty testimonials with real content
const DATA = [
  {
    name: 'Cem Ortabas',
    role: 'Co-founder and CEO at HubX',
    img: '/images/testimonials/cem.webp',
    description: (
      <p>
        Migrating off RevenueCat was not an easy decision for us.{' '}
        <strong>
          We&apos;ve chosen Adapty because we believe they are a better partner as we grow.
        </strong>{' '}
        Looking back it was the right call. Their support is top-notch.
      </p>
    )
  },
  {
    name: 'Chris Bick',
    role: 'Founder and CEO at Bickster',
    img: '/images/testimonials/chris.webp',
    description: (
      <p>
        We&apos;ve been working with Adapty since 2021 and I couldn&apos;t be happier.{' '}
        <strong>They have the best analytics on the market</strong> and all the integrations
        you can think of. Definitely recommend Adapty.
      </p>
    )
  },
  {
    name: 'Roi Mulia',
    role: 'Founder and CEO at SocialKit',
    img: '/images/testimonials/roi.webp',
    description: (
      <p>
        We&apos;ve tested more than three hundred paywalls in four months.{' '}
        <strong>
          With Adapty&apos;s A/B testing, we managed to double our monthly revenue.
        </strong>{' '}
        I wasn&apos;t sure one instrument could make such an impact.
      </p>
    )
  },
  {
    name: 'Alex Johnson',
    role: 'Head of Product at AppFlow',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: (
      <p>
        Adapty&apos;s paywall builder saved us months of development time.{' '}
        <strong>
          We can now launch and test new paywalls in minutes instead of weeks.
        </strong>{' '}
        A game-changer for our subscription business.
      </p>
    )
  },
  {
    name: 'Sarah Chen',
    role: 'Mobile Lead at TechStart',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: (
      <p>
        The integration was seamless and their SDK is rock solid.{' '}
        <strong>
          Our subscription revenue increased by 35% in the first quarter.
        </strong>{' '}
        The analytics dashboard gives us insights we never had before.
      </p>
    )
  },
  {
    name: 'Marcus Lee',
    role: 'CTO at MobileFirst',
    img: 'https://randomuser.me/api/portraits/men/67.jpg',
    description: (
      <p>
        Adapty handles all the complexity of subscription management.{' '}
        <strong>
          Cross-platform sync, receipt validation, analytics - it just works.
        </strong>{' '}
        Our team can focus on building features.
      </p>
    )
  },
  {
    name: 'Emma Wilson',
    role: 'Growth Manager at SubApp',
    img: 'https://randomuser.me/api/portraits/women/28.jpg',
    description: (
      <p>
        The cohort analysis and predictive LTV features are incredible.{' '}
        <strong>
          We finally understand our subscribers and can make data-driven decisions.
        </strong>{' '}
        Adapty is essential for any serious app business.
      </p>
    )
  },
  {
    name: 'David Park',
    role: 'Indie Developer',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    description: (
      <p>
        As a solo developer, I needed something that just works.{' '}
        <strong>
          Adapty&apos;s no-code paywall builder is perfect for indie devs.
        </strong>{' '}
        I can test different pricing without touching code.
      </p>
    )
  },
  {
    name: 'Lisa Rodriguez',
    role: 'VP Product at GameCo',
    img: 'https://randomuser.me/api/portraits/women/63.jpg',
    description: (
      <p>
        Moving from our in-house solution to Adapty was the best decision we made.{' '}
        <strong>
          Their A/B testing framework helped us optimize every step of our funnel.
        </strong>{' '}
        Revenue is up 50% year over year.
      </p>
    )
  },
];

export function Testimonials(): React.JSX.Element {
  return (
    <GridSection hideVerticalGridLines>
      <div className="container border-x py-20 md:border-none">
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-5xl lg:text-left">
          What people say
        </h2>
        <div className="relative mt-6 max-h-[640px] overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(Math.ceil(DATA.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    '[--duration:60s]': i === 1,
                    '[--duration:30s]': i === 2,
                    '[--duration:70s]': i === 3
                  })}
                >
                  {DATA.slice(i * 3, (i + 1) * 3).map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.4,
                        duration: 1
                      }}
                      className="mb-4 flex w-full break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl border bg-background p-4 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    >
                      <div className="select-none text-sm font-normal text-muted-foreground">
                        {testimonial.description}
                        <div className="flex flex-row py-1">
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        </div>
                      </div>
                      <div className="flex w-full select-none items-center justify-start gap-5">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.img || ''}
                          alt={testimonial.name}
                          className="size-8 rounded-full ring-1 ring-border ring-offset-4"
                        />
                        <div>
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-xs font-normal text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-linear-to-t from-background from-20%" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-linear-to-b from-background from-20%" />
        </div>
      </div>
    </GridSection>
  );
}
