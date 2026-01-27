import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  random,
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
  Clock,
  File,
  ArrowUp,
  ArrowDown,
  Circle,
  Play,
  Robot,
  Brain,
  Gear,
  Timer,
  Fire,
  Skull,
  Heart,
  Trophy,
} from "@phosphor-icons/react";

// ============================================================================
// DESIGN SYSTEM - Cyberpunk/Crypto Trading Aesthetic
// ============================================================================

const colors = {
  bg: "#0A0A0F",
  bgDark: "#050508",
  primary: "#6720FF",
  primaryGlow: "#8B5CF6",
  neonGreen: "#22C55E",
  neonRed: "#EF4444",
  neonBlue: "#3B82F6",
  neonOrange: "#F59E0B",
  textPrimary: "#FFFFFF",
  textSecondary: "#A0A0B0",
  textMuted: "#606070",
  terminalBg: "#0D1117",
  terminalText: "#E6EDF3",
  terminalGreen: "#3FB950",
  terminalPurple: "#A371F7",
  terminalBlue: "#58A6FF",
};

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

// Film grain overlay
const FilmGrain: React.FC<{ intensity?: number }> = ({ intensity = 0.03 }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{
      opacity: intensity,
      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='${frame % 30}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: "overlay",
      pointerEvents: "none",
    }} />
  );
};

