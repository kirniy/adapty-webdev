import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  Easing,
} from "remotion";
import React from "react";
import {
  Code,
  Sparkle,
  ArrowRight,
  Check,
  Eye,
  Cursor,
  File,
  Robot,
  Brain,
  Timer,
  Trophy,
  ChartLineUp,
  MagicWand,
  Stack,
  Users,
  Target,
  Translate,
  Database,
  Flask,
  ChartBar,
  Gauge,
  Shield,
  CalendarCheck,
  CurrencyDollar,
  Heartbeat,
  Star,
  Graph,
  Package,
  Cards,
  Lightbulb,
  Lightning,
} from "@phosphor-icons/react";

// ============================================================================
// DESIGN SYSTEM
// ============================================================================

const colors = {
  bg: "#000000",
  bgSubtle: "#0A0A12",
  primary: "#6720FF",
  primaryGlow: "#8B5CF6",
  neonGreen: "#22C55E",
  neonBlue: "#3B82F6",
  neonOrange: "#F59E0B",
  textPrimary: "#FFFFFF",
  textSecondary: "#A0A0B0",
  textMuted: "#606070",
};

// ============================================================================
// PHYSICAL OBJECTS - Browser, Terminal, MacBook frames
// ============================================================================

const BrowserWindow: React.FC<{
  children: React.ReactNode;
  url?: string;
  width?: number;
  height?: number;
}> = ({ children, url = "adapty.io", width = 1200, height = 700 }) => {
  return (
    <div style={{
      width,
      height,
      backgroundColor: "#1a1a24",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 48,
        backgroundColor: "#0d0d14",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        gap: 12,
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#ff5f57" }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#febc2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#28c840" }} />
        </div>
        {/* URL bar */}
        <div style={{
          flex: 1,
          height: 28,
          backgroundColor: "#252530",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 60,
          marginRight: 80,
        }}>
          <span style={{
            fontSize: 13,
            color: colors.textMuted,
            fontFamily: "Inter, system-ui, sans-serif",
          }}>
            {url}
          </span>
        </div>
      </div>
      {/* Content */}
      <div style={{ height: height - 48, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
    </div>
  );
};

const TerminalWindow: React.FC<{
  children: React.ReactNode;
  title?: string;
  width?: number;
  height?: number;
}> = ({ children, title = "Terminal", width = 900, height = 500 }) => {
  return (
    <div style={{
      width,
      height,
      backgroundColor: "#0d0d14",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}>
      {/* Terminal chrome */}
      <div style={{
        height: 36,
        backgroundColor: "#1a1a24",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        gap: 8,
      }}>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#28c840" }} />
        </div>
        <span style={{
          flex: 1,
          textAlign: "center",
          fontSize: 12,
          color: colors.textMuted,
          fontFamily: "'SF Mono', monospace",
        }}>
          {title}
        </span>
      </div>
      {/* Content */}
      <div style={{ height: height - 36, padding: 20, fontFamily: "'SF Mono', monospace" }}>
        {children}
      </div>
    </div>
  );
};

const MacBookFrame: React.FC<{
  children: React.ReactNode;
  scale?: number;
}> = ({ children, scale = 1 }) => {
  return (
    <div style={{
      transform: `scale(${scale})`,
      transformOrigin: "center center",
    }}>
      {/* Screen bezel */}
      <div style={{
        width: 1400,
        height: 900,
        backgroundColor: "#1a1a24",
        borderRadius: "20px 20px 0 0",
        padding: 16,
        boxShadow: "0 -2px 30px rgba(0,0,0,0.3)",
        border: "2px solid #2a2a35",
        borderBottom: "none",
      }}>
        {/* Camera notch */}
        <div style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#333",
        }} />
        {/* Screen content */}
        <div style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0d0d14",
          borderRadius: 8,
          overflow: "hidden",
        }}>
          {children}
        </div>
      </div>
      {/* Base */}
      <div style={{
        width: 1500,
        height: 20,
        backgroundColor: "#2a2a35",
        borderRadius: "0 0 8px 8px",
        marginLeft: -50,
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}>
        {/* Notch indent */}
        <div style={{
          width: 200,
          height: 6,
          backgroundColor: "#1a1a24",
          borderRadius: "0 0 10px 10px",
          margin: "0 auto",
        }} />
      </div>
    </div>
  );
};

// ============================================================================
// CAMERA & EFFECTS
// ============================================================================

// Simulate camera zoom - returns scale and translate values
const useCamera = (config: {
  startScale?: number;
  endScale?: number;
  startX?: number;
  endX?: number;
  startY?: number;
  endY?: number;
  startFrame?: number;
  endFrame?: number;
}) => {
  const frame = useCurrentFrame();
  const {
    startScale = 1,
    endScale = 1,
    startX = 0,
    endX = 0,
    startY = 0,
    endY = 0,
    startFrame = 0,
    endFrame = 90,
  } = config;

  const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return {
    scale: interpolate(progress, [0, 1], [startScale, endScale]),
    x: interpolate(progress, [0, 1], [startX, endX]),
    y: interpolate(progress, [0, 1], [startY, endY]),
  };
};

const FilmGrain: React.FC<{ intensity?: number }> = ({ intensity = 0.015 }) => {
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

const EdgeGlow: React.FC<{ color?: string; intensity?: number }> = ({
  color = colors.primary,
  intensity = 0.6
}) => {
  const frame = useCurrentFrame();
  const pulse = 0.8 + Math.sin(frame * 0.08) * 0.2;

  return (
    <AbsoluteFill style={{
      background: `
        radial-gradient(ellipse at top left, ${color}${Math.floor(intensity * pulse * 60).toString(16).padStart(2, '0')} 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, ${color}${Math.floor(intensity * pulse * 40).toString(16).padStart(2, '0')} 0%, transparent 50%)
      `,
      pointerEvents: "none",
    }} />
  );
};

// ============================================================================
// SCENE 1: INTRO - RALPH with full details, exits by zooming into avatar
// ============================================================================

const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Elements appear (0-60 frames)
  // Phase 2: Hold (60-100 frames)
  // Phase 3: Zoom into avatar (100-120 frames)

  const isZoomingOut = frame > 100;

  // Entrance spring
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 70 },
  });

  // Exit zoom - zooms into the avatar
  const exitZoom = isZoomingOut
    ? interpolate(frame, [100, 120], [1, 3], {
        extrapolateRight: "clamp",
        easing: Easing.in(Easing.cubic),
      })
    : 1;

  const exitPanX = isZoomingOut
    ? interpolate(frame, [100, 120], [0, -500], { extrapolateRight: "clamp" })
    : 0;

  const exitOpacity = interpolate(frame, [110, 120], [1, 0], { extrapolateRight: "clamp" });

  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const glowIntensity = 0.6 + Math.sin(frame * 0.1) * 0.4;

  // Avatar springs in
  const avatarSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 90 },
  });

  // Text springs in after avatar
  const textSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  // Details spring in later
  const detailsSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  // Floating animation
  const avatarFloat = Math.sin(frame * 0.04) * 5;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} intensity={1} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${exitZoom}) translateX(${exitPanX}px)`,
        opacity: opacity * exitOpacity,
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
        }}>
          {/* Ralph avatar - large */}
          <div style={{
            opacity: Math.max(0, avatarSpring),
            transform: `scale(${Math.max(0, avatarSpring)}) translateY(${avatarFloat}px)`,
            filter: `drop-shadow(0 0 80px ${colors.primary}90)`,
          }}>
            <Img
              src={staticFile("ralph.png")}
              style={{
                width: 300,
                height: 300,
                borderRadius: 150,
                border: `6px solid ${colors.primary}`,
                objectFit: "cover",
              }}
            />
          </div>

          {/* Text content */}
          <div style={{
            opacity: Math.max(0, textSpring),
            transform: `translateX(${interpolate(Math.max(0, textSpring), [0, 1], [40, 0])}px)`,
          }}>
            {/* Main title */}
            <div style={{
              fontSize: 240,
              fontWeight: 900,
              color: colors.textPrimary,
              fontFamily: "Inter, system-ui, sans-serif",
              letterSpacing: -12,
              textShadow: `0 0 100px ${colors.primary}${Math.floor(glowIntensity * 255).toString(16).padStart(2, '0')}`,
              lineHeight: 0.9,
            }}>
              RALPH
            </div>

            {/* Subtitle */}
            <div style={{
              fontSize: 32,
              fontWeight: 600,
              color: colors.primary,
              fontFamily: "Inter, system-ui, sans-serif",
              marginTop: 12,
              letterSpacing: 3,
            }}>
              Autonomous AI Development Agent
            </div>

            {/* Details - date and duration */}
            <div style={{
              opacity: Math.max(0, detailsSpring),
              transform: `translateY(${interpolate(Math.max(0, detailsSpring), [0, 1], [15, 0])}px)`,
              marginTop: 28,
              display: "flex",
              gap: 32,
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: `${colors.neonBlue}15`,
                border: `2px solid ${colors.neonBlue}40`,
                borderRadius: 12,
                padding: "12px 20px",
              }}>
                <CalendarCheck size={24} weight="duotone" color={colors.neonBlue} />
                <span style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.textPrimary,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  Jan 21-22, 2026
                </span>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: `${colors.neonGreen}15`,
                border: `2px solid ${colors.neonGreen}40`,
                borderRadius: 12,
                padding: "12px 20px",
              }}>
                <Timer size={24} weight="duotone" color={colors.neonGreen} />
                <span style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.textPrimary,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}>
                  8+ Hours Overnight
                </span>
              </div>
            </div>

            {/* Powered by */}
            <div style={{
              opacity: Math.max(0, detailsSpring) * 0.7,
              marginTop: 20,
              fontSize: 16,
              color: colors.textMuted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}>
              Powered by Claude Code
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2: RALPH SETUP - Terminal showing how Ralph was configured
// ============================================================================

const RalphSetupScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Terminal springs in
  const terminalSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 70 },
  });

  const scale = interpolate(terminalSpring, [0, 1], [0.9, 1]);

  // Command lines appear sequentially - adjusted for 120 frame duration
  const lines = [
    { text: "$ cat .ralph/PROMPT.md", color: colors.textMuted, delay: 0 },
    { text: "", color: colors.textMuted, delay: 8 },
    { text: "# RALPH SESSION: Polish All Marketing Pages", color: colors.neonGreen, delay: 12 },
    { text: "", color: colors.textMuted, delay: 20 },
    { text: "## MISSION", color: colors.primary, delay: 24 },
    { text: "Transform ALL 26 pages to match homepage quality.", color: colors.textSecondary, delay: 32 },
    { text: "Add magic animations, Spotlight effects, hover states.", color: colors.textSecondary, delay: 40 },
    { text: "", color: colors.textMuted, delay: 48 },
    { text: "## SESSION CONFIG", color: colors.primary, delay: 52 },
    { text: "Duration: 8+ hours overnight (Jan 21-22, 2026)", color: colors.neonGreen, delay: 60 },
    { text: "Model: Claude Code (Autonomous Mode)", color: colors.textSecondary, delay: 68 },
    { text: "", color: colors.textMuted, delay: 76 },
    { text: "## PAGES TO POLISH", color: colors.primary, delay: 80 },
    { text: "- Tier 1: 14 Feature Pages", color: colors.textSecondary, delay: 88 },
    { text: "- Tier 2: 4 Role Pages", color: colors.textSecondary, delay: 94 },
    { text: "- Tier 3: 5 Compare Pages", color: colors.textSecondary, delay: 100 },
    { text: "- Tier 4: 3 Other Pages", color: colors.textSecondary, delay: 106 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.neonGreen} intensity={0.7} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
        padding: 40,
      }}>
        <TerminalWindow title="ralph-session-config" width={1400} height={700}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {lines.map((line, i) => {
              const lineOpacity = interpolate(frame, [line.delay, line.delay + 6], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div key={i} style={{
                  fontSize: 19,
                  color: line.color,
                  opacity: lineOpacity,
                  fontFamily: "'SF Mono', Consolas, monospace",
                }}>
                  {line.text || "\u00A0"}
                </div>
              );
            })}
          </div>
        </TerminalWindow>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3: BIG NUMBER - 20,000+ lines with spring overshoot
// ============================================================================

const BigNumberScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Counter animation with overshoot effect
  const countProgress = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Overshoot to 22000 then settle to 20000
  const overshootCount = frame < 45
    ? Math.floor(countProgress * 22000)
    : Math.floor(interpolate(frame, [45, 60], [22000, 20000], {
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.cubic),
      }));

  const displayCount = Math.max(0, Math.min(overshootCount, 22000));

  // Spring-based scale with bounce
  const scaleSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80, mass: 1.2 },
  });

  const scale = interpolate(scaleSpring, [0, 1], [0.4, 1.05]);

  // Label springs in
  const labelSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  // Glow pulses with the count
  const glowIntensity = 0.6 + Math.sin(frame * 0.15) * 0.4;

  // Subtle y-offset spring
  const yOffset = interpolate(scaleSpring, [0, 1], [40, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.neonGreen} intensity={0.9 * glowIntensity} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale}) translateY(${yOffset}px)`,
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontSize: 300,
            fontWeight: 900,
            color: colors.neonGreen,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -14,
            textShadow: `0 0 ${80 * glowIntensity}px ${colors.neonGreen}, 0 0 ${160 * glowIntensity}px ${colors.neonGreen}60`,
            lineHeight: 0.9,
          }}>
            {displayCount.toLocaleString()}+
          </div>
          <div style={{
            fontSize: 56,
            fontWeight: 700,
            color: colors.textSecondary,
            fontFamily: "Inter, system-ui, sans-serif",
            marginTop: 24,
            opacity: Math.max(0, labelSpring),
            transform: `translateY(${interpolate(Math.max(0, labelSpring), [0, 1], [20, 0])}px)`,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}>
            строк кода
          </div>
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4: STATS GRID - 4 stats with spring camera
// ============================================================================

const StatsGridScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring-based camera for organic pan
  const cameraPanSpring = spring({
    frame,
    fps,
    config: { damping: 30, stiffness: 40, mass: 2 },
  });

  // Camera starts zoomed in, zooms out to reveal all
  const cameraScale = interpolate(cameraPanSpring, [0, 1], [1.15, 1]);
  const cameraY = interpolate(cameraPanSpring, [0, 1], [-60, 0]);

  const stats = [
    { value: "91", label: "ФАЙЛОВ", color: colors.neonBlue, icon: <File size={52} weight="duotone" /> },
    { value: "50+", label: "MAGIC АНИМАЦИЙ", color: colors.primary, icon: <MagicWand size={52} weight="duotone" /> },
    { value: "26", label: "СТРАНИЦ", color: colors.primaryGlow, icon: <Stack size={52} weight="duotone" /> },
    { value: "8+", label: "ЧАСОВ", color: colors.neonOrange, icon: <Timer size={52} weight="duotone" /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.neonBlue} />

      <AbsoluteFill style={{
        transform: `scale(${cameraScale}) translateY(${cameraY}px)`,
        padding: 60,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 40,
      }}>
        {stats.map((stat, i) => {
          const delay = i * 10;

          // Each card has its own spring
          const cardSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 10, stiffness: 90, mass: 0.8 },
          });

          // Staggered rotation for visual interest
          const cardRotation = interpolate(
            spring({ frame: frame - delay, fps, config: { damping: 15, stiffness: 60 } }),
            [0, 1],
            [i % 2 === 0 ? -5 : 5, 0]
          );

          // Subtle hover-like float
          const cardFloat = Math.sin((frame + i * 20) * 0.05) * 4;

          // Glow pulses
          const glowPulse = 0.7 + Math.sin((frame + i * 15) * 0.08) * 0.3;

          return (
            <div key={stat.label} style={{
              transform: `scale(${Math.max(0, cardSpring)}) rotate(${cardRotation}deg) translateY(${cardFloat}px)`,
              backgroundColor: `${stat.color}12`,
              borderRadius: 32,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: `3px solid ${stat.color}40`,
              boxShadow: `0 0 ${60 * glowPulse}px ${stat.color}30, inset 0 0 60px ${stat.color}10`,
            }}>
              <div style={{
                color: stat.color,
                marginBottom: 16,
                opacity: 0.9,
                filter: `drop-shadow(0 0 20px ${stat.color}60)`,
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: 88,
                fontWeight: 900,
                color: stat.color,
                fontFamily: "Inter, system-ui, sans-serif",
                textShadow: `0 0 ${40 * glowPulse}px ${stat.color}`,
                letterSpacing: -4,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.textMuted,
                fontFamily: "Inter, system-ui, sans-serif",
                marginTop: 12,
                letterSpacing: 4,
              }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5: MAGIC ANIMATIONS - Spring zoom out to reveal grid
// ============================================================================

const MagicGridScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring-based zoom for organic reveal
  const zoomSpring = spring({
    frame,
    fps,
    config: { damping: 25, stiffness: 50, mass: 1.5 },
  });

  // Start zoomed in (scale 2.5), spring out to reveal full grid
  const scale = interpolate(zoomSpring, [0, 1], [2.5, 1]);

  // Start centered on first card, spring to center of screen
  const translateX = interpolate(zoomSpring, [0, 1], [-600, 0]);
  const translateY = interpolate(zoomSpring, [0, 1], [-300, 0]);

  // Title springs in after zoom settles
  const titleSpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  const magicAnimations = [
    { title: "AIBrainMagic", icon: <Brain size={28} weight="duotone" color="white" />, color: colors.primary },
    { title: "DataFlowMagic", icon: <Database size={28} weight="duotone" color="white" />, color: colors.neonBlue },
    { title: "ExperimentMagic", icon: <Flask size={28} weight="duotone" color="white" />, color: colors.neonGreen },
    { title: "GrowthMagic", icon: <ChartBar size={28} weight="duotone" color="white" />, color: colors.neonOrange },
    { title: "RevenueMagic", icon: <CurrencyDollar size={28} weight="duotone" color="white" />, color: colors.neonGreen },
    { title: "ABTestMagic", icon: <Flask size={28} weight="duotone" color="white" />, color: colors.primaryGlow },
    { title: "LanguageMagic", icon: <Translate size={28} weight="duotone" color="white" />, color: colors.neonBlue },
    { title: "CalendarMagic", icon: <CalendarCheck size={28} weight="duotone" color="white" />, color: colors.primary },
    { title: "SpeedMagic", icon: <Gauge size={28} weight="duotone" color="white" />, color: colors.neonOrange },
    { title: "ShieldMagic", icon: <Shield size={28} weight="duotone" color="white" />, color: colors.neonGreen },
    { title: "G2RatingMagic", icon: <Star size={28} weight="duotone" color="white" />, color: colors.neonOrange },
    { title: "InsightMagic", icon: <Lightbulb size={28} weight="duotone" color="white" />, color: colors.primary },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} />

      {/* Title - springs in as zoom completes */}
      <div style={{
        position: "absolute",
        top: 48,
        left: 64,
        opacity: Math.max(0, titleSpring),
        transform: `translateX(${interpolate(Math.max(0, titleSpring), [0, 1], [-30, 0])}px)`,
        display: "flex",
        alignItems: "center",
        gap: 20,
        zIndex: 10,
      }}>
        <MagicWand size={48} weight="duotone" color={colors.primary} />
        <span style={{
          fontSize: 48,
          fontWeight: 800,
          color: colors.textPrimary,
          fontFamily: "Inter, system-ui, sans-serif",
        }}>
          50+ MAGIC АНИМАЦИЙ
        </span>
      </div>

      {/* Grid with zoom */}
      <AbsoluteFill style={{
        transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
        padding: "120px 64px 48px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 16,
      }}>
        {magicAnimations.map((anim, i) => (
          <div key={anim.title} style={{
            backgroundColor: `${anim.color}12`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            border: `1px solid ${anim.color}40`,
          }}>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              backgroundColor: anim.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 20px ${anim.color}60`,
              flexShrink: 0,
            }}>
              {anim.icon}
            </div>
            <span style={{
              fontSize: 18,
              fontWeight: 600,
              color: colors.textPrimary,
              fontFamily: "Inter, system-ui, sans-serif",
            }}>
              {anim.title}
            </span>
          </div>
        ))}
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 6: FEATURE PAGES - Grid filling the screen
// ============================================================================

const FeaturePagesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // All feature pages Ralph polished
  const featurePages = [
    { name: "paywall-builder", icon: <Package size={24} weight="duotone" /> },
    { name: "ab-testing", icon: <Flask size={24} weight="duotone" /> },
    { name: "onboarding-builder", icon: <Stack size={24} weight="duotone" /> },
    { name: "paywall-library", icon: <Cards size={24} weight="duotone" /> },
    { name: "paywall-localization", icon: <Translate size={24} weight="duotone" /> },
    { name: "paywall-targeting", icon: <Target size={24} weight="duotone" /> },
    { name: "predictive-analytics", icon: <ChartLineUp size={24} weight="duotone" /> },
    { name: "ai-paywall-generator", icon: <Brain size={24} weight="duotone" /> },
    { name: "ltv-analytics", icon: <Graph size={24} weight="duotone" /> },
    { name: "refund-saver", icon: <Shield size={24} weight="duotone" /> },
    { name: "remote-config", icon: <Database size={24} weight="duotone" /> },
    { name: "fallback-paywalls", icon: <Lightning size={24} weight="duotone" /> },
    { name: "revenue-growth", icon: <CurrencyDollar size={24} weight="duotone" /> },
    { name: "integrations", icon: <Code size={24} weight="duotone" /> },
  ];

  // Spring for entrance
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
  });

  const scale = interpolate(entranceSpring, [0, 1], [0.95, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} intensity={0.8} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
        padding: "60px 80px",
      }}>
        <div style={{ width: "100%" }}>
          {/* Title - smaller, top left */}
          <div style={{
            fontSize: 42,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}>
            <Package size={40} weight="duotone" color={colors.primary} />
            <span>14 Feature Pages</span>
            <span style={{ color: colors.neonGreen }}>Polished</span>
          </div>

          {/* Grid of page names - fills more space */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}>
            {featurePages.map((page, i) => {
              const pageSpring = spring({
                frame: frame - i * 2,
                fps,
                config: { damping: 10, stiffness: 100 },
              });

              const glowPulse = 0.6 + Math.sin((frame + i * 10) * 0.08) * 0.4;

              return (
                <div key={page.name} style={{
                  backgroundColor: `${colors.primary}12`,
                  border: `2px solid ${colors.primary}40`,
                  borderRadius: 16,
                  padding: "24px 20px",
                  opacity: Math.max(0, pageSpring),
                  transform: `scale(${Math.max(0, pageSpring)})`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: `0 0 ${20 * glowPulse}px ${colors.primary}20`,
                }}>
                  <div style={{ color: colors.primary }}>
                    {page.icon}
                  </div>
                  <span style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: colors.textPrimary,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}>
                    /{page.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 7: PAGES SHOWCASE - Browser showing actual pages improved
// ============================================================================

const PagesShowcaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pages that were polished with their features
  const pages = [
    { name: "paywall-builder", features: ["3D Tilt", "Spotlight", "Bento Grid"] },
    { name: "ab-testing", features: ["Experiment Viz", "Winner Animation"] },
    { name: "onboarding-builder", features: ["Flow Preview", "Step Cards"] },
    { name: "ltv-analytics", features: ["Chart Animations", "Data Flow"] },
  ];

  // Cycle through pages
  const pageIndex = Math.floor(frame / 30) % pages.length;
  const currentPage = pages[pageIndex];

  // Spring for browser entrance
  const browserSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 60 },
  });

  // Scale zooms slightly
  const scale = interpolate(browserSpring, [0, 1], [0.8, 1]);

  // Page transition
  const pageOpacity = interpolate(frame % 30, [0, 5, 25, 30], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
      }}>
        <BrowserWindow url={`adapty.io/${currentPage.name}`} width={1400} height={750}>
          <div style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${colors.bgSubtle} 0%, ${colors.bg} 100%)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            opacity: pageOpacity,
          }}>
            {/* Page name */}
            <div style={{
              fontSize: 72,
              fontWeight: 800,
              color: colors.textPrimary,
              fontFamily: "Inter, system-ui, sans-serif",
              letterSpacing: -2,
            }}>
              /{currentPage.name}
            </div>

            {/* Features added */}
            <div style={{
              display: "flex",
              gap: 20,
            }}>
              {currentPage.features.map((feature, i) => (
                <div key={feature} style={{
                  backgroundColor: `${colors.primary}20`,
                  border: `2px solid ${colors.primary}50`,
                  borderRadius: 12,
                  padding: "16px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}>
                  <Check size={24} weight="bold" color={colors.neonGreen} />
                  <span style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: colors.textPrimary,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BrowserWindow>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8: COMPONENTS CREATED - Terminal showing what was built
// ============================================================================

const ComponentsCreatedScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Terminal springs in
  const terminalSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  const scale = interpolate(terminalSpring, [0, 1], [0.85, 1]);

  // Typewriter effect for lines
  const lines = [
    { text: "$ ralph --session overnight", color: colors.textMuted, delay: 0 },
    { text: "", color: colors.textMuted, delay: 10 },
    { text: "Created 50+ Magic animations:", color: colors.neonGreen, delay: 15 },
    { text: "  - AIBrainMagic, DataFlowMagic, ExperimentMagic", color: colors.textSecondary, delay: 20 },
    { text: "  - GrowthChartMagic, RevenueMagic, ShieldMagic", color: colors.textSecondary, delay: 25 },
    { text: "  - LanguageSwitcherMagic, CalendarMagic...", color: colors.textSecondary, delay: 30 },
    { text: "", color: colors.textMuted, delay: 35 },
    { text: "Polished 26 pages with:", color: colors.neonGreen, delay: 40 },
    { text: "  - Spotlight effects on all feature cards", color: colors.textSecondary, delay: 45 },
    { text: "  - BorderBeam on hero sections", color: colors.textSecondary, delay: 50 },
    { text: "  - Spring-based hover interactions", color: colors.textSecondary, delay: 55 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.neonGreen} intensity={0.8} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
      }}>
        <TerminalWindow title="ralph-session.log" width={1100} height={550}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {lines.map((line, i) => {
              const lineOpacity = interpolate(frame, [line.delay, line.delay + 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div key={i} style={{
                  fontSize: 20,
                  color: line.color,
                  opacity: lineOpacity,
                  fontFamily: "'SF Mono', Consolas, monospace",
                }}>
                  {line.text || "\u00A0"}
                </div>
              );
            })}
          </div>
        </TerminalWindow>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 9: TIER BREAKDOWN - Large cards filling screen
// ============================================================================

const TierScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 60 },
  });

  const scale = interpolate(entranceSpring, [0, 1], [0.9, 1]);

  const tiers = [
    { title: "TIER 1", count: "14", subtitle: "Feature Pages", color: colors.primary, icon: <Package size={64} weight="duotone" />, pages: "paywall-builder, ab-testing, ltv-analytics..." },
    { title: "TIER 2", count: "4", subtitle: "Role Pages", color: colors.neonGreen, icon: <Users size={64} weight="duotone" />, pages: "for-marketers, for-developers..." },
    { title: "TIER 3", count: "5", subtitle: "Compare Pages", color: colors.neonBlue, icon: <Graph size={64} weight="duotone" />, pages: "vs RevenueCat, Superwall..." },
    { title: "TIER 4", count: "3", subtitle: "Other Pages", color: colors.primaryGlow, icon: <Cards size={64} weight="duotone" />, pages: "schedule-demo, why-adapty..." },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} />

      <AbsoluteFill style={{
        transform: `scale(${scale})`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: "40px 60px",
      }}>
        {tiers.map((tier, i) => {
          const delay = i * 10;
          const cardSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 10, stiffness: 90, mass: 0.8 },
          });

          const glowPulse = 0.7 + Math.sin((frame + i * 20) * 0.08) * 0.3;

          return (
            <div key={tier.title} style={{
              transform: `scale(${Math.max(0, cardSpring)})`,
              backgroundColor: `${tier.color}12`,
              borderRadius: 32,
              padding: "48px 40px",
              textAlign: "center",
              border: `3px solid ${tier.color}50`,
              boxShadow: `0 0 ${60 * glowPulse}px ${tier.color}30`,
              width: 320,
              height: 480,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <div style={{ color: tier.color, marginBottom: 20, filter: `drop-shadow(0 0 20px ${tier.color}60)` }}>
                {tier.icon}
              </div>
              <div style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.textMuted,
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: 4,
                marginBottom: 8,
              }}>
                {tier.title}
              </div>
              <div style={{
                fontSize: 120,
                fontWeight: 900,
                color: tier.color,
                fontFamily: "Inter, system-ui, sans-serif",
                textShadow: `0 0 ${40 * glowPulse}px ${tier.color}`,
                lineHeight: 1,
              }}>
                {tier.count}
              </div>
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                color: colors.textPrimary,
                fontFamily: "Inter, system-ui, sans-serif",
                marginTop: 16,
              }}>
                {tier.subtitle}
              </div>
              <div style={{
                fontSize: 13,
                fontWeight: 500,
                color: colors.textMuted,
                fontFamily: "Inter, system-ui, sans-serif",
                marginTop: 16,
                lineHeight: 1.4,
              }}>
                {tier.pages}
              </div>
            </div>
          );
        })}
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 10: CODE QUALITY - Shows actual code patterns implemented
// ============================================================================

const CodeQualityScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring for entrance
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  const scale = interpolate(entranceSpring, [0, 1], [0.85, 1]);

  // Code lines with syntax highlighting
  const codeLines = [
    { text: "// Accessibility: respects user preferences", color: colors.textMuted },
    { text: "const prefersReducedMotion = useReducedMotion();", color: colors.textPrimary },
    { text: "", color: colors.textMuted },
    { text: "// Performance: GPU-only animations", color: colors.textMuted },
    { text: "transform: scale(1.02) translateY(-4px);", color: colors.neonGreen },
    { text: "// No filter:blur - only transform & opacity", color: colors.textMuted },
    { text: "", color: colors.textMuted },
    { text: "// Timing: UI animations < 300ms", color: colors.textMuted },
    { text: "transition: all 200ms ease-out-expo;", color: colors.neonBlue },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.neonGreen} intensity={0.7} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
      }}>
        <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
          {/* Title */}
          <div style={{ textAlign: "center" }}>
            <Shield size={80} weight="duotone" color={colors.neonGreen} style={{
              filter: `drop-shadow(0 0 30px ${colors.neonGreen})`,
              marginBottom: 20,
            }} />
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              color: colors.textPrimary,
              fontFamily: "Inter, system-ui, sans-serif",
            }}>
              Quality
            </div>
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              color: colors.neonGreen,
              fontFamily: "Inter, system-ui, sans-serif",
            }}>
              Standards
            </div>
          </div>

          {/* Code block */}
          <TerminalWindow title="animation-utils.ts" width={800} height={380}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {codeLines.map((line, i) => {
                const lineOpacity = interpolate(frame, [i * 5, i * 5 + 10], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });

                return (
                  <div key={i} style={{
                    fontSize: 16,
                    color: line.color,
                    opacity: lineOpacity,
                    fontFamily: "'SF Mono', Consolas, monospace",
                  }}>
                    {line.text || "\u00A0"}
                  </div>
                );
              })}
            </div>
          </TerminalWindow>
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 11: VICTORY - Trophy
// ============================================================================

const VictoryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 40], [0.3, 1.2], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  const rotation = interpolate(frame, [0, 40], [-10, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const glowPulse = 0.6 + Math.sin(frame * 0.15) * 0.4;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.neonGreen} intensity={1} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }}>
        <div style={{ textAlign: "center" }}>
          <Trophy size={200} weight="fill" color={colors.neonGreen} style={{
            filter: `drop-shadow(0 0 ${80 * glowPulse}px ${colors.neonGreen})`,
            marginBottom: 40,
          }} />

          <div style={{
            fontSize: 120,
            fontWeight: 900,
            color: colors.neonGreen,
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: -4,
            textShadow: `0 0 60px ${colors.neonGreen}, 0 0 120px ${colors.neonGreen}60`,
          }}>
            ВЫПОЛНЕНО
          </div>
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 12: FINAL STATS - All stats together with spring entrance
// ============================================================================

const FinalStatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stats = [
    { value: "50+", label: "Magic Animations", color: colors.primary, icon: <MagicWand size={40} weight="duotone" /> },
    { value: "91", label: "Files Modified", color: colors.neonBlue, icon: <File size={40} weight="duotone" /> },
    { value: "26", label: "Pages Polished", color: colors.neonGreen, icon: <Stack size={40} weight="duotone" /> },
    { value: "20K+", label: "Lines of Code", color: colors.primaryGlow, icon: <Code size={40} weight="duotone" /> },
  ];

  // Spring for overall entrance
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 60 },
  });

  const scale = interpolate(entranceSpring, [0, 1], [0.8, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} intensity={0.8} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scale})`,
        padding: 80,
      }}>
        <div style={{ textAlign: "center" }}>
          {/* Title */}
          <div style={{
            fontSize: 56,
            fontWeight: 800,
            color: colors.textPrimary,
            fontFamily: "Inter, system-ui, sans-serif",
            marginBottom: 60,
            opacity: Math.max(0, entranceSpring),
          }}>
            Session Complete
          </div>

          {/* Stats grid */}
          <div style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
          }}>
            {stats.map((stat, i) => {
              const statSpring = spring({
                frame: frame - i * 8,
                fps,
                config: { damping: 10, stiffness: 90 },
              });

              const glowPulse = 0.7 + Math.sin((frame + i * 15) * 0.1) * 0.3;

              return (
                <div key={stat.label} style={{
                  transform: `scale(${Math.max(0, statSpring)})`,
                  backgroundColor: `${stat.color}15`,
                  border: `3px solid ${stat.color}50`,
                  borderRadius: 24,
                  padding: "32px 40px",
                  textAlign: "center",
                  boxShadow: `0 0 ${40 * glowPulse}px ${stat.color}30`,
                  minWidth: 200,
                }}>
                  <div style={{ color: stat.color, marginBottom: 12, filter: `drop-shadow(0 0 15px ${stat.color}60)` }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: 64,
                    fontWeight: 900,
                    color: stat.color,
                    fontFamily: "Inter, system-ui, sans-serif",
                    textShadow: `0 0 ${30 * glowPulse}px ${stat.color}`,
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: colors.textMuted,
                    fontFamily: "Inter, system-ui, sans-serif",
                    marginTop: 12,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 13: OUTRO - Adapty logo with Ralph AND Kirill credits
// ============================================================================

const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo springs in
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 60 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0.8, 1]);

  // Credits spring in after
  const creditsSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  const glowPulse = 0.6 + Math.sin(frame * 0.08) * 0.4;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <EdgeGlow color={colors.primary} intensity={0.8 * glowPulse} />

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 60,
      }}>
        {/* Adapty logo */}
        <div style={{
          transform: `scale(${logoScale})`,
          filter: `drop-shadow(0 0 ${80 * glowPulse}px ${colors.primary}80)`,
        }}>
          <Img
            src={staticFile("adapty-logo.svg")}
            style={{ width: 500, height: "auto" }}
          />
        </div>

        {/* Credits section */}
        <div style={{
          opacity: Math.max(0, creditsSpring),
          transform: `translateY(${interpolate(Math.max(0, creditsSpring), [0, 1], [30, 0])}px)`,
          display: "flex",
          alignItems: "center",
          gap: 60,
        }}>
          {/* Ralph */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              overflow: "hidden",
              border: `4px solid ${colors.primary}`,
              boxShadow: `0 0 30px ${colors.primary}60`,
            }}>
              <Img
                src={staticFile("ralph.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: colors.textPrimary,
                fontFamily: "Inter, system-ui, sans-serif",
              }}>
                Ralph
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 500,
                color: colors.primary,
                fontFamily: "Inter, system-ui, sans-serif",
              }}>
                Autonomous AI Agent
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: 3,
            height: 60,
            backgroundColor: colors.primary,
            opacity: 0.4,
            borderRadius: 2,
          }} />

          {/* Kirill */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              overflow: "hidden",
              border: `4px solid ${colors.neonBlue}`,
              boxShadow: `0 0 30px ${colors.neonBlue}60`,
            }}>
              <Img
                src={staticFile("kirill-avatar.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: colors.textPrimary,
                fontFamily: "Inter, system-ui, sans-serif",
              }}>
                Kirill @kirniy
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 500,
                color: colors.neonBlue,
                fontFamily: "Inter, system-ui, sans-serif",
              }}>
                Developer
              </div>
            </div>
          </div>
        </div>

        {/* Date */}
        <div style={{
          opacity: Math.max(0, creditsSpring) * 0.7,
          fontSize: 18,
          color: colors.textMuted,
          fontFamily: "Inter, system-ui, sans-serif",
          marginTop: 20,
        }}>
          22 January 2026
        </div>
      </AbsoluteFill>

      <FilmGrain />
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN COMPOSITION - 50 seconds total
// ============================================================================

