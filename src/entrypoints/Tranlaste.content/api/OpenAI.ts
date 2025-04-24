import OpenAI from "openai";
import { apiKeyStorage } from "@/entrypoints/popup/api/apiKey.storage";

let client: OpenAI;

async function initializeClient() {
  const apiKey = await apiKeyStorage.getValue();
  client = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
}

initializeClient();

export async function getData(input: string) {
  const response = await client.responses.create({
    model: "gpt-4o",
    input: `翻译下面的语句成中文：${input}`,
  });

  return response.output_text;
}
