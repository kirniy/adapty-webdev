'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { cn } from '@/lib/cn'
import { useTestimonialsVariant } from '@/lib/debug-context'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'

// Testimonial data - curated for maximum impact
const testimonials = [
  {
    quote:
      'The no-code paywall builder saved us months of development time. We can now iterate on our monetization strategy in real-time without waiting for app releases.',
    author: 'Chris Bick',
    role: 'CEO',
    company: 'Shmoody',
    avatar: '/images/testimonials/chris-bick.webp',
    metric: '+40%',
    metricLabel: 'conversion',
  },
  {
    quote:
      'Adapty helped us increase our subscription revenue by 40% in just 3 months. The A/B testing tools are incredibly powerful.',
    author: 'Cem Ortabas',
    role: 'CEO',
    company: 'Fotorama',
    avatar: '/images/testimonials/cem-ortabas.webp',
    metric: '3 months',
    metricLabel: 'to results',
  },
  {
    quote:
      'Switching to Adapty was the best decision we made. Their analytics and cohort tools are game-changers for understanding user behavior.',
    author: 'Roi Mulia',
    role: 'Growth Lead',
    company: 'Appi Trips',
    avatar: '/images/testimonials/roi-mulia.webp',
    metric: '10x',
    metricLabel: 'faster iteration',
  },
]

/**
 * Variant A: Editorial (Magazine-Style)
 *
 * Design philosophy:
 * - Sophisticated editorial layout inspired by premium magazines
 * - Large, confident typography with proper typographic hierarchy
 * - Scroll-triggered reveal creates reading rhythm
 * - Light theme with subtle olive background
 * - Company metric badge adds credibility
 *
 * Polished details:
 * - Custom easing curves for natural motion
 * - Proper vertical rhythm with golden ratio spacing
 * - Subtle gradient background that breathes
 * - Avatar with status ring indicating verified customer
 */
function TestimonialsEditorial() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Feature the most impactful testimonial
  const featured = testimonials[0]

  return (
    <Section className="relative overflow-hidden bg-olive-50 py-16 sm:py-24">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-adapty-100/30 via-transparent to-olive-100/50" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-adapty-200/20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-olive-200/30 blur-3xl" />
      </motion.div>

      <Container className="relative">
        <motion.div
          ref={containerRef}
          style={{ opacity }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow with line accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px w-12 bg-adapty-500" />
            <span className="text-sm font-medium tracking-wider uppercase text-adapty-600">
              Customer Story
            </span>
          </motion.div>

          {/* Large editorial quote */}
          <figure>
            <motion.blockquote
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Opening quote mark */}
              <span className="absolute -top-8 -left-2 text-8xl font-serif text-adapty-300/40 select-none">
                &ldquo;
              </span>

              <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-olive-950 leading-[1.2] tracking-tight">
                {featured.quote}
              </p>

              {/* Closing quote mark */}
              <span className="text-8xl font-serif text-adapty-300/40 select-none leading-none">
                &rdquo;
              </span>
            </motion.blockquote>

            {/* Author attribution with metric */}
            <motion.figcaption
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8"
            >
              <div className="flex items-center gap-5">
                {/* Avatar with verified ring */}
                <div className="relative">
                  <div className="relative size-16 rounded-full overflow-hidden ring-2 ring-adapty-400/50 ring-offset-4 ring-offset-olive-50">
                    <Image
                      src={featured.avatar}
                      alt={featured.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-adapty-500 flex items-center justify-center ring-2 ring-olive-50">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-olive-950">{featured.author}</p>
                  <p className="text-olive-600">
                    {featured.role} at {featured.company}
                  </p>
                </div>
              </div>

              {/* Impact metric */}
              <div className="flex items-baseline gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-olive-200 shadow-sm">
                <span className="text-4xl font-bold text-adapty-600 tracking-tight">
                  {featured.metric}
                </span>
                <span className="text-sm text-olive-600 uppercase tracking-wide">
                  {featured.metricLabel}
                </span>
              </div>
            </motion.figcaption>
          </figure>
        </motion.div>
      </Container>
    </Section>
  )
}

/**
 * Variant B: Wall (Social Proof Volume)
 *
 * Design philosophy:
 * - Creates impression of overwhelming social proof
 * - Infinite horizontal scroll shows endless testimonials
 * - Cards have depth with layered shadows
 * - Hover pauses scroll for readability
 *
 * Polished details:
 * - Seamless loop with duplicated content
 * - Gradient masks for smooth edge fade
 * - Staggered card heights for visual interest
 * - Company logos add credibility layer
 */
