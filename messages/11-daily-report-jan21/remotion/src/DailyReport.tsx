import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

// Colors matching Adapty brand
const colors = {
  bg: "#FFFFFF",
  bgCard: "#F9FAFB",
  primary: "#6720FF",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  border: "#E5E7EB",
  green: "#22C55E",
  red: "#EF4444",
};

// Slack message content
const slackMessage = {
  title: "Отчет за 21 января",
  intro: "Сергей, добрый вечер! Сегодня разработка шла по плану.",
  summary: "Создано 30+ страниц (feature, role, compare). Приобретен курс animations.dev от Emil Kowalski - дизайнера Linear.",
  sections: [
    { title: "Feature Pages", count: 15 },
    { title: "Role Pages", count: 4 },
    { title: "Compare Pages", count: 6 },
  ],
  stats: {
    commits: 19,
    files: 218,
    added: 32146,
    removed: 1287,
  },
  highlights: [
    "Paywall Builder: 3D tilt, spotlight",
    "animations.dev (Linear principles)",
    "Variant switching system",
    "Navigation consolidated",
  ],
};

// Typewriter effect component
const Typewriter: React.FC<{
  text: string;
  startFrame: number;
  speed?: number;
}> = ({ text, startFrame, speed = 2 }) => {
  const frame = useCurrentFrame();
  const charsToShow = Math.floor((frame - startFrame) / speed);
  const displayText = text.slice(0, Math.max(0, charsToShow));

  return (
    <span>
      {displayText}
      {charsToShow < text.length && charsToShow >= 0 && (
        <span style={{ opacity: frame % 15 < 8 ? 1 : 0 }}>|</span>
      )}
    </span>
  );
};

// Animated number counter
const AnimatedNumber: React.FC<{
  value: number;
  startFrame: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  color?: string;
}> = ({ value, startFrame, duration = 30, prefix = "", suffix = "", color }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame - startFrame,
    [0, duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const displayValue = Math.floor(value * progress);

  return (
    <span style={{ color: color || colors.textPrimary }}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

// Fade in component
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, duration = 15, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(
    frame - delay,
    [0, duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const translateY = interpolate(
    frame - delay,
    [0, duration],
    [20, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  return (
    <div style={{
      opacity,
      transform: `translateY(${translateY}px)`,
      ...style
    }}>
      {children}
    </div>
  );
};

// Title Scene
const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const titleOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          transform: `scale(${logoScale})`,
          fontSize: 80,
          fontWeight: 700,
          color: colors.primary,
          fontFamily: "Inter, system-ui, sans-serif",
          marginBottom: 20,
        }}
      >
        ADAPTY
      </div>
      <div
        style={{
          opacity: titleOpacity,
          fontSize: 48,
          fontWeight: 600,
          color: colors.textPrimary,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Daily Report
      </div>
      <div
        style={{
          opacity: subtitleOpacity,
          fontSize: 32,
          color: colors.textSecondary,
          fontFamily: "Inter, system-ui, sans-serif",
          marginTop: 10,
        }}
      >
        21 января 2026
      </div>
    </AbsoluteFill>
  );
};

// Slack Message Scene
const SlackMessageScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        padding: 80,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <FadeIn delay={0}>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 40,
        }}>
          <div style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            backgroundColor: colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
          }}>
            <span style={{ color: "white", fontSize: 28, fontWeight: 700 }}>K</span>
          </div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 600, color: colors.textPrimary }}>
              Кирилл
            </div>
            <div style={{ fontSize: 16, color: colors.textMuted }}>
              21 янв, 23:45
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Message content */}
      <div style={{
        backgroundColor: colors.bgCard,
        borderRadius: 16,
        padding: 40,
        border: `1px solid ${colors.border}`,
      }}>
        <FadeIn delay={15}>
          <div style={{
            fontSize: 28,
            fontWeight: 600,
            color: colors.textPrimary,
            marginBottom: 20,
          }}>
            *{slackMessage.title}*
          </div>
        </FadeIn>

        <FadeIn delay={30}>
          <div style={{
            fontSize: 22,
            color: colors.textPrimary,
            lineHeight: 1.6,
            marginBottom: 30,
          }}>
            <Typewriter text={slackMessage.intro} startFrame={30} speed={1} />
          </div>
        </FadeIn>

        <FadeIn delay={90}>
          <div style={{
            fontSize: 20,
            color: colors.textSecondary,
            lineHeight: 1.6,
          }}>
            <Typewriter text={slackMessage.summary} startFrame={90} speed={1} />
          </div>
        </FadeIn>
      </div>
    </AbsoluteFill>
  );
};

