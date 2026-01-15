'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import Image from 'next/image'

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('size-8', className)}
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  index,
}: {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  index: number
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <div
        className={cn(
          'relative flex flex-col h-full p-8 rounded-2xl',
          'bg-white border border-olive-200',
          'shadow-sm hover:shadow-md transition-shadow duration-300',
          'group cursor-default'
        )}
      >
        {/* Quote icon */}
        <QuoteIcon className="text-olive-300 mb-4 group-hover:text-olive-400 transition-colors" />

        {/* Quote text */}
        <blockquote className="flex-1 text-olive-700 text-base/7 mb-6">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-olive-100">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-olive-950">{author}</p>
            <p className="text-sm text-olive-500">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export function Testimonials() {
  const { testimonials } = content

  return (
    <Section>
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Customer Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Loved by mobile teams worldwide
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
