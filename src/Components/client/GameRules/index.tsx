// React
import React from "react";

// UI
import Container from "@/Components/ui/Container";

// Components
import Rules from "@Components/client/GameRules/Rules";

// ====================================================================================

const GameRules: React.FC = () => {
  return (
    <Container className="flex justify-center items-center py-60">
      <section className="w-[80%] grid grid-cols-[50%_50%] items-center">
        <div
          className={`
          p-12 bg-white h-max overflow-hidden rounded-3xl shadow-[0_-4px_2px_-2px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2)]
          dark:bg-cardDark
          `}
        >
          <Rules />
        </div>

        <div className="py-[4.5rem] h-full w-full flex items-center justify-center  bg-cover bg-bottom bg-no-repeat">
          <img
            src="/chess.webp"
            alt="Chess image symbolizing the game rules"
            draggable={false}
          />
        </div>
      </section>
    </Container>
  );
};

export default GameRules;
