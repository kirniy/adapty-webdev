import Image from "next/image";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

interface G2BadgesProps {
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function G2Badges({ ds }: G2BadgesProps) {
  const { g2Badges } = content;

  return (
    <Section className="relative border-b border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] py-12 overflow-hidden">
      {/* DS2: Soft Corner Gradient */}
      {ds === "ds2" && <SoftCornerGradient opacity={0.2} />}
      {/* DS3: Moiré */}
      {ds === "ds3" && <MoireInterference opacity={0.05} />}

      <Container className="relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            {g2Badges.headline}
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            {g2Badges.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {g2Badges.badges.map((badge, index) => (
            <div
              key={badge}
              className="rounded-2xl p-4 transition-all duration-[var(--duration-normal)] hover:-translate-y-1 hover:bg-[var(--bg-primary)] hover:shadow-[var(--shadow-lg)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={`/images/g2-badges/${badge}.svg`}
                alt="G2 Badge"
                width={100}
                height={120}
                className="h-24 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
