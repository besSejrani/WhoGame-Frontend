import React, { useRef, useState, useEffect } from "react";

// Components
import Button from "@/Components/client/Button";
import Timer from "@/Components/pages/game/Timer";

// Styles
import {
  sidebar,
  sidebarContent,
  chatGroup,
  chatUser,
  chatBot,
  sticky,
} from "./index.css";

// Store
import { useGameStore } from "@/Store/game";

// HTTPS
import axios from "axios";

// Environment Variables
import ServerUri from "@/@Server/ServerUri";

// ==========================================================================================

const Sidebar = () => {
  const uri = ServerUri();
  const { counter, sessionId } = useGameStore();

  // ===========================
  // Refs
  // ===========================
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // ===========================
  // State
  // ===========================
  const [chat, setChat] = useState<{ question: string; answer: string }[]>([]);
  const [isSending, setIsSending] = useState(false);

  console.log("session_id", sessionId);

  // ===========================
  // Effects
  // ===========================
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // ===========================
  // Events
  // ===========================
  const askQuestion = async () => {
    const question = textareaRef.current?.value;
    if (!question) return;

    setIsSending(true);

    try {
      console.log(
        "bla",
        JSON.stringify(
          {
            session_id: sessionId,
            question,
          },
          null,
          4
        )
      );

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

      console.log("data", data);
      console.log(
        "stirngify",
        JSON.stringify({
          session_id: sessionId,
          question,
        })
      );

      setChat((prevChat) => [...prevChat, { question, answer: data?.answer }]);
      if (textareaRef.current) {
        textareaRef.current.value = "";
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsSending(false);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSending) {
      askQuestion();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isSending) {
        askQuestion();
      }
    }
  };

  return (
    <div className={sticky}>
      <aside className={sidebar}>
        <div className={sidebarContent}>
          {chat.map((entry, index) => (
            <div key={index} className={chatGroup}>
              <div className={chatUser}>{entry.question}</div>
              <div className={chatBot}>{entry.answer}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div style={{ height: "100%" }}>
          <form
            style={{ display: "flex", width: "100%", height: "100%" }}
            onSubmit={submitHandler}
          >
            <textarea
              ref={textareaRef}
              placeholder="Type your message here."
              onKeyDown={handleKeyDown}
              style={{
                width: "75%",
                padding: "1rem",
                border: "none",
                borderTop: "1px solid",
                borderColor: "rgba(0,0,0,0.3)",
              }}
            />
            <Button
              text="Send"
              type="submit"
              variant="contained"
              disabled={isSending}
              styleOverrides={{
                width: "25%",
                padding: "0rem 0rem",
                margin: "0rem 0rem",
                fontSize: "1.6rem",
                border: "none",
                borderRadius: "0rem 0rem 0rem 0rem",
                cursor: "pointer",
              }}
            />
          </form>
        </div>
      </aside>

      <div
        style={{
          borderRadius: "1rem",
          padding: "1rem",
          margin: "2rem 0rem 0rem 0rem",
          boxShadow: `
        rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
        rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
        rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
      `,
        }}
      >
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: 400,
            margin: "0rem 0rem 1rem 0rem",
          }}
        >
          Infos
        </h2>

        <Timer />

        <p>
          <b>Attempts:</b>
          {counter}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