// Stats Scene
const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stats = [
    { label: "Коммитов", value: slackMessage.stats.commits, color: colors.primary },
    { label: "Файлов", value: slackMessage.stats.files, color: colors.textPrimary },
    { label: "Добавлено", value: slackMessage.stats.added, prefix: "+", color: colors.green },
    { label: "Удалено", value: slackMessage.stats.removed, prefix: "-", color: colors.red },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <FadeIn delay={0}>
        <div style={{
          fontSize: 48,
          fontWeight: 700,
          color: colors.textPrimary,
          marginBottom: 60,
        }}>
          Git-статистика
        </div>
      </FadeIn>

      <div style={{
        display: "flex",
        gap: 40,
      }}>
        {stats.map((stat, i) => {
          const delay = 15 + i * 10;
          const scale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          return (
            <div
              key={stat.label}
              style={{
                transform: `scale(${Math.max(0, scale)})`,
                backgroundColor: colors.bgCard,
                borderRadius: 20,
                padding: "40px 50px",
                textAlign: "center",
                border: `1px solid ${colors.border}`,
                minWidth: 200,
              }}
            >
              <div style={{
                fontSize: 56,
                fontWeight: 700,
                marginBottom: 10,
              }}>
                <AnimatedNumber
                  value={stat.value}
                  startFrame={delay + 10}
                  duration={40}
                  prefix={stat.prefix}
                  color={stat.color}
                />
              </div>
              <div style={{
                fontSize: 20,
                color: colors.textMuted,
              }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// Pages Scene
const PagesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        padding: 80,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <FadeIn delay={0}>
        <div style={{
          fontSize: 48,
          fontWeight: 700,
          color: colors.textPrimary,
          marginBottom: 50,
        }}>
          Новые страницы: 30+
        </div>
      </FadeIn>

      <div style={{ display: "flex", gap: 30 }}>
        {slackMessage.sections.map((section, i) => {
          const delay = 20 + i * 15;
          const scale = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });

          return (
            <div
              key={section.title}
              style={{
                transform: `scale(${Math.max(0, scale)})`,
                backgroundColor: colors.bgCard,
                borderRadius: 20,
                padding: 40,
                flex: 1,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{
                fontSize: 64,
                fontWeight: 700,
                color: colors.primary,
                marginBottom: 10,
              }}>
                <AnimatedNumber
                  value={section.count}
                  startFrame={delay + 10}
                  duration={30}
                  color={colors.primary}
                />
              </div>
              <div style={{
                fontSize: 24,
                color: colors.textSecondary,
              }}>
                {section.title}
              </div>
            </div>
          );
        })}
      </div>

      <FadeIn delay={70} style={{ marginTop: 50 }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
        }}>
          {["paywall-builder", "paywall-ab-testing", "onboarding-builder", "for-marketers", "for-developers", "compare/revenuecat"].map((page, i) => (
            <div
              key={page}
              style={{
                backgroundColor: colors.bgCard,
                borderRadius: 12,
                padding: "12px 20px",
                fontSize: 18,
                color: colors.textPrimary,
                border: `1px solid ${colors.border}`,
              }}
            >
              /{page}
            </div>
          ))}
          <div
            style={{
              backgroundColor: colors.primary,
              borderRadius: 12,
              padding: "12px 20px",
              fontSize: 18,
              color: "white",
            }}
          >
            +24 more
          </div>
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// Highlights Scene
const HighlightsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        padding: 80,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <FadeIn delay={0}>
        <div style={{
          fontSize: 48,
          fontWeight: 700,
          color: colors.textPrimary,
          marginBottom: 50,
        }}>
          Ключевые улучшения
        </div>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        {slackMessage.highlights.map((highlight, i) => {
          const delay = 20 + i * 20;
          const slideIn = interpolate(
            frame - delay,
            [0, 20],
            [-100, 0],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          const opacity = interpolate(
            frame - delay,
            [0, 20],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );

          return (
            <div
              key={highlight}
              style={{
                transform: `translateX(${slideIn}px)`,
                opacity,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                backgroundColor: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 24,
                fontWeight: 700,
              }}>
                {i + 1}
              </div>
              <div style={{
                fontSize: 28,
                color: colors.textPrimary,
              }}>
                {highlight}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// Outro Scene
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          fontSize: 64,
          fontWeight: 700,
          color: colors.primary,
          marginBottom: 30,
        }}
      >
        ADAPTY
      </div>
      <FadeIn delay={20}>
        <div style={{
          fontSize: 28,
          color: colors.textSecondary,
          marginBottom: 40,
        }}>
          adapty-achromatic-proto.vercel.app
        </div>
      </FadeIn>
      <FadeIn delay={40}>
        <div style={{
          fontSize: 24,
          color: colors.textMuted,
        }}>
          Кирилл, 21 января 2026
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// Main composition
export const DailyReport: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* Title: 0-90 frames (3 seconds) */}
      <Sequence from={0} durationInFrames={90}>
        <TitleScene />
      </Sequence>

      {/* Slack Message: 90-330 frames (8 seconds) */}
      <Sequence from={90} durationInFrames={240}>
        <SlackMessageScene />
      </Sequence>

      {/* Stats: 330-480 frames (5 seconds) */}
      <Sequence from={330} durationInFrames={150}>
        <StatsScene />
      </Sequence>

      {/* Pages: 480-690 frames (7 seconds) */}
      <Sequence from={480} durationInFrames={210}>
        <PagesScene />
      </Sequence>

      {/* Highlights: 690-900 frames (7 seconds) */}
      <Sequence from={690} durationInFrames={210}>
        <HighlightsScene />
      </Sequence>

      {/* Outro: 900-1050 frames (5 seconds) */}
      <Sequence from={900} durationInFrames={150}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
