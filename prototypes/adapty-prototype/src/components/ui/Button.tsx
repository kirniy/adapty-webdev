import { cn } from "~/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { MOTION_CONFIGS, type DesignSystem } from "~/lib/motion-config";

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  disabled?: boolean;
}

/**
 * Button component that uses CSS custom properties for consistent styling
 * across all design systems.
 *
 * Key tokens used:
 * - --button-radius: DS-specific border radius (6px-24px)
 * - --button-padding-x/y: DS-specific padding
 * - --color-primary: Primary action color
 * - --duration-fast: Animation speed
 * - --ease-default: Animation easing
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  external,
  disabled,
}: ButtonProps) {
  // Base styles using CSS custom properties for DS consistency
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-[var(--duration-fast)] rounded-[var(--button-radius)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const { theme } = useTheme();
  const ds = (theme && theme.startsWith("ds") ? theme : "ds5") as DesignSystem;
  const config = MOTION_CONFIGS[ds];

  const variants = {
    // Primary: Filled button with primary color
    primary:
      "bg-[var(--color-primary)] text-[var(--text-inverse)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
    // Secondary: Subtle background with border
    secondary:
      "bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-default)]",
    // Outline: Transparent with border (ghost button for DS2/Attio)
    outline:
      "border border-[var(--border-default)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:border-[var(--border-strong)]",
    // Ghost: No background, subtle hover
    ghost:
      "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-muted)]",
    // Text: Just text with hover underline (for DS1/Linear secondary actions)
    text:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-8 px-[var(--button-padding-x,12px)] py-[var(--button-padding-y,6px)] text-sm gap-1.5",
    md: "h-10 px-[var(--button-padding-x,16px)] py-[var(--button-padding-y,8px)] text-sm gap-2",
    lg: "h-12 px-[var(--button-padding-x,20px)] py-[var(--button-padding-y,10px)] text-base gap-2",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return external ? (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={config.button.hover}
        whileTap={config.button.tap}
      >
        {children}
      </motion.a>
    ) : (
      <MotionLink
        href={href}
        className={classes}
        whileHover={config.button.hover}
        whileTap={config.button.tap}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={config.button.hover}
      whileTap={config.button.tap}
    >
      {children}
    </motion.button>
  );
}
