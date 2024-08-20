// React
import React from "react";

// Styles
import { title, rule } from "@/Components/client/Rules/index.css";

// Icons
import {
  Trophy,
  MessageSquareText,
  Clover,
  Languages,
  TimerOff,
} from "lucide-react";

// ==========================================================================================

const Rules = () => {
  return (
    <>
      <h2 className={title}>Game Rules</h2>

      <div>
        <p className={rule}>
          <Trophy
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Objective: Guess the correct person by asking questions.
        </p>

        <p className={rule}>
          <MessageSquareText
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Questions: You can ask unlimited questions to gather clues.
        </p>

        <p className={rule}>
          <Clover
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Guesses: Make as many guesses as you want.
        </p>

        <p className={rule}>
          <Languages
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          Language: Questions must be written in English.
        </p>

        <p className={rule}>
          <TimerOff
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            style={{ margin: "0rem 1rem 0rem 0rem" }}
          />
          No Time Limit: Take your time to find the right person.
        </p>
      </div>
    </>
  );
};

export default Rules;
