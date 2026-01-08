// src/app/api/consult-gemstone/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize AI (Make sure to add GOOGLE_API_KEY to your .env.local file)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, dob, time, place, weight, gender } = body;

    // Use the specific versioned model name to avoid 404s
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // We instruct the AI to act as a Vedic Astrologer and return ONLY JSON
    const prompt = `
      Act as an expert Vedic Astrologer (Jyotish Shastra). 
      Analyze the following user details to recommend the single most beneficial gemstone for them based on their planetary positions.
      
      User Details:
      - Name: ${name}
      - Gender: ${gender}
      - Date of Birth: ${dob}
      - Time of Birth: ${time}
      - Place of Birth: ${place}
      - Body Weight: ${weight} kg

      Calculate the ideal gemstone, weight, metal, and wearing instructions.
      
      IMPORTANT: Return the response ONLY as a raw JSON object with no markdown formatting or backticks. Use exactly this schema:
      {
        "stoneName": "String (e.g. Yellow Sapphire)",
        "sanskritName": "String (e.g. Pukhraj)",
        "weightRatti": Number (calculated as roughly body weight / 12, but adjust for astrological intensity),
        "metal": "String (e.g. Gold)",
        "finger": "String (e.g. Index Finger)",
        "day": "String (e.g. Thursday)",
        "mantra": "String (Sanskrit mantra for the planet)",
        "description": "String (A short, mystical explanation of why this stone was chosen for their specific chart)"
      }
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Clean up any potential markdown formatting the AI might add
    const cleanedText = responseText.replace(/```json|```/g, "").trim();
    const gemData = JSON.parse(cleanedText);

    return NextResponse.json(gemData);
  } catch (error) {
    console.error("AI Consultation Failed:", error);
    return NextResponse.json(
      { error: "Failed to consult the celestial records." },
      { status: 500 }
    );
  }
}
