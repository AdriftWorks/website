"use client"
import { useState } from "react"

export default function WorkflowGenerator() {
  const [industry, setIndustry] = useState("")
  const [goal, setGoal] = useState("")
  const [business, setBusiness] = useState("")
  const [result, setResult] = useState<any>(null)

  const generateWorkflow = () => {
    if (!industry || !goal) return

    const workflows: any = {
      fitness: {
        leads: {
          title: "AI Lead Generation System",
          overview:
            "A system designed to consistently generate and convert fitness leads.",
          steps: [
            "Create a landing page offering a free workout guide",
            "Capture emails using a form",
            "Send automated email follow-ups",
            "Use AI to generate daily fitness content",
            "Convert leads into booked calls",
          ],
          tools: ["Notion", "Zapier", "Email Platform"],
          outcome:
            "A consistent pipeline of inbound leads with automated nurturing.",
        },
      },
      real_estate: {
        leads: {
          title: "Real Estate Lead Funnel",
          overview:
            "A streamlined system to capture, nurture, and convert property leads.",
          steps: [
            "Create a buyer/seller lead magnet",
            "Capture leads via landing page",
            "Automate SMS/email follow-ups",
            "Post AI-generated listings content",
            "Route leads into booking calls",
          ],
          tools: ["CRM", "Zapier", "SMS Automation"],
          outcome:
            "Automated pipeline of qualified real estate prospects.",
        },
      },
    }

    const data =
      workflows[industry]?.[goal] || {
        title: "Custom AI Workflow",
        overview:
          "A flexible workflow tailored to automate and scale your business operations.",
        steps: [
          "Define your core offer",
          "Capture leads through a simple funnel",
          "Automate follow-up communication",
          "Generate content using AI tools",
          "Convert leads into paying clients",
        ],
        tools: ["Notion", "Automation Tools"],
        outcome:
          "A streamlined, scalable system that reduces manual work and increases output.",
      }

    setResult(data)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            AI Workflow Generator
          </h2>
          <p className="text-zinc-400 text-sm">
            Generate structured workflows tailored to your business
          </p>
        </div>

        {/* INPUTS */}
        <div className="space-y-4 mb-8">

          <select
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
          >
            <option value="">Select Industry</option>
            <option value="fitness">Fitness</option>
            <option value="real_estate">Real Estate</option>
          </select>

          <select
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
          >
            <option value="">Select Goal</option>
            <option value="leads">Lead Generation</option>
          </select>

          <input
            placeholder="Business type (optional)"
            onChange={(e) => setBusiness(e.target.value)}
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
          />

          <button
            onClick={generateWorkflow}
            className="w-full py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
          >
            Generate Workflow
          </button>

        </div>

        {/* OUTPUT */}
        {result && (
          <div className="border border-white/10 rounded-xl p-6 space-y-6 bg-white/[0.02]">

            {/* Label */}
            <div>
              <span className="text-xs uppercase tracking-wide text-zinc-500">
                Generated Workflow
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl font-semibold">
                {result.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Generated for: {business || industry}
              </p>
            </div>

            {/* Overview */}
            <p className="text-zinc-400">
              {result.overview}
            </p>

            {/* Steps */}
            <div>
              <h4 className="font-medium mb-3">System Breakdown</h4>
              <div className="space-y-3">
                {result.steps.map((step: string, i: number) => (
                  <div
                    key={i}
                    className="p-3 border border-white/10 rounded-lg bg-black/30"
                  >
                    <span className="text-xs text-zinc-500">
                      Step {i + 1}
                    </span>
                    <p className="text-zinc-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-medium mb-2">Tools</h4>
              <p className="text-zinc-400">
                {result.tools.join(", ")}
              </p>
            </div>

            {/* Outcome */}
            <div>
              <h4 className="font-medium mb-2">Outcome</h4>
              <p className="text-zinc-400">
                {result.outcome}
              </p>
            </div>

            {/* Why It Works */}
            <div>
              <h4 className="font-medium mb-2">Why This Works</h4>
              <p className="text-zinc-400 text-sm">
                This workflow combines automation, consistent content, and structured
                lead capture to create a scalable system that runs with minimal manual effort.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-white/10">

              <h4 className="text-lg font-semibold mb-2">
                Want this system built for you?
              </h4>

              <p className="text-zinc-400 text-sm mb-4">
                We’ll set up this exact workflow for your business — automation,
                tools, and structure included.
              </p>

              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
              >
                Request Setup
              </a>

            </div>

          </div>
        )}

      </div>
    </section>
  )
}
