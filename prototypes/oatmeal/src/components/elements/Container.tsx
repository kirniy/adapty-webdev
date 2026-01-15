import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

export function Container({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-7xl px-6 lg:px-10',
        className
      )}
      {...props}
    />
  )
}
