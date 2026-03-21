"use client"
import { useState } from "react"

export default function WorkflowGenerator() {
  const [industry, setIndustry] = useState("")
  const [goal, setGoal] = useState("")
  const [scale, setScale] = useState("")
  const [style, setStyle] = useState("")
  const [business, setBusiness] = useState("")
  const [result, setResult] = useState<any>(null)

  const generateWorkflow = () => {
    if (!industry || !goal) return

    const base = {
      title: "AI Workflow System",
      overview: `A ${scale || "scalable"} system designed for ${industry} businesses focused on ${goal}.`,
      steps: [
        "Define your core offer and target audience",
        "Create a simple landing page or entry point",
        "Capture leads or user input",
        "Automate follow-up communication",
        "Generate ongoing content using AI",
        "Convert leads into paying clients",
      ],
      tools: ["Notion", "Zapier", "Email Platform"],
      outcome:
        "A streamlined system that generates, nurtures, and converts leads with minimal manual work.",
    }

    // Style variation
    if (style === "detailed") {
      base.steps = base.steps.map(
        (step, i) =>
          `${step} — optimized with automation and minimal manual effort`
      )
    }

    setResult(base)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">

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

          <select onChange={(e) => setIndustry(e.target.value)} className="input">
            <option value="">Select Industry</option>
            <option value="fitness">Fitness</option>
            <option value="real_estate">Real Estate</option>
            <option value="ecommerce">E-Commerce</option>
          </select>

          <select onChange={(e) => setGoal(e.target.value)} className="input">
            <option value="">Select Goal</option>
            <option value="lead generation">Lead Generation</option>
            <option value="content growth">Content Growth</option>
            <option value="automation">Automation</option>
          </select>

          <select onChange={(e) => setScale(e.target.value)} className="input">
            <option value="">Select Scale</option>
            <option value="solo">Solo</option>
            <option value="small team">Small Team</option>
            <option value="agency">Agency</option>
          </select>

          <select onChange={(e) => setStyle(e.target.value)} className="input">
            <option value="">Output Style</option>
            <option value="simple">Simple</option>
            <option value="detailed">Detailed</option>
          </select>

          <input
            placeholder="Business type (optional)"
            onChange={(e) => setBusiness(e.target.value)}
            className="input"
          />

          <button
            onClick={generateWorkflow}
            className="w-full py-3 bg-white text-black rounded-lg font-medium"
          >
            Generate Workflow
          </button>
        </div>

        {/* OUTPUT */}
        {result && (
          <div className="card">

            <span className="label">Generated Workflow</span>

            <h3 className="title">{result.title}</h3>
            <p className="meta">
              Generated for: {business || industry}
            </p>

            <p className="text-zinc-400">{result.overview}</p>

            <div>
              <h4 className="section">System Breakdown</h4>
              <div className="space-y-3">
                {result.steps.map((step: string, i: number) => (
                  <div key={i} className="step">
                    <span className="step-label">Step {i + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="section">Tools</h4>
              <p className="text-zinc-400">{result.tools.join(", ")}</p>
            </div>

            <div>
              <h4 className="section">Outcome</h4>
              <p className="text-zinc-400">{result.outcome}</p>
            </div>

            <div>
              <h4 className="section">Why This Works</h4>
              <p className="text-zinc-400 text-sm">
                This workflow combines automation and structured processes to create consistent, scalable results.
              </p>
            </div>

            <div className="cta">
              <h4 className="font-semibold mb-2">
                Want this built for you?
              </h4>
              <a href="/contact" className="btn">
                Request Setup
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}
