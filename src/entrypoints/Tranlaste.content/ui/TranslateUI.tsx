import ReactDOM from "react-dom/client";
import Translate from "../components/Translate";
import { ContentScriptContext } from "wxt/utils/content-script-context";

const selection = window.getSelection();

export async function createTranslateUI(ctx: ContentScriptContext) {
  return await createShadowRootUi(ctx, {
    name: "translate-panel",
    position: "overlay",
    anchor: createAnchorElement,
    onMount: (container) => {
      const App = () => {
        const [selectedText, setSelectedText] = useState("");

        useEffect(() => {
          setSelectedText(selection?.toString().trim() || "");
        }, [setSelectedText]);

        return <Translate selectedText={selectedText} />;
      };

      const root = ReactDOM.createRoot(container);
      root.render(<App />);
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
