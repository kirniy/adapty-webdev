import { ArrowRight } from 'lucide-react'

const ProductDirection = () => {
  const milestones = [
    { name: 'Prototype', start: 10, width: 25, color: '#6366f1' },
    { name: 'Beta', start: 35, width: 30, color: '#8b5cf6' },
    { name: 'GA', start: 65, width: 25, color: '#a855f7' },
  ]

  const projects = [
    { name: 'Realtime inference', start: 15, width: 40, color: '#10b981' },
    { name: 'RLHF fine tuning', start: 45, width: 35, color: '#3b82f6' },
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm text-green-400 font-medium">Project and long-term planning</span>
          <ArrowRight className="w-4 h-4 text-green-400" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Set the product direction
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Align your team around a unified <span className="text-white">product timeline</span>. Plan, manage, and track all product initiatives with Linear's visual planning tools.
            </p>
          </div>

          {/* Roadmap visualization */}
          <div className="relative">
            <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 overflow-hidden">
              {/* Timeline header */}
              <div className="flex items-center justify-between mb-8 text-xs text-gray-500">
                <span>AUG 3</span>
                <span>AUG 22</span>
                <span>SEP</span>
              </div>

              {/* Timeline bars */}
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="relative h-10">
                    <div
                      className="absolute h-full rounded-lg flex items-center px-3 text-sm font-medium text-white"
                      style={{
                        left: `${project.start}%`,
                        width: `${project.width}%`,
                        backgroundColor: `${project.color}30`,
                        borderLeft: `3px solid ${project.color}`,
                      }}
                    >
                      {project.name}
                    </div>
                  </div>
                ))}
                
                {/* Divider */}
                <div className="h-px bg-white/10 my-4" />
                
                {/* Milestones */}
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative h-8">
                    <div
                      className="absolute h-full rounded flex items-center px-2 text-xs text-white/80"
                      style={{
                        left: `${milestone.start}%`,
                        width: `${milestone.width}%`,
                        backgroundColor: `${milestone.color}20`,
                      }}
                    >
                      {milestone.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline markers */}
              <div className="absolute top-16 left-0 right-0 flex justify-between px-6 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-px h-32 bg-white/5" />
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-40 bg-green-500/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        {/* Project management features */}
        <div className="mt-20">
          <h3 className="text-xl font-medium text-white mb-8">Manage projects end-to-end</h3>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Consolidate specs, milestones, tasks, and other documentation in one centralized location.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Project Overview"
              description="Get a high-level view of project progress, health, and key metrics."
            />
            <ProjectCard
              title="Milestones"
              description="Break projects down into concrete phases with clear deliverables."
            />
            <ProjectCard
              title="Project updates"
              description="Communicate progress and project health with built-in project updates."
            />
          </div>

          {/* Status examples */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <StatusCard status="off-track" message="Unexpected roadblocks forced us to take a different..." date="Oct 27" />
            <StatusCard status="at-risk" message="Progress slowed down last week because..." date="Oct 27" />
            <StatusCard status="on-track" message="We are ready to launch next Thursday" date="Sep 8" />
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
    <div className="absolute -inset-px bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
    
    <div className="relative">
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
)

const StatusCard = ({ status, message, date }: { status: string; message: string; date: string }) => {
  const statusColors: Record<string, string> = {
    'off-track': 'bg-red-500/20 text-red-400',
    'at-risk': 'bg-yellow-500/20 text-yellow-400',
    'on-track': 'bg-green-500/20 text-green-400',
  }

  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[status]}`}>
          {status.replace('-', ' ')}
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-2 line-clamp-2">{message}</p>
      <span className="text-xs text-gray-600">{date}</span>
    </div>
  )
}

export default ProductDirection
