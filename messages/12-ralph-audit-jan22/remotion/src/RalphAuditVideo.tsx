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
  Bug,
  Warning,
  CheckCircle,
  Code,
  Lightning,
  Terminal as TerminalIcon,
  Wrench,
  MagnifyingGlass,
  Sparkle,
  Rocket,
  GitBranch,
  ArrowRight,
  X,
  Check,
  Eye,
  Cursor,
  Repeat,
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
  orange: "#F59E0B",
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
              ) : line.includes("BUG") || line.includes("ERROR") ? (
                <span style={{ color: colors.red }}>{line}</span>
              ) : line.includes("FIX") || line.includes("OK") ? (
                <span style={{ color: colors.green }}>{line}</span>
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
        fontSize: 20,
        lineHeight: 1.8,
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
          background: `radial-gradient(circle, ${colors.red}20 0%, transparent 70%)`,
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
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
  delay: number;
  icon?: React.ReactNode;
  isString?: boolean;
}> = ({ value, label, prefix = "", suffix = "", color = colors.textPrimary, delay, icon, isString = false }) => {
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

  const displayValue = isString ? value : Math.floor(Number(value) * easeOutExpo(progress));

  return (
    <div
      style={{
        transform: `scale(${Math.max(0, scaleSpring)})`,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(24px)",
        borderRadius: 24,
        padding: "40px 48px",
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
          fontSize: 64,
          fontWeight: 700,
          color,
          fontFamily: "Inter, system-ui, sans-serif",
          letterSpacing: -2,
        }}
      >
        {prefix}
        {isString ? value : displayValue.toLocaleString()}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 20,
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

// Scene 1: Cinematic Intro - Ralph Audit
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

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

  const subtitleOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subtitleY = interpolate(frame, [50, 65], [30, 0], {
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
          <AdaptyLogo size={450} />
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
          Аудит работы Ralph
        </div>
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            fontSize: 36,
            color: colors.textSecondary,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 16,
            fontWeight: 500,
          }}
        >
          22 января 2026 | Ночная сессия
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 2: The Problem - 20,000 lines, nothing changed
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const shakeAmount = frame > 60 && frame < 90 ? Math.sin(frame * 2) * 3 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 40,
          transform: `translateX(${shakeAmount}px)`,
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
          <Warning size={64} weight="duotone" color={colors.orange} />
          <span style={{
            fontSize: 64,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -2,
          }}>
            Проблема
          </span>
        </div>

        <div style={{
          fontSize: 120,
          fontWeight: 800,
          color: colors.red,
          fontFamily: "Inter, system-ui, sans-serif",
          letterSpacing: -4,
          opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [20, 40], [0.5, 1], { extrapolateRight: "clamp" })})`,
        }}>
          20,000+ строк
        </div>

        <div style={{
          fontSize: 48,
          fontWeight: 600,
          color: colors.textSecondary,
          fontFamily: "Inter, system-ui, sans-serif",
          opacity: interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          изменено за ночь в 91 файле
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginTop: 20,
          opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [60, 80], [40, 0], { extrapolateRight: "clamp" })}px)`,
        }}>
          <X size={48} weight="bold" color={colors.red} />
          <span style={{
            fontSize: 52,
            fontWeight: 700,
            color: colors.red,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            Ничего не изменилось визуально!
          </span>
        </div>

        <div style={{
          fontSize: 28,
          color: colors.textMuted,
          fontFamily: "Inter, system-ui, sans-serif",
          marginTop: 30,
          opacity: interpolate(frame, [90, 105], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          "20,000 строк и все выглядит так же, как до работы"
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 3: Investigation - Terminal
const InvestigationScene: React.FC = () => {
  const frame = useCurrentFrame();

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
          <MagnifyingGlass size={48} weight="duotone" color={colors.primary} />
          <span style={{
            fontSize: 48,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            Расследование
          </span>
        </div>
        <Window3D
          rotateY={windowRotateY}
          rotateX={windowRotateX}
          scale={windowScale}
          translateX={translateX}
        >
          <MacWindow title="Terminal - Audit" width={1450} height={700} dark>
            <Terminal
              startFrame={30}
              charDelay={0.6}
              commands={[
                {
                  text: "grep -r 'BorderBeam\\|Spotlight' --include='*.tsx' | wc -l",
                  output: [
                    "290+ использований найдено",
                  ],
                },
                {
                  text: "# Анализ компонентов...",
                  output: [
                    "BUG #1: Spotlight - pointer-events-none блокирует события!",
                    "BUG #2: BorderBeam - CSS переменные не резолвятся!",
                  ],
                },
                {
                  text: "# Все эффекты были НЕВИДИМЫ из-за 2 багов",
                  output: [
                    "Spotlight: opacity всегда = 0 (события не срабатывали)",
                    "BorderBeam: colorFrom/colorTo = undefined",
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

// Scene 4: Bug #1 - Spotlight
const Bug1Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const beforeOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const afterOpacity = interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ padding: 60, flexDirection: "column", gap: 32 }}>
        <div style={{
          opacity: titleOpacity,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}>
          <Bug size={56} weight="duotone" color={colors.red} />
          <span style={{
            fontSize: 56,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            Баг #1: Spotlight
          </span>
        </div>

        <div style={{ display: "flex", gap: 32, flex: 1 }}>
          {/* Before */}
          <div style={{
            flex: 1,
            opacity: beforeOpacity,
            backgroundColor: "#FEF2F2",
            borderRadius: 20,
            padding: 32,
            border: `2px solid ${colors.red}`,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}>
              <X size={32} weight="bold" color={colors.red} />
              <span style={{ fontSize: 28, fontWeight: 600, color: colors.red, fontFamily: "Inter, system-ui, sans-serif" }}>
                БЫЛО (сломано)
              </span>
            </div>
            <div style={{
              backgroundColor: colors.terminalBg,
              borderRadius: 12,
              padding: 24,
              fontFamily: "'SF Mono', monospace",
              fontSize: 16,
              lineHeight: 1.8,
            }}>
              <div style={{ color: colors.terminalText }}>
                <span style={{ color: colors.terminalPurple }}>{"<div"}</span>
              </div>
              <div style={{ color: colors.terminalText, paddingLeft: 24 }}>
                <span style={{ color: colors.terminalBlue }}>onMouseMove</span>={"{"}<span style={{ color: colors.terminalGreen }}>handleMouseMove</span>{"}"}
              </div>
              <div style={{ color: colors.terminalText, paddingLeft: 24 }}>
                <span style={{ color: colors.terminalBlue }}>className</span>="<span style={{ color: colors.red }}>pointer-events-none</span> ..."
              </div>
              <div style={{ color: colors.terminalText }}>
                <span style={{ color: colors.terminalPurple }}>{"/>"}</span>
              </div>
              <div style={{ marginTop: 16, color: colors.red, fontWeight: 600 }}>
                // pointer-events-none БЛОКИРУЕТ события!
              </div>
              <div style={{ color: colors.red }}>
                // onMouseMove НИКОГДА не срабатывает
              </div>
              <div style={{ color: colors.red }}>
                // opacity всегда = 0 (невидимо)
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            <ArrowRight size={64} weight="bold" color={colors.primary} />
          </div>

          {/* After */}
          <div style={{
            flex: 1,
            opacity: afterOpacity,
            backgroundColor: "#F0FDF4",
            borderRadius: 20,
            padding: 32,
            border: `2px solid ${colors.green}`,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}>
              <Check size={32} weight="bold" color={colors.green} />
              <span style={{ fontSize: 28, fontWeight: 600, color: colors.green, fontFamily: "Inter, system-ui, sans-serif" }}>
                СТАЛО (исправлено)
              </span>
            </div>
            <div style={{
              backgroundColor: colors.terminalBg,
              borderRadius: 12,
              padding: 24,
              fontFamily: "'SF Mono', monospace",
              fontSize: 16,
              lineHeight: 1.8,
            }}>
              <div style={{ color: colors.terminalText }}>
                <span style={{ color: colors.terminalPurple }}>useEffect</span>{"(() => {"}
              </div>
              <div style={{ color: colors.terminalText, paddingLeft: 24 }}>
                <span style={{ color: colors.terminalGreen }}>parent</span>.addEventListener(...)
              </div>
              <div style={{ color: colors.terminalText }}>
                {"}, []);"}
              </div>
              <div style={{ marginTop: 16, color: colors.green, fontWeight: 600 }}>
                // События на РОДИТЕЛЕ, не на элементе
              </div>
              <div style={{ color: colors.green }}>
                // Spotlight остается pointer-events-none
              </div>
              <div style={{ color: colors.green }}>
                // Но теперь работает!
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 5: Bug #2 - BorderBeam
const Bug2Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const beforeOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const afterOpacity = interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ padding: 60, flexDirection: "column", gap: 32 }}>
        <div style={{
          opacity: titleOpacity,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}>
          <Bug size={56} weight="duotone" color={colors.red} />
          <span style={{
            fontSize: 56,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            Баг #2: BorderBeam
          </span>
        </div>

        <div style={{ display: "flex", gap: 32, flex: 1 }}>
          {/* Before */}
          <div style={{
            flex: 1,
            opacity: beforeOpacity,
            backgroundColor: "#FEF2F2",
            borderRadius: 20,
            padding: 32,
            border: `2px solid ${colors.red}`,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}>
              <X size={32} weight="bold" color={colors.red} />
              <span style={{ fontSize: 28, fontWeight: 600, color: colors.red, fontFamily: "Inter, system-ui, sans-serif" }}>
                БЫЛО (сломано)
              </span>
            </div>
            <div style={{
              backgroundColor: colors.terminalBg,
              borderRadius: 12,
              padding: 24,
              fontFamily: "'SF Mono', monospace",
              fontSize: 16,
              lineHeight: 1.8,
            }}>
              <div style={{ color: colors.terminalText }}>
                <span style={{ color: colors.terminalPurple }}>colorFrom</span>=
                <span style={{ color: colors.orange }}>"hsl(var(--primary))"</span>
              </div>
              <div style={{ color: colors.terminalText }}>
                <span style={{ color: colors.terminalPurple }}>colorTo</span>=
                <span style={{ color: colors.orange }}>"hsl(var(--primary)/0)"</span>
              </div>
              <div style={{ marginTop: 16, color: colors.red, fontWeight: 600 }}>
                // CSS переменные НЕ резолвятся
              </div>
              <div style={{ color: colors.red }}>
                // в custom properties!
              </div>
              <div style={{ color: colors.red }}>
                // Цвета = undefined = невидимо
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" }),
          }}>
            <ArrowRight size={64} weight="bold" color={colors.primary} />
          </div>

          {/* After */}
          <div style={{
            flex: 1,
            opacity: afterOpacity,
            backgroundColor: "#F0FDF4",
            borderRadius: 20,
            padding: 32,
            border: `2px solid ${colors.green}`,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}>
              <Check size={32} weight="bold" color={colors.green} />
              <span style={{ fontSize: 28, fontWeight: 600, color: colors.green, fontFamily: "Inter, system-ui, sans-serif" }}>
                СТАЛО (исправлено)
              </span>
            </div>
            <div style={{
              backgroundColor: colors.terminalBg,
              borderRadius: 12,
              padding: 24,
              fontFamily: "'SF Mono', monospace",
              fontSize: 16,
              lineHeight: 1.8,
            }}>
              <div style={{ color: colors.terminalText }}>
                <span style={{ color: colors.terminalPurple }}>function</span> <span style={{ color: colors.terminalGreen }}>resolveColor</span>(color) {"{"}
              </div>
              <div style={{ color: colors.terminalText, paddingLeft: 24 }}>
                <span style={{ color: colors.terminalPurple }}>if</span> (color.includes(<span style={{ color: colors.orange }}>'--primary'</span>))
              </div>
              <div style={{ color: colors.terminalText, paddingLeft: 48 }}>
                <span style={{ color: colors.terminalPurple }}>return</span> <span style={{ color: colors.orange }}>'#6720FF'</span>
              </div>
              <div style={{ color: colors.terminalText }}>
                {"}"}
              </div>
              <div style={{ marginTop: 16, color: colors.green, fontWeight: 600 }}>
                // Резолвим CSS vars в реальные цвета!
              </div>
              <div style={{ color: colors.green }}>
                // #6720FF = Adapty Purple
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 6: Impact Stats
const ImpactScene: React.FC = () => {
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
          gap: 50,
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
          <Lightning size={56} weight="duotone" color={colors.primary} />
          <span style={{
            fontSize: 64,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -2,
          }}>
            Масштаб проблемы
          </span>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <StatCard
            value={2}
            label="Критических бага"
            color={colors.red}
            delay={20}
            icon={<Bug size={32} weight="duotone" color={colors.red} />}
          />
          <StatCard
            value={290}
            label="Использований"
            suffix="+"
            color={colors.orange}
            delay={30}
            icon={<Repeat size={32} weight="duotone" color={colors.orange} />}
          />
          <StatCard
            value={83}
            label="Файлов затронуто"
            suffix="+"
            color={colors.primary}
            delay={40}
            icon={<Code size={32} weight="duotone" color={colors.primary} />}
          />
        </div>

        <div style={{
          fontSize: 36,
          fontWeight: 600,
          color: colors.textSecondary,
          fontFamily: "Inter, system-ui, sans-serif",
          textAlign: "center",
          maxWidth: 900,
          opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          Два бага на уровне компонентов делали ВСЕ анимации невидимыми
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 7: Fix Applied - Git commit
const FixScene: React.FC = () => {
  const frame = useCurrentFrame();

  const windowRotateY = interpolate(frame, [0, 40], [20, 3], {
    extrapolateRight: "clamp",
  });
  const windowRotateX = interpolate(frame, [0, 40], [15, 2], {
    extrapolateRight: "clamp",
  });
  const windowScale = interpolate(frame, [0, 50], [0.6, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            opacity: titleOpacity,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Wrench size={48} weight="duotone" color={colors.green} />
          <span style={{
            fontSize: 48,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            Исправление применено
          </span>
        </div>
        <Window3D
          rotateY={windowRotateY}
          rotateX={windowRotateX}
          scale={windowScale}
        >
          <MacWindow title="Terminal - Git Commit" width={1400} height={650} dark>
            <Terminal
              startFrame={30}
              charDelay={0.7}
              commands={[
                {
                  text: "git commit -m 'fix: Fix critical animation bugs'",
                  output: [
                    "[main f11aaf1] fix: Fix critical animation bugs",
                    " 2 files changed, 60 insertions(+), 19 deletions(-)",
                  ],
                },
                {
                  text: "git push origin main",
                  output: [
                    "To https://github.com/kirniy/adapty-webdev.git",
                    "   ea2d670..f11aaf1  main -> main",
                    "",
                    "OK Deployed to Vercel",
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

// Scene 8: Verification - Now Working
const VerificationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const effects = [
    { icon: <Cursor size={36} weight="duotone" color="white" />, title: "Spotlight", desc: "Курсор-трекинг работает", color: colors.primary },
    { icon: <Sparkle size={36} weight="duotone" color="white" />, title: "BorderBeam", desc: "Анимация границ работает", color: "#9333EA" },
    { icon: <Eye size={36} weight="duotone" color="white" />, title: "Hover эффекты", desc: "Scale, shadow, y-offset", color: "#0EA5E9" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 50,
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
          <CheckCircle size={64} weight="duotone" color={colors.green} />
          <span style={{
            fontSize: 64,
            fontWeight: 700,
            color: colors.green,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -2,
          }}>
            Теперь работает!
          </span>
        </div>

        <div style={{ display: "flex", gap: 28 }}>
          {effects.map((e, i) => {
            const delay = 20 + i * 12;
            const cardScale = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            return (
              <div
                key={e.title}
                style={{
                  transform: `scale(${Math.max(0, cardScale)})`,
                  backgroundColor: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(24px)",
                  borderRadius: 24,
                  padding: "40px 48px",
                  textAlign: "center",
                  border: `2px solid ${e.color}30`,
                  boxShadow: `0 24px 60px ${e.color}25`,
                  minWidth: 280,
                }}
              >
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: 24,
                  background: `linear-gradient(135deg, ${e.color} 0%, ${e.color}CC 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: `0 12px 32px ${e.color}40`,
                }}>
                  {e.icon}
                </div>
                <div style={{ fontSize: 28, fontWeight: 600, color: colors.textPrimary, fontFamily: "Inter, system-ui, sans-serif" }}>
                  {e.title}
                </div>
                <div style={{ fontSize: 18, color: colors.textMuted, marginTop: 12, fontFamily: "Inter, system-ui, sans-serif" }}>
                  {e.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          fontSize: 32,
          fontWeight: 600,
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
          background: `linear-gradient(135deg, ${colors.green} 0%, #10B981 100%)`,
          padding: "24px 48px",
          borderRadius: 20,
          opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" }),
          boxShadow: `0 24px 60px ${colors.green}40`,
        }}>
          Все 290+ использований теперь видимы
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 9: Outro
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 30, 60, 90, 120], [0.3, 1.3, 0.9, 1.1, 1.0], {
    extrapolateRight: "clamp",
  });
  const cameraRotateZ = interpolate(frame, [0, 40, 80, 120], [-15, 8, -3, 0], {
    extrapolateRight: "clamp",
  });

  const glowIntensity = interpolate(frame, [60, 80, 100, 120], [0, 1, 0.6, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GradientOrbs />
      <ParticlesBg />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.green}${Math.floor(glowIntensity * 40).toString(16).padStart(2, '0')} 0%, transparent 60%)`,
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          transform: `scale(${cameraScale}) rotate(${cameraRotateZ}deg)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{
          position: "relative",
          filter: `drop-shadow(0 0 ${60 * glowIntensity}px ${colors.green}80)`,
        }}>
          <AdaptyLogo size={500} />
        </div>

        <div
          style={{
            opacity: interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [40, 55], [50, 0], { extrapolateRight: "clamp" })}px)`,
            fontSize: 48,
            fontWeight: 700,
            color: colors.green,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 40,
          }}
        >
          Аудит завершен. Баги исправлены.
        </div>

        <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { value: "2", label: "бага найдено", color: colors.red },
            { value: "2", label: "бага исправлено", color: colors.green },
            { value: "290+", label: "эффектов работают", color: colors.primary },
          ].map((stat, i) => {
            const delay = 50 + i * 10;
            const opacity = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            const scale = interpolate(frame - delay, [0, 20], [0.5, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

            return (
              <div
                key={stat.label}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  padding: "24px 40px",
                  borderRadius: 20,
                  border: `2px solid ${stat.color}30`,
                  boxShadow: `0 16px 48px ${stat.color}25`,
                }}
              >
                <div style={{
                  fontSize: 56,
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 18,
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

        <div
          style={{
            opacity: interpolate(frame, [85, 100], [0, 1], { extrapolateRight: "clamp" }),
            fontSize: 24,
            color: colors.textMuted,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 40,
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
          @kirniy | 22 января 2026
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Main composition - 45 seconds total (1350 frames at 30fps)
export const RalphAuditVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* 1. Intro: 0-90 (3s) */}
      <Sequence from={0} durationInFrames={90}>
        <IntroScene />
      </Sequence>

      {/* 2. Problem: 90-240 (5s) */}
      <Sequence from={90} durationInFrames={150}>
        <ProblemScene />
      </Sequence>

      {/* 3. Investigation: 240-450 (7s) */}
      <Sequence from={240} durationInFrames={210}>
        <InvestigationScene />
      </Sequence>

      {/* 4. Bug #1 Spotlight: 450-630 (6s) */}
      <Sequence from={450} durationInFrames={180}>
        <Bug1Scene />
      </Sequence>

      {/* 5. Bug #2 BorderBeam: 630-810 (6s) */}
      <Sequence from={630} durationInFrames={180}>
        <Bug2Scene />
      </Sequence>

      {/* 6. Impact: 810-960 (5s) */}
      <Sequence from={810} durationInFrames={150}>
        <ImpactScene />
      </Sequence>

      {/* 7. Fix: 960-1110 (5s) */}
      <Sequence from={960} durationInFrames={150}>
        <FixScene />
      </Sequence>

      {/* 8. Verification: 1110-1230 (4s) */}
      <Sequence from={1110} durationInFrames={120}>
        <VerificationScene />
      </Sequence>

      {/* 9. Outro: 1230-1350 (4s) */}
      <Sequence from={1230} durationInFrames={120}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
