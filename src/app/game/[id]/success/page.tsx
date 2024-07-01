// UI
import Container from "@/Components/ui/Container";

// Form
import GuessSuccessForm from "@/Components/client/forms/guessSuccess";

// Define a type for params
interface Params {
  id: string;
}

// Define a type for the component props
interface SuccessProps {
  params: Params;
}

// ==========================================================================================

const Success: React.FC<SuccessProps> = ({ params }) => {
  const session_id = params.id as string;

  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>Success</h1>

          <GuessSuccessForm session_id={session_id} />
        </div>
      </div>
    </Container>
  );
};

export default Success;
