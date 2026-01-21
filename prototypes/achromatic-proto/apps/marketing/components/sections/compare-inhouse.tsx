"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, XIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

import { GridSection } from "~/components/fragments/grid-section";
import { SectionBackground } from "~/components/fragments/section-background";
import { SiteHeading } from "~/components/fragments/site-heading";
import { BlurFade } from "~/components/fragments/blur-fade";

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

// Advantage sections
const ADVANTAGE_SECTIONS = [
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
    description:
      "Save time and money on building your own backend infrastructure. Sync subscribers' state across iOS, Android, and the Web. Integrate in-app purchases in a few hours with no server code.",
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

// In-house cons
const INHOUSE_CONS = [
  "Need for developing the server and the client side",
  "Constant tech support",
  "Dozens of hundreds of side cases handling",
  "Distracting your team from developing your product",
  "High risk of breaking payments",
];

// Adapty pros
const ADAPTY_PROS = [
  "Just a couple of SDK methods",
  "1 hour to integrate",
  "Analytics, integrations",
  "Paywall A/B testing",
  "Paywall Builder",
];

// Platform stats
const PLATFORM_STATS = [
  { value: "99.9%", label: "SLA reliability" },
  { value: "$1.9B+", label: "of in-app purchases processed/year" },
  { value: "2 weeks", label: "Product updates every two weeks" },
];

// Choose Adapty reasons
const CHOOSE_REASONS = [
  "Increase your subscription revenue and become more profitable.",
  "Have a convenient platform with the best-in-class stability.",
  "Work with a reliable partner with great customer support and success.",
];

// SDKs
const SDKS = [
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
];

export function CompareInhouse(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={5000} />
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
                No-code paywall A/B testing
              </span>
              <span className="rounded-full bg-muted px-4 py-2">
                +3x MRR with Adapty
              </span>
              <span className="rounded-full bg-muted px-4 py-2">
                Flexible subscription SDK
              </span>
            </div>
          </BlurFade>
        </div>

        {/* Why pick Adapty */}
        <BlurFade delay={0.2}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Why pick Adapty over your in-house solution?
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

        {/* Advantage sections */}
        <div className="py-16 space-y-16">
          <h2 className="text-2xl font-bold text-center">
            What are the advantages of using Adapty?
          </h2>
          {ADVANTAGE_SECTIONS.map((section, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.05}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {section.description}
                  </p>
                  {section.link && (
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
                  {section.testimonial ? (
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
                  ) : (
                    <div className="h-48 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/20">
                        24/7 Support
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Comparison */}
        <BlurFade delay={0.4}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Adapty vs In-house solution
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* In-house */}
              <Card className="bg-card/50 border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6 text-red-500">
                    In-house solution
                  </h3>
                  <ul className="space-y-3">
                    {INHOUSE_CONS.map((con, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XIcon className="size-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Adapty */}
              <Card className="bg-card/50 border-green-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6 text-green-500">
                    Adapty
                  </h3>
                  <ul className="space-y-3">
                    {ADAPTY_PROS.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="size-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </BlurFade>

        {/* SDKs */}
        <BlurFade delay={0.45}>
          <div className="py-16">
            <div className="flex flex-wrap justify-center gap-4">
              {SDKS.map((sdk, index) => (
                <Link
                  key={index}
                  href={sdk.href}
                  className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {sdk.name}
                  <ArrowRightIcon className="size-3" />
                </Link>
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
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{reason}</p>
                  </CardContent>
                </Card>
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
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Testimonials */}
        <BlurFade delay={0.6}>
          <div className="py-16">
            <h2 className="text-2xl font-bold text-center mb-12">
              Marketers use Adapty to grow revenue fast
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
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
