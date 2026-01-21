"use client";

import * as React from "react";
import Link from "next/link";
import {
  RocketIcon,
  MailIcon,
  UsersIcon,
  BarChart3Icon,
  ArrowRightIcon,
  CodeIcon,
  TrendingUpIcon,
  BuildingIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const FEATURES = [
  {
    title: "Turn your indie/pet project into a business",
    description:
      "Manage your monetization and paywalls with Adapty: Change your paywalls and pricing on the fly without wasting your time; localize and target paywalls to various groups of users; bit by bit turn your pet project into a profitable business.",
    icon: RocketIcon,
  },
  {
    title: "Get regular overview email reports",
    description:
      "Receive daily, weekly, or monthly email reports to stay up to date with the state of your apps. Tailor the report's content to your preferences and choose to access summary or detailed data for specific apps.",
    icon: MailIcon,
    link: "https://adapty.io/docs/reports",
    linkText: "More in the docs",
  },
  {
    title: "Know your customers. Each of them",
    description:
      "Adapty creates a unique user profile for everyone, including paid subscribers. Stay in touch with them and track all the payments.",
    icon: UsersIcon,
  },
  {
    title: "Keep track of your revenue, subscribers, cohorts, and other metrics",
    description:
      "Get your financial and acquisition data in one place in real time. The dashboards are optimized for mobile, so you can check the statistics on the go.",
    icon: BarChart3Icon,
  },
];

const RELATED_ROLES = [
  {
    title: "For developers",
    description:
      "Focus on interesting development - your product. Delegate the boring infrastructure to us.",
    href: "/for-developers",
    icon: CodeIcon,
  },
  {
    title: "For marketers",
    description:
      "Double subscription revenue with A/B testing paywalls and 3rd party integrations.",
    href: "/for-marketers",
    icon: TrendingUpIcon,
  },
  {
    title: "For app owners",
    description: "Instantly available cross-platform subscription analytics.",
    href: "/for-app-owners",
    icon: BuildingIcon,
  },
];

const STATS = [
  { value: "500M+", label: "subscription events / month" },
  { value: "1.4B", label: "users" },
  { value: "2.8M", label: "subscribers / month" },
  { value: "9B", label: "API calls / month" },
];

export function ForIndieFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Startup Callout */}
        <BlurFade delay={0.1}>
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Startup with less than $5K MRR?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Just like you, we're a startup as well and we know the pain. We've
              made a startup plan to help you move faster and focus on what
              matters - your products and users.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="https://startups.adapty.io/en/startup-plan-application">
                  Apply for startup plan
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.2 + index * 0.1}>
              <div className="flex h-full flex-col rounded-lg border bg-card p-8">
                <feature.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">
                  {feature.description}
                </p>
                {feature.link && (
                  <Link
                    href={feature.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {feature.linkText}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.5}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12">
            <blockquote className="text-lg italic text-muted-foreground">
              "Whether it's A/B testing paywalls, predicting LTV, or analyzing
              subscription metrics, Adapty is the ultimate toolkit for app
              success."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold">Ilgar Tali</div>
              <div className="text-sm text-muted-foreground">
                Founder & Chief Vision Officer at Smartist
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.6}>
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border bg-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Discord Community */}
        <BlurFade delay={0.7}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Join SubHub - Discord community for app growth insights
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trusted by a community of mobile developers
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="https://discord.gg/subscriptions-hub">
                  Join now
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Related Roles */}
        <BlurFade delay={0.8}>
          <div className="mt-16">
            <h2 className="text-xl font-semibold">
              Focused on growth and cost-savings at the same time
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {RELATED_ROLES.map((role) => (
                <Link
                  key={role.href}
                  href={role.href}
                  className="flex flex-col rounded-lg border bg-card p-6 transition-colors hover:bg-accent"
                >
                  <role.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold">{role.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {role.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
