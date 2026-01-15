'use client'

import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'

type ScrambleTextProps = {
  text: string
  scrambleOnHover?: boolean
  autoScramble?: boolean
  speed?: number
  delay?: number
} & Omit<ComponentProps<'span'>, 'children'>

export function ScrambleText({
  text,
  scrambleOnHover = true,
  autoScramble = false,
  speed = 50,
  delay = 0,
  className,
  ...props
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>(null)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const scramble = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)

    let iteration = 0
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setIsScrambling(false)
        setDisplayText(text)
      }

      iteration += 1 / 3
    }, speed)
  }, [text, speed, isScrambling])

  useEffect(() => {
    if (autoScramble) {
      timeoutRef.current = setTimeout(scramble, delay)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [autoScramble, delay, scramble])

  useEffect(() => {
    setDisplayText(text)
  }, [text])

  return (
    <span
      className={cn('font-mono', className)}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
      {...props}
    >
      {displayText}
    </span>
  )
}
