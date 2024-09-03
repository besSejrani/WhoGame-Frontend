import React from "react";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Paths
import { paths } from "@/paths";

// ====================================================================================

const Hero: React.FC = () => {
  return (
    <Container>
      <main className="grid grid-cols-2 items-center py-96 pb-32">
        <div>
          <h1
            className={`
            text-7xl mb-10 font-350 leading-36
            dark:text-white
            `}
          >
            Who Is RAG ?
            <br />
            The Gen AI Challenge
          </h1>
          <p
            className={`
            w-[80%] text-2xl  mb-10 opacity-80
            dark:text-white dark:opacity-65
            `}
          >
            Dive into the mistery! Can you figure out who's who?
            <br />
            Ask smart questions, use your detectives skills to narrow down the
            options, and make your guess.
          </p>

          <div className="mt-12">
            <Button
              href={paths.startGamePage()}
              variant="contained"
              text="Let's Start"
              type="button"
              className="text-3xl font-light py-4 px-10 mr-4 rounded-full"
            />
          </div>
        </div>

        <img
          src="/images/hero/hero.png"
          alt="Hero image"
          className="justify-self-center"
          draggable={false}
        />
      </main>
    </Container>
  );
};

export default Hero;
