import * as React from 'react';
import Image from 'next/image';
import {
  BarChartIcon,
  BookIcon,
  BriefcaseIcon,
  BuildingIcon,
  CalculatorIcon,
  CalendarIcon,
  CodeIcon,
  FileBarChart2Icon,
  FileTextIcon,
  HeartHandshakeIcon,
  LayoutIcon,
  NewspaperIcon,
  PlayIcon,
  PlugIcon,
  RocketIcon,
  ScaleIcon,
  SendHorizonalIcon,
  UserIcon,
  UsersIcon,
  WrenchIcon
} from 'lucide-react';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon
} from '@workspace/ui/components/brand-icons';

// Helper to render image icons from Oatmeal menu icons
const MenuIcon = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt=""
    width={24}
    height={24}
    className="size-5 shrink-0 object-contain dark:invert"
  />
);

// ============================================================================
// MAIN NAVIGATION MENU (Product, Cases, Resources, Docs, Pricing)
// ============================================================================

export const MENU_LINKS = [
  // PRODUCT MENU - 17 items from Oatmeal
  {
    title: 'Product',
    items: [
      // TECH section
      {
        title: 'Subscriptions SDK',
        description: 'Integrate in-app purchases easily',
        icon: <MenuIcon src="/images/menu-icons/icon-20x20-sdk.svg" />,
        href: '/sdk',
        external: false
      },
      {
        title: 'Subscribers sync',
        description: 'Keep subscriber data in sync',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-2n.svg" />,
        href: 'https://adapty.io/subscription-sync/',
        external: true
      },
      {
        title: 'Fallback paywalls',
        description: 'Never lose a sale',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-3n.svg" />,
        href: '/fallback-paywalls',
        external: false
      },
      {
        title: 'Refund saver',
        description: 'Reduce refund rates',
        icon: (
          <MenuIcon src="/images/menu-icons/icon-20x20-currency-exchange.svg" />
        ),
        href: '/refund-saver',
        external: false
      },
      // PAYWALLS section
      {
        title: 'Paywall builder',
        description: 'No-code visual paywall editor',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-1n.svg" />,
        href: '/paywall-builder',
        external: false
      },
      {
        title: 'Onboarding builder',
        description: 'Create engaging onboarding flows',
        icon: (
          <MenuIcon src="/images/menu-icons/icon-mobile-menu-dp24w4g0.svg" />
        ),
        href: '/onboarding-builder',
        external: false
      },
      {
        title: 'AI generator',
        description: 'Generate paywalls with AI',
        icon: <MenuIcon src="/images/menu-icons/icon-20x20-neurology.svg" />,
        href: '/ai-paywall-generator',
        external: false,
        badge: 'new'
      },
      {
        title: 'A/B testing',
        description: 'Optimize with experiments',
        icon: <MenuIcon src="/images/menu-icons/icon-20x20-bug-report.svg" />,
        href: '/paywall-ab-testing',
        external: false
      },
      {
        title: 'Autopilot',
        description: 'AI-powered optimization',
        icon: <MenuIcon src="/images/menu-icons/icon-assistant-dp24w4g0.svg" />,
        href: '/autopilot',
        external: false,
        badge: 'new'
      },
      {
        title: 'Targeting',
        description: 'Show right paywall to right users',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-9n.svg" />,
        href: '/paywall-targeting',
        external: false
      },
      {
        title: 'Localizations',
        description: 'Localize paywalls globally',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-10n.svg" />,
        href: '/paywall-localization',
        external: false
      },
      {
        title: 'Remote config',
        description: 'Update app without releases',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-11n.svg" />,
        href: '/remote-config',
        external: false
      },
      // ANALYTICS section
      {
        title: 'Revenue analytics',
        description: 'Track MRR, ARR, and revenue',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-4n.svg" />,
        href: '/revenue-growth',
        external: false
      },
      {
        title: 'LTV analytics',
        description: 'Understand customer lifetime value',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-5n.svg" />,
        href: '/ltv-analytics',
        external: false
      },
      {
        title: 'AI LTV predictions',
        description: 'Predict future revenue',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-12n.svg" />,
        href: '/predictive-analytics',
        external: false
      },
      {
        title: 'LTV prediction model',
        description: 'Custom prediction models',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-21n.svg" />,
        href: 'https://adapty.io/ltv-prediction-model/',
        external: true
      },
      {
        title: 'Apple ads manager',
        description: 'Optimize Apple Search Ads',
        icon: (
          <MenuIcon src="/images/menu-icons/icon-finance-blue-20dp-300w.svg" />
        ),
        href: 'https://adapty.io/apple-ads-manager/',
        external: true
      }
    ]
  },
  // CASE STUDIES MENU - Top case studies
  {
    title: 'Case Studies',
    items: [
      {
        title: 'Productivity app',
        description: '+50% revenue with Autopilot',
        icon: (
          <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/clients/productivity-app/',
        external: true
      },
      {
        title: 'Going Merry',
        description: '5x revenue with Paywall Builder',
        icon: (
          <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/clients/going-merry/',
        external: true
      },
      {
        title: 'Shmoody',
        description: 'From $0 to $2M ARR',
        icon: (
          <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/clients/shmoody/',
        external: true
      },
      {
        title: 'Glam AI',
        description: 'Tripled revenue, same installs',
        icon: (
          <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/clients/glam-ai/',
        external: true
      },
      {
        title: 'Lively',
        description: 'Saved 82% of lost revenue',
        icon: (
          <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/clients/lively/',
        external: true
      },
      {
        title: 'View all case studies',
        description: 'See more customer success stories',
        icon: (
          <FileTextIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/case-studies',
        external: false
      }
    ]
  },
  // RESOURCES MENU - From Oatmeal
  {
    title: 'Resources',
    items: [
      // LEARN
      {
        title: 'Blog',
        description: 'Latest news and insights',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-newsletter.svg" />,
        href: 'https://adapty.io/blog/',
        external: true
      },
      {
        title: 'Podcasts',
        description: 'Listen to industry experts',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-23n.svg" />,
        href: 'https://adapty.io/podcasts/',
        external: true
      },
      {
        title: 'Glossary',
        description: 'Subscription terminology',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-difference.svg" />,
        href: 'https://adapty.io/glossary/',
        external: true
      },
      // CONNECT
      {
        title: 'Community',
        description: 'Join our developer community',
        icon: <UsersIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/community/',
        external: true
      },
      {
        title: 'Webinars',
        description: 'Learn from experts',
        icon: <PlayIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/webinars/',
        external: true
      },
      {
        title: 'Events',
        description: 'Meet us in person',
        icon: (
          <CalendarIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/events/',
        external: true
      },
      {
        title: 'Careers',
        description: 'Join our team',
        icon: (
          <BriefcaseIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/careers',
        external: false
      },
      // DISCOVER
      {
        title: 'Paywall newsletter',
        description: 'Weekly paywall insights',
        icon: (
          <NewspaperIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/paywall-newsletter/',
        external: true,
        badge: 'weekly'
      },
      {
        title: 'Apple fiscal calendar',
        description: 'Plan your releases',
        icon: (
          <CalendarIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/apple-fiscal-calendar',
        external: false
      },
      {
        title: 'Subscription calculator',
        description: 'Calculate your revenue',
        icon: (
          <CalculatorIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/subscription-calculator/',
        external: true
      },
      {
        title: 'Paywall library',
        description: 'Browse paywall examples',
        icon: <LayoutIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/paywall-library',
        external: false
      },
      {
        title: 'State of Subscriptions',
        description: 'Annual industry report',
        icon: (
          <FileBarChart2Icon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/state-of-in-app-subscriptions',
        external: false,
        badge: '2025'
      },
      {
        title: 'Integrations',
        description: 'Connect with your stack',
        icon: <PlugIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/integrations',
        external: false
      }
    ]
  },
  // DOCS MENU - SDK documentation
  {
    title: 'Docs',
    items: [
      {
        title: 'Quick start',
        description: 'Get started in minutes',
        icon: <BookIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/docs/quickstart/',
        external: true
      },
      {
        title: 'iOS SDK',
        description: 'Swift integration guide',
        icon: <MenuIcon src="/images/menu-icons/icon-ios-64x64-1.svg" />,
        href: 'https://adapty.io/docs/ios-installation/',
        external: true
      },
      {
        title: 'Android SDK',
        description: 'Kotlin integration guide',
        icon: <MenuIcon src="/images/menu-icons/icon-android-64x64-1.svg" />,
        href: 'https://adapty.io/docs/android-installation/',
        external: true
      },
      {
        title: 'React Native',
        description: 'Cross-platform for RN',
        icon: (
          <MenuIcon src="/images/menu-icons/icon-react-native-64x64-1.svg" />
        ),
        href: 'https://adapty.io/docs/react-native-installation/',
        external: true
      },
      {
        title: 'Flutter',
        description: 'Flutter SDK guide',
        icon: <MenuIcon src="/images/menu-icons/icon-flutter-64x64-1.svg" />,
        href: 'https://adapty.io/docs/flutter-installation/',
        external: true
      },
      {
        title: 'Unity',
        description: 'Unity SDK guide',
        icon: <MenuIcon src="/images/menu-icons/icon-unity-64x64-1.svg" />,
        href: 'https://adapty.io/docs/unity-installation/',
        external: true
      },
      {
        title: 'Server-side API',
        description: 'REST API reference',
        icon: <CodeIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/docs/api/',
        external: true
      },
      {
        title: 'Migrate to Adapty',
        description: 'Switch from competitors',
        icon: (
          <SendHorizonalIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: 'https://adapty.io/docs/migration/',
        external: true
      }
    ]
  },
  // SOLUTIONS - Role pages and comparisons
  {
    title: 'Solutions',
    items: [
      // BY ROLE
      {
        title: 'For Marketers',
        description: 'Optimize paywalls without code',
        icon: <UserIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/for-marketers',
        external: false
      },
      {
        title: 'For Developers',
        description: 'SDK integration and APIs',
        icon: <WrenchIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/for-developers',
        external: false
      },
      {
        title: 'For App Owners',
        description: 'Grow subscription revenue',
        icon: (
          <BuildingIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/for-app-owners',
        external: false
      },
      {
        title: 'For Indie Developers',
        description: 'Start free, scale as you grow',
        icon: <RocketIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/for-indie',
        external: false
      },
      // COMPARE
      {
        title: 'Why Adapty',
        description: 'See how we compare',
        icon: (
          <HeartHandshakeIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/why-adapty',
        external: false
      },
      {
        title: 'Adapty vs RevenueCat',
        description: 'Feature comparison',
        icon: <ScaleIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/compare/revenuecat',
        external: false
      },
      {
        title: 'Adapty vs Qonversion',
        description: 'Feature comparison',
        icon: <ScaleIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/compare/qonversion',
        external: false
      },
      {
        title: 'Adapty vs Superwall',
        description: 'Feature comparison',
        icon: <ScaleIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/compare/superwall',
        external: false
      },
      {
        title: 'Adapty vs Purchasely',
        description: 'Feature comparison',
        icon: <ScaleIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/compare/purchasely',
        external: false
      },
      {
        title: 'Adapty vs In-house',
        description: 'Build vs buy analysis',
        icon: <ScaleIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: '/compare/in-house-development',
        external: false
      },
      {
        title: 'All comparisons',
        description: 'View all competitor comparisons',
        icon: (
          <FileTextIcon className="size-5 shrink-0 text-muted-foreground" />
        ),
        href: '/compare',
        external: false
      }
    ]
  },
  // PRICING - Direct link
  {
    title: 'Pricing',
    href: '/pricing',
    external: false
  }
];

// ============================================================================
// FOOTER LINKS
// ============================================================================

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { name: 'Paywall Builder', href: '/paywall-builder', external: false },
      { name: 'A/B Testing', href: '/paywall-ab-testing', external: false },
      {
        name: 'Onboarding Builder',
        href: '/onboarding-builder',
        external: false
      },
      {
        name: 'AI Paywall Generator',
        href: '/ai-paywall-generator',
        external: false
      },
      { name: 'Autopilot', href: '/autopilot', external: false },
      { name: 'Revenue Analytics', href: '/revenue-growth', external: false },
      { name: 'LTV Analytics', href: '/ltv-analytics', external: false },
      {
        name: 'Predictive Analytics',
        href: '/predictive-analytics',
        external: false
      },
      { name: 'Subscriptions SDK', href: '/sdk', external: false },
      { name: 'Refund Saver', href: '/refund-saver', external: false },
      { name: 'Remote Config', href: '/remote-config', external: false },
      {
        name: 'Fallback Paywalls',
        href: '/fallback-paywalls',
        external: false
      },
      {
        name: 'Paywall Targeting',
        href: '/paywall-targeting',
        external: false
      },
      {
        name: 'Paywall Localization',
        href: '/paywall-localization',
        external: false
      },
      { name: 'Integrations', href: '/integrations', external: false },
      { name: 'Pricing', href: '/pricing', external: false }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'For Marketers', href: '/for-marketers', external: false },
      { name: 'For Developers', href: '/for-developers', external: false },
      { name: 'For App Owners', href: '/for-app-owners', external: false },
      { name: 'For Indie Developers', href: '/for-indie', external: false },
      { name: 'Why Adapty', href: '/why-adapty', external: false },
      { name: 'Compare Adapty', href: '/compare', external: false },
      { name: 'vs RevenueCat', href: '/compare/revenuecat', external: false },
      { name: 'vs Qonversion', href: '/compare/qonversion', external: false },
      { name: 'vs Superwall', href: '/compare/superwall', external: false },
      { name: 'vs Purchasely', href: '/compare/purchasely', external: false },
      {
        name: 'vs In-house',
        href: '/compare/in-house-development',
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: 'https://docs.adapty.io', external: true },
      { name: 'Blog', href: '/blog', external: false },
      { name: 'Case Studies', href: '/case-studies', external: false },
      { name: 'Paywall Library', href: '/paywall-library', external: false },
      {
        name: 'Apple Fiscal Calendar',
        href: '/apple-fiscal-calendar',
        external: false
      },
      {
        name: 'State of Subscriptions',
        href: '/state-of-in-app-subscriptions',
        external: false
      },
      {
        name: 'Community',
        href: 'https://adapty.io/community/',
        external: true
      },
      { name: 'Webinars', href: 'https://adapty.io/webinars/', external: true },
      {
        name: 'Help Center',
        href: 'https://adapty.io/support/',
        external: true
      }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Adapty', href: '/story', external: false },
      { name: 'Careers', href: '/careers', external: false },
      { name: 'Contact', href: '/contact', external: false },
      { name: 'Schedule Demo', href: '/schedule-demo', external: false },
      {
        name: 'System Status',
        href: 'https://status.adapty.io/',
        external: true
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Use', href: '/terms-of-use', external: false },
      { name: 'Privacy Policy', href: '/privacy-policy', external: false },
      { name: 'Cookie Policy', href: '/cookie-policy', external: false },
      { name: 'Security', href: 'https://adapty.io/security/', external: true }
    ]
  }
];

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const SOCIAL_LINKS = [
  {
    name: 'X (formerly Twitter)',
    href: 'https://twitter.com/adaptyio',
    icon: <XIcon className="size-4 shrink-0" />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/adapty',
    icon: <LinkedInIcon className="size-4 shrink-0" />
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/adaptyio',
    icon: <FacebookIcon className="size-4 shrink-0" />
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/adaptyio',
    icon: <InstagramIcon className="size-4 shrink-0" />
  }
];

// ============================================================================
// DOCS SIDEBAR (for docs pages)
// ============================================================================

export const DOCS_LINKS = [
  {
    title: 'Getting Started',
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      { title: 'Introduction', href: '/docs', items: [] },
      { title: 'Dependencies', href: '/docs/dependencies', items: [] }
    ]
  }
];
