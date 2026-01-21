"use client";

import * as React from "react";
import Link from "next/link";
import {
  SparklesIcon,
  ZapIcon,
  MousePointerClickIcon,
  InfinityIcon,
  LinkIcon,
  PaletteIcon,
  RefreshCwIcon,
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

const FEATURES = [
  {
    icon: SparklesIcon,
    title: "Hyper personalized",
    description:
      "AI uses your design and copy to generate paywalls that match your app's DNA.",
  },
  {
    icon: ZapIcon,
    title: "Ready in seconds",
    description: "Get 5 paywalls in under 30 seconds.",
  },
  {
    icon: MousePointerClickIcon,
    title: "One-click simple",
    description: "Drop a link. Get full, ready-to-use paywalls.",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited versions",
    description:
      "Keep generating until it fits. Try as many variants as you need.",
  },
];

const PROCESS_STEPS = [
  {
    icon: LinkIcon,
    step: "Step 1",
    title: "Paste your app link",
    description: "AI extracts your app's visuals, copy, and metadata.",
  },
  {
    icon: PaletteIcon,
    step: "Step 2",
    title: "Get branded paywalls",
    description: "AI creates paywalls using your brand assets.",
  },
  {
    icon: RefreshCwIcon,
    step: "Step 3",
    title: "Generate options",
    description: "Review, regenerate, launch. Repeat until it fits.",
  },
];

const FAQS = [
  {
    question: "How to paywall apps easily?",
    answer:
      "You can build it manually from scratch, create with Adapty no-code Paywall Builder, or generate it with AI Paywall Generator in seconds.",
  },
  {
    question: "Can AI generate an iOS paywall for me?",
    answer:
      "Yes, Adapty's AI Paywall Generator can create iOS paywalls. Drop your App Store link, and you'll get a customizable design. It also works for apps built for Android, Flutter, React Native and other cross-platform frameworks.",
  },
  {
    question: "Can AI A/B test different paywalls?",
    answer:
      "You can quickly create a paywall with AI Generator and then run cross-placement A/B tests in your Adapty workspace. Use AI to forecast the winning variant and grow your revenue faster.",
  },
  {
    question: "What's the best way to implement a paywall in my app?",
    answer:
      "Once your AI paywall is ready, you can add it to your app in your Adapty workspace and go live with no app updates needed. Just make sure the Adapty SDK is installed.",
  },
  {
    question: "How to create a successful paywall that Apple won't reject?",
    answer:
      "The AI Paywall Generator follows Apple's rules, so the paywalls it creates are safe to use in your iOS app.",
  },
];

export function AIPaywallGeneratorFeatures(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* Features */}
        <BlurFade delay={0.1}>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            No design skills needed. Built from your UI
          </h2>
        </BlurFade>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div className="rounded-2xl border bg-card p-6 h-full">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="https://app.adapty.io/registration">
                Try AI Paywall Generator
              </Link>
            </Button>
          </div>
        </BlurFade>

        {/* How it works */}
        <BlurFade delay={0.6}>
          <h2 className="mt-20 text-center text-2xl font-bold tracking-tight md:text-3xl">
            How does AI Paywall Generator work?
          </h2>
        </BlurFade>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <BlurFade key={index} delay={0.7 + index * 0.1}>
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="size-8 text-primary" />
                </div>
                <div className="mt-4 text-sm font-medium text-primary">
                  {step.step}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.9}>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="https://app.adapty.io/registration">
                Generate AI paywalls
              </Link>
            </Button>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={1.0}>
          <div className="mt-20 rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Create personalized AI paywalls in seconds
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Drop your app link. The AI Paywall Generator creates unlimited
              variants based on your app's UI and copy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="https://app.adapty.io/registration">
                  Generate AI paywalls
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/schedule-demo">Schedule a demo</Link>
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* FAQ */}
        <BlurFade delay={1.1}>
          <h2 className="mt-20 text-center text-2xl font-bold tracking-tight md:text-3xl">
            FAQ
          </h2>
        </BlurFade>
        <BlurFade delay={1.2}>
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

        {/* Final CTA */}
        <BlurFade delay={1.3}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              No need to brief a designer. Drop a link and get ready-to-use
              paywalls.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="https://app.adapty.io/registration">
                  Generate AI paywalls
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
