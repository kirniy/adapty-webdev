'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { Marquee } from '@/components/effects/Marquee'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useIntegrationsVariant } from '@/lib/debug-context'
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

// Category badge colors (more muted for categorized view)
const categoryBadgeColors: Record<string, string> = {
  Analytics: 'bg-blue-50 text-blue-600 ring-blue-200/50',
  Attribution: 'bg-green-50 text-green-600 ring-green-200/50',
  Platform: 'bg-orange-50 text-orange-600 ring-orange-200/50',
  Engagement: 'bg-purple-50 text-purple-600 ring-purple-200/50',
  Messaging: 'bg-pink-50 text-pink-600 ring-pink-200/50',
  Payments: 'bg-indigo-50 text-indigo-600 ring-indigo-200/50',
}

// Variant A: Static Grid (current - 7-column responsive grid)
function IntegrationsStaticGrid() {
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

// Variant B: Marquee (scrolling logos like TrustedBy)
function IntegrationsMarquee() {
  const { integrations } = content

  return (
    <Section className="bg-white py-16 overflow-hidden">
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
      </Container>

      {/* Two-row marquee effect */}
      <div className="space-y-6">
        {/* Row 1 - Left direction */}
        <Marquee speed="slow" direction="left" pauseOnHover>
          {integrations.slice(0, 7).map((integration) => (
            <div
              key={integration.name}
              className={cn(
                'group flex items-center gap-3 px-5 py-3 rounded-full',
                'bg-olive-50 border border-olive-200/50',
                'hover:bg-olive-100 hover:border-olive-300',
                'transition-colors duration-200'
              )}
            >
              <div className="relative w-6 h-6 shrink-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/integrations/${integration.logo}`}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-olive-700 whitespace-nowrap">
                {integration.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2 - Right direction */}
        <Marquee speed="slow" direction="right" pauseOnHover>
          {integrations.slice(7).map((integration) => (
            <div
              key={integration.name}
              className={cn(
                'group flex items-center gap-3 px-5 py-3 rounded-full',
                'bg-olive-50 border border-olive-200/50',
                'hover:bg-olive-100 hover:border-olive-300',
                'transition-colors duration-200'
              )}
            >
              <div className="relative w-6 h-6 shrink-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/integrations/${integration.logo}`}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-olive-700 whitespace-nowrap">
                {integration.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <Container>
        <FadeIn delay={0.3}>
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

// Variant C: Categorized (grouped by integration type with headers)
function IntegrationsCategorized() {
  const { integrations } = content

  // Group integrations by category
  const groupedIntegrations = integrations.reduce(
    (acc, integration) => {
      const category = integration.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(integration)
      return acc
    },
    {} as Record<string, typeof integrations>
  )

  // Define category order
  const categoryOrder = ['Analytics', 'Attribution', 'Platform', 'Engagement', 'Messaging', 'Payments']

  return (
    <Section className="bg-white">
      <Container>
        <FadeIn className="text-center mb-16">
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-2">
            Connect with your favorite tools
          </Heading>
          <p className="mt-4 text-olive-600 max-w-2xl mx-auto">
            Send subscription data to analytics, attribution, and marketing platforms
          </p>
        </FadeIn>

        {/* Categorized Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOrder
            .filter((category) => groupedIntegrations[category])
            .map((category, categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 0.1}>
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'inline-flex px-3 py-1 text-xs font-semibold rounded-full ring-1',
                        categoryBadgeColors[category] || 'bg-olive-50 text-olive-600 ring-olive-200'
                      )}
                    >
                      {category}
                    </span>
                    <span className="text-xs text-olive-400">
                      {groupedIntegrations[category].length} integrations
                    </span>
                  </div>

                  {/* Integrations List */}
                  <div className="space-y-2">
                    {groupedIntegrations[category].map((integration, index) => (
                      <motion.div
                        key={integration.name}
                        className={cn(
                          'group flex items-center gap-3 p-3 rounded-lg',
                          'bg-olive-50/50 border border-transparent',
                          'hover:bg-olive-100 hover:border-olive-200',
                          'transition-all duration-200'
                        )}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="relative w-8 h-8 shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                          <Image
                            src={`/integrations/${integration.logo}`}
                            alt={integration.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-olive-700 group-hover:text-olive-900 transition-colors">
                          {integration.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.6}>
          <div className="mt-12 pt-8 border-t border-olive-100 text-center">
            <p className="text-olive-600 text-sm">
              Plus Webhooks, REST API, and custom integrations via our SDK
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function Integrations() {
  const variant = useIntegrationsVariant()

  switch (variant) {
    case 'marquee':
      return <IntegrationsMarquee />
    case 'categorized':
      return <IntegrationsCategorized />
    case 'static-grid':
    default:
      return <IntegrationsStaticGrid />
  }
}
