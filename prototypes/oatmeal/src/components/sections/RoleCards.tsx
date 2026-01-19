'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useRoleCardsVariant } from '@/lib/debug-context'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

/**
 * Variant A: Cards (SIMPLIFIED per GEMINI_TASKS.md)
 *
 * Changes from original:
 * - REMOVED all tags/badges (Sergey: "too clunky")
 * - Reduced visual weight (smaller images, less padding)
 * - Simplified to: Icon/Illustration + Title + Single sentence + CTA link
 * - Cards should "rhyme" with Feature block style
 */
function RoleCardsCards() {
  const { roleCards } = content

  // Simple icons for each role type
  const roleIcons: Record<string, React.ReactNode> = {
    'For Marketers': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    'For Developers': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    'For Growth': (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  }

  return (
    <Section className="py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Eyebrow>Built for Every Role</Eyebrow>
          <Heading as="h2" className="mt-3">
            One platform, every team
          </Heading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleCards.map((card, index) => (
            <motion.a
              key={card.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                'group flex flex-col p-6 rounded-xl',
                'bg-olive-50/50 border border-olive-100',
                'hover:bg-olive-50 hover:border-olive-200',
                'transition-all duration-200'
              )}
            >
              {/* Small icon */}
              <div className="w-10 h-10 rounded-lg bg-adapty-100 text-adapty-600 flex items-center justify-center mb-4">
                {roleIcons[card.title] || roleIcons['For Growth']}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-olive-950 mb-2">
                {card.title}
              </h3>

              {/* Single compelling sentence */}
              <p className="text-olive-600 text-sm leading-relaxed flex-1 mb-4">
                {card.description.split('.')[0]}.
              </p>

              {/* CTA link (not button) */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-adapty-600 group-hover:text-adapty-700">
                Learn more
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant B: Tabs (Interactive Single-Panel)
 *
 * Design philosophy:
 * - Tab navigation focuses attention on one role at a time
 * - Large preview area for rich content display
 * - Animated transitions between roles
 * - More editorial, story-driven approach
 *
 * Polished details:
 * - Active tab indicator animates smoothly
 * - Content crossfades with subtle y movement
 * - Tags appear in larger format
 * - Image takes hero position
 */
function RoleCardsTabs() {
  const { roleCards } = content
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCard = roleCards[activeIndex]

  return (
    <Section className="py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Eyebrow>Built for Every Role</Eyebrow>
          <Heading as="h2" className="mt-3">
            One platform, every team
          </Heading>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {roleCards.map((card, index) => (
            <button
              key={card.title}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'relative px-5 py-2.5 rounded-full text-sm font-medium',
                'transition-colors duration-200',
                activeIndex === index
                  ? 'text-white'
                  : 'text-olive-600 hover:text-olive-900 hover:bg-olive-100'
              )}
            >
              {/* Background pill */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-olive-900 rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{card.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Content area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-olive-900/10 aspect-[4/3]">
                <Image
                  src={activeCard.image}
                  alt={activeCard.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-adapty-600/20 to-transparent" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-semibold text-olive-950 mb-4">
                  {activeCard.title}
                </h3>
                <p className="text-lg text-olive-600 leading-relaxed mb-8">
                  {activeCard.description}
                </p>

                {/* Tags as larger pills */}
                <div className="flex flex-wrap gap-3">
                  {activeCard.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: tagIndex * 0.1 }}
                      className={cn(
                        'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
                        'bg-olive-100 text-olive-700',
                        'text-sm font-medium'
                      )}
                    >
                      <svg className="w-4 h-4 text-adapty-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={cn(
                    'inline-flex items-center gap-2 mt-10',
                    'text-adapty-600 font-medium',
                    'hover:text-adapty-700 transition-colors'
                  )}
                >
                  Learn more about {activeCard.title.toLowerCase()}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant C: Horizontal (Premium Scroll)
 *
 * Design philosophy:
 * - Horizontal scroll creates sense of discovery
 * - Cards are larger for impact
 * - Gradient edges indicate scrollability
 * - More immersive browsing experience
 *
 * Polished details:
 * - Snap scrolling for precise positioning
 * - Cards have prominent visual treatment
 * - Left-aligned header breaks grid monotony
 * - Works great on mobile as natural swipe
 */
function RoleCardsHorizontal() {
  const { roleCards } = content

  return (
    <Section className="py-16 sm:py-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Eyebrow>Built for Every Role</Eyebrow>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mt-3">
            <Heading as="h2" className="max-w-lg">
              One platform, every team
            </Heading>
            <p className="text-olive-600 max-w-md">
              Whether you're a marketer, developer, or product owner - Adapty adapts to your workflow.
            </p>
          </div>
        </motion.div>
      </Container>

      {/* Horizontal scroll container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-olive-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-olive-100 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto pb-4 px-4 sm:px-8 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))] snap-x snap-mandatory scrollbar-hide">
          {roleCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[85vw] sm:w-[400px] lg:w-[440px] snap-center"
            >
              <div className={cn(
                'group relative h-full overflow-hidden rounded-2xl',
                'bg-white border border-olive-200',
                'shadow-lg shadow-olive-900/5',
                'hover:shadow-xl hover:shadow-olive-900/10',
                'transition-shadow duration-300'
              )}>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Role badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                    <span className="text-sm font-medium text-olive-900">{card.title}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-olive-600 text-[15px] leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* Tags as inline list */}
                  <div className="flex items-center gap-2 text-sm text-olive-500">
                    {card.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tag} className="flex items-center">
                        {tagIndex > 0 && <span className="mx-2 text-olive-300">|</span>}
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View link */}
                  <a
                    href="#"
                    className={cn(
                      'inline-flex items-center gap-2 mt-6',
                      'text-adapty-600 font-medium text-sm',
                      'group-hover:underline underline-offset-2'
                    )}
                  >
                    Explore features
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}

/**
 * Variant D: Minimal (NEW per GEMINI_TASKS.md)
 *
 * Design:
 * - Simple horizontal layout: Icon | Title | One-liner | Arrow
 * - No cards, just clean list items
 * - Subtle separator between items
 * - Hover shows arrow movement (translateX)
 */
function RoleCardsMinimal() {
  const { roleCards } = content

  // Simple icons for each role type
  const roleIcons: Record<string, React.ReactNode> = {
    'For Marketers': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    'For Developers': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    'For Growth': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  }

  return (
    <Section className="py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Eyebrow>Built for Every Role</Eyebrow>
          <Heading as="h2" className="mt-3">
            One platform, every team
          </Heading>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-olive-200">
          {roleCards.map((card, index) => (
            <motion.a
              key={card.title}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center gap-4 py-5 hover:bg-olive-200/30 -mx-4 px-4 rounded-lg transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-olive-100 text-olive-600 group-hover:bg-adapty-100 group-hover:text-adapty-600 flex items-center justify-center flex-shrink-0 transition-colors">
                {roleIcons[card.title] || roleIcons['For Growth']}
              </div>

              {/* Title */}
              <span className="font-medium text-olive-950 w-36 flex-shrink-0">
                {card.title}
              </span>

              {/* One-liner */}
              <span className="text-olive-600 text-sm flex-1 hidden sm:block">
                {card.description.split('.')[0]}.
              </span>

              {/* Arrow */}
              <svg
                className="w-5 h-5 text-olive-400 group-hover:text-adapty-600 flex-shrink-0 transition-all group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function RoleCards() {
  const variant = useRoleCardsVariant()

  switch (variant) {
    case 'minimal':
      return <RoleCardsMinimal />
    case 'tabs':
      return <RoleCardsTabs />
    case 'horizontal':
      return <RoleCardsHorizontal />
    case 'cards':
    default:
      return <RoleCardsCards />
  }
}
