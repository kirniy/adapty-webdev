import Image from "next/image";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";

export function TrustedBy() {
  const { trustedBy } = content;

  return (
    <Section className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider">
          <span className="text-[var(--text-secondary)]">{trustedBy.headline.primary}</span>
          <span className="text-[var(--text-muted)]"> {trustedBy.headline.secondary}</span>
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
