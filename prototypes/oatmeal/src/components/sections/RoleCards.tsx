'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { SpotlightCard } from '@/components/effects/SpotlightCard'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'
import Image from 'next/image'

function RoleCard({
  title,
  description,
  tags,
  image,
  index,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  index: number
}) {
  return (
    <FadeIn delay={index * 0.15}>
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
              src={image}
              alt={title}
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
            {title}
          </h3>
          <p className="text-olive-600 text-sm/6 mb-4 flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
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
  )
}

export function RoleCards() {
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
            <RoleCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
