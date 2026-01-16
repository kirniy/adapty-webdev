'use client'

import { ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Screenshot } from '@/components/elements/Screenshot'
import { Section, SectionHeader } from '@/components/elements/Section'
import { Subheading } from '@/components/elements/Subheading'
import { Text } from '@/components/elements/Text'
import { FadeIn } from '@/components/effects/FadeIn'
import { BentoAnalyticsCard } from '../elements/bento/BentoAnalyticsCard'
import { BentoIntegrationsCard } from '../elements/bento/BentoIntegrationsCard'
import { BentoCard, BentoCardContent, BentoCardDescription, BentoCardHeader, BentoCardTitle } from '../elements/bento/BentoCard'
import { content } from '@/lib/content'
import { useCoreFeaturesVariant } from '@/lib/debug-context'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/**
 * Variant A: Zigzag Alternating
 *
 * Design decisions:
 * - Classic alternating 50/50 layout creates reading rhythm
 * - Uses group-even pattern for automatic flow reversal
 * - Large screenshots with browser chrome add realism
 * - Generous vertical spacing creates breathing room
 * - Best for: Deep feature exploration, storytelling
 */
function CoreFeaturesZigzag() {
  const { features } = content

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-16 lg:mb-24">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        <div className="flex flex-col gap-24 lg:gap-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                'group grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center',
                // Alternate layout direction
                index % 2 === 1 && 'lg:[&>*:first-child]:order-2'
              )}
            >
              {/* Text Content */}
              <FadeIn delay={0.1} direction={index % 2 === 0 ? 'right' : 'left'}>
                <div className="max-w-lg">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-adapty-600 mb-4">
                    <span className="w-8 h-px bg-adapty-300" />
                    {feature.eyebrow}
                  </span>
                  <h3 className="text-3xl/[1.15] sm:text-4xl/[1.15] font-medium tracking-tight text-olive-950">
                    {feature.title}
                  </h3>
                  <Text size="lg" className="mt-4 text-olive-600">
                    {feature.description}
                  </Text>
                  <div className="mt-6">
                    <ButtonLink href="#" variant="ghost" className="text-adapty-600 hover:text-adapty-700 -ml-3">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </ButtonLink>
                  </div>
                </div>
              </FadeIn>

              {/* Screenshot */}
              <FadeIn delay={0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Screenshot
                  wallpaper={feature.wallpaper}
                  placement={index % 2 === 0 ? 'bottom-right' : 'bottom-left'}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </Screenshot>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant B: Bento Grid
 *
 * Design decisions:
 * - Modern bento-style layout with varied card sizes
 * - Uses specialized high-fidelity cards (Analytics, Integrations)
 * - Subtle card backgrounds with hover interactions
 * - Best for: Quick scanning, modern aesthetic
 */
function CoreFeaturesBento() {
  const { features } = content

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-12">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* 1. Paywall Builder (Large Hero) */}
          <FadeIn delay={0} className="md:col-span-2 lg:col-span-2 row-span-2 lg:row-span-1 h-[300px] lg:h-auto">
            <BentoCard className="h-full">
              <div className="flex flex-col h-full">
                <BentoCardHeader>
                  <BentoCardTitle>Paywall Builder</BentoCardTitle>
                  <BentoCardDescription>
                    No-code visual builder with 50+ templates. Design, customize, and ship paywalls without developers.
                  </BentoCardDescription>
                </BentoCardHeader>
                <BentoCardContent className="flex-1 min-h-[200px] lg:min-h-0 relative rounded-xl overflow-hidden ring-1 ring-olive-900/5 shadow-sm mt-2 group">
                   <Image
                      src={features[0].image}
                      alt="Paywall Builder"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* UI Overlay mock */}
                    <div className="absolute inset-x-4 bottom-4 h-12 bg-white/90 backdrop-blur-md rounded-lg border border-olive-900/10 flex items-center px-4 justify-between animate-pulse-soft">
                        <div className="flex gap-2">
                            <div className="w-8 h-2 bg-olive-200 rounded-full"/>
                            <div className="w-4 h-2 bg-olive-100 rounded-full"/>
                        </div>
                        <div className="w-16 h-6 bg-adapty-500 rounded-md"/>
                    </div>
                </BentoCardContent>
              </div>
            </BentoCard>
          </FadeIn>

          {/* 2. Analytics (Chart) */}
          <FadeIn delay={0.1} className="lg:col-span-1 h-[300px]">
             <BentoAnalyticsCard className="h-full" />
          </FadeIn>

          {/* 3. A/B Testing (Split) */}
          <FadeIn delay={0.2} className="lg:col-span-1 h-[300px]">
            <BentoCard className="h-full">
               <BentoCardHeader>
                  <BentoCardTitle>A/B Testing</BentoCardTitle>
                  <BentoCardDescription>
                    Run multi-variant experiments with ML-powered predictions.
                  </BentoCardDescription>
               </BentoCardHeader>
               <BentoCardContent className="mt-4 flex gap-4 h-[140px]">
                  <div className="flex-1 bg-olive-50 rounded-lg border border-olive-200 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                      <div className="absolute top-2 left-2 text-[10px] font-bold text-olive-400">VAR A</div>
                      <div className="w-12 h-16 bg-white rounded shadow-sm group-hover:-translate-y-1 transition-transform"/>
                  </div>
                  <div className="flex-1 bg-adapty-50 rounded-lg border border-adapty-200 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                      <div className="absolute top-2 left-2 text-[10px] font-bold text-adapty-500">VAR B</div>
                      <div className="w-12 h-16 bg-white rounded shadow-sm border-2 border-adapty-400 group-hover:-translate-y-2 transition-transform"/>
                      <div className="absolute bottom-2 right-2 text-[10px] font-bold text-adapty-600 bg-adapty-100 px-1 rounded">+40%</div>
                  </div>
               </BentoCardContent>
            </BentoCard>
          </FadeIn>

          {/* 4. Remote Config / Integrations (Wide) */}
          <FadeIn delay={0.3} className="md:col-span-2 lg:col-span-2 h-[300px]">
             <BentoIntegrationsCard className="h-full" />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant C: Large Demo Showcase
 *
 * Design decisions:
 * - One large hero demo at top showcases product visually
 * - 3-column grid below for feature details
 * - Each feature has icon, title, and description
 * - Creates clear visual hierarchy: demo first, details second
 * - Best for: Product-focused, visual impact
 */
function CoreFeaturesLargeDemo() {
  const { features } = content
  const heroFeature = features[0]

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-12">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        {/* Large Hero Demo */}
        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-olive-100 to-olive-50 p-4 lg:p-8 mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              {/* Browser Chrome */}
              <div className="bg-olive-200/80 backdrop-blur-sm px-4 py-3 border-b border-olive-300/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-olive-400" />
                    <div className="w-3 h-3 rounded-full bg-olive-400" />
                    <div className="w-3 h-3 rounded-full bg-olive-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/60 rounded-md px-3 py-1.5 text-xs text-olive-500 text-center max-w-md mx-auto">
                      app.adapty.io/dashboard
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={heroFeature.image}
                alt={heroFeature.title}
                width={1200}
                height={675}
                className="w-full"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-adapty-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-olive-200/50 rounded-full blur-3xl" />
          </div>
        </FadeIn>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FadeIn key={feature.id} delay={0.3 + index * 0.1}>
              <div className="group">
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-adapty-100 text-adapty-600 flex items-center justify-center mb-4 group-hover:bg-adapty-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-olive-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-olive-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant D: Sticky Scroll
 *
 * Design decisions:
 * - Apple-style scroll-triggered feature showcase
 * - Left side: Sticky navigation with feature list
 * - Right side: Scrolling feature screenshots
 * - Active state highlights current feature
 * - Progress indicator shows scroll position
 * - Best for: Guided exploration, premium feel
 */
function CoreFeaturesStickyScroll() {
  const { features } = content
  const [activeIndex, setActiveIndex] = useState(0)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    featureRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index)
            }
          })
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return (
    <Section className="py-0">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Sticky navigation */}
          <div className="lg:sticky lg:top-32 lg:h-fit py-16 lg:py-32">
            <FadeIn>
              <Eyebrow>Features</Eyebrow>
              <Subheading className="mt-2 mb-12">
                Everything you need to grow subscription revenue
              </Subheading>
            </FadeIn>

            <div className="hidden lg:flex flex-col gap-3">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    featureRefs.current[index]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    })
                  }}
                  className={cn(
                    'text-left p-4 rounded-xl transition-all duration-300 border',
                    activeIndex === index
                      ? 'bg-adapty-50 border-adapty-200 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-olive-50'
                  )}
                >
                  <span
                    className={cn(
                      'text-xs font-semibold uppercase tracking-widest block mb-1',
                      activeIndex === index ? 'text-adapty-600' : 'text-olive-400'
                    )}
                  >
                    {feature.eyebrow}
                  </span>
                  <h3
                    className={cn(
                      'text-lg font-medium transition-colors',
                      activeIndex === index ? 'text-olive-950' : 'text-olive-600'
                    )}
                  >
                    {feature.title}
                  </h3>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-sm text-olive-500 mt-2 line-clamp-2"
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="hidden lg:flex items-center gap-2 mt-8 px-4">
              {features.map((_, index) => (
                <motion.div
                  key={index}
                  className="h-1 rounded-full bg-olive-200"
                  animate={{
                    width: activeIndex === index ? 32 : 8,
                    backgroundColor: activeIndex === index ? 'rgb(103, 32, 255)' : 'rgb(214, 211, 209)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

          {/* Right: Scrolling feature cards */}
          <div className="flex flex-col gap-32 py-16 lg:py-32">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => { featureRefs.current[index] = el }}
                className="scroll-mt-32"
              >
                {/* Mobile: Show text above screenshot */}
                <div className="lg:hidden mb-6">
                  <Eyebrow>{feature.eyebrow}</Eyebrow>
                  <h3 className="text-2xl font-medium text-olive-950 mt-2">
                    {feature.title}
                  </h3>
                  <Text className="mt-3">{feature.description}</Text>
                </div>

                {/* Screenshot with wallpaper */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  animate={{
                    scale: activeIndex === index ? 1 : 0.95,
                    opacity: activeIndex === index ? 1 : 0.7
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Screenshot
                    wallpaper={feature.wallpaper}
                    placement="bottom-right"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={700}
                      height={500}
                      className="w-full"
                    />
                  </Screenshot>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant E: Cards with Demos
 *
 * Design decisions:
 * - Three equal cards in a row (or 2 on tablet)
 * - Each card has demo screenshot on top, text below
 * - Consistent sizing creates clean grid rhythm
 * - Hover reveals additional interaction
 * - Best for: Equal feature importance, scannable
 */
function CoreFeaturesCards() {
  const { features } = content

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-12">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={feature.id} delay={index * 0.1}>
              <motion.div
                className={cn(
                  'group rounded-2xl overflow-hidden',
                  'bg-olive-50/50 p-2',
                  'ring-1 ring-olive-200/50',
                  'hover:ring-olive-300 hover:shadow-lg',
                  'transition-all duration-300'
                )}
                whileHover={{ y: -8 }}
              >
                {/* Demo Screenshot */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* CTA on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ButtonLink
                      href="#"
                      size="sm"
                      className="bg-white text-olive-950 hover:bg-white/90 w-full justify-center"
                    >
                      Learn more
                    </ButtonLink>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-adapty-600 mb-2 block">
                    {feature.eyebrow}
                  </span>
                  <h3 className="text-lg font-medium text-olive-950 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-olive-600 line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function CoreFeatures() {
  const variant = useCoreFeaturesVariant()

  switch (variant) {
    case 'bento':
      return <CoreFeaturesBento />
    case 'large-demo':
      return <CoreFeaturesLargeDemo />
    case 'sticky-scroll':
      return <CoreFeaturesStickyScroll />
    case 'cards':
      return <CoreFeaturesCards />
    case 'zigzag':
    default:
      return <CoreFeaturesZigzag />
  }
}
