import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

const sizes = {
  sm: 'text-sm/6',
  md: 'text-base/7',
  lg: 'text-lg/8',
}

export function Text({
  size = 'md',
  className,
  ...props
}: {
  size?: keyof typeof sizes
} & ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-olive-700',
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
