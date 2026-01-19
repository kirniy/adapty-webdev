'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { cn } from '@/lib/cn'
import { useTestimonialsVariant } from '@/lib/debug-context'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef, useState, useCallback, useEffect } from 'react'

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
 * Variant A: Editorial (Magazine-Style) - SIMPLIFIED
 *
 * Per GEMINI_TASKS.md: Removed parallax/scroll effects
 * Focus on: ONE testimonial prominently, large LOGO, bold METRIC, short quote
 */
function TestimonialsEditorial() {
  const featured = testimonials[0]

  return (
    <Section className="relative overflow-hidden py-16 sm:py-24">
      {/* Static gradient background (no parallax) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-adapty-100/30 via-transparent to-olive-100/50" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-adapty-200/20 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto">
          {/* Company Logo - PRIMARY (per GEMINI_TASKS.md) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="text-3xl font-bold text-olive-950 tracking-tight">
              {featured.company}
            </div>
          </motion.div>

          {/* Metric - SECONDARY (bold, prominent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10"
          >
            <span className="text-6xl sm:text-7xl font-bold text-adapty-600 tracking-tight">
              {featured.metric}
            </span>
            <span className="block mt-2 text-lg text-olive-600 uppercase tracking-wide">
              {featured.metricLabel}
            </span>
          </motion.div>

          {/* Quote - TERTIARY (1-2 sentences max) */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <blockquote className="text-center">
              <p className="text-xl sm:text-2xl text-olive-700 leading-relaxed max-w-2xl mx-auto">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author attribution (small) */}
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-olive-200">
                <Image
                  src={featured.avatar}
                  alt={featured.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-olive-950">{featured.author}</p>
                <p className="text-sm text-olive-500">
                  {featured.role} at {featured.company}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant B: Wall (Social Proof Volume)
 */
function TestimonialsWall() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate testimonials for seamless loop
  const items = [...testimonials, ...testimonials, ...testimonials]

  return (
    <Section className="py-16 sm:py-24 overflow-hidden">
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
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-olive-100 via-olive-100/80 to-transparent z-10 pointer-events-none" />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-olive-100 via-olive-100/80 to-transparent z-10 pointer-events-none" />

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
    </Section>
  )
}

/**
 * Variant C: Carousel (Focused Navigation)
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
    <Section className="py-16 sm:py-24">
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

/**
 * Variant D: Sticky Stack (Cards stacking on scroll)
 * 
 * Design:
 * - Vertical layout where cards slide over each other
 * - Sticky positioning creates a "deck of cards" feel
 * - Very high polish, shadow depth increases as they stack
 * - No borders, just pure card metaphor
 */
function TestimonialsStickyStack() {
  return (
    <Section className="py-24">
      <Container>
        <div className="text-center mb-24">
          <Eyebrow>Stories</Eyebrow>
          <Heading className="mt-4">Trusted by the best</Heading>
        </div>
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <StickyCard key={index} testimonial={testimonial} index={index} total={testimonials.length} />
          ))}
        </div>
        
        {/* Spacer to allow scrolling past */}
        <div className="h-[20vh]" /> 
      </Container>
    </Section>
  )
}

