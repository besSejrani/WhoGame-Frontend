import React from "react";

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
    <div className="w-full grid grid-cols-[7fr_3fr] gap-16">
      {
        // ===============================================
        // Chat History
        // ===============================================
      }
      <div
        className={`
        w-full rounded-3xl p-12 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.2),0_2px_6px_0_rgba(0,0,0,0.3)]
        dark:bg-cardDark
        `}
      >
        <h1 className="text-5xl font-light mb-4">Chat history</h1>
        <div
          className={`
          mt-20 mb-8 h-[50rem] overflow-y-scroll
          dark:bg-cardDark
          `}
        >
          {messages.map((message, index) => (
            <div key={index} className="mb-4 flex flex-col">
              <div
                className={`
                bg-[#e6f2ff] p-3 rounded-lg mb-2 max-w-[70%] self-end text-[1.8rem]
                dark:text-dark
                `}
              >
                <p>{message.question}</p>
              </div>

              <div
                className={`
                bg-[#e0e0e0] p-3 rounded-lg mb-2 max-w-[70%] self-start text-[1.8rem]
                dark:text-dark
                `}
              >
                <p>{message.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {
        // ===============================================
        // Game Infos
        // ===============================================
      }
      <div
        className={`
        w-full rounded-3xl p-12 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.2),0_2px_6px_0_rgba(0,0,0,0.3)]
        dark:bg-cardDark
        `}
      >
        <h2 className="text-5xl font-light mb-8">Game Infos</h2>
        <p className="text-[1.6rem] mb-2">Person: {game?.person}</p>
        <p className="text-[1.6rem] mb-2">Attempts: {game?.attempts}</p>
        <p className="text-[1.6rem] mb-2">
          Duration: {game?.duration_seconds} seconds
        </p>

        <hr className="my-2 border-none border-t border-[#ccc]" />
        <p className="text-[1.6rem] mb-2">Score: {game?.score}</p>
      </div>
    </div>
  );
};

export default ChatHistory;
