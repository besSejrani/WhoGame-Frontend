"use client";

// React
import React, { useState, useRef, useEffect } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/navigation";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";
import Rules from "@/Components/client/GameRules/Rules";
import Checkbox from "@/Components/client/FormComponents/CheckBox";
import StartGame from "@/Components/client/forms/Public/StartGameForm";

// Store
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

// Cookies
import Cookies from "js-cookie";

// Queries
import { getGameSession } from "@Queries/index";

// ========================================================================================================

// Interface
interface GameProps {
  hasToken: boolean;
}

export const Game: React.FC<GameProps> = ({ hasToken: initialHasToken }) => {
  const router = useRouter();
  const [hasToken, setHasToken] = useState(initialHasToken);
  const token = Cookies.get("token")!;

  const { setSessionId } = useGameStore();
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    setHasToken(!!Cookies.get("token"));
  }, []);

  const handleStartGame = async () => {
    if (isLoading || cooldownTimerRef.current) return;
    setIsLoading(true);

    try {
      const session_id = await getGameSession({ token });

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

  const handleTokenReceived = () => {
    setHasToken(true);
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className="flex  w-[90%] justify-center items-center">
          <div
            className={`
            p-12 mr-40 bg-white h-max overflow-hidden rounded-3xl shadow-[0_-4px_2px_-2px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2)]
            dark:bg-cardDark
            `}
          >
            <Rules isDarkMode={false} />
          </div>
          {!hasToken && <StartGame onTokenReceived={handleTokenReceived} />}

          {hasToken && (
            <div className="flex flex-col justify-center h-full">
              <Button
                text="Let's Start"
                type="button"
                variant="outlined"
                className="w-72 self-center text-2xl px-8 rounded-lg mb-12"
                onClick={handleStartGame}
                disabled={!isAgreed || isLoading || !hasToken}
              />
              <Checkbox
                initialChecked={isAgreed}
                onChange={handleAgreementChange}
                className={`
                  text-base
                  dark:text-white
                  `}
              >
                I agree that I have read the{" "}
                <Link
                  href="/legal/privacy-policy"
                  target="_blank"
                  className="text-[#FFB500]"
                >
                  Privacy Policy
                </Link>{" "}
                and the{" "}
                <Link
                  href="/legal/terms-and-conditions"
                  target="_blank"
                  className="text-[#FFB500]"
                >
                  Terms and Conditions
                </Link>
              </Checkbox>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
