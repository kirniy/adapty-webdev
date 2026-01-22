"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, MinusIcon, XIcon, TrendingUpIcon, ZapIcon, ShieldCheckIcon, ClockIcon, CodeIcon } from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

import { BorderBeam } from "~/components/fragments/border-beam";
import { GridSection } from "~/components/fragments/grid-section";
import { SectionBackground } from "~/components/fragments/section-background";
import { SiteHeading } from "~/components/fragments/site-heading";
import { BlurFade } from "~/components/fragments/blur-fade";
import { Spotlight } from "~/components/fragments/spotlight";

// EXACT content from adapty.io/compare/in-house-development (scraped 2026-01-21)

// Why pick Adapty benefits
const BENEFITS = [
  {
    title: "To make your app more profitable",
    description:
      "Our clients get up to a 30% revenue increase in just 2 months with the help of paywall A/B testing.",
  },
  {
    title: "To get a quick subscription ROI",
    description:
      "Growth from the paywall A/B testing will allow you to cover expenses faster and start earning.",
  },
  {
    title: "To save time and money",
    description:
      "Reliable SDK and fast-responsive support will smooth out your interaction with the service.",
  },
];

// Feature sections
const FEATURE_SECTIONS = [
  {
    title: "Cost",
    description:
      "Get a more cost-effective solution with fair pricing. Use the tools that will really grow your revenue with a single paid plan. Invest the money saved on development and maintenance in more important areas of your app business.",
    testimonial: {
      quote:
        "Adapty goes beyond simple subscription management. It's a comprehensive platform that empowers developers to optimize every aspect of their app's monetization strategy.",
      name: "Ilgar Tali",
      title: "Founder & Chief Vision Officer at Smartist",
    },
  },
  {
    title: "Features for subscription monetization",
    description:
      "IAP infrastructure is not the only feature of Adapty. Paywall builder, A/B testing for paywalls, CRM, integrations, and more - all this will help you boost your app's revenue.",
    testimonial: {
      quote:
        "We like it that Adapty provides deep customization possibilities for paywalls and A/B tests. For a long time we've been using Remote config to change elements and localize our paywalls in a matter of minutes without having to wait for another app review.",
      name: "Magnus Olafsson",
      title: "Chief Technology Officer at Smitten",
    },
  },
  {
    title: "Quick start with a ready SDK for any platform",
    bullets: [
      "Save time and money on building your own backend infrastructure.",
      "Sync subscribers' state across iOS, Android, and the Web.",
      "Integrate in-app purchases in a few hours with no server code.",
    ],
    link: "/sdk",
    linkText: "Read more about SDK",
    testimonial: {
      quote:
        "We have tested multiple SDKs for in-app purchases, but Adapty stands out due to its ease of use and reliability. The documentation is clear, and their support team is highly responsive. Great service.",
      name: "Vjacheslav Kononenko",
      title: "Co-Founder at Onelight Apps",
    },
  },
  {
    title: "Responsive customer support",
    description:
      "Adapty gives you 99.9% SLA rate for all API so that you don't have to worry about the technical side of things. Our fast-responsive support is always ready to help you find answers to any questions about the service, as well as assist you in migration.",
    testimonial: null,
  },
];

// In-house vs Adapty comparison
const INHOUSE_DRAWBACKS = [
  "Need for developing the server and the client side",
  "Constant tech support",
  "Dozens of hundreds of side cases handling",
  "Distracting your team from developing your product",
  "High risk of breaking payments",
];

const ADAPTY_ADVANTAGES = [
  "Just a couple of SDK methods",
  "1 hour to integrate",
  "Analytics, integrations",
  "Paywall A/B testing",
  "Paywall Builder",
];

// SDK platforms
const SDK_PLATFORMS = [
  { name: "Swift SDK", href: "/sdk/ios" },
  { name: "Kotlin SDK", href: "/sdk/android" },
  { name: "React Native SDK", href: "/sdk/react-native" },
  { name: "Unity SDK", href: "/sdk/unity" },
  { name: "Flutter SDK", href: "/sdk/flutter" },
  { name: "Capacitor SDK", href: "/sdk/capacitor" },
  { name: "KMP SDK", href: "/sdk/kmp" },
  { name: "FlutterFlow", href: "/sdk/flutterflow" },
  { name: "Web API", href: "/sdk/web" },
  { name: "Stripe", href: "/integrations/stripe" },
];

// Platform stats
const PLATFORM_STATS = [
  { value: "99.9%", label: "SLA reliability" },
  { value: "$16M", label: "of in-app purchases processed/year" },
  { value: "2 weeks", label: "Product updates every two weeks" },
];

// Choose Adapty reasons
const CHOOSE_REASONS = [
  "Increase your subscription revenue and become more profitable.",
  "Have a convenient platform with the best-in-class stability.",
  "Work with a reliable partner with great customer support and success.",
];

