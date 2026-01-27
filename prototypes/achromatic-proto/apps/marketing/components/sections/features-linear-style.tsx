'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

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
// Colored elongated dot + text + optional chevron (clickable if has href)
// =============================================================================
function FeatureTag({
  label,
  href,
  color = 'primary',
}: {
  label: string;
  href?: string;
  color?: 'primary' | 'cyan' | 'green' | 'amber';
}) {
  const colorClasses = {
    primary: 'bg-primary',
    cyan: 'bg-cyan-500',
    green: 'bg-emerald-500',
    amber: 'bg-amber-500',
  };

  const content = (
    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <span className={cn('w-3 h-1.5 rounded-full', colorClasses[color])} />
      <span>{label}</span>
      {href && <ChevronRightIcon className="size-3.5" />}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className={cn('w-3 h-1.5 rounded-full', colorClasses[color])} />
        <span>{label}</span>
        <ChevronRightIcon className="size-3.5" />
      </Link>
    );
  }

  return content;
}

// =============================================================================
// LINEAR-STYLE SQUIRCLE BUTTON
// Three types: with chevron, text only, with plus
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
      <span>{children}</span>
      {variant === 'chevron' && <ChevronRightIcon className="size-4" />}
      {variant === 'plus' && <span className="text-lg leading-none">+</span>}
    </>
  );

  const className = cn(
    'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
    'bg-muted/50 border border-border/50',
    'text-sm font-medium text-foreground',
    'hover:bg-muted hover:border-border transition-colors'
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
    <div className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Header + Options */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
            {subtitle && (
              <p className="text-muted-foreground mb-8">{subtitle}</p>
            )}

            {/* Selectable options with vertical line */}
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-4">
                {options.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedIndex(index)}
                    className={cn(
                      'relative block w-full text-left transition-colors',
                      selectedIndex === index
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {/* Indicator dot on vertical line */}
                    <span
                      className={cn(
                        'absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 size-2 rounded-full transition-colors',
                        selectedIndex === index
                          ? 'bg-primary'
                          : 'bg-border'
                      )}
                    />
                    <span className="font-medium">{option.title}</span>
                    {option.description && (
                      <span className="block text-sm text-muted-foreground mt-0.5">
                        {option.description}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image that changes */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-muted/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
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
            <div className="h-px bg-border/50 my-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    {feature.icon}
                    <span className="font-medium text-foreground">{feature.title}</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
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
  tagColor?: 'primary' | 'cyan' | 'green' | 'amber';
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
  learnMoreHref?: string;
}) {
  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container py-16">
        <BlurFade>
          {/* Tag */}
          <div className="mb-4">
            <FeatureTag label={tag} href={tagHref} color={tagColor} />
          </div>

          {/* Title + Description layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                {title}
              </h2>
            </div>
            <div>
              {subtitle && (
                <p className="text-foreground font-medium mb-2">{subtitle}</p>
              )}
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
              {learnMoreHref && (
                <div className="mt-4">
                  <SquircleButton href={learnMoreHref} variant="chevron">
                    Learn more
                  </SquircleButton>
                </div>
              )}
            </div>
          </div>
        </BlurFade>

        {/* Content area */}
        {children && <div className="mt-12">{children}</div>}
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container py-16">
        <BlurFade>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {heading}
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6">
          {props.map((prop, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={undefined}
                className={cn(
                  'group relative flex flex-col h-full rounded-[24px] overflow-hidden',
                  'bg-muted/30 border border-border/50',
                  'hover:border-border transition-colors cursor-pointer'
                )}
                onClick={() => setOpenIndex(index)}
              >
                {/* Image/illustration area */}
                {prop.image && (
                  <div className="relative aspect-[4/3] bg-muted/50">
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
                  <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {prop.description}
                  </p>

                  {/* Plus button */}
                  <div className="mt-4 flex justify-end">
                    <span
                      className={cn(
                        'flex items-center justify-center size-8 rounded-full',
                        'bg-muted/50 border border-border/50',
                        'group-hover:bg-muted group-hover:border-border transition-colors'
                      )}
                    >
                      <span className="text-lg leading-none">+</span>
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
      icon: <span className="size-4 rounded bg-primary/20" />,
      title: 'Native rendering',
      description: 'Paywalls render natively on iOS and Android.',
    },
    {
      icon: <span className="size-4 rounded bg-primary/20" />,
      title: 'Remote updates',
      description: 'No app store review needed.',
    },
    {
      icon: <span className="size-4 rounded bg-primary/20" />,
      title: 'A/B testing ready',
      description: 'Test any paywall variant.',
    },
    {
      icon: <span className="size-4 rounded bg-primary/20" />,
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
      icon: <span className="size-4 rounded bg-cyan-500/20" />,
      title: '20+ metrics',
      description: 'Conversion, ARPU, LTV, and more.',
    },
    {
      icon: <span className="size-4 rounded bg-cyan-500/20" />,
      title: 'Traffic allocation',
      description: 'Control variant distribution.',
    },
    {
      icon: <span className="size-4 rounded bg-cyan-500/20" />,
      title: 'Auto-winner',
      description: 'Automatic rollout to winning variant.',
    },
    {
      icon: <span className="size-4 rounded bg-cyan-500/20" />,
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
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-video rounded-xl overflow-hidden border bg-muted/30">
          <Image
            src={getImagePath(imageSet, 'light-feature3.webp')}
            alt="Analytics dashboard"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <span className="size-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <h4 className="font-medium">Real-time dashboard</h4>
              <p className="text-sm text-muted-foreground">See revenue, trials, and conversions as they happen.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <span className="size-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <h4 className="font-medium">Cohort analysis</h4>
              <p className="text-sm text-muted-foreground">Understand retention patterns across user segments.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <span className="size-3 rounded-full bg-emerald-500" />
            </span>
            <div>
              <h4 className="font-medium">LTV predictions</h4>
              <p className="text-sm text-muted-foreground">AI-powered forecasts for up to 12 months.</p>
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
  const shouldReduceMotion = useReducedMotion();
  const isDirectLink = data.directLink && !!data.link;

  const cardContent = (
    <motion.div
      whileHover={undefined}
      className={cn(
        'group relative flex flex-col h-full rounded-[24px] overflow-hidden',
        'bg-muted/30 border border-border/50',
        'hover:border-border transition-colors cursor-pointer'
      )}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-muted/50">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content area */}
      <div className="flex-1 p-6 flex flex-col">
        <h4 className="font-semibold text-lg mb-2">{data.title}</h4>
        <p className="text-sm text-muted-foreground flex-1">{data.subtitle}</p>

        {/* Button - chevron for direct links, plus for modals */}
        <div className="mt-4 flex justify-end">
          <span
            className={cn(
              'flex items-center justify-center size-8 rounded-full',
              'bg-muted/50 border border-border/50',
              'group-hover:bg-muted group-hover:border-border transition-colors'
            )}
          >
            {isDirectLink ? (
              <ChevronRightIcon className="size-4" />
            ) : (
              <span className="text-lg leading-none">+</span>
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl lg:max-w-3xl bg-background border rounded-2xl z-50 overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-background/80 backdrop-blur border hover:bg-muted flex items-center justify-center transition-colors"
            >
              <span className="text-xl leading-none rotate-45">+</span>
            </button>

            <div className="p-6 md:p-10">
              {/* Image - smaller, contained */}
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden bg-muted/30 mb-8">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                {data.title}
              </h3>

              {/* Paragraphs */}
              <div className="space-y-4 mb-8">
                {data.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Quote section */}
              {data.quote && (
                <>
                  <div className="h-px bg-border/50 my-8" />
                  <blockquote className="text-center">
                    <p className="text-lg font-medium mb-4">
                      {data.quote.text}
                    </p>
                    <cite className="text-sm text-muted-foreground">
                      {data.quote.company}
                    </cite>
                  </blockquote>
                </>
              )}

              {/* Stats grid */}
              {data.stats && data.stats.length > 0 && (
                <>
                  <div className="h-px bg-border/50 my-8" />
                  <div className="grid grid-cols-2 gap-6">
                    {data.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
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
  tagColor?: 'primary' | 'cyan' | 'green' | 'amber';
  title: string;
  description: string;
  cards: ModalCardData[];
}) {
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // Card width + gap
    const newPosition = direction === 'left'
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount;
    scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  const activeCard = cards.find(c => c.id === activeModal);

  return (
    <GridSection className="relative" hideVerticalGridLines hideBottomGridLine>
      <div className="container py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div>
            <div className="mb-4">
              <FeatureTag label={tag} color={tagColor} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-md">{description}</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[280px] md:w-[320px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ModalCard data={card} onOpen={() => setActiveModal(card.id)} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => scroll('left')}
              disabled={scrollPosition === 0}
              className={cn(
                'size-10 rounded-full border flex items-center justify-center transition-colors',
                scrollPosition === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-muted'
              )}
            >
              <ChevronRightIcon className="size-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-10 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* Modal */}
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
