'use client'

import { Container } from '@/components/elements/Container'
import { Marquee } from '@/components/effects/Marquee'
import { content } from '@/lib/content'
import { useTrustedByVariant } from '@/lib/debug-context'
import Image from 'next/image'

// Variant A: Marquee (current implementation)
function TrustedByMarquee() {
  const { trustedBy } = content

  return (
    <section className="py-12 border-y border-olive-200 bg-white/50">
      <Container>
        <p className="text-sm font-medium text-olive-500 text-center mb-8">
          {trustedBy.title}
        </p>
      </Container>

      <Marquee speed="normal" pauseOnHover>
        {trustedBy.logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center px-8 group"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="h-8 w-auto opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

// Variant B: Static Grid (Stripe-style - each logo has "weight")
function TrustedByStaticGrid() {
  const { trustedBy } = content

  return (
    <section className="py-16 bg-white border-y border-olive-200">
      <Container>
        <p className="text-sm font-medium text-olive-500 text-center mb-12">
          {trustedBy.title}
        </p>

        {/* Responsive grid: 2 cols on mobile, 3 on sm, 5 on md+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {trustedBy.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center group cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className="h-10 md:h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Variant C: Minimal Row (single centered row, no animation, very clean)
function TrustedByMinimal() {
  const { trustedBy } = content

  return (
    <section className="py-10 bg-olive-50/30">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-olive-400 uppercase tracking-widest">
            Trusted by industry leaders
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.logos.slice(0, 6).map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={100}
                height={32}
                className="h-6 w-auto opacity-40 grayscale"
              />
            ))}
          </div>
        </div>
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
