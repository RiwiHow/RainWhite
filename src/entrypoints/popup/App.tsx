import { ApiKeyForm } from "./components/ApiKeyForm";

export default function Popup() {
  return (
    <div className="w-[300px]">
      <h1 className="border-b p-4 text-lg font-bold">设置</h1>
      <ApiKeyForm />
    </div>
  );
}
