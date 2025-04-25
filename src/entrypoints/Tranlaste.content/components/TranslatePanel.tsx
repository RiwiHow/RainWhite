import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/OpenAI";
import { fetchTranslation } from "../hook/useTranslation";

export interface TranslatePanelProps {
  selectedText: string;
}

export default function TranslatePanel({ selectedText }: TranslatePanelProps) {

  const { isPending, data } = useQuery({
    queryKey: ["translate", selectedText],
    queryFn: () => fetchTranslation(selectedText),
  });

  return <div className="min-w-80 rounded-xl bg-stone-200 p-4">{data}</div>;
}
