'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { SpotlightCard } from '@/components/effects/SpotlightCard'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useRoleCardsVariant } from '@/lib/debug-context'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

// Variant A: Full (current - image, title, tags, description)
function RoleCardsFull() {
  const { roleCards } = content

  return (
    <Section className="bg-olive-50">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Built for Every Role</Eyebrow>
          <Heading as="h2" className="mt-2">
            One platform, every team
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {roleCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.15}>
              <SpotlightCard
                className={cn(
                  'group relative flex flex-col h-full overflow-hidden',
                  'rounded-2xl bg-white border border-olive-200',
                  'hover:border-olive-300 transition-colors duration-300'
                )}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold text-olive-950 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-olive-600 text-sm/6 mb-4 flex-1">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + tagIndex * 0.1 }}
                        className={cn(
                          'inline-flex px-3 py-1 rounded-full',
                          'bg-olive-100 text-olive-700 text-xs font-medium'
                        )}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant B: Simplified (title and description only, no image/tags)
function RoleCardsSimplified() {
  const { roleCards } = content

  return (
    <Section className="bg-white">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Built for Every Role</Eyebrow>
          <Heading as="h2" className="mt-2">
            One platform, every team
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {roleCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1}>
              <div className="group">
                <h3 className="text-xl font-semibold text-olive-950 mb-3 group-hover:text-adapty-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-olive-600 text-base/7">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant C: Minimal Links (just text links, ultra clean)
function RoleCardsMinimal() {
  const { roleCards } = content

  return (
    <Section className="py-16 border-y border-olive-200">
      <Container>
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <Eyebrow>Built for Every Role</Eyebrow>
            <Heading as="h2" className="mt-2 max-w-md">
              One platform, every team
            </Heading>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {roleCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.05}>
                <Link
                  href="#"
                  className={cn(
                    'text-lg font-medium text-olive-700',
                    'hover:text-adapty-600 transition-colors',
                    'underline underline-offset-4 decoration-olive-300 hover:decoration-adapty-400'
                  )}
                >
                  {card.title}
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function RoleCards() {
  const variant = useRoleCardsVariant()

  switch (variant) {
    case 'simplified':
      return <RoleCardsSimplified />
    case 'minimal':
      return <RoleCardsMinimal />
    case 'full':
    default:
      return <RoleCardsFull />
  }
}