// Testimonials
const TESTIMONIALS = [
  {
    quote:
      "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
    name: "Cem Ortabas",
    title: "Co-founder and CEO",
    company: "HubX",
  },
  {
    quote:
      "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.",
    name: "Chris Bick",
    title: "Founder and CEO",
    company: "Bickster",
  },
  {
    quote:
      "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.",
    name: "Yalcin Ozdemir",
    title: "Founder & CEO",
    company: "AppNation",
  },
  {
    quote:
      "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
    name: "Kyle Smith",
    title: "Head of data",
    company: "Smitten Dating",
  },
  {
    quote:
      "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
    name: "Roi Mulia",
    title: "Founder & CEO",
    company: "SocialKit",
  },
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Time comparison visualization - 1 hour vs months
function TimeSavingMagic() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-6 py-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">1 hour</div>
          <div className="text-xs text-muted-foreground">with Adapty</div>
        </div>
        <span className="text-muted-foreground">vs</span>
        <div className="text-center opacity-50">
          <div className="text-2xl font-bold text-muted-foreground">Months</div>
          <div className="text-xs text-muted-foreground">in-house</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-6 py-4">
      <motion.div
        className="text-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="text-2xl font-bold text-primary"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          1 hour
        </motion.div>
        <div className="text-xs text-muted-foreground">with Adapty</div>
      </motion.div>
      <motion.span
        className="text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        vs
      </motion.span>
      <div className="text-center opacity-50">
        <div className="text-2xl font-bold text-muted-foreground">Months</div>
        <div className="text-xs text-muted-foreground">in-house</div>
      </div>
    </div>
  );
}

// Cost savings animation
function CostSavingMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [savings, setSavings] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setSavings(100000);
      return;
    }

    let frame: number;
    const duration = 2000;
    const targetValue = 100000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setSavings(Math.floor(targetValue * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-2 py-2">
        <span className="text-lg font-bold text-green-500">Save $100k+</span>
        <span className="text-sm text-muted-foreground">on development</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 py-2">
      <motion.span
        className="text-lg font-bold text-green-500"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Save ${savings.toLocaleString()}+
      </motion.span>
      <span className="text-sm text-muted-foreground">on development</span>
    </div>
  );
}

// Growth bar chart animation
function GrowthMagic() {
  const shouldReduceMotion = useReducedMotion();
  const bars = [25, 40, 35, 55, 50, 75, 70, 90];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-end gap-1 h-10 justify-center">
        {bars.map((h, i) => (
          <div key={i} className="w-2 bg-primary/60 rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-1 h-10 justify-center">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-2 bg-primary/60 rounded-sm"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2.5,
          }}
        />
      ))}
    </div>
  );
}

function StatusIcon({
  status,
}: {
  status: "check" | "partial" | "no";
}): React.JSX.Element {
  switch (status) {
    case "check":
      return (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20">
          <CheckIcon className="size-4 text-green-500" />
        </div>
      );
    case "partial":
      return (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
          <MinusIcon className="size-4 text-yellow-500" />
        </div>
      );
    case "no":
      return (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
          <XIcon className="size-4 text-red-500" />
        </div>
      );
  }
}

