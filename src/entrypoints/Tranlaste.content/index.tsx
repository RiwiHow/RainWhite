import "./App.css";
import { createTranslateUI } from "./ui/TranslateUI.tsx";
import { setupSelectionHandlers } from "./handlers/selectionHandlers";

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",

  // Translator content scripts entry
  async main(ctx) {
    const ui = await createTranslateUI(ctx); // Find UI location and create it
    const { cleanup } = setupSelectionHandlers(ui); // Attach event listener to DOM

    ctx.onInvalidated(cleanup);
  },
});
