"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { content } from "~/config/content";
import { ArrowRight, Play, ChevronRight, Zap, RefreshCw, BarChart3, Target } from "lucide-react";
import { cn } from "~/lib/utils";
// DS2 Attio-specific schematic components
import { SchematicLine, SchematicConnector } from "~/components/ds2/SchematicLine";
import { ConnectionNode, StatusNode } from "~/components/ds2/ConnectionNode";
import { FlowDiagramCard, FlowDiagramResult } from "~/components/ds2/FlowDiagramCard";

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
// - LINEAR SIGNATURE: Tight letter-spacing (-0.02em to -0.04em)
// - LINEAR SIGNATURE: 3D layered screenshot showcase with perspective
// - LINEAR SIGNATURE: Card glow on hover, floating animations
// - Badge as pill with pulse
// - Single primary CTA + text link secondary
// ============================================
function HeroDS1() {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-24 pb-16 md:pt-32 md:pb-24">
      {/* LINEAR SIGNATURE: Subtle radial gradient from accent color */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent)/15%_0%,transparent_50%)]" />

      {/* LINEAR SIGNATURE: Starfield / Particles */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px, 20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        opacity: 0.3
      }} />

      <Container className="relative z-10">
        {/* Centered Content - Linear style */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge - Linear style pill with glow */}
          <a
            href={hero.badge.href}
            className="animate-glow mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-100 hover:border-[var(--color-accent)] hover:text-[var(--text-primary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            {hero.badge.text}
            <ChevronRight className="h-3.5 w-3.5" />
          </a>

          {/* LINEAR SIGNATURE: Two-Tone Headline with tight letter-spacing */}
          <h1 className="heading-linear mb-6 text-4xl font-semibold sm:text-5xl md:text-6xl leading-[1.06] tracking-[var(--letter-spacing-h1)]">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Two-Tone subheadline with tight letter-spacing */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed" style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* CTAs - Linear style: primary solid (white), secondary text link */}
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

        {/* LINEAR SIGNATURE: Enhanced 3D Layered Product Showcase with perspective */}
        <div className="relative mx-auto mt-20 max-w-6xl perspective-container" style={{ perspective: 'var(--perspective-depth)' }}>
          <div className="relative transform-style-3d">
            {/* Background layer - Analytics panel (LEFT) - Enhanced 3D */}
            <div
              className="card-linear animate-float absolute left-0 top-8 w-[35%] rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4"
              style={{
                animationDelay: '0s',
                transform: 'var(--transform-layer-back) rotateY(var(--rotate-back))',
                boxShadow: 'var(--shadow-layered-card)'
              }}>
              <div className="rounded-xl bg-[var(--bg-tertiary)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <div className="text-xs font-medium text-[var(--text-secondary)]">Revenue Analytics</div>
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end gap-1 h-20 mt-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[var(--color-accent)] to-[var(--color-accent)]/50"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs text-[var(--text-muted)]">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            {/* Middle layer - Main Dashboard */}
            <div
              className="relative z-10 mx-auto w-[80%] card-linear rounded-[var(--radius-card)] border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-2"
              style={{ transform: 'translateZ(0)', boxShadow: 'var(--shadow-layered-card)' }}
            >
              <div className="overflow-hidden rounded-2xl">
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

            {/* Front layer - Paywall Builder (RIGHT) - Enhanced 3D */}
            <div
              className="card-linear animate-float absolute right-0 top-16 w-[30%] rounded-[var(--radius-card)] border border-[var(--border-default)] bg-[var(--bg-secondary)] p-3"
              style={{
                animationDelay: '2s',
                transform: 'var(--transform-layer-front) rotateY(var(--rotate-subtle))',
                boxShadow: 'var(--shadow-layered-card)'
              }}>
              <div className="rounded-xl bg-[var(--bg-tertiary)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
                  <div className="text-xs font-medium text-[var(--text-secondary)]">Paywall Builder</div>
                </div>
                {/* Mini paywall mockup */}
                <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 via-transparent to-[var(--color-accent)]/10 border border-[var(--border-subtle)] p-3">
                  <div className="h-3 w-2/3 rounded bg-[var(--text-muted)]/20 mb-2" />
                  <div className="h-2 w-full rounded bg-[var(--text-muted)]/10 mb-4" />
                  <div className="space-y-2">
                    <div className="h-8 rounded bg-[var(--color-accent)]/30" />
                    <div className="h-8 rounded border border-[var(--border-subtle)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating element - Metrics card (TOP RIGHT) */}
            <div className="card-linear animate-float absolute -right-4 -top-4 w-[20%] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3"
              style={{ animationDelay: '1s' }}>
              <div className="text-xs text-[var(--text-muted)] mb-1">Monthly Revenue</div>
              <div className="text-lg font-semibold text-[var(--color-success)]">+23.5%</div>
              <div className="mt-2 h-1 w-full rounded bg-[var(--bg-tertiary)]">
                <div className="h-full w-3/4 rounded bg-[var(--color-success)]" />
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
// - Section numbering [01]
// - Two-tone headline (black + gray)
// - Interactive product tabs in hero
// - Dual button CTAs with ghost variant (8px squircle radius)
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
      {/* ATTIO SIGNATURE: Edge accent line on left side */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent" />

      <Container>
        {/* ATTIO SIGNATURE: Schematic connector lines */}
        <div className="absolute left-8 top-24 hidden lg:block">
          <SchematicLine direction="vertical" withNode="start" className="h-[120px]" />
          <div className="ml-[-4px] mt-2">
            <SchematicConnector path="straight-h" primaryLength="40px" withNodes={false} />
          </div>
        </div>

        {/* Content with badge */}
        <div className="mx-auto max-w-4xl text-center relative">
          {/* Badge - Attio style stroke variant */}
          <div className="mb-6">
            <a
              href={hero.badge.href}
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-transparent px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-[var(--duration-fast)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              {hero.badge.text}
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Headline - Two-tone with SERIF emphasis */}
          <h1 className="headline-attio mb-4 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl" style={{ fontWeight: 'var(--font-weight-default, 500)' }}>
            <span className="text-[var(--text-primary)]">
              The <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>power</span> of subscription
            </span>
            <br className="hidden sm:block" />
            <span className="text-[var(--text-muted)]">
              analytics & <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>paywalls</span>
            </span>
          </h1>

          {/* Two-Tone Subheadline with medium weight */}
          <p className="body-attio mx-auto mb-8 max-w-xl text-lg font-medium">
            <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
            <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
          </p>

          {/* Dual CTAs - Attio uses solid primary + ghost secondary (8px squircle) */}
          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
            </Button>
            <Button variant="ghost" size="lg" href={hero.cta.secondary.href} className="hover:bg-transparent">
              {hero.cta.secondary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* ATTIO SIGNATURE: Flow Diagram Cards - Automation Workflow */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <FlowDiagramCard
              labelIcon={<Zap className="h-4 w-4" />}
              label="Trigger"
              title="User opens app"
              status="active"
            />
            <SchematicConnector path="straight-h" primaryLength="32px" withNodes={false} className="hidden sm:block" />
            <FlowDiagramCard
              labelIcon={<Target className="h-4 w-4" />}
              label="Condition"
              title="Check subscription"
              status="pending"
            />
            <SchematicConnector path="straight-h" primaryLength="32px" withNodes={false} className="hidden sm:block" />
            <FlowDiagramResult
              icon={<BarChart3 className="h-4 w-4" />}
              text="Result"
              highlight="+23% conversion"
            />
          </div>
        </div>

        {/* ATTIO SIGNATURE: Full-width tab bar with border container and vertical dividers */}
        <div className="mx-auto max-w-5xl">
          {/* Tab Bar - Attio style: bordered container, full width, vertical dividers, underline active */}
          <div
            role="tablist"
            className="relative grid grid-cols-4 border border-[var(--border-subtle)] rounded-none mb-6"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const isLast = index === tabs.length - 1;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative py-4 text-sm font-medium transition-colors text-center",
                    "duration-[var(--duration-fast)] ease-[var(--ease-in-out)]",
                    !isLast && "border-r border-[var(--border-subtle)]",
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {tab.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--text-primary)] transition-all duration-150"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content - Product Demo with sidebar + schematic lines */}
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[var(--border-default)] bg-[var(--bg-secondary)] card-cinematic"
          >
            <div className="grid lg:grid-cols-3">
              {/* Sidebar simulation - Attio style with schematic lines */}
              <div className="hidden border-r border-[var(--border-subtle)] bg-[var(--bg-tertiary)] p-4 lg:block relative">
                {/* Schematic line in sidebar */}
                <div className="absolute left-2 top-4 bottom-4">
                  <SchematicLine direction="vertical" withNode="both" className="h-[200px]" />
                </div>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-2 rounded-lg bg-[var(--color-primary)]/10 px-3 py-2 text-sm font-medium text-[var(--color-primary)]">
                    <StatusNode status="active" size="sm" />
                    {tabs.find((t) => t.id === activeTab)?.label}
                  </div>
                  {tabs.filter((t) => t.id !== activeTab).map((tab) => (
                    <div key={tab.id} className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--text-muted)]">
                      <StatusNode status="pending" size="sm" />
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
// - POLAR SIGNATURE: Ultra-minimal hero (just headline + CTAs)
// - POLAR SIGNATURE: Embedded mini-UI previews in feature cards below
// - POLAR SIGNATURE: "Now in Beta" badge
// - Maximum whitespace, code-first aesthetic
// - Fast 150ms animations
// ============================================
function HeroDS3() {
  const { hero } = content;

  return (
    <section className="relative bg-[var(--bg-primary)] pt-24 pb-16 md:pt-32 md:pb-20">
      <Container>
        {/* POLAR SIGNATURE: Ultra-minimal centered content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* POLAR SIGNATURE: "Now in Beta" badge */}
          <div className="mb-8">
            <span className="badge-beta">Now in Beta</span>
          </div>

          {/* Two-Tone Headline - big, bold, minimal */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
            <br />
            <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
          </h1>

          {/* Single line subheadline - ultra minimal */}
          <p className="mb-10 text-lg text-[var(--text-secondary)]">
            {hero.subheadline.primary}
          </p>

          {/* Dual CTAs - Polar style: primary + ghost with arrow */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" href={hero.cta.primary.href}>
              {hero.cta.primary.text}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" href={hero.cta.secondary.href}>
              View documentation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* POLAR SIGNATURE: 3-column embedded mini-UI cards below the hero */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Mini-UI Card 1: Transaction Activity */}
            <div className="mini-ui-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-medium text-[var(--text-secondary)]">Recent Activity</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Pro Monthly", amount: "$9.99", change: "+", color: "text-[var(--color-success)]" },
                  { name: "Premium Annual", amount: "$79.99", change: "+", color: "text-[var(--color-success)]" },
                  { name: "Refund", amount: "$4.99", change: "-", color: "text-[var(--color-error)]" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-primary)]">{tx.name}</span>
                    <span className={`font-mono ${tx.color}`}>{tx.change}{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini-UI Card 2: User Stats */}
            <div className="mini-ui-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
                <span className="text-xs font-medium text-[var(--text-secondary)]">Subscriber Stats</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)] font-mono">2.4k</div>
                  <div className="text-xs text-[var(--text-muted)]">Active subs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-success)] font-mono">94%</div>
                  <div className="text-xs text-[var(--text-muted)]">Retention</div>
                </div>
              </div>
            </div>

            {/* Mini-UI Card 3: Code Preview */}
            <div className="mini-ui-card code-gradient-border p-4 code-gradient-bg">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[var(--color-warning)]" />
                <span className="text-xs font-medium text-[var(--text-secondary)]">Quick Start</span>
              </div>
              <pre className="text-xs font-mono text-[var(--text-primary)] overflow-hidden">
                <code>{`import Adapty

Adapty.activate()
let profile = Adapty.getProfile()`}</code>
              </pre>
            </div>
          </div>

          {/* POLAR SIGNATURE: Green checkmark feature list */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Open source SDK", "Self-hosted option", "Enterprise ready"].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--checkmark-color)] font-bold">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// DS4: Vercel-Inspired Layout
// - VERCEL SIGNATURE: Gradient hero band (pink→purple→blue blur)
// - VERCEL SIGNATURE: Compound shadows (border-ring + shadow)
// - VERCEL SIGNATURE: Bouncy easing animations
// - Grid pattern background
// - Large bold headline
// - Metrics row before CTAs
// ============================================
function HeroDS4() {
  const { hero, stats } = content;

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-20 pb-24 md:pt-28 md:pb-32">
      {/* VERCEL SIGNATURE: Gradient hero band at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] pointer-events-none"
        style={{
          background: 'var(--gradient-hero)',
          opacity: 'var(--gradient-hero-opacity, 0.6)',
          filter: 'blur(var(--gradient-hero-blur, 100px))',
        }}
      />

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

        {/* VERCEL SIGNATURE: Dashboard with compound shadow and bouncy hover */}
        <div className="relative mx-auto mt-16 max-w-5xl group">
          {/* Dashboard card with compound shadow (border-ring + shadow) */}
          <div
            className="relative rounded-xl bg-[var(--bg-tertiary)] p-2 transition-transform duration-[var(--duration-normal)]"
            style={{
              boxShadow: 'var(--shadow-compound)',
              transition: 'transform var(--duration-normal) var(--ease-bouncy)',
            }}
          >
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

          {/* VERCEL SIGNATURE: Floating metrics badges with bouncy animation */}
          <div
            className="absolute -top-4 -right-4 rounded-lg bg-[var(--bg-elevated)] px-4 py-2 border border-[var(--border-default)] transition-transform hover:scale-105"
            style={{
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform var(--duration-fast) var(--ease-bouncy)',
            }}
          >
            <div className="text-xs text-[var(--text-muted)] mb-0.5">Active Users</div>
            <div className="text-lg font-bold text-[var(--color-success)]">+12.4%</div>
          </div>

          <div
            className="absolute -bottom-4 -left-4 rounded-lg bg-[var(--bg-elevated)] px-4 py-2 border border-[var(--border-default)] transition-transform hover:scale-105"
            style={{
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform var(--duration-fast) var(--ease-bouncy)',
            }}
          >
            <div className="text-xs text-[var(--text-muted)] mb-0.5">Conversion Rate</div>
            <div className="text-lg font-bold gradient-text gradient-develop">8.2%</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// DS5: Clerk-Inspired Layout
// - Subtle circuit background pattern
// - Label above headline (simple text, not pill)
// - Pill-shaped buttons
// - Mock sign-up form showcase (Clerk signature)
// - Warm, accessible feel
// ============================================
function HeroDS5() {
  const { hero } = content;

  return (
    <section className="relative bg-[var(--bg-primary)] pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* CLERK SIGNATURE: Subtle geometric background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-100 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Label - Clerk style purple accent (using section-label class) */}
            <div className="mb-6">
              <span className="section-label">
                Subscription Platform
              </span>
            </div>

            {/* Two-Tone Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl">
              <span className="text-[var(--text-primary)]">{hero.headline.primary}</span>
              <br className="hidden sm:block" />
              <span className="text-[var(--text-muted)]">{hero.headline.secondary}</span>
            </h1>

            {/* Two-Tone Subheadline */}
            <p className="mb-10 max-w-xl text-lg leading-relaxed mx-auto lg:mx-0">
              <span className="text-[var(--text-primary)]">{hero.subheadline.primary}</span>
              <span className="text-[var(--text-muted)]"> {hero.subheadline.secondary}</span>
            </p>

            {/* CTAs - Pill shaped buttons (Clerk style - 24px radius from tokens) */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center">
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

          {/* Right: CLERK SIGNATURE - Mock Sign-Up Form Showcase */}
          <div className="relative">
            {/* Form Card */}
            <div className="form-card p-8 max-w-md mx-auto">
              {/* Logo placeholder */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center text-[var(--text-primary)] mb-2">
                Create your account
              </h3>
              <p className="text-sm text-center text-[var(--text-secondary)] mb-6">
                Start your free trial today
              </p>

              {/* OAuth Buttons - Clerk signature */}
              <div className="space-y-3 mb-6">
                <button className="oauth-button w-full flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium text-[var(--text-primary)]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>
                <button className="oauth-button w-full flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium text-[var(--text-primary)]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Continue with GitHub
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--border-subtle)]" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[var(--form-card-bg)] px-2 text-[var(--text-muted)]">or</span>
                </div>
              </div>

              {/* Email input */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-[var(--border-default)] rounded-[var(--input-radius)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white"
                    readOnly
                  />
                </div>
                <button className="w-full py-3 px-4 bg-[var(--color-primary)] text-white font-medium rounded-[var(--button-radius)] hover:opacity-90 transition-opacity">
                  Continue
                </button>
              </div>

              {/* Secured by badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Secured by Adapty
              </div>
            </div>

            {/* Code syntax hint - positioned below form */}
            <div className="mt-6 text-center">
              <code className="text-sm font-mono text-[var(--text-muted)] bg-[var(--bg-secondary)] px-4 py-2 rounded-lg border border-[var(--border-subtle)]">
                {"<PaywallBuilder />"}
              </code>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
