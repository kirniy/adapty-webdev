'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// Magic animation: Team size counter
function TeamSizeMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        className="size-2 rounded-full bg-green-500"
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
      <span>50+ team members</span>
    </motion.div>
  );
}

// Team data with more realistic info
const TEAM_MEMBERS = [
  {
    name: 'Vitaly Davydov',
    role: 'CEO & Co-founder',
    image: '/images/testimonials/cem.webp', // Placeholder
    quote: 'We built Adapty to solve the problem we faced ourselves - making subscription monetization simple.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    highlights: ['Ex-Yandex', 'Forbes 30 Under 30']
  },
  {
    name: 'Kirill Potekhin',
    role: 'CTO & Co-founder',
    image: '/images/testimonials/roi.webp', // Placeholder
    quote: 'Our mission is to give every app developer the tools that only the top 1% had access to.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    highlights: ['Ex-Spotify', '15+ years in mobile']
  },
  {
    name: 'Anna Petrova',
    role: 'VP of Engineering',
    image: '/images/testimonials/chris.webp', // Placeholder
    quote: 'We process billions of events daily with 99.99% uptime because reliability is non-negotiable.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    highlights: ['Ex-Google', 'Systems architect']
  }
];

function TeamMemberCard({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <motion.div
        className="group relative flex flex-col rounded-2xl border bg-card overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      >
        {isHovered && (
          <BorderBeam
            size={160}
            duration={10}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        {/* Image section with gradient overlay */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {/* Social links - appear on hover */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            animate={shouldReduceMotion ? { opacity: isHovered ? 1 : 0 } : { opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -6 }}
            transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
          >
            <Link
              href={member.twitter}
              className="flex size-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors duration-150 ease-out motion-reduce:transition-none"
            >
              <TwitterIcon className="size-4" />
            </Link>
            <Link
              href={member.linkedin}
              className="flex size-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors duration-150 ease-out motion-reduce:transition-none"
            >
              <LinkedinIcon className="size-4" />
            </Link>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Name and role */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-primary">{member.role}</p>
          </div>

          {/* Highlights as subtle pills */}
          <div className="mb-4 flex flex-wrap gap-2">
            {member.highlights.map((highlight) => (
              <span
                key={highlight}
                className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function StoryTeam(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 lg:py-24 relative z-10">
        {/* Section Header */}
        <BlurFade delay={shouldReduceMotion ? 0 : 0.05} className="mb-12">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full">
                Our Team
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Built by people who understand
                <br />
                <span className="text-muted-foreground">subscription apps</span>
              </h2>
              <div className="mt-3 lg:hidden">
                <TeamSizeMagic />
              </div>
            </div>
            <div className="hidden lg:block lg:mb-2">
              <TeamSizeMagic />
            </div>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground lg:mt-0 motion-reduce:transition-none"
            >
              Meet the full team
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </BlurFade>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Bottom text */}
        <BlurFade delay={shouldReduceMotion ? 0 : 0.2} className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re a team of 50+ engineers, designers, and app developers
            spread across 12 countries, united by our passion for building
            great developer tools.
          </p>
        </BlurFade>
      </div>
    </GridSection>
  );
}
