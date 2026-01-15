'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { cn } from '@/lib/cn'
import { useTestimonialsVariant } from '@/lib/debug-context'
import { motion } from 'motion/react'
import Image from 'next/image'

// Hoisted static SVG - avoids re-creating on every render
const quoteIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-olive-300 mb-6 opacity-30"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
)

const largeQuoteIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-adapty-500/20"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
)

// Testimonial data
const allTestimonials = [
  {
    quote:
      'The no-code paywall builder saved us months of development time. We can now iterate on our monetization strategy in real-time without waiting for app releases.',
    author: 'Chris Bick',
    role: 'CEO',
    company: 'Shmoody',
    avatar: '/images/testimonials/chris-bick.webp',
  },
  {
    quote:
      'Adapty helped us increase our subscription revenue by 40% in just 3 months. The A/B testing tools are incredibly powerful.',
    author: 'Cem Ortabas',
    role: 'CEO',
    company: 'Fotorama',
    avatar: '/images/testimonials/cem-ortabas.webp',
  },
  {
    quote:
      'Switching to Adapty was the best decision we made. Their analytics and cohort tools are game-changers.',
    author: 'Roi Mulia',
    role: 'Growth Lead',
    company: 'Appi Trips',
    avatar: '/images/testimonials/roi-mulia.webp',
  },
]

// Variant A: Grid (current - 3 equal columns)
function TestimonialsGrid() {
  return (
    <Section className="bg-olive-50">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Customer Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Trusted by growth teams
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allTestimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={0.1 + index * 0.1}>
              <motion.figure
                className={cn(
                  'group relative flex flex-col h-full rounded-2xl bg-white p-8',
                  'border border-olive-200/50',
                  'hover:shadow-xl hover:shadow-olive-900/5',
                  'transition-shadow duration-300'
                )}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {quoteIcon}

                <blockquote className="flex-1 text-lg/7 text-olive-700 mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="flex items-center gap-4 pt-6 border-t border-olive-100">
                  <motion.div
                    className="relative size-12 rounded-full overflow-hidden ring-2 ring-olive-100"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-olive-950">{testimonial.author}</p>
                    <p className="text-sm text-olive-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant B: Large Featured (one big testimonial, others smaller - Stripe-style)
function TestimonialsLargeFeatured() {
  const [featured, ...others] = allTestimonials

  return (
    <Section className="bg-white">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Customer Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Trusted by growth teams
          </Heading>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured large testimonial */}
          <FadeIn>
            <figure className="relative h-full rounded-3xl bg-olive-50 p-10 lg:p-12">
              {largeQuoteIcon}

              <blockquote className="mt-6 text-2xl/9 lg:text-3xl/10 font-medium text-olive-900">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-4">
                <div className="relative size-14 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <Image
                    src={featured.avatar}
                    alt={featured.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-olive-950">{featured.author}</p>
                  <p className="text-olive-600">
                    {featured.role}, {featured.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </FadeIn>

          {/* Other testimonials stacked */}
          <div className="space-y-6">
            {others.map((testimonial, index) => (
              <FadeIn key={testimonial.author} delay={0.1 + index * 0.1}>
                <figure className="rounded-2xl bg-olive-50/50 p-6 border border-olive-100">
                  <blockquote className="text-lg text-olive-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-4 flex items-center gap-3">
                    <div className="relative size-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-olive-900">{testimonial.author}</p>
                      <p className="text-sm text-olive-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Variant C: Carousel (horizontal scrollable)
function TestimonialsCarousel() {
  return (
    <Section className="bg-olive-50 overflow-hidden">
      <Container>
        <FadeIn className="text-center mb-12">
          <Eyebrow>Customer Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Trusted by growth teams
          </Heading>
        </FadeIn>
      </Container>

      {/* Full-width carousel */}
      <div className="flex gap-6 overflow-x-auto pb-4 px-4 sm:px-8 snap-x snap-mandatory scrollbar-hide">
        {allTestimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.author} delay={0.1 + index * 0.1}>
            <figure
              className={cn(
                'flex-none w-[85vw] sm:w-[400px] snap-center',
                'rounded-2xl bg-white p-8 shadow-lg shadow-olive-900/5'
              )}
            >
              {quoteIcon}

              <blockquote className="text-lg/7 text-olive-700 mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-6 border-t border-olive-100">
                <div className="relative size-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-olive-950">{testimonial.author}</p>
                  <p className="text-sm text-olive-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}

// Main component that switches based on debug context
export function Testimonials() {
  const variant = useTestimonialsVariant()

  switch (variant) {
    case 'large-featured':
      return <TestimonialsLargeFeatured />
    case 'carousel':
      return <TestimonialsCarousel />
    case 'grid':
    default:
      return <TestimonialsGrid />
  }
}
