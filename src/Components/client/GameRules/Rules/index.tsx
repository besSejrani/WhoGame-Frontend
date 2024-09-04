// React
import React from "react";

// Icons
import {
  Trophy,
  MessageSquareText,
  Clover,
  Languages,
  ArrowUp10,
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
            <span className="font-500">Objective</span>: Find out who we’re
            looking for by asking questions.
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
            <span className="font-500">Questions</span>: Ask yes or no questions
            in order to narrow down the person.
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
            <span className="font-500">Guesses</span>: Have a guess when you
            think you know who it is.
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
            <span className="font-500">Language</span>: Ask your questions in
            Englisch.
          </span>
        </p>

        <p className="flex items-center mb-4 text-lg">
          <ArrowUp10
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
            <span className="font-500">Score</span>: Be quick but careful. Time,
            questions and guesses form the score.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Rules;
