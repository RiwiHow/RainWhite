import { apiKeyStorage } from "../api/apiKey.storage";

export function ApiKeyForm() {
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);

  // Load the saved API Key
  useEffect(() => {
    apiKeyStorage.getValue().then(setApiKey);
  }, [setApiKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await apiKeyStorage.setValue(apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="apiKey" className="mb-2 block text-sm font-medium">
          API Key
        </label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full rounded border p-2"
          placeholder="请输入您的 API Key"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        保存
      </button>
      {saved && <span className="ml-2 text-green-600">✓ 已保存</span>}
    </form>
  );
}
