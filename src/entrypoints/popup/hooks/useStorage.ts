import { useForm, SubmitHandler } from "react-hook-form";
import { apiConfigStorage, ApiConfig } from "../api/apiConfig.storage";

export function useStorage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApiConfig>();
  const [saved, setSaved] = useState(false);

  // Load the saved API configuration
  useEffect(() => {
    apiConfigStorage.getValue().then((config) => {
      if (config) {
        // Set the form values using reset only if config exists
        reset(config);
      }
    });
  }, [reset]);

  const onSubmit: SubmitHandler<ApiConfig> = async (data) => {
    await apiConfigStorage.setValue(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // Hide saved message after 2 seconds
  };

  return {
    register,
    handleSubmit,
    errors,
    saved,
    onSubmit, // Expose onSubmit to be used by the form
  };
}
