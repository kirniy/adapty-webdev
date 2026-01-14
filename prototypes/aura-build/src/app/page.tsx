import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Features } from "@/components/sections/Features";
import { IntegrationsMarquee } from "@/components/sections/IntegrationsMarquee";
import { RoleCards } from "@/components/sections/RoleCards";
import { Stats } from "@/components/sections/Stats";
import { SDKCode } from "@/components/sections/SDKCode";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Enterprise } from "@/components/sections/Enterprise";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider, VerticalConnector } from "@/components/ui/SectionConnectors";

/**
 * Adapty Homepage
 *
 * 14-section homepage converted from Aura.build template
 *
 * Design Philosophy:
 * - Seamless sections with no hard borders
 * - Thin dotted schematic lines connect everything
 * - Animated beams flow through the page
 * - Glassmorphism and floating elements throughout
 */
export default function HomePage() {
  return (
    <>
      {/* Header - Client Component for dropdowns */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {/* 1. Hero Section */}
        <Hero />

        {/* Vertical connector from Hero to TrustedBy */}
        <VerticalConnector height="48px" className="my-4" />

        {/* 2. Trusted By - Client Component for marquee */}
        <TrustedBy />

        {/* Schematic divider */}
        <SectionDivider />

        {/* 3 & 4. Features (Bento Grid with 6 features) */}
        <Features />

        {/* Vertical connector */}
        <VerticalConnector height="64px" className="my-8" />

        {/* 5. Integrations Marquee - Client Component */}
        <IntegrationsMarquee />

        {/* Schematic divider */}
        <SectionDivider />

        {/* 6. Role Cards */}
        <RoleCards />

        {/* Vertical connector */}
        <VerticalConnector height="48px" className="my-6" />

        {/* 7. Stats */}
        <Stats />

        {/* Schematic divider */}
        <SectionDivider />

        {/* 8. SDK Code Snippet - Client Component for tabs */}
        <SDKCode />

        {/* Vertical connector */}
        <VerticalConnector height="64px" className="my-8" />

        {/* 9 & 10. Testimonials + G2 Badges */}
        <TestimonialsSection />

        {/* Schematic divider */}
        <SectionDivider />

        {/* 11. Case Studies */}
        <CaseStudies />

        {/* Vertical connector */}
        <VerticalConnector height="48px" className="my-6" />

        {/* 12. Enterprise */}
        <Enterprise />

        {/* Schematic divider - leads to final CTA */}
        <SectionDivider showNodes={false} />

        {/* 13. Final CTA */}
        <FinalCTA />
      </main>

      {/* 14. Footer */}
      <Footer />
    </>
  );
}
