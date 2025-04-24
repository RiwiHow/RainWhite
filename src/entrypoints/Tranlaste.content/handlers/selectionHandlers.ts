import ReactDOM from "react-dom/client";

export function setupSelectionHandlers(ui: ShadowRootContentScriptUi<ReactDOM.Root>) {
  let createButton: ShadowRootContentScriptUi<ReactDOM.Root> | null = null;

  const handleSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (selectedText && !createButton) {
      createButton = ui;
      createButton.mount();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (createButton && !ui.shadowHost.contains(event.target as Node)) {
      createButton.remove();
      createButton = null;
    }
  };

  document.addEventListener("mouseup", handleSelection);
  document.addEventListener("mousedown", handleClickOutside);

  return {
    cleanup: () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("mousedown", handleClickOutside);
      if (createButton) {
        createButton.remove();
        createButton = null;
      }
    },
    createButton,
  };
}
