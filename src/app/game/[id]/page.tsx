// UI
import Container from "@/Components/ui/Container";

// Page
import Play from "@Components/pages/game/Play";

// Define a type for params
interface Params {
  id: string;
}

// ==========================================================================================

const GameId: React.FC<{ params: Params }> = ({ params }) => {
  const session_id = params.id;

  // ===========================
  // Path
  // ===========================

  return (
    <Container styleOverrides={{ padding: "3rem 0rem ", width: "90%" }}>
      <Play session_id={session_id} />
    </Container>
  );
};

export default GameId;
