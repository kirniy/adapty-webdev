import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

const colors = {
  green: 'from-[#9ca88f] to-[#596352]',
  blue: 'from-[#637c86] to-[#778599]',
  purple: 'from-[#7b627d] to-[#8f6976]',
  brown: 'from-[#8d7359] to-[#765959]',
  olive: 'from-olive-400 to-olive-600',
}

export function Wallpaper({
  children,
  color = 'green',
  className,
  ...props
}: {
  color?: keyof typeof colors
} & ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-b',
        colors[color],
        className
      )}
      {...props}
    >
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      <div className="relative">{children}</div>
    </div>
  )
}
