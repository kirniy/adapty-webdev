import { ArrowRight, Bot, Sparkles, Cpu } from 'lucide-react'

const AIAssistant = () => {
  const agents = [
    { name: 'Cursor', type: 'Agent', color: '#fff' },
    { name: 'GitHub Copilot', type: 'Agent', color: '#6e40c9' },
    { name: 'Sentry', type: 'Agent', color: '#fb4226' },
    { name: 'Leela', type: 'Agent', color: '#00d4aa' },
    { name: 'Codex', type: 'Agent', color: '#10a37f' },
    { name: 'Conor', type: 'Agent', color: '#6366f1' },
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-cyan-400 font-medium">Artificial intelligence</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              AI-assisted product development
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              <span className="text-white font-medium">Linear for Agents.</span> Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
            </p>
            <a
              href="/agents"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Agents visualization */}
          <div className="relative">
            <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 overflow-hidden">
              {/* Agent list */}
              <div className="space-y-3">
                {agents.map((agent, index) => (
                  <div
                    key={agent.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                      style={{ backgroundColor: `${agent.color}20`, color: agent.color }}
                    >
                      {agent.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{agent.name}</div>
                    </div>
                    <span className="text-xs text-gray-500 px-2 py-1 rounded-full bg-white/5">
                      {agent.type}
                    </span>
                  </div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Self-driving operations */}
          <div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Bot className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-medium">Self-driving product operations</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Streamline your product development workflows with AI assistance for routine, manual tasks.
              </p>
              
              {/* Triage example */}
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-400">Triage Intelligence</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Mobile App Refactor</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 text-xs text-gray-400">
                    Duplicate of ENG-1419
                  </div>
                  <div className="text-xs text-gray-500">
                    Why this assignee was suggested
                  </div>
                  <div className="text-xs text-gray-400">
                    This person was the assignee on previous issues related to performance problems...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Linear MCP */}
          <div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-medium">Linear MCP</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.
              </p>
              
              {/* Integration example */}
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center text-xs text-green-400">C</div>
                  <span className="text-sm text-white">Cursor</span>
                  <span className="text-xs text-gray-500 ml-auto">Connected</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-xs text-purple-400">Cl</div>
                  <span className="text-sm text-white">Claude</span>
                  <span className="text-xs text-gray-500 ml-auto">Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAssistant
