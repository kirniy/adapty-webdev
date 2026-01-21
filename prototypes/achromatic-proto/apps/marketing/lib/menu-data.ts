/**
 * Centralized Menu Data for Achromatic Proto
 *
 * This file contains all menu content for the mega menus, compact dropdowns,
 * and mobile menu. Content is adapted from kirills-testversion-adapty-pt2 to
 * ensure content parity with adapty.io production site.
 */

// ============================================================================
// TYPES
// ============================================================================

export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: 'new' | 'weekly';
  external?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type ProductTab = {
  label: string;
  items: MenuItem[];
};

export type CaseStudy = {
  name: string;
  metric: string;
  description: string;
  icon: string;
  href: string;
};

export type Language = {
  code: string;
  label: string;
  flag: string;
  href: string;
};

export type MobileMenuItem = {
  label: string;
  href?: string;
  hasSubmenu?: boolean;
  dataKey?: string;
  highlight?: boolean;
};

// ============================================================================
// PRODUCT MENU DATA
// ============================================================================

// Sidebar items with associated panel keys
export const PRODUCT_SIDEBAR_ITEMS = [
  { key: 'product', title: 'Product', href: 'https://adapty.io/product/' },
  { key: 'solution', title: 'Solution', href: 'https://adapty.io/solutions/' },
  { key: 'sdk', title: 'Adapty SDK', href: '/sdk' },
  { key: 'integrations', title: 'Integrations', href: '/integrations' },
] as const;

export type ProductSidebarKey = typeof PRODUCT_SIDEBAR_ITEMS[number]['key'];

