import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { cn } from "~/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    bgColor?: string;
  };
  cta: {
    text: string;
    href: string;
    external?: boolean;
  };
  testimonial?: {
    quote: string;
    logo?: string;
    company?: {
      name: string;
      category: string;
      logo: string;
    };
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  features?: readonly string[];
  variant?: "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
  sectionNumber?: string;
  codeSnippet?: string;
  flipped?: boolean;
  className?: string;
}

export function FeatureSection({
  title,
  description,
  image,
  features,
  cta,
  testimonial,
  variant = "ds5",
  sectionNumber,
  codeSnippet,
  flipped = false,
  className,
}: FeatureSectionProps) {
  // DS2 (Attio) Logic: Section Numbering
  const isAttio = variant === "ds2";
  // DS1 (Linear) Logic: Visual + List
  const isLinear = variant === "ds1";
  // DS3 (Polar) Logic: Code/Text heavy
  const isPolar = variant === "ds3";

  return (
    <Section
      className={cn(
        "border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            flipped && "lg:[direction:rtl]"
          )}
        >
          {/* Image */}
          <div className={cn("lg:[direction:ltr]", flipped && "lg:order-2")}>
            {isPolar && codeSnippet ? (
              // Polar (DS3): Code Block Style
              <div className="relative overflow-hidden rounded-[var(--card-radius)] border border-[var(--border-default)] bg-[#0C0C0C] p-6 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>
                <pre className="font-mono text-sm leading-relaxed text-blue-400">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            ) : (
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] p-4 md:p-8",
                  image.bgColor
                    ? `bg-[${image.bgColor}]`
                    : "bg-[var(--bg-secondary)]"
                )}
                style={image.bgColor && !isAttio ? { backgroundColor: image.bgColor } : undefined}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Content */}
          {/* Content */}
          <div className="lg:[direction:ltr]">
            {isAttio && sectionNumber && (
              <div className="mb-6 inline-flex h-8 items-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-3">
                <span className="font-mono text-xs font-medium text-[var(--color-primary)]">
                  {sectionNumber}
                </span>
                <span className="mx-2 h-1 w-1 rounded-full bg-[var(--color-primary)]/40" />
                <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)] uppercase">
                  Feature
                </span>
              </div>
            )}

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              {title}
            </h2>
            <p className="mb-8 text-lg text-[var(--text-secondary)]">
              {description}
            </p>

            {isLinear && features && features.length > 0 && (
              <ul className="mb-8 grid gap-3 sm:grid-cols-1">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {isPolar && features && features.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {features.map((feature, i) => (
                  <span key={i} className="inline-flex rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {cta.external ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[var(--color-primary)] transition-all hover:gap-3"
              >
                {cta.text}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 font-medium text-[var(--color-primary)] transition-all hover:gap-3"
              >
                {cta.text}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}

            {/* Testimonial - Hide for Polar to keep it clean, or keep it? Analysis says Polar has testimonials but in grid. Keep for now unless it conflicts. */}
            {testimonial && !isPolar && (
              <div className="mt-10 rounded-[var(--card-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6">
                {testimonial.logo && (
                  <Image
                    src={testimonial.logo}
                    alt="Company logo"
                    width={120}
                    height={32}
                    className="mb-4 h-6 w-auto object-contain"
                  />
                )}
                {testimonial.company && (
                  <div className="mb-4 flex items-center gap-2">
                    <Image
                      src={testimonial.company.logo}
                      alt={testimonial.company.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-lg object-contain"
                    />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {testimonial.company.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {testimonial.company.category}
                      </p>
                    </div>
                  </div>
                )}
                <p className="mb-4 italic text-[var(--text-secondary)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {testimonial.author.name}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
