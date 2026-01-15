import * as React from 'react';
import Image from 'next/image';
import {
  BookIcon,
  BoxIcon,
  CircuitBoardIcon,
  FileBarChartIcon,
  LayoutIcon,
  PlayIcon,
  SendHorizonalIcon,
  CodeIcon,
  UsersIcon,
  GraduationCapIcon,
  CalendarIcon,
  BriefcaseIcon,
  NewspaperIcon,
  FileTextIcon,
  CalculatorIcon,
  BarChartIcon,
} from 'lucide-react';

import { baseUrl, routes } from '@workspace/routes';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
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
        href: 'https://adapty.io/sdk/',
        external: false
      },
      {
        title: 'Subscribers sync',
        description: 'Keep subscriber data in sync',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-2n.svg" />,
        href: 'https://adapty.io/subscription-sync/',
        external: false
      },
      {
        title: 'Fallback paywalls',
        description: 'Never lose a sale',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-3n.svg" />,
        href: 'https://adapty.io/fallback-paywalls/',
        external: false
      },
      {
        title: 'Refund saver',
        description: 'Reduce refund rates',
        icon: <MenuIcon src="/images/menu-icons/icon-20x20-currency-exchange.svg" />,
        href: 'https://adapty.io/refund-saver/',
        external: false
      },
      // PAYWALLS section
      {
        title: 'Paywall builder',
        description: 'No-code visual paywall editor',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-1n.svg" />,
        href: 'https://adapty.io/paywall-builder/',
        external: false
      },
      {
        title: 'Onboarding builder',
        description: 'Create engaging onboarding flows',
        icon: <MenuIcon src="/images/menu-icons/icon-mobile-menu-dp24w4g0.svg" />,
        href: 'https://adapty.io/onboarding-builder/',
        external: false
      },
      {
        title: 'AI generator',
        description: 'Generate paywalls with AI',
        icon: <MenuIcon src="/images/menu-icons/icon-20x20-neurology.svg" />,
        href: 'https://adapty.io/ai-paywall-generator/',
        external: false,
        badge: 'new'
      },
      {
        title: 'A/B testing',
        description: 'Optimize with experiments',
        icon: <MenuIcon src="/images/menu-icons/icon-20x20-bug-report.svg" />,
        href: 'https://adapty.io/paywall-ab-testing/',
        external: false
      },
      {
        title: 'Autopilot',
        description: 'AI-powered optimization',
        icon: <MenuIcon src="/images/menu-icons/icon-assistant-dp24w4g0.svg" />,
        href: 'https://adapty.io/autopilot/',
        external: false,
        badge: 'new'
      },
      {
        title: 'Targeting',
        description: 'Show right paywall to right users',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-9n.svg" />,
        href: 'https://adapty.io/paywall-targeting/',
        external: false
      },
      {
        title: 'Localizations',
        description: 'Localize paywalls globally',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-10n.svg" />,
        href: 'https://adapty.io/paywall-localization/',
        external: false
      },
      {
        title: 'Remote config',
        description: 'Update app without releases',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-11n.svg" />,
        href: 'https://adapty.io/remote-config/',
        external: false
      },
      // ANALYTICS section
      {
        title: 'Revenue analytics',
        description: 'Track MRR, ARR, and revenue',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-4n.svg" />,
        href: 'https://adapty.io/revenue-analytics/',
        external: false
      },
      {
        title: 'LTV analytics',
        description: 'Understand customer lifetime value',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-5n.svg" />,
        href: 'https://adapty.io/ltv-analytics/',
        external: false
      },
      {
        title: 'AI LTV predictions',
        description: 'Predict future revenue',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-12n.svg" />,
        href: 'https://adapty.io/predictive-analytics/',
        external: false
      },
      {
        title: 'LTV prediction model',
        description: 'Custom prediction models',
        icon: <MenuIcon src="/images/menu-icons/icon-24x24-21n.svg" />,
        href: 'https://adapty.io/ltv-prediction-model/',
        external: false
      },
      {
        title: 'Apple ads manager',
        description: 'Optimize Apple Search Ads',
        icon: <MenuIcon src="/images/menu-icons/icon-finance-blue-20dp-300w.svg" />,
        href: 'https://adapty.io/apple-ads-manager/',
        external: false
      },
    ]
  },
  // CASE STUDIES MENU - Top case studies
  {
    title: 'Case Studies',
    items: [
      {
        title: 'Productivity app',
        description: '+50% revenue with Autopilot',
        icon: <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/clients/productivity-app/',
        external: true
      },
      {
        title: 'Going Merry',
        description: '5x revenue with Paywall Builder',
        icon: <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/clients/going-merry/',
        external: true
      },
      {
        title: 'Shmoody',
        description: 'From $0 to $2M ARR',
        icon: <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/clients/shmoody/',
        external: true
      },
      {
        title: 'Glam AI',
        description: 'Tripled revenue, same installs',
        icon: <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/clients/glam-ai/',
        external: true
      },
      {
        title: 'Lively',
        description: 'Saved 82% of lost revenue',
        icon: <BarChartIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/clients/lively/',
        external: true
      },
      {
        title: 'View all case studies',
        description: 'See more customer success stories',
        icon: <FileTextIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/case-studies/',
        external: true
      },
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
        icon: <CalendarIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/events/',
        external: true
      },
      {
        title: 'Careers',
        description: 'Join our team',
        icon: <BriefcaseIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/careers/',
        external: true
      },
      // DISCOVER
      {
        title: 'Paywall newsletter',
        description: 'Weekly paywall insights',
        icon: <NewspaperIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/paywall-newsletter/',
        external: true,
        badge: 'weekly'
      },
      {
        title: 'Apple fiscal calendar',
        description: 'Plan your releases',
        icon: <CalendarIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/apple-fiscal-calendar/',
        external: true
      },
      {
        title: 'Subscription calculator',
        description: 'Calculate your revenue',
        icon: <CalculatorIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/subscription-calculator/',
        external: true
      },
      {
        title: 'Paywall library',
        description: 'Browse paywall examples',
        icon: <LayoutIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/paywall-library/',
        external: true
      },
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
        icon: <MenuIcon src="/images/menu-icons/icon-react-native-64x64-1.svg" />,
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
        icon: <SendHorizonalIcon className="size-5 shrink-0 text-muted-foreground" />,
        href: 'https://adapty.io/docs/migration/',
        external: true
      },
    ]
  },
  // PRICING - Direct link
  {
    title: 'Pricing',
    href: 'https://adapty.io/pricing/',
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
      { name: 'Paywall Builder', href: 'https://adapty.io/paywall-builder/', external: false },
      { name: 'A/B Testing', href: 'https://adapty.io/paywall-ab-testing/', external: false },
      { name: 'Analytics', href: 'https://adapty.io/revenue-analytics/', external: false },
      { name: 'Subscriptions SDK', href: 'https://adapty.io/sdk/', external: false },
      { name: 'Refund Saver', href: 'https://adapty.io/refund-saver/', external: false },
      { name: 'Remote Config', href: 'https://adapty.io/remote-config/', external: false },
      { name: 'Integrations', href: 'https://adapty.io/integrations/', external: false }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: 'https://docs.adapty.io', external: true },
      { name: 'Blog', href: 'https://adapty.io/blog/', external: true },
      { name: 'Case Studies', href: 'https://adapty.io/case-studies/', external: true },
      { name: 'Community', href: 'https://adapty.io/community/', external: true },
      { name: 'Webinars', href: 'https://adapty.io/webinars/', external: true },
      { name: 'Help Center', href: 'https://adapty.io/support/', external: true }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: 'https://adapty.io/about/', external: false },
      { name: 'Careers', href: 'https://adapty.io/careers/', external: false },
      { name: 'Contact', href: 'https://adapty.io/contact/', external: false },
      { name: 'System Status', href: 'https://status.adapty.io/', external: true }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Use', href: 'https://adapty.io/terms/', external: false },
      { name: 'Privacy Policy', href: 'https://adapty.io/privacy/', external: false },
      { name: 'Cookie Policy', href: 'https://adapty.io/cookies/', external: false },
      { name: 'Security', href: 'https://adapty.io/security/', external: false }
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
