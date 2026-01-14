"use client";

import {
  HardDrives,
  ArrowUpRight,
  Database,
  CheckCircle
} from "@phosphor-icons/react/dist/ssr";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { BlurReveal, TextBlurReveal } from "@/components/ui/BlurReveal";
import { Button } from "@/components/ui/Button";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function Hero() {
  return (
    <div className="relative flex flex-col min-h-[85vh] overflow-hidden">
      
      {/* Main Content Area - Z-index 10 to sit above global grid */}
      <main className="flex-1 w-full relative z-10 flex flex-col justify-center">
        <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <BlurReveal className="lg:col-span-7 space-y-8" stagger={0.1}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white/80 backdrop-blur-sm border-stone-200 text-stone-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <ScrambleText text="Revenue Management & Growth" hover={true} speed={30} />
            </div>

            {/* Headline - Two-tone editorial style */}
            <h1 className="headline-editorial leading-[0.92] lg:text-7xl xl:text-8xl text-5xl text-balance">
              <span className="text-primary-editorial">Revenue management for</span>{" "}
              <span className="relative inline-block text-muted-editorial">
                <span className="serif-accent">in-app purchases</span>
                {/* SVG Underline */}
                <svg
                  className="absolute w-full h-4 -bottom-2 left-0 text-brand-lime -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="body-editorial leading-relaxed lg:text-xl text-lg text-stone-500 max-w-2xl text-balance">
              Save months on integrating subscriptions and double your app revenue with paywall management and A/B testing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="glass" size="lg" beam={true}>
                Start for free
              </Button>

              <Button variant="secondary" size="lg" beam={true} className="bg-white/60 backdrop-blur-sm">
                View Documentation
              </Button>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 pt-2">
              <CheckCircle size={16} weight="fill" className="text-stone-400" />
              Trusted by 15,000+ apps worldwide
            </div>
          </BlurReveal>

          {/* Right Column: Visuals */}
          <div className="lg:col-span-5 flex flex-col justify-center relative h-full mt-12 lg:mt-0 min-h-[400px]">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-lime opacity-20 blur-[100px] rounded-full pointer-events-none" />

            <BlurReveal className="relative space-y-4" stagger={0.2} delay={0.3}>
              {/* Cards */}
              <SpotlightCard
                className="glass-panel p-4 rounded-xl flex items-center gap-4 shadow-cinematic-lg lg:ml-0 max-w-sm mx-auto w-full bg-white/80"
                from="rgba(193, 255, 114, 0.2)"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-stone-50 text-stone-600 border-stone-200">
                  <HardDrives size={20} weight="duotone" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="text-xs font-semibold text-stone-900">Subscription SDK</p>
                    <ScrambleText text="v3.0.1" className="text-[10px] text-stone-400" />
                  </div>
                  <p className="text-xs text-stone-500 truncate">Validation Active</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">
                  99.9% Uptime
                </span>
              </SpotlightCard>

              <SpotlightCard
                className="glass-panel p-4 rounded-xl flex items-center gap-4 shadow-cinematic-lg lg:ml-8 max-w-sm mx-auto w-full bg-white/80"
                from="rgba(193, 255, 114, 0.2)"
              >
                <div className="flex shrink-0 bg-brand-lime w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-brand-lime-dark">
                  <ArrowUpRight size={20} weight="bold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="text-xs font-semibold text-stone-900">Revenue Growth</p>
                    <span className="text-[10px] text-stone-400">Real-time</span>
                  </div>
                  <p className="text-xs text-stone-500 truncate">Q3 Performance</p>
                </div>
                <span className="bg-brand-lime text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">
                  +23.4%
                </span>
              </SpotlightCard>

              <SpotlightCard
                className="glass-panel p-4 rounded-xl flex items-center gap-4 shadow-cinematic-lg lg:-ml-4 max-w-sm mx-auto w-full bg-white/80"
                from="rgba(193, 255, 114, 0.2)"
              >
                <div className="w-10 h-10 rounded-full text-brand-lime flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
                  <Database size={20} weight="fill" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="text-xs font-semibold text-stone-900">Analytics Sync</p>
                    <span className="text-[10px] text-stone-400">Now</span>
                  </div>
                  <p className="text-xs text-stone-500 truncate">Amplitude &lt;-&gt; Adapty</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">
                  Active
                </span>
              </SpotlightCard>

            </BlurReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
