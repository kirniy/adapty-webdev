'use client'

import { cn } from '@/lib/cn'
import { motion } from 'motion/react'
import type { ComponentProps, FormEvent } from 'react'
import { useState } from 'react'

export function EmailForm({
  placeholder = 'Enter your email',
  buttonText = 'Get started',
  className,
  ...props
}: {
  placeholder?: string
  buttonText?: string
} & Omit<ComponentProps<'form'>, 'onSubmit'>) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 1000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex rounded-full p-1.5 bg-white shadow-sm',
        'border border-olive-200',
        'focus-within:ring-2 focus-within:ring-olive-500/20 focus-within:border-olive-400',
        'transition-all duration-200',
        className
      )}
      {...props}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={cn(
          'flex-1 min-w-0 px-4 py-2',
          'bg-transparent text-olive-950 placeholder:text-olive-400',
          'text-sm/6 focus:outline-none'
        )}
      />
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'shrink-0 px-5 py-2 rounded-full',
          'bg-olive-950 text-white text-sm/6 font-medium',
          'hover:bg-olive-800 transition-colors',
          'disabled:opacity-50 disabled:pointer-events-none'
        )}
      >
        {isSubmitting ? 'Sending...' : buttonText}
      </motion.button>
    </form>
  )
}
