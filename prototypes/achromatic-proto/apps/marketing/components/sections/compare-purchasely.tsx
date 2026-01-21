"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, MinusIcon, XIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

import { GridSection } from "~/components/fragments/grid-section";
import { SectionBackground } from "~/components/fragments/section-background";
import { SiteHeading } from "~/components/fragments/site-heading";
import { BlurFade } from "~/components/fragments/blur-fade";

// EXACT content from adapty.io/compare/purchasely (scraped 2026-01-21)

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
    title: "Paywall A/B testing with no developer involved",
    bullets: [
      "Use the paywall builder to design and deploy paywalls with no code.",
      "Customize your paywalls with a JSON-based remote config.",
      "Localize and target paywalls by regions, user segments, or custom attributes.",
    ],
    link: "/paywall-ab-testing",
    linkText: "Read more about Paywall A/B testing",
    testimonial: {
      quote:
        "We like it that Adapty provides deep customization possibilities for paywalls and A/B tests. For a long time we've been using Remote config to change elements and localize our paywalls in a matter of minutes without having to wait for another app review.",
      name: "Magnus O.",
      title: "Chief Technology Officer",
    },
  },
  {
    title: "Developer-friendly SDK for any platform",
    bullets: [
      "Save time and money on building your own backend infrastructure.",
      "Sync subscribers' state across iOS, Android, and Web.",
      "Integrate in-app purchases in a few hours with no server code.",
    ],
    link: "/sdk",
    linkText: "Read more about SDK",
    testimonial: {
      quote:
        "Implementing subscriptions just with StoreKit is a common pain point for app developers. Adapty.io takes all of the efforts out of this and offers a simple and modern Swift SDK.",
      name: "Florian S.",
      title: "Indie App Developer",
    },
  },
  {
    title: "Real-time user-level subscription BI",
    bullets: [
      "Track every subscriber instantly across iOS and Android in one place.",
      "Check your app's health by controlling numerous mobile metrics.",
      "Deeply integrate with attribution for cohort ROI and LTV.",
    ],
    link: "/revenue-analytics",
    linkText: "Learn more about Revenue analytics",
    testimonial: {
      quote:
        "Adapty's analytics platform has become an invaluable asset for optimizing our app's monetization strategy. The detailed subscription metrics and LTV prediction tools provide us with real insights to drive our revenue growth.",
      name: "Burak B.",
      title: "Marketing Team Lead",
    },
  },
  {
    title: "Responsive customer support",
    bullets: [
      "Dedicated customer success manager.",
      "Live chat on the website.",
      "Direct communication via Slack.",
    ],
    link: "/schedule-demo",
    linkText: "Request a demo",
    testimonial: {
      quote:
        "We tried on different options among competitors for a long time, but when we found out that the guys on the team have native Turkish speakers, there was no doubt. Our developers and part of the team are from Turkey, so we can solve any issues much faster with Adapty.",
      name: "Alex V.",
      title: "iOS Developer",
    },
  },
];

// Platform stats
const PLATFORM_STATS = [
  { value: "99.3%", label: "SLA reliability" },
  { value: "$16M", label: "of in-app purchases processed/year" },
  { value: "2 weeks", label: "Product updates every two weeks" },
];

// Choose Adapty reasons
const CHOOSE_REASONS = [
  "Increase your subscription revenue and become more profitable.",
  "Have a convenient platform with the best-in-class stability.",
  "Work with a reliable partner with great customer support and success.",
];

// Migration steps
const MIGRATION_STEPS = [
  {
    step: 1,
    description:
      "View the docs or book a demo to learn about the migration process.",
  },
  {
    step: 2,
    description: "Integrate Adapty SDK and release a new version of your app.",
  },
  {
    step: 3,
    description: "Transfer historical data with the help of our team.",
  },
  {
    step: 4,
    description: "Keep tracking and optimizing your app via Adapty Dashboard.",
  },
];

