import { UseFormRegister } from "react-hook-form";
import { ApiConfig } from "../api/apiConfig.storage";

interface APIServiceSelectorProps {
  register: UseFormRegister<ApiConfig>;
}

export function APIServiceSelector({ register }: APIServiceSelectorProps) {
  return (
    <div className="mb-4">
      <label htmlFor="service" className="mb-2 block text-sm font-medium">
        API 服务
      </label>
      <select
        id="service"
        {...register("service")} // Register the select input
        className="w-full rounded border p-2"
      >
        <option value="openai">OpenAI</option>
        <option value="deepseek">DeepSeek</option>
        {/* Add other service options here if needed */}
      </select>
    </div>
  );
}
