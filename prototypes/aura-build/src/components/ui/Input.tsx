import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "dark" | "glass";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full px-5 py-3.5 rounded-xl text-sm transition-all duration-200 font-medium",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          "placeholder:font-normal placeholder:transition-opacity focus:placeholder:opacity-70",
          {
            default:
              "border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:ring-stone-200 focus:border-stone-300",
            dark: "border border-stone-700 bg-stone-950/50 text-white placeholder-stone-500 focus:ring-brand-lime/50 focus:border-brand-lime/30",
            glass:
              "border border-white/10 bg-white/5 text-white placeholder-white/40 backdrop-blur-md focus:bg-white/10 focus:ring-brand-lime/50 focus:border-white/20 hover:bg-white/10",
          }[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
