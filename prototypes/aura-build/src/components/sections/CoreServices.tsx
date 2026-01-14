"use client";

import Link from "next/link";
import {
  Cloud,
  ArrowRight,
  Check,
  Stack,
  TrendUp,
  User,
  ShoppingBag,
  CaretRight
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

export function CoreServices() {
  return (
    <section id="services" className="lg:px-12 lg:mb-20 max-w-[1600px] mx-auto mb-12 px-6">
      <h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-sans mb-10 lg:mb-12 text-balance">
        End-to-End Digital Engineering
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
        
        {/* Card 1: Cloud & DevOps (Dark Blue) */}
        <div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">
          
          {/* Visual Anchor (Top) */}
          <div className="z-20 mt-auto relative">
            <div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
              <Cloud size={24} weight="duotone" />
            </div>
            <h3 className="lg:text-3xl text-2xl font-bold text-white font-sans mb-3">Cloud &amp; DevOps</h3>
            <p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
              Scale without the crash. AWS, Azure, &amp; Kubernetes expert management and automation.
            </p>
            <Link href="#" className="inline-flex items-center text-white font-medium text-sm hover:underline underline-offset-4 group/link">
              Explore Cloud Services 
              <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />
            
            {/* Floating Card UI */}
            <div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-stone-900 w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl border border-stone-800">
              {/* Fake Browser Header */}
              <div className="flex gap-2 border-stone-800 border-b mb-4 pb-3 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              {/* Content Mockup */}
              <div className="space-y-3 font-mono text-[10px] text-stone-400">
                <div className="flex gap-2"><span className="text-blue-400">apiVersion:</span> apps/v1</div>
                <div className="flex gap-2"><span className="text-blue-400">kind:</span> Deployment</div>
                <div className="flex gap-2"><span className="text-blue-400">metadata:</span></div>
                <div className="pl-4 flex gap-2"><span className="text-purple-400">name:</span> production-api</div>
                <div className="flex gap-2"><span className="text-blue-400">spec:</span></div>
                <div className="pl-4 flex gap-2"><span className="text-purple-400">replicas:</span> <span className="text-brand-lime">12</span></div>
                
                {/* Interactive Element Mockup */}
                <div className="flex gap-3 bg-stone-800 border-stone-700 border rounded-lg mt-4 p-2 items-center">
                  <div className="h-6 w-6 rounded bg-lime-900/50 text-lime-400 flex items-center justify-center shrink-0">
                    <Check size={14} weight="bold" />
                  </div>
                  <div className="flex-1 text-[9px] text-stone-300">Autoscaling Policy</div>
                  <div className="h-5 w-10 bg-brand-lime rounded text-[8px] text-stone-900 font-bold flex items-center justify-center">ON</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: ERP & Operations (Wide - Cyan/Lime) */}
        <div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
          
          {/* Text Side */}
          <div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
                <Stack size={24} weight="duotone" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-sans mb-3">ERP &amp; Operations</h3>
              <p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                Unified business logic. Odoo &amp; SAP integrations that actually work together.
              </p>
            </div>
            <Link href="#" className="inline-flex items-center text-stone-900 font-bold text-sm hover:underline underline-offset-4 group/link">
              See Integrations 
              <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual Side (Kanban/Operations) */}
          <div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
            {/* Tilted Container for dynamic effect */}
            <div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-4">
                {/* Columns */}
                <div className="flex gap-3">
                  {/* Col 1 */}
                  <div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Inventory</div>
                    <div className="bg-white p-3 rounded border border-stone-100 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-1.5 w-12 bg-lime-300 rounded" />
                        <span className="text-[8px] text-stone-400">SKU-102</span>
                      </div>
                      <div className="h-1 w-full bg-stone-100 rounded" />
                    </div>
                  </div>
                  {/* Col 2 */}
                  <div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Processing</div>
                    <div className="bg-white p-3 rounded border border-lime-500 shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500" />
                      <div className="h-1.5 w-16 bg-stone-800 rounded mb-2" />
                      <div className="h-1 w-full bg-stone-100 rounded" />
                      <div className="mt-2 flex items-center gap-1">
                        <div className="w-4 h-4 rounded-full bg-stone-200" />
                        <div className="text-[8px] text-stone-400">Syncing...</div>
                      </div>
                    </div>
                  </div>
                  {/* Col 3 (Partial) */}
                  <div className="flex-1 bg-stone-50 rounded-lg p-2 opacity-50">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Shipped</div>
                    <div className="bg-white p-3 rounded shadow-sm h-16 border-dashed border-2 border-stone-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Growth Marketing (Mint) */}
        <div className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-lime-200">
          
          {/* Visuals */}
          <div className="relative w-full h-32 mb-4">
            <div className="absolute right-0 top-0 space-y-3 w-full max-w-[220px]">
              <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75">
                <div className="flex items-center gap-2">
                  <User className="text-stone-400" size={16} />
                  New Lead Captured
                </div>
              </div>
              <div className="bg-[#002f43] p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-white w-fit transform group-hover:translate-x-1 transition-transform delay-100">
                <div className="flex items-center gap-2">
                  <ArrowRight className="text-brand-lime" size={16} />
                  Sent to Sales Pipeline
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto relative z-20">
            <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
              <TrendUp size={20} weight="duotone" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-sans mb-2">Growth Marketing</h3>
            <p className="text-stone-700 text-sm mb-4 leading-relaxed">Data-driven acquisition. Campaigns that feed directly into your sales pipeline.</p>
            <Link href="#" className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide hover:opacity-70">
              Learn More <CaretRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Card 4: E-Commerce (Sky Blue) */}
        <div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">
          
          {/* E-commerce Visual */}
          <div className="flex w-full h-32 relative justify-end">
            <div className="relative transform rotate-3 group-hover:rotate-6 transition-transform duration-500 origin-bottom-right">
              <div className="bg-white p-3 rounded-xl shadow-lg border border-sky-100 w-32">
                <div className="w-full aspect-square bg-stone-100 rounded-lg mb-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-transparent opacity-50" />
                </div>
                <div className="h-1.5 bg-stone-200 rounded w-2/3 mb-1" />
                <div className="h-1.5 bg-stone-100 rounded w-1/2" />
                <div className="-top-2 -right-2 text-[10px] font-bold text-white bg-stone-900 rounded-full pt-1 pr-2 pb-1 pl-2 absolute shadow-md">
                  $
                </div>
              </div>
            </div>
          </div>

          <div className="z-20 mt-auto relative">
            <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
              <ShoppingBag size={20} weight="duotone" />
            </div>
            <h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-sans mb-2">E-Commerce</h3>
            <p className="text-stone-700 text-sm mb-4 leading-relaxed">High-performance storefronts. Shopify &amp; Custom builds designed to sell.</p>
            <Link href="#" className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide hover:opacity-70">
              View Storefronts <CaretRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
