import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Sends a prompt to the OpenAI API and returns the response.
 *
 * @param {string} prompt - The prompt to send to the OpenAI API.
 * @returns {Promise<string>} - The response from the OpenAI API.
 *
 * @example
 * const response = await sendPrompt("Tell me a joke.");
 * console.log(response);
 */
export const sendPrompt = async (prompt) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};
