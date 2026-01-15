import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

export function Section({
  className,
  ...props
}: ComponentProps<'section'>) {
  return (
    <section
      className={cn('py-16 sm:py-24', className)}
      {...props}
    />
  )
}

export function SectionHeader({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl text-center',
        className
      )}
      {...props}
    />
  )
}
