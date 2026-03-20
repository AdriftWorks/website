"use client";

import { useState } from "react";

export default function IdeaGenerator() {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [experience, setExperience] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/generate-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills, interests, experience }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setResult(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">AI Startup Idea Generator</h1>

      <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
        <input
          type="text"
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Generating..." : "Generate Idea"}
        </button>
      </form>

      {result && (
  <div className="whitespace-pre-wrap bg-neutral-900 text-white p-4 rounded">
    {result}
  </div>
)}
}
