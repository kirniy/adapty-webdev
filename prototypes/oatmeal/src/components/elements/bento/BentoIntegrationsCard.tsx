'use client'

import { FlickeringGrid } from '@/components/effects/FlickeringGrid'
import { BentoCard, BentoCardContent, BentoCardDescription, BentoCardHeader, BentoCardTitle } from './BentoCard'
import { cn } from '@/lib/cn'
import { SlackLogo, NotionLogo, FigmaLogo, GithubLogo } from '@phosphor-icons/react'

export function BentoIntegrationsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={cn('col-span-1 min-h-[300px] overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <FlickeringGrid
          squareSize={4}
          gridGap={8}
          color="rgb(88, 101, 74)" 
          maxOpacity={0.15}
          flickerChance={0.1}
          height={400}
          width={400}
          className="w-full h-full"
        />
      </div>
      
      <BentoCardHeader>
        <BentoCardTitle>Seamless Integrations</BentoCardTitle>
        <BentoCardDescription>
          Connect with your favorite tools in seconds.
        </BentoCardDescription>
      </BentoCardHeader>
      
      <BentoCardContent className="flex items-center justify-center gap-6 mt-12">
        <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-olive-900/5 backdrop-blur-md animate-pulse-soft">
          <SlackLogo size={32} weight="duotone" className="text-[#4A154B]" />
        </div>
        <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-olive-900/5 backdrop-blur-md animate-pulse-soft delay-100">
          <NotionLogo size={32} weight="duotone" className="text-black" />
        </div>
        <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-olive-900/5 backdrop-blur-md animate-pulse-soft delay-200">
          <FigmaLogo size={32} weight="duotone" className="text-[#F24E1E]" />
        </div>
        <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-olive-900/5 backdrop-blur-md animate-pulse-soft delay-300">
          <GithubLogo size={32} weight="duotone" className="text-black" />
        </div>
      </BentoCardContent>
    </BentoCard>
  )
}