// Comparison table data
const COMPARISON_ITEMS = [
  {
    feature: "In-App purchases SDK",
    adapty: { status: "check", description: "Yes, +100% open source" },
    competitor: { status: "check", description: "" },
  },
  {
    feature: "StoreKit 2 and Billing 5/6 support",
    adapty: { status: "check", description: "" },
    competitor: { status: "check", description: "" },
  },
  {
    feature: "Essential metrics",
    adapty: {
      status: "check",
      description:
        "18 metrics: installs, revenue, MRR, ARR, ARPU, ARPPU, LTV, subscriptions, trials, churn, grace periods, billing issues, and more",
    },
    competitor: { status: "partial", description: "9 metrics" },
  },
  {
    feature: "Cohort analysis",
    adapty: {
      status: "check",
      description:
        "Yes, by payments and by days after the install. Revenue, subscriptions, ARPPU, ARPAS",
    },
    competitor: {
      status: "partial",
      description: "Yes, by payments only. No revenue, only subscribers",
    },
  },
  {
    feature: "Sales funnel",
    adapty: { status: "check", description: "Yes, with segmentation" },
    competitor: { status: "no", description: "" },
  },
  {
    feature: "Subscription retention",
    adapty: { status: "check", description: "Yes, with segmentation" },
    competitor: { status: "partial", description: "Yes, without segmentations" },
  },
  {
    feature: "Conversions",
    adapty: { status: "check", description: "Yes, 10 metrics" },
    competitor: { status: "partial", description: "Yes, 2 metrics" },
  },
  {
    feature: "Revenue and LTV prediction with ML",
    adapty: {
      status: "check",
      description: "Yes, predictions for 3, 6, 9, and 12 months",
    },
    competitor: { status: "no", description: "" },
  },
  {
    feature: "Paywall A/B testing",
    adapty: {
      status: "check",
      description:
        "Test everything: products, prices, images, copies, CTA, positioning and more",
    },
    competitor: { status: "check", description: "" },
  },
  {
    feature: "Onboarding A/B testing",
    adapty: {
      status: "check",
      description: "Yes, test onboarding screens with the remote config",
    },
    competitor: { status: "check", description: "" },
  },
  {
    feature: "Paywall and onboarding localizations",
    adapty: { status: "check", description: "Yes, 70+ languages" },
    competitor: { status: "partial", description: "Yes, 18 languages" },
  },
  {
    feature: "Targeted paywalls and A/B tests",
    adapty: {
      status: "check",
      description:
        "Yes, show specific paywalls or A/B tests to the users from certain countries, devices, ad campaigns, your own custom attributes and more",
    },
    competitor: { status: "partial", description: "No targeting by attribution" },
  },
  {
    feature: "No-code Paywall Builder",
    adapty: { status: "check", description: "" },
    competitor: { status: "check", description: "" },
  },
  {
    feature: "Promotional offers eligibility",
    adapty: {
      status: "check",
      description: "Adapty SDK automatically determines offers eligibility",
    },
    competitor: {
      status: "no",
      description: "A developer must determine offers eligibility",
    },
  },
  {
    feature: "CRM",
    adapty: { status: "check", description: "" },
    competitor: { status: "check", description: "" },
  },
  {
    feature: "Built-in Apple Search Ads attribution",
    adapty: { status: "check", description: "" },
    competitor: { status: "no", description: "" },
  },
  {
    feature: "Customized paywalls based on Apple Search Ads",
    adapty: {
      status: "check",
      description:
        "Yes, show the paywalls optimized for a specific keyword used to install the app",
    },
    competitor: { status: "no", description: "" },
  },
  {
    feature: "Personalised data insights for your apps",
    adapty: { status: "check", description: "" },
    competitor: { status: "no", description: "" },
  },
  {
    feature: "Startup program",
    adapty: {
      status: "check",
      description:
        "Yes, discounted pricing and detailed guides on revenue growth for smaller apps",
    },
    competitor: { status: "no", description: "" },
  },
  {
    feature: "Dedicated customer support team on the enterprise plan",
    adapty: {
      status: "check",
      description:
        "Yes, live communication in shared Slack channels/other messengers. Personalised insights and case studies. Live tech sessions with developers and growth managers",
    },
    competitor: {
      status: "partial",
      description: "Available, limited channels and no growth sessions",
    },
  },
];

