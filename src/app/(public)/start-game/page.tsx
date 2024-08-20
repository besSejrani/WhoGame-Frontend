"use client";

// React
import { useState, useRef } from "react";

// Next
import { useRouter } from "next/navigation";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";
import Rules from "@/Components/client/Rules";

// Form
import Checkbox from "@/Components/client/FormInputs/CheckBox";
import StartGame from "@/Components/client/forms/Public/StartGameForm";

// Styles
import { root, group, rules, form } from "./index.css";

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
  // Ref
  // ===========================
  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // ===========================
  // State
  // ===========================
  const [isLoading, setIsLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  // ===========================
  // Event
  // ===========================
  const handleStartGame = async () => {
    if (isLoading || cooldownTimerRef.current) return;
    setIsLoading(true);

    try {
      const session_id = await getGameSession();

      if (session_id && !isLoading) {
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

      cooldownTimerRef.current = setTimeout(() => {
        cooldownTimerRef.current = null;
      }, 3000);
    }
  };

  const handleAgreementChange = (checked: boolean) => {
    setIsAgreed(checked);
  };

  return (
    <Container
      styleOverrides={{
        padding: "0rem",
        height: "100%",
        width: "100%",
        backgroundImage: 'url("/background-perspective.svg")',
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={root}>
        <div className={group}>
          <div className={rules}>
            <Rules />
          </div>

          <div className={form}>
            {/* <StartGame /> */}

            <Checkbox
              label=" I agree that I have read the Privacy Policy and the Terms and Conditions."
              initialChecked={isAgreed}
              onChange={handleAgreementChange}
            />

            <Button
              text="Let's Start"
              type="button"
              variant="outlined"
              styleOverrides={{
                width: "12rem",
                margin: "1rem 0rem",
                alignSelf: "center",
                fontWeight: 100,
              }}
              onClick={() => handleStartGame()}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Game;
