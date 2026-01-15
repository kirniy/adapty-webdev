"use client";

import React, { useRef, useState } from "react";
import { motion, type HTMLMotionProps, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/cn";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0.1, className, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1.2,
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
    const words = text.split(" ");
    
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay }
        }
    };

    const child = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            y: 20
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20,
                mass: 1.2
            }
        }
    };

    return (
        <motion.span 
            className={cn("inline-block", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={child} className="inline-block mr-[0.2em]">
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

export function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.2); // Adjust pull strength
        y.set((clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={cn("inline-block", className)}
        >
            {children}
        </motion.div>
    );
}
