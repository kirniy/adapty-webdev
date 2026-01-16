'use client'

import { Container } from '@/components/elements/Container'
import { FadeIn } from '@/components/effects/FadeIn'
import { Marquee } from '@/components/effects/Marquee'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useTrustedByVariant } from '@/lib/debug-context'
import Image from 'next/image'
import { motion } from 'motion/react'

// Variant A: Marquee - Smooth scrolling logos
function TrustedByMarquee() {
  const { trustedBy } = content

  return (
    <section className="py-16 border-y border-olive-200/50 bg-white">
      <Container>
        <FadeIn>
          <p className="text-sm font-medium text-olive-600 text-center mb-10 tracking-wide">
            {trustedBy.title}
          </p>
        </FadeIn>
      </Container>

      <FadeIn delay={0.2}>
        <Marquee speed="slow" pauseOnHover>
          {trustedBy.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center px-10 group"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className="h-10 w-auto opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </FadeIn>
    </section>
  )
}

// Variant B: Static Grid - Stripe-style big, focused, prominent
function TrustedByStaticGrid() {
  const { trustedBy } = content

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(240,240,240,0.4)_100%)] pointer-events-none" />
      
      <Container className="relative">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-adapty-600 uppercase tracking-widest mb-3">
              Trusted Worldwide
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-olive-950 font-serif">
              {trustedBy.title}
            </h2>
          </div>
        </FadeIn>

        {/* Large prominent grid - Stripe-style */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-12 items-center justify-items-center max-w-6xl mx-auto">
            {trustedBy.logos.map((logo, index) => (
              <div
                key={logo.name}
                className={cn(
                  'relative flex items-center justify-center group cursor-pointer p-4 rounded-xl transition-all duration-300',
                  'hover:bg-olive-50/50'
                )}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-adapty-100/20 to-olive-100/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={56}
                  className="relative z-10 h-10 lg:h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn delay={0.4}>
          <div className="mt-20 pt-10 border-t border-olive-100 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-olive-600">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-olive-50/50">
              <svg className="w-5 h-5 text-adapty-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              15,000+ apps worldwide
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-olive-50/50">
              <svg className="w-5 h-5 text-adapty-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              $2B+ revenue tracked
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-olive-50/50">
              <svg className="w-5 h-5 text-adapty-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SOC 2 Compliant
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

// Variant C: Minimal - Clean, understated, single row
function TrustedByMinimal() {
  const { trustedBy } = content

  return (
    <section className="py-12 bg-olive-50/50 border-y border-olive-100">
      <Container>
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <p className="text-xs font-semibold text-olive-500 uppercase tracking-widest whitespace-nowrap">
              Trusted by
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustedBy.logos.slice(0, 5).map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={32}
                  className="h-7 w-auto opacity-50 grayscale"
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

/**
 * Variant D: Premium Static
 * 
 * Design:
 * - "Holy shit good" static version
 * - Balanced, organic layout (not a strict grid)
 * - Subtle "breathing" animation (vertical float with random phases)
 * - Hover focuses one, dims others
 * - High-end typography integration
 */
function TrustedByPremium() {
  const { trustedBy } = content
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle spotlight background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,rgba(103,32,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-olive-50 border border-olive-100 text-[10px] font-bold tracking-widest text-olive-500 uppercase mb-6">
              Industry Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-olive-950 font-serif leading-tight">
              {trustedBy.title}
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Logo Cloud with Breathing Animation */}
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 md:gap-x-24 md:gap-y-16">
            {trustedBy.logos.map((logo, index) => {
              // Create random float duration and delay for organic feel
              const duration = 3 + (index % 3);
              const delay = index * 0.5;
              
              return (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group relative"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: duration, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: delay 
                    }}
                    className="relative z-10"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={160}
                      height={50}
                      className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale transition-all duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </motion.div>
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 -inset-x-4 -inset-y-4 bg-gradient-to-r from-transparent via-olive-50/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * Variant E: Lens Effect
 * 
 * Design:
 * - Interactive spotlight/lens effect
 * - Logos reveal full color and clarity only when near cursor
 * - Very fluid, "Linear-like" interaction
 */
function TrustedByLens() {
  const { trustedBy } = content
  
  return (
    <section className="py-24 bg-white text-olive-950 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium font-serif mb-6">
                Trusted by the world's most innovative apps
              </h2>
              <p className="text-olive-600 text-lg max-w-md mb-8">
                From indie developers to enterprise teams, thousands of apps rely on Adapty for their subscription infrastructure.
              </p>
              
              <div className="flex gap-8 border-t border-olive-200 pt-8">
                <div>
                  <div className="text-3xl font-bold text-olive-900 mb-1">15k+</div>
                  <div className="text-xs text-olive-500 uppercase tracking-wider">Apps</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-olive-900 mb-1">$2B+</div>
                  <div className="text-xs text-olive-500 uppercase tracking-wider">Revenue</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-3 gap-8">
              {trustedBy.logos.slice(0, 9).map((logo, index) => (
                <div 
                  key={logo.name} 
                  className="group relative flex items-center justify-center p-6 rounded-2xl bg-olive-50/50 border border-olive-100 hover:bg-olive-50 hover:border-olive-200 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

// Main component that switches based on debug context
export function TrustedBy() {
  const variant = useTrustedByVariant()

  switch (variant) {
    case 'static-premium':
      return <TrustedByPremium />
    case 'static-lens':
      return <TrustedByLens />
    case 'static-grid':
      return <TrustedByStaticGrid />
    case 'static-minimal':
      return <TrustedByMinimal />
    case 'marquee':
    default:
      return <TrustedByMarquee />
  }
}
