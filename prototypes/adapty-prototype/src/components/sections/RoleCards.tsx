import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";
import { SoftCornerGradient } from "~/components/textures/SoftCornerGradient";
import { MoireInterference } from "~/components/textures/MoireInterference";
import { InfiniteFloor } from "~/components/textures/InfiniteFloor";

interface RoleCardsProps {
  ds?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
}

export function RoleCards({ ds }: RoleCardsProps) {
  const { roleCards } = content;

  return (
    <Section className="bg-[var(--bg-primary)] relative overflow-hidden">
      {/* DS2: Soft Corner Gradient - very subtle */}
      {ds === "ds2" && <SoftCornerGradient opacity={0.2} />}

      {/* DS3: Moiré - very subtle */}
      {ds === "ds3" && <MoireInterference opacity={0.05} />}

      <Container className="relative z-10">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          <span className="text-[var(--text-primary)]">{roleCards.headline.primary}</span>
          <br />
          <span className="text-[var(--text-muted)]">{roleCards.headline.secondary}</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {roleCards.items.map((role) => (
            <Link
              key={role.title}
              href={role.link}
              className="group relative flex flex-col overflow-hidden rounded-[var(--card-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] transition-all duration-[var(--duration-normal)] hover:-translate-y-1 hover:border-[var(--color-primary-light)] hover:shadow-[var(--shadow-xl)]"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden bg-gradient-to-b from-[var(--bg-tertiary)] to-[var(--bg-secondary)] p-4">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                    {role.title}
                  </h3>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-tertiary)] transition-colors group-hover:bg-[var(--color-primary)]">
                    <ArrowRight className="h-4 w-4 text-[var(--text-muted)] transition-colors group-hover:text-white" />
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 text-sm text-[var(--text-secondary)] transition-colors group-hover:border-[var(--color-primary-light)] group-hover:bg-[var(--color-primary-light)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
