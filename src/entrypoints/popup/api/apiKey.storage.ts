export const apiKeyStorage = storage.defineItem<string>("local:api-key", {
  fallback: "", // Default is the empty string
});
