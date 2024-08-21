"use client";

// React
import React from "react";

// Next
import { useRouter } from "next/navigation";

// Components
import Button from "@/Components/client/Button";
import ErrorDisplay from "@/Components/client/FormComponents/ErrorDisplay";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Store
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

import Cookies from "js-cookie";

// Queries
import { enterRaffle } from "@Queries/index";

// ==========================================================================================

// Type
type ContactFormValues = {
  name: string;
  email: string;
  organization: string;
};

// Interface
interface GuessSuccessFormProps {
  session_id: string;
}

const GuessSuccessForm: React.FC<GuessSuccessFormProps> = ({ session_id }) => {
  const router = useRouter();

  const token = Cookies.get("token")!;

  // ==============================
  //  Store
  // ==============================
  const { resetCounter, resetSession } = useGameStore();
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
  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      await enterRaffle({
        sessionId: session_id,
        email: data.email,
        name: data.name,
        organization: data.organization,
        token,
      });

      resetCounter();
      resetSession();

      await router.push(`/`);
      setSuccessMessage("Thank you for completing the form");
    } catch (error) {
      setErrorMessage("The form couldn't be submitted");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <label
          htmlFor="name"
          style={{
            position: "absolute",
            top: "-2rem",
            left: "1rem",
            fontSize: "1.2rem",
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Example: Theo"
          {...register("name", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 2,
              message: "This field requires minimum 2 characters",
            },
            maxLength: {
              value: 30,
              message: "This field requires minimum 30 characters",
            },
          })}
          style={{
            fontSize: "1.2rem",
            height: "3rem",
            width: "100%",
            borderRadius: "0.5rem",
            padding: "0rem 1rem",
          }}
        />
        <ErrorDisplay error={errors.name} />
      </div>

      <div
        style={{
          position: "relative",
          margin: "2rem 0rem 0rem 0rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="email"
          style={{
            position: "absolute",
            top: "-2rem",
            left: "1rem",
            fontSize: "1.2rem",
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Example: theo@tecracer.ch"
          {...register("email", {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]{2,})*$/i,
              message: "Your email is not valid",
            },
          })}
          style={{
            fontSize: "1.2rem",
            height: "3rem",
            width: "100%",
            borderRadius: "0.5rem",
            padding: "0rem 1rem",
          }}
        />
        <ErrorDisplay error={errors.email} />
      </div>

      <div
        style={{
          position: "relative",
          margin: "2rem 0rem 0rem 0rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="organization"
          style={{
            position: "absolute",
            top: "-2rem",
            left: "1rem",
            fontSize: "1.2rem",
          }}
        >
          Organization
        </label>
        <input
          type="text"
          placeholder="Example: tecRacer"
          id="organization"
          {...register("organization", {
            required: {
              value: false,
              message: "This field is required",
            },
          })}
          style={{
            fontSize: "1.2rem",
            height: "3rem",
            width: "100%",
            borderRadius: "0.5rem",
            padding: "0rem 1rem",
          }}
        />

        <ErrorDisplay error={errors.organization} />
      </div>

      <Button
        text="Submit"
        type="submit"
        variant="contained"
        styleOverrides={{
          width: "max-content",
          alignSelf: "flex-end",
          margin: "1rem 0rem 0rem 0rem",
        }}
      />
    </form>
  );
};

export default GuessSuccessForm;
