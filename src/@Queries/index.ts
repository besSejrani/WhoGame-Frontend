// Environment Variables
import ServerUri from "@/@Server/ServerUri";

// HTTP
import axios from "axios";

// ========================================================================================================

export const getGameSession = async ({ token }: { token: string }) => {
  const uri = ServerUri();
  const { data } = await axios.get(`${uri}/wii_dev_start_game`, {
    headers: {
      Authorization: token,
    },
  });

  return data?.session_id;
};

// ========================================================================================================

export const prodAskQuestions = async ({
  sessionId,
  question,
  token,
}: {
  sessionId: string;
  question: string;
  token: string;
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
        Authorization: token,
      },
    }
  );

  return data.answer;
};

// ========================================================================================================

export const guessPerson = async ({
  sessionId,
  name,
  token,
}: {
  sessionId: string;
  name: string;
  token: string;
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
        Authorization: token,
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
  token,
}: {
  sessionId: string;
  name: string;
  email: string;
  organization: string;
  token: string;
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
        Authorization: token,
      },
    }
  );

  return data.answer_correct;
};

// ========================================================================================================

export const quitGame = async ({
  sessionId,
  token,
}: {
  sessionId: string;
  token: string;
}) => {
  const uri = ServerUri();

  const data = await axios.post(
    `${uri}/wii_dev_quit_game`,
    JSON.stringify({
      session_id: sessionId,
    }),
    {
      headers: {
        "Content-Type": "text/plain",
        Authorization: token,
      },
    }
  );

  return data;
};

// ========================================================================================================

export const validateApiKey = async ({ api_key }: { api_key: string }) => {
  const uri = ServerUri();

  const data = await axios.post(
    `${uri}/wii_dev_jwt`,
    JSON.stringify({
      secret: api_key,
    }),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return data;
};

// ========================================================================================================