// Testimonials (same 5 as Qonversion comparison page)
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

export function ComparePurchasely(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={6000} />
      <div className="container relative z-10">
        {/* Hero */}
        <div className="py-16 md:py-24 text-center">
          <BlurFade delay={0.05}>
            <SiteHeading
              badge="vs Purchasely"
              title="The best Purchasely alternative for growing app revenue"
              description="Advanced growth platform for subscription apps at a reasonable price."
            />
          </BlurFade>
          <BlurFade delay={0.1}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/schedule-demo">Schedule A Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://app.adapty.io/registration">
                  Start for free
                </Link>
              </Button>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="rounded-full bg-muted px-4 py-2">
                Advanced paywall A/B testing
              </span>
              <span className="rounded-full bg-muted px-4 py-2">
                +3x MRR with Adapty
              </span>
              <span className="rounded-full bg-muted px-4 py-2">
                Cohort analysis & LTV prediction
              </span>
            </div>
          </BlurFade>
        </div>

        {/* Why pick Adapty */}
        <BlurFade delay={0.2}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Why pick Adapty over Purchasely?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {BENEFITS.map((benefit, index) => (
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Feature sections */}
        <div className="py-16 space-y-16">
          <h2 className="text-2xl font-bold text-center">
            What exactly do I get with Adapty?
          </h2>
          {FEATURE_SECTIONS.map((section, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.05}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <CheckIcon className="size-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={section.link}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    {section.linkText}
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <Card className="bg-card/50">
                    <CardContent className="p-6">
                      <blockquote className="text-sm italic text-muted-foreground mb-4">
                        "{section.testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">
                          {section.testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {section.testimonial.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Platform stats */}
        <BlurFade delay={0.4}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-4">
              Enterprise-ready platform with short release cycle
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {PLATFORM_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Choose Adapty */}
        <BlurFade delay={0.45}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Choose Adapty over Purchasely if you want to...
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {CHOOSE_REASONS.map((reason, index) => (
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Migration */}
        <BlurFade delay={0.5}>
          <div className="py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                I already use Purchasely, how do I switch to Adapty?
              </h2>
              <h3 className="text-xl font-semibold mb-4">
                Don't be afraid to switch to Adapty
              </h3>
              <p className="text-muted-foreground mb-8">
                Many of our customers are former Purchasely users. You're sure
                to have a smooth migration process along with a special
                introductory offer. Schedule a call to learn more about the
                offer and the migration process.
              </p>
              <Button asChild size="lg">
                <Link href="/schedule-demo">Book a Demo</Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {MIGRATION_STEPS.map((step) => (
                <Card key={step.step} className="bg-card/50">
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-primary mb-2">
                      Step {step.step}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Comparison Table */}
        <BlurFade delay={0.55}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Adapty vs Purchasely feature comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold">
                      Features
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Adapty
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-muted-foreground">
                      Purchasely
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ITEMS.map((item, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 font-medium">{item.feature}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-3">
                          <StatusIcon
                            status={
                              item.adapty.status as "check" | "partial" | "no"
                            }
                          />
                          {item.adapty.description && (
                            <span className="text-sm text-muted-foreground">
                              {item.adapty.description}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-3">
                          <StatusIcon
                            status={
                              item.competitor.status as "check" | "partial" | "no"
                            }
                          />
                          {item.competitor.description && (
                            <span className="text-sm text-muted-foreground">
                              {item.competitor.description}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              The data is relevant as of early 2024
            </p>
          </div>
        </BlurFade>

        {/* Testimonials */}
        <BlurFade delay={0.6}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Marketers use Adapty to grow revenue fast
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-6">
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
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
