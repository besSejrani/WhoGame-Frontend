// UI
import Container from "@/Components/ui/Container";

// Page
import Play from "@/Components/client/Play";

// DynamoDB
import { scanTable } from "@AWS/DynamoDB";

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
  const data = (await scanTable({ tableName: "people" })) as Person[];

  return (
    <Container className="py-4">
      <Play session_id={session_id} data={data} />
    </Container>
  );
};

export default GameId;
