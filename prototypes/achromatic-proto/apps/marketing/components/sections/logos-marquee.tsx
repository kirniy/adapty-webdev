'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { Marquee } from '~/components/fragments/marquee';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: Trusted apps counter
function TrustedAppsMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(14950);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(15000);
      return;
    }
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 15000) return 15000;
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.span
        className="size-1.5 rounded-full bg-green-500"
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
      <motion.span
        key={count}
        initial={shouldReduceMotion ? {} : { y: -3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {count.toLocaleString()}+
      </motion.span>
    </motion.span>
  );
}

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
        <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={300} />
        {/* Header text */}
        <BlurFade className="mb-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Trusted by <TrustedAppsMagic /> apps and the world&apos;s largest app publishers
          </p>
        </BlurFade>

        {/* Marquee with pause on hover */}
        <div className="relative rounded-2xl border border-border/30 bg-background/50 overflow-hidden">
          <BorderBeam
            size={150}
            duration={20}
            borderWidth={1}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
            className="opacity-30"
          />
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
