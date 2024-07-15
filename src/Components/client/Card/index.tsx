// Next
import { useRouter } from "next/navigation";

// Components
import Button from "@/Components/client/Button";
import ModalVerifyIdentity from "@/Components/client/Modal/Content/ModalVerifyIdentity";

// Styles
import { image, paragraph, root } from "./index.css";

// Store
import { useModalStore } from "@/Store/modal";
import { useGameStore } from "@/Store/game";

// HTTPS
import axios from "axios";

// Environment Variables
import ServerUri from "@/@Server/ServerUri";

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
  const uri = ServerUri();
  const router = useRouter();

  // ==============================
  //  Store
  // ==============================
  const { openModal, closeModal } = useModalStore((state) => state);
  const { incrementCounter } = useGameStore();

  // ==============================
  //  Events
  // ==============================

  const guessUser = async () => {
    const { data } = await axios.post(`${uri}/v1/guess`, {
      person: name.toLowerCase(),
      session_id,
    });

    if (data?.body?.answer_correct) {
      await router.push(`/game/${session_id}/success`);
    } else {
      incrementCounter();
    }

    await closeModal();
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