export function CompareInHouse(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredBenefit, setHoveredBenefit] = React.useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);
  const [hoveredDrawback, setHoveredDrawback] = React.useState<number | null>(null);
  const [hoveredAdvantage, setHoveredAdvantage] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={6000} />
      <div className="container relative z-10">
        {/* Hero */}
        <div className="py-16 md:py-24 text-center">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="vs In-house"
              title="Adapty - cheaper and faster than in-house development"
              description="Move to Adapty and double your subscription revenue in 3 months."
            />
          </BlurFade>
          <BlurFade delay={0.1}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg">
                  <Link href="/schedule-demo">Schedule A Demo</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://app.adapty.io/registration">
                    Start for free
                  </Link>
                </Button>
              </motion.div>
            </div>
          </BlurFade>
          <BlurFade delay={0.12}>
            <TimeSavingMagic />
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
              <motion.span
                className="rounded-full bg-muted px-4 py-2 flex items-center gap-2"
                animate={shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CodeIcon className="size-4" />
                No-code paywall A/B testing
              </motion.span>
              <motion.span
                className="rounded-full bg-muted px-4 py-2 flex items-center gap-2"
                animate={shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <TrendingUpIcon className="size-4" />
                +3x MRR with Adapty
              </motion.span>
              <motion.span
                className="rounded-full bg-muted px-4 py-2 flex items-center gap-2"
                animate={shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <ClockIcon className="size-4" />
                Flexible subscription SDK
              </motion.span>
            </div>
          </BlurFade>
        </div>

        {/* Why pick Adapty */}
        <BlurFade delay={0.2}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Why pick Adapty over your in-house solution?
            </h2>
            <CostSavingMagic />
            <div className="grid md:grid-cols-3 gap-8">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredBenefit === index ? -6 : 0,
                    scale: hoveredBenefit === index ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card className={cn(
                    "h-full relative overflow-hidden transition-all duration-200",
                    hoveredBenefit === index && "border-primary/50 shadow-lg"
                  )}>
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />
                    {hoveredBenefit === index && (
                      <BorderBeam
                        size={120}
                        duration={8}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <CardContent className="p-6 relative z-10">
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Feature sections - What are the advantages */}
        <div className="py-16 space-y-16">
          <h2 className="text-2xl font-bold text-center">
            What are the advantages of using Adapty?
          </h2>
          {FEATURE_SECTIONS.map((section, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.05}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  {section.description && (
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-3 mb-6">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <CheckIcon className="size-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.link && section.linkText && (
                    <Link
                      href={section.link}
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      {section.linkText}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  {section.testimonial && (
                    <Card className="bg-card/50">
                      <CardContent className="p-6">
                        <blockquote className="text-sm italic text-muted-foreground mb-4">
                          "{section.testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{section.testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {section.testimonial.title}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Adapty vs In-house solution */}
        <BlurFade delay={0.4}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Adapty vs In-house solution
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* In-house drawbacks */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
              >
                <Card className="h-full bg-card/50 border-red-500/20 relative overflow-hidden hover:shadow-lg transition-all duration-200">
                  <Spotlight className="from-red-500/10 via-red-500/5 to-transparent" size={300} />
                  <CardContent className="p-6 relative">
                    <h3 className="text-lg font-semibold mb-6">In-house solution</h3>
                    <ul className="space-y-3">
                      {INHOUSE_DRAWBACKS.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          onMouseEnter={() => setHoveredDrawback(index)}
                          onMouseLeave={() => setHoveredDrawback(null)}
                        >
                          <motion.div
                            animate={shouldReduceMotion ? undefined : {
                              scale: hoveredDrawback === index ? 1.2 : 1,
                            }}
                            transition={{ type: 'spring', duration: 0.2 }}
                          >
                            <StatusIcon status="no" />
                          </motion.div>
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Adapty advantages */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
              >
                <Card className="h-full bg-card/50 border-green-500/20 relative overflow-hidden hover:shadow-lg transition-all duration-200">
                  <Spotlight className="from-green-500/10 via-green-500/5 to-transparent" size={300} />
                  <CardContent className="p-6 relative">
                    <h3 className="text-lg font-semibold mb-6 text-primary">Adapty</h3>
                    <ul className="space-y-3">
                      {ADAPTY_ADVANTAGES.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          onMouseEnter={() => setHoveredAdvantage(index)}
                          onMouseLeave={() => setHoveredAdvantage(null)}
                        >
                          <motion.div
                            animate={shouldReduceMotion ? undefined : {
                              scale: hoveredAdvantage === index ? 1.2 : 1,
                            }}
                            transition={{ type: 'spring', duration: 0.2 }}
                          >
                            <StatusIcon status="check" />
                          </motion.div>
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </BlurFade>

        {/* SDK platforms */}
        <BlurFade delay={0.45}>
          <div className="py-16">
            <div className="flex flex-wrap justify-center gap-4">
              {SDK_PLATFORMS.map((platform, index) => (
                <motion.div
                  key={index}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.05 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href={platform.href}
                    className="relative inline-flex items-center gap-2 rounded-lg border bg-card/50 px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground overflow-hidden group"
                  >
                    <Spotlight className="from-primary/20 via-primary/5 to-transparent" size={120} />
                    <span className="relative">{platform.name}</span>
                    <ArrowRightIcon className="relative size-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Choose Adapty */}
        <BlurFade delay={0.5}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Choose Adapty over your in-house solution if you want to...
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {CHOOSE_REASONS.map((reason, index) => (
                <motion.div
                  key={index}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card className="h-full bg-card/50 relative overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-200">
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={220} />
                    <CardContent className="p-6 relative">
                      <CheckIcon className="size-6 text-green-500 mb-3" />
                      <p className="text-muted-foreground">{reason}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Platform stats */}
        <BlurFade delay={0.55}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Enterprise-ready platform with short release cycle
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {PLATFORM_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Testimonials */}
        <BlurFade delay={0.6}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Marketers use Adapty to grow revenue fast
            </h2>
            <div className="flex justify-center mb-8">
              <GrowthMagic />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card className="h-full bg-card/50 relative overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={250} />
                    <CardContent className="p-6 relative">
                      <blockquote className="text-sm text-muted-foreground italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
