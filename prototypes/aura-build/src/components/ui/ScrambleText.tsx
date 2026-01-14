"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface ScrambleTextProps {
  text: string;
  className?: string;
  hover?: boolean; // If true, only scrambles on hover. If false, runs on mount.
  speed?: number;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export function ScrambleText({
  text,
  className,
  hover = true,
  speed = 40,
  delay = 0,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    // Clear any existing timers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Start delay
    timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
        setDisplayText((prev) =>
            text
            .split("")
            .map((char, index) => {
                if (index < iteration) {
                return text[index];
                }
                return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= maxIterations) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsScrambling(false);
        }

        iteration += 1 / 3; // Slower reveal
        }, speed);
    }, delay);
  };

  useEffect(() => {
    if (!hover) {
      scramble();
    }
    return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.span
      className={cn("inline-block font-mono", className)}
      onHoverStart={() => {
        if (hover) scramble();
      }}
    >
      {displayText}
    </motion.span>
  );
}
