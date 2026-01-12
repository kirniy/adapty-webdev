"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { content } from "~/config/content";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

interface HeroProps {
  variant?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5" | "default";
}

export function Hero({ variant = "default" }: HeroProps) {
  switch (variant) {
    case "ds1":
      return <HeroDS1 />;
    case "ds2":
      return <HeroDS2 />;
    case "ds3":
      return <HeroDS3 />;
    case "ds4":
      return <HeroDS4 />;
    case "ds5":
      return <HeroDS5 />;
    default:
      return <HeroDS5 />; // Default to DS5 (balanced)
  }
}

// ============================================
// SAME CONTENT, DIFFERENT WIREFRAMES
// All DS variants use content.hero - only layout/structure differs
// ============================================

// ============================================
// DS1: Linear-Inspired Layout
// - Centered text
// - 3D layered screenshot showcase
// - Badge as pill
// - Single primary CTA + text link secondary
// ============================================
function HeroDS1() {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent" />

      <Container className="relative z-10">
        {/* Centered Content - Linear style */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge - Linear style pill */}
          <a
            href={hero.badge.href}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-100 hover:border-[var(--color-primary)] hover:text-[var(--text-primary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            {hero.badge.text}
            <ChevronRight className="h-3.5 w-3.5" />
          </a>

          {/* Two-Tone Headline - tight letter-spacing like Linear */}
          <h1 className="mb-6 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl md:text-6xl leading-[1.06]">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Two-Tone subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed">
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* CTAs - Linear style: primary solid, secondary text link */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
            </Button>
            <Button variant="text" size="md" href={hero.cta.secondary.href}>
              {hero.cta.secondary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 3D Layered Product Showcase - Signature Linear style */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="relative perspective-[1500px]">
            {/* Background layer - Analytics */}
            <div className="absolute left-0 top-8 w-[35%] transform-gpu -rotate-y-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 shadow-lg transition-transform duration-500 hover:translate-x-2 hover:-translate-y-1">
              <div className="h-40 rounded-lg bg-[var(--bg-tertiary)]">
                <div className="p-3">
                  <div className="text-xs font-medium text-[var(--text-muted)]">Analytics</div>
                  <div className="mt-2 h-2 w-3/4 rounded bg-[var(--color-primary)]/20" />
                  <div className="mt-1 h-2 w-1/2 rounded bg-[var(--color-primary)]/10" />
                </div>
              </div>
            </div>

            {/* Middle layer - Main Dashboard */}
            <div className="relative z-10 mx-auto w-[80%] transform-gpu rounded-2xl border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-2 shadow-2xl">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={hero.image.dashboard}
                  alt="Adapty Dashboard"
                  width={1400}
                  height={720}
                  className="w-full"
                  priority
                />
              </div>
            </div>

            {/* Front layer - Paywall */}
            <div className="absolute right-0 top-16 w-[30%] transform-gpu rotate-y-6 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-3 shadow-xl transition-transform duration-500 hover:-translate-x-2 hover:-translate-y-1">
              <div className="rounded-lg bg-[var(--bg-tertiary)] p-3">
                <div className="text-xs font-medium text-[var(--text-muted)]">Paywall Builder</div>
                <div className="mt-3 aspect-[3/4] rounded bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// DS2: Attio-Inspired Layout
// - Label above headline
// - Two-tone headline (black + gray)
// - Interactive product tabs in hero
// - Dual button CTAs
// ============================================
function HeroDS2() {
  const { hero } = content;
  const [activeTab, setActiveTab] = useState("paywalls");

  const tabs = [
    { id: "paywalls", label: "Paywalls" },
    { id: "experiments", label: "A/B Tests" },
    { id: "analytics", label: "Analytics" },
    { id: "funnel", label: "FunnelFox" },
  ];

  return (
    <section className="relative bg-[var(--bg-primary)] pt-16 pb-0">
      <Container>
        {/* Section Label - Attio style */}
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            Subscription Platform
          </span>
        </div>

        {/* Two-Tone Headline - Attio's signature pattern */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br className="hidden sm:block" />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Two-Tone Subheadline */}
          <p className="mx-auto mb-8 max-w-xl text-lg">
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* Dual CTAs */}
          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
            </Button>
            <Button variant="outline" size="lg" href={hero.cta.secondary.href}>
              {hero.cta.secondary.text}
            </Button>
          </div>
        </div>

        {/* Interactive Product Tabs - Signature Attio pattern */}
        <div className="mx-auto max-w-5xl">
          {/* Tab Navigation */}
          <div className="mb-0 flex justify-center gap-1 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content - Product Demo */}
          <div className="relative mt-6 overflow-hidden rounded-t-2xl border border-b-0 border-[var(--border-default)] bg-[var(--bg-secondary)]">
            <div className="grid lg:grid-cols-3">
              {/* Sidebar simulation */}
              <div className="hidden border-r border-[var(--border-subtle)] bg-[var(--bg-tertiary)] p-4 lg:block">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-lg bg-[var(--color-primary)]/10 px-3 py-2 text-sm font-medium text-[var(--color-primary)]">
                    <div className="h-2 w-2 rounded bg-[var(--color-primary)]" />
                    {tabs.find((t) => t.id === activeTab)?.label}
                  </div>
                  {tabs.filter((t) => t.id !== activeTab).map((tab) => (
                    <div key={tab.id} className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--text-muted)]">
                      <div className="h-2 w-2 rounded bg-[var(--text-muted)]/30" />
                      {tab.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-span-2 p-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={hero.image.dashboard}
                    alt="Adapty Dashboard"
                    width={1400}
                    height={720}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// DS3: Polar-Inspired Layout
// - Ultra-minimal: headline + 1 line + 2 CTAs
// - NO hero image (goes straight to feature cards)
// - Maximum whitespace
// - Code-first aesthetic
// ============================================
function HeroDS3() {
  const { hero } = content;

  return (
    <section className="relative bg-[var(--bg-primary)] pt-24 pb-16 md:pt-32 md:pb-20">
      <Container>
        {/* Ultra-minimal centered content */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Two-Tone Headline - big, bold, minimal */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Two-Tone subheadline */}
          <p className="mb-10 text-lg">
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* Dual CTAs - Polar style: primary + secondary buttons (10px radius from tokens) */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" href={hero.cta.secondary.href}>
              {hero.cta.secondary.text}
            </Button>
          </div>
        </div>

        {/* No hero image - goes straight to feature cards (Polar pattern) */}
      </Container>
    </section>
  );
}

// ============================================
// DS4: Vercel-Inspired Layout
// - Grid pattern background
// - Large bold headline (no gradients on text - just bold)
// - Metrics row before CTAs
// - Dashboard with subtle glow
// ============================================
function HeroDS4() {
  const { hero, stats } = content;

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:64px_64px] opacity-30" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Two-Tone Headline - Vercel uses bold typography, no gimmicks */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Two-Tone Subheadline */}
          <p className="mx-auto mb-8 max-w-xl text-xl">
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* Metrics Row - Vercel's bold numbers approach */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {stats.items.slice(0, 3).map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  {"prefix" in stat && stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" href={hero.cta.secondary.href}>
              {hero.cta.secondary.text}
            </Button>
          </div>
        </div>

        {/* Dashboard with subtle border glow */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Subtle glow effect */}
          <div className="absolute -inset-4 bg-[var(--color-primary)]/10 blur-3xl rounded-3xl" />

          <div className="relative rounded-xl border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-2 shadow-2xl">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={hero.image.dashboard}
                alt="Adapty Dashboard"
                width={1400}
                height={720}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// DS5: Clerk-Inspired Layout
// - Label above headline (simple text, not pill)
// - Pill-shaped buttons
// - Dashboard + mobile preview
// - Warm, accessible feel
// ============================================
function HeroDS5() {
  const { hero } = content;

  return (
    <section className="relative bg-[var(--bg-primary)] pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Label - Clerk style purple accent */}
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold tracking-wide text-[var(--color-primary)] uppercase">
              Subscription Platform
            </span>
          </div>

          {/* Two-Tone Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br className="hidden sm:block" />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Two-Tone Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed">
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* CTAs - Pill shaped buttons (Clerk style - 24px radius from tokens) */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" href={hero.cta.secondary.href}>
              <Play className="h-4 w-4" />
              {hero.cta.secondary.text}
            </Button>
          </div>
        </div>

        {/* Hero Image - Clean, with subtle shadow */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-3 shadow-xl">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={hero.image.dashboard}
                alt="Adapty Dashboard"
                width={1400}
                height={720}
                className="w-full"
                priority
              />
            </div>
          </div>

          {/* Mobile Preview - Positioned elegantly */}
          <div className="absolute -right-4 bottom-0 w-[120px] translate-y-1/4 md:-right-8 md:w-[180px]">
            <Image
              src={hero.image.mobile}
              alt="Adapty Mobile App"
              width={200}
              height={400}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
