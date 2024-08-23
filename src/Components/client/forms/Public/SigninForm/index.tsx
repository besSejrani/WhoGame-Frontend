"use client";

// React
import React from "react";

// Next
import { useRouter } from "next/navigation";

// Auth
import { signIn } from "next-auth/react";

// Components
import Button from "@/Components/client/Button";
import ErrorDisplay from "@/Components/client/FormComponents/ErrorDisplay";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Store
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

// ==========================================================================================

// Type
type ContactFormValues = {
  email: string;
  password: string;
};

const GuessSuccessForm = () => {
  const router = useRouter();

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
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      router.push("/admin");
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
          htmlFor="password"
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
          type="password"
          id="password"
          {...register("password", {
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

        <ErrorDisplay error={errors.password} />
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
