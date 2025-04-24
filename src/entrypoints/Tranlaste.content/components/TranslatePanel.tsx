import { getData } from "../api/OpenAI";

export interface TranslatePanelProps {
  selectedText: string;
}

export default function TranslatePanel({ selectedText }: TranslatePanelProps) {
  const [translateText, setTranslateText] = useState("");

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const result = await getData(selectedText);
        setTranslateText(result);
      } catch (error) {
        console.error("Translation error:", error);
        setTranslateText("Translation failed");
      }
    };

    fetchTranslation();
  }, [selectedText]);

  return (
    <div className="min-w-80 rounded-xl bg-stone-200 p-4">
      <div>{translateText}</div>
    </div>
  );
}
