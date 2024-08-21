import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/Components/client/Button";
import ModalVerifyIdentity from "@/Layout/Components/Modal/Content/ModalVerifyIdentity";

// Store
import { useModalStore } from "@/Store/modal";
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

import Cookies from "js-cookie";

// Queries
import { guessPerson } from "@Queries/index";

// Styles
import {
  root,
  image,
  paragraph,
  cardInner,
  cardFront,
  cardBack,
  flippedCard,
} from "./index.css";

// ==========================================================================================

// Interface
interface ICard {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
  session_id: string;
}

const Card: React.FC<ICard> = ({
  imageUrl,
  name,
  isSelected,
  onClick,
  session_id,
}) => {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);

  const token = Cookies.get("token")!;

  const { openModal, closeModal } = useModalStore((state) => state);
  const { incrementCounter } = useGameStore();
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

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
    <div className={root} onClick={handleClick}>
      <div className={`${cardInner} ${isFlipped ? flippedCard : ""}`}>
        <div className={cardFront}>
          <img src={imageUrl} draggable={false} className={image} alt={name} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <p className={paragraph}>{name}</p>
            <Button
              text="Guess"
              type="button"
              variant="outlined"
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
              styleOverrides={{ fontSize: "1.2rem", padding: "0.5rem 1rem" }}
            />
          </div>
        </div>
        <div className={cardBack}>
          <div
            style={{
              border: "1px solid #FFB500",
              padding: "1.5rem 0rem",
              height: "90%",
              width: "90%",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/tecracer-white.svg"
              alt="Logo"
              height={60}
              // width={150}
              style={{ margin: "0rem 0rem 1rem 0rem", width: "90%" }}
              draggable={false}
            />
            <p style={{ color: "white", fontSize: "1.8rem" }}>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
