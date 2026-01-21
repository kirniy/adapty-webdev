/**
 * Adapty Content Data - Single source of truth for all homepage content
 * Extracted from kirills-testversion-adapty-pt2 and adapty-prototype
 */

// ============================================================================
// HERO SECTION
// ============================================================================
export const hero = {
  badge: {
    text: 'Ebook: $100K playbook | download',
    href: 'https://adapty.io/ebooks/100k-app-playbook/',
  },
  headline: {
    primary: 'Revenue management',
    secondary: 'for in-app purchases',
  },
  subheadline: {
    primary: 'Save months on integrating subscriptions',
    secondary: 'and double your app revenue with paywall management.',
  },
  cta: {
    primary: { text: 'Start for free', href: '#' },
    secondary: { text: 'Schedule a demo', href: '/schedule-demo' },
  },
  image: {
    dashboard: '/images/hero-overview.webp',
    mobile: '/images/hero/adapty-paywall-demo-preview@2x.webp',
  },
} as const;

// ============================================================================
// TRUSTED BY SECTION (7 logos)
// ============================================================================
export const trustedBy = {
  headline: {
    primary: 'Trusted by 15,000+ apps',
    secondary: "and the world's largest app publishers",
  },
  logos: [
    { name: 'Feeld', file: 'feeld.svg' },
    { name: 'Bumble', file: 'bumble.svg' },
    { name: 'Weewoo', file: 'weewoo.svg' },
    { name: 'AppNation', file: 'appnation.webp' },
    { name: 'Almus', file: 'almus.svg' },
    { name: 'Impala Studios', file: 'impala-studios.svg' },
    { name: 'HubX', file: 'hubx.svg' },
  ],
} as const;

// ============================================================================
// STATS SECTION (4 metrics)
// ============================================================================
export const stats = {
  headline: {
    primary: 'Powering subscription revenue',
    secondary: 'at scale',
  },
  items: [
    { value: 2, prefix: '$', suffix: 'B+', label: 'tracked revenue', decimalPlaces: 0 },
    { value: 99.99, suffix: '%', label: 'historical uptime', decimalPlaces: 2 },
    { value: 2.5, suffix: 'B+', label: 'users served', decimalPlaces: 1 },
    { value: 60, suffix: 'B+', label: 'API calls / month', decimalPlaces: 0 },
  ],
} as const;

// ============================================================================
// TESTIMONIALS SECTION (5 testimonials)
// ============================================================================
export const testimonials = {
  headline: {
    primary: 'Developers from all kinds of apps move to Adapty.',
    secondary: 'See how they grow their revenue.',
  },
  items: [
    {
      id: 'cem',
      image: '/images/testimonials/cem.webp',
      quote:
        "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
      name: 'Cem Ortabas',
      position: 'Co-founder and CEO, HubX',
      logo: '/images/testimonials/logos/logo-hubx-white.svg',
    },
    {
      id: 'chris',
      image: '/images/testimonials/chris.webp',
      quote:
        "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you are looking to boost the revenue of your app, I definitely recommend Adapty.",
      name: 'Chris Bick',
      position: 'Founder and CEO, Bickster',
      logo: '/images/testimonials/logos/logo-bickster.png',
    },
    {
      id: 'yalcin',
      image: '/images/testimonials/asman.webp',
      quote:
        'We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.',
      name: 'Yalcin Ozdemir',
      position: 'Founder and CEO, AppNation',
      logo: '/images/testimonials/logos/logo-appnation-white.png',
    },
    {
      id: 'kyle',
      image: '/images/testimonials/kyle.webp',
      quote:
        "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
      name: 'Kyle Smith',
      position: 'Head of data at Smitten Dating',
      logo: '/images/testimonials/logos/logo-smitten.webp',
    },
    {
      id: 'roi',
      image: '/images/testimonials/roi.webp',
      quote:
        "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos, etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
      name: 'Roi Mulia',
      position: 'Founder and CEO, SocialKit',
      logo: '/images/testimonials/logos/logo-socialkit-white.svg',
    },
  ],
} as const;