// Scanlines overlay
const Scanlines: React.FC<{ opacity?: number }> = ({ opacity = 0.05 }) => {
  return (
    <AbsoluteFill style={{
      background: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, ${opacity}) 2px,
        rgba(0, 0, 0, ${opacity}) 4px
      )`,
      pointerEvents: "none",
    }} />
  );
};

// Chromatic aberration text
const GlitchText: React.FC<{
  children: string;
  fontSize: number;
  color?: string;
  glitchIntensity?: number;
  style?: React.CSSProperties;
}> = ({ children, fontSize, color = colors.textPrimary, glitchIntensity = 2, style }) => {
  const frame = useCurrentFrame();
  const glitchOffset = Math.sin(frame * 0.5) * glitchIntensity;
  const shouldGlitch = frame % 30 < 3;

  return (
    <div style={{ position: "relative", ...style }}>
      {/* Red channel */}
      <span style={{
        position: "absolute",
        color: "#FF0000",
        opacity: 0.5,
        transform: `translateX(${shouldGlitch ? -glitchIntensity * 2 : -glitchOffset}px)`,
        fontSize,
        fontWeight: 900,
        fontFamily: "Inter, system-ui, sans-serif",
        mixBlendMode: "screen",
      }}>
        {children}
      </span>
      {/* Blue channel */}
      <span style={{
        position: "absolute",
        color: "#0000FF",
        opacity: 0.5,
        transform: `translateX(${shouldGlitch ? glitchIntensity * 2 : glitchOffset}px)`,
        fontSize,
        fontWeight: 900,
        fontFamily: "Inter, system-ui, sans-serif",
        mixBlendMode: "screen",
      }}>
        {children}
      </span>
      {/* Main text */}
      <span style={{
        position: "relative",
        color,
        fontSize,
        fontWeight: 900,
        fontFamily: "Inter, system-ui, sans-serif",
        textShadow: `0 0 20px ${color}80`,
      }}>
        {children}
      </span>
    </div>
  );
};

// Number ticker animation (slot machine style)
const NumberTicker: React.FC<{
  value: number;
  fontSize: number;
  color?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}> = ({ value, fontSize, color = colors.neonGreen, prefix = "", suffix = "", duration = 30, delay = 0 }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const eased = 1 - Math.pow(1 - progress, 4); // ease out quart
  const displayValue = Math.floor(value * eased);

  // Blur effect during animation
  const blur = interpolate(progress, [0, 0.8, 1], [4, 2, 0], { extrapolateRight: "clamp" });

  return (
    <div style={{
      fontSize,
      fontWeight: 900,
      fontFamily: "'SF Mono', 'JetBrains Mono', monospace",
      color,
      textShadow: `0 0 30px ${color}, 0 0 60px ${color}80`,
      filter: `blur(${blur}px)`,
      letterSpacing: -2,
    }}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </div>
  );
};

// Pulsing glow orb
const GlowOrb: React.FC<{
  color: string;
  size: number;
  x: number;
  y: number;
  pulseSpeed?: number;
}> = ({ color, size, x, y, pulseSpeed = 0.05 }) => {
  const frame = useCurrentFrame();
  const pulse = 0.7 + Math.sin(frame * pulseSpeed) * 0.3;

  return (
    <div style={{
      position: "absolute",
      left: x,
      top: y,
      width: size * pulse,
      height: size * pulse,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
      filter: "blur(40px)",
      transform: "translate(-50%, -50%)",
    }} />
  );
};

// Animated border beam (for cards)
const BorderBeamEffect: React.FC<{ color?: string }> = ({ color = colors.primary }) => {
  const frame = useCurrentFrame();
  const progress = (frame * 2) % 400;

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      overflow: "hidden",
      pointerEvents: "none",
    }}>
      <div style={{
        position: "absolute",
        width: 100,
        height: 100,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(8px)",
        transform: `rotate(${progress}deg) translateX(200px)`,
        transformOrigin: "center center",
        left: "50%",
        top: "50%",
        marginLeft: -50,
        marginTop: -50,
      }} />
    </div>
  );
};

// Live indicator
const LiveIndicator: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.3) > 0;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      padding: "8px 16px",
      borderRadius: 8,
      border: "1px solid #FF0000",
    }}>
      <div style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: pulse ? "#FF0000" : "#880000",
        boxShadow: pulse ? "0 0 20px #FF0000" : "none",
      }} />
      <span style={{
        color: "#FF0000",
        fontWeight: 700,
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 14,
        letterSpacing: 2,
      }}>
        LIVE
      </span>
    </div>
  );
};

// Typing cursor
const TypingCursor: React.FC = () => {
  const frame = useCurrentFrame();
  const visible = frame % 30 < 15;

  return (
    <span style={{
      display: "inline-block",
      width: 3,
      height: "1em",
      backgroundColor: colors.neonGreen,
      marginLeft: 4,
      opacity: visible ? 1 : 0,
      boxShadow: `0 0 10px ${colors.neonGreen}`,
    }} />
  );
};

// Code block with syntax highlighting
const CodeBlock: React.FC<{
  lines: { text: string; color?: string; indent?: number }[];
  startFrame: number;
  charDelay?: number;
}> = ({ lines, startFrame, charDelay = 0.8 }) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  let totalChars = 0;

  return (
    <div style={{
      backgroundColor: colors.terminalBg,
      borderRadius: 12,
      padding: 24,
      fontFamily: "'SF Mono', 'JetBrains Mono', monospace",
      fontSize: 18,
      lineHeight: 1.8,
      border: `1px solid ${colors.primary}30`,
      boxShadow: `0 0 40px ${colors.primary}20`,
    }}>
      {lines.map((line, i) => {
        const lineStart = totalChars;
        totalChars += line.text.length + 5;
        const charsTyped = Math.floor(relativeFrame / charDelay) - lineStart;
        const visibleText = line.text.slice(0, Math.max(0, charsTyped));
        const showCursor = charsTyped >= 0 && charsTyped <= line.text.length;

        return (
          <div key={i} style={{
            paddingLeft: (line.indent || 0) * 24,
            color: line.color || colors.terminalText,
            opacity: charsTyped > 0 ? 1 : 0.3,
          }}>
            {visibleText}
            {showCursor && <TypingCursor />}
          </div>
        );
      })}
    </div>
  );
};

// Stat card with glow
const StatCardGlow: React.FC<{
  value: string | number;
  label: string;
  color: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ value, label, color, icon, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 100 },
  });

  const glowPulse = 0.5 + Math.sin((frame - delay) * 0.1) * 0.5;

  return (
    <div style={{
      transform: `scale(${Math.max(0, scale)})`,
      backgroundColor: `${color}15`,
      borderRadius: 20,
      padding: "32px 40px",
      textAlign: "center",
      border: `2px solid ${color}50`,
      boxShadow: `0 0 ${40 * glowPulse}px ${color}40, inset 0 0 30px ${color}10`,
      position: "relative",
      overflow: "hidden",
    }}>
      <BorderBeamEffect color={color} />
      <div style={{ marginBottom: 16, opacity: 0.8 }}>
        {icon}
      </div>
      <div style={{
        fontSize: 56,
        fontWeight: 900,
        color,
        fontFamily: "'SF Mono', monospace",
        textShadow: `0 0 30px ${color}`,
        letterSpacing: -2,
      }}>
        {value}
      </div>
      <div style={{
        fontSize: 16,
        color: colors.textSecondary,
        marginTop: 8,
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: 2,
      }}>
        {label}
      </div>
    </div>
  );
};

// ============================================================================
// SCENES
// ============================================================================

// Scene 1: RALPH ACTIVATED - Intro
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Dramatic zoom
  const scale = interpolate(frame, [0, 20], [3, 1], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  // Text reveals
  const text1 = interpolate(frame, [15, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const text2 = interpolate(frame, [30, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const text3 = interpolate(frame, [45, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Shake effect
  const shake = frame > 50 && frame < 70 ? Math.sin(frame * 3) * 3 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.primary} size={800} x={960} y={540} pulseSpeed={0.08} />
      <GlowOrb color={colors.neonBlue} size={600} x={300} y={200} pulseSpeed={0.06} />
      <GlowOrb color={colors.primaryGlow} size={500} x={1600} y={800} pulseSpeed={0.07} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale}) translateX(${shake}px)`,
        opacity,
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            opacity: text1,
            transform: `translateY(${interpolate(text1, [0, 1], [50, 0])}px)`,
          }}>
            <Robot size={120} weight="duotone" color={colors.primary} style={{ filter: `drop-shadow(0 0 30px ${colors.primary})` }} />
          </div>

          <div style={{
            opacity: text2,
            transform: `scale(${interpolate(text2, [0, 1], [0.5, 1])})`,
            marginTop: 20,
          }}>
            <GlitchText fontSize={120} color={colors.textPrimary}>
              RALPH
            </GlitchText>
          </div>

          <div style={{
            opacity: text3,
            transform: `translateY(${interpolate(text3, [0, 1], [30, 0])}px)`,
            marginTop: 20,
          }}>
            <span style={{
              fontSize: 36,
              fontWeight: 600,
              color: colors.neonGreen,
              fontFamily: "Inter, system-ui, sans-serif",
              textShadow: `0 0 20px ${colors.neonGreen}`,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}>
              Автономный AI агент
            </span>
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines opacity={0.03} />
      <FilmGrain intensity={0.02} />
    </AbsoluteFill>
  );
};

