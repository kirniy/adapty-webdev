// Extracted content from adapty-pt2
// This file contains all text content for the prototype
// IMPORTANT: This is the EXACT text from the original Adapty website
// Design systems only vary styling, NOT content

export const content = {
  // ============================================
  // HERO SECTION - SAME CONTENT FOR ALL DS
  // ============================================
  hero: {
    badge: {
      text: "Ebook: $100K playbook | download",
      href: "https://adapty.io/ebooks/100k-app-playbook/",
    },
    // Two-tone: split at natural sentence boundary
    headline: {
      primary: "Revenue management",
      secondary: "for in-app purchases",
    },
    // Two-tone: first sentence primary, second sentence secondary
    subheadline: {
      primary: "Save months on integrating subscriptions",
      secondary: "and double your app revenue with paywall management.",
    },
    cta: {
      primary: { text: "Start for free", href: "#" },
      secondary: { text: "Schedule a demo", href: "https://adapty.io/schedule-demo/" },
    },
    image: {
      dashboard: "/images/hero-overview.webp",
      mobile: "/images/hero/adapty-paywall-demo-preview@2x.webp",
    },
  },

  // ============================================
  // TRUSTED BY SECTION
  // ============================================
  trustedBy: {
    // Two-tone split at natural break
    headline: {
      primary: "Trusted by 15,000+ apps",
      secondary: "and the world's largest app publishers",
    },
    logos: [
      { name: "feeld", file: "feeld.svg" },
      { name: "bumble", file: "bumble.svg" },
      { name: "weewoo", file: "weewoo.svg" },
      { name: "appnation", file: "appnation.webp" },
      { name: "almus", file: "almus.svg" },
      { name: "impala-studios", file: "impala-studios.svg" },
      { name: "hubx", file: "hubx.svg" },
    ],
  },

  // ============================================
  // STATS SECTION
  // ============================================
  stats: {
    // Original doesn't have explicit headline, adding based on context
    headline: {
      primary: "Powering subscription revenue",
      secondary: "at scale",
    },
    items: [
      { value: 2, prefix: "$", suffix: "B+", label: "tracked revenue", decimalPlaces: 0 },
      { value: 99.99, suffix: "%", label: "historical uptime", decimalPlaces: 2 },
      { value: 2.5, suffix: "B+", label: "users served", decimalPlaces: 1 },
      { value: 60, suffix: "B+", label: "API calls / month", decimalPlaces: 0 },
    ],
  },

  // ============================================
  // TESTIMONIALS SECTION
  // ============================================
  testimonials: {
    headline: {
      primary: "Developers from all kinds of apps move to Adapty.",
      secondary: "See how they grow their revenue.",
    },
    items: [
      {
        id: "cem",
        image: "/images/testimonials/cem.webp",
        quote:
          "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
        name: "Cem Ortabas",
        position: "Co-founder and CEO, HubX",
        logo: "/images/testimonials/logos/logo-hubx-white.svg",
      },
      {
        id: "chris",
        image: "/images/testimonials/chris.webp",
        quote:
          "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you are looking to boost the revenue of your app, I definitely recommend Adapty.",
        name: "Chris Bick",
        position: "Founder and CEO, Bickster",
        logo: "/images/testimonials/logos/logo-bickster.png",
      },
      {
        id: "asman",
        image: "/images/testimonials/asman.webp",
        quote:
          "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.",
        name: "Yalcin Ozdemir",
        position: "Founder and CEO, AppNation",
        logo: "/images/testimonials/logos/logo-appnation-white.png",
      },
      {
        id: "kyle",
        image: "/images/testimonials/kyle.webp",
        quote:
          "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
        name: "Kyle Smith",
        position: "Head of data at Smitten Dating",
        logo: "/images/testimonials/logos/logo-smitten.webp",
      },
      {
        id: "roi",
        image: "/images/testimonials/roi.webp",
        quote:
          "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos, etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
        name: "Roi Mulia",
        position: "Founder and CEO, SocialKit",
        logo: "/images/testimonials/logos/logo-socialkit-white.svg",
      },
    ],
  },

  // ============================================
  // CASE STUDIES SECTION
  // ============================================
  caseStudies: {
    headline: {
      primary: "Read the real cases",
      secondary: "of our customers",
    },
    items: [
      {
        company: "Productivity app",
        category: "Productivity",
        logo: "/images/case-studies/productivity-app.webp",
        metric: "+50%",
        description: "How pricing tests unlocked app's potential",
        href: "https://adapty.io/case-studies/productivity-app-and-autopilot/",
      },
      {
        company: "Text on Pic",
        category: "Photo & Video",
        logo: "/images/case-studies/text-on-pic.webp",
        metric: "+30%",
        description: "How to boost revenue with the right experiments",
        href: "https://adapty.io/case-studies/photo-editing-app-and-autopilot/",
      },
      {
        company: "Trip planning",
        category: "Travel",
        logo: "/images/case-studies/trip-planning.webp",
        metric: "+102%",
        description: "New onboarding and pricing strategy doubled revenue per user",
        href: "https://adapty.io/case-studies/travel-app/",
      },
      {
        company: "Going Merry",
        category: "App publisher",
        logo: "/images/case-studies/going-merry.webp",
        metric: "5x",
        description: "How to scale subscription revenue with Paywall Builder",
        href: "https://adapty.io/case-studies/going-merry/",
      },
      {
        company: "Shmoody",
        category: "Mental health",
        logo: "/images/case-studies/shmoody.webp",
        metric: "$2M",
        description: "How to grow from a free app to $2M ARR with Adapty",
        href: "https://adapty.io/case-studies/shmoody/",
      },
      {
        company: "Lively",
        category: "Health & Fitness",
        logo: "/images/case-studies/lively.png",
        metric: "-83%",
        description: "Saved 82% of potentially lost revenue",
        href: "https://adapty.io/case-studies/lively/",
      },
      {
        company: "Glam AI",
        category: "Makeup & Beauty",
        logo: "/images/case-studies/glam-ai.webp",
        metric: "108%",
        description: "How to scale to $1.2M ARR in 3 months",
        href: "https://adapty.io/case-studies/glam-ai/",
      },
      {
        company: "Pepapp",
        category: "Health & Fitness",
        logo: "/images/case-studies/pepapp.webp",
        metric: "400%",
        description: "How to make Adapty free with Refund Saver",
        href: "https://adapty.io/case-studies/pepapp/",
      },
      {
        company: "Fotorama",
        category: "Photo & Video",
        logo: "/images/case-studies/fotorama.webp",
        metric: "-40%",
        description: "How to decrease the refund rate with Adapty",
        href: "https://adapty.io/case-studies/fotorama/",
      },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    paywallABTesting: {
      title: "Paywall A/B Testing",
      description:
        "Data-driven decisions for your paywalls. Run A/B tests to find the best performing paywall for your app. Optimize prices, trial periods, and layout.",
      cta: {
        text: "Learn more about A/B testing",
        href: "/features/ab-testing",
      },
      image: {
        src: "/assets/feature-ab.png",
        alt: "Paywall A/B Testing Dashboard",
        bgColor: "#E8F5E9", // Light green for generic
      },
      features: [
        "Statistical significance calculator",
        "Cohort analysis & retention impact",
        "Real-time experiment switching",
        "No app update required"
      ] as const,
      codeSnippet: `// 1. Fetch remote config
const paywall = await adapty.getPaywall("placement_id");

// 2. Log view event
await adapty.logShowPaywall(paywall);

// 3. Display paywall UI
const view = new AdaptyPaywallView(paywall);
view.present();`,
      testimonial: {
        logo: "/images/sections/smartist-logo.png",
        quote:
          "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
        author: {
          name: "Ilgar Tali",
          role: "Founder & Chief Vision Officer",
          avatar: "/images/sections/ilgar-tali.webp",
        },
      },
    },
    refundSaver: {
      title: "Refund Saver",
      description:
        "Retain users who are about to cancel. Automatically offer a discount or a different plan when a user initiates a refund or cancellation.",
      cta: {
        text: "Stop churn with Refund Saver",
        href: "/features/refund-saver",
      },
      image: {
        src: "/assets/feature-refund.png",
        alt: "Refund Saver Logic",
        bgColor: "#FFF3E0", // Light orange
      },
      features: [
        "Automated retention offers",
        "Cancellation reason surveys",
        "Win-back campaigns",
        "Churn prediction models"
      ] as const,
      codeSnippet: `// Intercept cancellation intent
adapty.on("subscription_cancel_intent", async (user) => {
  if (user.ltv > 50) {
    // Offer 20% discount to high-value users
    await adapty.presentOffer({
      id: "winback_20_percent",
      placement: "cancellation_flow"
    });
  }
});`,
      testimonial: {
        quote:
          "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
        company: { name: "Fotorama", category: "Photo and video", logo: "/images/sections/fotorama.webp" },
        author: {
          name: "Berk Çağatay Albayrak",
          role: "Sr. Product Manager",
          avatar: "/images/sections/berk.webp",
        },
      },
    },
    subscriptionBI: {
      title: "Know your subscription numbers at any moment",
      description:
        "Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.",
      cta: { text: "See subscription BI", href: "https://adapty.io/ltv-analytics/" },
      image: {
        src: "/images/sections/analytics.webp",
        alt: "Subscription Analytics Dashboard",
        bgColor: "#B4ABF9",
      },
      features: ["MRR / ARR", "LTV by cohort", "Churn rate", "Trial conversion", "Refund rate"],
      testimonial: {
        quote:
          "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
        company: { name: "Moonly", category: "Moon calendar app", logo: "/images/sections/moonly-icon.svg" },
        author: {
          name: "Nikolay Chebotarev",
          role: "Head of UA at Moonly.app",
          avatar: "/images/sections/nikolay.png",
        },
      },
    },
    noCodePaywall: {
      title: "No-code paywall builder",
      description:
        "Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.",
      cta: { text: "Create paywalls within minutes", href: "https://adapty.io/paywall-builder/" },
      image: {
        src: "/images/sections/paywall-builder.webp",
        alt: "Paywall Builder Interface",
        bgColor: "transparent",
      },
      features: [
        "Drag-and-drop visual builder",
        "Pre-built templates",
        "Real-time preview on device",
        "Instant updates without app release",
      ],
      testimonial: {
        quote:
          "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
        company: { name: "Moodworks Inc", category: "Mental health apps", logo: "/images/sections/cat-icon.png" },
        author: {
          name: "Mike McSweeney",
          role: "Chief Product Officer",
          avatar: "/images/sections/mike.webp",
        },
      },
    },
    funnelFox: {
      title: "Boost app revenue fast with web funnels",
      description:
        "Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.",
      cta: { text: "Explore FunnelFox", href: "https://funnelfox.io", external: true },
      image: {
        src: "/images/sections/funnelfox.webp",
        alt: "FunnelFox Dashboard",
        bgColor: "#F4F4F5",
      },
    },
    revenueSync: {
      title: "Sync purchase data with other services",
      description:
        "Forward subscription events to analytics and attribution services without coding.",
      cta: { text: "Explore integrations", href: "https://adapty.io/integrations/" },
      testimonial: {
        quote:
          "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel.",
        author: {
          name: "Chris Bick",
          role: "Founder and CEO",
          avatar: "/images/testimonials/chris.webp",
        },
        logo: "/images/testimonials/logos/logo-bickster.png",
      },
    },
  },

  // ============================================
  // ROLE CARDS SECTION
  // ============================================
  roleCards: {
    headline: {
      primary: "Help your team run the mobile subscription business.",
      secondary: "Faster and cheaper.",
    },
    items: [
      {
        title: "For developers",
        image: "/images/role-developers-new.webp",
        link: "https://adapty.io/for-developers/",
        tags: ["Subscriptions SDK", "Refund Saver", "Remote config", "Fallback paywalls"],
      },
      {
        title: "For app owners",
        image: "/images/role-owners-new.webp",
        link: "https://adapty.io/for-app-owners/",
        tags: ["Revenue analytics", "LTV analytics", "AI LTV and revenue predictions"],
      },
      {
        title: "For marketers",
        image: "/images/role-marketers-new.webp",
        link: "https://adapty.io/for-marketers/",
        tags: ["A/B testing", "No-code Builder", "Localizations", "Targeting"],
      },
    ],
  },

  // ============================================
  // SDK SECTION
  // ============================================
  sdk: {
    headline: {
      primary: "Integrate in-app purchases",
      secondary: "with a few lines of code",
    },
    subheadline: {
      primary: "Integrate IAPs within a few hours without server coding.",
      secondary: "Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.",
    },
    cta: { text: "Make subscriptions easy", href: "https://adapty.io/sdk/" },
    gridHeadline: "Get the SDK for your platform",
    platforms: [
      { name: "Swift SDK", icon: "/sdks/swift.svg", link: "https://adapty.io/sdk/ios/", color: "#F05138" },
      { name: "Kotlin SDK", icon: "/sdks/kotlin.svg", link: "https://adapty.io/sdk/android/", color: "#7F52FF" },
      { name: "React Native SDK", icon: "/sdks/react-native.svg", link: "https://adapty.io/sdk/react-native/", color: "#61DAFB" },
      { name: "Unity SDK", icon: "/sdks/unity.svg", link: "https://adapty.io/sdk/unity/", color: "#000000" },
      { name: "Flutter SDK", icon: "/sdks/flutter.svg", link: "https://adapty.io/sdk/flutter/", color: "#02569B" },
      { name: "Capacitor SDK", icon: "/sdks/capacitor.svg", link: "https://adapty.io/sdk/capacitor/", color: "#53B9FF" },
      { name: "Kotlin Multiplatform", icon: "/sdks/kmp.svg", link: "https://adapty.io/sdk/kmp/", color: "#7F52FF" },
      { name: "FlutterFlow", icon: "/sdks/flutterflow.svg", link: "https://adapty.io/sdk/flutterflow/", color: "#6E40C9" },
      { name: "Web API", icon: "/sdks/web-api.svg", link: "https://adapty.io/sdk/web/", color: "#3B82F6" },
      { name: "Stripe", icon: "/sdks/stripe.svg", link: "https://adapty.io/integrations/stripe/", color: "#635BFF" },
    ],
    codeExamples: {
      swift: `import Adapty

// 1. Activate Adapty
try await Adapty.activate("PUBLIC_KEY")

// 2. Display paywall
if let paywall = try await Adapty.getPaywall("placement_id") {
    // show your paywall view
}

// 3. Make purchase
let result = try await Adapty.makePurchase(product: product)
if result.accessLevel["premium"]?.isActive == true {
    // grant access
}`,
      kotlin: `import com.adapty.Adapty

// 1. Activate Adapty
Adapty.activate(context, "PUBLIC_KEY")

// 2. Display paywall
Adapty.getPaywall("placement_id") { result ->
    val paywall = result.getOrNull()
}

// 3. Make purchase
Adapty.makePurchase(activity, product) { result ->
    if (result.success) {
        // grant access
    }
}`,
      flutter: `import 'package:adapty_flutter/adapty_flutter.dart';

// 1. Activate Adapty
try {
  await Adapty.activate().activate();
} catch (e) {
  print(e);
}

// 2. Display paywall
final paywall = await Adapty().getPaywall(placementId: "placement_id");

// 3. Make purchase
final result = await Adapty().makePurchase(product: product);
if (result?.accessLevel["premium"]?.isActive == true) {
   // grant access
}`,
      "react-native": `import { adapty } from 'react-native-adapty';

// 1. Activate Adapty
await adapty.activate('PUBLIC_KEY');

// 2. Display paywall
const paywall = await adapty.getPaywall('placement_id');

// 3. Make purchase
const result = await adapty.makePurchase(product);
if (result.accessLevel['premium'].isActive) {
  // grant access
}`,
    },
    testimonial: {
      logo: "/images/testimonials/logos/logo-smitten.webp",
      quote:
        "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android.",
      author: {
        name: "Magnus Olafsson",
        role: "Chief Technology Officer at Smitten",
        avatar: "/images/testimonial-magnus.webp",
      },
    },
  },

  // ============================================
  // INTEGRATIONS SECTION
  // ============================================
  integrations: {
    headline: "Works with your favorite tools",
    items: [
      "amplitude",
      "mixpanel",
      "appsflyer",
      "adjust",
      "branch",
      "braze",
      "facebook",
      "firebase-ga",
      "pushwoosh",
      "onesignal",
      "airbridge",
      "singular",
      "splitmetrics",
      "webhook",
      "appmetrica",
      "posthog",
      "stripe",
      "tenjin",
      "apple-ads",
    ],
    detailedLogos: [
      { name: "Airbridge", file: "logo-airbridge.svg" },
      { name: "Adjust", file: "logo-adjust.svg" },
      { name: "Amazon S3", file: "logo-amazon-s3.svg" },
      { name: "Amplitude", file: "logo-amplitude.svg" },
      { name: "Apple Search Ads", file: "icon-apple-ads-text.svg" },
      { name: "AppsFlyer", file: "logo-appsflyer.svg" },
      { name: "AppMetrica", file: "logo-appmetrica.svg" },
      { name: "Asapty", file: "logo-asapty.svg" },
      { name: "Branch", file: "logo-branch.svg" },
      { name: "Braze", file: "logo-braze.svg" },
      { name: "Facebook", file: "logo-facebook-blue-text.svg" },
      { name: "Firebase", file: "logo-firebase-and-ga.svg" },
      { name: "Google Cloud", file: "logo-google-cloud-storage.svg" },
      { name: "Mixpanel", file: "logo-mixpanel.svg" },
      { name: "OneSignal", file: "logo-onesignal.svg" },
      { name: "PostHog", file: "posthog-logo-colorfull.svg" },
      { name: "Pushwoosh", file: "logo-pushwoosh.svg" },
      { name: "SplitMetrics", file: "logo-split-metrics.svg" },
      { name: "Singular", file: "singular-logo-block.svg" },
      { name: "Stripe", file: "icon-stripe-logo.svg" },
      { name: "Tenjin", file: "tenjin_logo_color.svg" },
      { name: "Webhooks", file: "logo-webhook.svg" },
    ],
  },

  // ============================================
  // G2 BADGES SECTION
  // ============================================
  g2Badges: {
    headline: "Trusted for usability and customer service",
    subheadline: "Recognized by G2 in Winter 2025 reports",
    badges: [
      "g2-winter-2025-1",
      "g2-winter-2025-2",
      "g2-winter-2025-3",
      "g2-winter-2025-4",
      "g2-winter-2025-5",
    ],
  },

  // ============================================
  // ENTERPRISE SECTION
  // ============================================
  enterprise: {
    badge: "Enterprise Grade",
    headline: {
      primary: "Enterprise-grade platform",
      secondary: "built for scale",
    },
    description: {
      primary: "Adapty is built for scale with secure infrastructure,",
      secondary: "reliable SLAs, and responsive support for high-growth teams.",
    },
    cta: {
      primary: { text: "Contact Sales", href: "#" },
      secondary: { text: "View Security Docs", href: "#" },
    },
    features: [
      {
        title: "Secure",
        icon: "shield",
        color: "emerald",
        items: ["SOC2 verified", "Encrypted", "24/7 global fraud monitoring"],
      },
      {
        title: "Reliable",
        icon: "lock",
        color: "blue",
        items: ["99.99% SLA", "Over $500M/year of in-app purchases processed"],
      },
      {
        title: "Responsive",
        icon: "server",
        color: "purple",
        items: [
          "Dedicated customer success manager",
          "Direct communication via Slack",
          "Live chat on the website",
          "Four ways to reach us",
        ],
      },
    ],
  },

  // ============================================
  // FINAL CTA SECTION
  // ============================================
  finalCta: {
    // Original text split at natural break
    headline: {
      primary: "Get started today",
      secondary: "or schedule a demo for your personal onboarding",
    },
    cta: {
      primary: { text: "Start for free", href: "#" },
      secondary: { text: "Or schedule a demo", href: "https://adapty.io/schedule-demo/" },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    logo: "/images/logo-white.svg",
    copyright: "© 2024 Adapty Tech Inc.",
    sections: [
      {
        title: "Product",
        links: [
          { text: "Paywall A/B Testing", href: "https://adapty.io/paywall-ab-testing/" },
          { text: "Paywall Builder", href: "https://adapty.io/paywall-builder/" },
          { text: "Subscription Analytics", href: "https://adapty.io/ltv-analytics/" },
          { text: "Refund Saver", href: "https://adapty.io/refund-saver/" },
          { text: "SDK", href: "https://adapty.io/sdk/" },
          { text: "Integrations", href: "https://adapty.io/integrations/" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "Documentation", href: "https://docs.adapty.io/" },
          { text: "Blog", href: "https://adapty.io/blog/" },
          { text: "Case Studies", href: "https://adapty.io/case-studies/" },
          { text: "Ebooks", href: "https://adapty.io/ebooks/" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About", href: "https://adapty.io/about/" },
          { text: "Careers", href: "https://adapty.io/careers/" },
          { text: "Contact", href: "https://adapty.io/contact/" },
        ],
      },
    ],
    social: [
      { name: "Twitter", href: "https://twitter.com/adapaboris", icon: "twitter" },
      { name: "LinkedIn", href: "https://linkedin.com/company/adapty", icon: "linkedin" },
      { name: "GitHub", href: "https://github.com/adaptyteam", icon: "github" },
    ],
  },
} as const;

export type Content = typeof content;
