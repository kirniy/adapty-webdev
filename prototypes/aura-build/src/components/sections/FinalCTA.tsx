"use client";

import Link from "next/link";
import { Input } from "@/components/ui/Input";

export function FinalCTA() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-12">
      {/* Container with clean dark background */}
      <div className="relative rounded-[32px] overflow-hidden bg-stone-900 border border-stone-800">

        {/* Subtle gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        {/* Clean grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 px-8 py-20 lg:py-28 text-center max-w-3xl mx-auto space-y-8">

          <div className="space-y-5">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] text-balance">
              Get started today or schedule a demo for your personal onboarding
            </h2>
            <p className="text-base lg:text-lg text-stone-400 max-w-xl mx-auto">
              Join 15,000+ apps scaling their revenue infrastructure with Adapty.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              type="email"
              variant="glass"
              placeholder="Enter your work email"
              className="flex-1 h-12 text-sm"
            />
            {/* Solid lime button for dark background */}
            <button
              type="submit"
              className="relative group cursor-pointer outline-none overflow-hidden rounded-full transition-all active:scale-[0.98] bg-brand-lime hover:bg-brand-lime-dark shadow-[0_0_30px_rgba(193,255,114,0.4)]"
            >
              <span className="block select-none text-lg font-semibold text-stone-900 tracking-tight py-3 px-6 relative z-10">
                Start for free
              </span>
            </button>
          </form>

          <div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-white transition-colors text-sm font-medium"
            >
              Or schedule a demo
              <span className="text-brand-lime">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
