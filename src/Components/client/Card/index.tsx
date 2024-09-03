import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/Components/client/Button";
import ModalVerifyIdentity from "@/Layout/Components/Common/Modal/Content/ModalVerifyIdentity";

// Store
import { useModalStore } from "@/Store/modal";
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

import Cookies from "js-cookie";

// Queries
import { guessPerson } from "@Queries/index";

// ==========================================================================================

interface ICard {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
  session_id: string;
  flipDelay: number;
}

const Card: React.FC<ICard> = ({
  imageUrl,
  name,
  isSelected,
  onClick,
  session_id,
  flipDelay,
}) => {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);

  const token = Cookies.get("token")!;

  const { openModal, closeModal } = useModalStore((state) => state);
  const { incrementCounter } = useGameStore();
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, flipDelay);
    return () => clearTimeout(timer);
  }, [flipDelay]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onClick();
  };

  const guessUser = async () => {
    try {
      console.log("session_id", session_id);

      const answerCorrect = await guessPerson({
        sessionId: session_id,
        name,
        token,
      });
      if (answerCorrect) {
        await router.push(`/success-game/${session_id}`);
        setSuccessMessage("You nailed it!");
      } else {
        incrementCounter();
        setErrorMessage("Wrong guess, try again!");
      }
    } catch (error) {
      console.error("Error guessing person:", error);
      setErrorMessage("Wrong guess, try again!");
    } finally {
      await closeModal();
    }
  };

  return (
    <div
      className="perspective-1000 w-full h-[300px] cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {
          // ===============================================
          // Back Card
          // ===============================================
        }
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#111827] shadow-md">
          <div className="flex items-center justify-center w-full h-full">
            <div className="border border-primary p-6 h-[90%] w-[90%] rounded-lg flex flex-col items-center justify-center">
              <img
                src="/tecracer-white.svg"
                alt="Logo"
                className="mb-4 w-[90%] h-[60px] object-contain"
                draggable={false}
              />
              <p className="text-white text-2xl font-200">{name}</p>
            </div>
          </div>
        </div>

        {
          // ===============================================
          // Front Card
          // ===============================================
        }
        <div
          className={`
          absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-white shadow-md rotate-y-180
          dark:bg-dark
          `}
        >
          <img
            src={imageUrl}
            alt={name}
            className="h-[250px] w-full object-cover"
            draggable={false}
          />
          <div className="flex justify-between items-center m-4">
            <p
              className={`
              text-xl
              font-200
              dark:text-white
              `}
            >
              {name}
            </p>
            <Button
              text="Guess"
              type="button"
              variant="outlined"
              className="text-base px-2 py-1 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                openModal(
                  <ModalVerifyIdentity
                    title={`Are you sure it's ${name}?`}
                    text={`This will count as an attempt.`}
                    closeDialog={closeModal}
                    onConfirm={() => guessUser()}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
