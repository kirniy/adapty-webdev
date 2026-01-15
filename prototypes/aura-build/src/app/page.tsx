import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageFrame } from "@/components/layout/PageFrame";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { CoreServices } from "@/components/sections/CoreServices";
import { IntegrationsMarquee } from "@/components/sections/IntegrationsMarquee";
import { WhyAdapty } from "@/components/sections/WhyAdapty";
import { RoleCards } from "@/components/sections/RoleCards";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { Enterprise } from "@/components/sections/Enterprise";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  BlueprintDivider,
  BlueprintVertical,
} from "@/components/ui/BlueprintElements";

// Dynamic imports for below-fold Client Components (code splitting)
const Stats = dynamic(
  () => import("@/components/sections/Stats").then((mod) => mod.Stats),
  { ssr: true }
);
const SDKCode = dynamic(
  () => import("@/components/sections/SDKCode").then((mod) => mod.SDKCode),
  { ssr: true }
);
const WorkflowSection = dynamic(
  () =>
    import("@/components/sections/WorkflowSection").then(
      (mod) => mod.WorkflowSection
    ),
  { ssr: true }
);

/**
 * Adapty Homepage
 *
 * Uses Attio-inspired BlueprintElements for section connections:
 * - SVG stroke-dasharray="4 6" for precise dashed lines
 * - Animated beams traveling along the lines
 * - Pulsing nodes at key intersections
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <PageFrame>
        <main className="flex-1 flex flex-col pt-20 lg:pt-24 relative z-10">
          <Hero />
          <BlueprintVertical height={48} className="my-4" />
          <TrustedBy />
          <BlueprintDivider />
          <CoreServices />
          <BlueprintVertical height={64} className="my-8" />
          <IntegrationsMarquee />
          <BlueprintDivider />
          <WhyAdapty />
          <BlueprintVertical height={64} className="my-8" />
          <RoleCards />
          <BlueprintVertical height={48} className="my-6" />
          <Stats />
          <BlueprintDivider />
          <WorkflowSection />
          <BlueprintVertical height={64} className="my-8" />
          <SDKCode />
          <BlueprintVertical height={64} className="my-8" />
          <TestimonialsSection />
          <BlueprintDivider />
          <ResultsSection />
          <BlueprintVertical height={48} className="my-6" />
          <Enterprise />
          <BlueprintDivider showNodes={false} />
          <FinalCTA />
        </main>
        <Footer />
      </PageFrame>
    </>
  );
}
