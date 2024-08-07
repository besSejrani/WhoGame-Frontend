import React, { useRef, useState, useEffect } from "react";
import Button from "@/Components/client/Button";
import Timer from "@/Components/pages/game/Timer";
import {
  sidebar,
  sidebarContent,
  chatGroup,
  chatUser,
  chatBot,
  sticky,
  chatContainer,
  formContainer,
  loadingSpinner,
} from "./index.css";
import { useGameStore } from "@/Store/game";
import { prodAskQuestions } from "@Queries/index";

type ChatEntry = {
  id: number;
  userPrompt: string;
  botResponse: string | null;
};

const Sidebar = () => {
  const { counter, sessionId } = useGameStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState<ChatEntry[]>([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const question = textareaRef.current?.value;
    if (!question || !sessionId || isSending) return;

    const newEntry: ChatEntry = {
      id: Date.now(),
      userPrompt: question,
      botResponse: null,
    };

    // Add user's message immediately
    setChat((prev) => [...prev, newEntry]);

    // Clear input
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }

    // Set isSending to true after adding the user's message
    setIsSending(true);

    try {
      const answer = await prodAskQuestions({ sessionId, question });
      setChat((prev) =>
        prev.map((entry) =>
          entry.id === newEntry.id ? { ...entry, botResponse: answer } : entry
        )
      );
    } catch (error) {
      console.log("error", error);
      setChat((prev) =>
        prev.map((entry) =>
          entry.id === newEntry.id
            ? { ...entry, botResponse: "An error occurred. Please try again." }
            : entry
        )
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className={sticky}>
      <aside className={sidebar}>
        <div className={sidebarContent}>
          <div ref={chatContainerRef} className={chatContainer}>
            {chat.map((entry) => (
              <React.Fragment key={entry.id}>
                <div className={chatGroup}>
                  <div className={chatUser}>{entry.userPrompt}</div>
                </div>
                {entry.botResponse === null ? (
                  <div className={loadingSpinner}></div>
                ) : (
                  <div className={chatGroup}>
                    <div className={chatBot}>{entry.botResponse}</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={formContainer}>
            <form
              style={{ display: "flex", width: "100%" }}
              onSubmit={handleSubmit}
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
                  padding: "0rem",
                  margin: "0rem",
                  fontSize: "1.6rem",
                  border: "none",
                  borderRadius: "0rem",
                  cursor: "pointer",
                }}
              />
            </form>
          </div>
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
