'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'
import Image from 'next/image'

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-8 h-8 text-olive-300', className)}
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

export function Testimonials() {
  const { featuredTestimonial, testimonials } = content

  return (
    <Section className="bg-olive-50">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Customer Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Trusted by growth teams
          </Heading>
        </FadeIn>

        {/* Featured Large Testimonial - Two Column with Photo */}
        <FadeIn delay={0.1}>
          <figure className="grid grid-cols-1 gap-2 rounded-2xl bg-olive-950/[0.025] p-2 lg:grid-cols-2 overflow-hidden">
            {/* Quote Side */}
            <div className="flex flex-col items-start justify-between gap-10 p-8 sm:p-12 text-olive-950 order-2 lg:order-1">
              <div className="relative">
                <QuoteIcon className="absolute -top-2 -left-2 opacity-20 w-12 h-12" />
                <blockquote className="relative text-xl sm:text-2xl/9 text-pretty font-display tracking-tight">
                  <span>&ldquo;</span>
                  {featuredTestimonial.quote}
                  <span>&rdquo;</span>
                </blockquote>
              </div>

              <figcaption className="flex items-center gap-4">
                <motion.div
                  className="relative size-14 rounded-full overflow-hidden ring-2 ring-olive-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Image
                    src={featuredTestimonial.avatar}
                    alt={featuredTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <p className="font-semibold text-olive-950">{featuredTestimonial.author}</p>
                  <p className="text-sm text-olive-600">
                    {featuredTestimonial.role} at {featuredTestimonial.company}
                  </p>
                </div>
              </figcaption>
            </div>

            {/* Photo Side */}
            <motion.div
              className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-xl order-1 lg:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={featuredTestimonial.photo}
                alt={`${featuredTestimonial.author} at ${featuredTestimonial.company}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/20 to-transparent" />
            </motion.div>
          </figure>
        </FadeIn>

        {/* Secondary Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={0.2 + index * 0.1}>
              <motion.div
                className={cn(
                  'group relative rounded-xl bg-white p-8',
                  'border border-olive-200/50',
                  'hover:shadow-lg hover:shadow-olive-900/5',
                  'transition-shadow duration-300'
                )}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <QuoteIcon className="mb-4 opacity-30" />
                <blockquote className="text-lg/7 text-olive-700 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="relative size-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-olive-950">{testimonial.author}</p>
                    <p className="text-xs text-olive-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