// Solution panel content (by role)
export const SOLUTION_ITEMS: MenuItem[] = [
  { title: 'For Marketers', href: '/for-marketers', icon: '/images/menu-icons/icon-24x24-newsletter.svg', description: 'Launch paywalls without coding' },
  { title: 'For Developers', href: '/for-developers', icon: '/images/menu-icons/icon-20x20-sdk.svg', description: 'Focus on code, not infrastructure' },
  { title: 'For App Owners', href: '/for-app-owners', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Maximize subscription revenue' },
  { title: 'For Indie Developers', href: '/for-indie', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg', description: 'Start free, scale as you grow' },
  { title: 'For Enterprises', href: 'https://adapty.io/enterprise/', icon: '/images/menu-icons/icon-24x24-21n.svg', description: 'Scale with enterprise features', external: true },
];

// Compare panel content (competitor comparisons)
export const COMPARE_ITEMS: MenuItem[] = [
  { title: 'Why Adapty', href: '/why-adapty', icon: '/images/menu-icons/icon-24x24-difference.svg', description: 'See how we compare' },
  { title: 'vs RevenueCat', href: '/compare/revenuecat', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Feature comparison' },
  { title: 'vs Qonversion', href: '/compare/qonversion', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Feature comparison' },
  { title: 'vs Superwall', href: '/compare/superwall', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Feature comparison' },
  { title: 'vs Purchasely', href: '/compare/purchasely', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Feature comparison' },
  { title: 'vs In-house', href: '/compare/in-house-development', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Build vs buy analysis' },
  { title: 'All Comparisons', href: '/compare', icon: '/images/menu-icons/icon-24x24-difference.svg', description: 'View all comparisons' },
];

// SDK panel content
export const SDK_ITEMS: MenuItem[] = [
  { title: 'iOS SDK', href: 'https://adapty.io/docs/ios-installation/', icon: '/images/menu-icons/icon-ios-64x64-1.svg', description: 'Swift & SwiftUI support' },
  { title: 'Android SDK', href: 'https://adapty.io/docs/android-installation/', icon: '/images/menu-icons/icon-android-64x64-1.svg', description: 'Kotlin & Java support' },
  { title: 'React Native', href: 'https://adapty.io/docs/react-native-installation/', icon: '/images/menu-icons/icon-react-native-64x64-1.svg', description: 'Cross-platform support' },
  { title: 'Flutter', href: 'https://adapty.io/docs/flutter-installation/', icon: '/images/menu-icons/icon-flutter-64x64-1.svg', description: 'Dart plugin' },
  { title: 'Unity', href: 'https://adapty.io/docs/unity-installation/', icon: '/images/menu-icons/icon-unity-64x64-1.svg', description: 'Game development' },
];

// Integrations panel content (using available menu icons)
export const INTEGRATIONS_ITEMS: MenuItem[] = [
  { title: 'Apple Search Ads', href: 'https://adapty.io/integrations/apple-search-ads/', icon: '/images/menu-icons/icon-finance-blue-20dp-300w.svg', description: 'Attribution & optimization' },
  { title: 'Amplitude', href: 'https://adapty.io/integrations/amplitude/', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Product analytics' },
  { title: 'Mixpanel', href: 'https://adapty.io/integrations/mixpanel/', icon: '/images/menu-icons/icon-24x24-5n.svg', description: 'User analytics' },
  { title: 'Adjust', href: 'https://adapty.io/integrations/adjust/', icon: '/images/menu-icons/icon-24x24-12n.svg', description: 'Mobile attribution' },
  { title: 'AppsFlyer', href: 'https://adapty.io/integrations/appsflyer/', icon: '/images/menu-icons/icon-24x24-21n.svg', description: 'Marketing analytics' },
  { title: 'Webhook', href: 'https://adapty.io/integrations/webhook/', icon: '/images/menu-icons/icon-24x24-11n.svg', description: 'Custom integrations' },
];

// Legacy export for backwards compatibility
export const PRODUCT_SIDEBAR: MenuItem[] = PRODUCT_SIDEBAR_ITEMS.map(item => ({
  title: item.title,
  href: item.href,
}));

export const PRODUCT_FOOTER: MenuItem[] = [
  { title: 'Why Adapty?', href: '/why-adapty' },
  { title: 'Product changelog', href: 'https://adapty.io/changelog/' },
  { title: 'System status', href: 'https://status.adapty.io/', external: true },
];

export const PRODUCT_TABS: Record<'tech' | 'paywalls' | 'analytics', ProductTab> = {
  tech: {
    label: 'Tech',
    items: [
      { title: 'Subscriptions SDK', href: '/sdk', icon: '/images/menu-icons/icon-20x20-sdk.svg', description: 'Integrate in-app purchases easily' },
      { title: 'Subscribers sync', href: 'https://adapty.io/subscription-sync/', icon: '/images/menu-icons/icon-24x24-2n.svg', description: 'Sync data across all platforms', external: true },
      { title: 'Fallback paywalls', href: '/fallback-paywalls', icon: '/images/menu-icons/icon-24x24-3n.svg', description: 'Never lose a conversion' },
      { title: 'Refund saver', href: '/refund-saver', icon: '/images/menu-icons/icon-20x20-currency-exchange.svg', description: 'Reduce refunds automatically' },
    ]
  },
  paywalls: {
    label: 'Paywalls',
    items: [
      { title: 'Paywall builder', href: '/paywall-builder', icon: '/images/menu-icons/icon-24x24-1n.svg', description: 'No-code visual paywall editor' },
      { title: 'Onboarding builder', href: '/onboarding-builder', icon: '/images/menu-icons/icon-mobile-menu-dp24w4g0.svg', description: 'Create converting onboardings' },
      { title: 'AI generator', href: '/ai-paywall-generator', icon: '/images/menu-icons/icon-20x20-neurology.svg', description: 'Generate paywalls with AI', badge: 'new' },
      { title: 'A/B testing', href: '/paywall-ab-testing', icon: '/images/menu-icons/icon-20x20-bug-report.svg', description: 'Test and optimize paywalls' },
      { title: 'Autopilot', href: '/autopilot', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg', description: 'AI-powered optimization', badge: 'new' },
      { title: 'Targeting', href: '/paywall-targeting', icon: '/images/menu-icons/icon-24x24-9n.svg', description: 'Show right paywall to right user' },
      { title: 'Localizations', href: '/paywall-localization', icon: '/images/menu-icons/icon-24x24-10n.svg', description: 'Localize paywalls for any market' },
      { title: 'Remote config', href: '/remote-config', icon: '/images/menu-icons/icon-24x24-11n.svg', description: 'Update app behavior remotely' },
    ]
  },
  analytics: {
    label: 'Analytics',
    items: [
      { title: 'Revenue analytics', href: '/revenue-growth', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Track MRR, ARR, and revenue' },
      { title: 'LTV analytics', href: '/ltv-analytics', icon: '/images/menu-icons/icon-24x24-5n.svg', description: 'Understand user lifetime value' },
      { title: 'AI LTV predictions', href: '/predictive-analytics', icon: '/images/menu-icons/icon-24x24-12n.svg', description: 'Predict future revenue' },
      { title: 'LTV prediction model', href: 'https://adapty.io/ltv-prediction-model/', icon: '/images/menu-icons/icon-24x24-21n.svg', description: 'Custom prediction models', external: true },
      { title: 'Apple ads manager', href: 'https://adapty.io/apple-ads-manager/', icon: '/images/menu-icons/icon-finance-blue-20dp-300w.svg', description: 'Connect ads to subscriptions', external: true },
    ]
  }
};

// ============================================================================
// CASES MENU DATA (11 case studies)
// ============================================================================

export const CASES_MENU: CaseStudy[] = [
  { name: 'Productivity app', metric: '+50%', description: 'revenue with Adapty Autopilot', icon: '/images/case-studies/productivity-app.webp', href: 'https://adapty.io/clients/productivity-app/' },
  { name: 'Text on Pic', metric: '2x', description: 'reignited growth with Autopilot', icon: '/images/case-studies/text-on-pic.webp', href: 'https://adapty.io/clients/text-on-pic/' },
  { name: 'Trip planning', metric: '2x', description: 'doubled revenue per user', icon: '/images/case-studies/trip-planning.webp', href: 'https://adapty.io/clients/trip-planning/' },
  { name: 'Going Merry', metric: '5x', description: 'revenue growth using Paywall Builder', icon: '/images/case-studies/going-merry.webp', href: 'https://adapty.io/clients/going-merry/' },
  { name: 'Shmoody', metric: '$2M', description: 'grew from $0 to $2M ARR with Adapty', icon: '/images/case-studies/shmoody.webp', href: 'https://adapty.io/clients/shmoody/' },
  { name: 'Lively', metric: '82%', description: 'saved 82% of potentially lost revenue', icon: '/images/case-studies/lively.png', href: 'https://adapty.io/clients/lively/' },
  { name: 'Glam AI', metric: '3x', description: 'tripled revenue, same installs', icon: '/images/case-studies/glam-ai.webp', href: 'https://adapty.io/clients/glam-ai/' },
  { name: 'Pepapp', metric: 'Free', description: 'how to make Adapty free', icon: '/images/case-studies/pepapp.webp', href: 'https://adapty.io/clients/pepapp/' },
  { name: 'Fotorama', metric: '-40%', description: 'decreased refund rate with Adapty', icon: '/images/case-studies/fotorama.webp', href: 'https://adapty.io/clients/fotorama/' },
  { name: 'Wave', metric: '$4M', description: 'from $0 to $4M ARR in 8 months', icon: '/images/case-studies/wave.png', href: 'https://adapty.io/clients/wave/' },
  { name: 'Impala', metric: 'Migrated', description: 'migrated to Adapty from a competitor', icon: '/logos/impala.svg', href: 'https://adapty.io/clients/impala-studios/' },
];

// ============================================================================
// RESOURCES MENU DATA (5 sections, ~23 items)
// ============================================================================

export const RESOURCES_SECTIONS: MenuSection[] = [
  {
    title: 'Learn',
    items: [
      { title: 'Blog', href: 'https://adapty.io/blog/', icon: '/images/menu-icons/icon-24x24-newsletter.svg' },
      { title: 'Podcasts', href: 'https://adapty.io/podcasts/', icon: '/images/menu-icons/icon-24x24-23n.svg' },
      { title: 'Glossary', href: 'https://adapty.io/glossary/', icon: '/images/menu-icons/icon-24x24-difference.svg' },
    ]
  },
  {
    title: 'Connect',
    items: [
      { title: 'Community', href: 'https://adapty.io/community/', icon: '/images/menu-icons/icon-20x20-bug-report.svg' },
      { title: 'Webinars', href: 'https://adapty.io/webinars/', icon: '/images/menu-icons/icon-20x20-neurology.svg' },
      { title: 'Events', href: 'https://adapty.io/events/', icon: '/images/menu-icons/icon-24x24-23n.svg' },
      { title: 'Careers', href: '/careers', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg' },
      { title: 'Contact', href: '/contact', icon: '/images/menu-icons/icon-24x24-newsletter.svg' },
      { title: 'Schedule Demo', href: '/schedule-demo', icon: '/images/menu-icons/icon-mobile-menu-dp24w4g0.svg' },
    ]
  },
  {
    title: 'Discover',
    items: [
      { title: 'Paywall newsletter', href: 'https://adapty.io/paywall-newsletter/', icon: '/images/menu-icons/icon-24x24-newsletter.svg', badge: 'weekly' },
      { title: 'Apple receipt validation', href: 'https://adapty.io/apple-receipt-validation/', icon: '/images/menu-icons/icon-20x20-receipt.svg' },
      { title: 'Apple fiscal calendar', href: '/apple-fiscal-calendar', icon: '/images/menu-icons/icon-24x24-newsletter.svg' },
      { title: 'Apple ads manager', href: 'https://adapty.io/apple-ads-manager/', icon: '/images/menu-icons/icon-finance-blue-20dp-300w.svg' },
      { title: 'LTV prediction model', href: 'https://adapty.io/ltv-prediction-model/', icon: '/images/menu-icons/icon-24x24-21n.svg' },
      { title: 'Subscription calculator', href: 'https://adapty.io/subscription-calculator/', icon: '/images/menu-icons/icon-24x24-4n.svg' },
      { title: 'Refund calculator', href: 'https://adapty.io/refund-calculator/', icon: '/images/menu-icons/icon-20x20-currency-exchange.svg' },
      { title: 'Paywall library', href: '/paywall-library', icon: '/images/menu-icons/icon-24x24-1n.svg' },
      { title: 'Comparing alternatives', href: 'https://adapty.io/alternative-comparison/', icon: '/images/menu-icons/icon-24x24-difference.svg' },
    ]
  },
  {
    title: 'Ebooks',
    items: [
      { title: 'Grow your app from $10K to $100K MRR', href: 'https://adapty.io/ebooks/10k-100k-mrr/', icon: '/images/menu-icons/icon-24x24-doc.svg' },
      { title: 'Turn your weekend app into a $1K/mo business', href: 'https://adapty.io/ebooks/weekend-app-1k-mo/', icon: '/images/menu-icons/icon-24x24-doc.svg' },
      { title: 'Scale your app from $1K to $10K MRR', href: 'https://adapty.io/ebooks/1k-10k-mrr/', icon: '/images/menu-icons/icon-24x24-doc.svg' },
      { title: 'A refund guide to saving your app revenue', href: 'https://adapty.io/ebooks/refund-guide/', icon: '/images/menu-icons/icon-24x24-doc.svg' },
    ]
  },
  {
    title: 'Research',
    items: [
      { title: 'State of In-App Subscriptions', href: '/state-of-in-app-subscriptions', icon: '/images/menu-icons/icon-24x24-doc.svg', badge: 'new' },
      { title: 'Onboarding A/B test ideas checklist', href: 'https://adapty.io/ebooks/onboarding-ab-test-ideas/', icon: '/images/menu-icons/icon-mobile-menu-dp24w4g0.svg' },
      { title: 'Adapty pricing index', href: 'https://adapty.io/ebooks/pricing-index/', icon: '/images/menu-icons/icon-24x24-10n.svg' },
    ]
  }
];

// ============================================================================
// DOCS MENU DATA
// ============================================================================

export const DOCS_SIDEBAR: MenuItem[] = [
  { title: 'Quick start', href: 'https://adapty.io/docs/quickstart/' },
  { title: 'Migrate to Adapty', href: 'https://adapty.io/docs/migration/' },
  { title: 'Platform status page', href: 'https://status.adapty.io/', external: true },
  { title: 'Support Center', href: 'https://adapty.io/support/' },
];

export const DOCS_MOBILE_SDKS: MenuItem[] = [
  { title: 'iOS', href: 'https://adapty.io/docs/ios-installation/', icon: '/images/menu-icons/icon-ios-64x64-1.svg' },
  { title: 'Android', href: 'https://adapty.io/docs/android-installation/', icon: '/images/menu-icons/icon-android-64x64-1.svg' },
  { title: 'React Native', href: 'https://adapty.io/docs/react-native-installation/', icon: '/images/menu-icons/icon-react-native-64x64-1.svg' },
  { title: 'Unity', href: 'https://adapty.io/docs/unity-installation/', icon: '/images/menu-icons/icon-unity-64x64-1.svg' },
  { title: 'Flutter', href: 'https://adapty.io/docs/flutter-installation/', icon: '/images/menu-icons/icon-flutter-64x64-1.svg' },
  { title: 'FlutterFlow', href: 'https://adapty.io/docs/flutterflow-installation/', icon: '/images/menu-icons/icon-flutterflow-64x64-1.svg' },
  { title: 'Capacitor', href: 'https://adapty.io/docs/capacitor-installation/', icon: '/images/menu-icons/capacitor-logo.svg' },
  { title: 'Kotlin Multiplatform', href: 'https://adapty.io/docs/kmp-installation/', icon: '/images/menu-icons/kmp-logo.svg' },
];

export const DOCS_WEB_PAYMENTS: MenuItem[] = [
  { title: 'Stripe', href: 'https://adapty.io/docs/stripe/', icon: '/images/menu-icons/icon-stripe-64x64-1.svg' },
];

export const DOCS_WEB_API: MenuItem[] = [
  { title: 'Server-side API', href: 'https://adapty.io/docs/api/', icon: '/images/menu-icons/web-api.svg' },
];

// ============================================================================
// LANGUAGE DATA (12 languages)
// ============================================================================

export const LANGUAGES: Language[] = [
  { code: 'EN', label: 'English', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/en.svg', href: '/' },
  { code: 'TR', label: 'Turkce', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/tr.svg', href: '/tr/' },
  { code: 'DE', label: 'Deutsch', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/de.svg', href: '/de/' },
  { code: 'UA', label: 'Ukrainska', flag: 'https://adapty.io/assets/uploads/flags/ua.svg', href: '/ua/' },
  { code: 'PL', label: 'Polski', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/pl.svg', href: '/pl/' },
  { code: 'FR', label: 'Francais', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/fr.svg', href: '/fr/' },
  { code: 'RU', label: 'Russkiy', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/ru.svg', href: '/ru/' },
  { code: 'ES', label: 'Espanol', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/es.svg', href: '/es/' },
  { code: 'JA', label: 'Nihongo', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/ja.svg', href: '/ja/' },
  { code: 'KO', label: 'Hangugeo', flag: 'https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/ko.svg', href: '/ko/' },
  { code: 'ZH', label: 'Zhongwen', flag: 'https://adapty.io/assets/uploads/flags/flag-zh.svg', href: '/zh/' },
  { code: 'PT', label: 'Portugues', flag: 'https://adapty.io/assets/uploads/flags/flag-pt.svg', href: '/pt/' },
];

// ============================================================================
// MOBILE MENU DATA
// ============================================================================

export const MOBILE_MAIN_MENU: MobileMenuItem[] = [
  { label: 'Product', hasSubmenu: true },
  { label: 'Solutions', hasSubmenu: true, dataKey: 'Solutions' },
  { label: 'Resources', hasSubmenu: true },
  { label: 'Case Studies', hasSubmenu: true, dataKey: 'Cases' },
  { label: 'Docs', hasSubmenu: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', href: '/story' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Schedule Demo', href: '/schedule-demo' },
  { label: 'web2app', href: 'https://funnelfox.com/', highlight: true },
];

export type MobileSubmenuItem = {
  title: string;
  href: string;
  badge?: 'new' | 'weekly';
};

export type MobileSubmenuSection = {
  title: string;
  items: MobileSubmenuItem[];
};

export type MobileSubmenuConfig = {
  topLinks?: MobileSubmenuItem[];
  sections?: MobileSubmenuSection[];
};

export const MOBILE_SUBMENU_DATA: Record<string, MobileSubmenuConfig> = {
  Solutions: {
    sections: [
      {
        title: 'BY ROLE',
        items: [
          { title: 'For Marketers', href: '/for-marketers' },
          { title: 'For Developers', href: '/for-developers' },
          { title: 'For App Owners', href: '/for-app-owners' },
          { title: 'For Indie Developers', href: '/for-indie' },
          { title: 'For Enterprises', href: 'https://adapty.io/enterprise/' },
        ],
      },
      {
        title: 'COMPARE',
        items: [
          { title: 'Why Adapty', href: '/why-adapty' },
          { title: 'vs RevenueCat', href: '/compare/revenuecat' },
          { title: 'vs Qonversion', href: '/compare/qonversion' },
          { title: 'vs Superwall', href: '/compare/superwall' },
          { title: 'vs Purchasely', href: '/compare/purchasely' },
          { title: 'vs In-house Development', href: '/compare/in-house-development' },
          { title: 'All Comparisons', href: '/compare' },
        ],
      },
    ],
  },
  Product: {
    topLinks: [
      { title: 'Product', href: 'https://adapty.io/product/' },
      { title: 'Solution', href: 'https://adapty.io/solutions/' },
      { title: 'Adapty SDK', href: 'https://adapty.io/docs/sdk/' },
      { title: 'Integrations', href: '/integrations' },
      { title: 'Why Adapty?', href: '/why-adapty' },
      { title: 'Product changelog', href: 'https://adapty.io/changelog/' },
      { title: 'System status', href: 'https://status.adapty.io/' },
    ],
    sections: [
      {
        title: 'TECH',
        items: [
          { title: 'Subscriptions SDK', href: '/sdk' },
          { title: 'Subscribers sync', href: 'https://adapty.io/subscription-sync/' },
          { title: 'Fallback paywalls', href: '/fallback-paywalls' },
          { title: 'Refund saver', href: '/refund-saver' },
        ],
      },
      {
        title: 'PAYWALLS',
        items: [
          { title: 'Paywall builder', href: '/paywall-builder' },
          { title: 'Onboarding builder', href: '/onboarding-builder' },
          { title: 'AI generator', href: '/ai-paywall-generator' },
          { title: 'A/B testing', href: '/paywall-ab-testing' },
          { title: 'Autopilot', href: '/autopilot', badge: 'new' },
          { title: 'Targeting', href: '/paywall-targeting' },
          { title: 'Localizations', href: '/paywall-localization' },
          { title: 'Remote config', href: '/remote-config' },
        ],
      },
      {
        title: 'ANALYTICS',
        items: [
          { title: 'Revenue analytics', href: '/revenue-growth' },
          { title: 'LTV analytics', href: '/ltv-analytics' },
          { title: 'AI LTV and revenue predictions', href: '/predictive-analytics' },
          { title: 'LTV prediction model', href: 'https://adapty.io/ltv-prediction-model/' },
          { title: 'Apple ads manager', href: 'https://adapty.io/apple-ads-manager/' },
        ],
      },
    ],
  },
  Cases: {
    sections: [
      {
        title: 'CASE STUDIES',
        items: [
          { title: 'Productivity app', href: 'https://adapty.io/clients/productivity-app/' },
          { title: 'Text on Pic', href: 'https://adapty.io/clients/text-on-pic/' },
          { title: 'Trip planning', href: 'https://adapty.io/clients/trip-planning/' },
          { title: 'Going Merry', href: 'https://adapty.io/clients/going-merry/' },
          { title: 'Shmoody', href: 'https://adapty.io/clients/shmoody/' },
          { title: 'Lively', href: 'https://adapty.io/clients/lively/' },
          { title: 'Glam AI', href: 'https://adapty.io/clients/glam-ai/' },
          { title: 'Pepapp', href: 'https://adapty.io/clients/pepapp/' },
          { title: 'Fotorama', href: 'https://adapty.io/clients/fotorama/' },
          { title: 'Wave', href: 'https://adapty.io/clients/wave/' },
          { title: 'Impala', href: 'https://adapty.io/clients/impala-studios/' },
          { title: 'View all case studies', href: 'https://adapty.io/clients/' },
        ],
      },
    ],
  },
  Resources: {
    sections: [
      {
        title: 'LEARN',
        items: [
          { title: 'Blog', href: 'https://adapty.io/blog/' },
          { title: 'Podcasts', href: 'https://adapty.io/podcasts/' },
          { title: 'Glossary', href: 'https://adapty.io/glossary/' },
        ],
      },
      {
        title: 'CONNECT',
        items: [
          { title: 'Community', href: 'https://adapty.io/community/' },
          { title: 'Webinars', href: 'https://adapty.io/webinars/' },
          { title: 'Events', href: 'https://adapty.io/events/' },
          { title: 'Careers', href: '/careers' },
          { title: 'Contact', href: '/contact' },
          { title: 'Schedule Demo', href: '/schedule-demo' },
        ],
      },
      {
        title: 'DISCOVER',
        items: [
          { title: 'Paywall newsletter', href: 'https://adapty.io/paywall-newsletter/' },
          { title: 'Apple receipt validation', href: 'https://adapty.io/apple-receipt-validation/' },
          { title: 'Apple fiscal calendar', href: '/apple-fiscal-calendar' },
          { title: 'Apple ads manager', href: 'https://adapty.io/apple-ads-manager/' },
          { title: 'LTV prediction model', href: 'https://adapty.io/ltv-prediction-model/' },
          { title: 'Subscription calculator', href: 'https://adapty.io/subscription-calculator/' },
          { title: 'Refund calculator', href: 'https://adapty.io/refund-calculator/' },
          { title: 'Paywall library', href: '/paywall-library' },
          { title: 'Comparing alternatives', href: 'https://adapty.io/alternative-comparison/' },
        ],
      },
      {
        title: 'EBOOKS',
        items: [
          { title: 'Grow your app from $10K to $100K MRR', href: 'https://adapty.io/ebooks/10k-100k-mrr/' },
          { title: 'Turn your weekend app into a $1K/mo business', href: 'https://adapty.io/ebooks/weekend-app-1k-mo/' },
          { title: 'Scale your app from $1K to $10K MRR', href: 'https://adapty.io/ebooks/1k-10k-mrr/' },
          { title: 'A refund guide to saving your app revenue', href: 'https://adapty.io/ebooks/refund-guide/' },
        ],
      },
      {
        title: 'RESEARCH',
        items: [
          { title: 'State of In-App Subscriptions', href: '/state-of-in-app-subscriptions', badge: 'new' },
          { title: 'Onboarding A/B test ideas checklist', href: 'https://adapty.io/ebooks/onboarding-ab-test-ideas/' },
          { title: 'Adapty pricing index', href: 'https://adapty.io/ebooks/pricing-index/' },
        ],
      },
    ],
  },
  Docs: {
    topLinks: [
      { title: 'Quick start', href: 'https://adapty.io/docs/quickstart/' },
      { title: 'Migrate to Adapty', href: 'https://adapty.io/docs/migration/' },
      { title: 'Platform status page', href: 'https://status.adapty.io/' },
      { title: 'Support Center', href: 'https://adapty.io/support/' },
      { title: 'All docs', href: 'https://adapty.io/docs/' },
    ],
    sections: [
      {
        title: 'MOBILE SDK',
        items: [
          { title: 'iOS', href: 'https://adapty.io/docs/ios-installation/' },
          { title: 'Android', href: 'https://adapty.io/docs/android-installation/' },
          { title: 'React Native', href: 'https://adapty.io/docs/react-native-installation/' },
          { title: 'Unity', href: 'https://adapty.io/docs/unity-installation/' },
          { title: 'Flutter', href: 'https://adapty.io/docs/flutter-installation/' },
          { title: 'FlutterFlow', href: 'https://adapty.io/docs/flutterflow-installation/' },
          { title: 'Capacitor', href: 'https://adapty.io/docs/capacitor-installation/' },
          { title: 'Kotlin Multiplatform', href: 'https://adapty.io/docs/kmp-installation/' },
        ],
      },
      {
        title: 'WEB PAYMENTS',
        items: [
          { title: 'Stripe', href: 'https://adapty.io/docs/stripe/' },
        ],
      },
      {
        title: 'WEB API',
        items: [
          { title: 'Server-side API', href: 'https://adapty.io/docs/api/' },
        ],
      },
    ],
  },
};

// ============================================================================
// COMPACT DROPDOWN DATA (for pill/simple navbar)
// ============================================================================

// Enhanced compact links with icons for simple pill variant
export const COMPACT_PRODUCT_LINKS: MenuItem[] = [
  { title: 'Product Overview', href: 'https://adapty.io/product/', icon: '/images/menu-icons/icon-24x24-21n.svg', description: 'Complete feature overview', external: true },
  { title: 'Paywall Builder', href: '/paywall-builder', icon: '/images/menu-icons/icon-24x24-1n.svg', description: 'No-code paywall editor' },
  { title: 'A/B Testing', href: '/paywall-ab-testing', icon: '/images/menu-icons/icon-20x20-bug-report.svg', description: 'Optimize conversions' },
  { title: 'Analytics', href: '/revenue-growth', icon: '/images/menu-icons/icon-24x24-4n.svg', description: 'Revenue insights' },
  { title: 'Adapty SDK', href: '/sdk', icon: '/images/menu-icons/icon-20x20-sdk.svg', description: 'In-app purchases SDK' },
  { title: 'Integrations', href: '/integrations', icon: '/images/menu-icons/icon-24x24-11n.svg', description: 'Connect your stack' },
];

export const COMPACT_CASES_LINKS: MenuItem[] = [
  { title: 'Going Merry', href: 'https://adapty.io/clients/going-merry/', icon: '/images/case-studies/going-merry.webp', description: '5x revenue growth' },
  { title: 'Shmoody', href: 'https://adapty.io/clients/shmoody/', icon: '/images/case-studies/shmoody.webp', description: '$0 to $2M ARR' },
  { title: 'Glam AI', href: 'https://adapty.io/clients/glam-ai/', icon: '/images/case-studies/glam-ai.webp', description: '3x conversion rate' },
  { title: 'Fotorama', href: 'https://adapty.io/clients/fotorama/', icon: '/images/case-studies/fotorama.webp', description: '-40% refund rate' },
];

export const COMPACT_RESOURCES_LINKS: MenuItem[] = [
  { title: 'Blog', href: 'https://adapty.io/blog/', icon: '/images/menu-icons/icon-24x24-newsletter.svg', description: 'Latest articles', external: true },
  { title: 'Community', href: 'https://adapty.io/community/', icon: '/images/menu-icons/icon-20x20-bug-report.svg', description: 'Join the discussion', external: true },
  { title: 'Webinars', href: 'https://adapty.io/webinars/', icon: '/images/menu-icons/icon-20x20-neurology.svg', description: 'Live & recorded', external: true },
  { title: 'Glossary', href: 'https://adapty.io/glossary/', icon: '/images/menu-icons/icon-24x24-difference.svg', description: 'Subscription terms', external: true },
  { title: 'Newsletter', href: 'https://adapty.io/paywall-newsletter/', icon: '/images/menu-icons/icon-24x24-newsletter.svg', description: 'Weekly insights', badge: 'weekly', external: true },
  { title: 'Careers', href: '/careers', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg', description: 'Join our team' },
];

export const COMPACT_DOCS_LINKS: MenuItem[] = [
  { title: 'Quick Start', href: 'https://adapty.io/docs/quickstart/', icon: '/images/menu-icons/icon-24x24-doc.svg', description: 'Get started fast' },
  { title: 'iOS SDK', href: 'https://adapty.io/docs/ios-installation/', icon: '/images/menu-icons/icon-ios-64x64-1.svg', description: 'Swift & SwiftUI' },
  { title: 'Android SDK', href: 'https://adapty.io/docs/android-installation/', icon: '/images/menu-icons/icon-android-64x64-1.svg', description: 'Kotlin & Java' },
  { title: 'React Native', href: 'https://adapty.io/docs/react-native-installation/', icon: '/images/menu-icons/icon-react-native-64x64-1.svg', description: 'Cross-platform' },
  { title: 'Support', href: 'https://adapty.io/support/', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg', description: 'Get help' },
];