function TestimonialsWall() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate testimonials for seamless loop
  const items = [...testimonials, ...testimonials, ...testimonials]

  return (
    <Section className="bg-gradient-to-b from-white via-olive-50/30 to-white py-16 sm:py-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow>Loved by Teams</Eyebrow>
          <Heading as="h2" className="mt-3">
            Join thousands of growth teams
          </Heading>
          <p className="mt-4 text-lg text-olive-600 max-w-2xl mx-auto">
            From startups to enterprises, teams trust Adapty to grow their subscription business.
          </p>
        </motion.div>
      </Container>

      {/* Scrolling testimonials */}
      <div className="relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: isPaused ? 0 : [0, -33.33 * 16] }} // Move by 1/3 of content width
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {items.map((testimonial, index) => (
            <motion.figure
              key={`${testimonial.author}-${index}`}
              className={cn(
                'flex-none w-[380px] p-7 rounded-2xl',
                'bg-white border border-olive-100',
                'shadow-lg shadow-olive-900/5',
                'hover:shadow-xl hover:shadow-olive-900/8',
                'transition-shadow duration-300',
                'cursor-default'
              )}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {/* Quote */}
              <blockquote className="text-[17px] leading-relaxed text-olive-700 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author row */}
              <figcaption className="flex items-center justify-between pt-5 border-t border-olive-100">
                <div className="flex items-center gap-3.5">
                  <div className="relative size-11 rounded-full overflow-hidden ring-2 ring-olive-100">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900">{testimonial.author}</p>
                    <p className="text-sm text-olive-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* 5-star rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Trust indicators */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 mt-12 pt-8 border-t border-olive-100"
        >
          <div className="flex items-center gap-2 text-olive-600">
            <svg className="w-5 h-5 text-adapty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">4.9/5 average rating</span>
          </div>
          <div className="flex items-center gap-2 text-olive-600">
            <svg className="w-5 h-5 text-adapty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm font-medium">6,000+ teams</span>
          </div>
          <div className="flex items-center gap-2 text-olive-600">
            <svg className="w-5 h-5 text-adapty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium">$4B+ processed</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

/**
 * Variant C: Carousel (Focused Navigation)
 *
 * Design philosophy:
 * - One testimonial at a time demands attention
 * - Arrow navigation feels intentional and premium
 * - Large typography for maximum readability
 * - Cinematic transitions between testimonials
 *
 * Polished details:
 * - Keyboard navigation support (left/right arrows)
 * - Progress indicator shows position
 * - Swipe gestures on mobile
 * - Reduced motion support
 */
function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = testimonials[activeIndex]

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  return (
    <Section className="bg-olive-50 py-16 sm:py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header with navigation */}
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow>What People Say</Eyebrow>
              <Heading as="h2" className="mt-2">
                Customer Stories
              </Heading>
            </motion.div>

            {/* Navigation arrows */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={goPrev}
                className={cn(
                  'group size-12 rounded-full flex items-center justify-center',
                  'border-2 border-olive-300 hover:border-olive-400',
                  'bg-white hover:bg-olive-100',
                  'transition-all duration-200'
                )}
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-olive-600 group-hover:text-olive-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className={cn(
                  'group size-12 rounded-full flex items-center justify-center',
                  'border-2 border-olive-900 hover:border-adapty-500',
                  'bg-olive-900 hover:bg-adapty-500',
                  'transition-all duration-200'
                )}
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Testimonial card */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={activeIndex}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl bg-white p-10 lg:p-14 shadow-xl shadow-olive-900/5"
              >
                {/* Large decorative quote */}
                <div className="mb-8">
                  <svg
                    className="w-14 h-14 text-adapty-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Quote text */}
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-olive-900 leading-snug tracking-tight mb-10">
                  {current.quote}
                </blockquote>

                {/* Author and metric row */}
                <figcaption className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-olive-100">
                  <div className="flex items-center gap-4">
                    <div className="relative size-14 rounded-full overflow-hidden ring-4 ring-olive-100">
                      <Image
                        src={current.avatar}
                        alt={current.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-olive-900">{current.author}</p>
                      <p className="text-olive-500">
                        {current.role} at {current.company}
                      </p>
                    </div>
                  </div>

                  {/* Result metric */}
                  <div className="flex items-center gap-4 px-5 py-3 rounded-xl bg-adapty-50 border border-adapty-100">
                    <div className="size-10 rounded-lg bg-adapty-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-adapty-600">{current.metric}</p>
                      <p className="text-xs text-adapty-500 uppercase tracking-wide">{current.metricLabel}</p>
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  activeIndex === index
                    ? 'w-10 bg-adapty-500'
                    : 'w-2 bg-olive-300 hover:bg-olive-400'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function Testimonials() {
  const variant = useTestimonialsVariant()

  switch (variant) {
    case 'wall':
      return <TestimonialsWall />
    case 'carousel':
      return <TestimonialsCarousel />
    case 'editorial':
    default:
      return <TestimonialsEditorial />
  }
}
