import { QueryClientProvider } from "@tanstack/react-query";
import { queryClint } from "../hook/useTranslation";
import Translate from "./Translate";

interface AppProps {
  selection: Selection | null;
}

function App({ selection }: AppProps) {
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    setSelectedText(selection?.toString().trim() || "");
  }, [selection]);

  return (
    <QueryClientProvider client={queryClint}>
      <Translate selectedText={selectedText} />
    </QueryClientProvider>
  );
}

export default App;
