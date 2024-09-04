// React
import React from "react";

// UI
import Container from "@/Components/ui/Container";

// Icons
import { Trophy } from "lucide-react";

// ====================================================================================

const Rewards: React.FC = () => {
  return (
    <Container className="flex justify-center items-center py-40">
      <section className="w-[80%] grid grid-cols-[50%_50%] items-center">
        <div className="py-[4.5rem] h-full w-full flex items-center justify-center">
          <img src="/trophy.webp" alt="Trophy" draggable={false} />
        </div>

        <div
          className={`
          p-12 bg-white h-max overflow-hidden rounded-3xl shadow-[0_-4px_2px_-2px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2)]
          dark:bg-cardDark
          `}
        >
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h2
              className={`
              text-5xl font-300 w-full mb-12 text-center
              dark:text-white
              `}
            >
              Claim Your Reward!
            </h2>

            <div className="w-full px-12">
              <p
                className={`
                flex items-center mb-4 text-lg
                dark:text-white
                `}
              >
                <Trophy
                  size={90}
                  strokeWidth={1.25}
                  absoluteStrokeWidth={true}
                  className={`
                  mr-8 flex-shrink-0
                  
                  `}
                />
                <span
                  className={`
                   opacity-80
                  `}
                >
                  Prizes will be awarded to the users with the highest scores,
                  the second-highest score, and the most creative question.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Rewards;
