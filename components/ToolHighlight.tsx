// components/sections/ToolHighlight.tsx

export default function ToolHighlight() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Try Our Tools
        </h2>

        <p className="text-zinc-400 mb-8">
          Generate ideas, workflows, and systems instantly using our tools.
        </p>

        <a
          href="/tools"
          className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
        >
          Open Tools
        </a>

      </div>
    </section>
  )
}
