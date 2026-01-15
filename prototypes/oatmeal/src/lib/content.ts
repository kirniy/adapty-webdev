// Adapty Homepage Content Data - Real content from adapty.io and AuraBuild

export const content = {
  hero: {
    eyebrow: 'Revenue Management & Growth',
    headline: 'Revenue management for',
    headlineAccent: 'in-app purchases',
    description:
      'Save months on integrating subscriptions and double your app revenue with paywall management and A/B testing.',
    cta: {
      primary: 'Start for free',
      secondary: 'View Documentation',
    },
    trustSignal: 'Trusted by 15,000+ apps worldwide',
    image: '/images/hero-overview.webp',
  },

  trustedBy: {
    title: 'Trusted by 15,000+ apps and the world\'s largest app publishers',
    logos: [
      { name: 'Feeld', src: '/logos/trusted-by/feeld.svg' },
      { name: 'Bumble', src: '/logos/trusted-by/bumble.svg' },
      { name: 'HubX', src: '/logos/trusted-by/hubx.svg' },
      { name: 'AppNation', src: '/logos/trusted-by/appnation.webp' },
      { name: 'Smitten', src: '/logos/trusted-by/smitten.webp' },
      { name: 'Bickster', src: '/logos/trusted-by/bickster.png' },
      { name: 'Almus', src: '/logos/trusted-by/almus.svg' },
      { name: 'Impala Studios', src: '/logos/trusted-by/impala-studios.svg' },
      { name: 'SocialKit', src: '/logos/trusted-by/socialkit.svg' },
      { name: 'Weewoo', src: '/logos/trusted-by/weewoo.svg' },
    ],
  },

  features: [
    {
      id: 'paywall-builder',
      eyebrow: 'No-Code Builder',
      title: 'Paywall Builder',
      description:
        'No-code visual builder with 50+ templates. Design, customize, and ship paywalls without developers.',
      image: '/images/features/paywalls-cover.webp',
      wallpaper: 'green' as const,
      link: { text: 'Explore Paywall Builder', href: '#' },
    },
    {
      id: 'ab-testing',
      eyebrow: 'Experiments',
      title: 'A/B Testing',
      description:
        'Bayesian statistics for faster results. Run multi-variant experiments with ML-powered predictions.',
      image: '/images/features/charts-cover.webp',
      wallpaper: 'olive' as const,
      link: { text: 'Start Experimenting', href: '#' },
    },
    {
      id: 'analytics',
      eyebrow: 'Real-time Data',
      title: 'Real-time Analytics',
      description:
        'Track MRR, LTV, churn, and cohorts. Sync data to your favorite analytics tools.',
      image: '/images/features/sdk-install-cover.webp',
      wallpaper: 'purple' as const,
      link: { text: 'View Dashboard', href: '#' },
    },
    {
      id: 'remote-config',
      eyebrow: 'Live Updates',
      title: 'Remote Config',
      description:
        'Update pricing, features, and offers instantly. No app updates required.',
      image: '/images/features/sdk-install-cover.webp',
      wallpaper: 'blue' as const,
      link: { text: 'Explore Config', href: '#' },
    },
  ],

  stats: [
    { value: 15, suffix: 'k+', label: 'Apps powered', prefix: '' },
    { value: 1.5, suffix: 'B+', label: 'User profiles', decimals: 1 },
    { value: 4, suffix: 'B+', label: 'API calls monthly' },
    { value: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
  ],

  testimonials: [
    {
      quote:
        'The no-code paywall builder saved us months of development time. We can now iterate on our monetization strategy in real-time without waiting for app releases.',
      author: 'Chris Bick',
      role: 'CEO',
      company: 'Shmoody',
      avatar: '/images/testimonials/chris-bick.webp',
    },
    {
      quote:
        'Adapty helped us increase our subscription revenue by 40% in just 3 months. The A/B testing tools are incredibly powerful.',
      author: 'Cem Ortabas',
      role: 'CEO',
      company: 'Fotorama',
      avatar: '/images/testimonials/cem-ortabas.webp',
    },
    {
      quote:
        'Switching to Adapty was the best decision we made. Their analytics and cohort tools are game-changers.',
      author: 'Roi Mulia',
      role: 'Growth Lead',
      company: 'Appi Trips',
      avatar: '/images/testimonials/roi-mulia.webp',
    },
  ],

  roleCards: [
    {
      title: 'For Developers',
      description:
        'Focus on building great features while we handle subscription infrastructure.',
      tags: ['SDK Integration', 'Webhooks', 'Server Validation'],
      image: '/images/role-developers-new.webp',
    },
    {
      title: 'For Marketers',
      description:
        'Launch and iterate on monetization experiments without engineering support.',
      tags: ['No-Code Paywalls', 'A/B Testing', 'Campaign Analytics'],
      image: '/images/role-marketers-new.webp',
    },
    {
      title: 'For App Owners',
      description:
        'Get complete visibility into your subscription business performance.',
      tags: ['Revenue Dashboards', 'Cohort Analysis', 'LTV Predictions'],
      image: '/images/role-owners-new.webp',
    },
  ],

  integrations: [
    { name: 'Amplitude', logo: 'amplitude.svg', category: 'Analytics' },
    { name: 'Mixpanel', logo: 'mixpanel.svg', category: 'Analytics' },
    { name: 'AppsFlyer', logo: 'appsflyer.svg', category: 'Attribution' },
    { name: 'Adjust', logo: 'adjust.svg', category: 'Attribution' },
    { name: 'Branch', logo: 'branch.svg', category: 'Attribution' },
    { name: 'Segment', logo: 'segment.svg', category: 'Analytics' },
    { name: 'Firebase', logo: 'firebase.svg', category: 'Platform' },
    { name: 'Braze', logo: 'braze.svg', category: 'Engagement' },
    { name: 'OneSignal', logo: 'onesignal.svg', category: 'Engagement' },
    { name: 'Slack', logo: 'slack.svg', category: 'Messaging' },
    { name: 'PostHog', logo: 'posthog.svg', category: 'Analytics' },
    { name: 'Stripe', logo: 'stripe.svg', category: 'Payments' },
    { name: 'Apple Ads', logo: 'apple-ads.svg', category: 'Attribution' },
    { name: 'Singular', logo: 'singular.svg', category: 'Attribution' },
  ],

  sdkPlatforms: [
    { name: 'iOS', src: '/images/sdks/swift.svg', color: 'bg-orange-50 border-orange-200' },
    { name: 'Android', src: '/images/sdks/kotlin.svg', color: 'bg-purple-50 border-purple-200' },
    { name: 'Flutter', src: '/images/sdks/flutter.svg', color: 'bg-sky-50 border-sky-200' },
    { name: 'React Native', src: '/images/sdks/react-native.svg', color: 'bg-cyan-50 border-cyan-200' },
    { name: 'Unity', src: '/images/sdks/unity.svg', color: 'bg-stone-800 border-stone-700' },
    { name: 'Stripe', src: '/images/sdks/stripe.svg', color: 'bg-indigo-50 border-indigo-200' },
  ],

  sdkTabs: [
    { id: 'swift', label: 'Swift' },
    { id: 'kotlin', label: 'Kotlin' },
    { id: 'react-native', label: 'React Native' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'unity', label: 'Unity' },
  ],

  caseStudies: [
    {
      title: 'How Glam AI pricing tests unlocked revenue potential',
      metric: '+50% Revenue',
      category: 'Photo & Video',
      logo: '/images/case-studies/glam-ai.webp',
      bgColor: 'from-pink-100 to-purple-100',
    },
    {
      title: 'Going Merry\'s rapid scaling with Paywall Builder',
      metric: '5x Growth',
      category: 'Education',
      logo: '/images/case-studies/going-merry.webp',
      bgColor: 'from-green-100 to-emerald-100',
    },
    {
      title: 'Shmoody boosted conversions with A/B experiments',
      metric: '+40% Revenue',
      category: 'Health & Wellness',
      logo: '/images/case-studies/shmoody.webp',
      bgColor: 'from-blue-100 to-cyan-100',
    },
  ],

  g2Badges: [
    { name: 'High Performer', src: '/images/g2-badges/g2-winter-2025-1.svg' },
    { name: 'Best Support', src: '/images/g2-badges/g2-winter-2025-2.svg' },
    { name: 'Easiest Setup', src: '/images/g2-badges/g2-winter-2025-3.svg' },
    { name: 'Best Results', src: '/images/g2-badges/g2-winter-2025-4.svg' },
    { name: 'Leader', src: '/images/g2-badges/g2-winter-2025-5.svg' },
  ],

  enterprise: {
    headline: 'Enterprise-ready',
    headlineAccent: 'infrastructure',
    description:
      'Built for scale, security, and compliance. We support the world\'s largest publishers.',
    features: [
      { icon: 'shield', label: 'SOC 2 Type II' },
      { icon: 'lock', label: 'GDPR Compliant' },
      { icon: 'server', label: '99.99% Uptime' },
      { icon: 'headset', label: 'Dedicated Support' },
    ],
    cta: 'Contact Sales',
  },

  finalCta: {
    eyebrow: 'Ready to grow?',
    headline: 'Start increasing revenue today',
    description:
      'Join thousands of mobile apps using Adapty to build better subscription businesses.',
    cta: 'Start free trial',
  },

  footer: {
    logo: '/logos/adapty-logo-black.svg',
    description: 'The complete toolkit for mobile app monetization.',
    links: {
      Product: ['Paywall Builder', 'A/B Testing', 'Analytics', 'Integrations'],
      Resources: ['Documentation', 'Blog', 'Case Studies', 'Webinars'],
      Company: ['About', 'Careers', 'Contact', 'Press'],
      Legal: ['Privacy', 'Terms', 'Security'],
    },
    social: {
      twitter: 'https://twitter.com/adaptyio',
      linkedin: 'https://linkedin.com/company/adapty',
      github: 'https://github.com/adapty',
    },
  },
}
