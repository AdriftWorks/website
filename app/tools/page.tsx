import Link from "next/link"

export default function Tools() {
  const tools = [
    {
      name: "AI Startup Idea Generator",
      description:
        "Generate startup ideas, monetization strategies, and next steps.",
      href: "/tools/idea-generator",
    },
    // future tools here
  ]

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Tools
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Lightweight AI tools designed to generate ideas, workflows, and systems for modern businesses.
          </p>
        </div>

        {/* 🔥 FEATURED TOOL (YOUR MONEY MAKER) */}
        <div className="mb-20 border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.02]">

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              AI Workflow Generator
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Generate structured AI workflows tailored to your business, then turn them into real systems.
            </p>
          </div>

          <Link
            href="/tools/workflow-generator"
            className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
          >
            Open Tool
          </Link>

        </div>

        {/* 🧩 OTHER TOOLS */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-zinc-300">
            More Tools
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {tool.name}
                </h2>
                <p className="text-zinc-400 text-sm">
                  {tool.description}
                </p>
              </Link>
            ))}

            {/* 👇 COMING SOON CARD (IMPORTANT FOR PERCEPTION) */}
            <div className="p-6 border border-dashed border-white/10 rounded-xl text-zinc-500">
              <h2 className="text-lg font-semibold mb-2">
                More tools coming
              </h2>
              <p className="text-sm">
                We’re actively building new tools and systems.
              </p>
            </div>

          </div>
        </div>

      </div>

    </main>
  )
}
