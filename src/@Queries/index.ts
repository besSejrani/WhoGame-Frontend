// Environment Variables
import ServerUri from "@/@Server/ServerUri";

// HTTP
import axios from "axios";

// ========================================================================================================

export const getGameSession = async () => {
  const uri = ServerUri();
  const { data } = await axios.get(`${uri}/wii_dev_start_game`);

  return data?.session_id;
};

// ========================================================================================================

export const prodAskQuestions = async ({
  sessionId,
  question,
}: {
  sessionId: string;
  question: string;
}) => {
  const uri = ServerUri();
  const { data } = await axios.post(
    `${uri}/wii_prod_ask_question`,
    JSON.stringify(
      {
        session_id: sessionId,
        question,
      },
      null,
      4
    ),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return data.answer;
};

// ========================================================================================================

export const guessPerson = async ({
  sessionId,
  name,
}: {
  sessionId: string;
  name: string;
}) => {
  const uri = ServerUri();

  const { data } = await axios.post(
    `${uri}/wii_dev_guess_person`,
    JSON.stringify({
      person: name,
      session_id: sessionId,
    }),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return data.answer_correct;
};

// ========================================================================================================

export const enterRaffle = async ({
  sessionId,
  name,
  email,
  organization,
}: {
  sessionId: string;
  name: string;
  email: string;
  organization: string;
}) => {
  const uri = ServerUri();

  const { data } = await axios.post(
    `${uri}/wii_dev_enter_raffle`,
    JSON.stringify({
      sessionId,
      name,
      email,
      organization,
    }),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  console.log("data", data);

  return data.answer_correct;
};

// ========================================================================================================
