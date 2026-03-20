import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { skills, interests, experience } = await req.json()

  const prompt = `
You are a startup strategist.

Given:
Skills: ${skills}
Interests: ${interests}
Experience: ${experience}

Generate:

1. A startup idea
2. How it makes money
3. First 3 steps to start

Keep it clear and actionable.
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
