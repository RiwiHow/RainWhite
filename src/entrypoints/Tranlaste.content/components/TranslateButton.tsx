import { RiTranslateAi } from "react-icons/ri";

interface TranslateButtonProps {
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TranslateButton({
  setShowPanel,
}: TranslateButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    setShowPanel((show) => !show);
  }

  return (
    <div
      className="cursor-pointer rounded-xl bg-stone-200 p-1 text-3xl"
      onClick={handleClick}
    >
      <RiTranslateAi />
    </div>
  );
}
