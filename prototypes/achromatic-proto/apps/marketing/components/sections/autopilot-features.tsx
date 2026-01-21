"use client";

import * as React from "react";
import Link from "next/link";
import {
  CheckIcon,
  XIcon,
  BarChart3Icon,
  BanknoteIcon,
  LayoutDashboardIcon,
  BrainCircuitIcon,
  ScaleIcon,
  RocketIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const COMPARISON_DATA = {
  withAutopilot: {
    title: "Testing with market intelligence",
    confidence: "High - backed by market data",
    successRate: "3x more wins",
    timeToUplift: "Weeks",
  },
  goingSolo: {
    title: "Testing by guessing",
    confidence: "Low - \"Hope this works\"",
    successRate: "1 out of 5 experiments",
    timeToUplift: "Months",
  },
};

const MARKET_ADVANTAGES = [
  {
    icon: LayoutDashboardIcon,
    title: "Expertise based on data from 15K+ apps",
  },
  {
    icon: BanknoteIcon,
    title: "$2.1B revenue processed",
  },
  {
    icon: BarChart3Icon,
    title: "Up-to-date benchmarks",
  },
];

const PROCESS_STEPS = [
  {
    step: "Step 1. AI Analyzes",
    title: "Your performance, audited",
    description:
      "Autopilot reviews your app and sums up your key metrics in one place.",
  },
  {
    step: "Step 2. Benchmarks",
    title: "Competitor data & benchmarks",
    description:
      "Get a report that compares your paywall pricing strategy with your peers.",
  },
  {
    step: "Step 3. Growth plan",
    title: "Get personalized growth plan",
    description:
      "You receive a set of A/B test ideas with the highest growth potential, tailored to your app. Launch tests straight away with a few clicks.",
  },
];

const CASE_STUDIES = [
  {
    name: "Text on Pic",
    category: "Health & Fitness",
    results: ["Over 30% MRR growth", "Around 50% growth in ARPU"],
    href: "/case-studies/photo-editing-app-and-autopilot",
  },
  {
    name: "iOS productivity app",
    category: "Productivity",
    results: ["+50% revenue with Adapty Autopilot", "MRR up by 18%"],
    href: "/case-studies/productivity-app-and-autopilot",
  },
];

const FAQS = [
  {
    question: "How do I run A/B tests for subscription paywalls in mobile apps?",
    answer:
      "Set up a control paywall and one or more variants, split traffic between them, and compare trial starts, purchases, and revenue. In Adapty, you can do this natively, and Autopilot suggests which paywall experiments to run first, so you are not guessing.",
  },
  {
    question: "What are the most common mistakes in paywall A/B testing?",
    answer:
      "Typical mistakes are changing too many things at once, stopping tests too early, or looking only at clicks instead of revenue. Adapty Autopilot helps avoid this by proposing focused paywall tests with a clear goal and expected impact.",
  },
  {
    question: "How long should I run a paywall A/B test to get valid results?",
    answer:
      "Run it until you collect enough conversions to be confident in the winner, which for most apps means at least one billing cycle or a few hundred purchases. Autopilot takes your real traffic into account and prioritizes paywall tests that can reach significance faster.",
  },
  {
    question: "What metrics should I track when A/B testing paywalls?",
    answer:
      "Watch how many users see the paywall, start a trial, convert to paid, cancel, and how much revenue each variant generates per user. Adapty Autopilot uses these subscription metrics to judge paywall experiments, so you see which changes really pay off.",
  },
  {
    question:
      "What are the best ways to increase paywall conversion rate in mobile apps?",
    answer:
      "Clarify the value, reduce noise, and make the offer, pricing, and trial structure fit what users saw in onboarding. Autopilot reviews how your paywall performs today and then suggests specific experiments on pricing, trials, and plan mix that are most likely to lift conversion.",
  },
  {
    question:
      "Which paywall elements have the biggest impact on subscription revenue?",
    answer:
      "Price points, billing periods, presence and length of a trial, and the set of plans you show usually matter more than visuals. Adapty Autopilot focuses its recommendations on these high-impact levers and highlights which paywall changes can unlock the most extra revenue.",
  },
];

export function AutopilotFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* You guess. Autopilot knows. */}
        <BlurFade delay={0.1}>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            You guess. Autopilot knows.
          </h2>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* With Autopilot */}
          <BlurFade delay={0.2}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <div className="text-sm font-medium text-primary">
                With Autopilot
              </div>
              <h3 className="mt-2 text-xl font-semibold">
                {COMPARISON_DATA.withAutopilot.title}
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <CheckIcon className="size-4 text-green-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Confidence: {COMPARISON_DATA.withAutopilot.confidence}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <CheckIcon className="size-4 text-green-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Success rate: {COMPARISON_DATA.withAutopilot.successRate}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <CheckIcon className="size-4 text-green-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Time to uplift: {COMPARISON_DATA.withAutopilot.timeToUplift}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild size="sm">
                  <Link href="/schedule-demo">Get a free audit</Link>
                </Button>
              </div>
            </div>
          </BlurFade>

          {/* Going Solo */}
          <BlurFade delay={0.3}>
            <div className="rounded-2xl border bg-card p-8">
              <div className="text-sm font-medium text-muted-foreground">
                Going Solo
              </div>
              <h3 className="mt-2 text-xl font-semibold">
                {COMPARISON_DATA.goingSolo.title}
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XIcon className="size-4 text-red-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Confidence: {COMPARISON_DATA.goingSolo.confidence}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XIcon className="size-4 text-red-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Success rate: {COMPARISON_DATA.goingSolo.successRate}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XIcon className="size-4 text-red-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Time to uplift: {COMPARISON_DATA.goingSolo.timeToUplift}
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* +74% Revenue stat */}
        <BlurFade delay={0.4}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12 text-center">
            <div className="text-5xl font-bold text-primary md:text-6xl">
              +74%
            </div>
            <div className="mt-2 text-xl font-semibold">Higher MRR</div>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              on average for apps that run paywall tests, based on Adapty's
              data.
            </p>
          </div>
        </BlurFade>

        {/* Unfair advantage */}
        <BlurFade delay={0.5}>
          <h2 className="mt-20 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Unfair advantage of market-wide data
          </h2>
        </BlurFade>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {MARKET_ADVANTAGES.map((advantage, index) => (
            <BlurFade key={index} delay={0.6 + index * 0.1}>
              <div className="flex flex-col items-center rounded-lg border bg-card p-8 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <advantage.icon className="size-6 text-primary" />
                </div>
                <p className="mt-4 font-medium">{advantage.title}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* 3-step process */}
        <BlurFade delay={0.7}>
          <h2 className="mt-20 text-center text-2xl font-bold tracking-tight md:text-3xl">
            3-step data-driven process
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Autopilot takes a holistic approach to generate personalized test
            recommendations.
          </p>
        </BlurFade>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <BlurFade key={index} delay={0.8 + index * 0.1}>
              <div className="rounded-2xl border bg-card p-8 h-full">
                <div className="text-sm font-medium text-primary">
                  {step.step}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-muted-foreground">{step.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.9}>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="https://app.adapty.io/registration">
                Try Autopilot for free
              </Link>
            </Button>
          </div>
        </BlurFade>

        {/* Case Studies */}
        <BlurFade delay={1.0}>
          <h2 className="mt-20 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Real growth powered by Autopilot
          </h2>
        </BlurFade>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <BlurFade key={index} delay={1.1 + index * 0.1}>
              <Link
                href={caseStudy.href}
                className="group block rounded-2xl border bg-card p-8 transition-colors hover:border-primary/50"
              >
                <div className="text-sm text-muted-foreground">
                  {caseStudy.category}
                </div>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                  {caseStudy.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {caseStudy.results.map((result, resultIndex) => (
                    <li
                      key={resultIndex}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckIcon className="size-4 text-green-500" />
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  Read more
                  <ArrowRightIcon className="size-4" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={1.2}>
          <div className="mt-20 rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Get clear steps mapped out for you
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Stop guessing. Start growing with data-driven paywall experiments.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/schedule-demo">Boost your growth with Autopilot</Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* FAQ */}
        <BlurFade delay={1.3}>
          <h2 className="mt-20 text-center text-2xl font-bold tracking-tight md:text-3xl">
            FAQ
          </h2>
        </BlurFade>
        <BlurFade delay={1.4}>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
