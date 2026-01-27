import { useState } from 'react'
import { ArrowRight, Target, Zap, Gem } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MadeForTeams = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const tabs = [
    {
      icon: Target,
      title: 'Purpose-built for product development',
      description: 'Linear is designed specifically for software teams, with workflows that match how modern product teams actually work.',
    },
    {
      icon: Zap,
      title: 'Designed to move fast',
      description: 'Keyboard-first design, lightning-fast shortcuts, and a focus on efficiency mean you spend less time navigating and more time building.',
    },
    {
      icon: Gem,
      title: 'Crafted to perfection',
      description: 'Every pixel is thoughtfully designed. The result is a tool that feels intuitive and delightful to use every day.',
    },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Made for modern<br />product teams
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
            </p>
            <a
              href="/switch"
              className="group inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
            >
              Make the switch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side - Tabs */}
          <div 
            className={`space-y-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`relative rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeTab === index
                    ? 'bg-white/5 border-white/10'
                    : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        activeTab === index ? 'bg-white/10' : 'bg-white/5'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-2">{tab.title}</h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeTab === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Active indicator */}
                {activeTab === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {[
            { title: 'Streamline issues', description: 'Create and track issues with ease. Organize work with labels, priorities, and custom workflows.', gradient: 'from-purple-500/20 to-blue-500/20', delay: 0 },
            { title: 'Plan projects', description: 'Visualize project timelines, set milestones, and keep your team aligned on goals.', gradient: 'from-blue-500/20 to-cyan-500/20', delay: 100 },
            { title: 'Build roadmaps', description: 'Create beautiful product roadmaps that communicate your vision to stakeholders.', gradient: 'from-cyan-500/20 to-green-500/20', delay: 200 },
          ].map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${card.delay + 400}ms` }}
            >
              <div className={`absolute -inset-px bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl`} />
              
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-white/20 to-transparent" />
                </div>
                <h3 className="text-white font-medium mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MadeForTeams
