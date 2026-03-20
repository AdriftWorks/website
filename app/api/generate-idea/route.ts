import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { skills, interests, experience } = await req.json();

    const prompt = `
      You are an expert startup strategist.
      Given the following user profile, generate a startup idea with monetization strategy and next steps.

      Skills: ${skills}
      Interests: ${interests}
      Experience: ${experience}

      Output format:

      Startup Idea:
      Monetization:
      Next Steps:
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const text = completion.choices?.[0]?.message?.content || "No result";

    return NextResponse.json({ result: text });
  } catch (err: any) {
    return NextResponse.json({ result: `Error: ${err.message}` }, { status: 500 });
  }
}
