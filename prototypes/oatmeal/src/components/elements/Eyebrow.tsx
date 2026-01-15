import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

export function Eyebrow({
  className,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'text-sm/7 font-semibold text-olive-600 uppercase tracking-wider',
        className
      )}
      {...props}
    />
  )
}
