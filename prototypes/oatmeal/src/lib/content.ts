// Adapty Homepage Content Data

export const content = {
  hero: {
    eyebrow: 'Revenue Management & Growth',
    headline: 'The complete toolkit for',
    headlineAccent: 'in-app subscriptions',
    description:
      'Build paywalls, run A/B tests, and track subscription analytics. Adapty helps mobile apps increase revenue by up to 30%.',
    cta: {
      primary: 'Start free trial',
      secondary: 'Schedule demo',
    },
    image: '/images/hero/adapty-paywall-demo-preview@2x.webp',
  },

  trustedBy: {
    title: 'Trusted by leading mobile apps',
    logos: [
      { name: 'Bumble', src: '/logos/trusted-by/bumble.svg' },
      { name: 'Feeld', src: '/logos/trusted-by/feeld.svg' },
      { name: 'HubX', src: '/logos/trusted-by/hubx.svg' },
      { name: 'Impala', src: '/logos/trusted-by/impala.svg' },
      { name: 'Almus', src: '/logos/trusted-by/almus.svg' },
      { name: 'WeeWoo', src: '/logos/trusted-by/weewoo.svg' },
      { name: 'AppNation', src: '/logos/trusted-by/appnation.svg' },
    ],
  },

  features: [
    {
      id: 'paywall-builder',
      eyebrow: 'No-Code Builder',
      title: 'Build paywalls without code',
      description:
        'Design and deploy beautiful paywalls in minutes. No engineering resources required. Update anytime without app releases.',
      image: '/images/features/paywalls-cover.webp',
      wallpaper: 'green' as const,
    },
    {
      id: 'ab-testing',
      eyebrow: 'A/B Testing',
      title: 'Optimize with experiments',
      description:
        'Run statistically significant tests on prices, designs, and offers. Make data-driven decisions to maximize conversion rates.',
      image: '/images/features/charts-cover.webp',
      wallpaper: 'blue' as const,
    },
    {
      id: 'analytics',
      eyebrow: 'Subscription Analytics',
      title: 'Track every metric that matters',
      description:
        'Real-time dashboards with MRR, LTV, churn, and cohort analysis. Understand your subscription business at a glance.',
      image: '/images/features/sdk-install-cover.webp',
      wallpaper: 'purple' as const,
    },
    {
      id: 'sdk',
      eyebrow: 'Cross-Platform SDK',
      title: 'Integrate in minutes',
      description:
        'Native SDKs for iOS, Android, React Native, Flutter, and Unity. Server-side validation and webhook support included.',
      image: '/images/features/sdk-install-cover.webp',
      wallpaper: 'brown' as const,
    },
  ],

  stats: [
    { value: 2, prefix: '$', suffix: 'B+', label: 'Revenue processed' },
    { value: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
    { value: 2.5, suffix: 'B+', label: 'Users tracked', decimals: 1 },
    { value: 60, suffix: 'B+', label: 'API calls/month' },
  ],

  testimonials: [
    {
      quote:
        'Adapty helped us increase our subscription revenue by 40% in just 3 months. The A/B testing tools are incredibly powerful.',
      author: 'Sarah Chen',
      role: 'Head of Product',
      company: 'Fitness App',
      avatar: '/images/testimonials/testimonial-magnus.webp',
    },
    {
      quote:
        'The no-code paywall builder saved us months of development time. We can now iterate on our monetization strategy in real-time.',
      author: 'Michael Roberts',
      role: 'CEO',
      company: 'Meditation App',
      avatar: '/images/testimonials/testimonial-magnus.webp',
    },
    {
      quote:
        'Switching to Adapty was the best decision we made. Their analytics gave us insights we never had before.',
      author: 'Emma Watson',
      role: 'Growth Lead',
      company: 'Language Learning App',
      avatar: '/images/testimonials/testimonial-magnus.webp',
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
    { name: 'Amplitude', src: '/integrations/amplitude.svg' },
    { name: 'Mixpanel', src: '/integrations/mixpanel.svg' },
    { name: 'Segment', src: '/integrations/segment.svg' },
    { name: 'AppsFlyer', src: '/integrations/appsflyer.svg' },
    { name: 'Adjust', src: '/integrations/adjust.svg' },
    { name: 'Branch', src: '/integrations/branch.svg' },
    { name: 'Firebase', src: '/integrations/firebase-ga.svg' },
    { name: 'Stripe', src: '/integrations/stripe.svg' },
    { name: 'OneSignal', src: '/integrations/onesignal.svg' },
    { name: 'Braze', src: '/integrations/braze.svg' },
    { name: 'PostHog', src: '/integrations/posthog.svg' },
    { name: 'Singular', src: '/integrations/singular.svg' },
  ],

  sdks: [
    { name: 'Swift', src: '/sdks/swift.svg' },
    { name: 'Kotlin', src: '/sdks/kotlin.svg' },
    { name: 'React Native', src: '/sdks/react-native.svg' },
    { name: 'Flutter', src: '/sdks/flutter.svg' },
    { name: 'Unity', src: '/sdks/unity.svg' },
  ],

  caseStudies: [
    { name: 'Productivity App', icon: '/images/case-studies/productivity-app.webp', lift: '+45%' },
    { name: 'Photo Editor', icon: '/images/case-studies/text-on-pic.webp', lift: '+38%' },
    { name: 'Travel App', icon: '/images/case-studies/trip-planning.webp', lift: '+52%' },
    { name: 'Going Merry', icon: '/images/case-studies/going-merry.webp', lift: '+29%' },
    { name: 'Shmoody', icon: '/images/case-studies/shmoody.webp', lift: '+61%' },
    { name: 'Lively', icon: '/images/case-studies/lively.png', lift: '+33%' },
  ],

  g2Badges: [
    { name: 'High Performer', src: '/images/g2-badges/g2-winter-2025-1.svg' },
    { name: 'Best Support', src: '/images/g2-badges/g2-winter-2025-2.svg' },
    { name: 'Easiest Setup', src: '/images/g2-badges/g2-winter-2025-3.svg' },
    { name: 'Best Results', src: '/images/g2-badges/g2-winter-2025-4.svg' },
    { name: 'Leader', src: '/images/g2-badges/g2-winter-2025-5.svg' },
  ],

  enterprise: {
    title: 'Enterprise-ready infrastructure',
    features: [
      { title: 'SOC 2 Type II', description: 'Certified security compliance' },
      { title: 'GDPR Compliant', description: 'Full data privacy controls' },
      { title: '99.99% Uptime', description: 'Enterprise SLA guaranteed' },
      { title: 'Dedicated Support', description: 'Priority technical assistance' },
    ],
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
      twitter: 'https://twitter.com/adapaborrowtyio',
      linkedin: 'https://linkedin.com/company/adapty',
      github: 'https://github.com/adapty',
    },
    copyright: '2024 Adapty. All rights reserved.',
  },
}
