"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { getDSConfig, type SectionId } from "~/config/ds-configs";
import { content } from "~/config/content";
import {
  Hero,
  TrustedBy,
  RoleCards,
  Stats,
  Testimonials,
  CaseStudies,
  Enterprise,
  G2Badges,
  IntegrationsMarquee,
  SDKCodeSnippet,
  FinalCTA,
  FeatureSection,
} from "~/components/sections";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export function DynamicPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent structure until mounted
  if (!mounted) {
    return null; // Avoid flash of unstyled content/white screen
  }

  const config = getDSConfig(theme ?? "ds5");

  // Render a section by its ID
  const renderSection = (sectionId: SectionId, index: number) => {
    const key = `${sectionId}-${index}`;
    const overrides = config.sectionOverrides?.[sectionId];

    switch (sectionId) {
      case "hero":
        return <Hero key={key} variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "trustedBy":
        return <TrustedBy key={key} />;

      case "roleCards":
        return <RoleCards key={key} />;

      case "stats":
        return <Stats key={key} variant={overrides?.variant as "default" | "bold"} />;

      case "testimonials":
        return <Testimonials key={key} variant={overrides?.variant as "carousel" | "single" | "grid"} />;

      case "caseStudies":
        return <CaseStudies key={key} variant={overrides?.variant as "default" | "compact"} />;

      case "enterprise":
        return <Enterprise key={key} />;

      case "g2Badges":
        return <G2Badges key={key} />;

      case "integrationsMarquee":
        return <IntegrationsMarquee key={key} />;

      case "sdkCodeSnippet":
        return <SDKCodeSnippet key={key} />;

      case "sdkGrid":
        // SDK Grid is part of SDKCodeSnippet, skip rendering separately
        return null;

      case "featurePaywallAB":
        return (
          <FeatureSection
            key={key}
            title={content.features.paywallABTesting.title}
            description={content.features.paywallABTesting.description}
            image={content.features.paywallABTesting.image}
            features={content.features.paywallABTesting.features}
            codeSnippet={content.features.paywallABTesting.codeSnippet}
            cta={content.features.paywallABTesting.cta}
            testimonial={content.features.paywallABTesting.testimonial}
            variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"}
            sectionNumber="01"
            flipped={true}
          />
        );

      case "featureRefundSaver":
        return (
          <FeatureSection
            key={key}
            title={content.features.refundSaver.title}
            description={content.features.refundSaver.description}
            image={content.features.refundSaver.image}
            features={content.features.refundSaver.features}
            codeSnippet={content.features.refundSaver.codeSnippet}
            cta={content.features.refundSaver.cta}
            testimonial={content.features.refundSaver.testimonial}
            variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"}
            sectionNumber="02"
            className="bg-[#D1F2E8]/20"
          />
        );

      case "featureSubscriptionBI":
        return (
          <FeatureSection
            key={key}
            title={content.features.subscriptionBI.title}
            description={content.features.subscriptionBI.description}
            image={content.features.subscriptionBI.image}
            features={content.features.subscriptionBI.features}
            // No code snippet for BI yet
            cta={content.features.subscriptionBI.cta}
            testimonial={content.features.subscriptionBI.testimonial}
            variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"}
            sectionNumber="03"
            flipped={true}
          />
        );

      case "featureNoCodePaywall":
        return (
          <FeatureSection
            key={key}
            title={content.features.noCodePaywall.title}
            description={content.features.noCodePaywall.description}
            image={content.features.noCodePaywall.image}
            features={content.features.noCodePaywall.features}
            cta={content.features.noCodePaywall.cta}
            testimonial={content.features.noCodePaywall.testimonial}
            variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"}
            sectionNumber="04"
            className="bg-[#FFD4CE]/20"
          />
        );

      case "featureFunnelFox":
        return (
          <FeatureSection
            key={key}
            title={content.features.funnelFox.title}
            description={content.features.funnelFox.description}
            image={content.features.funnelFox.image}
            cta={content.features.funnelFox.cta}
            variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"}
            sectionNumber="05"
            flipped={true}
            className="bg-[var(--bg-secondary)]"
          />
        );

      case "featureRevenueSync":
        return (
          <FeatureSection
            key={key}
            title={content.features.revenueSync.title}
            description={content.features.revenueSync.description}
            image={{
              src: "/images/integrations/logo-amplitude.svg",
              alt: "Integrations",
              bgColor: "transparent",
            }}
            cta={content.features.revenueSync.cta}
            testimonial={content.features.revenueSync.testimonial}
            variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"}
            sectionNumber="06"
          />
        );

      case "finalCta":
        return <FinalCTA key={key} variant={overrides?.variant as "default" | "enterprise"} />;

      case "footer":
        return <Footer key={key} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main>
        {config.sections.map((sectionId, index) => renderSection(sectionId, index))}
      </main>
    </div>
  );
}
