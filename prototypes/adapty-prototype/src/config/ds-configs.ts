// DS-specific section ordering and configuration
// Each DS represents different information architecture, not just visual tokens

export type SectionId =
  | "hero"
  | "trustedBy"
  | "roleCards"
  | "featurePaywallAB"
  | "featureRefundSaver"
  | "featureSubscriptionBI"
  | "featureNoCodePaywall"
  | "featureFunnelFox"
  | "featureRevenueSync"
  | "integrationsMarquee"
  | "stats"
  | "sdkCodeSnippet"
  | "sdkGrid"
  | "testimonials"
  | "g2Badges"
  | "caseStudies"
  | "enterprise"
  | "finalCta"
  | "footer";

export interface DSConfig {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  sections: SectionId[];
  // Section-specific overrides
  sectionOverrides?: {
    [key in SectionId]?: {
      variant?: string;
      props?: Record<string, unknown>;
    };
  };
}

// ============================================
// DS1: LINEAR-INSPIRED - "Enterprise Depth"
// ============================================
// Dense information, 3D/layered visuals
// Single primary CTA, secondary links scattered
// Trust/security emphasized late (reassurance)
// Long-form feature explanations
export const ds1Config: DSConfig = {
  id: "ds1",
  name: "Linear",
  description: "Dark, premium micro-interactions",
  characteristics: [
    "Dense information architecture",
    "3D/layered visual depth",
    "Single primary CTA strategy",
    "Trust/security late (reassurance)",
    "Long-form feature explanations",
  ],
  sections: [
    "hero",
    "trustedBy",
    "roleCards", // Early audience segmentation
    "sdkCodeSnippet", // Technical credibility early
    "featurePaywallAB",
    "featureSubscriptionBI",
    "featureNoCodePaywall",
    "featureRefundSaver",
    "featureFunnelFox",
    "featureRevenueSync",
    "integrationsMarquee",
    "stats",
    "enterprise", // Security/compliance late
    "testimonials",
    "finalCta",
    "footer",
  ],
  sectionOverrides: {
    hero: { variant: "dense" },
    testimonials: { variant: "single" }, // Single featured testimonial
  },
};

// ============================================
// DS2: ATTIO-INSPIRED - "Product Demo First"
// ============================================
// Interactive product demos in hero
// Multiple CTAs throughout (aggressive)
// Emotional quotes interrupt feature flow
// Real product screenshots, not illustrations
export const ds2Config: DSConfig = {
  id: "ds2",
  name: "Attio",
  description: "Light, editorial typography",
  characteristics: [
    "Interactive product demos in hero",
    "Multiple CTAs throughout (aggressive)",
    "Emotional quotes interrupt feature flow",
    "Real product screenshots",
    "Editorial typography",
  ],
  sections: [
    "hero", // With interactive tabs
    "trustedBy",
    "testimonials", // Featured quote early (emotional moment)
    "featurePaywallAB",
    "roleCards", // Audience segments mid-page
    "featureRefundSaver",
    "testimonials", // Customer stories mid-page
    "featureSubscriptionBI",
    "stats",
    "caseStudies",
    "featureNoCodePaywall",
    "sdkCodeSnippet",
    "sdkGrid",
    "integrationsMarquee",
    "g2Badges",
    "enterprise",
    "finalCta",
    "footer",
  ],
  sectionOverrides: {
    hero: { variant: "interactive" },
    testimonials: { variant: "carousel" },
  },
};

// ============================================
// DS3: POLAR-INSPIRED - "Technical Confidence"
// ============================================
// Assumes buyer sophistication
// Code examples prominent and early
// Minimal sales copy, technical depth
// Social proof comes LATE
// Competitive comparison section
export const ds3Config: DSConfig = {
  id: "ds3",
  name: "Polar",
  description: "Dark, minimal, fast",
  characteristics: [
    "Assumes buyer sophistication",
    "Code examples prominent and early",
    "Minimal sales copy",
    "Social proof comes late",
    "Technical depth focus",
  ],
  sections: [
    "hero", // "Monetize your software"
    "roleCards", // 3-Col Feature Cards equivalent
    "sdkCodeSnippet", // "Framework Adapters" - Code early!
    "stats", // "Realtime Metrics"
    "featurePaywallAB", // "Dashboard Preview" slot
    "featureRefundSaver", // "Ingestion Strategies" slot
    "featureSubscriptionBI",
    "sdkGrid",
    "testimonials", // "Featured Testimonial" - Late
    "g2Badges",
    "finalCta", // Minimal
    "footer",
  ],
  sectionOverrides: {
    hero: { variant: "minimal" },
    testimonials: { variant: "single" },
    caseStudies: { variant: "compact" },
  },
};

