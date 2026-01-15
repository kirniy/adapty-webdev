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

// All testimonials as a flat array for the 3-column grid
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

export function Testimonials() {
  return (
    <Section className="bg-olive-50">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Customer Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Trusted by growth teams
          </Heading>
        </FadeIn>

        {/* 3-Column Testimonial Grid */}
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
                <QuoteIcon className="mb-6 opacity-30" />

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
