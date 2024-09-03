// React
import React, { useState, useRef } from "react";

// Store
import useToastStore from "@Store/toasts";

// Components
import Button from "@Components/client/Button";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Cookies
import Cookies from "js-cookie";

// Queries
import { validateApiKey } from "@Queries/index";

// ==========================================================================================

// Type
type ContactFormValues = {
  apiKey: string;
};

// Props
interface StartGameProps {
  onTokenReceived: () => void;
}

const StartGame: React.FC<StartGameProps> = ({ onTokenReceived }) => {
  // ==============================
  //  State
  // ==============================
  const [isLoading, setIsLoading] = useState(false);
  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // ==============================
  //  Store
  // ==============================
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

  // ==============================
  //  Form
  // ==============================
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ContactFormValues>();

  // ===========================
  // Submit
  // ===========================
  const onSubmit: SubmitHandler<ContactFormValues> = async (form) => {
    if (isLoading || cooldownTimerRef.current) return;
    setIsLoading(true);

    try {
      const { data } = await validateApiKey({
        api_key: form.apiKey,
      });

      Cookies.set("token", data.token, { expires: 7 });
      setSuccessMessage("The Password has been validated");
      onTokenReceived();
    } catch (error) {
      console.error("Error validating API key:", error);
      setErrorMessage("The Password could not be validated");
    } finally {
      setIsLoading(false);
      cooldownTimerRef.current = setTimeout(() => {
        cooldownTimerRef.current = null;
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      <div className="relative">
        {
          // ===============================================
          // Label
          // ===============================================
        }
        <label
          htmlFor="api-key"
          className={`
          absolute -top-14 left-4 text-base
          dark:text-white
          `}
        >
          Password
        </label>

        {
          // ===============================================
          // Input
          // ===============================================
        }
        <input
          type="text"
          id="api-key"
          placeholder="Example: aknd3j29-d92d-4a7a-bf78"
          className={`
            text-base w-120 py-4 border border-black border-r-0 px-4 outline-none h-20 rounded-tl-xl rounded-bl-xl
            dark:border-none
            ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}
            `}
          {...register("apiKey", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          disabled={isLoading}
        />
      </div>

      <Button
        text="Validate"
        type="submit"
        variant="contained"
        className={`
          rounded-r-lg rounded-l-none text-base px-4 py-4
          ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
        `}
        disabled={isLoading}
      />
    </form>
  );
};

export default StartGame;
