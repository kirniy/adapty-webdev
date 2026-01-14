"use client";

import { Check, Timer, HardDrives } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";
import { SchematicLine } from "@/components/ui/SchematicLine";

export function ResultsSection() {
  return (
    <section id="cases" className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20">
      <div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-zinc-900/30 bg-stone-900 border-stone-800">
        
        {/* Background Grid Pattern */}
        <div 
          className="opacity-20 absolute top-0 right-0 bottom-0 left-0 pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", 
            backgroundSize: "30px 30px" 
          }} 
        />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse" />
              <span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">Verified Results</span>
            </div>

            <h2 className="lg:text-5xl xl:text-6xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-sans mb-6">
              Results that Compound.
            </h2>

            <p className="text-base lg:text-lg text-stone-400 font-sans max-w-md mb-8 lg:mb-10 leading-relaxed">
              See how we deliver measurable impact for our partners.
            </p>

            <button className="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900">
              <span>Read Case Studies</span>
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual - Code Block with "Glass" Effect */}
          <div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
            <div className="transform lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-slate-950/80 w-full border-stone-800 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Noise Texture Overlay to simulate FxFilter noise */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

              {/* Fake Window Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-800 relative z-10">
                <span className="text-stone-300">performance_metrics.json</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-orange-700/50 rounded-full" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-500/50" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                <div className="p-4 rounded border bg-stone-900 border-stone-800">
                  <span className="block text-stone-500 mb-2">Cloud Spend</span>
                  <span className="text-2xl font-bold text-white block mb-1">-40%</span>
                  <span className="text-[#c1ff72] text-[10px]">SaaS Client / Kubernetes</span>
                </div>
                <div className="p-4 rounded border bg-stone-900 border-stone-800">
                  <span className="block text-stone-500 mb-2">Conversion Rate</span>
                  <span className="text-2xl font-bold text-white block mb-1">+15%</span>
                  <span className="text-[#c1ff72] text-[10px]">Retail Brand / Speed</span>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
                  <div className="flex items-center gap-3">
                    <Timer size={14} className="text-lime-400" />
                    <span className="text-stone-300">Checkout speed increased by 2.5s</span>
                  </div>
                  <span className="text-[#c1ff72]"><Check size={14} /></span>
                </div>
                <div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
                  <div className="flex items-center gap-3">
                    <HardDrives size={14} className="text-lime-400" />
                    <span className="text-stone-300">Legacy infrastructure migration complete</span>
                  </div>
                  <span className="text-[#c1ff72]"><Check size={14} /></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
