/**
 * Centralized menu content for all navigation dropdowns
 * Adapted from adapty.io with content parity
 */

// ============================================================================
// PRODUCT MENU
// ============================================================================

export interface ProductSidebarLink {
  title: string
  href: string
  secondary?: boolean
}

export interface ProductItem {
  title: string
  href: string
  icon: string
  badge?: 'new' | 'beta'
}

export interface ProductColumn {
  title: string
  items: ProductItem[]
}

export const PRODUCT_SIDEBAR_LINKS: ProductSidebarLink[] = [
  { title: 'Product', href: 'https://adapty.io/product/' },
  { title: 'Solution', href: 'https://adapty.io/solutions/' },
  { title: 'Adapty SDK', href: 'https://adapty.io/docs/sdk/' },
  { title: 'Integrations', href: 'https://adapty.io/integrations/' },
  { title: 'Why Adapty?', href: 'https://adapty.io/why-adapty/', secondary: true },
  { title: 'Product changelog', href: 'https://adapty.io/changelog/', secondary: true },
  { title: 'System status', href: 'https://status.adapty.io/', secondary: true },
]

export const PRODUCT_COLUMNS: ProductColumn[] = [
  {
    title: 'TECH',
    items: [
      {
        title: 'Subscriptions SDK',
        href: 'https://adapty.io/sdk/',
        icon: '/images/menu-icons/icon-20x20-sdk.svg',
      },
      {
        title: 'Subscribers sync',
        href: 'https://adapty.io/subscription-sync/',
        icon: '/images/menu-icons/icon-24x24-2n.svg',
      },
      {
        title: 'Fallback paywalls',
        href: 'https://adapty.io/fallback-paywalls/',
        icon: '/images/menu-icons/icon-24x24-3n.svg',
      },
      {
        title: 'Refund saver',
        href: 'https://adapty.io/refund-saver/',
        icon: '/images/menu-icons/icon-20x20-currency-exchange.svg',
      },
    ],
  },
  {
    title: 'PAYWALLS',
    items: [
      {
        title: 'Paywall builder',
        href: 'https://adapty.io/paywall-builder/',
        icon: '/images/menu-icons/icon-24x24-1n.svg',
      },
      {
        title: 'Onboarding builder',
        href: 'https://adapty.io/onboarding-builder/',
        icon: '/images/menu-icons/icon-mobile-menu-dp24w4g0.svg',
      },
      {
        title: 'AI generator',
        href: 'https://adapty.io/ai-paywall-generator/',
        icon: '/images/menu-icons/icon-20x20-neurology.svg',
      },
      {
        title: 'A/B testing',
        href: 'https://adapty.io/paywall-ab-testing/',
        icon: '/images/menu-icons/icon-20x20-bug-report.svg',
      },
      {
        title: 'Autopilot',
        href: 'https://adapty.io/autopilot/',
        icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg',
        badge: 'new',
      },
      {
        title: 'Targeting',
        href: 'https://adapty.io/paywall-targeting/',
        icon: '/images/menu-icons/icon-24x24-9n.svg',
      },
      {
        title: 'Localizations',
        href: 'https://adapty.io/paywall-localization/',
        icon: '/images/menu-icons/icon-24x24-10n.svg',
      },
      {
        title: 'Remote config',
        href: 'https://adapty.io/remote-config/',
        icon: '/images/menu-icons/icon-24x24-11n.svg',
      },
    ],
  },
  {
    title: 'ANALYTICS',
    items: [
      {
        title: 'Revenue analytics',
        href: 'https://adapty.io/revenue-analytics/',
        icon: '/images/menu-icons/icon-24x24-4n.svg',
      },
      {
        title: 'LTV analytics',
        href: 'https://adapty.io/ltv-analytics/',
        icon: '/images/menu-icons/icon-24x24-5n.svg',
      },
      {
        title: 'AI LTV predictions',
        href: 'https://adapty.io/predictive-analytics/',
        icon: '/images/menu-icons/icon-24x24-12n.svg',
      },
      {
        title: 'LTV prediction model',
        href: 'https://adapty.io/ltv-prediction-model/',
        icon: '/images/menu-icons/icon-24x24-21n.svg',
      },
      {
        title: 'Apple ads manager',
        href: 'https://adapty.io/apple-ads-manager/',
        icon: '/images/menu-icons/icon-finance-blue-20dp-300w.svg',
      },
    ],
  },
]

// ============================================================================
// CASES MENU
// ============================================================================

