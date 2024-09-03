// React
import React, { useEffect, useCallback } from "react";

// Next
import { useRouter } from "next/navigation";

// Layout
import GameRulesModal from "@/Layout/Components/Common/Modal/Content/GameRules";

// Components
import Button from "@/Components/client/Button";

// Icons
import Timer from "@/Components/client/Sidebar/GameInfos/Timer";

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

  // ==============================
  //  Store
  // ==============================
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOpenModal]);

  return (
    <div className="rounded-2xl p-4 mt-8 bg-white shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.2),0_2px_6px_0_rgba(0,0,0,0.3)]">
      <h2 className="text-xl font-300 mb-4 text-dark">Game Infos</h2>
      <Timer />

      <p className="text-base text-dark">
        <span className="font-500">Attempts: </span>
        {counter}
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-xl font-300 mb-2 text-dark">Keyboard shortcuts</h2>
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => {
          handleOpenModal();
        }}
      >
        <p className="text-base text-dark">Game Rules</p>
        <p className="text-base border border-gray-400 rounded-full px-4 py-1 text-dark">
          esc
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <Button
        text="Quit the game"
        type="submit"
        variant="contained"
        className="w-full text-lg font-extralight py-2 rounded-md"
        onClick={() => quitTheGame()}
      />
    </div>
  );
};

export default GameInfo;
