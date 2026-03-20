import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const skills = body.skills || "";
    const interests = body.interests || "";
    const experience = body.experience || "";

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

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    // Safe access
    const text =
      response.choices?.[0]?.message?.content?.trim() || "No result";

    return NextResponse.json({ result: text });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return NextResponse.json(
      { result: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
