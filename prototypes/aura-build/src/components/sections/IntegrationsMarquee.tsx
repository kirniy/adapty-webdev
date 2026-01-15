import Image from "next/image";
import { cn } from "@/lib/cn";

const integrations = [
  { name: "Amplitude", logo: "amplitude.svg" },
  { name: "Mixpanel", logo: "mixpanel.svg" },
  { name: "AppsFlyer", logo: "appsflyer.svg" },
  { name: "Adjust", logo: "adjust.svg" },
  { name: "Branch", logo: "branch.svg" },
  { name: "Segment", logo: "segment.svg" },
  { name: "Firebase", logo: "firebase.svg" },
  { name: "Braze", logo: "braze.svg" },
  { name: "OneSignal", logo: "onesignal.svg" },
  { name: "Slack", logo: "slack.svg" },
  { name: "PostHog", logo: "posthog.svg" },
  { name: "Stripe", logo: "stripe.svg" },
  { name: "Apple Ads", logo: "apple-ads.svg" },
  { name: "Singular", logo: "singular.svg" },
];

export function IntegrationsMarquee() {
  return (
    <section className="py-20 bg-stone-50/50 overflow-hidden relative border-y border-stone-200/50 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-6 mb-12 text-center stagger-children">
        <h2 className="text-2xl font-semibold tracking-tight mb-2 text-stone-900 animate-intro-blur">
          Connect with your favorite tools
        </h2>
        <p className="text-stone-500 text-sm animate-intro-blur delay-100">
          Send subscription data to analytics, attribution, and marketing
          platforms
        </p>
      </div>

      {/* Blueprint Grid Overlay (Subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "100% 40px"
        }}
      />

      {/* Gradient Fade Masks - Improved visibility */}
      <div className="z-10 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/90 to-transparent w-32 h-full absolute top-0 left-0" />
      <div className="z-10 bg-gradient-to-l from-[#fcfcfc] via-[#fcfcfc]/90 to-transparent w-32 h-full absolute top-0 right-0" />

      <div className="flex w-max animate-marquee hover-pause py-4">
        {[...integrations, ...integrations, ...integrations].map((tool, idx) => (
          <div 
            key={`${tool.name}-${idx}`} 
            className="group relative w-40 h-12 flex items-center justify-center mx-6 transition-all duration-300"
          >
            {/* Logo */}
            <div className="relative w-32 h-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
              <Image
                src={`/integrations/${tool.logo}`}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Hover Micro-interaction: Subtle glow below */}
            <div className="absolute -bottom-4 w-12 h-1 bg-black/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
