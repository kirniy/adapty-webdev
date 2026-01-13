import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

interface FinalCTAProps {
  variant?: "default" | "enterprise";
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function FinalCTA({ variant = "default", ds }: FinalCTAProps) {
  const { finalCta } = content;

  // DS2 Special "Dark Grid" Variant
  if (ds === "ds2") {
    return (
      <Section className="py-0">
        <div className="relative w-full bg-[#0e1016] py-32 overflow-hidden text-white">
          {/* Rigid Grid Background */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
              {/* Headline */}
              <h2 className="max-w-xl text-5xl font-semibold tracking-[-0.03em] leading-[1.1]">
                <span className="block text-white">Get started today</span>
                <span className="block text-[#5e6473]">or schedule a demo for your personal onboarding</span>
              </h2>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Button
                  href={finalCta.cta.primary.href}
                  className="!rounded-full !bg-white !text-black !px-6 !py-3 !h-auto font-medium shadow-lg hover:!bg-gray-100 flex items-center gap-2"
                >
                  Start for free
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0e1016] text-white">
                    <span className="text-sm font-bold leading-none mb-0.5">+</span>
                  </span>
                </Button>

                <Button
                  href={finalCta.cta.secondary.href}
                  className="!rounded-full !bg-transparent !border !border-[#333] !text-white !px-6 !py-3 !h-auto font-medium hover:!bg-[#1c1d21] flex items-center gap-2"
                >
                  Schedule a demo
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                    {/* Simple calendar icon rep */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </span>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Section>
    )
  }

  return (
    <Section className="py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-[var(--bg-tertiary)] p-12 text-center md:p-24">
          {/* DS3: Moiré */}
          {ds === "ds3" && <MoireInterference opacity={0.1} />}
          {/* DS4: Floor */}
          {ds === "ds4" && <div className="absolute inset-0 opacity-20"><InfiniteFloor /></div>}

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border-subtle)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />

          {/* Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              <span className="text-[var(--text-primary)]">{finalCta.headline.primary}</span>
              <br className="hidden sm:block" />
              <span className="text-[var(--text-muted)]">{finalCta.headline.secondary}</span>
            </h2>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Button size="lg" href={finalCta.cta.primary.href}>
                {finalCta.cta.primary.text}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button variant="text" size="md" href={finalCta.cta.secondary.href}>
                {finalCta.cta.secondary.text}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
