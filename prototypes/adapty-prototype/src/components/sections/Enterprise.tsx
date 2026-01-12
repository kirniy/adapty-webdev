import { Shield, Lock, Server } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { content } from "~/config/content";

const iconMap = {
  shield: Shield,
  lock: Lock,
  server: Server,
};

const colorMap = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
    border: "border-emerald-500/10",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    border: "border-blue-500/10",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-600",
    border: "border-purple-500/10",
  },
};

export function Enterprise() {
  const { enterprise } = content;

  return (
    <Section className="bg-[var(--bg-primary)]">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-light)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <Shield className="h-4 w-4" />
              {enterprise.badge}
            </span>

            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              <span className="text-[var(--text-primary)]">{enterprise.headline.primary}</span>
              <br />
              <span className="text-[var(--text-muted)]">{enterprise.headline.secondary}</span>
            </h2>

            <p className="mb-10 max-w-lg text-lg">
              <span className="text-[var(--text-primary)]">{enterprise.description.primary}</span>
              <span className="text-[var(--text-muted)]"> {enterprise.description.secondary}</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" href={enterprise.cta.primary.href}>
                {enterprise.cta.primary.text}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={enterprise.cta.secondary.href}
              >
                {enterprise.cta.secondary.text}
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {enterprise.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              const colors = colorMap[feature.color as keyof typeof colorMap];

              return (
                <div
                  key={feature.title}
                  className="rounded-[var(--card-radius)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 transition-all duration-[var(--duration-normal)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                        {feature.title}
                      </h3>
                      <ul className="space-y-1">
                        {feature.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-[var(--text-secondary)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
