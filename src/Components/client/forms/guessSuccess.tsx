"use client";

import React, { useState } from "react";

// Next
import { useRouter } from "next/navigation";

// Store
import { useModalStore } from "@/Store/modal";
import { useGameStore } from "@/Store/game";

// HTTPS
import axios from "axios";

// Environment Variables
import ServerUri from "@/@Server/ServerUri";

// Define a type for the component props
interface GuessSuccessFormProps {
  session_id: string;
}

// ==========================================================================================

const GuessSuccessForm: React.FC<GuessSuccessFormProps> = ({ session_id }) => {
  const uri = ServerUri();
  const router = useRouter();
  const { resetCounter, resetSession } = useGameStore();

  // ===========================
  // State
  // ===========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data } = await axios.post(`${uri}/v1/raffle`, {
      session_id,
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
    });

    console.log("data", data);

    // resetCounter();
    // resetSession();

    // await router.push(`/`);
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
