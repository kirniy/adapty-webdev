"use client";

import Image from "next/image";
import {
  Flask,
  ShieldCheck,
  ChartBar,
  Layout,
  Globe,
  Plugs,
} from "@phosphor-icons/react/dist/ssr";
import { Card, CardIcon } from "@/components/ui/Card";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

export function Features() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24 relative">
      {/* ══════════════════════════════════════════════════════════════
         SCHEMATIC DECORATIONS - Bento Grid Connections
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-12 bottom-12 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.3} />
      </div>

      {/* Top connector beam */}
      <div className="absolute top-0 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min relative">
        {/* Grid intersection nodes - top row with SONAR effect */}
        <div className="absolute -top-3 left-[33%] hidden lg:block">
          <div className="relative">
            <ConnectionNode size="sm" accent filled />
            {/* Sonar ripple rings */}
            <div className="absolute inset-0 w-3 h-3 -translate-x-0.5 -translate-y-0.5 rounded-full border border-[#c1ff72] animate-sonar opacity-60" />
            <div className="absolute inset-0 w-3 h-3 -translate-x-0.5 -translate-y-0.5 rounded-full border border-[#c1ff72] animate-sonar opacity-40" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
        <div className="absolute -top-3 left-[66%] hidden lg:block">
          <div className="relative">
            <ConnectionNode size="sm" />
            {/* Sonar ripple rings */}
            <div className="absolute inset-0 w-3 h-3 -translate-x-0.5 -translate-y-0.5 rounded-full border border-stone-400 animate-sonar opacity-40" />
          </div>
        </div>

        {/* 4A. Paywall A/B Testing (Large - spans 2 cols) */}
        <Card className="lg:col-span-2 flex flex-col md:flex-row gap-8 items-center overflow-hidden p-8 lg:p-12 relative group">
          {/* Corner schematic nodes */}
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ConnectionNode size="xs" />
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ConnectionNode size="xs" />
          </div>

          <div className="flex-1 z-10">
            <CardIcon color="blue">
              <Flask size={24} weight="duotone" />
            </CardIcon>
            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-3">
              Test your way to higher conversions
            </h3>
            <p className="text-stone-500 mb-6">
              Run experiments with statistical confidence. Test paywalls,
              pricing, and audience segmentation.
            </p>
            <ul className="space-y-2 text-sm font-medium text-stone-600">
              <li className="flex items-center gap-2">
                <span className="text-brand-lime font-bold">+23%</span>{" "}
                Conversion Rate
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-lime font-bold">+18%</span> Revenue
                per User
              </li>
            </ul>
          </div>

          {/* A/B Test Visual - Real SDK Screenshot */}
          <div className="flex-1 w-full relative min-h-[200px] rounded-xl overflow-hidden shadow-lg border border-stone-200">
            <Image
              src="/images/features/sdk-install-cover.webp"
              alt="Adapty SDK integration and A/B testing"
              fill
              className="object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none" />
          </div>
        </Card>

        {/* 4B. Refund Saver */}
        <Card className="flex flex-col p-8 relative group">
          {/* Schematic connection to previous card */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
            <ConnectionNode size="sm" />
          </div>

          <CardIcon color="red">
            <ShieldCheck size={24} weight="duotone" />
          </CardIcon>
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            Recover revenue automatically
          </h3>
          <p className="text-stone-500 text-sm mb-auto">
            Reduce refunds with intelligent intervention. Save up to 40% of
            refund requests.
          </p>
          <div className="mt-6 bg-red-50/50 rounded-lg p-4 border border-red-100 relative">
            <span className="text-2xl font-semibold text-red-600 block">
              40%
            </span>
            <span className="text-xs text-red-400 font-medium">
              Refunds Saved
            </span>
            {/* Pulsing indicator with SONAR ripple effect */}
            <div className="absolute -top-1 -right-1">
              <div className="relative">
                <ConnectionNode size="xs" filled accent pulse />
                {/* Sonar rings emanating from the dot */}
                <div className="absolute inset-0 w-2 h-2 -translate-x-0.5 -translate-y-0.5 rounded-full border border-[#c1ff72] animate-sonar" />
                <div className="absolute inset-0 w-2 h-2 -translate-x-0.5 -translate-y-0.5 rounded-full border border-[#c1ff72] animate-sonar" style={{ animationDelay: "0.7s" }} />
              </div>
            </div>
          </div>
        </Card>

        {/* Row divider beam - with glowing noodle animation */}
        <div className="col-span-full hidden lg:block my-4 relative">
          <SchematicLine direction="horizontal" length="100%" withNode="both" delay={0.6} />
          {/* Animated beam flowing across */}
          <div className="absolute top-0 left-0 right-0">
            <BeamNoodle direction="horizontal" length="100%" from="left" delay={1.0} />
          </div>
          {/* Center sonar node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#c1ff72] shadow-[0_0_10px_rgba(193,255,114,0.8)]" />
              <div className="absolute inset-0 rounded-full border border-[#c1ff72] animate-sonar" />
              <div className="absolute inset-0 rounded-full border border-[#c1ff72] animate-sonar" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
        </div>

        {/* 4C. Subscription Analytics (Dark) */}
        <Card variant="dark" className="flex flex-col p-0 relative overflow-hidden group">
          {/* Corner nodes */}
          <div className="absolute top-2 right-2 z-10">
            <ConnectionNode size="xs" accent />
          </div>

          {/* Real Analytics Screenshot */}
          <div className="relative h-[180px] w-full">
            <Image
              src="/images/features/charts-cover.webp"
              alt="Adapty analytics dashboard with MRR and LTV charts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
          </div>

          <div className="p-8 pt-0 -mt-8 relative z-10">
            <CardIcon className="bg-stone-800 text-brand-lime">
              <ChartBar size={24} weight="duotone" />
            </CardIcon>
            <h3 className="text-xl font-semibold tracking-tight mb-2">
              Understand your business
            </h3>
            <p className="text-stone-400 text-sm">
              Real-time insights into MRR, LTV, and Churn.
            </p>
          </div>

          {/* Vertical beam decoration */}
          <div className="absolute bottom-4 right-4 h-16">
            <SchematicLine direction="vertical" length="100%" accent delay={1.2} />
          </div>
        </Card>

        {/* 4D. No-Code Paywall Builder (Large - spans 2 cols, lime) */}
        <Card
          variant="lime"
          className="lg:col-span-2 flex flex-col md:flex-row gap-8 items-center p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Schematic connection between cards */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
            <ConnectionNode size="md" filled />
          </div>

          {/* Builder Visual - Real Paywall Screenshot */}
          <div className="flex-1 order-2 md:order-1 w-full relative h-[240px] rounded-xl overflow-hidden shadow-xl border border-stone-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/features/paywalls-cover.webp"
              alt="Adapty paywall builder interface"
              fill
              className="object-cover object-top"
            />
            {/* Corner schematic */}
            <div className="absolute top-2 left-2 z-10">
              <ConnectionNode size="xs" />
            </div>
            <div className="absolute top-2 right-2 z-10">
              <ConnectionNode size="xs" />
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <CardIcon className="bg-white text-green-600 shadow-sm">
              <Layout size={24} weight="duotone" />
            </CardIcon>
            <h3 className="text-2xl font-semibold tracking-tight mb-3 text-stone-900">
              Build paywalls without code
            </h3>
            <p className="text-stone-600">
              Design, test, and deploy in minutes. Instant updates without app
              release.
            </p>
          </div>
        </Card>

        {/* 4E & 4F - Small stacked cards with vertical beam connection */}
        <div className="grid grid-rows-2 gap-6 relative">
          {/* Vertical beam connecting the two cards */}
          <div className="absolute left-6 top-[45%] h-[10%] hidden lg:block">
            <SchematicLine direction="vertical" length="100%" accent delay={1.4} />
          </div>

          {/* Web-to-App Bridge */}
          <Card className="flex items-center gap-4 p-6 relative group">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
              <ConnectionNode size="sm" />
            </div>

            <CardIcon color="orange" className="mb-0 w-10 h-10 shrink-0">
              <Globe size={20} weight="duotone" />
            </CardIcon>
            <div>
              <h4 className="font-semibold text-stone-900 text-sm">
                Web-to-App Bridge
              </h4>
              <p className="text-xs text-stone-500">
                Convert web visitors into subscribers.
              </p>
            </div>
          </Card>

          {/* Revenue Sync */}
          <Card className="flex items-center gap-4 p-6 relative group">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
              <ConnectionNode size="sm" accent filled />
            </div>

            <CardIcon color="purple" className="mb-0 w-10 h-10 shrink-0">
              <Plugs size={20} weight="duotone" />
            </CardIcon>
            <div>
              <h4 className="font-semibold text-stone-900 text-sm">
                Revenue Sync
              </h4>
              <p className="text-xs text-stone-500">
                22+ Integrations available.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom connector beam */}
      <div className="absolute bottom-0 left-12 right-12 hidden lg:block">
        <SchematicLine direction="horizontal" length="100%" withNode="both" delay={1.5} />
      </div>
    </section>
  );
}
