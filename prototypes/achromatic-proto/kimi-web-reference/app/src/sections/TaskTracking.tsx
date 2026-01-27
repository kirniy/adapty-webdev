import { RefreshCw, Inbox, CheckCircle, XCircle, Copy } from 'lucide-react'

const TaskTracking = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Task tracking and sprint planning
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Issue tracking you'll enjoy using
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Optimized for speed and efficiency. Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
          </p>
        </div>

        {/* Issue cards visualization */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent blur-3xl" />
          
          <div className="relative grid md:grid-cols-3 gap-4">
            {/* Issue cards */}
            <IssueCard
              id="ENG-1025"
              title="Improve keyboard shortcuts"
              label="UI Refresh"
              priority="high"
              status="in-progress"
            />
            <IssueCard
              id="ENG-1012"
              title="Update payment gateway integration"
              label="PSD2 Regulation"
              priority="medium"
              status="todo"
            />
            <IssueCard
              id="ENG-954"
              title="TimeoutError: Transaction timed out due..."
              label="Bug"
              priority="high"
              status="backlog"
            />
          </div>
        </div>

        {/* Cycles and Triage */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cycles */}
          <div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <RefreshCw className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-medium">Build momentum with Cycles</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Create healthy routines and focus your team on what work should happen next.
              </p>
              
              {/* Cycle chart mockup */}
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-white font-medium">Cycle 55</span>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500" />
                      Scope
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      Started
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Completed
                    </span>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="h-24 flex items-end gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${20 + Math.random() * 60}%`,
                        backgroundColor: i < 5 ? '#6b7280' : i < 12 ? '#eab308' : '#22c55e',
                        opacity: 0.6 + Math.random() * 0.4,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Triage */}
          <div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="absolute -inset-px bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Inbox className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-white font-medium">Manage incoming work with Triage</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Review and assign incoming bug reports, feature requests, and other unplanned work.
              </p>
              
              {/* Triage list mockup */}
              <div className="rounded-lg border border-white/5 bg-black/50 p-4 space-y-3">
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-xs text-red-400">P</div>
                  <span className="text-sm text-gray-300 flex-1">Users report unexpected rate limiting</span>
                  <div className="flex gap-1">
                    <button className="p-1 rounded hover:bg-white/10">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <XCircle className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-xs text-yellow-400">R</div>
                  <span className="text-sm text-gray-300 flex-1">RangeError: Index 0 out of range</span>
                </div>
                
                <div className="flex items-center gap-3 p-2 rounded bg-white/5">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-400">T</div>
                  <span className="text-sm text-gray-300 flex-1">Pressing "Enter" quickly when logging...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const IssueCard = ({
  id,
  title,
  label,
  priority,
  status,
}: {
  id: string
  title: string
  label: string
  priority: string
  status: string
}) => {
  const priorityColors: Record<string, string> = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-gray-500',
  }

  const statusColors: Record<string, string> = {
    'in-progress': 'bg-blue-500/20 text-blue-400',
    todo: 'bg-gray-500/20 text-gray-400',
    backlog: 'bg-purple-500/20 text-purple-400',
  }

  return (
    <div className="group relative rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:border-white/20 transition-all">
      <div className="flex items-start gap-3">
        <div className={`w-2 h-2 rounded-full ${priorityColors[priority]} mt-2`} />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-500">{id}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          <h4 className="text-white font-medium mb-2">{title}</h4>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
            <div className="w-3 h-3 rounded bg-purple-500/30" />
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskTracking
