"use client";

// React
import React, { useState } from "react";

// Next
import { useRouter } from "next/navigation";

// Components
import Button from "@/Components/client/Button";

// Store
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

// Queries
import { enterRaffle } from "@Queries/index";

// ==========================================================================================

interface GuessSuccessFormProps {
  session_id: string;
}
const GuessSuccessForm: React.FC<GuessSuccessFormProps> = ({ session_id }) => {
  const router = useRouter();
  const { resetCounter, resetSession } = useGameStore();

  // ==============================
  //  Store
  // ==============================
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

  // ===========================
  // State
  // ===========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  // UI
  const [disabled, setDisabled] = useState<boolean>(false);

  // ===========================
  // Event
  // ===========================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ===========================
  // Submit
  // ===========================
  const handleSubmit = async (form: React.FormEvent) => {
    form.preventDefault();

    try {
      const data = enterRaffle({
        sessionId: session_id,
        email: formData.email,
        name: formData.name,
        organization: formData.organization,
      });

      resetCounter();
      resetSession();

      await router.push(`/`);
      setSuccessMessage("Thank you for completing the form");
    } catch (error) {
      setErrorMessage("The form couldn't be updated");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          htmlFor="api-key"
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            fontSize: "1.2rem",
            height: "3rem",
            width: "100%",
            borderRadius: "0.5rem",

            padding: "0rem 1rem",
          }}
        />
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            fontSize: "1.2rem",
            height: "3rem",
            width: "100%",
            borderRadius: "0.5rem",

            padding: "0rem 1rem",
          }}
        />
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
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          style={{
            fontSize: "1.2rem",
            height: "3rem",
            width: "100%",
            borderRadius: "0.5rem",

            padding: "0rem 1rem",
          }}
        />
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
