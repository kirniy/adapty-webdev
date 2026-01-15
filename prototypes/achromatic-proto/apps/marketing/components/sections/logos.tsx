import * as React from 'react';
import Image from 'next/image';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';

// Show logos prominently - Sergey: "10-15 clients shown large and static, focus on each name"
const LOGOS = [
  { name: 'Feeld', file: '/logos/trusted-by/feeld.svg' },
  { name: 'Bumble', file: '/logos/trusted-by/bumble.svg' },
  { name: 'Weewoo', file: '/logos/trusted-by/weewoo.svg' },
  { name: 'AppNation', file: '/logos/trusted-by/appnation.webp' },
  { name: 'Almus', file: '/logos/trusted-by/almus.svg' },
  { name: 'Impala Studios', file: '/logos/trusted-by/impala-studios.svg' },
  { name: 'HubX', file: '/logos/trusted-by/hubx.svg' },
  { name: 'SocialKit', file: '/logos/trusted-by/socialkit.svg' },
  { name: 'Bickster', file: '/logos/trusted-by/bickster.png' },
  { name: 'Smitten', file: '/logos/trusted-by/smitten.webp' },
];

export function Logos(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-12 lg:py-16">
        <BlurFade className="mb-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Trusted by 15,000+ apps and the world&apos;s largest app publishers
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
                className="h-8 w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-100 dark:invert md:h-10"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
