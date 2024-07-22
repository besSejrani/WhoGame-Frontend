"use client";

// Next
import { useRouter } from "next/navigation";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Store
import { useGameStore } from "@/Store/game";

// HTTPS
import axios from "axios";

// Environment Variables
import ServerUri from "@/@Server/ServerUri";

// ==========================================================================================

const Game = () => {
  const uri = ServerUri();
  const router = useRouter();
  const { setSessionId } = useGameStore();

  // ===========================
  // Event
  // ===========================
  const getGameSession = async () => {
    console.log("uri", uri);
    const { data } = await axios.get(`${uri}/wii_dev_start_game`);

    console.log("data", data);

    if (data?.session_id) {
      await setSessionId(data?.session_id);
      await router.push(`/game/${data?.session_id}`);
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
          onClick={() => getGameSession()}
        />
      </div>
    </Container>
  );
};

export default Game;
