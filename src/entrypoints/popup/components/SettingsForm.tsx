import { useStorage } from "../hooks/useStorage";
import { APIServiceSelector } from "./APIServiceSelector";
import { APIKeyInput } from "./APIKeyInput";

export function SettingsForm() {
  // Use the custom hook to get form state and handlers
  const { register, handleSubmit, errors, saved, onSubmit } = useStorage();

  return (
    <>
      <h1 className="border-b p-4 text-lg font-bold">设置</h1>
      {/* Use react-hook-form's handleSubmit with the onSubmit from the hook */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        {/* Render the Service Selector Component */}
        <APIServiceSelector register={register} />

        {/* Render the API Key Input Component */}
        <APIKeyInput register={register} errors={errors} />

        {/* Keep the submit button and saved message */}
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          保存
        </button>
        {saved && <span className="ml-2 text-green-600">✓ 已保存</span>}
      </form>
    </>
  );
}
