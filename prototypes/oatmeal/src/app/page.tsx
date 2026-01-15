import { Navbar } from '@/components/layout/Navbar'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { CoreFeatures } from '@/components/sections/CoreFeatures'
import { Enterprise } from '@/components/sections/Enterprise'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { G2Badges } from '@/components/sections/G2Badges'
import { Hero } from '@/components/sections/Hero'
import { Integrations } from '@/components/sections/Integrations'
import { RoleCards } from '@/components/sections/RoleCards'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustedBy } from '@/components/sections/TrustedBy'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <CoreFeatures />
        <Stats />
        <Testimonials />
        <RoleCards />
        <Integrations />
        <CaseStudies />
        <G2Badges />
        <Enterprise />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
