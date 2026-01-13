import Image from "next/image";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { cn } from "~/lib/utils";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

interface TrustedByProps {
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function TrustedBy({ ds }: TrustedByProps) {
  const { trustedBy } = content;

  return (
    <Section className="relative border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-12 overflow-hidden">
      {/* DS2: Soft Corner Gradient */}
      {ds === "ds2" && <SoftCornerGradient opacity={0.3} />}

      {/* DS3: Moiré Interference */}
      {ds === "ds3" && <MoireInterference opacity={0.08} />}

      {/* DS4: Infinite Floor (Subtle) */}
      {ds === "ds4" && (
        <div className="absolute inset-0 opacity-20">
          <InfiniteFloor />
        </div>
      )}

      <Container className="relative z-10">
        <p className={cn(
          "mb-8 text-center text-sm font-medium uppercase tracking-wider",
          ds === "ds1" && "heading-metallic"
        )}>
          <span className={ds === "ds1" ? "" : "text-[var(--text-secondary)]"}>{trustedBy.headline.primary}</span>
          <span className={ds === "ds1" ? "opacity-60" : "text-[var(--text-muted)]"}> {trustedBy.headline.secondary}</span>
        </p>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {trustedBy.logos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-40 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
            >
              <Image
                src={`/logos/trusted-by/${logo.file}`}
                alt={logo.name}
                width={120}
                height={40}
                className="h-4 w-auto object-contain md:h-4"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
