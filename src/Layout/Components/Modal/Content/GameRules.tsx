// Styles
import { title } from "@/Components/client/GameRules/index.css";

// Icons
import {
  Trophy,
  MessageSquareText,
  Clover,
  Languages,
  TimerOff,
} from "lucide-react";

// Types
import type { FC } from "react";

// ========================================================================================================

const GameRulesModal = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
        className={title}
      >
        Game Rules
      </h2>

      <div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0rem 0rem 0.2rem 0rem",
          }}
        >
          <Trophy
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Objective: Guess the correct person by asking questions.
        </p>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0rem 0rem 0.2rem 0rem",
          }}
        >
          <MessageSquareText
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Questions: You can ask unlimited questions to gather clues.
        </p>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0rem 0rem 0.2rem 0rem",
          }}
        >
          <Clover
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Guesses: Make as many guesses as you want.
        </p>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0rem 0rem 0.2rem 0rem",
          }}
        >
          <Languages
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Language: Questions must be written in English.
        </p>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0rem 0rem 0.2rem 0rem",
          }}
        >
          <TimerOff
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          No Time Limit: Take your time to find the right person.
        </p>
      </div>
    </div>
  );
};

export default GameRulesModal;

// ========================================================================================================