// ============================================================================
// CASE STUDIES SECTION (9 case studies)
// ============================================================================
export const caseStudies = {
  headline: {
    primary: 'Read the real cases',
    secondary: 'of our customers',
  },
  items: [
    {
      company: 'Productivity app',
      category: 'Productivity',
      logo: '/images/case-studies/productivity-app.webp',
      metric: '+50%',
      description: "How pricing tests unlocked app's potential",
      href: 'https://adapty.io/case-studies/productivity-app-and-autopilot/',
    },
    {
      company: 'Text on Pic',
      category: 'Photo & Video',
      logo: '/images/case-studies/text-on-pic.webp',
      metric: '+30%',
      description: 'How to boost revenue with the right experiments',
      href: 'https://adapty.io/case-studies/photo-editing-app-and-autopilot/',
    },
    {
      company: 'Trip planning',
      category: 'Travel',
      logo: '/images/case-studies/trip-planning.webp',
      metric: '+102%',
      description: 'New onboarding and pricing strategy doubled revenue per user',
      href: 'https://adapty.io/case-studies/travel-app/',
    },
    {
      company: 'Going Merry',
      category: 'App publisher',
      logo: '/images/case-studies/going-merry.webp',
      metric: '5x',
      description: 'How to scale subscription revenue with Paywall Builder',
      href: 'https://adapty.io/case-studies/going-merry/',
    },
    {
      company: 'Shmoody',
      category: 'Mental health',
      logo: '/images/case-studies/shmoody.webp',
      metric: '$2M',
      description: 'How to grow from a free app to $2M ARR with Adapty',
      href: 'https://adapty.io/case-studies/shmoody/',
    },
    {
      company: 'Lively',
      category: 'Health & Fitness',
      logo: '/images/case-studies/lively.png',
      metric: '-83%',
      description: 'Saved 82% of potentially lost revenue',
      href: 'https://adapty.io/case-studies/lively/',
    },
    {
      company: 'Glam AI',
      category: 'Makeup & Beauty',
      logo: '/images/case-studies/glam-ai.webp',
      metric: '108%',
      description: 'How to scale to $1.2M ARR in 3 months',
      href: 'https://adapty.io/case-studies/glam-ai/',
    },
    {
      company: 'Pepapp',
      category: 'Health & Fitness',
      logo: '/images/case-studies/pepapp.webp',
      metric: '400%',
      description: 'How to make Adapty free with Refund Saver',
      href: 'https://adapty.io/case-studies/pepapp/',
    },
    {
      company: 'Fotorama',
      category: 'Photo & Video',
      logo: '/images/case-studies/fotorama.webp',
      metric: '-40%',
      description: 'How to decrease the refund rate with Adapty',
      href: 'https://adapty.io/case-studies/fotorama/',
    },
  ],
} as const;

// ============================================================================
// ROLE CARDS SECTION (3 roles)
// ============================================================================
export const roleCards = {
  headline: {
    primary: 'Help your team run the mobile subscription business.',
    secondary: 'Faster and cheaper.',
  },
  items: [
    {
      title: 'For developers',
      image: '/images/role-developers-new.webp',
      link: '/for-developers',
      tags: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
    },
    {
      title: 'For app owners',
      image: '/images/role-owners-new.webp',
      link: '/for-app-owners',
      tags: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
    },
    {
      title: 'For marketers',
      image: '/images/role-marketers-new.webp',
      link: '/for-marketers',
      tags: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
    },
  ],
} as const;

