import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

export function Subheading({
  className,
  ...props
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-[2rem]/10 sm:text-5xl/14 font-display tracking-tight text-olive-950 text-pretty',
        className
      )}
      {...props}
    />
  )
}
