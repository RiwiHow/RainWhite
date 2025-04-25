import { QueryClient } from "@tanstack/react-query";
import { getData } from "../api/OpenAI";

export const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export async function fetchTranslation(selectedText: string): Promise<string> {
  try {
    const result = await getData(selectedText);
    return result;
  } catch (error) {
    console.error("Translation error:", error);
    throw new Error("Translation failed");
  }
}
