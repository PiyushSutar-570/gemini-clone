const apiKey= "AIzaSyC9y3pA2sCL2v8KTXusTl3Tpji6LHI03kE";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: apiKey });

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return await response.text;
}

export default runChat;