function StickyCard({ testimonial, index, total }: { testimonial: typeof testimonials[0], index: number, total: number }) {
  // We use sticky positioning. Top offset increases for each card so they stack visibly.
  const topOffset = 120 + index * 20; 
  
  return (
    <motion.div 
      className="sticky mb-12 mx-auto max-w-4xl"
      style={{ 
        top: topOffset,
        zIndex: index 
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={cn(
        "bg-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-olive-900/10 border border-olive-100/50 backdrop-blur-sm",
        "flex flex-col md:flex-row gap-10 items-start md:items-center"
      )}>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6 text-adapty-600 font-medium text-sm uppercase tracking-wider">
            <span className="size-2 rounded-full bg-adapty-500" />
            {testimonial.company}
          </div>
          <p className="text-2xl md:text-3xl font-serif text-olive-900 leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden bg-olive-100">
              <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} className="object-cover" />
            </div>
            <div>
              <div className="font-semibold text-olive-900">{testimonial.author}</div>
              <div className="text-olive-500 text-sm">{testimonial.role}</div>
            </div>
          </div>
        </div>
        
        {/* Metric Card */}
        <div className="shrink-0 w-full md:w-64 bg-olive-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-olive-100">
          <div className="text-5xl font-bold text-adapty-600 tracking-tight mb-2">
            {testimonial.metric}
          </div>
          <div className="text-sm font-medium text-olive-600 uppercase tracking-wide">
            {testimonial.metricLabel}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Variant E: Minimal Slider (Text-focused fluid transition)
 * 
 * Design:
 * - No cards, just text floating in space
 * - Extremely minimal
 * - Click to advance (morphing effect)
 * - Focus is purely on the words
 */
function TestimonialsMinimalSlider() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <Section className="py-32 border-y border-olive-200">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,300px] gap-16 items-center">
            
            {/* Left: Quote */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-adapty-600 font-medium mb-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-adapty-200" />
                    {current.company} Story
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-olive-950 leading-[1.15]">
                    {current.quote}
                  </h3>
                  
                  <div className="mt-12 flex items-center gap-4">
                    <button onClick={prev} className="p-2 rounded-full border border-olive-200 hover:bg-olive-50 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <div className="text-sm font-medium text-olive-400">
                      0{index + 1} / 0{testimonials.length}
                    </div>
                    <button onClick={next} className="p-2 rounded-full border border-olive-200 hover:bg-olive-50 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Author & Metric */}
            <div className="lg:border-l lg:border-olive-100 lg:pl-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Image 
                    src={current.avatar} 
                    alt={current.author} 
                    width={80} 
                    height={80} 
                    className="rounded-full mb-6"
                  />
                  <div className="mb-8">
                    <div className="font-semibold text-olive-900 text-lg">{current.author}</div>
                    <div className="text-olive-500">{current.role}</div>
                  </div>
                  
                  <div className="pt-8 border-t border-olive-100">
                    <div className="text-4xl font-bold text-olive-900 mb-1">{current.metric}</div>
                    <div className="text-sm text-olive-500 uppercase tracking-wide">{current.metricLabel}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant F: Metric-Focused Grid (NEW - per GEMINI_TASKS.md)
 *
 * Design:
 * - Simple 3-column grid
 * - Each card: Logo + Metric + Short quote + Link
 * - NO animation except subtle hover lift
 * - Cards link to full case study pages
 */
function TestimonialsMetricFocused() {
  return (
    <Section className="py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Eyebrow>Customer Results</Eyebrow>
          <Heading as="h2" className="mt-3">
            Real outcomes from real teams
          </Heading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.a
              key={testimonial.author}
              href={`/customers/${testimonial.company.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                'group flex flex-col p-8 rounded-2xl',
                'bg-olive-50/50 border border-olive-100',
                'hover:bg-olive-50 hover:border-olive-200 hover:shadow-lg',
                'transition-all duration-300'
              )}
            >
              {/* Company Logo/Name (grayscale) */}
              <div className="mb-6">
                <span className="text-xl font-bold text-olive-400 group-hover:text-olive-600 transition-colors">
                  {testimonial.company}
                </span>
              </div>

              {/* Metric (bold, purple) */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-adapty-600 tracking-tight">
                  {testimonial.metric}
                </span>
                <span className="block mt-1 text-sm text-olive-500 uppercase tracking-wide">
                  {testimonial.metricLabel}
                </span>
              </div>

              {/* Quote (1 sentence max) */}
              <p className="text-olive-600 leading-relaxed flex-1 mb-6 line-clamp-2">
                &ldquo;{testimonial.quote.split('.')[0]}.&rdquo;
              </p>

              {/* Learn more link */}
              <div className="flex items-center gap-2 text-sm font-medium text-adapty-600 group-hover:text-adapty-700">
                Read case study
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function Testimonials() {
  const variant = useTestimonialsVariant()

  switch (variant) {
    case 'metric-focused':
      return <TestimonialsMetricFocused />
    case 'sticky-cards':
      // NOTE: sticky-cards is deprecated per Sergey's feedback (dated effect)
      // Fallback to metric-focused instead
      return <TestimonialsMetricFocused />
    case 'minimal-slider':
      return <TestimonialsMinimalSlider />
    case 'wall':
      return <TestimonialsWall />
    case 'carousel':
      return <TestimonialsCarousel />
    case 'editorial':
    default:
      return <TestimonialsEditorial />
  }
}
