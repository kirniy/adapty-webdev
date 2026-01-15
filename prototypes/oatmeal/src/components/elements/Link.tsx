import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

export function Link({
  className,
  ...props
}: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 text-sm/7 font-medium text-olive-950',
        'hover:text-olive-600 transition-colors',
        className
      )}
      {...props}
    />
  )
}
