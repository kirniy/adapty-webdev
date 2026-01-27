'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

// Magic animation: Trust counter
function TrustCounterMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(15000);
      return;
    }
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 15000) return 15000;
        return prev + 500;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.span
      key={count}
      initial={shouldReduceMotion ? {} : { y: -3, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="font-semibold text-foreground"
    >
      {count.toLocaleString()}+
    </motion.span>
  );
}

// Show 7 logos max per Sergey's "7 logos rule" to avoid overloading attention
const LOGOS = [
  { name: 'Feeld', file: '/logos/trusted-by/feeld.svg' },
  { name: 'Bumble', file: '/logos/trusted-by/bumble.svg' },
  { name: 'HubX', file: '/logos/trusted-by/hubx.svg' },
  { name: 'AppNation', file: '/logos/trusted-by/appnation.webp' },
  { name: 'Impala Studios', file: '/logos/trusted-by/impala-studios.svg' },
  { name: 'SocialKit', file: '/logos/trusted-by/socialkit.svg' },
  { name: 'Almus', file: '/logos/trusted-by/almus.svg' },
];

export function Logos(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={200} />
      <div className="container py-12 lg:py-16 relative z-10">
        <BlurFade className="mb-8 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            Trusted by <TrustCounterMagic /> apps and the world&apos;s largest app publishers
          </p>
        </BlurFade>
        
        {/* Large, static logo grid - prominent display */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {LOGOS.map((logo, index) => (
            <BlurFade
              key={logo.name}
              delay={0.05 + index * 0.05}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={120}
                height={48}
                className="h-8 w-auto object-contain opacity-50 transition-all duration-200 ease-out hover:opacity-100 hover:scale-105 dark:invert md:h-10 motion-reduce:transition-none motion-reduce:hover:transform-none"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
