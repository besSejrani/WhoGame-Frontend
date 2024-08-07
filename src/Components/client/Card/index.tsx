// Next
import { useRouter } from "next/navigation";

// Components
import Button from "@/Components/client/Button";
import ModalVerifyIdentity from "@/Layout/Components/Modal/Content/ModalVerifyIdentity";

// Styles
import { image, paragraph, root } from "./index.css";

// Store
import { useModalStore } from "@/Store/modal";
import { useGameStore } from "@/Store/game";
import useToastStore from "@Store/toasts";

// Queries
import { guessPerson } from "@Queries/index";

// ==========================================================================================

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

  // ==============================
  //  Store
  // ==============================
  const { openModal, closeModal } = useModalStore((state) => state);
  const { incrementCounter } = useGameStore();
  const setErrorMessage = useToastStore((state) => state.setErrorMessage);
  const setSuccessMessage = useToastStore((state) => state.setSuccessMessage);

  // ==============================
  //  Events
  // ==============================

  const guessUser = async () => {
    try {
      const answerCorrect = await guessPerson({ sessionId: session_id, name });

      if (answerCorrect) {
        await router.push(`/game/${session_id}/success`);
        setSuccessMessage("You nailed it !");
      } else {
        incrementCounter();
        setErrorMessage("Wrong guess, try again !");
      }
    } catch (error) {
      console.error("Error guessing person:", error);
      setErrorMessage("Wrong guess, try again !");
      // Handle error (e.g., show error message to user)
    } finally {
      await closeModal();
    }
  };

  return (
    <div
      className={root}
      style={{
        filter: isSelected ? "grayscale(100%)" : "none",
      }}
    >
      <img
        src={imageUrl}
        draggable={false}
        className={image}
        alt={name}
        onClick={onClick}
      />

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
          onClick={() =>
            openModal(
              <ModalVerifyIdentity
                title={`Are you sure it's ${name} ?`}
                text={`This will count as an attempt.`}
                closeDialog={closeModal}
                onConfirm={() => guessUser()}
              />
            )
          }
          styleOverrides={{ fontSize: "1.2rem", padding: "0.5rem 1rem" }}
        />
      </div>
    </div>
  );
};

export default Card;
