"use client";

// React
import React, { useState } from "react";

// Next
import { useRouter } from "next/navigation";

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

      console.log("data", data);

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
        gap: "1rem",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem 0",
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem 0",
          }}
        />
      </div>
      <div>
        <label htmlFor="organization">Organization:</label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem 0",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default GuessSuccessForm;
