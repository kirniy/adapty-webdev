'use client'

import { Container } from '@/components/elements/Container'
import { FadeIn } from '@/components/effects/FadeIn'
import { Marquee } from '@/components/effects/Marquee'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useTrustedByVariant } from '@/lib/debug-context'
import Image from 'next/image'

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
    <section className="py-20 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-adapty-600 uppercase tracking-widest mb-3">
              Trusted Worldwide
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-olive-950">
              {trustedBy.title}
            </h2>
          </div>
        </FadeIn>

        {/* Large prominent grid - Stripe-style */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10 items-center justify-items-center max-w-5xl mx-auto">
            {trustedBy.logos.map((logo, index) => (
              <div
                key={logo.name}
                className={cn(
                  'flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105',
                  // Give first logo more prominence
                  index === 0 && 'sm:col-span-1'
                )}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={56}
                  className="h-12 lg:h-14 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn delay={0.4}>
          <div className="mt-16 pt-10 border-t border-olive-100 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-olive-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-adapty-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              8,000+ apps worldwide
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-adapty-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              $2B+ revenue tracked
            </span>
            <span className="flex items-center gap-2">
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

// Main component that switches based on debug context
export function TrustedBy() {
  const variant = useTrustedByVariant()

  switch (variant) {
    case 'static-grid':
      return <TrustedByStaticGrid />
    case 'static-minimal':
      return <TrustedByMinimal />
    case 'marquee':
    default:
      return <TrustedByMarquee />
  }
}