// Scene 2: OVERNIGHT RUN - Stats explosion
const OvernightScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const statsDelay = [20, 35, 50, 65];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonBlue} size={700} x={200} y={300} />
      <GlowOrb color={colors.primary} size={600} x={1700} y={700} />

      <AbsoluteFill style={{ padding: 60 }}>
        {/* Title */}
        <div style={{
          opacity: titleOpacity,
          transform: `translateX(${interpolate(titleOpacity, [0, 1], [-100, 0])}px)`,
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 40,
        }}>
          <Clock size={48} weight="duotone" color={colors.neonBlue} />
          <span style={{
            fontSize: 48,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -1,
          }}>
            НОЧНАЯ СЕССИЯ
          </span>
          <LiveIndicator />
        </div>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginTop: 40,
        }}>
          <StatCardGlow
            value="20,000+"
            label="Строк кода"
            color={colors.neonGreen}
            icon={<Code size={40} weight="duotone" color={colors.neonGreen} />}
            delay={statsDelay[0]}
          />
          <StatCardGlow
            value="91"
            label="Файлов"
            color={colors.neonBlue}
            icon={<File size={40} weight="duotone" color={colors.neonBlue} />}
            delay={statsDelay[1]}
          />
          <StatCardGlow
            value="8+"
            label="Часов работы"
            color={colors.primary}
            icon={<Timer size={40} weight="duotone" color={colors.primary} />}
            delay={statsDelay[2]}
          />
          <StatCardGlow
            value="0"
            label="Перерывов"
            color={colors.primaryGlow}
            icon={<Robot size={40} weight="duotone" color={colors.primaryGlow} />}
            delay={statsDelay[3]}
          />
        </div>

        {/* Big number reveal */}
        <div style={{
          marginTop: 60,
          textAlign: "center",
          opacity: interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [80, 95], [0.5, 1], { extrapolateRight: "clamp" })})`,
        }}>
          <NumberTicker
            value={20847}
            fontSize={140}
            color={colors.neonGreen}
            prefix="+"
            duration={40}
            delay={85}
          />
          <div style={{
            fontSize: 32,
            color: colors.textSecondary,
            marginTop: 16,
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 600,
          }}>
            строк добавлено за ночь
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 3: THE PROBLEM - Nothing changed visually
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Dramatic shake
  const shake = frame > 40 && frame < 80 ? Math.sin(frame * 4) * (frame < 60 ? 8 : 4) : 0;

  // Flash effect
  const flash = frame > 55 && frame < 58 ? 1 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonRed} size={1000} x={960} y={540} pulseSpeed={0.15} />

      {/* Flash overlay */}
      <AbsoluteFill style={{
        backgroundColor: colors.neonRed,
        opacity: flash * 0.3,
      }} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `translateX(${shake}px)`,
      }}>
        <div style={{ textAlign: "center" }}>
          {/* Warning icon */}
          <div style={{
            opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${interpolate(frame, [0, 15], [2, 1], { extrapolateRight: "clamp" })})`,
          }}>
            <Warning size={100} weight="fill" color={colors.neonRed} style={{
              filter: `drop-shadow(0 0 40px ${colors.neonRed})`,
              animation: frame > 20 ? "pulse 0.5s infinite" : "none",
            }} />
          </div>

          {/* Main text */}
          <div style={{
            opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" }),
            marginTop: 30,
          }}>
            <GlitchText fontSize={100} color={colors.neonRed} glitchIntensity={frame > 40 ? 6 : 2}>
              ПРОБЛЕМА
            </GlitchText>
          </div>

          {/* Subtitle */}
          <div style={{
            opacity: interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [40, 55], [30, 0], { extrapolateRight: "clamp" })}px)`,
            marginTop: 30,
            fontSize: 48,
            fontWeight: 700,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            20,000 строк изменений
          </div>

          {/* Punchline */}
          <div style={{
            opacity: interpolate(frame, [65, 80], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${interpolate(frame, [65, 80], [0.8, 1], { extrapolateRight: "clamp" })})`,
            marginTop: 20,
          }}>
            <span style={{
              fontSize: 72,
              fontWeight: 900,
              color: colors.neonRed,
              fontFamily: "Inter, system-ui, sans-serif",
              textShadow: `0 0 40px ${colors.neonRed}`,
              letterSpacing: -2,
            }}>
              НИЧЕГО НЕ ИЗМЕНИЛОСЬ
            </span>
          </div>

          {/* Skull icon */}
          <div style={{
            opacity: interpolate(frame, [90, 100], [0, 1], { extrapolateRight: "clamp" }),
            marginTop: 30,
          }}>
            <Skull size={60} weight="fill" color={colors.textMuted} />
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines opacity={0.05} />
      <FilmGrain intensity={0.04} />
    </AbsoluteFill>
  );
};

