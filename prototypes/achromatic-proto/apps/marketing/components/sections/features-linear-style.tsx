'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { createPortal } from 'react-dom';

import { cn } from '@workspace/ui/lib/utils';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { useImageSetVariant, type ImageSetVariant } from '~/lib/debug-context';

// Helper to get image path based on current image set variant
function getImagePath(imageSet: ImageSetVariant, imageName: string): string {
  return `/assets/hero/${imageSet}/${imageName}`;
}

// =============================================================================
// LINEAR-STYLE FEATURE TAG
// Elongated horizontal dot (pill) + text - very Linear aesthetic
// =============================================================================
function FeatureTag({
  label,
  href,
  color = 'primary',
}: {
  label: string;
  href?: string;
  color?: 'primary' | 'cyan' | 'green' | 'amber' | 'purple' | 'pink';
}) {
  const colorClasses = {
    primary: 'bg-primary',
    cyan: 'bg-cyan-500',
    green: 'bg-primary',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  const content = (
    <span className="inline-flex items-center gap-2.5 text-[15px] text-muted-foreground">
      {/* Linear-style elongated pill dot */}
      <span className={cn('w-4 h-1.5 rounded-full', colorClasses[color])} />
      <span>{label}</span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2.5 text-[15px] text-muted-foreground hover:text-foreground transition-colors group"
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
// Pill button with subtle border - cleaner than rounded-lg
// =============================================================================
function SquircleButton({
  children,
  href,
  variant = 'chevron',
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'chevron' | 'text' | 'plus';
  onClick?: () => void;
}) {
  const content = (
    <>
      <span className="text-[14px] font-medium">{children}</span>
      {variant === 'chevron' && <ChevronRightIcon className="size-3.5" />}
      {variant === 'plus' && <span className="text-base leading-none">+</span>}
    </>
  );

  const className = cn(
    'inline-flex items-center gap-1.5 px-4 py-2 rounded-full',
    'bg-muted/40 border border-border/60',
    'text-foreground',
    'hover:bg-muted hover:border-border/80 transition-all duration-200'
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
// Options on left, image on right that changes based on selection
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
  features,
}: {
  title: string;
  subtitle?: string;
  options: SelectorOption[];
  features?: { icon: React.ReactNode; title: string; description: string }[];
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-12 pb-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Header + Options */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
          {subtitle && (
            <p className="text-muted-foreground text-[15px] mb-10">{subtitle}</p>
          )}

          {/* Selectable options with vertical line - Linear style */}
          <div className="relative pl-6">
            {/* Vertical line - subtle */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-1">
              {options.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    'relative block w-full text-left py-3 px-4 -ml-4 rounded-lg transition-all duration-200',
                    selectedIndex === index
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  )}
                >
                  {/* Indicator dot on vertical line */}
                  <span
                    className={cn(
                      'absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 size-2 rounded-full transition-all duration-200',
                      selectedIndex === index
                        ? 'bg-primary scale-100'
                        : 'bg-border scale-75'
                    )}
                  />
                  <span className="font-medium text-[15px]">{option.title}</span>
                  {option.description && (
                    <span className="block text-[13px] text-muted-foreground mt-0.5">
                      {option.description}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image that changes - Linear-style card */}
        <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-border/50 bg-muted/30">
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

      {/* Optional: Small feature grid below separator */}
      {features && features.length > 0 && (
        <>
          <div className="h-px bg-white/5 my-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-2.5 mb-2">
                  {feature.icon}
                  <span className="font-medium text-[14px] text-foreground">{feature.title}</span>
                </div>
                <p className="text-muted-foreground text-[13px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// =============================================================================
// LINEAR-STYLE FEATURE SECTION
// Complete section with tag, title, description, and content
// =============================================================================
export function LinearFeatureSection({
  tag,
  tagHref,
  tagColor,
  title,
  subtitle,
  description,
  children,
  learnMoreHref,
}: {
  tag: string;
  tagHref?: string;
  tagColor?: 'primary' | 'cyan' | 'green' | 'amber' | 'purple' | 'pink';
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
  learnMoreHref?: string;
}) {
  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container max-w-6xl mx-auto px-6 py-[120px] lg:py-[160px]">
        <BlurFade>
          {/* Tag - increased spacing */}
          <div className="mb-6">
            <FeatureTag label={tag} href={tagHref} color={tagColor} />
          </div>

          {/* Title + Description layout - Linear's 2-column header style */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-[40px] font-semibold tracking-tight leading-[1.1]">
                {title}
              </h2>
            </div>
            <div className="lg:pt-1">
              {subtitle && (
                <p className="text-foreground font-medium mb-3 text-[17px]">{subtitle}</p>
              )}
              <p className="text-muted-foreground text-[15px] leading-relaxed">
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

        {/* Content area */}
        {children && <div className="mt-20">{children}</div>}
      </div>
    </GridSection>
  );
}

// =============================================================================
// LINEAR-STYLE 3-COLUMN VALUE PROPS
// Like "Made for modern product teams" section
// =============================================================================
type ValueProp = {
  title: string;
  description: string;
  image?: string;
};

export function ValuePropsSection({
  heading,
  props,
}: {
  heading: string;
  props: ValueProp[];
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container max-w-6xl mx-auto px-6 py-[120px] lg:py-[160px]">
        <BlurFade>
          <h2 className="text-[40px] font-semibold tracking-tight leading-[1.1] text-center mb-20">
            {heading}
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-4">
          {props.map((prop, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'group relative flex flex-col h-full rounded-[20px] overflow-hidden',
                  'bg-muted/20 border border-white/5',
                  'hover:border-white/10 hover:bg-muted/30 hover:-translate-y-0.5',
                  'transition-all duration-200 ease-out cursor-pointer'
                )}
                onClick={() => setOpenIndex(index)}
              >
                {/* Image/illustration area */}
                {prop.image && (
                  <div className="relative aspect-[16/10] bg-muted/40">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 tracking-tight">{prop.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">
                    {prop.description}
                  </p>

                  {/* Plus button - Linear style */}
                  <div className="mt-5 flex justify-end">
                    <span
                      className={cn(
                        'flex items-center justify-center size-8 rounded-full',
                        'bg-white/5 border border-white/10',
                        'group-hover:bg-white/10 group-hover:border-white/20',
                        'transition-all duration-200'
                      )}
                    >
                      <span className="text-base leading-none">+</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// COMPLETE LINEAR-STYLE HOMEPAGE SECTIONS
// =============================================================================

// Section 1: Value Props (3 cards)
export function AdaptyValueProps() {
  const imageSet = useImageSetVariant();
  const props: ValueProp[] = [
    {
      title: 'Purpose-built for subscription apps',
      description: 'Everything you need to manage, optimize, and grow in-app subscriptions. From paywalls to analytics.',
      image: getImagePath(imageSet, 'light-feature1.webp'),
    },
    {
      title: 'Designed for speed',
      description: 'Ship paywall changes in minutes, not weeks. No app store reviews, no code deploys required.',
      image: getImagePath(imageSet, 'light-feature2.webp'),
    },
    {
      title: 'Data-driven optimization',
      description: 'A/B test everything. Get statistical significance fast. Make decisions with confidence.',
      image: getImagePath(imageSet, 'light-feature3.webp'),
    },
  ];

  return (
    <ValuePropsSection
      heading="Made for subscription app teams"
      props={props}
    />
  );
}

// Section 2: Paywall Builder (with interactive selector)
export function PaywallBuilderLinear() {
  const imageSet = useImageSetVariant();
  const options: SelectorOption[] = [
    {
      id: 'visual-editor',
      title: 'Visual drag-and-drop editor',
      description: 'No coding required',
      image: getImagePath(imageSet, 'light-feature1.webp'),
    },
    {
      id: 'templates',
      title: 'Pre-built templates',
      description: 'Industry-tested designs',
      image: getImagePath(imageSet, 'light-feature2.webp'),
    },
    {
      id: 'preview',
      title: 'Real-time device preview',
      description: 'See changes instantly',
      image: getImagePath(imageSet, 'light-feature3.webp'),
    },
  ];

  const features = [
    {
      icon: <span className="size-3.5 rounded bg-primary/20" />,
      title: 'Native rendering',
      description: 'Paywalls render natively on iOS and Android.',
    },
    {
      icon: <span className="size-3.5 rounded bg-primary/20" />,
      title: 'Remote updates',
      description: 'No app store review needed.',
    },
    {
      icon: <span className="size-3.5 rounded bg-primary/20" />,
      title: 'A/B testing ready',
      description: 'Test any paywall variant.',
    },
    {
      icon: <span className="size-3.5 rounded bg-primary/20" />,
      title: 'Analytics built-in',
      description: 'Track conversions and revenue.',
    },
  ];

  return (
    <LinearFeatureSection
      tag="Paywall Builder"
      tagHref="/paywall-builder"
      tagColor="primary"
      title="Build paywalls without code"
      subtitle="Visual editor for everyone."
      description="Create stunning subscription paywalls with our drag-and-drop builder. Designers and product managers can iterate independently."
      learnMoreHref="/paywall-builder"
    >
      <InteractiveSelector
        title="Choose how you build"
        options={options}
        features={features}
      />
    </LinearFeatureSection>
  );
}

// Section 3: A/B Testing (with interactive selector)
export function ABTestingLinear() {
  const imageSet = useImageSetVariant();
  const options: SelectorOption[] = [
    {
      id: 'multivariate',
      title: 'Multi-variant experiments',
      description: 'Test A/B/C/D at once',
      image: getImagePath(imageSet, 'light-feature2.webp'),
    },
    {
      id: 'targeting',
      title: 'Audience targeting',
      description: 'Segment by any attribute',
      image: getImagePath(imageSet, 'light-feature3.webp'),
    },
    {
      id: 'analysis',
      title: 'Statistical analysis',
      description: 'Bayesian significance',
      image: getImagePath(imageSet, 'light-feature1.webp'),
    },
  ];

  const features = [
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: '20+ metrics',
      description: 'Conversion, ARPU, LTV, and more.',
    },
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: 'Traffic allocation',
      description: 'Control variant distribution.',
    },
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: 'Auto-winner',
      description: 'Automatic rollout to winning variant.',
    },
    {
      icon: <span className="size-3.5 rounded bg-cyan-500/20" />,
      title: 'Real-time results',
      description: 'See data as it comes in.',
    },
  ];

  return (
    <LinearFeatureSection
      tag="A/B Testing"
      tagHref="/paywall-ab-testing"
      tagColor="cyan"
      title="Run experiments that matter"
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

// Section 4: Analytics (simpler section)
export function AnalyticsLinear() {
  const imageSet = useImageSetVariant();
  return (
    <LinearFeatureSection
      tag="Analytics"
      tagHref="/ltv-analytics"
      tagColor="green"
      title="Understand your revenue"
      subtitle="Real-time subscription intelligence."
      description="Track MRR, LTV, churn, and cohort retention. Get the metrics you need to grow your subscription business."
      learnMoreHref="/ltv-analytics"
    >
      <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-[20px] overflow-hidden border border-border/50 bg-muted/30">
          <Image
            src={getImagePath(imageSet, 'light-feature3.webp')}
            alt="Analytics dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="size-2.5 rounded-full bg-primary" />
            </span>
            <div>
              <h4 className="font-medium text-[15px] mb-1">Real-time dashboard</h4>
              <p className="text-[15px] text-muted-foreground leading-relaxed">See revenue, trials, and conversions as they happen.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="size-2.5 rounded-full bg-primary" />
            </span>
            <div>
              <h4 className="font-medium text-[15px] mb-1">Cohort analysis</h4>
              <p className="text-[15px] text-muted-foreground leading-relaxed">Understand retention patterns across user segments.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="size-2.5 rounded-full bg-primary" />
            </span>
            <div>
              <h4 className="font-medium text-[15px] mb-1">LTV predictions</h4>
              <p className="text-[15px] text-muted-foreground leading-relaxed">AI-powered forecasts for up to 12 months.</p>
            </div>
          </div>
        </div>
      </div>
    </LinearFeatureSection>
  );
}

// Section 5: Integrations Carousel
export function IntegrationsLinear() {
  const imageSet = useImageSetVariant();
  const cards: ModalCardData[] = [
    {
      id: 'amplitude',
      title: 'Amplitude',
      subtitle: 'Send subscription events to your product analytics.',
      image: getImagePath(imageSet, 'light-feature1.webp'),
      paragraphs: [
        'Connect Adapty to Amplitude and send all subscription events automatically.',
        'Track user behavior alongside revenue data for complete product insights.',
        'No code required - just connect your Amplitude API key.',
      ],
      link: '/integrations/amplitude',
    },
    {
      id: 'appsflyer',
      title: 'AppsFlyer',
      subtitle: 'Attribute revenue to marketing campaigns.',
      image: getImagePath(imageSet, 'light-feature2.webp'),
      paragraphs: [
        'Send purchase and subscription events to AppsFlyer automatically.',
        'Measure true ROI of your user acquisition campaigns.',
        'Support for SKAN and privacy-first attribution.',
      ],
      stats: [
        { value: '100%', label: 'Event accuracy' },
        { value: '<1s', label: 'Event latency' },
      ],
    },
    {
      id: 'slack',
      title: 'Slack',
      subtitle: 'Get notified about important events.',
      image: getImagePath(imageSet, 'light-feature3.webp'),
      paragraphs: [
        'Receive real-time notifications for purchases, trials, and cancellations.',
        'Customize which events trigger notifications.',
        'Keep your team informed without checking dashboards.',
      ],
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      subtitle: 'Send events to any endpoint.',
      image: getImagePath(imageSet, 'light-feature1.webp'),
      paragraphs: [
        'Build custom integrations with our webhook system.',
        'Receive all subscription lifecycle events in real-time.',
        'Retry logic and event logging included.',
      ],
      link: '/integrations/webhooks',
    },
  ];

  return (
    <CardCarousel
      tag="Integrations"
      tagColor="amber"
      title="Connect your tools"
      description="Send subscription events to your analytics, marketing, and CRM tools. 30+ integrations available out of the box."
      cards={cards}
    />
  );
}

// =============================================================================
// LINEAR-STYLE MODAL CARD
// Card that opens as modal when clicked (+ button)
// Modal contains: illustration, title, paragraphs, quote, stats
// =============================================================================
type ModalCardData = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  quote?: {
    text: string;
    company: string;
  };
  stats?: { value: string; label: string }[];
  link?: string; // Link shown inside modal as "Learn more" button
  directLink?: boolean; // If true, card navigates directly instead of opening modal
};

function ModalCard({
  data,
  onOpen,
}: {
  data: ModalCardData;
  onOpen: () => void;
}) {
  const isDirectLink = data.directLink && !!data.link;

  const cardContent = (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group relative flex flex-col h-full rounded-[20px] overflow-hidden',
        'bg-muted/20 border border-white/5',
        'hover:border-white/10 hover:bg-muted/30 hover:-translate-y-0.5',
        'transition-all duration-200 ease-out cursor-pointer'
      )}
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] bg-muted/40">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content area */}
      <div className="flex-1 p-6 flex flex-col">
        <h4 className="font-semibold text-lg mb-2 tracking-tight">{data.title}</h4>
        <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">{data.subtitle}</p>

        {/* Button - chevron for direct links, plus for modals */}
        <div className="mt-5 flex justify-end">
          <span
            className={cn(
              'flex items-center justify-center size-8 rounded-full',
              'bg-white/5 border border-white/10',
              'group-hover:bg-white/10 group-hover:border-white/20',
              'transition-all duration-200'
            )}
          >
            {isDirectLink ? (
              <ChevronRightIcon className="size-3.5" />
            ) : (
              <span className="text-base leading-none">+</span>
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
// MODAL COMPONENT WITH PORTAL
// Uses createPortal to render outside the component tree
// =============================================================================
function CardModal({
  data,
  isOpen,
  onClose,
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-[12px] z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl lg:max-w-3xl bg-background/95 border border-white/[0.08] rounded-[24px] z-[101] overflow-hidden shadow-2xl"
          >
            {/* Scrollable content */}
            <div className="h-full overflow-y-auto">
              <div className="p-6 md:p-10">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 size-10 rounded-full bg-muted/60 border border-border/60 hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <span className="text-xl leading-none rotate-45">+</span>
                </button>

                {/* Image - smaller, contained */}
                <div className="relative h-48 md:h-64 rounded-[16px] overflow-hidden bg-muted/30 mb-8 border border-border/40">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[32px] font-semibold tracking-tight leading-[1.1] mb-8">
                  {data.title}
                </h3>

                {/* Paragraphs */}
                <div className="space-y-4 mb-8">
                  {data.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground text-[15px] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Quote section */}
                {data.quote && (
                  <>
                    <div className="h-px bg-white/5 my-10" />
                    <blockquote className="text-center py-6">
                      <p className="text-xl font-medium mb-4 leading-relaxed">
                        "{data.quote.text}"
                      </p>
                      <cite className="text-[14px] text-muted-foreground not-italic">
                        {data.quote.company}
                      </cite>
                    </blockquote>
                  </>
                )}

                {/* Stats grid */}
                {data.stats && data.stats.length > 0 && (
                  <>
                    <div className="h-px bg-white/5 my-10" />
                    <div className="grid grid-cols-2 gap-8 py-6">
                      {data.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-[32px] font-semibold tracking-tight leading-none mb-2">{stat.value}</div>
                          <div className="text-[14px] text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Action buttons */}
                {data.link && (
                  <div className="mt-8 flex gap-4">
                    <SquircleButton href={data.link} variant="chevron">
                      Learn more
                    </SquircleButton>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

// =============================================================================
// LINEAR-STYLE CARD CAROUSEL
// Carousel with modal cards, navigation arrows
// =============================================================================
export function CardCarousel({
  tag,
  tagColor,
  title,
  description,
  cards,
}: {
  tag: string;
  tagColor?: 'primary' | 'cyan' | 'green' | 'amber' | 'purple' | 'pink';
  title: string;
  description: string;
  cards: ModalCardData[];
}) {
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const checkScrollability = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  React.useEffect(() => {
    checkScrollability();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollability);
      return () => el.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    const newPosition = direction === 'left'
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;
    scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  const activeCard = cards.find(c => c.id === activeModal);

  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container max-w-6xl mx-auto px-6 py-[120px] lg:py-[160px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <div className="mb-5">
              <FeatureTag label={tag} color={tagColor} />
            </div>
            <h2 className="text-[40px] font-semibold tracking-tight leading-[1.1]">{title}</h2>
          </div>
          <p className="text-muted-foreground text-[15px] max-w-md leading-relaxed md:pt-10">{description}</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[320px] md:w-[360px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ModalCard data={card} onOpen={() => setActiveModal(card.id)} />
              </div>
            ))}
          </div>

          {/* Navigation arrows - Linear style */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                'size-10 rounded-full border border-border/60 flex items-center justify-center transition-all duration-200',
                canScrollLeft
                  ? 'hover:bg-muted hover:border-border/80'
                  : 'opacity-40 cursor-not-allowed'
              )}
            >
              <ChevronRightIcon className="size-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                'size-10 rounded-full border border-border/60 flex items-center justify-center transition-all duration-200',
                canScrollRight
                  ? 'hover:bg-muted hover:border-border/80'
                  : 'opacity-40 cursor-not-allowed'
              )}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* Modal - rendered via portal */}
        {activeCard && (
          <CardModal
            data={activeCard}
            isOpen={!!activeModal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </div>
    </GridSection>
  );
}

// Export components for use elsewhere
export { FeatureTag, SquircleButton, InteractiveSelector, ModalCard, CardModal };
