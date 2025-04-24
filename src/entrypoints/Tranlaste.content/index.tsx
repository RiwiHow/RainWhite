import "./App.css";
import { createTranslateUI } from "./ui/TranslateUI.tsx";
import { setupSelectionHandlers } from "./handlers/selectionHandlers";

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createTranslateUI(ctx);
    const { cleanup } = setupSelectionHandlers(ui);

    ctx.onInvalidated(cleanup);
  },
});
