import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageFrame } from "@/components/layout/PageFrame"; // Import the wrapper
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CoreServices } from "@/components/sections/CoreServices";
import { IntegrationsMarquee } from "@/components/sections/IntegrationsMarquee";
import { WhyAdapty } from "@/components/sections/WhyAdapty";
import { RoleCards } from "@/components/sections/RoleCards";
import { Stats } from "@/components/sections/Stats";
import { SDKCode } from "@/components/sections/SDKCode";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { Enterprise } from "@/components/sections/Enterprise";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
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

      <PageFrame>
        {/* Main Content */}
        <main className="pt-20 lg:pt-24 flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* Vertical connector from Hero to TrustedBy */}
          <VerticalConnector height="48px" className="my-4" />

          {/* 2. Trusted By - Client Component for marquee */}
          <TrustedBy />

          {/* Schematic divider */}
          <SectionDivider />

          {/* 3 & 4. Core Services (Bento Grid) - Replaces Features */}
          <CoreServices />

          {/* Vertical connector */}
          <VerticalConnector height="64px" className="my-8" />

          {/* 5. Integrations Marquee - Client Component */}
          <IntegrationsMarquee />

          {/* Schematic divider */}
          <SectionDivider />

          {/* New Section: Why Adapty (Section D in template) */}
          <WhyAdapty />

          {/* Vertical connector */}
          <VerticalConnector height="64px" className="my-8" />

          {/* 6. Role Cards */}
          <RoleCards />

          {/* Vertical connector */}
          <VerticalConnector height="48px" className="my-6" />

          {/* 7. Stats */}
          <Stats />

          {/* Schematic divider */}
          <SectionDivider />

          {/* NEW: Workflow Section (Flow Diagram) */}
          <WorkflowSection />

          {/* Vertical connector */}
          <VerticalConnector height="64px" className="my-8" />

          {/* 8. SDK Code Snippet - Client Component for tabs */}
          <SDKCode />

          {/* Vertical connector */}
          <VerticalConnector height="64px" className="my-8" />

          {/* 9 & 10. Testimonials + G2 Badges */}
          <TestimonialsSection />

          {/* Schematic divider */}
          <SectionDivider />

          {/* 11. Results Section (Case Studies + Metrics) - Replaces CaseStudies */}
          <ResultsSection />

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
      </PageFrame>
    </>
  );
}
