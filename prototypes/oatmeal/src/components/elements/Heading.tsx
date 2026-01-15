import { cn } from '@/lib/cn'
import type { ComponentProps, ElementType } from 'react'

type HeadingProps<T extends ElementType = 'h1'> = {
  as?: T
  size?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
} & Omit<ComponentProps<T>, 'as'>

const sizes = {
  xl: 'text-2xl/8 sm:text-3xl/10 font-display tracking-tight',
  '2xl': 'text-3xl/10 sm:text-4xl/12 font-display tracking-tight',
  '3xl': 'text-4xl/12 sm:text-5xl/14 font-display tracking-tight',
  '4xl': 'text-5xl/12 sm:text-6xl/16 font-display tracking-tighter',
  '5xl': 'text-5xl/12 sm:text-[5rem]/20 font-display tracking-tighter',
}

export function Heading<T extends ElementType = 'h1'>({
  as,
  size = '5xl',
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as || 'h1'
  return (
    <Component
      className={cn(
        'text-olive-950 text-balance',
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
