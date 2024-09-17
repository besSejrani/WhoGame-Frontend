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
      className={`
        flex flex-col justify-center items-center gap-6
        `}
    >
      <div className="relative w-full">
        <label
          htmlFor="name"
          className={`
          absolute -top-10 left-4 text-sm
          dark:text-white
          `}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          autoComplete="off"
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
          className={`
            text-sm h-12 w-full rounded-lg px-4 outline-none border-gray-500 border-2
            dark:bg-cardDark dark:text-white dark:border-gray-500 
            `}
        />
        <ErrorDisplay error={errors.name} />
      </div>

      <div className="relative mt-8 w-full">
        <label
          htmlFor="email"
          className={`
          absolute -top-10 left-4 text-sm
          dark:text-white
          `}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="off"
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
          className={`
            text-sm h-12 w-full rounded-lg px-4 outline-none border-gray-500 border-2
            dark:bg-cardDark dark:text-white dark:border-gray-500 
            `}
        />
        <ErrorDisplay error={errors.email} />
      </div>

      <div className="relative mt-8 w-full">
        <label
          htmlFor="organization"
          className={`
            absolute -top-10 left-4 text-sm
            dark:text-white
            `}
        >
          Organization
        </label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Example: tecRacer"
          id="organization"
          {...register("organization", {
            required: {
              value: false,
              message: "This field is required",
            },
          })}
          className={`
            text-sm h-12 w-full rounded-lg px-4 outline-none border-gray-500 border-2
            dark:bg-cardDark dark:text-white dark:border-gray-500 
            `}
        />

        <ErrorDisplay error={errors.organization} />
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

export default GuessSuccessForm;
