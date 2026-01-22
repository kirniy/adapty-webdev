'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: Trusted apps counter
function TrustedAppsMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-flex items-center gap-1.5 text-primary font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.span
        className="size-1.5 rounded-full bg-green-500"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>15,000+</span>
    </motion.span>
  );
}

// Linear-style: 8 logos in a 4x2 grid, all blur on hover with centered CTA
const CUSTOMER_LOGOS = [
  { name: 'Feeld', file: '/logos/trusted-by/feeld.svg' },
  { name: 'Bumble', file: '/logos/trusted-by/bumble.svg' },
  { name: 'AppNation', file: '/logos/trusted-by/appnation.webp' },
  { name: 'HubX', file: '/logos/trusted-by/hubx.svg' },
  { name: 'Almus', file: '/logos/trusted-by/almus.svg' },
  { name: 'Impala Studios', file: '/logos/trusted-by/impala-studios.svg' },
  { name: 'WeWoo', file: '/logos/trusted-by/weewoo.svg' },
  { name: 'Bickster', file: '/logos/trusted-by/bickster.png' },
];

export function LogosLinear(): React.JSX.Element {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={300} />
      <div className="container py-16 lg:py-20 relative z-10">
        <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={300} />
        {/* Header text */}
        <BlurFade className="mb-12 text-center">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Powering <TrustedAppsMagic /> subscription apps worldwide.
          </h2>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            From indie developers to enterprise publishers.
          </p>
        </BlurFade>

        {/* Logo grid with hover effect */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logo Grid - 4 columns, 2 rows */}
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              filter: isHovered ? 'blur(10px)' : 'blur(0px)',
              opacity: isHovered ? 0.4 : 1,
            }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 lg:gap-16"
          >
            {CUSTOMER_LOGOS.map((logo, index) => (
              <BlurFade
                key={logo.name}
                delay={shouldReduceMotion ? 0 : 0.05 + index * 0.03}
                className="flex items-center justify-center"
              >
                <div className="flex h-12 items-center justify-center md:h-14">
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={160}
                    height={48}
                    className="h-8 w-auto max-w-[140px] object-contain grayscale md:h-10 md:max-w-[160px]"
                  />
                </div>
              </BlurFade>
            ))}
          </motion.div>

          {/* Centered CTA button - appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Link
                  href="https://adapty.io/customer-stories/"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full',
                    'bg-background/95 backdrop-blur-sm',
                    'border border-border/50 shadow-lg',
                    'px-6 py-3 text-sm font-medium',
                    'transition-all duration-150 ease-out',
                    'hover:bg-accent hover:shadow-xl',
                    'motion-reduce:transition-none'
                  )}
                >
                  Meet our customers
                  <ChevronRightIcon className="size-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </GridSection>
  );
}
