// React
import React from "react";

// DynamoDB
import { getRow } from "@AWS/DynamoDB";

// Components
import ChatHistory from "@/Components/client/ChatHistory";

// ========================================================================================================

type Params = {
  id: string;
};

interface ParamsProps {
  params: Params;
}

type FinishedGame = {
  finished_at: string;
  chat_history: string;
  attempts: number;
  score: number;
  duration_seconds: number;
  session_id: string;
  person: string;
};

type Message = {
  question: string;
  answer: string;
};

const LeaderboardWinner: React.FC<ParamsProps> = async ({ params }) => {
  const id = params.id as string;

  // ===========================
  // Data
  // ===========================
  const data = (await getRow({
    tableName: "finished_games",
    key: { session_id: id },
  })) as FinishedGame;

  const parseChatHistory = (chatHistory: string): Message[] => {
    if (!chatHistory) return [];

    return chatHistory
      .split("Q:")
      .filter(Boolean)
      .map((message) => {
        const [question, answer] = message
          .split("A:")
          .map((part) => part?.trim() || "");
        return { question, answer };
      })
      .filter(
        (entry): entry is Message =>
          entry.question !== "" && entry.answer !== undefined
      );
  };

  const chatMessages = parseChatHistory(data.chat_history);

  return <ChatHistory messages={chatMessages} game={data} />;
};

export default LeaderboardWinner;
