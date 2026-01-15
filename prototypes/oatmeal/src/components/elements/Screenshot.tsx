import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'
import { Wallpaper } from './Wallpaper'

type Placement =
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'top'
  | 'top-left'
  | 'top-right'

const placementClasses: Record<Placement, string> = {
  bottom: 'px-[var(--padding)] pt-[var(--padding)]',
  'bottom-left': 'pt-[var(--padding)] pr-[var(--padding)]',
  'bottom-right': 'pt-[var(--padding)] pl-[var(--padding)]',
  top: 'px-[var(--padding)] pb-[var(--padding)]',
  'top-left': 'pr-[var(--padding)] pb-[var(--padding)]',
  'top-right': 'pl-[var(--padding)] pb-[var(--padding)]',
}

const radiusClasses: Record<Placement, string> = {
  bottom: '*:rounded-t-lg',
  'bottom-left': '*:rounded-tr-lg',
  'bottom-right': '*:rounded-tl-lg',
  top: '*:rounded-b-lg',
  'top-left': '*:rounded-br-lg',
  'top-right': '*:rounded-bl-lg',
}

export function Screenshot({
  children,
  wallpaper = 'green',
  placement = 'bottom',
  className,
  ...props
}: {
  wallpaper?: 'green' | 'blue' | 'purple' | 'brown' | 'olive'
  placement?: Placement
} & Omit<ComponentProps<'div'>, 'color'>) {
  return (
    <Wallpaper
      color={wallpaper}
      className={cn('group rounded-xl', className)}
      {...props}
    >
      <div
        className={cn(
          'relative [--padding:min(10%,4rem)]',
          placementClasses[placement]
        )}
      >
        <div
          className={cn(
            '*:relative *:ring-1 *:ring-black/10 *:shadow-2xl',
            radiusClasses[placement]
          )}
        >
          {children}
        </div>
      </div>
    </Wallpaper>
  )
}
