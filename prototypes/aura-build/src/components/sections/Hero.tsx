"use client";

import Link from "next/link";
import { 
  HardDrives, 
  ArrowUpRight, 
  Database, 
  ArrowRight,
  CheckCircle
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <div className="relative flex flex-col min-h-screen pt-16 lg:pt-20 overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-lines pointer-events-none z-0" />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative z-10">
        <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-8 pb-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[75vh]">
          
          {/* Left Column: Text Content (Span 7 to match template) */}
          <div className="lg:col-span-7 space-y-8 animate-clip-in" style={{ animationDelay: "0.1s" }}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse" />
              Revenue Management &amp; Growth
            </div>

            {/* Headline */}
            <h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter font-sans">
              Revenue management for{" "}
              <span className="relative inline-block text-stone-900">
                in-app purchases
                {/* SVG Underline */}
                <svg 
                  className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0 5 Q 50 10 100 5" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="none" 
                    opacity="0.4" 
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-sans max-w-2xl">
              Save months on integrating subscriptions and double your app revenue with paywall management and A/B testing.
            </p>

            {/* Buttons (Restored from Template) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Glass Button (Shiny) */}
              <button className="glass-button relative group cursor-pointer outline-none z-30 overflow-hidden rounded-full transition-transform active:scale-[0.98]">
                <span className="block select-none text-lg font-semibold text-stone-900 tracking-tight py-4 px-8 relative z-10">
                  Start for free
                </span>
                <div className="button-shine" />
              </button>

              {/* Outline Button */}
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-200/50 transition-colors bg-white/50 backdrop-blur-sm">
                View Documentation
              </button>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 pt-2">
              <CheckCircle size={16} weight="fill" className="text-stone-400" />
              Trusted by 15,000+ apps worldwide
            </div>
          </div>

          {/* Right Column: Visuals (Floating Cards) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative h-full mt-12 lg:mt-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative space-y-4">
              
              {/* Card 1: Subscription SDK */}
              <div 
                className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full bg-white/60" 
                style={{ animationDelay: "0s" }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-stone-50 text-stone-600 border-stone-200">
                  <HardDrives size={20} weight="duotone" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="text-xs font-semibold text-stone-900">Subscription SDK</p>
                    <span className="text-[10px] text-stone-400">v3.0.1</span>
                  </div>
                  <p className="text-xs text-stone-500 truncate">Validation Active</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">
                  99.9% Uptime
                </span>
              </div>

              {/* Card 2: Revenue Growth */}
              <div 
                className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full bg-white/60" 
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-[#aae65f]">
                  <ArrowUpRight size={20} weight="bold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="text-xs font-semibold text-stone-900">Revenue Growth</p>
                    <span className="text-[10px] text-stone-400">Real-time</span>
                  </div>
                  <p className="text-xs text-stone-500 truncate">Q3 Performance</p>
                </div>
                <span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">
                  +23.4%
                </span>
              </div>

              {/* Card 3: Analytics Sync */}
              <div 
                className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full bg-white/60" 
                style={{ animationDelay: "2.5s" }}
              >
                <div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
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
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
