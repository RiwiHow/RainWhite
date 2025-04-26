export type ApiService = "openai" | "deepseek";

export interface ApiConfig {
  apiKey: string;
  service: ApiService;
}

// Define the storage item for API configuration
// The key "apiConfig" will be used in the browser's storage
// The defaultValue provides a default structure if nothing is stored yet
export const apiConfigStorage = storage.defineItem<ApiConfig>(
  "local:apiConfig",
  {
    defaultValue: {
      apiKey: "",
      service: "openai", // Default to OpenAI
    },
  },
);
