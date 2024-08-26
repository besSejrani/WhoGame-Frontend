import React from "react";

// Styles
import {
  answerCard,
  chatSection,
  container,
  heading,
  hr,
  infoHeading,
  infoSection,
  messageContainer,
  questionCard,
} from "./index.css";

// ========================================================================================================

type Message = {
  question: string;
  answer: string;
};

type Game = {
  person: string;
  attempts: number;
  duration_seconds: number;
  score: number;
};

interface ChatHistoryProps {
  messages: Message[];
  game: Game;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, game }) => {
  return (
    <div className={container}>
      <div className={chatSection}>
        <h1 className={heading}>Chat history</h1>
        <div
          style={{
            margin: "5rem 0rem 2rem 0rem",
            height: "50rem",
            overflowY: "scroll",
          }}
        >
          {messages.map((message, index) => (
            <div key={index} className={messageContainer}>
              <div className={answerCard}>
                <p>{message.answer}</p>
              </div>
              <div className={questionCard}>
                <p>{message.question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={infoSection}>
        <h2 className={infoHeading}>Game Infos</h2>
        <p style={{ fontSize: "1.6rem", margin: "0rem 0rem 0.5rem 0rem" }}>
          Person: {game?.person}
        </p>
        <p style={{ fontSize: "1.6rem", margin: "0rem 0rem 0.5rem 0rem" }}>
          Attempts: {game?.attempts}
        </p>
        <p style={{ fontSize: "1.6rem", margin: "0rem 0rem 0.5rem 0rem" }}>
          Duration: {game?.duration_seconds} seconds
        </p>

        <hr className={hr} />
        <p style={{ fontSize: "1.6rem", margin: "0rem 0rem 0.5rem 0rem" }}>
          Score: {game?.score}
        </p>
      </div>
    </div>
  );
};

export default ChatHistory;
