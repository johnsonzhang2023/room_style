import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateRoomRedesign = async (
    imageBase64: string,
    prompt: string
): Promise<string> => {
    if (!apiKey) {
        console.error("API Key is missing");
        throw new Error("API Key is missing");
    }

    try {
        // Remove header if present to get pure base64
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
        const mimeType = imageBase64.match(/^data:(image\/\w+);base64,/)?.[1] || "image/jpeg";

        const model = 'gemini-2.5-flash-image';

        const response = await ai.models.generateContent({
            model: model,
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Data,
                            mimeType: mimeType
                        }
                    },
                    {
                        text: `Redesign this room interior. ${prompt}. Maintain the structural layout but change the style, furniture, and colors.`
                    }
                ]
            }
        });

        // Parse response for image
        // The structure usually puts the image in parts if it's an image generation model returning an image
        // However, standard generateContent might return text. 
        // For gemini-2.5-flash-image specifically used for editing/generation, we look for inlineData in the candidate.
        
        const candidates = response.candidates;
        if (candidates && candidates.length > 0) {
            const parts = candidates[0].content.parts;
            for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                    return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
                }
            }
        }
        
        throw new Error("No image generated.");

    } catch (error) {
        console.error("Gemini Generation Error:", error);
        throw error;
    }
};