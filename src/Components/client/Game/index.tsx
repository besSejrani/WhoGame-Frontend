"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/Components/ui/Container";
import Button from "@/Components/client/Button";
import Rules from "@/Components/client/Rules";
import Checkbox from "@/Components/client/FormComponents/CheckBox";
import StartGame from "@/Components/client/forms/Public/StartGameForm";
import { root, group, rules, form } from "./index.css";
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";
import Cookies from "js-cookie";
import { getGameSession } from "@Queries/index";

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
          {!hasToken && <StartGame onTokenReceived={handleTokenReceived} />}

          {hasToken && (
            <div className={form}>
              <Button
                text="Let's Start"
                type="button"
                variant="outlined"
                styleOverrides={{
                  width: "12rem",
                  margin: "1rem 0rem 4rem 0rem",
                  alignSelf: "center",
                  fontWeight: 100,
                }}
                onClick={handleStartGame}
                disabled={!isAgreed || isLoading || !hasToken}
              />
              <Checkbox
                initialChecked={isAgreed}
                onChange={handleAgreementChange}
                styleOverrides={{ alignSelf: "flex-end" }}
              >
                I agree that I have read the{" "}
                <Link
                  href="/legal/privacy-policy"
                  target="_blank"
                  style={{ color: "#FFB500" }}
                >
                  Privacy Policy
                </Link>{" "}
                and the{" "}
                <Link
                  href="/legal/terms-and-conditions"
                  target="_blank"
                  style={{ color: "#FFB500" }}
                >
                  Terms and Conditions
                </Link>
                .
              </Checkbox>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
