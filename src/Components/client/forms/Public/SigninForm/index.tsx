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

const SignInForm: React.FC = () => {
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
      className="flex flex-col justify-center items-center gap-6"
    >
      <div className="relative mt-8 w-full">
        <label
          htmlFor="email"
          className="absolute -top-10 left-4 text-sm dark:text-white"
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
          className="text-sm h-12 w-full rounded-lg px-4 outline-none border-gray-500 border-2 dark:bg-cardDark dark:text-white dark:border-gray-500"
        />
        <ErrorDisplay error={errors.email} />
      </div>

      <div className="relative mt-8 w-full">
        <label
          htmlFor="password"
          className="absolute -top-10 left-4 text-sm dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          className="text-sm h-12 w-full rounded-lg px-4 outline-none border-gray-500 border-2 dark:bg-cardDark dark:text-white dark:border-gray-500"
        />
        <ErrorDisplay error={errors.password} />
      </div>

      <Button
        text="Submit"
        type="submit"
        variant="contained"
        className="w-max self-end mt-4 text-lg font-200 px-4 py-1 rounded-lg"
      />
    </form>
  );
};

export default SignInForm;
