// UI
import Container from "@/Components/ui/Container";

// Page
import Play from "@Components/pages/game/Play";

// DynamoDB
import { scanPeopleTable } from "@DynamoDB/dynamodb";

// ==========================================================================================

// Define a type for params
interface Params {
  id: string;
}

type Person = {
  name: string;
  photo_url: string;
};

const GameId: React.FC<{ params: Params }> = async ({ params }) => {
  const session_id = params.id;

  // ===========================
  // Data
  // ===========================
  const data = (await scanPeopleTable()) as Person[];

  return (
    <Container styleOverrides={{ padding: "3rem 0rem ", width: "90%" }}>
      <Play session_id={session_id} data={data} />
    </Container>
  );
};

export default GameId;
