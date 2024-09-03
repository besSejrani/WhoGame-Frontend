// UI
import Container from "@/Components/ui/Container";

// Component
import ConfettiComponent from "@/Components/client/Confetti";
import Button from "@/Components/client/Button";

// Form
import GuessSuccessForm from "@/Components/client/forms/Public/GuessSuccessForm";

// Paths
import { paths } from "@/paths";

// ==========================================================================================

// Interface
interface Params {
  id: string;
}

// Interface
interface SuccessProps {
  params: Params;
}

const Success: React.FC<SuccessProps> = ({ params }) => {
  const session_id = params.id as string;

  return (
    <div>
      <ConfettiComponent />
      <Container className="p-0 h-full w-full ">
        <div className="w-full h-screen flex justify-center items-center flex-col">
          <h1
            className={`
            text-6xl font-200 mb-4
            dark:text-white
            `}
          >
            Congratulations, Detective!
          </h1>

          <p
            className={`
            text-2xl font-250 w-2/5 text-center leading-12 mb-28 opacity-80
            dark:text-white 
            `}
          >
            You've cracked the case! Your sharp mind and clever questions have
            unveiled the mystery. Well done!
          </p>

          <div
            className={`
            p-12 mx-20 bg-white h-max w-1/4 overflow-hidden rounded-3xl shadow-[0_-4px_2px_-2px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2)]
            dark:bg-cardDark
            `}
          >
            <h2
              className={`
              text-center text-3xl font-light mb-20
              dark:text-white
              `}
            >
              Claim Your Reward!
            </h2>

            <GuessSuccessForm session_id={session_id} />
          </div>
        </div>

        <Button
          text="Pass"
          type="button"
          variant="contained"
          href={paths.homePage()}
          className="text-2xl font-light py-2 px-12 w-max absolute bottom-[50px] right-[50px] rounded-lg"
        />
      </Container>
    </div>
  );
};

export default Success;
