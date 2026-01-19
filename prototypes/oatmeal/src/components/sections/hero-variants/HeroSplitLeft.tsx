'use client'

import { useState } from 'react'
import { ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { FadeIn } from '@/components/effects/FadeIn'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { TextReveal } from '@/components/effects/TextReveal'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

/**
 * Hero Two-Column Split (IMPROVED)
 *
 * Based on Linear + Vercel patterns:
 * - Split layout with content left, interactive visual right
 * - Customer avatar row for social proof (Linear pattern)
 * - Tabbed product preview showing different product areas (Vercel pattern)
 * - Trust metrics as pills below content
 * - Subtle animations on tab switch (opacity + y-transform only)
 */

const PRODUCT_TABS = [
  {
    id: 'analytics',
    label: 'Analytics',
    image: '/images/hero-overview.webp',
    alt: 'Adapty analytics dashboard',
  },
  {
    id: 'paywalls',
    label: 'Paywalls',
    image: '/images/hero-overview.webp', // TODO: Replace with paywall screenshot
    alt: 'Adapty paywall builder',
  },
  {
    id: 'ab-testing',
    label: 'A/B Testing',
    image: '/images/hero-overview.webp', // TODO: Replace with A/B testing screenshot
    alt: 'Adapty A/B testing interface',
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    image: '/images/hero-overview.webp', // TODO: Replace with onboarding screenshot
    alt: 'Adapty onboarding flows',
  },
]

// Customer avatars for social proof (Linear pattern)
const CUSTOMER_AVATARS = [
  { name: 'Calm', initial: 'C', bg: 'bg-blue-500' },
  { name: 'Babbel', initial: 'B', bg: 'bg-emerald-500' },
  { name: 'Mimo', initial: 'M', bg: 'bg-amber-500' },
  { name: 'Zing', initial: 'Z', bg: 'bg-rose-500' },
  { name: 'JEFIT', initial: 'J', bg: 'bg-violet-500' },
]

export function HeroSplitLeft() {
  const { hero } = content
  const [activeTab, setActiveTab] = useState(PRODUCT_TABS[0].id)
  const activeProduct = PRODUCT_TABS.find((t) => t.id === activeTab) || PRODUCT_TABS[0]

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)]">
      <Container className="relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:min-h-[calc(100vh-80px)]">
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-w-xl">
            <FadeIn delay={0}>
              <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
            </FadeIn>

            <h1 className="text-4xl/[1.1] sm:text-5xl/[1.1] lg:text-6xl/[1.1] font-medium tracking-tight text-olive-950">
              <TextReveal delay={0.1}>{hero.headline}</TextReveal>
              <br />
              <span className="text-adapty-600">
                <TextReveal delay={0.25}>{hero.headlineAccent}</TextReveal>
              </span>
            </h1>

            <FadeIn delay={0.35}>
              <p className="mt-6 text-lg/7 text-olive-600 max-w-lg">
                {hero.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <ButtonLink href="#" size="lg" variant="primary" shimmer>
                    {hero.cta.primary}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </ButtonLink>
                </MagneticButton>
                <ButtonLink href="#" size="lg" variant="secondary">
                  {hero.cta.secondary}
                </ButtonLink>
              </div>
            </FadeIn>

            {/* Customer Avatar Row (Linear pattern) */}
            <FadeIn delay={0.55}>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {CUSTOMER_AVATARS.map((customer) => (
                    <div
                      key={customer.name}
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center',
                        'text-white text-xs font-medium',
                        'ring-2 ring-white',
                        customer.bg
                      )}
                      title={customer.name}
                    >
                      {customer.initial}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-olive-600">
                  Trusted by <span className="font-semibold text-olive-900">15,000+</span> apps
                </span>
              </div>
            </FadeIn>

            {/* Trust Metrics as Pills */}
            <FadeIn delay={0.65}>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-sm text-olive-700">
                  <span className="font-semibold">$2B+</span> revenue tracked
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-sm text-olive-700">
                  <span className="font-semibold">SOC 2</span> Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-100 text-sm text-olive-700">
                  <span className="font-semibold">4.9</span> App Store
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Tabbed Product Preview (Vercel pattern) */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative lg:ml-auto">
              {/* Decorative background element */}
              <motion.div
                className={cn(
                  'absolute -inset-4 rounded-3xl',
                  'bg-gradient-to-br from-adapty-100 via-adapty-50 to-olive-100',
                  'opacity-60'
                )}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Main Demo Container */}
              <motion.div
                className={cn(
                  'relative rounded-2xl overflow-hidden',
                  'ring-1 ring-olive-200/50',
                  'shadow-2xl shadow-olive-900/10'
                )}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Tab Navigation (Vercel-style) */}
                <div className="bg-olive-100/80 backdrop-blur-sm px-4 py-2 border-b border-olive-200/50">
                  <div className="flex items-center gap-1">
                    {/* Browser dots */}
                    <div className="flex gap-1.5 mr-4">
                      <div className="w-3 h-3 rounded-full bg-olive-300" />
                      <div className="w-3 h-3 rounded-full bg-olive-300" />
                      <div className="w-3 h-3 rounded-full bg-olive-300" />
                    </div>
                    {/* Product tabs */}
                    <div className="flex gap-1">
                      {PRODUCT_TABS.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={cn(
                            'px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150',
                            activeTab === tab.id
                              ? 'bg-white text-olive-900 shadow-sm'
                              : 'text-olive-500 hover:text-olive-700 hover:bg-olive-200/50'
                          )}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Screenshot with Animation */}
                <div className="relative bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.alt}
                        width={700}
                        height={500}
                        className="w-full h-auto"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-adapty-100/40 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-olive-100/50 rounded-full blur-3xl -translate-x-1/2" />
      </div>
    </section>
  )
}
