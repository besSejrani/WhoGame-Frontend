"use client";

// React
import { useState } from "react";

// Next
import { useRouter } from "next/navigation";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Store
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

// Queries
import { getGameSession } from "@Queries/index";

// ==========================================================================================

const Game = () => {
  const router = useRouter();

  // ===========================
  // Store
  // ===========================
  const { setSessionId } = useGameStore();
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

  // ===========================
  // State
  // ===========================
  const [isLoading, setIsLoading] = useState(false);

  // ===========================
  // Event
  // ===========================
  const handleStartGame = async () => {
    setIsLoading(true);
    try {
      const session_id = await getGameSession();

      if (session_id) {
        setSessionId(session_id);
        router.push(`/game/${session_id}`);
        setSuccessMessage("The game has started");
      } else {
        console.error("No session ID returned");
        setErrorMessage("The game could not be started");
      }
    } catch (error) {
      console.error("Error starting game:", error);
      setErrorMessage("The game could not be started");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          text="Start"
          type="button"
          variant="contained"
          onClick={() => handleStartGame()}
        />
      </div>
    </Container>
  );
};

export default Game;
