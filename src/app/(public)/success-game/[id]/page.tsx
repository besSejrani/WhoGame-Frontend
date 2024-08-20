// UI
import Container from "@/Components/ui/Container";

// Component
import ConfettiComponent from "@/Components/client/Confetti";

// Form
import GuessSuccessForm from "@/Components/client/forms/Public/GuessSuccessForm";

// Styles
import { root, title, paragraph, formTitle, card } from "./index.css";

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
      <Container
        styleOverrides={{
          padding: "0rem",
          height: "100%",
          width: "100%",

          backgroundImage: 'url("/background-perspective.svg")',
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={root}>
          <h1 className={title}>Congratulations, Detective!</h1>

          <p className={paragraph}>
            You've cracked the case! Your sharp mind and clever questions have
            unveiled the mystery. Well done!
          </p>

          <div className={card}>
            <h2 className={formTitle}>Claim Your Reward!</h2>

            <GuessSuccessForm session_id={session_id} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Success;
