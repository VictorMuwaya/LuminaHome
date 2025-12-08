import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRODUCTS, BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_PHONE } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Construct a system instruction that gives the AI context about the store
const SYSTEM_INSTRUCTION = `
You are the helpful, polite, and knowledgeable AI Sales Associate for ${BUSINESS_NAME}.
Your goal is to assist customers in finding products, answering questions about the catalog, and providing business information.

Business Info:
Address: ${BUSINESS_ADDRESS}
Phone: ${BUSINESS_PHONE}

Here is the current Product Catalog in JSON format:
${JSON.stringify(PRODUCTS)}

Guidelines:
1. Always be courteous and concise.
2. If a customer asks about a specific type of product (e.g., "chairs"), recommend items from the catalog.
3. If a customer asks for the price, quote the price from the catalog.
4. If a customer asks to buy, direct them to use the "Call to Order" or "WhatsApp" buttons on the site. You cannot process payments directly.
5. Keep answers short (under 50 words unless detailed info is requested).
6. Do not hallucinate products not in the catalog.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  if (!API_KEY) {
    console.error("API_KEY is missing");
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to the server. Please try again later.";
  }
};
