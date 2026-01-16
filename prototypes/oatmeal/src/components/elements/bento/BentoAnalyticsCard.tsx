'use client'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { BentoCard, BentoCardContent, BentoCardDescription, BentoCardHeader, BentoCardTitle } from './BentoCard'
import { cn } from '@/lib/cn'

const DATA = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 400 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 350 },
  { name: 'Jul', value: 700 },
]

export function BentoAnalyticsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={cn('col-span-1 min-h-[300px]', className)}>
      <BentoCardHeader>
        <BentoCardTitle>Revenue Growth</BentoCardTitle>
        <BentoCardDescription>
          Real-time analytics for your app performance across all platforms.
        </BentoCardDescription>
      </BentoCardHeader>
      <BentoCardContent className="h-[180px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-olive-500)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-olive-500)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'var(--color-olive-500)' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'var(--color-olive-500)' }} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                border: '1px solid var(--color-olive-200)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
              }}
              itemStyle={{ color: 'var(--color-olive-900)' }}
              cursor={{ stroke: 'var(--color-olive-300)', strokeDasharray: '4 4' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-olive-600)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </BentoCardContent>
    </BentoCard>
  )
}
