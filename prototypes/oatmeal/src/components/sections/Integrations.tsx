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

// Category colors for visual distinction
const categoryColors: Record<string, string> = {
  Analytics: 'bg-blue-500/10 text-blue-700 border-blue-200',
  Attribution: 'bg-green-500/10 text-green-700 border-green-200',
  Platform: 'bg-orange-500/10 text-orange-700 border-orange-200',
  Engagement: 'bg-purple-500/10 text-purple-700 border-purple-200',
  Messaging: 'bg-pink-500/10 text-pink-700 border-pink-200',
  Payments: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
}

export function Integrations() {
  const { integrations } = content

  return (
    <Section className="bg-olive-50/50 border-y border-olive-200/50">
      <Container>
        <FadeIn className="text-center mb-12">
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-2">
            Connect with your favorite tools
          </Heading>
          <p className="mt-4 text-olive-600 max-w-2xl mx-auto">
            Send subscription data to analytics, attribution, and marketing platforms
          </p>
        </FadeIn>

        {/* Integration Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {integrations.map((integration, index) => (
            <FadeIn key={integration.name} delay={0.03 * index}>
              <motion.div
                className={cn(
                  'group flex flex-col items-center justify-center p-4 rounded-xl',
                  'bg-white border border-olive-100',
                  'hover:border-olive-300 hover:shadow-md',
                  'transition-all duration-200'
                )}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {/* Logo */}
                <div className="relative w-10 h-10 mb-2 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={`/integrations/${integration.logo}`}
                    alt={integration.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <span className="text-xs font-medium text-olive-700 text-center">
                  {integration.name}
                </span>

                {/* Category indicator (subtle dot) */}
                <span
                  className={cn(
                    'mt-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity',
                    integration.category === 'Analytics' && 'bg-blue-500',
                    integration.category === 'Attribution' && 'bg-green-500',
                    integration.category === 'Platform' && 'bg-orange-500',
                    integration.category === 'Engagement' && 'bg-purple-500',
                    integration.category === 'Messaging' && 'bg-pink-500',
                    integration.category === 'Payments' && 'bg-indigo-500'
                  )}
                />
              </motion.div>
            </FadeIn>
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
