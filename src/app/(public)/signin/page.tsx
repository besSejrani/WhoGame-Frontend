// UI
import Container from "@/Components/ui/Container";

// Form
import SigninForm from "@/Components/client/forms/Public/SigninForm";

// Styles
import { root, title, paragraph, card } from "./index.css";

// ==========================================================================================

const Success = () => {
  return (
    <div>
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
          <div className={card}>
            <h1 className={title}>Sign in</h1>
            <p className={paragraph}>Sign in with your email and password</p>

            <SigninForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Success;
