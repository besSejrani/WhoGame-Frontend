import React from "react";

// UI
import Container from "@/Components/ui/Container";

// Form
import SigninForm from "@/Components/client/forms/Public/SigninForm";

// ==========================================================================================

const Success: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="w-full h-screen flex justify-center items-center flex-col">
          <div
            className={`
            p-12 mx-20 bg-white h-max w-1/4 overflow-hidden rounded-3xl shadow-[0_-4px_2px_-2px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2)]
            dark:bg-cardDark
            `}
          >
            <h1
              className={`
              text-center text-4xl font-200 mb-4
              dark:text-white
              `}
            >
              Sign in
            </h1>
            <p
              className={`
              text-center text-lg font-300 opacity-80 w-full leading-8 my-8
              dark:text-white
              `}
            >
              Sign in with your email and password
            </p>

            <SigninForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Success;
