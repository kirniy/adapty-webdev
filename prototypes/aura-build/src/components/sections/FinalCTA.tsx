"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SchematicGrid } from "@/components/ui/SchematicGrid";

export function FinalCTA() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-12 relative">
      {/* 
        Container with Schematic Grid Background 
        Using a dark theme with lime accents
      */}
      <div className="relative rounded-[40px] overflow-hidden bg-[#050505] border border-white/5 shadow-2xl">
        
        {/* Schematic Grid Layer */}
        <div className="absolute inset-0 z-0 opacity-20">
          <SchematicGrid cols={8} rows={6} opacity={0.15} />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 px-8 py-20 lg:py-32 text-center max-w-4xl mx-auto space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] animate-fade-up">
              Get started today or schedule a demo for your personal onboarding
            </h2>
            <p className="text-lg text-stone-400 max-w-xl mx-auto animate-fade-up delay-100">
              Join 15,000+ apps scaling their revenue infrastructure with Adapty.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto animate-fade-up delay-200">
            <Input
              type="email"
              variant="glass"
              placeholder="Enter your work email"
              className="min-w-[280px] h-14 text-base"
            />
            {/* Using the new 'glass' variant we added to Button.tsx or re-using the hero style via className */}
            <Button 
              type="submit" 
              variant="glass" 
              size="lg" 
              className="h-14 px-8 text-base bg-[#c1ff72] hover:bg-[#b0f060] text-black border-0"
            >
              Start for free
            </Button>
          </form>

          <div className="animate-fade-up delay-300">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-white transition-colors text-sm font-medium"
            >
              Or schedule a demo 
              <span className="text-brand-lime">→</span>
            </Link>
          </div>

        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-[40px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-[40px] pointer-events-none" />
      </div>
    </section>
  );
}
