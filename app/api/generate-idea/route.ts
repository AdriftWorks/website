import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { skills, interests, experience } = await req.json()

  const prompt = `
You are an expert startup strategist. Given a user's profile, generate a detailed, structured response.

Input:
- Skills: {skills}
- Interests: {interests}
- Experience: {experience}

Output format (JSON):
{
  "idea": "One-line description of the startup idea",
  "monetization": "How this idea could generate revenue",
  "next_steps": ["Step 1", "Step 2", "Step 3"]
}

Keep it clear, concise, and actionable. Avoid vague language.
`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    const data = await response.json()

    const result = data.choices?.[0]?.message?.content || 'No result.'

    return NextResponse.json({ result })
  } catch (error) {
    return NextResponse.json({ result: 'Error generating idea.' })
  }
}
