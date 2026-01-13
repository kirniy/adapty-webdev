import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Stats } from "@/components/sections/Stats";
import { RoleCards } from "@/components/sections/RoleCards";
import { SDKCodeSnippet } from "@/components/sections/SDKCodeSnippet";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Enterprise } from "@/components/sections/Enterprise";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <Stats />
      <RoleCards />
      <SDKCodeSnippet />
      <Testimonials />
      <CaseStudies />
      <Enterprise />
      <FinalCTA />
      <Footer />
    </main>
  );
}
