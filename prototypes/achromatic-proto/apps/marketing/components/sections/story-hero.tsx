'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TrendingUpIcon, UsersIcon, GlobeIcon } from 'lucide-react';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';
import { cn } from '@workspace/ui/lib/utils';

const HERO_STATS = [
  { icon: UsersIcon, value: '10K+', label: 'Apps powered' },
  { icon: GlobeIcon, value: '150+', label: 'Countries served' },
  { icon: TrendingUpIcon, value: '$1.9B', label: 'Revenue processed' },
];

// Magic animation: Founded year badge
function FoundedMagic() {
  const shouldReduceMotion = useReducedMotion();

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
      <span>Founded 2019</span>
    </motion.div>
  );
}

export function StoryHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);

  return (
    <GridSection hideVerticalGridLines className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-24 md:py-32 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            badge="Our Story"
            title="Powering the world's best subscription apps"
            description="From a bold vision to democratize subscription monetization to the platform trusted by 10,000+ apps worldwide. We're building the tools that help developers turn great apps into sustainable businesses."
          />
          <div className="mt-4 flex justify-center">
            <FoundedMagic />
          </div>
        </BlurFade>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {HERO_STATS.map((stat, index) => {
            const Icon = stat.icon;
            const isHovered = hoveredStat === index;
            return (
              <BlurFade key={stat.label} delay={0.1 + index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered ? -4 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card className={cn(
                    "text-center relative overflow-hidden transition-all duration-200",
                    isHovered && "border-primary/50 shadow-lg"
                  )}>
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={180} />
                    {isHovered && (
                      <BorderBeam
                        size={120}
                        duration={8}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-3"
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 8 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                      >
                        <Icon className="size-5 text-primary" />
                      </motion.div>
                      <motion.p
                        className="text-2xl font-bold text-primary"
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </GridSection>
  );
}
