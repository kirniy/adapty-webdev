'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { Marquee } from '@/components/effects/Marquee'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useIntegrationsVariant } from '@/lib/debug-context'
import { motion } from 'motion/react'
import Image from 'next/image'

/**
 * Variant A: Grid (Minimal Logo Wall)
 *
 * Design philosophy:
 * - Clean, scannable grid of integration logos
 * - Minimal visual noise, maximum recognition
 * - Grayscale default with color on hover
 * - Light background separates from content sections
 *
 * Polished details:
 * - Responsive column count for optimal viewing
 * - Subtle hover lift with spring physics
 * - Category dot appears on hover for context
 * - Staggered fade-in creates visual rhythm
 */
function IntegrationsGrid() {
  const { integrations } = content

  return (
    <Section className="bg-olive-50/50 border-y border-olive-100 py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-3">
            Connect with your favorite tools
          </Heading>
          <p className="mt-4 text-lg text-olive-600 max-w-2xl mx-auto">
            Send subscription data to analytics, attribution, and marketing platforms.
          </p>
        </motion.div>

        {/* Integration Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-5">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <motion.div
                className={cn(
                  'group flex flex-col items-center justify-center py-5 px-3 rounded-xl',
                  'bg-white border border-olive-100',
                  'hover:border-olive-200 hover:shadow-lg hover:shadow-olive-900/5',
                  'transition-all duration-200 cursor-default'
                )}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Logo */}
                <div className="relative w-10 h-10 mb-2.5 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={`/integrations/${integration.logo}`}
                    alt={integration.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <span className="text-xs font-medium text-olive-600 group-hover:text-olive-900 text-center transition-colors">
                  {integration.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-olive-500 text-sm mb-4">
            Plus Webhooks, REST API, and custom integrations via our SDK
          </p>
          <a
            href="#"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full',
              'bg-olive-100 text-olive-700 text-sm font-medium',
              'hover:bg-olive-200 transition-colors'
            )}
          >
            View all integrations
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}

/**
 * Variant B: Marquee (Continuous Scroll)
 *
 * Design philosophy:
 * - Infinite scroll creates sense of abundance
 * - Two rows with opposite directions add dynamism
 * - Pill-shaped cards feel modern and lightweight
 * - Pauses on hover for exploration
 *
 * Polished details:
 * - Seamless loop without visible seams
 * - Gradient masks fade edges smoothly
 * - Logo colorizes on hover
 * - Speed balanced for readability
 */
function IntegrationsMarquee() {
  const { integrations } = content

  // Split for two rows
  const firstRow = integrations.slice(0, Math.ceil(integrations.length / 2))
  const secondRow = integrations.slice(Math.ceil(integrations.length / 2))

  return (
    <Section className="bg-gradient-to-b from-white via-olive-50/30 to-white py-16 sm:py-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-3">
            Works with your stack
          </Heading>
          <p className="mt-4 text-lg text-olive-600 max-w-2xl mx-auto">
            Connect Adapty to your analytics, attribution, and engagement platforms.
          </p>
        </motion.div>
      </Container>

      {/* Two-row marquee */}
      <div className="relative space-y-5">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Left direction */}
        <Marquee speed="slow" direction="left" pauseOnHover>
          {firstRow.map((integration) => (
            <div
              key={integration.name}
              className={cn(
                'group flex items-center gap-3 px-5 py-3 rounded-full',
                'bg-white border border-olive-200/60',
                'shadow-sm shadow-olive-900/5',
                'hover:border-olive-300 hover:shadow-md',
                'transition-all duration-200'
              )}
            >
              <div className="relative w-6 h-6 shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/integrations/${integration.logo}`}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-olive-700 group-hover:text-olive-900 whitespace-nowrap transition-colors">
                {integration.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2 - Right direction */}
        <Marquee speed="slow" direction="right" pauseOnHover>
          {secondRow.map((integration) => (
            <div
              key={integration.name}
              className={cn(
                'group flex items-center gap-3 px-5 py-3 rounded-full',
                'bg-white border border-olive-200/60',
                'shadow-sm shadow-olive-900/5',
                'hover:border-olive-300 hover:shadow-md',
                'transition-all duration-200'
              )}
            >
              <div className="relative w-6 h-6 shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/integrations/${integration.logo}`}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-olive-700 group-hover:text-olive-900 whitespace-nowrap transition-colors">
                {integration.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-olive-500 text-sm">
            Plus Webhooks, REST API, and custom integrations via our SDK
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

/**
 * Variant C: Categorized (Grouped by Type)
 *
 * Design philosophy:
 * - Organized by category for easy scanning
 * - Category badges provide visual anchors
 * - Compact list format for information density
 * - Clean separation between groups
 *
 * Polished details:
 * - Category badges with distinct colors
 * - Hover slide animation for list items
 * - Integration count shown per category
 * - 3-column responsive grid
 */
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

  // Category config with colors and icons
  const categoryConfig: Record<string, { color: string; bgColor: string }> = {
    Analytics: { color: 'text-blue-600', bgColor: 'bg-blue-50' },
    Attribution: { color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    Platform: { color: 'text-orange-600', bgColor: 'bg-orange-50' },
    Engagement: { color: 'text-violet-600', bgColor: 'bg-violet-50' },
    Messaging: { color: 'text-pink-600', bgColor: 'bg-pink-50' },
    Payments: { color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  }

  const categoryOrder = ['Analytics', 'Attribution', 'Platform', 'Engagement', 'Messaging', 'Payments']

  return (
    <Section className="bg-white py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-3">
            Connect by category
          </Heading>
          <p className="mt-4 text-lg text-olive-600 max-w-2xl mx-auto">
            Send subscription data to analytics, attribution, and marketing platforms.
          </p>
        </motion.div>

        {/* Categorized Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOrder
            .filter((category) => groupedIntegrations[category])
            .map((category, categoryIndex) => {
              const config = categoryConfig[category] || { color: 'text-olive-600', bgColor: 'bg-olive-50' }

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="rounded-2xl bg-olive-50/50 p-6 border border-olive-100"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={cn(
                        'inline-flex px-3 py-1.5 text-xs font-semibold rounded-lg',
                        config.bgColor,
                        config.color
                      )}
                    >
                      {category}
                    </span>
                    <span className="text-xs text-olive-500">
                      {groupedIntegrations[category].length} tools
                    </span>
                  </div>

                  {/* Integrations List */}
                  <div className="space-y-2">
                    {groupedIntegrations[category].map((integration, index) => (
                      <motion.div
                        key={integration.name}
                        className={cn(
                          'group flex items-center gap-3 p-3 rounded-xl',
                          'bg-white border border-olive-100/50',
                          'hover:border-olive-200 hover:shadow-sm',
                          'transition-all duration-200 cursor-default'
                        )}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="relative w-7 h-7 shrink-0 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
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
                </motion.div>
              )
            })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-olive-100 text-center"
        >
          <p className="text-olive-600 mb-5">
            Plus Webhooks, REST API, and custom integrations via our SDK
          </p>
          <a
            href="#"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-full',
              'bg-olive-900 text-white text-sm font-medium',
              'hover:bg-olive-800 transition-colors'
            )}
          >
            Explore all integrations
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
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
      return <IntegrationsGrid />
  }
}
