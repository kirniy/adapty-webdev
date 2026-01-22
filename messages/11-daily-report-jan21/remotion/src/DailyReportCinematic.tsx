import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";
import React from "react";
import {
  Cube,
  Sparkle,
  Stack,
  Compass,
  Rocket,
  Code,
  ChartLine,
  Lightning,
  Desktop,
  Palette,
  GitBranch,
  Terminal as TerminalIcon,
  Play,
  CheckCircle,
  User,
  CurrencyDollar,
} from "@phosphor-icons/react";

// Colors
const colors = {
  bg: "#FAFAFA",
  bgDark: "#0F0F0F",
  primary: "#6720FF",
  primaryLight: "#8B5CF6",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  border: "#E5E7EB",
  green: "#22C55E",
  red: "#EF4444",
  terminalBg: "#0D1117",
  terminalText: "#E6EDF3",
  terminalGreen: "#3FB950",
  terminalPurple: "#A371F7",
  terminalBlue: "#58A6FF",
};

// Easing functions
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

// 3D Window component with perspective
const Window3D: React.FC<{
  children: React.ReactNode;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  scale?: number;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  shadow?: boolean;
  style?: React.CSSProperties;
}> = ({
  children,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  scale = 1,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  shadow = true,
  style,
}) => {
  return (
    <div
      style={{
        transform: `
          perspective(1500px)
          translateX(${translateX}px)
          translateY(${translateY}px)
          translateZ(${translateZ}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
          scale(${scale})
        `,
        transformStyle: "preserve-3d",
        filter: shadow ? "drop-shadow(0 60px 120px rgba(0,0,0,0.35))" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// MacOS-style window chrome
const MacWindow: React.FC<{
  children: React.ReactNode;
  title?: string;
  width?: number;
  height?: number;
  dark?: boolean;
}> = ({ children, title = "", width = 1100, height = 700, dark = false }) => {
  const bgColor = dark ? colors.terminalBg : "#FFFFFF";
  const headerBg = dark ? "#161B22" : "#F6F6F6";
  const titleColor = dark ? "#8B949E" : "#666";

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: bgColor,
        border: `1px solid ${dark ? "#30363D" : "#D1D1D1"}`,
      }}
    >
      <div
        style={{
          height: 52,
          backgroundColor: headerBg,
          borderBottom: `1px solid ${dark ? "#30363D" : "#D1D1D1"}`,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: 10,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#FF5F57" }} />
        <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#FEBC2E" }} />
        <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#28C840" }} />
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 15,
            fontWeight: 500,
            color: titleColor,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {title}
        </div>
        <div style={{ width: 62 }} />
      </div>
      <div style={{ height: height - 52, overflow: "hidden" }}>{children}</div>
    </div>
  );
};

// Terminal with typewriter effect
const Terminal: React.FC<{
  commands: { text: string; output?: string[] }[];
  startFrame: number;
  charDelay?: number;
}> = ({ commands, startFrame, charDelay = 1.2 }) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  let totalChars = 0;
  const renderedLines: React.ReactNode[] = [];

  commands.forEach((cmd, cmdIndex) => {
    const cmdStartChar = totalChars;
    const charsTyped = Math.floor(relativeFrame / charDelay) - cmdStartChar;
    const cmdText = cmd.text;
    const visibleCmd = cmdText.slice(0, Math.max(0, charsTyped));
    const showCursor =
      charsTyped >= 0 && charsTyped <= cmdText.length && frame % 15 < 8;

    renderedLines.push(
      <div key={`cmd-${cmdIndex}`} style={{ display: "flex", marginBottom: 8 }}>
        <span style={{ color: colors.terminalGreen, fontWeight: 600 }}>~</span>
        <span style={{ color: colors.terminalPurple, fontWeight: 600 }}> $ </span>
        <span style={{ color: colors.terminalText }}>
          {visibleCmd}
          {showCursor && (
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 28,
                backgroundColor: colors.terminalText,
                marginLeft: 2,
              }}
            />
          )}
        </span>
      </div>
    );

    totalChars += cmdText.length + 12;

    if (cmd.output && charsTyped > cmdText.length + 6) {
      cmd.output.forEach((line, lineIndex) => {
        const outputDelay = (cmdText.length + 12 + lineIndex * 4) - cmdStartChar;
        const showLine = charsTyped > outputDelay;
        if (showLine) {
          const lineOpacity = interpolate(
            charsTyped - outputDelay,
            [0, 8],
            [0, 1],
            { extrapolateRight: "clamp" }
          );
          renderedLines.push(
            <div
              key={`output-${cmdIndex}-${lineIndex}`}
              style={{
                color: colors.terminalText,
                opacity: lineOpacity,
                marginBottom: 4,
                paddingLeft: 8,
              }}
            >
              {line.startsWith("+") ? (
                <span style={{ color: colors.green }}>{line}</span>
              ) : line.startsWith("-") && !line.startsWith("--") ? (
                <span style={{ color: colors.red }}>{line}</span>
              ) : line.match(/^[a-f0-9]{7}/) ? (
                <>
                  <span style={{ color: colors.terminalBlue }}>{line.slice(0, 7)}</span>
                  <span style={{ color: colors.terminalText }}>{line.slice(7)}</span>
                </>
              ) : (
                line
              )}
            </div>
          );
        }
      });
      totalChars += cmd.output.length * 6 + 18;
    }
  });

  return (
    <div
      style={{
        padding: 32,
        fontFamily: "'SF Mono', 'Fira Code', 'Menlo', monospace",
        fontSize: 22,
        lineHeight: 1.9,
        color: colors.terminalText,
        height: "100%",
        backgroundColor: colors.terminalBg,
      }}
    >
      {renderedLines}
    </div>
  );
};

