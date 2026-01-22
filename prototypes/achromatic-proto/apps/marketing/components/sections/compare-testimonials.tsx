'use client';

import * as React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';
import { SiteHeading } from '~/components/fragments/site-heading';

const TESTIMONIALS = [
  {
    quote:
      "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
    name: 'Cem Ortabas',
    title: 'Co-founder and CEO',
    company: 'HubX',
  },
  {
    quote:
      "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.",
    name: 'Chris Bick',
    title: 'Founder and CEO',
    company: 'Bickster',
  },
  {
    quote:
      'We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.',
    name: 'Yalcin Ozdemir',
    title: 'Founder & CEO',
    company: 'AppNation',
  },
  {
    quote:
      "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
    name: 'Kyle Smith',
    title: 'Head of data',
    company: 'Smitten Dating',
  },
  {
    quote:
      "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
    name: 'Roi Mulia',
    title: 'Founder & CEO',
    company: 'SocialKit',
  },
];

// Magic animation: G2 rating badge
function G2RatingMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [rating, setRating] = React.useState(4.0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setRating(4.9);
      return;
    }
    const interval = setInterval(() => {
      setRating(prev => {
        if (prev >= 4.9) return 4.9;
        return Math.min(4.9, prev + 0.1);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <StarIcon className="size-3.5 fill-amber-500 text-amber-500" />
      </motion.div>
      <span>{rating.toFixed(1)} on G2</span>
    </motion.div>
  );
}

export function CompareTestimonials(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 md:py-24 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            badge="Testimonials"
            title="People from all kinds of businesses turn to Adapty to grow their revenue"
          />
          <div className="mt-4 flex justify-center">
            <G2RatingMagic />
          </div>
        </BlurFade>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <BlurFade key={testimonial.name} delay={0.1 + index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered ? -6 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 transition-all duration-200',
                    isHovered && 'border-primary/30 shadow-lg shadow-primary/5'
                  )}
                >
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />
                  {isHovered && (
                    <BorderBeam
                      size={140}
                      duration={8}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}

                  <div className="relative z-10 flex-1">
                    {/* Quote icon */}
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: isHovered ? 1.15 : 1,
                        rotate: isHovered ? -8 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    >
                      <QuoteIcon className="size-5" />
                    </motion.div>

                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="relative z-10 mt-6 border-t border-border/50 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </div>
                      </div>

                      {/* Star rating */}
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            animate={shouldReduceMotion ? undefined : {
                              scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ delay: star * 0.02 }}
                          >
                            <StarIcon className="size-3 fill-amber-400 text-amber-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </GridSection>
  );
}
