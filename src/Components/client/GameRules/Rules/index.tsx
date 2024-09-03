// React
import React from "react";

// Icons
import {
  Trophy,
  MessageSquareText,
  Clover,
  Languages,
  TimerOff,
} from "lucide-react";

// ==========================================================================================

interface RulesProps {
  isDarkMode?: boolean;
}

const Rules: React.FC<RulesProps> = ({ isDarkMode = false }) => {
  const darkModeText = isDarkMode ? "dark:text-dark" : "dark:text-white";

  return (
    <div>
      <h2
        className={`
        text-5xl font-300 w-full mb-12 text-center
        ${darkModeText}
        `}
      >
        Game Rules
      </h2>

      <div>
        <p className="flex items-center mb-4 text-lg">
          <Trophy
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            className={`
              mr-4 flex-shrink-0
              ${darkModeText}
              `}
          />
          <span
            className={`
              ${darkModeText} opacity-80
              `}
          >
            Objective: Guess the correct person by asking questions.
          </span>
        </p>

        <p className="flex items-center mb-2 text-lg">
          <MessageSquareText
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            className={`
              mr-4 flex-shrink-0
              ${darkModeText}
              `}
          />
          <span
            className={`
              ${darkModeText} opacity-80
              `}
          >
            Questions: You can ask unlimited questions to gather clues.
          </span>
        </p>

        <p className="flex items-center mb-4 text-lg">
          <Clover
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            className={`
              mr-4 flex-shrink-0
              ${darkModeText}
              `}
          />
          <span
            className={`
              ${darkModeText} opacity-80
              `}
          >
            Guesses: Make as many guesses as you want.
          </span>
        </p>

        <p className="flex items-center mb-4 text-lg">
          <Languages
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            className={`
              mr-4 flex-shrink-0
              ${darkModeText}
              `}
          />
          <span
            className={`
              ${darkModeText} opacity-80
              `}
          >
            Language: Questions must be written in English.
          </span>
        </p>

        <p className="flex items-center mb-4 text-lg">
          <TimerOff
            size={40}
            strokeWidth={1.25}
            absoluteStrokeWidth={true}
            className={`
              mr-4 flex-shrink-0
              ${darkModeText}
              `}
          />
          <span
            className={`
              ${darkModeText} opacity-80
              `}
          >
            No Time Limit: Take your time to find the right person.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Rules;
