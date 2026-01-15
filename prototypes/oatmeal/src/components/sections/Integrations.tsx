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

// Category colors for visual distinction
const categoryColors: Record<string, string> = {
  Analytics: 'bg-blue-500/10 text-blue-700',
  Attribution: 'bg-green-500/10 text-green-700',
  Platform: 'bg-orange-500/10 text-orange-700',
  Engagement: 'bg-purple-500/10 text-purple-700',
  Infrastructure: 'bg-slate-500/10 text-slate-700',
}

function IntegrationCard({
  name,
  src,
  description,
  category,
  index,
}: {
  name: string
  src: string
  description: string
  category: string
  index: number
}) {
  return (
    <FadeIn delay={0.05 * index}>
      <SpotlightCard>
        <motion.div
          className={cn(
            'group relative flex flex-col h-full p-6 rounded-xl',
            'bg-white border border-olive-200/50',
            'hover:border-olive-300 transition-colors duration-200'
          )}
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-lg bg-olive-50 group-hover:bg-olive-100 transition-colors">
            <Image
              src={src}
              alt={name}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          {/* Name and Description */}
          <h3 className="font-semibold text-olive-950 mb-1">{name}</h3>
          <p className="text-sm text-olive-600 mb-4 flex-1">{description}</p>

          {/* Category Badge */}
          <span
            className={cn(
              'inline-flex self-start px-2.5 py-1 rounded-full text-xs font-medium',
              categoryColors[category] || 'bg-olive-100 text-olive-700'
            )}
          >
            {category}
          </span>
        </motion.div>
      </SpotlightCard>
    </FadeIn>
  )
}

export function Integrations() {
  const { integrations } = content

  // Group integrations by category for visual organization
  const categories = [...new Set(integrations.map((i) => i.category))]

  return (
    <Section>
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-2">
            Works with your entire stack
          </Heading>
          <p className="mt-4 text-olive-600 max-w-2xl mx-auto text-lg">
            Connect Adapty to your favorite analytics, attribution, and engagement tools.
            Send subscription events everywhere in real-time.
          </p>
        </FadeIn>

        {/* Category Pills */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <span
                key={category}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium',
                  categoryColors[category] || 'bg-olive-100 text-olive-700'
                )}
              >
                {category}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={integration.name}
              {...integration}
              index={index}
            />
          ))}
        </div>

        {/* "And more" indicator */}
        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <p className="text-olive-500 text-sm">
              Plus Webhooks, REST API, and custom integrations via our SDK
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