export interface CaseStudy {
  name: string
  description: string
  metric?: string // e.g., "+50% revenue"
  icon: string
  href: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'Productivity app',
    description: '+50% revenue with Adapty Autopilot',
    metric: '+50%',
    icon: '/images/case-studies/productivity-app.webp',
    href: 'https://adapty.io/clients/productivity-app/',
  },
  {
    name: 'Text on Pic',
    description: 'Reignited growth with Autopilot',
    icon: '/images/case-studies/text-on-pic.webp',
    href: 'https://adapty.io/clients/text-on-pic/',
  },
  {
    name: 'Trip planning',
    description: 'Doubled revenue per user',
    metric: '2x',
    icon: '/images/case-studies/trip-planning.webp',
    href: 'https://adapty.io/clients/trip-planning/',
  },
  {
    name: 'Going Merry',
    description: '5x revenue growth using Paywall Builder',
    metric: '5x',
    icon: '/images/case-studies/going-merry.webp',
    href: 'https://adapty.io/clients/going-merry/',
  },
  {
    name: 'Shmoody',
    description: 'Grew from $0 to $2M ARR with Adapty',
    metric: '$2M ARR',
    icon: '/images/case-studies/shmoody.webp',
    href: 'https://adapty.io/clients/shmoody/',
  },
  {
    name: 'Lively',
    description: 'Saved 82% of potentially lost revenue',
    metric: '82%',
    icon: '/images/case-studies/lively.png',
    href: 'https://adapty.io/clients/lively/',
  },
  {
    name: 'Glam AI',
    description: 'Tripled revenue, same installs',
    metric: '3x',
    icon: '/images/case-studies/glam-ai.webp',
    href: 'https://adapty.io/clients/glam-ai/',
  },
  {
    name: 'Pepapp',
    description: 'How to make Adapty free',
    icon: '/images/case-studies/pepapp.webp',
    href: 'https://adapty.io/clients/pepapp/',
  },
  {
    name: 'Fotorama',
    description: 'How to decrease the refund rate with Adapty',
    icon: '/images/case-studies/fotorama.webp',
    href: 'https://adapty.io/clients/fotorama/',
  },
  {
    name: 'Wave',
    description: 'From $0 to $4M ARR in 8 months',
    metric: '$4M ARR',
    icon: '/images/case-studies/wave.png',
    href: 'https://adapty.io/clients/wave/',
  },
  {
    name: 'Impala',
    description: 'Migrated to Adapty from a competitor',
    icon: '/logos/impala.svg',
    href: 'https://adapty.io/clients/impala-studios/',
  },
]

// ============================================================================
// RESOURCES MENU
// ============================================================================

export interface ResourceItem {
  title: string
  href: string
  icon: string
  badge?: 'new' | 'weekly'
}

export interface ResourceSection {
  title: string
  items: ResourceItem[]
}

export const RESOURCES: Record<string, ResourceSection> = {
  LEARN: {
    title: 'LEARN',
    items: [
      {
        title: 'Blog',
        href: 'https://adapty.io/blog/',
        icon: '/images/menu-icons/icon-24x24-newsletter.svg',
      },
      {
        title: 'Podcasts',
        href: 'https://adapty.io/podcasts/',
        icon: '/images/menu-icons/icon-24x24-23n.svg',
      },
      {
        title: 'Glossary',
        href: 'https://adapty.io/glossary/',
        icon: '/images/menu-icons/icon-24x24-difference.svg',
      },
    ],
  },
  CONNECT: {
    title: 'CONNECT',
    items: [
      {
        title: 'Community',
        href: 'https://adapty.io/community/',
        icon: '/images/menu-icons/icon-20x20-bug-report.svg',
      },
      {
        title: 'Webinars',
        href: 'https://adapty.io/webinars/',
        icon: '/images/menu-icons/icon-20x20-neurology.svg',
      },
      {
        title: 'Events',
        href: 'https://adapty.io/events/',
        icon: '/images/menu-icons/icon-24x24-23n.svg',
      },
      {
        title: 'Careers',
        href: 'https://adapty.io/careers/',
        icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg',
      },
    ],
  },
  DISCOVER: {
    title: 'DISCOVER',
    items: [
      {
        title: 'Paywall newsletter',
        href: 'https://adapty.io/paywall-newsletter/',
        icon: '/images/menu-icons/icon-24x24-newsletter.svg',
        badge: 'weekly',
      },
      {
        title: 'Apple receipt validation',
        href: 'https://adapty.io/apple-receipt-validation/',
        icon: '/images/menu-icons/icon-20x20-receipt.svg',
      },
      {
        title: 'Apple fiscal calendar',
        href: 'https://adapty.io/apple-fiscal-calendar/',
        icon: '/images/menu-icons/icon-24x24-newsletter.svg',
      },
      {
        title: 'Apple ads manager',
        href: 'https://adapty.io/apple-ads-manager/',
        icon: '/images/menu-icons/icon-finance-blue-20dp-300w.svg',
      },
      {
        title: 'LTV prediction model',
        href: 'https://adapty.io/ltv-prediction-model/',
        icon: '/images/menu-icons/icon-24x24-21n.svg',
      },
      {
        title: 'Subscription calculator',
        href: 'https://adapty.io/subscription-calculator/',
        icon: '/images/menu-icons/icon-24x24-4n.svg',
      },
      {
        title: 'Refund calculator',
        href: 'https://adapty.io/refund-calculator/',
        icon: '/images/menu-icons/icon-20x20-currency-exchange.svg',
      },
      {
        title: 'Paywall library',
        href: 'https://adapty.io/paywall-library/',
        icon: '/images/menu-icons/icon-24x24-1n.svg',
      },
      {
        title: 'Comparing alternatives',
        href: 'https://adapty.io/alternative-comparison/',
        icon: '/images/menu-icons/icon-24x24-difference.svg',
      },
    ],
  },
  EBOOKS: {
    title: 'EBOOKS',
    items: [
      {
        title: 'Grow your app from $10K to $100K MRR',
        href: 'https://adapty.io/ebooks/10k-100k-mrr/',
        icon: '/images/menu-icons/icon-24x24-doc.svg',
      },
      {
        title: 'Turn your weekend app into a $1K/mo business',
        href: 'https://adapty.io/ebooks/weekend-app-1k-mo/',
        icon: '/images/menu-icons/icon-24x24-doc.svg',
      },
      {
        title: 'Scale your app from $1K to $10K MRR',
        href: 'https://adapty.io/ebooks/1k-10k-mrr/',
        icon: '/images/menu-icons/icon-24x24-doc.svg',
      },
      {
        title: 'A refund guide to saving your app revenue',
        href: 'https://adapty.io/ebooks/refund-guide/',
        icon: '/images/menu-icons/icon-24x24-doc.svg',
      },
    ],
  },
  RESEARCH: {
    title: 'RESEARCH',
    items: [
      {
        title: 'Onboarding A/B test ideas checklist',
        href: 'https://adapty.io/ebooks/onboarding-ab-test-ideas/',
        icon: '/images/menu-icons/icon-mobile-menu-dp24w4g0.svg',
        badge: 'new',
      },
      {
        title: 'State of in-app subscriptions 2025',
        href: 'https://adapty.io/ebooks/state-of-in-app-subscriptions-2024/',
        icon: '/images/menu-icons/icon-24x24-doc.svg',
      },
      {
        title: 'Adapty pricing index',
        href: 'https://adapty.io/ebooks/pricing-index/',
        icon: '/images/menu-icons/icon-24x24-10n.svg',
      },
    ],
  },
}

