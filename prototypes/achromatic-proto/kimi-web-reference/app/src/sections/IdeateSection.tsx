import { useState } from 'react'
import { FileText, MessageSquare, Command, Target, Users, Flag, BarChart3 } from 'lucide-react'

const IdeateSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { icon: FileText, label: 'Collaborative documents' },
    { icon: MessageSquare, label: 'Inline comments' },
    { icon: Command, label: 'Text-to-issue commands' },
  ]

  const features = [
    {
      icon: Target,
      title: 'Initiatives',
      description: 'Coordinate strategic product efforts.',
    },
    {
      icon: Users,
      title: 'Cross-team projects',
      description: 'Collaborate across teams and departments.',
    },
    {
      icon: Flag,
      title: 'Milestones',
      description: 'Break projects down into concrete phases.',
    },
    {
      icon: BarChart3,
      title: 'Progress insights',
      description: 'Track scope, velocity, and progress over time.',
    },
  ]

  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Ideate and specify<br />what to build next
            </h2>

            {/* Tabs */}
            <div className="space-y-2 mt-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 text-left ${
                    activeTab === index
                      ? 'bg-white/5 border-white/10'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      activeTab === index ? 'bg-white/10' : 'bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{tab.label}</span>
                  {activeTab === index && (
                    <div className="ml-auto w-1 h-8 rounded-full bg-gradient-to-b from-green-400 to-green-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Document preview */}
          <div className="relative">
            <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
              {/* Document header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="text-xs text-gray-500">Spice harvester</span>
                <span className="text-gray-600">/</span>
                <span className="text-xs text-gray-400">Project specs</span>
              </div>

              {/* Document content */}
              <div className="p-6">
                {/* Avatar group */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-medium text-white">
                    Z
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-medium text-white -ml-2">
                    Q
                  </div>
                </div>

                {/* Title with highlight */}
                <div className="mb-4">
                  <span className="inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded mb-2">
                    zoe
                  </span>
                  <h3 className="text-xl font-medium text-white">Collaborate on ideas</h3>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Write down product ideas and work together on feature specs in realtime, multiplayer project
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <span className="inline-block px-1.5 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">
                      quinn
                    </span>{' '}
                    documents. Add **style** and ##structure with rich-text formatting options.
                  </p>
                </div>

                {/* Placeholder lines */}
                <div className="mt-6 space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-2 bg-white/5 rounded"
                      style={{ width: `${80 + Math.random() * 20}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
              
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IdeateSection
