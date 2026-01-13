"use client";

import { useState, useEffect, useMemo } from "react";
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
  UnicornBlock,
} from "~/components/sections";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export function DynamicPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize config to prevent unnecessary recalculations
  // Must be called before any conditional returns (Rules of Hooks)
  const config = useMemo(() => getDSConfig(theme ?? "ds5"), [theme]);

  // Memoize sections array to ensure stable reference
  const sections = useMemo(() => config.sections, [config.sections]);

  // Track section occurrences for stable key generation
  const sectionCounts = useMemo(() => {
    const counts = new Map<SectionId, number>();
    sections.forEach((id) => {
      counts.set(id, (counts.get(id) || 0) + 1);
    });
    return counts;
  }, [sections]);

  // Prevent hydration mismatch by not rendering theme-dependent structure until mounted
  if (!mounted) {
    return null; // Avoid flash of unstyled content/white screen
  }

  // Render a section by its ID
  const renderSection = (sectionId: SectionId, index: number) => {
    // Use stable key: sectionId only, or sectionId-index if duplicates exist
    // This prevents remounting when theme changes but section order/index changes
    const key = (sectionCounts.get(sectionId) ?? 0) > 1
      ? `${sectionId}-${index}`
      : sectionId;
    const overrides = config.sectionOverrides?.[sectionId];

    switch (sectionId) {
      case "hero":
        return <Hero key={key} variant={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "trustedBy":
        return <TrustedBy key={key} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "roleCards":
        return <RoleCards key={key} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "stats":
        return <Stats key={key} variant={overrides?.variant as "default" | "bold"} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "testimonials":
        return <Testimonials key={key} variant={overrides?.variant as "carousel" | "single" | "grid"} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "caseStudies":
        return <CaseStudies key={key} variant={overrides?.variant as "default" | "compact"} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "enterprise":
        return <Enterprise key={key} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "g2Badges":
        return <G2Badges key={key} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "integrationsMarquee":
        return <IntegrationsMarquee key={key} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "sdkCodeSnippet":
        return <SDKCodeSnippet key={key} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

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

      case "unicornBlockDS3":
        return (
          <UnicornBlock
            key={key}
            projectId="S2rJQl5b5HhlIAi0JxcZ"
            height="500px"
          />
        );

      case "finalCta":
        return <FinalCTA key={key} variant={overrides?.variant as "default" | "enterprise"} ds={(theme ?? "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5"} />;

      case "footer":
        return <Footer key={key} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] page-wrapper">
      <Header />
      <main>
        {sections.map((sectionId, index) => renderSection(sectionId, index))}
      </main>
    </div>
  );
}