// ============================================================================
// SDK SECTION (10 SDKs)
// ============================================================================
export const sdk = {
  headline: {
    primary: 'Integrate in-app purchases',
    secondary: 'with a few lines of code',
  },
  subheadline: {
    primary: 'Integrate IAPs within a few hours without server coding.',
    secondary:
      'Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.',
  },
  cta: { text: 'Make subscriptions easy', href: 'https://adapty.io/sdk/' },
  gridHeadline: 'Get the SDK for your platform',
  platforms: [
    { name: 'Swift SDK', icon: '/sdks/swift.svg', link: 'https://adapty.io/sdk/ios/', color: '#F05138' },
    { name: 'Kotlin SDK', icon: '/sdks/kotlin.svg', link: 'https://adapty.io/sdk/android/', color: '#7F52FF' },
    { name: 'React Native SDK', icon: '/sdks/react-native.svg', link: 'https://adapty.io/sdk/react-native/', color: '#61DAFB' },
    { name: 'Unity SDK', icon: '/sdks/unity.svg', link: 'https://adapty.io/sdk/unity/', color: '#000000' },
    { name: 'Flutter SDK', icon: '/sdks/flutter.svg', link: 'https://adapty.io/sdk/flutter/', color: '#02569B' },
    { name: 'Capacitor SDK', icon: '/sdks/capacitor.svg', link: 'https://adapty.io/sdk/capacitor/', color: '#53B9FF' },
    { name: 'Kotlin Multiplatform', icon: '/sdks/kmp.svg', link: 'https://adapty.io/sdk/kmp/', color: '#7F52FF' },
    { name: 'FlutterFlow', icon: '/sdks/flutterflow.svg', link: 'https://adapty.io/sdk/flutterflow/', color: '#6E40C9' },
    { name: 'Web API', icon: '/sdks/web-api.svg', link: 'https://adapty.io/sdk/web/', color: '#3B82F6' },
    { name: 'Stripe', icon: '/sdks/stripe.svg', link: 'https://adapty.io/integrations/stripe/', color: '#635BFF' },
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
    reactNative: `import { adapty } from 'react-native-adapty';

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
} as const;

// ============================================================================
// INTEGRATIONS SECTION (19 integrations)
// ============================================================================
export const integrations = {
  headline: 'Works with your favorite tools',
  items: [
    'amplitude',
    'mixpanel',
    'appsflyer',
    'adjust',
    'branch',
    'braze',
    'facebook',
    'firebase-ga',
    'pushwoosh',
    'onesignal',
    'airbridge',
    'singular',
    'splitmetrics',
    'webhook',
    'appmetrica',
    'posthog',
    'stripe',
    'tenjin',
    'apple-ads',
  ],
} as const;

// ============================================================================
// G2 BADGES SECTION (5 badges)
// ============================================================================
export const g2Badges = {
  headline: 'Trusted for usability and customer service',
  subheadline: 'Recognized by G2 in Winter 2025 reports',
  badges: [
    'g2-winter-2025-1',
    'g2-winter-2025-2',
    'g2-winter-2025-3',
    'g2-winter-2025-4',
    'g2-winter-2025-5',
  ],
} as const;

// ============================================================================
// ENTERPRISE SECTION
// ============================================================================
export const enterprise = {
  badge: 'Enterprise Grade',
  headline: {
    primary: 'Enterprise-grade platform',
    secondary: 'built for scale',
  },
  description: {
    primary: 'Adapty is built for scale with secure infrastructure,',
    secondary: 'reliable SLAs, and responsive support for high-growth teams.',
  },
  cta: {
    primary: { text: 'Contact Sales', href: '#' },
    secondary: { text: 'View Security Docs', href: '#' },
  },
  features: [
    {
      title: 'Secure',
      icon: 'shield',
      color: 'emerald',
      items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring'],
    },
    {
      title: 'Reliable',
      icon: 'lock',
      color: 'blue',
      items: ['99.99% SLA', 'Over $500M/year of in-app purchases processed'],
    },
    {
      title: 'Responsive',
      icon: 'server',
      color: 'purple',
      items: [
        'Dedicated customer success manager',
        'Direct communication via Slack',
        'Live chat on the website',
        'Four ways to reach us',
      ],
    },
  ],
} as const;

// ============================================================================
// FINAL CTA SECTION
// ============================================================================
export const finalCta = {
  headline: {
    primary: 'Get started today',
    secondary: 'or schedule a demo for your personal onboarding',
  },
  cta: {
    primary: { text: 'Start for free', href: '#' },
    secondary: { text: 'Or schedule a demo', href: '/schedule-demo' },
  },
} as const;

// ============================================================================
// FOOTER
// ============================================================================
export const footer = {
  logo: '/logos/adapty-logo-white.svg',
  copyright: '2024 Adapty Tech Inc.',
  sections: [
    {
      title: 'Product',
      links: [
        { text: 'Paywall A/B Testing', href: '/paywall-ab-testing' },
        { text: 'Paywall Builder', href: '/paywall-builder' },
        { text: 'Subscription Analytics', href: '/ltv-analytics' },
        { text: 'Refund Saver', href: '/refund-saver' },
        { text: 'SDK', href: '/sdk' },
        { text: 'Integrations', href: '/integrations' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: 'https://docs.adapty.io/' },
        { text: 'Blog', href: 'https://adapty.io/blog/' },
        { text: 'Case Studies', href: '/case-studies' },
        { text: 'Ebooks', href: 'https://adapty.io/ebooks/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'https://adapty.io/about/' },
        { text: 'Careers', href: 'https://adapty.io/careers/' },
        { text: 'Contact', href: 'https://adapty.io/contact/' },
      ],
    },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/adaptyio', icon: 'twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/adapty', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/adaptyteam', icon: 'github' },
  ],
} as const;

// ============================================================================
// EXPORT ALL
// ============================================================================
export const adaptyContent = {
  hero,
  trustedBy,
  stats,
  testimonials,
  caseStudies,
  roleCards,
  sdk,
  integrations,
  g2Badges,
  enterprise,
  finalCta,
  footer,
} as const;

export type AdaptyContent = typeof adaptyContent;
