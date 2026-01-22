'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: Average rating counter
function RatingMagic() {
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
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </motion.svg>
      <span>{rating.toFixed(1)} avg rating</span>
    </motion.div>
  );
}

// All 8 real testimonials from adapty.io homepage - content parity with clean variant
const DATA = [
  {
    name: 'Cem Ortabas',
    role: 'Co-founder and CEO',
    company: 'HubX',
    img: '/images/testimonials/cem-ortabas.webp',
    quote: "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call.",
    metric: '3x',
    metricLabel: 'MRR growth'
  },
  {
    name: 'Chris Bick',
    role: 'Founder and CEO',
    company: 'Bickster',
    img: '/images/testimonials/chris-bick.webp',
    quote: "We've been working with Adapty since 2021 and I couldn't be happier about it. They have the best analytics on the market and all the integrations you can think of.",
    metric: '+35%',
    metricLabel: 'conversion'
  },
  {
    name: 'Yalcin Ozdemir',
    role: 'Founder and CEO',
    company: 'AppNation',
    img: '/images/testimonials/asman.webp',
    quote: "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively.",
    metric: '2.5x',
    metricLabel: 'ARPU'
  },
  {
    name: 'Kyle Smith',
    role: 'Head of Data',
    company: 'Smitten Dating',
    img: '/images/testimonials/kyle.webp',
    quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure.",
    metric: '+40%',
    metricLabel: 'trial CVR'
  },
  {
    name: 'Roi Mulia',
    role: 'Founder and CEO',
    company: 'SocialKit',
    img: '/images/testimonials/roi-mulia.webp',
    quote: "We've tested more than three hundred paywalls in four months. With Adapty's A/B testing, we managed to double our monthly revenue.",
    metric: '2x',
    metricLabel: 'revenue'
  },
  {
    name: 'Magnus Olafsson',
    role: 'Chief Technology Officer',
    company: 'Smitten',
    img: '/images/testimonials/magnus-olafsson.webp',
    quote: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly.",
    metric: '10x',
    metricLabel: 'faster'
  },
  {
    name: 'Ilgar Tali',
    role: 'Founder and Chief Vision Officer',
    company: 'Smartist',
    img: '/images/testimonials/ilgar-tali.webp',
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    metric: '+50%',
    metricLabel: 'LTV'
  },
  {
    name: 'Mike McSweeney',
    role: 'Chief Product Officer',
    company: 'Moodworks Inc',
    img: '/images/testimonials/mike-mcsweeney.webp',
    quote: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
    metric: '99.9%',
    metricLabel: 'uptime'
  }
];

function SplitText({ text, shouldReduceMotion }: { text: string; shouldReduceMotion: boolean | null }) {
  const words = text.split(" ")

  if (shouldReduceMotion) {
    return <span className="inline">{text}</span>
  }

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.3,
            delay: i * 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

interface TestimonialsProps {
  items?: typeof DATA;
}

export function Testimonials({ items = DATA }: TestimonialsProps): React.JSX.Element {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const activeTestimonial = items[activeIndex];

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />

      <div className="container py-24 lg:py-32 relative z-10">
        <BlurFade className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 rounded-full">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance mb-4">
            Loved by developers worldwide
          </h2>
          <RatingMagic />
        </BlurFade>

        {/* Interactive Testimonial Area */}
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto min-h-[500px] flex flex-col justify-between"
          style={{ cursor: shouldReduceMotion ? "auto" : "none" }}
          onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleNext}
        >
          {/* Custom magnetic cursor */}
          {!shouldReduceMotion && (
            <motion.div
              className="pointer-events-none absolute z-50 mix-blend-difference top-0 left-0"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <motion.div
                className="rounded-full bg-white flex items-center justify-center p-2"
                animate={{
                  width: isHovered ? 80 : 20,
                  height: isHovered ? 80 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              >
                <motion.span
                  className="text-black text-xs font-bold tracking-wider uppercase whitespace-nowrap"
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="sr-only">Next</span>
                  <PlusIcon className="size-4" />
                </motion.span>
              </motion.div>
            </motion.div>
          )}

          <div className="relative z-10 p-8 md:p-12 lg:p-16 rounded-3xl border bg-background/50 backdrop-blur-sm shadow-sm overflow-hidden group hover:border-primary/20 transition-colors duration-500">
            <BorderBeam size={250} duration={12} borderWidth={1.5} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--primary)/0.3)" />
            <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={400} />
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:items-center">
              {/* Visual Side */}
              <div className="flex-1 space-y-8 order-2 md:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap gap-2 text-sm font-medium text-muted-foreground">
                      <span className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50">
                        {activeTestimonial.metric} {activeTestimonial.metricLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50">
                        {activeTestimonial.role}
                      </span>
                    </div>

                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
                      <SplitText text={activeTestimonial.quote} shouldReduceMotion={shouldReduceMotion} />
                    </blockquote>

                    <div className="pt-4 flex items-center gap-4">
                      <div className="text-base">
                        <div className="font-semibold text-foreground">
                          {activeTestimonial.name}
                        </div>
                        <div className="text-muted-foreground">
                          {activeTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image Side - Stacked Grid */}
              <div className="w-full md:w-[320px] shrink-0 order-1 md:order-2 flex justify-end">
                <div className="relative size-[280px] md:size-[320px]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {items.map((item, i) => {
                      // Only show the active one and the next 2 for visual stacking
                      const diff = (i - activeIndex + items.length) % items.length;
                      if (diff > 2) return null;

                      const scale = 1 - diff * 0.1;
                      const rotate = diff * 5;
                      const zIndex = 30 - diff;

                      return (
                        <motion.div
                          key={item.name}
                          className={cn(
                            "absolute inset-0 rounded-2xl overflow-hidden border-2 bg-muted shadow-2xl origin-bottom-right",
                            diff === 0 ? "border-primary/20" : "border-background/50 grayscale opacity-40"
                          )}
                          initial={{ opacity: 0, scale: 0.9, x: 20 }}
                          animate={{
                            opacity: diff === 0 ? 1 : 0.4,
                            scale,
                            rotate,
                            zIndex,
                            x: diff * 20,
                            y: diff * 10
                          }}
                          exit={{ opacity: 0, scale: 1.1, x: -20, rotate: -5 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                        >
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 320px"
                            priority={i === activeIndex}
                          />
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center text-sm text-muted-foreground">
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-primary/20"
                    )}
                  />
                ))}
              </div>
              <div className="hidden md:block">
                Click to view next story
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://adapty.io/customer-stories/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all customer stories
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </GridSection>
  );
}