// Animated particles background
const ParticlesBg: React.FC = () => {
  const frame = useCurrentFrame();
  const particles = Array.from({ length: 60 }, (_, i) => ({
    x: (i * 73) % 100,
    y: (i * 47) % 100,
    size: 3 + (i % 5),
    speed: 0.2 + (i % 5) * 0.08,
  }));

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        const y = (p.y + frame * p.speed * 0.1) % 120 - 10;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: colors.primary,
              opacity: 0.08 + (i % 3) * 0.04,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// Gradient orb background
const GradientOrbs: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.primary}25 0%, transparent 70%)`,
          top: -250 + Math.sin(frame * 0.015) * 60,
          left: -250 + Math.cos(frame * 0.015) * 40,
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, #FF6B6B25 0%, transparent 70%)`,
          bottom: -150 + Math.cos(frame * 0.012) * 50,
          right: -150 + Math.sin(frame * 0.012) * 60,
          filter: "blur(100px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, #3B82F620 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />
    </AbsoluteFill>
  );
};

// Stats counter with dramatic reveal
const StatCard: React.FC<{
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
  delay: number;
  icon?: React.ReactNode;
}> = ({ value, label, prefix = "", suffix = "", color = colors.textPrimary, delay, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleSpring = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const progress = interpolate(frame - delay - 10, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const displayValue = Math.floor(value * easeOutExpo(progress));

  return (
    <div
      style={{
        transform: `scale(${Math.max(0, scaleSpring)})`,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(24px)",
        borderRadius: 24,
        padding: "48px 56px",
        textAlign: "center",
        border: `1px solid ${colors.border}`,
        boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
      }}
    >
      {icon && (
        <div style={{ marginBottom: 16, opacity: 0.6 }}>
          {icon}
        </div>
      )}
      <div
        style={{
          fontSize: 80,
          fontWeight: 700,
          color,
          fontFamily: "Inter, system-ui, sans-serif",
          letterSpacing: -2,
        }}
      >
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 22,
          color: colors.textMuted,
          marginTop: 12,
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
};

// Adapty Logo Component
const AdaptyLogo: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 200, style }) => {
  return (
    <Img
      src={staticFile("adapty-logo.svg")}
      style={{ width: size, height: "auto", ...style }}
    />
  );
};

// Icon Box Component
const IconBox: React.FC<{
  icon: React.ReactNode;
  size?: number;
  color?: string;
}> = ({ icon, size = 72, color = colors.primary }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.25,
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 8px 32px ${color}40`,
      }}
    >
      {icon}
    </div>
  );
};

// Scene 1: Cinematic Intro - AGGRESSIVE
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Dramatic zoom in from far away
  const logoScale = interpolate(frame, [0, 40], [0.3, 1.1], {
    extrapolateRight: "clamp",
  });
  const logoRotateZ = interpolate(frame, [0, 40], [-5, 0], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const titleY = interpolate(frame, [35, 50], [60, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleScale = interpolate(frame, [35, 50], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const dateOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const dateY = interpolate(frame, [50, 65], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{
          transform: `scale(${logoScale}) rotate(${logoRotateZ}deg)`,
        }}>
          <AdaptyLogo size={500} />
        </div>
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px) scale(${titleScale})`,
            fontSize: 72,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 30,
            letterSpacing: -2,
          }}
        >
          Ежедневный отчет
        </div>
        <div
          style={{
            opacity: dateOpacity,
            transform: `translateY(${dateY}px)`,
            fontSize: 42,
            color: colors.textSecondary,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 16,
            fontWeight: 500,
          }}
        >
          21 января 2026
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 2: Terminal with Git commands - AGGRESSIVE CAMERA - MORE DETAILED
const GitCommandsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Dramatic camera sweep
  const windowRotateY = interpolate(frame, [0, 40, 150, 210], [25, 8, 3, -3], {
    extrapolateRight: "clamp",
  });
  const windowRotateX = interpolate(frame, [0, 40, 150, 210], [18, 5, 2, 5], {
    extrapolateRight: "clamp",
  });
  const windowScale = interpolate(frame, [0, 50, 180, 210], [0.55, 1.02, 1.05, 0.98], {
    extrapolateRight: "clamp",
  });
  const translateX = interpolate(frame, [0, 100, 210], [-120, 0, 40], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [-30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <TerminalIcon size={48} weight="duotone" color={colors.primary} />
          <span style={{
            fontSize: 48,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            Git активность - 19 коммитов
          </span>
        </div>
        <Window3D
          rotateY={windowRotateY}
          rotateX={windowRotateX}
          scale={windowScale}
          translateX={translateX}
        >
          <MacWindow title="Terminal - zsh" width={1450} height={760} dark>
            <Terminal
              startFrame={30}
              charDelay={0.8}
              commands={[
                {
                  text: "git log --oneline -10",
                  output: [
                    "a36bd10 feat(marketing): Remove logos, add page-specific variants",
                    "594e87f fix(marketing): Use webpack instead of Turbopack",
                    "0ea5bf9 feat(marketing): Enhance paywall-builder-customization",
                    "11f9714 feat(marketing): Add spotlight effect to features",
                    "5ba750b feat(marketing): Add 3D tilt effect to hero",
                    "8c2e1a3 feat(marketing): Add BorderBeam to all hero sections",
                    "3f9d7b2 feat(marketing): Implement variant switching system",
                    "7a4c6e8 feat(marketing): Add for-marketers, for-developers pages",
                    "2b8f5d1 feat(marketing): Create compare pages (6 competitors)",
                    "9e1c4a7 feat(marketing): Implement stagger reveal animations",
                  ],
                },
                {
                  text: "git diff --shortstat HEAD~19",
                  output: [
                    "218 files changed",
                    "+32146 insertions(+++)",
                    "-1287 deletions(---)",
                  ],
                },
              ]}
            />
          </MacWindow>
        </Window3D>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 3: Stats Explosion
const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <ParticlesBg />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 60,
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <GitBranch size={56} weight="duotone" color={colors.primary} />
          <span style={{
            fontSize: 68,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -2,
          }}>
            Git статистика
          </span>
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          <StatCard
            value={19}
            label="Коммитов"
            color={colors.primary}
            delay={20}
            icon={<CheckCircle size={32} weight="duotone" color={colors.primary} />}
          />
          <StatCard
            value={218}
            label="Файлов изменено"
            color={colors.textPrimary}
            delay={30}
            icon={<Code size={32} weight="duotone" color={colors.textSecondary} />}
          />
          <StatCard
            value={32146}
            label="Строк добавлено"
            prefix="+"
            color={colors.green}
            delay={40}
            icon={<ChartLine size={32} weight="duotone" color={colors.green} />}
          />
          <StatCard
            value={1287}
            label="Строк удалено"
            prefix="-"
            color={colors.red}
            delay={50}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 4A: Paywall Builder - ZOOMED IN CLOSE-UP PAN
const PaywallBuilderScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Window entrance
  const windowRotateY = interpolate(frame, [0, 30], [-30, 5], { extrapolateRight: "clamp" });
  const windowRotateX = interpolate(frame, [0, 30], [15, 3], { extrapolateRight: "clamp" });
  const windowScale = interpolate(frame, [0, 30], [0.5, 1], { extrapolateRight: "clamp" });

  // Ken Burns: zoomed in, panning from top-left to center-right
  const imgScale = interpolate(frame, [0, 120], [2.2, 1.8], { extrapolateRight: "clamp" });
  const imgX = interpolate(frame, [0, 120], [25, -15], { extrapolateRight: "clamp" }); // % offset
  const imgY = interpolate(frame, [0, 120], [20, -10], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 16 }}>
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [0, 15], [0.6, 1], { extrapolateRight: "clamp" })})`,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <Palette size={48} weight="duotone" color={colors.primary} />
          <span style={{ fontSize: 48, fontWeight: 700, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
            Paywall Builder - 3D Tilt Hero
          </span>
        </div>
        <Window3D rotateY={windowRotateY} rotateX={windowRotateX} scale={windowScale}>
          <MacWindow title="adapty-achromatic-proto.vercel.app/paywall-builder" width={1500} height={850}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <Img
                src={staticFile("screenshots/paywall-builder.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${imgScale}) translate(${imgX}%, ${imgY}%)`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </MacWindow>
        </Window3D>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 4B: A/B Testing - ZOOMED IN DIAGONAL SWEEP
const ABTestingScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Window entrance from above
  const windowRotateX = interpolate(frame, [0, 35], [45, 2], { extrapolateRight: "clamp" });
  const windowRotateY = interpolate(frame, [0, 35], [15, -3], { extrapolateRight: "clamp" });
  const windowScale = interpolate(frame, [0, 35], [0.4, 1], { extrapolateRight: "clamp" });

  // Ken Burns: zoomed in, diagonal sweep from bottom-left to top-right
  const imgScale = interpolate(frame, [0, 120], [2.4, 2.0], { extrapolateRight: "clamp" });
  const imgX = interpolate(frame, [0, 120], [-20, 20], { extrapolateRight: "clamp" });
  const imgY = interpolate(frame, [0, 120], [25, -20], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 16 }}>
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [0, 15], [-40, 0], { extrapolateRight: "clamp" })}px)`,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <ChartLine size={48} weight="duotone" color={colors.primary} />
          <span style={{ fontSize: 48, fontWeight: 700, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
            A/B Тестирование - Spotlight эффект
          </span>
        </div>
        <Window3D rotateX={windowRotateX} rotateY={windowRotateY} scale={windowScale}>
          <MacWindow title="adapty-achromatic-proto.vercel.app/paywall-ab-testing" width={1500} height={850}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <Img
                src={staticFile("screenshots/paywall-ab-testing.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${imgScale}) translate(${imgX}%, ${imgY}%)`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </MacWindow>
        </Window3D>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 4C: For Developers - ZOOMED IN HORIZONTAL SCROLL
const ForDevelopersScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Window flip from right
  const windowRotateY = interpolate(frame, [0, 40], [60, -2], { extrapolateRight: "clamp" });
  const windowRotateZ = interpolate(frame, [0, 40], [8, 0], { extrapolateRight: "clamp" });
  const windowScale = interpolate(frame, [0, 40], [0.5, 1], { extrapolateRight: "clamp" });

  // Ken Burns: zoomed in, horizontal scroll right to left
  const imgScale = interpolate(frame, [0, 120], [2.0, 1.7], { extrapolateRight: "clamp" });
  const imgX = interpolate(frame, [0, 120], [30, -25], { extrapolateRight: "clamp" });
  const imgY = interpolate(frame, [0, 120], [5, -5], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 16 }}>
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateX(${interpolate(frame, [0, 15], [80, 0], { extrapolateRight: "clamp" })}px)`,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <Code size={48} weight="duotone" color={colors.primary} />
          <span style={{ fontSize: 48, fontWeight: 700, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
            Для разработчиков - SDK документация
          </span>
        </div>
        <Window3D rotateY={windowRotateY} rotateZ={windowRotateZ} scale={windowScale}>
          <MacWindow title="adapty-achromatic-proto.vercel.app/for-developers" width={1500} height={850}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <Img
                src={staticFile("screenshots/for-developers.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${imgScale}) translate(${imgX}%, ${imgY}%)`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </MacWindow>
        </Window3D>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 4D: Pricing - ZOOMED IN VERTICAL PAN
const PricingScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Window dutch angle entrance
  const windowRotateZ = interpolate(frame, [0, 35], [-15, 0], { extrapolateRight: "clamp" });
  const windowRotateY = interpolate(frame, [0, 35], [-25, 3], { extrapolateRight: "clamp" });
  const windowRotateX = interpolate(frame, [0, 35], [10, 0], { extrapolateRight: "clamp" });
  const windowScale = interpolate(frame, [0, 35], [0.5, 1], { extrapolateRight: "clamp" });

  // Ken Burns: zoomed in, vertical pan from top to bottom
  const imgScale = interpolate(frame, [0, 120], [2.3, 1.9], { extrapolateRight: "clamp" });
  const imgX = interpolate(frame, [0, 120], [0, 10], { extrapolateRight: "clamp" });
  const imgY = interpolate(frame, [0, 120], [-25, 20], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 16 }}>
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          transform: `rotate(${interpolate(frame, [0, 15], [-8, 0], { extrapolateRight: "clamp" })}deg) scale(${interpolate(frame, [0, 15], [0.6, 1], { extrapolateRight: "clamp" })})`,
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <CurrencyDollar size={48} weight="duotone" color={colors.primary} />
          <span style={{ fontSize: 48, fontWeight: 700, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
            Pricing - тарифные планы
          </span>
        </div>
        <Window3D rotateZ={windowRotateZ} rotateY={windowRotateY} rotateX={windowRotateX} scale={windowScale}>
          <MacWindow title="adapty-achromatic-proto.vercel.app/pricing" width={1500} height={850}>
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <Img
                src={staticFile("screenshots/pricing.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${imgScale}) translate(${imgX}%, ${imgY}%)`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </MacWindow>
        </Window3D>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 5: Message from Kirill
const MessageScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const messageLines = [
    "Сергей, добрый вечер!",
    "",
    "Сегодня разработка шла по плану.",
    "Создано более 30 страниц.",
    "",
    "Приобрел курс animations.dev от Emil Kowalski,",
    "дизайнера Linear - нашего ключевого референса.",
    "",
    "Надеюсь, перелет прошел хорошо.",
    "Жду связи завтра!",
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            transform: `scale(${cardScale})`,
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(24px)",
            borderRadius: 28,
            padding: 60,
            width: 920,
            boxShadow: "0 48px 120px rgba(0,0,0,0.18)",
            border: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 36 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                overflow: "hidden",
                border: `4px solid ${colors.primary}`,
                boxShadow: `0 0 0 4px ${colors.primary}20`,
              }}
            >
              <Img
                src={staticFile("kirill-avatar.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: colors.textPrimary,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Кирилл
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: colors.textMuted,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                @kirniy | 21 янв, 23:45
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 26,
              lineHeight: 1.9,
              color: colors.textPrimary,
            }}
          >
            {messageLines.map((line, i) => {
              const lineDelay = 30 + i * 8;
              const opacity = interpolate(frame - lineDelay, [0, 15], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              });
              return (
                <div key={i} style={{ opacity, minHeight: line ? "auto" : 24 }}>
                  {line}
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 6: All Pages Created
const AllPagesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const featurePages = [
    "paywall-builder", "paywall-ab-testing", "onboarding-builder",
    "paywall-library", "paywall-localization", "paywall-targeting",
    "predictive-analytics", "ai-paywall-generator", "ltv-analytics",
    "refund-saver", "remote-config", "fallback-paywalls",
    "revenue-growth", "integrations", "sdk"
  ];

  const rolePages = ["for-marketers", "for-developers", "for-app-owners", "for-indie"];

  const comparePages = [
    "compare", "compare/revenuecat", "compare/superwall",
    "compare/qonversion", "compare/purchasely", "compare/in-house"
  ];

  const otherPages = ["schedule-demo", "why-adapty", "subscriptions-report", "fiscal-calendar"];

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const PagePill: React.FC<{ name: string; delay: number; color?: string }> = ({ name, delay, color }) => {
    const scale = spring({
      frame: frame - delay,
      fps,
      config: { damping: 15, stiffness: 120 },
    });
    return (
      <div
        style={{
          transform: `scale(${Math.max(0, scale)})`,
          backgroundColor: color || "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderRadius: 12,
          padding: "14px 20px",
          fontSize: 17,
          fontWeight: 500,
          color: color ? "white" : colors.textPrimary,
          fontFamily: "'SF Mono', monospace",
          border: `1px solid ${color ? "transparent" : colors.border}`,
          boxShadow: color
            ? `0 8px 24px ${color}40`
            : "0 6px 16px rgba(0,0,0,0.08)",
        }}
      >
        /{name}
      </div>
    );
  };

  const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; count: number }> = ({ icon, title, count }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      {icon}
      <span style={{ fontSize: 24, fontWeight: 600, color: colors.textSecondary, fontFamily: "Inter, system-ui, sans-serif" }}>
        {title}
      </span>
      <span style={{ fontSize: 20, fontWeight: 500, color: colors.textMuted }}>
        ({count})
      </span>
    </div>
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ padding: 70, flexDirection: "column", gap: 28 }}>
        <div style={{ opacity: titleOpacity, textAlign: "center", marginBottom: 10 }}>
          <Stack size={56} weight="duotone" color={colors.primary} style={{ display: "inline-block", marginRight: 20 }} />
          <span style={{ fontSize: 80, fontWeight: 700, color: colors.primary, fontFamily: "Inter, system-ui, sans-serif" }}>30+</span>
          <span style={{ fontSize: 56, fontWeight: 600, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif", marginLeft: 24 }}>Новых страниц</span>
        </div>

        <div>
          <SectionHeader icon={<Palette size={28} weight="duotone" color={colors.primary} />} title="Функциональные страницы" count={15} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {featurePages.map((page, i) => (
              <PagePill key={page} name={page} delay={20 + i * 2} color={page === "paywall-builder" ? colors.primary : undefined} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader icon={<User size={28} weight="duotone" color="#10B981" />} title="Страницы по ролям" count={4} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {rolePages.map((page, i) => (
              <PagePill key={page} name={page} delay={55 + i * 3} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader icon={<ChartLine size={28} weight="duotone" color="#F59E0B" />} title="Страницы сравнения" count={6} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {comparePages.map((page, i) => (
              <PagePill key={page} name={page} delay={75 + i * 3} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader icon={<Compass size={28} weight="duotone" color="#6366F1" />} title="Другие страницы" count={4} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {otherPages.map((page, i) => (
              <PagePill key={page} name={page} delay={100 + i * 3} />
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 7: Emil Kowalski / animations.dev - PACKED LAYOUT
const AnimationsDevScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Aggressive camera zoom and rotation
  const cameraScale = interpolate(frame, [0, 40, 120, 180], [0.7, 1.05, 1.0, 1.1], {
    extrapolateRight: "clamp",
  });
  const cameraRotateZ = interpolate(frame, [0, 60, 180], [-3, 0, 2], {
    extrapolateRight: "clamp",
  });
  const cameraX = interpolate(frame, [0, 90, 180], [-80, 0, 60], {
    extrapolateRight: "clamp",
  });

  const principles = [
    { icon: <Play size={32} weight="fill" color="white" />, title: "useReducedMotion()", desc: "Хук доступности" },
    { icon: <Rocket size={32} weight="fill" color="white" />, title: "GPU-only", desc: "transform, opacity" },
    { icon: <Lightning size={32} weight="fill" color="white" />, title: "< 300ms", desc: "UI анимации" },
    { icon: <Sparkle size={32} weight="fill" color="white" />, title: "bounce: 0.15", desc: "Точные пружины" },
    { icon: <Cube size={32} weight="fill" color="white" />, title: "1-2 элемента", desc: "Анимируй меньше" },
  ];

  const extraPrinciples = [
    { icon: <Code size={28} weight="fill" color="white" />, title: "ease-out-expo", desc: "Профессиональный изинг" },
    { icon: <Desktop size={28} weight="fill" color="white" />, title: "BorderBeam", desc: "Все hero секции" },
    { icon: <ChartLine size={28} weight="fill" color="white" />, title: "Stagger reveal", desc: "Списки и сетки" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <div
        style={{
          transform: `scale(${cameraScale}) rotate(${cameraRotateZ}deg) translateX(${cameraX}px)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "40px 50px",
          gap: 28,
        }}
      >
        {/* Header - compact */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 20,
              overflow: "hidden",
              border: `4px solid ${colors.primary}`,
              boxShadow: `0 8px 32px ${colors.primary}50`,
              flexShrink: 0,
            }}
          >
            <Img
              src={staticFile("emil-avatar.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 52, fontWeight: 700, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.1 }}>
              animations.dev
            </div>
            <div style={{ fontSize: 26, color: colors.textSecondary, fontFamily: "Inter, system-ui, sans-serif", fontWeight: 500, display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
              Emil Kowalski - Дизайнер
              <Img src={staticFile("linear-logo.png")} style={{ height: 26, width: "auto" }} />
            </div>
          </div>
          <div style={{
            backgroundColor: colors.primary,
            color: "white",
            padding: "16px 28px",
            borderRadius: 16,
            fontSize: 22,
            fontWeight: 600,
            fontFamily: "Inter, system-ui, sans-serif",
            boxShadow: `0 8px 32px ${colors.primary}50`,
          }}>
            Курс приобретен
          </div>
        </div>

        {/* Main principles - 5 cards in a row */}
        <div style={{ display: "flex", gap: 16 }}>
          {principles.map((p, i) => {
            const delay = 15 + i * 8;
            const cardScale = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            return (
              <div
                key={p.title}
                style={{
                  transform: `scale(${Math.max(0, cardScale)})`,
                  backgroundColor: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(24px)",
                  borderRadius: 18,
                  padding: "24px 28px",
                  flex: 1,
                  border: `1px solid ${colors.border}`,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <IconBox icon={p.icon} size={52} color={colors.primary} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 600, color: colors.primary, fontFamily: "'SF Mono', monospace", lineHeight: 1.2 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 17, color: colors.textSecondary, marginTop: 6, fontFamily: "Inter, system-ui, sans-serif" }}>
                  {p.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra principles row */}
        <div style={{ display: "flex", gap: 16 }}>
          {extraPrinciples.map((p, i) => {
            const delay = 60 + i * 10;
            const cardScale = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            return (
              <div
                key={p.title}
                style={{
                  transform: `scale(${Math.max(0, cardScale)})`,
                  backgroundColor: "rgba(103, 32, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                  borderRadius: 16,
                  padding: "20px 28px",
                  flex: 1,
                  border: `1px solid ${colors.primary}30`,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                }}
              >
                <IconBox icon={p.icon} size={48} color={colors.primary} />
                <div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: colors.primary, fontFamily: "'SF Mono', monospace" }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 16, color: colors.textSecondary, fontFamily: "Inter, system-ui, sans-serif" }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner - applied to sections */}
        <div
          style={{
            opacity: interpolate(frame, [90, 110], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [90, 110], [30, 0], { extrapolateRight: "clamp" })}px)`,
            fontSize: 36,
            fontWeight: 600,
            color: "white",
            fontFamily: "Inter, system-ui, sans-serif",
            background: `linear-gradient(135deg, ${colors.primary} 0%, #9333EA 100%)`,
            padding: "32px 48px",
            borderRadius: 20,
            textAlign: "center",
            boxShadow: `0 24px 60px ${colors.primary}50`,
          }}
        >
          Применено к 25+ секциям по всему сайту
        </div>

        {/* Code snippets at bottom */}
        <div style={{ display: "flex", gap: 16, opacity: interpolate(frame, [120, 140], [0, 1], { extrapolateRight: "clamp" }) }}>
          <div style={{
            flex: 1,
            backgroundColor: colors.terminalBg,
            borderRadius: 12,
            padding: "16px 20px",
            fontFamily: "'SF Mono', monospace",
            fontSize: 16,
            color: colors.terminalText,
          }}>
            <span style={{ color: colors.terminalPurple }}>const</span> motion = <span style={{ color: colors.terminalGreen }}>spring</span>({'{'} bounce: <span style={{ color: "#F97316" }}>0.15</span> {'}'})
          </div>
          <div style={{
            flex: 1,
            backgroundColor: colors.terminalBg,
            borderRadius: 12,
            padding: "16px 20px",
            fontFamily: "'SF Mono', monospace",
            fontSize: 16,
            color: colors.terminalText,
          }}>
            <span style={{ color: colors.terminalPurple }}>if</span> (<span style={{ color: colors.terminalGreen }}>prefersReducedMotion</span>) <span style={{ color: colors.terminalPurple }}>return</span> <span style={{ color: colors.terminalBlue }}>null</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 8: Key Highlights - RADICAL CAMERA - VERY THOROUGH
const HighlightsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Radical camera movement
  const cameraRotateZ = interpolate(frame, [0, 30, 90, 150], [-6, 0, 2, 0], {
    extrapolateRight: "clamp",
  });
  const cameraScale = interpolate(frame, [0, 40, 80, 150], [0.65, 1.1, 1.0, 1.05], {
    extrapolateRight: "clamp",
  });
  const cameraX = interpolate(frame, [0, 50, 100, 150], [-100, 30, -20, 0], {
    extrapolateRight: "clamp",
  });

  // Main highlights from ACTUAL git commits
  const mainHighlights = [
    { icon: <Stack size={36} weight="duotone" color="white" />, title: "30+ новых страниц", desc: "Feature, Role, Compare", color: colors.primary },
    { icon: <Sparkle size={36} weight="duotone" color="white" />, title: "Emil Kowalski принципы", desc: "animations.dev курс", color: "#9333EA" },
    { icon: <Cube size={36} weight="duotone" color="white" />, title: "3D Tilt + Spotlight", desc: "Paywall Builder hero", color: "#6366F1" },
    { icon: <Compass size={36} weight="duotone" color="white" />, title: "Solutions -> Product", desc: "Консолидация меню", color: "#0EA5E9" },
  ];

  // Secondary highlights from git commits
  const secondaryHighlights = [
    { icon: <Code size={24} weight="fill" color="white" />, title: "section-switchers.tsx", desc: "35+ страниц вариантов" },
    { icon: <Desktop size={24} weight="fill" color="white" />, title: "Page-specific debug", desc: "localStorage настройки" },
    { icon: <Lightning size={24} weight="fill" color="white" />, title: "Упрощение анимаций", desc: "Убраны лишние эффекты" },
    { icon: <Palette size={24} weight="fill" color="white" />, title: "stats-orbital, cta-beam", desc: "Новые варианты" },
    { icon: <Play size={24} weight="fill" color="white" />, title: "Webpack вместо Turbo", desc: "Стабильный dev server" },
    { icon: <ChartLine size={24} weight="fill" color="white" />, title: "Complete navigation", desc: "Footer со всеми ссылками" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <div
        style={{
          transform: `perspective(1200px) rotateZ(${cameraRotateZ}deg) scale(${cameraScale}) translateX(${cameraX}px)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "40px 50px",
          gap: 24,
        }}
      >
        {/* Title */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [0, 15], [0.7, 1], { extrapolateRight: "clamp" })})`,
        }}>
          <Rocket size={60} weight="duotone" color={colors.primary} />
          <span style={{ fontSize: 60, fontWeight: 700, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif", letterSpacing: -2 }}>
            Ключевые улучшения
          </span>
        </div>

        {/* Main 4 cards */}
        <div style={{ display: "flex", gap: 20 }}>
          {mainHighlights.map((h, i) => {
            const delay = 10 + i * 8;
            const rotateY = interpolate(frame - delay, [0, 20], [i % 2 === 0 ? -60 : 60, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            const cardScale = interpolate(frame - delay, [0, 20], [0.4, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            const opacity = interpolate(frame - delay, [0, 12], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

            return (
              <div
                key={h.title}
                style={{
                  transform: `perspective(800px) rotateY(${rotateY}deg) scale(${cardScale})`,
                  opacity,
                  backgroundColor: "rgba(255,255,255,0.98)",
                  backdropFilter: "blur(24px)",
                  borderRadius: 24,
                  padding: "28px 24px",
                  flex: 1,
                  textAlign: "center",
                  border: `2px solid ${h.color}25`,
                  boxShadow: `0 24px 60px ${h.color}20`,
                }}
              >
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${h.color} 0%, ${h.color}CC 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  boxShadow: `0 12px 32px ${h.color}40`,
                }}>
                  {h.icon}
                </div>
                <div style={{ fontSize: 24, fontWeight: 600, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
                  {h.title}
                </div>
                <div style={{ fontSize: 16, color: colors.textMuted, marginTop: 8, fontFamily: "Inter, system-ui, sans-serif" }}>
                  {h.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary highlights - 6 smaller cards in 2 rows */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {secondaryHighlights.map((h, i) => {
            const delay = 50 + i * 6;
            const y = interpolate(frame - delay, [0, 15], [40, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            const opacity = interpolate(frame - delay, [0, 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

            return (
              <div
                key={h.title}
                style={{
                  transform: `translateY(${y}px)`,
                  opacity,
                  backgroundColor: "rgba(103, 32, 255, 0.06)",
                  borderRadius: 16,
                  padding: "18px 24px",
                  flex: "1 1 30%",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  border: `1px solid ${colors.primary}20`,
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  backgroundColor: colors.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
                    {h.title}
                  </div>
                  <div style={{ fontSize: 15, color: colors.textSecondary, fontFamily: "Inter, system-ui, sans-serif" }}>
                    {h.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats banner */}
        <div
          style={{
            opacity: interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" }),
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {[
            { value: "25+", label: "секций улучшено" },
            { value: "< 300ms", label: "все UI анимации" },
            { value: "GPU-only", label: "transform, opacity" },
            { value: "0.15", label: "spring bounce" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "16px 28px",
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: 16,
                border: `1px solid ${colors.border}`,
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: colors.primary, fontFamily: "Inter, system-ui, sans-serif" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 14, color: colors.textMuted, fontFamily: "Inter, system-ui, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 9: Outro - MIND-BLOWING with motion tracking
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Epic camera movements - starts zoomed far, sweeps around, settles dramatically
  const cameraScale = interpolate(frame, [0, 30, 60, 90, 120], [0.3, 1.3, 0.9, 1.1, 1.0], {
    extrapolateRight: "clamp",
  });
  const cameraRotateZ = interpolate(frame, [0, 40, 80, 120], [-15, 8, -3, 0], {
    extrapolateRight: "clamp",
  });
  const cameraRotateY = interpolate(frame, [0, 50, 120], [45, -15, 0], {
    extrapolateRight: "clamp",
  });
  const cameraRotateX = interpolate(frame, [0, 40, 120], [30, -10, 0], {
    extrapolateRight: "clamp",
  });
  const cameraTranslateZ = interpolate(frame, [0, 60, 120], [-500, 150, 0], {
    extrapolateRight: "clamp",
  });
  const cameraX = interpolate(frame, [0, 40, 80, 120], [-300, 100, -50, 0], {
    extrapolateRight: "clamp",
  });
  const cameraY = interpolate(frame, [0, 50, 120], [-200, 80, 0], {
    extrapolateRight: "clamp",
  });

  // Pulsing glow effect
  const glowIntensity = interpolate(frame, [60, 80, 100, 120], [0, 1, 0.6, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <ParticlesBg />

      {/* Epic glowing background pulse */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.primary}${Math.floor(glowIntensity * 40).toString(16).padStart(2, '0')} 0%, transparent 60%)`,
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          transform: `
            perspective(1500px)
            rotateX(${cameraRotateX}deg)
            rotateY(${cameraRotateY}deg)
            rotateZ(${cameraRotateZ}deg)
            scale(${cameraScale})
            translateX(${cameraX}px)
            translateY(${cameraY}px)
            translateZ(${cameraTranslateZ}px)
          `,
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Main logo with glow */}
        <div style={{
          position: "relative",
          filter: `drop-shadow(0 0 ${60 * glowIntensity}px ${colors.primary}80)`,
        }}>
          <AdaptyLogo size={550} />
        </div>

        {/* URL badge */}
        <div
          style={{
            opacity: interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [40, 55], [50, 0], { extrapolateRight: "clamp" })}px)`,
            fontSize: 32,
            fontWeight: 600,
            color: colors.textPrimary,
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
            marginTop: 40,
            padding: "20px 40px",
            background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primary}08 100%)`,
            borderRadius: 20,
            border: `2px solid ${colors.primary}40`,
            boxShadow: `0 20px 60px ${colors.primary}30`,
          }}
        >
          adapty-achromatic-proto.vercel.app
        </div>

        {/* Flying stats - MORE IMPRESSIVE */}
        <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { value: "30+", label: "новых страниц", delay: 45, fromX: -350, fromY: -180, color: colors.primary },
            { value: "19", label: "коммитов", delay: 52, fromX: 300, fromY: -150, color: "#9333EA" },
            { value: "32K+", label: "строк кода", delay: 58, fromX: -280, fromY: 180, color: colors.green },
            { value: "218", label: "файлов изменено", delay: 64, fromX: 350, fromY: 160, color: "#0EA5E9" },
            { value: "25+", label: "секций улучшено", delay: 70, fromX: 0, fromY: -220, color: "#F59E0B" },
          ].map((stat, i) => {
            const progress = interpolate(frame - stat.delay, [0, 25], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            const x = interpolate(progress, [0, 1], [stat.fromX, 0]);
            const y = interpolate(progress, [0, 1], [stat.fromY, 0]);
            const opacity = interpolate(progress, [0, 0.4], [0, 1], { extrapolateRight: "clamp" });
            const scale = interpolate(progress, [0, 0.7, 1], [0.2, 1.15, 1], { extrapolateRight: "clamp" });
            const rotateZ = interpolate(progress, [0, 1], [i % 2 === 0 ? -15 : 15, 0], { extrapolateRight: "clamp" });

            return (
              <div
                key={stat.label}
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotateZ}deg)`,
                  opacity,
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  padding: "20px 32px",
                  borderRadius: 20,
                  border: `2px solid ${stat.color}30`,
                  boxShadow: `0 16px 48px ${stat.color}25`,
                  minWidth: 160,
                }}
              >
                <div style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 16,
                  color: colors.textSecondary,
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 500,
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Signature */}
        <div
          style={{
            opacity: interpolate(frame, [85, 100], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${interpolate(frame, [85, 100], [0.8, 1], { extrapolateRight: "clamp" })})`,
            fontSize: 28,
            color: colors.textMuted,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 50,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              overflow: "hidden",
              border: `2px solid ${colors.primary}`,
            }}
          >
            <Img
              src={staticFile("kirill-avatar.png")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          @kirniy | 21 января 2026
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Main cinematic composition - 60 seconds total (1800 frames at 30fps)
export const DailyReportCinematic: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* 1. Intro: 0-90 (3s) */}
      <Sequence from={0} durationInFrames={90}>
        <IntroScene />
      </Sequence>

      {/* 2. Message from Kirill: 90-300 (7s) */}
      <Sequence from={90} durationInFrames={210}>
        <MessageScene />
      </Sequence>

      {/* 3. Git Commands Terminal: 300-510 (7s) */}
      <Sequence from={300} durationInFrames={210}>
        <GitCommandsScene />
      </Sequence>

      {/* 4. Stats Explosion: 510-660 (5s) */}
      <Sequence from={510} durationInFrames={150}>
        <StatsScene />
      </Sequence>

      {/* 5. All Pages Created: 660-870 (7s) */}
      <Sequence from={660} durationInFrames={210}>
        <AllPagesScene />
      </Sequence>

      {/* 6. Paywall Builder: 870-990 (4s) - SWEEP FROM LEFT */}
      <Sequence from={870} durationInFrames={120}>
        <PaywallBuilderScene />
      </Sequence>

      {/* 7. AB Testing: 990-1110 (4s) - TOP-DOWN DIVE */}
      <Sequence from={990} durationInFrames={120}>
        <ABTestingScene />
      </Sequence>

      {/* 8. For Developers: 1110-1230 (4s) - SIDE FLIP */}
      <Sequence from={1110} durationInFrames={120}>
        <ForDevelopersScene />
      </Sequence>

      {/* 9. Pricing: 1230-1350 (4s) - DUTCH ANGLE */}
      <Sequence from={1230} durationInFrames={120}>
        <PricingScene />
      </Sequence>

      {/* 10. animations.dev: 1350-1530 (6s) */}
      <Sequence from={1350} durationInFrames={180}>
        <AnimationsDevScene />
      </Sequence>

      {/* 11. Key Highlights: 1530-1680 (5s) */}
      <Sequence from={1530} durationInFrames={150}>
        <HighlightsScene />
      </Sequence>

      {/* 12. Outro: 1680-1800 (4s) */}
      <Sequence from={1680} durationInFrames={120}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
