import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ApiConfig } from "../api/apiConfig.storage";

interface APIKeyInputProps {
  register: UseFormRegister<ApiConfig>;
  errors: FieldErrors<ApiConfig>;
}

export function APIKeyInput({ register, errors }: APIKeyInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor="apiKey" className="mb-2 block text-sm font-medium">
        API Key
      </label>
      <input
        type="text"
        id="apiKey"
        {...register("apiKey", { required: "API Key 是必填项" })} // Register the input and add validation
        className={`w-full rounded border p-2 ${
          errors.apiKey ? "border-red-500" : ""
        }`}
        placeholder="请输入您的 API Key"
      />
      {errors.apiKey && (
        <p className="mt-1 text-xs text-red-500">{errors.apiKey.message}</p>
      )}
    </div>
  );
}