// ============================================================================
// DOCS MENU
// ============================================================================

export interface DocsSidebarLink {
  title: string
  href: string
}

export interface DocsItem {
  title: string
  href: string
  icon: string
}

export interface DocsSection {
  title: string
  items: DocsItem[]
}

export const DOCS_SIDEBAR_LINKS: DocsSidebarLink[] = [
  { title: 'Quick start', href: 'https://adapty.io/docs/quickstart/' },
  { title: 'Migrate to Adapty', href: 'https://adapty.io/docs/migration/' },
  { title: 'Platform status page', href: 'https://status.adapty.io/' },
  { title: 'Support Center', href: 'https://adapty.io/support/' },
]

export const DOCS_SECTIONS: Record<string, DocsSection> = {
  mobile: {
    title: 'MOBILE SDK',
    items: [
      {
        title: 'iOS',
        href: 'https://adapty.io/docs/ios-installation/',
        icon: '/images/menu-icons/icon-ios-64x64-1.svg',
      },
      {
        title: 'Android',
        href: 'https://adapty.io/docs/android-installation/',
        icon: '/images/menu-icons/icon-android-64x64-1.svg',
      },
      {
        title: 'React Native',
        href: 'https://adapty.io/docs/react-native-installation/',
        icon: '/images/menu-icons/icon-react-native-64x64-1.svg',
      },
      {
        title: 'Unity',
        href: 'https://adapty.io/docs/unity-installation/',
        icon: '/images/menu-icons/icon-unity-64x64-1.svg',
      },
      {
        title: 'Flutter',
        href: 'https://adapty.io/docs/flutter-installation/',
        icon: '/images/menu-icons/icon-flutter-64x64-1.svg',
      },
      {
        title: 'FlutterFlow',
        href: 'https://adapty.io/docs/flutterflow-installation/',
        icon: '/images/menu-icons/icon-flutterflow-64x64-1.svg',
      },
      {
        title: 'Capacitor',
        href: 'https://adapty.io/docs/capacitor-installation/',
        icon: '/images/menu-icons/capacitor-logo.svg',
      },
      {
        title: 'Kotlin Multiplatform',
        href: 'https://adapty.io/docs/kmp-installation/',
        icon: '/images/menu-icons/kmp-logo.svg',
      },
    ],
  },
  web: {
    title: 'WEB PAYMENTS',
    items: [
      {
        title: 'Stripe',
        href: 'https://adapty.io/docs/stripe/',
        icon: '/images/menu-icons/icon-stripe-64x64-1.svg',
      },
    ],
  },
  api: {
    title: 'WEB API',
    items: [
      {
        title: 'Server-side API',
        href: 'https://adapty.io/docs/api/',
        icon: '/images/menu-icons/web-api.svg',
      },
    ],
  },
}

// ============================================================================
// NAVBAR LINKS
// ============================================================================

export interface NavLink {
  title: string
  href: string
  highlight?: boolean // For special styling (e.g., web2app)
}

export const NAVBAR_LINKS: NavLink[] = [
  { title: 'Blog', href: '/blog' },
  { title: 'Pricing', href: 'https://adapty.io/pricing/' },
  { title: 'web2app', href: 'https://adapty.io/web2app/', highlight: true },
]
