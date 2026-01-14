"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/cn";
import { Children, isValidElement } from "react";

interface BlurRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  blurStrength?: number;
  yOffset?: number;
  stagger?: number;
  as?: React.ElementType;
}

export function BlurReveal({
  children,
  className,
  duration = 0.8,
  delay = 0,
  blurStrength = 10,
  yOffset = 20,
  stagger = 0.1,
  as: Component = "div",
  ...props
}: BlurRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blurStrength}px)`,
      y: yOffset
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  // If children is a string, split it into words? 
  // For now, let's assume children are elements or text nodes we want to animate as a block
  // or if the user wants to animate children individually, they should pass them as children.
  
  // However, the prompt says "Stagger children by 0.1s". 
  // If I wrap a single <h1>, it won't stagger the text inside unless I split it.
  // But usually, we wrap a container (like a div) and the children (h1, p, button) stagger.
  
  // Let's make it a container that animates its direct children.
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {Children.map(children, (child) => {
        if (!child) return null;
        
        return (
          <motion.div variants={itemVariants} className="origin-top-left">
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// Special version for splitting text
export function TextBlurReveal({ 
  text, 
  className, 
  delay = 0 
}: { 
  text: string; 
  className?: string;
  delay?: number;
}) {
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
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <motion.h1 
            className={cn("flex flex-wrap gap-x-[0.2em]", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
