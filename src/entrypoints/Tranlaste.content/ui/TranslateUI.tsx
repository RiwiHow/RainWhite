import ReactDOM from "react-dom/client";
import { ContentScriptContext } from "#imports";
import App from "../components/App";

const selection = window.getSelection();

export async function createTranslateUI(ctx: ContentScriptContext) {
  return await createShadowRootUi(ctx, {
    name: "translate-panel",
    position: "overlay",
    anchor: createAnchorElement, // Set the UI position
    onMount: (container) => {
      const root = ReactDOM.createRoot(container);
      root.render(<App selection={selection} />);
      return root;
    },
    onRemove: (root) => {
      root?.unmount();
      document
        .querySelectorAll("span[button-anchor]")
        .forEach((el) => el.remove());
    },
  });
}

function createAnchorElement() {
  if (!selection || selection.rangeCount === 0) return null;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  const tempElement = document.createElement("span");
  tempElement.setAttribute("button-anchor", "true");
  tempElement.style.position = "absolute";
  tempElement.style.left = `${rect.right + window.scrollX + 10}px`;
  tempElement.style.top = `${rect.top + window.scrollY - 20}px`;
  document.body.appendChild(tempElement);

  return tempElement;
}
