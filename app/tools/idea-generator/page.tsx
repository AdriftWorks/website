'use client'

import { useState } from 'react'

export default function IdeaGeneratorPage() {
  const [skills, setSkills] = useState('')
  const [interests, setInterests] = useState('')
  const [experience, setExperience] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    setOutput('')

    try {
      const res = await fetch('/api/generate-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          skills,
          interests,
          experience,
        }),
      })

      const data = await res.json()
      setOutput(data.result)
    } catch (err) {
      setOutput('Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">
        AI Startup Idea Generator
      </h1>

      <p className="text-gray-600 mb-8">
        Enter your skills, interests, and experience to generate a startup idea.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Skills (e.g. coding, design, marketing)"
          className="w-full border rounded-lg px-4 py-3"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <input
          type="text"
          placeholder="Interests (e.g. fitness, AI, gaming)"
          className="w-full border rounded-lg px-4 py-3"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />

        <input
          type="text"
          placeholder="Experience (e.g. freelancing, startup, corporate)"
          className="w-full border rounded-lg px-4 py-3"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          className="w-full bg-black text-white rounded-lg py-3 hover:opacity-90 transition"
        >
          {loading ? 'Generating...' : 'Generate Idea'}
        </button>
      </div>

      {output && (
        <div className="mt-10 p-6 border rounded-lg bg-gray-50 whitespace-pre-wrap">
          {output}
        </div>
      )}
    </main>
  )
}
