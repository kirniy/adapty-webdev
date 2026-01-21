'use client';

import * as React from 'react';
import Image from 'next/image';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { Marquee } from '~/components/fragments/marquee';
import { SectionBackground } from '~/components/fragments/section-background';

// Customer logos for marquee display
const CUSTOMER_LOGOS = [
  { name: 'Feeld', file: '/logos/trusted-by/feeld.svg' },
  { name: 'Bumble', file: '/logos/trusted-by/bumble.svg' },
  { name: 'AppNation', file: '/logos/trusted-by/appnation.webp' },
  { name: 'HubX', file: '/logos/trusted-by/hubx.svg' },
  { name: 'Almus', file: '/logos/trusted-by/almus.svg' },
  { name: 'Impala Studios', file: '/logos/trusted-by/impala-studios.svg' },
  { name: 'WeWoo', file: '/logos/trusted-by/weewoo.svg' },
  { name: 'Bickster', file: '/logos/trusted-by/bickster.png' },
  { name: 'SocialKit', file: '/logos/trusted-by/socialkit.svg' },
];

function LogoItem({ logo }: { logo: typeof CUSTOMER_LOGOS[0] }) {
  return (
    <div className="flex h-12 w-32 shrink-0 items-center justify-center px-4 md:h-14 md:w-40">
      <Image
        src={logo.file}
        alt={logo.name}
        width={120}
        height={40}
        className="h-6 w-auto max-w-[100px] object-contain opacity-60 grayscale transition-all duration-200 ease-out hover:opacity-100 hover:grayscale-0 md:h-8 md:max-w-[120px] motion-reduce:transition-none"
      />
    </div>
  );
}

export function LogosMarquee(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={250} />
      <div className="container py-12 lg:py-16 relative z-10">
        {/* Header text */}
        <BlurFade className="mb-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Trusted by 15,000+ apps and the world&apos;s largest app publishers
          </p>
        </BlurFade>

        {/* Marquee with pause on hover */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

          <Marquee
            pauseOnHover
            className="[--duration:30s] [--gap:0.5rem]"
            repeat={3}
          >
            {CUSTOMER_LOGOS.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </GridSection>
  );
}
