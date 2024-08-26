import React from "react";

// DynamoDB
import { getRow } from "@AWS/DynamoDB";

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
  duration_seconds: number;
  session_id: string;
  person: string;
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

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Chat history</h1>
        <div>{data?.chat_history}</div>
      </div>
      <div>
        <h2>Infos</h2>
        <p>Person: {data?.person}</p>
        <p>Attempts: {data.attempts}</p>
        <p>Duration: {data.duration_seconds} seconds</p>
      </div>
    </div>
  );
};

export default LeaderboardWinner;
