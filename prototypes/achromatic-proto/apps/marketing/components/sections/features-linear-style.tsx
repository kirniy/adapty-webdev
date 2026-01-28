'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { createPortal } from 'react-dom';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import {
  TSeparatorCard,
  TSeparatorFeatureCard,
  TSeparatorSection
} from '~/components/fragments/t-separator-section';
import { useImageSetVariant, type ImageSetVariant } from '~/lib/debug-context';

// Helper to get image path based on current image set variant
function getImagePath(imageSet: ImageSetVariant, imageName: string): string {
  return `/assets/hero/${imageSet}/${imageName}`;
}

// =============================================================================
// LINEAR-STYLE FEATURE TAG
// =============================================================================
function FeatureTag({
  label,
  href,
  color = 'primary'
}: {
  label: string;
  href?: string;
  color?: 'primary' | 'cyan' | 'green' | 'amber' | 'purple' | 'pink';
}) {
  const colorClasses = {
    primary: 'bg-gray-900',
    cyan: 'bg-cyan-500',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500'
  };

  const content = (
    <span className="inline-flex items-center gap-2.5 text-sm text-muted-foreground font-medium">
      <span className={cn('w-4 h-1.5 rounded-full', colorClasses[color])} />
      <span>{label}</span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2.5 text-sm text-muted-foreground font-medium hover:text-foreground transition-colors group"
      >
        <span className={cn('w-4 h-1.5 rounded-full', colorClasses[color])} />
        <span>{label}</span>
        <ChevronRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return content;
}

// =============================================================================
// LINEAR-STYLE SQUIRCLE BUTTON
// =============================================================================
function SquircleButton({
  children,
  href,
  variant = 'chevron',
  onClick
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'chevron' | 'text' | 'plus';
  onClick?: () => void;
}) {
  const content = (
    <>
      <span className="text-sm font-medium text-foreground">{children}</span>
      {variant === 'chevron' && <ChevronRightIcon className="size-3.5 text-muted-foreground/70 transition-transform duration-150 group-hover:translate-x-0.5" />}
      {variant === 'plus' && <span className="text-base leading-none text-muted-foreground/70">+</span>}
    </>
  );

  const className = cn(
    'group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl',
    'bg-background border border-border',
    'hover:bg-muted hover:border-border transition-all duration-200'
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}

// =============================================================================
// LINEAR-STYLE INTERACTIVE SELECTOR
// =============================================================================
// INTERACTIVE SELECTOR - 2-column: vertical menu left, large image right
// =============================================================================
type SelectorOption = {
  id: string;
  title: string;
  description?: string;
  image: string;
};

function InteractiveSelector({
  title,
  subtitle,
  options,
  features
}: {
  title: string;
  subtitle?: string;
  options: SelectorOption[];
  features?: { icon: React.ReactNode; title: string; description: string }[];
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* Header */}
      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-3 text-foreground">{title}</h3>
      {subtitle && (
        <p className="text-muted-foreground mb-10 max-w-xl">{subtitle}</p>
      )}

      {/* 2-column layout: menu left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Vertical menu with indicator line */}
        <div className="relative pl-6">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-1">
            {options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'relative block w-full text-left py-3 px-4 -ml-4 rounded-lg transition-all duration-200',
                  selectedIndex === index
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {/* Indicator dot */}
                <span
                  className={cn(
                    'absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 size-2 rounded-full transition-all duration-200',
                    selectedIndex === index
                      ? 'bg-gray-900 scale-100'
                      : 'bg-gray-300 scale-75'
                  )}
                />
                <span className="font-medium">{option.title}</span>
                {option.description && (
                  <span className="block text-sm text-muted-foreground/70 mt-0.5">
                    {option.description}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Large image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={options[selectedIndex].image}
                alt={options[selectedIndex].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Optional: Feature grid below */}
      {features && features.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-10 border-t border-border/50">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center gap-2.5 mb-2">
                {feature.icon}
                <span className="font-medium text-sm text-foreground">
                  {feature.title}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// LINEAR-STYLE FEATURE SECTION - Vertical text stack like Linear.app
// =============================================================================
export function LinearFeatureSection({
  tag,
  tagHref,
  tagColor,
  titleBlack,
  titleGray,
  subtitle,
  description,
  children,
  learnMoreHref
}: {
  tag: string;
  tagHref?: string;
  tagColor?: 'primary' | 'cyan' | 'green' | 'amber' | 'purple' | 'pink';
  titleBlack: string; // First part of title (black)
  titleGray?: string; // Second part of title (gray)
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
  learnMoreHref?: string;
}) {
  return (
    <GridSection
      className="relative"
      hideVerticalGridLines
      hideBottomGridLine
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <BlurFade>
          {/* Linear pattern: Vertical text stack, not 2-column split */}
          <div className="mb-12">
            {/* Tag */}
            <div className="mb-4">
              <FeatureTag label={tag} href={tagHref} color={tagColor} />
            </div>

            {/* LINEAR: Mixed-color title - first words black, rest gray */}
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-3xl">
              <span className="text-foreground">{titleBlack}</span>
              {titleGray && (
                <>
                  {' '}
                  <span className="text-muted-foreground/70">{titleGray}</span>
                </>
              )}
            </h2>

            {/* Description below title */}
            <div className="max-w-2xl">
              {subtitle && (
                <p className="text-foreground font-medium mb-3 text-lg">
                  {subtitle}
                </p>
              )}
              <p className="text-muted-foreground text-lg leading-relaxed">
                {description}
              </p>
              {learnMoreHref && (
                <div className="mt-6">
                  <SquircleButton href={learnMoreHref} variant="chevron">
                    Learn more
                  </SquircleButton>
                </div>
              )}
            </div>
          </div>
        </BlurFade>

        {/* Content area - visuals go here, full width */}
        {children && <div>{children}</div>}
      </div>
    </GridSection>
  );
}

// =============================================================================
// LINEAR-STYLE 3-COLUMN VALUE PROPS
// =============================================================================
type ValueProp = {
  title: string;
  description: string; // LEFT side: 2 lines under title
  explanation?: string; // RIGHT side: 4 lines of explanation
  image?: string;
  modal?: {
    paragraphs: string[]; // Should be exactly 3 paragraphs
    stats?: { value: string; label: string }[]; // Should be exactly 4 stats (2x2 grid)
    quote?: { text: string; author: string; company: string };
    companyLogo?: string; // Monochrome logo
    link?: string;
  };
};

/**
 * LINEAR-STYLE VALUE PROPS SECTION
 *
 * Layout per Linear's pattern:
 * - 3 horizontal cards (not vertical)
 * - Each card: LEFT (title + 2 lines) | RIGHT (4 lines explanation + button)
 * - Cards open modals on click
 * - Heading uses mixed colors: first words black, rest gray
 */
export function ValuePropsSection({
  headingBlack,
  headingGray,
  props
}: {
  headingBlack: string; // First part of heading (black)
  headingGray?: string; // Second part of heading (gray)
  props: ValueProp[];
}) {
  const [activeModal, setActiveModal] = React.useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeProp = activeModal !== null ? props[activeModal] : null;

  const modalData = activeProp?.modal
    ? {
        id: `value-prop-${activeModal}`,
        title: activeProp.title,
        subtitle: activeProp.description,
        image: activeProp.image || '',
        paragraphs: activeProp.modal.paragraphs,
        stats: activeProp.modal.stats,
        quote: activeProp.modal.quote,
        companyLogo: activeProp.modal.companyLogo,
        link: activeProp.modal.link
      }
    : null;

  return (
    <GridSection className="relative" hideBottomGridLine>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <BlurFade>
          {/* LINEAR: Mixed-color heading - first words black, rest gray */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-center mb-12">
            <span className="text-foreground">{headingBlack}</span>
            {headingGray && (
              <>
                {' '}
                <span className="text-muted-foreground/70">{headingGray}</span>
              </>
            )}
          </h2>
        </BlurFade>

        {/* 3 horizontal cards - LINEAR PATTERN */}
        <div className="space-y-4">
          {props.map((prop, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => prop.modal && setActiveModal(index)}
                className={cn(
                  'group relative rounded-[20px] overflow-hidden card-polish',
                  prop.modal && 'cursor-pointer'
                )}
              >
                {/* LINEAR LAYOUT: Left title/desc | Right explanation/button */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-8">
                  {/* LEFT: Title + 2 lines description */}
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold text-xl lg:text-2xl mb-3 tracking-tight text-foreground">
                      {prop.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* RIGHT: 4 lines explanation + button */}
                  <div className="flex flex-col justify-between">
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                      {prop.explanation || prop.description}
                    </p>

                    {/* Button row: text button with chevron on the right */}
                    {prop.modal && (
                      <div className="flex justify-end items-center">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                          <span>Learn more</span>
                          <span
                            className={cn(
                              'flex items-center justify-center size-7 rounded-full',
                              'bg-muted border border-border',
                              'group-hover:bg-gray-200 group-hover:border-border',
                              'transition-colors duration-150'
                            )}
                          >
                            <span className="text-sm leading-none text-muted-foreground">+</span>
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <CardModal
          data={modalData}
          isOpen={activeModal !== null}
          onClose={() => setActiveModal(null)}
        />
      )}
    </GridSection>
  );
}

// Section 1: Value Props (3 cards)
export function AdaptyValueProps() {
  const imageSet = useImageSetVariant();
  const props: ValueProp[] = [
    {
      title: 'Purpose-built for subscription apps',
      description:
        'Everything you need to manage, optimize, and grow in-app subscriptions. From paywalls to analytics.',
      explanation:
        'Unlike generic tools that try to serve everyone, Adapty focuses exclusively on subscription apps. Our SDK handles receipt validation, entitlement management, and cross-platform sync out of the box.',
      image: getImagePath(imageSet, 'light-feature1.webp'),
      modal: {
        paragraphs: [
          'Adapty is built exclusively for subscription-based mobile apps. Unlike generic analytics tools, we understand the unique challenges of subscription businesses — from trial conversions to churn prediction.',
          'Our SDK handles the complexity of subscription lifecycle management across iOS, Android, and Web platforms. You get unified data and consistent paywall experiences regardless of platform.',
          'Every feature is designed around the subscription model: grace periods, billing retry, win-back campaigns, and predictive churn analysis. We handle the edge cases so you can focus on growth.'
        ],
        stats: [
          { value: '3', label: 'Platforms supported' },
          { value: '10K+', label: 'Apps powered' },
          { value: '$2B+', label: 'Revenue tracked' },
          { value: '99.9%', label: 'Uptime SLA' }
        ],
        quote: {
          text: 'Adapty helped us increase trial-to-paid conversion by 40% in the first month. The paywall builder alone saved us weeks of development time.',
          author: 'Alex Chen',
          company: 'Mindful Labs'
        },
        companyLogo: '/logos/customers/mindful.svg',
        link: '/features'
      }
    },
    {
      title: 'Designed for speed',
      description:
        'Ship paywall changes in minutes, not weeks. No app store reviews, no code deploys required.',
      explanation:
        'Your product team can create, deploy, and iterate on paywalls without writing code. Updates go live instantly through our remote configuration system.',
      image: getImagePath(imageSet, 'light-feature2.webp'),
      modal: {
        paragraphs: [
          'Stop waiting for App Store review cycles to test new paywall designs. With Adapty, your product team can create, deploy, and iterate on paywalls without writing a single line of code.',
          'Our visual editor and remote configuration system means updates go live instantly. Test pricing, designs, and messaging in real-time while your developers focus on building core product features.',
          'Version control, rollback, and gradual rollouts are built in. Launch to 5% of users, monitor metrics, then scale up with confidence.'
        ],
        stats: [
          { value: '<5 min', label: 'To deploy changes' },
          { value: '0', label: 'Code deploys needed' },
          { value: '50+', label: 'Templates available' },
          { value: '1 day', label: 'Avg integration time' }
        ],
        quote: {
          text: 'We shipped 12 paywall experiments in Q4 alone. Before Adapty, we could barely do one per quarter.',
          author: 'Maria Santos',
          company: 'FitTrack'
        },
        companyLogo: '/logos/customers/fittrack.svg',
        link: '/paywall-builder'
      }
    },
    {
      title: 'Data-driven optimization',
      description:
        'A/B test everything. Get statistical significance fast. Make decisions with confidence.',
      explanation:
        'Run experiments on paywalls, pricing, and onboarding flows. Our Bayesian engine tells you when you have enough data to make a decision, no guesswork needed.',
      image: getImagePath(imageSet, 'light-feature3.webp'),
      modal: {
        paragraphs: [
          'Make product decisions based on statistical evidence, not gut feelings. Adapty runs continuous A/B tests on your paywalls, pricing, and onboarding flows to find what actually converts.',
          'Our Bayesian analytics engine automatically calculates statistical significance, so you know when you have enough data to make a decision. No more guessing or relying on inconclusive test results.',
          'Segment by country, acquisition source, device type, or custom attributes. Find what works for each audience and serve the optimal experience automatically.'
        ],
        stats: [
          { value: '32%', label: 'Avg. revenue uplift' },
          { value: '10x', label: 'Faster insights' },
          { value: '20+', label: 'Metrics tracked' },
          { value: '95%', label: 'Confidence default' }
        ],
        quote: {
          text: 'The A/B testing alone paid for Adapty in the first week. We found a pricing structure that doubled our ARPU.',
          author: 'James Kim',
          company: 'StudyPro'
        },
        companyLogo: '/logos/customers/studypro.svg',
        link: '/ab-testing'
      }
    }
  ];

  return (
    <ValuePropsSection
      headingBlack="Made for"
      headingGray="subscription app teams"
      props={props}
    />
  );
}

// Section 2b: Paywall Builder (T-Separator layout)
export function PaywallBuilderTSeparator() {
  const imageSet = useImageSetVariant();
  const [activeModal, setActiveModal] = React.useState<'templates' | 'preview' | null>(null);

  const templatesModalData: ModalCardData = {
    id: 'templates',
    title: 'Pre-built templates',
    subtitle: 'Start with industry-tested templates designed for maximum conversion',
    image: getImagePath(imageSet, 'light-feature2.webp'),
    paragraphs: [
      'Choose from our library of professionally designed paywall templates, each optimized for different subscription models and user segments.',
      'Every template has been tested across thousands of apps and refined based on real conversion data. Customize colors, fonts, images, and copy to match your brand in seconds.'
    ],
    stats: [
      { value: '50+', label: 'Templates available' },
      { value: '32%', label: 'Avg. conversion lift' }
    ],
    link: '/paywall-library'
  };

  const previewModalData: ModalCardData = {
    id: 'preview',
    title: 'Real-time device preview',
    subtitle: 'See exactly how your paywall looks on every device before publishing',
    image: getImagePath(imageSet, 'light-feature3.webp'),
    paragraphs: [
      'Preview your paywall on iPhone, iPad, and Android devices simultaneously as you edit. See pixel-perfect renders without deploying to a device.',
      'Test different screen sizes, orientations, and accessibility settings. Ensure your paywall looks perfect on every device your users have.'
    ],
    stats: [
      { value: '3', label: 'Platform previews' },
      { value: '12+', label: 'Device sizes' }
    ],
    link: '/paywall-builder'
  };

  const activeData = activeModal === 'templates' ? templatesModalData : activeModal === 'preview' ? previewModalData : null;

  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <BlurFade>
          {/* Section Header */}
          <div className="mb-16">
            <div className="mb-6">
              <FeatureTag label="Paywall Builder" color="purple" />
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-foreground">
                  Build paywalls without code
                </h2>
              </div>
              <div className="lg:pt-1">
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Create stunning subscription paywalls with our drag-and-drop builder.
                  Designers and product managers can iterate independently without
                  waiting for app store reviews.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* T-Separator Layout */}
        <BlurFade delay={0.1}>
          <TSeparatorSection
            borderColor="border-border"
            mainFeature={
              <TSeparatorFeatureCard
                className="bg-card border border-border"
                visual={
                  <Image
                    src={getImagePath(imageSet, 'light-feature1.webp')}
                    alt="Visual drag-and-drop editor"
                    fill
                    className="object-cover"
                  />
                }
                contentClassName="p-8"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-3 tracking-tight text-foreground">
                      Visual drag-and-drop editor
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">
                      Design beautiful paywalls with our intuitive visual editor.
                      No coding required—just drag, drop, and customize every element
                      to match your brand perfectly.
                    </p>
                  </div>
                  <SquircleButton href="/paywall-builder" variant="chevron">
                    Explore builder
                  </SquircleButton>
                </div>
              </TSeparatorFeatureCard>
            }
            leftFeature={
              <TSeparatorFeatureCard
                className="bg-card border border-border h-full"
                visual={
                  <Image
                    src={getImagePath(imageSet, 'light-feature2.webp')}
                    alt="Pre-built templates"
                    fill
                    className="object-cover"
                  />
                }
                title="Pre-built templates"
                description="Start with industry-tested templates designed for maximum conversion. Customize colors, fonts, and layouts in seconds."
                onClick={() => setActiveModal('templates')}
                action={
                  <div className="flex justify-end">
                    <span className={cn('flex items-center justify-center size-8 rounded-full bg-muted border border-border')}>
                      <span className="text-base leading-none text-muted-foreground">+</span>
                    </span>
                  </div>
                }
              />
            }
            rightFeature={
              <TSeparatorFeatureCard
                className="bg-card border border-border h-full"
                visual={
                  <Image
                    src={getImagePath(imageSet, 'light-feature3.webp')}
                    alt="Real-time device preview"
                    fill
                    className="object-cover"
                  />
                }
                title="Real-time device preview"
                description="See exactly how your paywall looks on iPhone, iPad, and Android devices before publishing. Preview instantly as you edit."
                onClick={() => setActiveModal('preview')}
                action={
                  <div className="flex justify-end">
                    <span className={cn('flex items-center justify-center size-8 rounded-full bg-muted border border-border')}>
                      <span className="text-base leading-none text-muted-foreground">+</span>
                    </span>
                  </div>
                }
              />
            }
          />
        </BlurFade>
      </div>

      {/* Modal */}
      {activeData && (
        <CardModal
          data={activeData}
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </GridSection>
  );
}

// Section 3: A/B Testing
export function ABTestingLinear() {
  const imageSet = useImageSetVariant();
  const options: SelectorOption[] = [
    {
      id: 'multivariate',
      title: 'Multi-variant experiments',
      description: 'Test A/B/C/D at once',
      image: getImagePath(imageSet, 'light-feature2.webp')
    },
    {
      id: 'targeting',
      title: 'Audience targeting',
      description: 'Segment by any attribute',
      image: getImagePath(imageSet, 'light-feature3.webp')
    },
    {
      id: 'analysis',
      title: 'Statistical analysis',
      description: 'Bayesian significance',
      image: getImagePath(imageSet, 'light-feature1.webp')
    }
  ];

  const features = [
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: '20+ metrics',
      description: 'Conversion, ARPU, LTV, and more.'
    },
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: 'Traffic allocation',
      description: 'Control variant distribution.'
    },
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: 'Auto-winner',
      description: 'Automatic rollout to winning variant.'
    },
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: 'Real-time results',
      description: 'See data as it comes in.'
    }
  ];

  return (
    <LinearFeatureSection
      tag="A/B Testing"
      tagHref="/paywall-ab-testing"
      tagColor="cyan"
      titleBlack="Run experiments"
      titleGray="that matter"
      subtitle="Data-driven decisions."
      description="Test paywalls, pricing, and offers with statistical rigor. Know what works with confidence, not guesswork."
      learnMoreHref="/paywall-ab-testing"
    >
      <InteractiveSelector
        title="Experiment with precision"
        options={options}
        features={features}
      />
    </LinearFeatureSection>
  );
}

// Section 4: Analytics
export function AnalyticsLinear() {
  const imageSet = useImageSetVariant();
  return (
    <LinearFeatureSection
      tag="Analytics"
      tagHref="/ltv-analytics"
      tagColor="green"
      titleBlack="Understand"
      titleGray="your revenue"
      subtitle="Real-time subscription intelligence."
      description="Track MRR, LTV, churn, and cohort retention. Get the metrics you need to grow your subscription business."
      learnMoreHref="/ltv-analytics"
    >
      <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-[20px] overflow-hidden border border-border bg-muted/50 shadow-sm">
          <Image
            src={getImagePath(imageSet, 'light-feature3.webp')}
            alt="Analytics dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="size-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <span className="size-2.5 rounded-full bg-gray-900" />
            </span>
            <div>
              <h4 className="font-medium text-base mb-1 text-foreground">
                Real-time dashboard
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See revenue, trials, and conversions as they happen.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="size-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <span className="size-2.5 rounded-full bg-gray-900" />
            </span>
            <div>
              <h4 className="font-medium text-base mb-1 text-foreground">Cohort analysis</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Understand retention patterns across user segments.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="size-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <span className="size-2.5 rounded-full bg-gray-900" />
            </span>
            <div>
              <h4 className="font-medium text-base mb-1 text-foreground">LTV predictions</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered forecasts for up to 12 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LinearFeatureSection>
  );
}

// =============================================================================
// 7 KEY INTEGRATION CARDS (LINEAR PATTERN: max 7 cards in carousel)
// =============================================================================
const INTEGRATIONS: ModalCardData[] = [
  // Analytics - most popular
  {
    id: 'amplitude',
    title: 'Amplitude',
    subtitle: 'Product analytics integration',
    logo: '/assets/integrations/amplitude.svg',
    image: '/assets/hero/set1/light-feature1.webp',
    paragraphs: [
      'Connect Adapty to Amplitude and send all subscription events automatically. Track user behavior alongside revenue data for complete product insights.',
      'Understand how subscription events correlate with user engagement patterns and feature adoption.',
      'Build custom dashboards combining product usage metrics with subscription revenue to identify your most valuable user journeys.'
    ],
    stats: [
      { value: '40+', label: 'Events synced' },
      { value: '<1s', label: 'Event latency' },
      { value: '100%', label: 'Data accuracy' },
      { value: '0', label: 'Code required' }
    ],
    link: '/integrations/amplitude'
  },
  // Attribution - most popular
  {
    id: 'appsflyer',
    title: 'AppsFlyer',
    subtitle: 'Mobile attribution and marketing analytics',
    logo: '/assets/integrations/appsflyer.svg',
    image: '/assets/hero/set1/light-feature2.webp',
    paragraphs: [
      'Send purchase and subscription events to AppsFlyer automatically. Measure true ROI of your user acquisition campaigns.',
      'Support for SKAN and privacy-first attribution. Track subscriptions back to specific campaigns and creatives.',
      'Calculate actual LTV by campaign, ad group, and creative to optimize your marketing spend on what truly drives paying users.'
    ],
    stats: [
      { value: '100%', label: 'Event accuracy' },
      { value: '<1s', label: 'Event latency' },
      { value: 'SKAN 4', label: 'Support' },
      { value: 'Real-time', label: 'Attribution' }
    ]
  },
  // Marketing automation
  {
    id: 'braze',
    title: 'Braze',
    subtitle: 'Customer engagement platform',
    logo: '/assets/integrations/braze.svg',
    image: '/assets/hero/set1/light-feature3.webp',
    paragraphs: [
      'Trigger personalized campaigns based on subscription events. Send targeted messages to users at risk of churning or ready to upgrade.',
      'Create automated journeys for trial expiration reminders, win-back campaigns, and upsell opportunities.',
      'Sync subscription status in real-time to personalize every touchpoint in your customer communication.'
    ],
    stats: [
      { value: '12', label: 'Event types' },
      { value: 'Real-time', label: 'Sync' },
      { value: '2-way', label: 'Integration' },
      { value: '5 min', label: 'Setup time' }
    ]
  },
  // CDP
  {
    id: 'segment',
    title: 'Segment',
    subtitle: 'Customer data platform',
    logo: '/assets/integrations/segment.svg',
    image: '/assets/hero/set1/light-feature1.webp',
    paragraphs: [
      'Send subscription events to Segment and route them to 300+ destinations. Unify your customer data across all your tools and platforms.',
      'No need to build individual integrations. Connect once to Segment and unlock your entire marketing and analytics stack.',
      'Subscription data flows automatically to your data warehouse, CRM, email tools, and analytics platforms.'
    ],
    stats: [
      { value: '300+', label: 'Destinations' },
      { value: '1', label: 'Integration' },
      { value: 'Real-time', label: 'Streaming' },
      { value: 'Unlimited', label: 'Scale' }
    ]
  },
  // Communication
  {
    id: 'slack',
    title: 'Slack',
    subtitle: 'Team notifications',
    logo: '/assets/integrations/slack.svg',
    image: '/assets/hero/set1/light-feature2.webp',
    paragraphs: [
      'Receive real-time notifications for purchases, trials, and cancellations. Keep your team informed about subscription activity.',
      'Customize which events trigger notifications. Get alerts for high-value purchases, trial expirations, or cancellation spikes.',
      'Celebrate wins with your team as they happen. See new subscribers and revenue milestones in your Slack channels.'
    ],
    stats: [
      { value: '15', label: 'Event types' },
      { value: 'Real-time', label: 'Alerts' },
      { value: 'Custom', label: 'Channels' },
      { value: '2 min', label: 'Setup' }
    ]
  },
  // Developer
  {
    id: 'webhooks',
    title: 'Webhooks',
    subtitle: 'Real-time event notifications',
    logo: '/assets/integrations/webhook.svg',
    image: '/assets/hero/set1/light-feature3.webp',
    paragraphs: [
      'Build custom integrations with our webhook system. Receive all subscription lifecycle events in real-time.',
      'Retry logic and event logging included. Build any custom workflow you need without worrying about reliability.',
      'Full event payloads with all subscription details. Power your backend systems, data pipelines, or custom tools.'
    ],
    stats: [
      { value: '40+', label: 'Event types' },
      { value: '3x', label: 'Auto retry' },
      { value: '7 days', label: 'Event logs' },
      { value: 'REST', label: 'API' }
    ],
    link: '/integrations/webhooks'
  },
  // Ad platforms
  {
    id: 'facebook',
    title: 'Meta Ads',
    subtitle: 'Ad attribution and optimization',
    logo: '/assets/integrations/facebook.svg',
    image: '/assets/hero/set1/light-feature1.webp',
    paragraphs: [
      'Send subscription event data to Meta for ad optimization. Improve targeting with subscription-based custom audiences.',
      'Feed conversion events back to the Meta algorithm. Let machine learning optimize for actual subscribers, not just installs.',
      'Build lookalike audiences from your best subscribers. Find more users who are likely to convert and stay.'
    ],
    stats: [
      { value: 'CAPI', label: 'Integration' },
      { value: 'Real-time', label: 'Events' },
      { value: 'Custom', label: 'Audiences' },
      { value: 'Dedup', label: 'Built-in' }
    ]
  }
];

// Section 5: Integrations Carousel
export function IntegrationsLinear() {
  return (
    <CardCarousel
      tag="Integrations"
      tagColor="amber"
      titleBlack="Connect"
      titleGray="your stack"
      description="Analytics, attribution, marketing automation, and custom webhooks. One-click setup for the tools you already use."
      cards={INTEGRATIONS}
    />
  );
}

// =============================================================================
// MODAL CARD DATA TYPE
// =============================================================================
export type ModalCardData = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  logo?: string; // Optional logo path for integration cards
  paragraphs: string[]; // Linear: exactly 3 paragraphs, 3 lines each
  quote?: {
    text: string;
    author?: string;
    company: string;
  };
  companyLogo?: string; // Monochrome company logo (shown after quote)
  stats?: { value: string; label: string }[]; // Linear: 2x2 grid (4 stats)
  link?: string;
  directLink?: boolean;
};

// =============================================================================
// MODAL ANIMATION VARIANTS
// =============================================================================
const modalBackdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  initial: { opacity: 0, scale: 0.96, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 20 }
};

const modalTransition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1] as const
};

const modalExitTransition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1] as const
};

// =============================================================================
// MODAL CARD COMPONENT
// =============================================================================
function ModalCard({
  data,
  onOpen
}: {
  data: ModalCardData;
  onOpen: () => void;
}) {
  const isDirectLink = data.directLink && !!data.link;
  const shouldReduceMotion = useReducedMotion();

  // Generate a consistent color based on the card title for variety
  const colorIndex = data.title.charCodeAt(0) % 5;
  const bgColors = [
    'bg-gradient-to-br from-purple-50 to-purple-100/50',
    'bg-gradient-to-br from-blue-50 to-blue-100/50',
    'bg-gradient-to-br from-amber-50 to-amber-100/50',
    'bg-gradient-to-br from-green-50 to-green-100/50',
    'bg-gradient-to-br from-pink-50 to-pink-100/50'
  ];
  const iconColors = [
    'text-purple-600',
    'text-blue-600',
    'text-amber-600',
    'text-green-600',
    'text-pink-600'
  ];

  const cardContent = (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative flex flex-col h-full rounded-[20px] overflow-hidden card-polish cursor-pointer'
      )}
    >
      {/* Icon area - clean white background with large monochrome icon */}
      <div className="relative aspect-[16/10] flex items-center justify-center bg-muted px-6 py-8">
        {data.logo ? (
          <Image
            src={data.logo}
            alt={data.title}
            width={200}
            height={80}
            className="object-contain grayscale h-16 w-auto"
          />
        ) : (
          /* Fallback to first letter */
          <span className="text-5xl font-bold text-foreground">
            {data.title.charAt(0)}
          </span>
        )}
      </div>

      {/* Content area */}
      <div className="flex-1 p-6 flex flex-col">
        <h4 className="font-medium text-xl mb-2 tracking-tight text-foreground">
          {data.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 h-10">
          {data.subtitle}
        </p>

        {/* Button - chevron for direct links, plus for modals */}
        <div className="mt-4 flex justify-end">
          <span
            className={cn(
              'flex items-center justify-center size-8 rounded-full',
              'bg-muted border border-border',
              'group-hover:bg-gray-200 group-hover:border-border',
              'transition-colors duration-150 ease-out active:scale-[0.98]'
            )}
          >
            {isDirectLink ? (
              <ChevronRightIcon className="size-3.5 text-muted-foreground" />
            ) : (
              <span className="text-base leading-none text-muted-foreground">+</span>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (isDirectLink && data.link) {
    return <Link href={data.link}>{cardContent}</Link>;
  }

  return <div onClick={onOpen}>{cardContent}</div>;
}

// =============================================================================
// LIGHT THEME MODAL COMPONENT - VERTICAL LAYOUT, FULL HEIGHT, SCROLLABLE
// =============================================================================
function CardModal({
  data,
  isOpen,
  onClose
}: {
  data: ModalCardData;
  isOpen: boolean;
  onClose: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Light theme: softer backdrop */}
          <motion.div
            variants={modalBackdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 bg-gray-950/30 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal container - FULL HEIGHT, VERTICAL LAYOUT */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              variants={modalContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={shouldReduceMotion ? { duration: 0 } : modalTransition}
              className="relative w-full max-w-3xl h-[90vh] bg-card rounded-3xl pointer-events-auto overflow-hidden border border-border shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - fixed position */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 size-10 rounded-full bg-card/90 hover:bg-muted flex items-center justify-center transition-colors duration-150 active:scale-[0.98] backdrop-blur-sm border border-border"
                aria-label="Close modal"
              >
                <svg className="size-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable content - VERTICAL LAYOUT */}
              <div className="flex-1 overflow-y-auto">
                {/* Top: Image - fixed height with subtle glow */}
                <div className="relative w-full h-[300px] sm:h-[350px] bg-muted flex-shrink-0 image-glow">
                  {data.logo ? (
                    <div className="absolute inset-0 flex items-center justify-center px-12">
                      <Image
                        src={data.logo}
                        alt={data.title}
                        width={280}
                        height={100}
                        className="object-contain grayscale h-20 w-auto"
                      />
                    </div>
                  ) : (
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  )}
                </div>

                {/* Bottom: Content - scrollable */}
                <div className="p-8 sm:p-10">
                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3">
                    {data.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    {data.subtitle}
                  </p>

                  {/* Description paragraphs - Linear: exactly 3 paragraphs */}
                  <div className="space-y-4">
                    {data.paragraphs.map((p, i) => (
                      <p key={i} className="text-[15px] text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Thin divider */}
                  <div className="h-px bg-muted my-8" />

                  {/* Quote - LINEAR: centered, NO quote symbols */}
                  {data.quote && (
                    <div className="text-center mb-6">
                      <p className="text-foreground text-base leading-relaxed">
                        {data.quote.text}
                      </p>
                    </div>
                  )}

                  {/* Company Logo - monochrome, centered */}
                  {data.companyLogo && (
                    <div className="flex justify-center mb-6">
                      <Image
                        src={data.companyLogo}
                        alt="Company logo"
                        width={100}
                        height={32}
                        className="h-6 w-auto object-contain grayscale opacity-60"
                      />
                    </div>
                  )}

                  {/* Divider before stats */}
                  {data.stats && data.stats.length > 0 && (
                    <div className="h-px bg-muted mb-6" />
                  )}

                  {/* Stats - LINEAR: 2x2 grid (4 stats) */}
                  {data.stats && data.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {data.stats.slice(0, 4).map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-semibold tracking-tight text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground/70 mt-0.5 font-normal">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action button */}
                  {data.link && (
                    <div className="pt-8">
                      <Link
                        href={data.link}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-150"
                      >
                        Learn more
                        <ChevronRightIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

// =============================================================================
// LINEAR-STYLE CARD CAROUSEL - Standard container width like all sections
// =============================================================================
export function CardCarousel({
  tag,
  tagColor,
  titleBlack,
  titleGray,
  description,
  cards
}: {
  tag: string;
  tagColor?: 'primary' | 'cyan' | 'green' | 'amber' | 'purple' | 'pink';
  titleBlack: string; // First part of title (black)
  titleGray?: string; // Second part of title (gray)
  description: string;
  cards: ModalCardData[];
}) {
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const checkScrollability = React.useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  React.useEffect(() => {
    checkScrollability();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    const newPosition =
      direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
    scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  const activeCard = cards.find((c) => c.id === activeModal);

  return (
    <section className="relative py-16 lg:py-24">
      {/* Header - inside container */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="mb-4">
            <FeatureTag label={tag} color={tagColor} />
          </div>
          {/* LINEAR: Mixed-color title - first words black, rest gray */}
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-3xl">
            <span className="text-foreground">{titleBlack}</span>
            {titleGray && (
              <>
                {' '}
                <span className="text-muted-foreground/70">{titleGray}</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Navigation arrows - inside container */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              'size-10 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-200',
              canScrollLeft
                ? 'hover:bg-muted hover:border-border cursor-pointer'
                : 'opacity-40 cursor-not-allowed'
            )}
            aria-label="Scroll left"
          >
            <ChevronRightIcon className="size-4 text-muted-foreground rotate-180" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              'size-10 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-200',
              canScrollRight
                ? 'hover:bg-muted hover:border-border cursor-pointer'
                : 'opacity-40 cursor-not-allowed'
            )}
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="size-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Carousel - FULL WIDTH, breaks out of container, no clipping */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4 pl-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <ModalCard data={card} onOpen={() => setActiveModal(card.id)} />
          </div>
        ))}
        {/* Spacer at end for scroll padding */}
        <div className="flex-shrink-0 w-6" />
      </div>

      {/* Modal */}
      {activeCard && (
        <CardModal
          data={activeCard}
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}

// Export components
export { FeatureTag, SquircleButton, InteractiveSelector, ModalCard, CardModal };
