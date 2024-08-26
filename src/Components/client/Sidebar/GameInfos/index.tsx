// React
import React, { useEffect, useCallback } from "react";

// Next
import { useRouter } from "next/navigation";

// Layout
import GameRulesModal from "@/Layout/Components/Common/Modal/Content/GameRules";

// Components
import Button from "@/Components/client/Button";

// Styles
import { card } from "./index.css";

// Icons
import Timer from "@Components/client/Timer";

// State
import { useModalStore } from "@/Store/modal";

// Queries
import { quitGame } from "@Queries/index";

// ==========================================================================================

// Interface
interface GameProps {
  sessionId: string;
  token: string;
  counter: number;
}

const GameInfo: React.FC<GameProps> = ({ sessionId, token, counter }) => {
  const router = useRouter();

  const { openModal, isOpen } = useModalStore((state) => state);

  // ==============================
  //  Events
  // ==============================
  const quitTheGame = async () => {
    const { status } = await quitGame({ sessionId: sessionId!, token });

    if (status === 200) {
      router.push("/");
    }
  };

  // ==============================
  //  Modal
  // ==============================
  const handleOpenModal = useCallback(() => {
    console.log("Attempting to open modal");
    openModal(<GameRulesModal />);
    console.log("Modal open function called");
    console.log("Current modal state:", { isOpen });
  }, [openModal, isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("Escape key pressed");
        event.preventDefault();
        handleOpenModal();
      }
    };

    console.log("Adding event listener for Escape key");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("Removing event listener for Escape key");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOpenModal]);

  return (
    <div className={card}>
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 400,
          margin: "0rem 0rem 1rem 0rem",
        }}
      >
        Game Infos
      </h2>
      <Timer />
      <p>
        <span style={{ fontWeight: 500 }}>Attempts:</span>
        {counter}
      </p>

      <hr style={{ opacity: 0.5, margin: "1.5rem 0rem" }} />

      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 400,
          margin: "0rem 0rem 0.5rem 0rem",
        }}
      >
        Keyboard shortcuts
      </h2>
      <div
        style={{
          margin: "0 0rem 0rem 0rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
        onClick={() => {
          console.log("Help div clicked");
          handleOpenModal();
        }}
      >
        <p>Game Rules</p>
        <p
          style={{
            border: "1px solid grey",
            borderRadius: "99px",
            width: "max-content",
            padding: "0.25rem 1rem",
          }}
        >
          esc
        </p>
      </div>

      <hr style={{ opacity: 0.5, margin: "1.5rem 0rem" }} />

      <Button
        text="Quit the game"
        type="submit"
        variant="contained"
        styleOverrides={{
          width: "100%",
          fontWeight: 100,
        }}
        onClick={() => quitTheGame()}
      />
    </div>
  );
};

export default GameInfo;
