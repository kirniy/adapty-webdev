import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";

interface CaseStudiesProps {
  variant?: "default" | "compact";
}

export function CaseStudies({ variant = "default" }: CaseStudiesProps) {
  const { caseStudies } = content;
  const displayItems = variant === "compact" ? caseStudies.items.slice(0, 6) : caseStudies.items;

  return (
    <Section className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-[var(--text-primary)]">{caseStudies.headline.primary}</span>
            <br />
            <span className="text-[var(--text-muted)]">{caseStudies.headline.secondary}</span>
          </h2>
          <a
            href="https://adapty.io/case-studies/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)] md:flex"
          >
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((study) => (
            <a
              key={study.company}
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[var(--card-radius)] border border-transparent bg-[var(--bg-secondary)] p-6 transition-all duration-[var(--duration-normal)] hover:-translate-y-1 hover:border-[var(--border-subtle)] hover:bg-[var(--bg-primary)] hover:shadow-[var(--shadow-xl)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src={study.logo}
                  alt={study.company}
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain opacity-60 transition-opacity group-hover:opacity-100"
                />
                <span className="rounded-full bg-[var(--bg-primary)] px-3 py-1 text-xs font-medium text-[var(--text-muted)] transition-colors group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]">
                  {study.category}
                </span>
              </div>

              <div className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                {study.metric}
              </div>

              <p className="mb-8 text-[var(--text-secondary)]">
                {study.description}
              </p>

              <div className="mt-auto flex items-center gap-2 font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                Read story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