// Scene 4: INVESTIGATION - Deep dive into code
const InvestigationScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.primary} size={600} x={300} y={300} />
      <GlowOrb color={colors.neonBlue} size={500} x={1600} y={700} />

      <AbsoluteFill style={{ padding: 50 }}>
        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 30,
        }}>
          <MagnifyingGlass size={44} weight="duotone" color={colors.neonBlue} />
          <span style={{
            fontSize: 44,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            РАССЛЕДОВАНИЕ
          </span>
        </div>

        {/* Terminal */}
        <div style={{
          opacity: interpolate(frame, [15, 25], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [15, 25], [30, 0], { extrapolateRight: "clamp" })}px)`,
        }}>
          <CodeBlock
            startFrame={25}
            charDelay={0.5}
            lines={[
              { text: "$ grep -r 'Spotlight\\|BorderBeam' | wc -l", color: colors.terminalGreen },
              { text: "290", color: colors.neonGreen },
              { text: "", color: colors.terminalText },
              { text: "$ # Анализ компонентов...", color: colors.terminalPurple },
              { text: "$ cat spotlight.tsx | head -20", color: colors.terminalGreen },
              { text: "", color: colors.terminalText },
              { text: "// КРИТИЧЕСКИЙ БАГ НАЙДЕН:", color: colors.neonRed },
              { text: "onMouseMove={handleMouseMove}", color: colors.terminalBlue, indent: 1 },
              { text: "className='pointer-events-none'", color: colors.neonRed, indent: 1 },
              { text: "", color: colors.terminalText },
              { text: "// pointer-events-none БЛОКИРУЕТ ВСЕ СОБЫТИЯ!", color: colors.neonRed },
              { text: "// onMouseMove НИКОГДА НЕ СРАБАТЫВАЕТ", color: colors.neonRed },
            ]}
          />
        </div>

        {/* Bug counter */}
        <div style={{
          position: "absolute",
          right: 60,
          top: 60,
          opacity: interpolate(frame, [120, 135], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          <div style={{
            backgroundColor: `${colors.neonRed}20`,
            border: `2px solid ${colors.neonRed}`,
            borderRadius: 16,
            padding: "20px 32px",
            textAlign: "center",
          }}>
            <Bug size={36} weight="fill" color={colors.neonRed} />
            <div style={{
              fontSize: 48,
              fontWeight: 900,
              color: colors.neonRed,
              fontFamily: "'SF Mono', monospace",
              marginTop: 8,
            }}>
              2
            </div>
            <div style={{
              fontSize: 14,
              color: colors.textSecondary,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}>
              Критических бага
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 5: BUG #1 - Spotlight pointer-events
const Bug1DetailScene: React.FC = () => {
  const frame = useCurrentFrame();

  const beforeOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });
  const arrowOpacity = interpolate(frame, [60, 75], [0, 1], { extrapolateRight: "clamp" });
  const afterOpacity = interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonRed} size={500} x={400} y={400} />
      <GlowOrb color={colors.neonGreen} size={500} x={1500} y={600} />

      <AbsoluteFill style={{ padding: 50 }}>
        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 30,
        }}>
          <Bug size={44} weight="fill" color={colors.neonRed} />
          <span style={{
            fontSize: 44,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            БАГ #1: SPOTLIGHT
          </span>
          <Cursor size={36} weight="duotone" color={colors.primary} style={{ marginLeft: 16 }} />
        </div>

        {/* Before/After comparison */}
        <div style={{ display: "flex", gap: 40, marginTop: 20 }}>
          {/* Before */}
          <div style={{
            flex: 1,
            opacity: beforeOpacity,
            transform: `translateX(${interpolate(beforeOpacity, [0, 1], [-50, 0])}px)`,
          }}>
            <div style={{
              backgroundColor: `${colors.neonRed}15`,
              border: `2px solid ${colors.neonRed}50`,
              borderRadius: 16,
              padding: 24,
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}>
                <X size={28} weight="bold" color={colors.neonRed} />
                <span style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: colors.neonRed,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  СЛОМАНО
                </span>
              </div>
              <CodeBlock
                startFrame={30}
                charDelay={0.6}
                lines={[
                  { text: "<div", color: colors.terminalPurple },
                  { text: "onMouseMove={handler}", color: colors.terminalBlue, indent: 1 },
                  { text: "className='pointer-events-none'", color: colors.neonRed, indent: 1 },
                  { text: "/>", color: colors.terminalPurple },
                  { text: "", color: colors.terminalText },
                  { text: "// События заблокированы!", color: colors.neonRed },
                  { text: "// opacity = 0 (невидимо)", color: colors.neonRed },
                ]}
              />
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            opacity: arrowOpacity,
            transform: `scale(${interpolate(arrowOpacity, [0, 1], [0.5, 1])})`,
          }}>
            <ArrowRight size={64} weight="bold" color={colors.primary} style={{
              filter: `drop-shadow(0 0 20px ${colors.primary})`,
            }} />
          </div>

          {/* After */}
          <div style={{
            flex: 1,
            opacity: afterOpacity,
            transform: `translateX(${interpolate(afterOpacity, [0, 1], [50, 0])}px)`,
          }}>
            <div style={{
              backgroundColor: `${colors.neonGreen}15`,
              border: `2px solid ${colors.neonGreen}50`,
              borderRadius: 16,
              padding: 24,
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}>
                <Check size={28} weight="bold" color={colors.neonGreen} />
                <span style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: colors.neonGreen,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  ИСПРАВЛЕНО
                </span>
              </div>
              <CodeBlock
                startFrame={90}
                charDelay={0.6}
                lines={[
                  { text: "useEffect(() => {", color: colors.terminalPurple },
                  { text: "parent.addEventListener(", color: colors.terminalGreen, indent: 1 },
                  { text: "'mousemove', handler", color: colors.terminalBlue, indent: 2 },
                  { text: ")", color: colors.terminalGreen, indent: 1 },
                  { text: "}, [])", color: colors.terminalPurple },
                  { text: "", color: colors.terminalText },
                  { text: "// События на родителе!", color: colors.neonGreen },
                ]}
              />
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 6: BUG #2 - BorderBeam CSS vars
const Bug2DetailScene: React.FC = () => {
  const frame = useCurrentFrame();

  const beforeOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });
  const arrowOpacity = interpolate(frame, [60, 75], [0, 1], { extrapolateRight: "clamp" });
  const afterOpacity = interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonRed} size={500} x={400} y={400} />
      <GlowOrb color={colors.neonGreen} size={500} x={1500} y={600} />

      <AbsoluteFill style={{ padding: 50 }}>
        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 30,
        }}>
          <Bug size={44} weight="fill" color={colors.neonRed} />
          <span style={{
            fontSize: 44,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            БАГ #2: BORDERBEAM
          </span>
          <Sparkle size={36} weight="duotone" color={colors.primary} style={{ marginLeft: 16 }} />
        </div>

        {/* Before/After comparison */}
        <div style={{ display: "flex", gap: 40, marginTop: 20 }}>
          {/* Before */}
          <div style={{
            flex: 1,
            opacity: beforeOpacity,
            transform: `translateX(${interpolate(beforeOpacity, [0, 1], [-50, 0])}px)`,
          }}>
            <div style={{
              backgroundColor: `${colors.neonRed}15`,
              border: `2px solid ${colors.neonRed}50`,
              borderRadius: 16,
              padding: 24,
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}>
                <X size={28} weight="bold" color={colors.neonRed} />
                <span style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: colors.neonRed,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  СЛОМАНО
                </span>
              </div>
              <CodeBlock
                startFrame={30}
                charDelay={0.6}
                lines={[
                  { text: "colorFrom=", color: colors.terminalPurple },
                  { text: "'hsl(var(--primary))'", color: colors.neonRed, indent: 1 },
                  { text: "", color: colors.terminalText },
                  { text: "// CSS vars не резолвятся", color: colors.neonRed },
                  { text: "// в custom properties!", color: colors.neonRed },
                  { text: "// Цвет = undefined", color: colors.neonRed },
                ]}
              />
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            opacity: arrowOpacity,
            transform: `scale(${interpolate(arrowOpacity, [0, 1], [0.5, 1])})`,
          }}>
            <ArrowRight size={64} weight="bold" color={colors.primary} style={{
              filter: `drop-shadow(0 0 20px ${colors.primary})`,
            }} />
          </div>

          {/* After */}
          <div style={{
            flex: 1,
            opacity: afterOpacity,
            transform: `translateX(${interpolate(afterOpacity, [0, 1], [50, 0])}px)`,
          }}>
            <div style={{
              backgroundColor: `${colors.neonGreen}15`,
              border: `2px solid ${colors.neonGreen}50`,
              borderRadius: 16,
              padding: 24,
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}>
                <Check size={28} weight="bold" color={colors.neonGreen} />
                <span style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: colors.neonGreen,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  ИСПРАВЛЕНО
                </span>
              </div>
              <CodeBlock
                startFrame={90}
                charDelay={0.6}
                lines={[
                  { text: "function resolveColor(c) {", color: colors.terminalPurple },
                  { text: "if (c.includes('--primary'))", color: colors.terminalBlue, indent: 1 },
                  { text: "return '#6720FF'", color: colors.neonGreen, indent: 2 },
                  { text: "}", color: colors.terminalPurple },
                  { text: "", color: colors.terminalText },
                  { text: "// Adapty Purple!", color: colors.neonGreen },
                ]}
              />
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 7: IMPACT - Massive scale
const ImpactScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.primary} size={800} x={960} y={540} pulseSpeed={0.1} />
      <GlowOrb color={colors.neonBlue} size={500} x={200} y={200} />
      <GlowOrb color={colors.primaryGlow} size={500} x={1700} y={800} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 40,
      }}>
        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}>
          <Fire size={56} weight="fill" color={colors.neonRed} />
          <GlitchText fontSize={72} color={colors.textPrimary}>
            МАСШТАБ КАТАСТРОФЫ
          </GlitchText>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: 40,
          marginTop: 20,
        }}>
          <StatCardGlow
            value="2"
            label="Бага на уровне компонентов"
            color={colors.neonRed}
            icon={<Bug size={48} weight="fill" color={colors.neonRed} />}
            delay={20}
          />
          <StatCardGlow
            value="290+"
            label="Использований в коде"
            color={colors.primary}
            icon={<Repeat size={48} weight="duotone" color={colors.primary} />}
            delay={35}
          />
          <StatCardGlow
            value="83+"
            label="Файлов затронуто"
            color={colors.neonBlue}
            icon={<File size={48} weight="duotone" color={colors.neonBlue} />}
            delay={50}
          />
        </div>

        {/* Punchline */}
        <div style={{
          opacity: interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [80, 95], [0.8, 1], { extrapolateRight: "clamp" })})`,
          marginTop: 30,
          textAlign: "center",
        }}>
          <span style={{
            fontSize: 36,
            fontWeight: 700,
            color: colors.neonRed,
            fontFamily: "Inter, system-ui, sans-serif",
            textShadow: `0 0 30px ${colors.neonRed}`,
          }}>
            ВСЕ АНИМАЦИИ БЫЛИ НЕВИДИМЫ
          </span>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 8: FIX DEPLOYED
const FixDeployedScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Flash on success
  const flash = frame > 100 && frame < 105 ? 0.3 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonGreen} size={800} x={960} y={540} pulseSpeed={0.08} />

      {/* Success flash */}
      <AbsoluteFill style={{
        backgroundColor: colors.neonGreen,
        opacity: flash,
      }} />

      <AbsoluteFill style={{ padding: 60 }}>
        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 30,
        }}>
          <Wrench size={48} weight="duotone" color={colors.neonGreen} />
          <span style={{
            fontSize: 48,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            ИСПРАВЛЕНИЕ ПРИМЕНЕНО
          </span>
        </div>

        {/* Git commit animation */}
        <div style={{
          opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          <CodeBlock
            startFrame={25}
            charDelay={0.4}
            lines={[
              { text: "$ git add -A", color: colors.terminalGreen },
              { text: "$ git commit -m 'fix: Fix animation bugs'", color: colors.terminalGreen },
              { text: "", color: colors.terminalText },
              { text: "[main f11aaf1] fix: Fix animation bugs", color: colors.terminalBlue },
              { text: " 2 files changed", color: colors.terminalText },
              { text: " +60 insertions", color: colors.neonGreen },
              { text: " -19 deletions", color: colors.neonRed },
              { text: "", color: colors.terminalText },
              { text: "$ git push origin main", color: colors.terminalGreen },
              { text: "To github.com:kirniy/adapty-webdev.git", color: colors.terminalText },
              { text: "   ea2d670..f11aaf1  main -> main", color: colors.neonGreen },
              { text: "", color: colors.terminalText },
              { text: "DEPLOYED TO VERCEL", color: colors.neonGreen },
            ]}
          />
        </div>

        {/* Success badge */}
        <div style={{
          position: "absolute",
          right: 80,
          bottom: 80,
          opacity: interpolate(frame, [110, 125], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(frame, [110, 125], [0.5, 1], { extrapolateRight: "clamp" })})`,
        }}>
          <div style={{
            backgroundColor: `${colors.neonGreen}20`,
            border: `3px solid ${colors.neonGreen}`,
            borderRadius: 20,
            padding: "24px 40px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            boxShadow: `0 0 40px ${colors.neonGreen}40`,
          }}>
            <CheckCircle size={48} weight="fill" color={colors.neonGreen} />
            <span style={{
              fontSize: 32,
              fontWeight: 800,
              color: colors.neonGreen,
              fontFamily: "Inter, system-ui, sans-serif",
            }}>
              DEPLOYED
            </span>
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 9: NOW WORKING - Victory lap
const NowWorkingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const effects = [
    { icon: <Cursor size={40} weight="duotone" color="white" />, title: "Spotlight", desc: "Курсор-трекинг", color: colors.primary },
    { icon: <Sparkle size={40} weight="duotone" color="white" />, title: "BorderBeam", desc: "Анимация границ", color: colors.primaryGlow },
    { icon: <Eye size={40} weight="duotone" color="white" />, title: "Hover", desc: "Scale, shadow", color: colors.neonBlue },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonGreen} size={1000} x={960} y={540} pulseSpeed={0.05} />
      <GlowOrb color={colors.primary} size={500} x={200} y={200} />
      <GlowOrb color={colors.neonBlue} size={500} x={1700} y={800} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 50,
      }}>
        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}>
          <Trophy size={72} weight="fill" color={colors.neonGreen} style={{
            filter: `drop-shadow(0 0 40px ${colors.neonGreen})`,
          }} />
          <GlitchText fontSize={80} color={colors.neonGreen}>
            ТЕПЕРЬ РАБОТАЕТ!
          </GlitchText>
        </div>

        {/* Effect cards */}
        <div style={{ display: "flex", gap: 32 }}>
          {effects.map((e, i) => {
            const delay = 20 + i * 15;
            const scale = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 100 },
            });

            return (
              <div key={e.title} style={{
                transform: `scale(${Math.max(0, scale)})`,
                backgroundColor: `${e.color}20`,
                border: `2px solid ${e.color}`,
                borderRadius: 24,
                padding: "40px 48px",
                textAlign: "center",
                boxShadow: `0 0 40px ${e.color}40`,
                position: "relative",
                overflow: "hidden",
              }}>
                <BorderBeamEffect color={e.color} />
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  backgroundColor: e.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: `0 0 30px ${e.color}`,
                }}>
                  {e.icon}
                </div>
                <div style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  {e.title}
                </div>
                <div style={{
                  fontSize: 18,
                  color: colors.textSecondary,
                  marginTop: 8,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  {e.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter */}
        <div style={{
          opacity: interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          <NumberTicker
            value={290}
            fontSize={100}
            color={colors.neonGreen}
            suffix="+"
            duration={30}
            delay={85}
          />
          <div style={{
            fontSize: 28,
            color: colors.textSecondary,
            textAlign: "center",
            marginTop: 8,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            эффектов теперь видимы
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// Scene 10: OUTRO - Summary stats
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Epic camera
  const scale = interpolate(frame, [0, 30, 60, 90], [0.3, 1.2, 0.95, 1], { extrapolateRight: "clamp" });
  const rotate = interpolate(frame, [0, 40, 90], [-10, 5, 0], { extrapolateRight: "clamp" });

  // Glow pulse
  const glowPulse = 0.5 + Math.sin(frame * 0.1) * 0.5;

  const stats = [
    { value: "2", label: "бага найдено", color: colors.neonRed },
    { value: "2", label: "бага исправлено", color: colors.neonGreen },
    { value: "290+", label: "эффектов работают", color: colors.primary },
    { value: "60", label: "строк кода фикса", color: colors.neonBlue },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <GlowOrb color={colors.neonGreen} size={1200 * glowPulse} x={960} y={540} />
      <GlowOrb color={colors.primary} size={600} x={200} y={200} />
      <GlowOrb color={colors.neonBlue} size={600} x={1700} y={800} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale}) rotate(${rotate}deg)`,
      }}>
        <div style={{ textAlign: "center" }}>
          {/* Logo */}
          <div style={{
            opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
            filter: `drop-shadow(0 0 ${60 * glowPulse}px ${colors.neonGreen}80)`,
          }}>
            <Img
              src={staticFile("adapty-logo.svg")}
              style={{ width: 400, height: "auto" }}
            />
          </div>

          {/* Title */}
          <div style={{
            opacity: interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" }),
            marginTop: 30,
          }}>
            <GlitchText fontSize={56} color={colors.neonGreen}>
              АУДИТ ЗАВЕРШЕН
            </GlitchText>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex",
            gap: 24,
            marginTop: 50,
            justifyContent: "center",
          }}>
            {stats.map((stat, i) => {
              const delay = 50 + i * 12;
              const opacity = interpolate(frame - delay, [0, 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
              const y = interpolate(frame - delay, [0, 15], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

              return (
                <div key={stat.label} style={{
                  opacity,
                  transform: `translateY(${y}px)`,
                  backgroundColor: `${stat.color}15`,
                  border: `2px solid ${stat.color}50`,
                  borderRadius: 16,
                  padding: "20px 32px",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontSize: 48,
                    fontWeight: 900,
                    color: stat.color,
                    fontFamily: "'SF Mono', monospace",
                    textShadow: `0 0 20px ${stat.color}`,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: colors.textSecondary,
                    marginTop: 4,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Signature */}
          <div style={{
            opacity: interpolate(frame, [100, 115], [0, 1], { extrapolateRight: "clamp" }),
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              overflow: "hidden",
              border: `2px solid ${colors.primary}`,
            }}>
              <Img
                src={staticFile("kirill-avatar.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span style={{
              fontSize: 20,
              color: colors.textMuted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}>
              @kirniy | 22 января 2026
            </span>
          </div>
        </div>
      </AbsoluteFill>

      <Scanlines />
      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN COMPOSITION - 50 seconds (1500 frames @ 30fps)
// ============================================================================

export const RalphDeepDive: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* 1. Intro: 0-75 (2.5s) */}
      <Sequence from={0} durationInFrames={75}>
        <IntroScene />
      </Sequence>

      {/* 2. Overnight Stats: 75-225 (5s) */}
      <Sequence from={75} durationInFrames={150}>
        <OvernightScene />
      </Sequence>

      {/* 3. Problem: 225-345 (4s) */}
      <Sequence from={225} durationInFrames={120}>
        <ProblemScene />
      </Sequence>

      {/* 4. Investigation: 345-525 (6s) */}
      <Sequence from={345} durationInFrames={180}>
        <InvestigationScene />
      </Sequence>

      {/* 5. Bug #1 Detail: 525-675 (5s) */}
      <Sequence from={525} durationInFrames={150}>
        <Bug1DetailScene />
      </Sequence>

      {/* 6. Bug #2 Detail: 675-825 (5s) */}
      <Sequence from={675} durationInFrames={150}>
        <Bug2DetailScene />
      </Sequence>

      {/* 7. Impact: 825-945 (4s) */}
      <Sequence from={825} durationInFrames={120}>
        <ImpactScene />
      </Sequence>

      {/* 8. Fix Deployed: 945-1095 (5s) */}
      <Sequence from={945} durationInFrames={150}>
        <FixDeployedScene />
      </Sequence>

      {/* 9. Now Working: 1095-1245 (5s) */}
      <Sequence from={1095} durationInFrames={150}>
        <NowWorkingScene />
      </Sequence>

      {/* 10. Outro: 1245-1380 (4.5s) */}
      <Sequence from={1245} durationInFrames={135}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
