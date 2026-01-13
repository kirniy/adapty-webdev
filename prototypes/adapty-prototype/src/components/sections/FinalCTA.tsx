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

  return (
    <Section className="py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-[var(--bg-tertiary)] p-12 text-center md:p-24">
          {/* DS2: Soft Corner Gradient */}
          {ds === "ds2" && <SoftCornerGradient opacity={0.4} />}
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
