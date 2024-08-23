// StartGame.tsx

// React
import React from "react";

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
    try {
      const { data } = await validateApiKey({
        api_key: form.apiKey,
      });

      Cookies.set("token", data.token, { expires: 7 });

      setSuccessMessage("The Password has been validated");

      onTokenReceived();
    } catch (error) {
      setErrorMessage("The Password could not be validated");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <label
            htmlFor="api-key"
            style={{
              position: "absolute",
              top: "-2rem",
              left: "1rem",
              fontSize: "1.2rem",
            }}
          >
            Password
          </label>
          <input
            type="text"
            id="api-key"
            placeholder="Example: aknd3j29-d92d-4a7a-bf78"
            {...register("apiKey", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            style={{
              fontSize: "1.2rem",
              height: "3rem",
              width: "22rem",
              border: "1px solid black",
              borderRight: "none",
              padding: "0rem 1rem",
              outline: "none",
            }}
          />
        </div>

        <Button
          text="Validate"
          type="submit"
          variant="contained"
          styleOverrides={{
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "0rem",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "0rem",
            cursor: "pointer",
          }}
        />
      </div>
    </form>
  );
};

export default StartGame;