export const RalphShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* 1. Intro "RALPH" with details: 0-120 (4s) */}
      <Sequence from={0} durationInFrames={120}>
        <IntroScene />
      </Sequence>

      {/* 2. Ralph setup showing the prompt: 120-240 (4s) */}
      <Sequence from={120} durationInFrames={120}>
        <RalphSetupScene />
      </Sequence>

      {/* 3. Big number 20K+: 240-330 (3s) */}
      <Sequence from={240} durationInFrames={90}>
        <BigNumberScene />
      </Sequence>

      {/* 4. Stats grid: 330-480 (5s) */}
      <Sequence from={330} durationInFrames={150}>
        <StatsGridScene />
      </Sequence>

      {/* 5. Magic grid with zoom: 480-630 (5s) */}
      <Sequence from={480} durationInFrames={150}>
        <MagicGridScene />
      </Sequence>

      {/* 6. Feature pages polished: 630-750 (4s) */}
      <Sequence from={630} durationInFrames={120}>
        <FeaturePagesScene />
      </Sequence>

      {/* 7. Pages showcase in browser: 750-870 (4s) */}
      <Sequence from={750} durationInFrames={120}>
        <PagesShowcaseScene />
      </Sequence>

      {/* 8. Terminal showing components created: 870-990 (4s) */}
      <Sequence from={870} durationInFrames={120}>
        <ComponentsCreatedScene />
      </Sequence>

      {/* 9. Tier breakdown: 990-1140 (5s) */}
      <Sequence from={990} durationInFrames={150}>
        <TierScene />
      </Sequence>

      {/* 10. Code quality standards: 1140-1230 (3s) */}
      <Sequence from={1140} durationInFrames={90}>
        <CodeQualityScene />
      </Sequence>

      {/* 11. Victory: 1230-1320 (3s) */}
      <Sequence from={1230} durationInFrames={90}>
        <VictoryScene />
      </Sequence>

      {/* 12. Final stats montage: 1320-1420 (3.3s) */}
      <Sequence from={1320} durationInFrames={100}>
        <FinalStatsScene />
      </Sequence>

      {/* 13. Outro: 1420-1570 (5s) */}
      <Sequence from={1420} durationInFrames={150}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
