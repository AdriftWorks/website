// components/sections/Capabilities.tsx

export default function Capabilities() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-2">AI Systems</h3>
            <p className="text-zinc-400 text-sm">
              Automation tools, prompt systems, and workflow integrations for modern businesses.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-2">Interactive Tools</h3>
            <p className="text-zinc-400 text-sm">
              Lightweight SaaS tools designed for speed, usability, and real-world application.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-2">Game Development</h3>
            <p className="text-zinc-400 text-sm">
              Experimental and production-ready game systems under Blackframe Interactive.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
