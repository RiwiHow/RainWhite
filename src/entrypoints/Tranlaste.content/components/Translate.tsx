import TranslateButton from "./TranslateButton";
import TranslatePanel, { TranslatePanelProps } from "./TranslatePanel";


export default function Translate({ selectedText }: TranslatePanelProps) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      
      {showPanel ? (
        <TranslatePanel selectedText={selectedText} />
      ) : (
        <TranslateButton setShowPanel={setShowPanel} />
      )}
    </>
  );
}