// ============================================
// DS4: VERCEL-INSPIRED - "Bold & Branded"
// ============================================
// Signature gradient branding throughout
// Metrics-heavy, enterprise positioning
// Bold geometric typography (Space Grotesk)
// Bouncy animations, playful but professional
export const ds4Config: DSConfig = {
  id: "ds4",
  name: "Vercel",
  description: "True black, bold gradients",
  characteristics: [
    "Signature gradient branding",
    "Metrics-heavy presentation",
    "Enterprise positioning",
    "Bold geometric typography",
    "Bouncy animations",
  ],
  sections: [
    "hero", // With gradient branding
    "trustedBy", // Enterprise logos
    "featurePaywallAB", // With gradient themes
    "featureRefundSaver",
    "featureSubscriptionBI",
    "sdkCodeSnippet",
    "stats", // Large metrics, bold
    "integrationsMarquee",
    "enterprise", // SOC2, SLA emphasis
    "testimonials", // Enterprise-focused
    "caseStudies",
    "g2Badges",
    "finalCta", // Contact sales emphasis
    "footer",
  ],
  sectionOverrides: {
    hero: { variant: "gradient" },
    stats: { variant: "bold" },
    finalCta: { variant: "enterprise" },
  },
};

// ============================================
// DS5: HYBRID-INSPIRED - "Balanced & Accessible"
// ============================================
// Warm gray background (#F7F7F8)
// Balanced information density
// Clear hierarchy, not overwhelming
// Appeals to all audiences (devs, marketers, owners)
export const ds5Config: DSConfig = {
  id: "ds5",
  name: "Hybrid",
  description: "Warm light, recommended",
  characteristics: [
    "Warm gray background",
    "Balanced information density",
    "Clear hierarchy",
    "Appeals to all audiences",
    "Recommended default",
  ],
  sections: [
    "hero", // Clear, warm, accessible
    "trustedBy",
    "roleCards", // Who it's for
    "featurePaywallAB",
    "featureRefundSaver",
    "featureSubscriptionBI",
    "featureNoCodePaywall",
    "stats",
    "sdkCodeSnippet",
    "sdkGrid",
    "testimonials", // Carousel
    "g2Badges",
    "caseStudies",
    "integrationsMarquee",
    "enterprise",
    "finalCta",
    "footer",
  ],
  sectionOverrides: {
    hero: { variant: "balanced" },
    testimonials: { variant: "carousel" },
  },
};

// Export all configs
export const dsConfigs: Record<string, DSConfig> = {
  ds1: ds1Config,
  ds2: ds2Config,
  ds3: ds3Config,
  ds4: ds4Config,
  ds5: ds5Config,
};

// Helper to get config by theme ID
export function getDSConfig(themeId: string): DSConfig {
  return dsConfigs[themeId] || ds5Config;
}

// Section metadata for rendering
export const sectionMeta: Record<
  SectionId,
  { component: string; label: string; description: string }
> = {
  hero: {
    component: "Hero",
    label: "Hero",
    description: "Main headline with CTA and product visual",
  },
  trustedBy: {
    component: "TrustedBy",
    label: "Trusted By",
    description: "Logo marquee of trusted companies",
  },
  roleCards: {
    component: "RoleCards",
    label: "Role Cards",
    description: "Audience segmentation cards",
  },
  featurePaywallAB: {
    component: "FeaturePaywallAB",
    label: "Paywall A/B Testing",
    description: "Feature section for A/B testing",
  },
  featureRefundSaver: {
    component: "FeatureRefundSaver",
    label: "Refund Saver",
    description: "Feature section for refund reduction",
  },
  featureSubscriptionBI: {
    component: "FeatureSubscriptionBI",
    label: "Subscription BI",
    description: "Feature section for analytics",
  },
  featureNoCodePaywall: {
    component: "FeatureNoCodePaywall",
    label: "No-Code Paywall",
    description: "Feature section for paywall builder",
  },
  featureFunnelFox: {
    component: "FeatureFunnelFox",
    label: "FunnelFox",
    description: "Feature section for web funnels",
  },
  featureRevenueSync: {
    component: "FeatureRevenueSync",
    label: "Revenue Sync",
    description: "Feature section for integrations",
  },
  integrationsMarquee: {
    component: "IntegrationsMarquee",
    label: "Integrations",
    description: "Integration logos marquee",
  },
  stats: {
    component: "Stats",
    label: "Stats",
    description: "Key metrics and numbers",
  },
  sdkCodeSnippet: {
    component: "SDKCodeSnippet",
    label: "SDK Code",
    description: "Code examples with tabs",
  },
  sdkGrid: {
    component: "SDKGrid",
    label: "SDK Grid",
    description: "Platform SDK icons grid",
  },
  testimonials: {
    component: "Testimonials",
    label: "Testimonials",
    description: "Customer testimonials",
  },
  g2Badges: {
    component: "G2Badges",
    label: "G2 Badges",
    description: "G2 award badges",
  },
  caseStudies: {
    component: "CaseStudies",
    label: "Case Studies",
    description: "Customer success stories",
  },
  enterprise: {
    component: "Enterprise",
    label: "Enterprise",
    description: "Enterprise features and security",
  },
  finalCta: {
    component: "FinalCTA",
    label: "Final CTA",
    description: "Final call to action",
  },
  footer: {
    component: "Footer",
    label: "Footer",
    description: "Site footer with links",
  },
};
