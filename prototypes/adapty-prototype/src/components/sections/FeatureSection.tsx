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
  flipped?: boolean;
  className?: string;
}

export function FeatureSection({
  title,
  description,
  image,
  cta,
  testimonial,
  flipped = false,
  className,
}: FeatureSectionProps) {
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
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] p-4 md:p-8",
                image.bgColor
                  ? `bg-[${image.bgColor}]`
                  : "bg-[var(--bg-secondary)]"
              )}
              style={image.bgColor ? { backgroundColor: image.bgColor } : undefined}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:[direction:ltr]">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              {title}
            </h2>
            <p className="mb-8 text-lg text-[var(--text-secondary)]">
              {description}
            </p>

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

            {/* Testimonial */}
            {testimonial && (
              <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6">
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
