export const dynamic = "force-dynamic";

// UI
import Container from "@/Components/ui/Container";

// Form
import GuessSuccessForm from "@/Components/client/forms/guessSuccess";

import ConfettiComponent from "@/Components/client/Confetti";

// ==========================================================================================

// Define a type for params
interface Params {
  id: string;
}

// Define a type for the component props
interface SuccessProps {
  params: Params;
}

const Success: React.FC<SuccessProps> = ({ params }) => {
  const session_id = params.id as string;

  return (
    <div>
      <ConfettiComponent />
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
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 300,
              margin: "0rem 0rem 1rem 0rem",
            }}
          >
            Congratulations, Detective!
          </h1>

          <p
            style={{
              fontSize: "2rem",
              fontWeight: 300,
              width: "50%",
              textAlign: "center",
              lineHeight: "2.5rem",
              margin: "0rem 0rem 10rem 0rem",
            }}
          >
            You've cracked the case! Your sharp mind and clever questions have
            unveiled the mystery. Well done!
          </p>

          <div>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 300,
                margin: "0rem 0rem 3rem 0rem",
              }}
            >
              Claim Your Chance at Exciting Prizes!
            </h2>

            <GuessSuccessForm session_id={session_id} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Success;
