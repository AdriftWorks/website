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
          overview: "A system designed to consistently generate and convert fitness leads.",
          steps: [
            "Create a landing page offering a free workout guide",
            "Capture emails using a form",
            "Send automated email follow-ups",
            "Use AI to generate daily fitness content",
            "Convert leads into booked calls"
          ],
          tools: ["Notion", "Zapier", "Email Platform"],
          outcome: "Consistent inbound leads and automated follow-ups"
        }
      },
      real_estate: {
        leads: {
          title: "Real Estate Lead Funnel",
          overview: "A simple funnel to capture and nurture real estate prospects.",
          steps: [
            "Create a home buyer/seller guide",
            "Capture leads via landing page",
            "Automate SMS/email follow-ups",
            "Post AI-generated listings content daily",
            "Route leads to booking calls"
          ],
          tools: ["CRM", "Zapier", "SMS Tool"],
          outcome: "Automated pipeline of qualified real estate leads"
        }
      }
    }

    const data =
      workflows[industry]?.[goal] || {
        title: "Custom AI Workflow",
        overview: "A flexible workflow tailored to your business.",
        steps: [
          "Define your offer",
          "Capture leads",
          "Automate follow-ups",
          "Generate content using AI",
          "Convert leads into clients"
        ],
        tools: ["Notion", "Automation Tools"],
        outcome: "Streamlined and scalable business workflow"
      }

    setResult(data)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          AI Workflow Generator
        </h2>

        <div className="space-y-4 mb-6">
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
            className="w-full py-3 bg-white text-black rounded-lg font-medium"
          >
            Generate Workflow
          </button>
        </div>

        {result && (
          <div className="border border-white/10 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">{result.title}</h3>
            <p className="text-zinc-400">{result.overview}</p>

            <div>
              <h4 className="font-medium mb-2">Steps</h4>
              <ul className="list-disc list-inside text-zinc-300">
                {result.steps.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Tools</h4>
              <p className="text-zinc-400">{result.tools.join(", ")}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Outcome</h4>
              <p className="text-zinc-400">{result.outcome}</p>
            </div>

            {/* 💰 MONEY BUTTON */}
            <div className="pt-4 border-t border-white/10">
              <p className="mb-3 text-sm text-zinc-400">
                Want this built for your business?
              </p>
              <a
                href="/contact"
                className="inline-block px-5 py-2 bg-white text-black rounded-lg"
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
