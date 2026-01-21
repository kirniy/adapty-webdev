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

// =============================================================================
// PAYWALL BUILDER PAGE - Content from adapty.io/paywall-builder
// =============================================================================
export const paywallBuilderContent = {
  hero: {
    badge: 'Paywall Management',
    headline: 'Build money-making paywalls without coding',
    description: 'Create, edit, and release payment screens in minutes. No designer or developer needed. Our visual editor lets you build native paywalls that convert.',
    primaryCta: 'Book a demo',
    secondaryCta: 'Start for free',
    primaryCtaHref: '/schedule-demo',
    secondaryCtaHref: 'https://app.adapty.io/registration',
    checklist: [
      'No designer or developer needed',
      'Native iOS & Android performance',
      'Real-time updates without app release',
      'Built-in A/B testing',
    ],
    benefits: [
      { icon: 'MousePointerClick', text: 'No coding required' },
      { icon: 'Palette', text: 'Visual drag-and-drop editor' },
      { icon: 'Rocket', text: 'Deploy in minutes' },
      { icon: 'Sparkles', text: 'Native performance' },
    ],
  },

  stats: [
    { value: '$13M+', label: 'revenue generated' },
    { value: '50K+', label: 'paywalls created' },
    { value: '15K+', label: 'apps' },
    { value: '8K+', label: 'clients' },
  ],

  features: {
    headline: 'Powerful features for every need',
    description: 'Everything you need to create, test, and optimize your paywalls. Pick one of our pre-made industry-tested templates or start from a blank page.',
    items: [
      {
        id: 'scale-paywall',
        icon: 'RefreshCw',
        title: 'Scale your current paywall',
        description: "Re-create your paywall with the builder to be able to iterate faster: quickly adjust any of its elements, clone it, or launch an A/B test within minutes.",
        category: 'builder',
      },
      {
        id: 'real-time-changes',
        icon: 'Zap',
        title: 'Apply changes in real-time',
        description: "Changes to any element of the paywall made with the builder can be applied right away - there's no need to wait for the next app release.",
        category: 'builder',
      },
      {
        id: 'ab-testing',
        icon: 'FlaskConical',
        title: 'Seamless A/B testing integration',
        description: "Create a paywall pair with the builder and launch A/B tests with advanced analytics right away to find the most profitable variant.",
        category: 'testing',
      },
      {
        id: 'customizable-structure',
        icon: 'LayoutGrid',
        title: 'Deeply customizable structure',
        description: "Use the vertical layout structure and paywall preview to compose the very paywall you have in mind. Add multiple elements or keep it minimalistic.",
        category: 'builder',
      },
      {
        id: 'flexible-adjustments',
        icon: 'SlidersHorizontal',
        title: 'Flexible element adjustments',
        description: "Customize elements by adjusting color, size, alignment, opacity, and more. Choose among numerous popular fonts or upload custom ones.",
        category: 'customization',
      },
      {
        id: 'localization',
        icon: 'Globe',
        title: 'Localization and personalization',
        description: "Boost your app's LTV by personalizing paywalls based on country or user properties. Localize multiple strings with a convenient table view.",
        category: 'localization',
      },
      {
        id: 'multi-screen',
        icon: 'Smartphone',
        title: 'Multi-screen support',
        description: "Paywalls autoscale to any phone screen size and can be previewed for numerous iOS and Android devices before publishing.",
        category: 'builder',
      },
      {
        id: 'native-experience',
        icon: 'Box',
        title: 'Truly native experience',
        description: "Adapty paywalls are built using native components, not webviews. They are platform-native, just like the rest of your app screens.",
        category: 'performance',
      },
    ],
  },

  testimonials: [
    {
      quote: "The no-code paywall builder saved us months of development time. We can now iterate on our monetization strategy in real-time without waiting for app releases.",
      author: "Chris Bick",
      role: "CEO",
      company: "Shmoody",
      avatar: '/images/testimonials/chris-bick.webp',
    },
    {
      quote: "Adapty's paywall builder allows us to test new pricing models and designs weekly. The ROI has been incredible.",
      author: "Sarah Brown",
      role: "Product Manager",
      company: "Fitness Pro",
      avatar: '/images/testimonials/sarah-brown.webp',
    },
    {
      quote: "We increased our revenue by 30% just by testing different paywall layouts with Adapty. It's an essential tool for any subscription app.",
      author: "David Williams",
      role: "Founder",
      company: "Yoga Daily",
      avatar: '/images/testimonials/david-williams.webp',
    }
  ],

  faq: [
    {
      question: "Do paywalls work on both iOS and Android?",
      answer: "Yes, paywalls created with Adapty are natively rendered on both iOS and Android devices, ensuring high performance and a perfect look on any screen size."
    },
    {
      question: "Can I use my own design?",
      answer: "Absolutely. You can start with one of our high-converting templates or build your paywall from scratch to match your app's branding perfectly."
    },
    {
      question: "Do I need to update my app to change prices?",
      answer: "No. With Adapty's Remote Config, you can change products, prices, and paywall designs instantly without submitting a new app version to the stores."
    },
    {
      question: "Is it possible to A/B test paywalls?",
      answer: "Yes, seamless A/B testing is built right into the product. You can create multiple paywall variants and test them against each other to find the best performing one."
    }
  ],

  customization: {
    headline: 'Endless customization possibilities',
    description: 'Each paywall is composed of separate widget elements that can be placed to your liking.',
    items: [
      {
        id: 'hard-soft-paywall',
        icon: 'Layout',
        title: 'Hard/Soft paywall',
        description: 'See if your users are willing to pay right away.',
        details: 'Test whether users convert better with a hard paywall (must subscribe to continue) or a soft paywall (can dismiss and access limited content). Our data shows the optimal approach varies by app category.',
      },
      {
        id: 'headline-benefits',
        icon: 'Type',
        title: 'Headline and benefits',
        description: "Test your creative hypotheses by changing the title catchphrase along with your app's benefits.",
        details: 'Experiment with different value propositions, emotional triggers, and benefit lists. We have seen headline changes alone increase conversion by up to 30%.',
      },
      {
        id: 'cta-button',
        icon: 'MousePointerClick',
        title: 'CTA-button text',
        description: '"Subscribe", "Continue", or any other variant - see which one brings higher conversion.',
        details: 'The right call-to-action can significantly impact your conversion. Test urgency-driven ("Start Now"), benefit-driven ("Unlock All Features"), or simple ("Continue") approaches.',
      },
      {
        id: 'background-color',
        icon: 'Palette',
        title: 'Background and color scheme',
        description: 'Upload any background image or video, choose matching color schemes, and select between dark or light mode.',
        details: 'Visual design affects trust and conversion. Support for gradients, images, videos, and animated backgrounds. Automatic color extraction for consistent theming.',
      },
      {
        id: 'extra-elements',
        icon: 'Sliders',
        title: 'Extra elements',
        description: 'Experiment with money-making widgets like free trial toggle, carousel, and timer.',
        details: 'Add conversion-boosting elements: countdown timers create urgency, carousels showcase features, toggles let users choose their plan. Mix and match for maximum impact.',
      },
      {
        id: 'product-combinations',
        icon: 'Tag',
        title: 'Product combinations',
        description: 'Test Weekly, 6 months, Annual, Monthly and other types of subscription along with prices to get the best result.',
        details: 'Find the optimal price points and duration combinations. Test introductory offers, family plans, and bundled products. Our ML suggests winning combinations based on your user data.',
      },
    ],
  },

  cta: {
    badge: 'Ready to grow?',
    headline: 'Start building better paywalls today',
    description: 'Join thousands of mobile apps using Adapty to increase their revenue.',
    primaryCta: 'Start free trial',
    secondaryCta: 'Book a demo',
  },

  enterpriseStats: [
    { value: '240M', label: 'subscription events / month' },
    { value: '1.5B', label: 'users' },
    { value: '2.1M', label: 'subscribers / month' },
    { value: '4B', label: 'API calls / month' },
  ],

  relatedPages: [
    { title: 'A/B testing', href: '/paywall-ab-testing', description: 'Test paywall variants to find what converts best' },
    { title: 'Localization', href: '/paywall-localization', description: 'Localize paywalls for global audiences' },
    { title: 'Targeting', href: '/paywall-targeting', description: 'Show the right paywall to the right users' },
    { title: 'Adapty SDK', href: '/sdk', description: 'Native SDKs for iOS, Android, and more' },
  ],

  templateGallery: {
    headline: 'Start with a template or from scratch',
    description: 'Pick one of our pre-made industry-tested templates or start from a blank page.',
    templates: [
      '/assets/paywall-templates/template-1.webp',
      '/assets/paywall-templates/template-2.webp',
      '/assets/paywall-templates/template-3.webp',
      '/assets/paywall-templates/template-4.webp',
      '/assets/paywall-templates/template-5.webp',
    ],
  },
}

export const PAYWALL_AB_TESTING_CONTENT = {
  hero: {
    badge: 'A/B Testing',
    headline: 'A/B test paywalls without coding',
    description: 'Test subscription pricing, durations, promotional offers, number of offers, layouts — all without coding. Use UI builder for changing paywall UI remotely.',
    primaryCta: 'Start for free',
    secondaryCta: 'Book a demo',
  },

  features: {
    headline: 'Powerful A/B testing features',
    description: 'Everything you need to optimize your app revenue through experimentation.',
    items: [
      {
        id: 'machine-learning',
        icon: 'BrainCircuit',
        title: 'Powered by machine learning',
        description: 'Adapty uses advanced ML models to predict test outcomes and automatically identify winning variants faster.',
      },
      {
        id: 'control',
        icon: 'ToggleRight',
        title: 'Start and stop test at any time',
        description: 'Full control over your experiments. Run tests as long as needed and stop them instantly when you have a winner.',
      },
      {
        id: 'segments',
        icon: 'Users',
        title: 'Target specific segments',
        description: 'Run experiments for specific audiences based on country, device, or custom user attributes.',
      },
    ],
  },

  cases: [
    {
      company: 'Welmi',
      result: '3x growth in MRR',
      description: 'Steady growth with Adapty UA',
      href: 'https://adapty.io/case-studies/welmi/',
    },
    {
      company: 'Productivity App',
      result: '+50% in total revenue',
      description: "How pricing tests unlocked app's potential",
      href: 'https://adapty.io/case-studies/productivity-app-and-autopilot/',
    },
    {
      company: 'Text on Pic',
      result: 'Over 30% MRR growth',
      description: 'How to boost revenue with the right experiments',
      href: 'https://adapty.io/case-studies/photo-editing-app-and-autopilot/',
    },
  ],

  cta: {
    badge: 'Ready to optimize?',
    headline: 'Get started today',
    description: 'Join thousands of mobile apps using Adapty to increase their revenue.',
    primaryCta: 'Start for free',
    secondaryCta: 'Book a demo',
  },
}
