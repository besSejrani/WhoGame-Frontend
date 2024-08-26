// React
import React, { useRef, useState, useEffect } from "react";

// Components
import Button from "@/Components/client/Button";
import GameInfos from "@Components/client/Sidebar/GameInfos";

// Styles
import {
  sidebar,
  sidebarContent,
  chatGroup,
  chatUser,
  chatBot,
  sticky,
  chatContainer,
  formContainer,
  typingDot,
  typingIndicator,
} from "./index.css";

// State
import { useGameStore } from "@/Store/game";

// Queries
import { prodAskQuestions } from "@Queries/index";

// Cookies
import Cookies from "js-cookie";

// ==========================================================================================

// Interface
type ChatEntry = {
  id: number;
  userPrompt: string | null;
  botResponse: string | null;
  isTyping: boolean;
};

const Sidebar = ({ session_id }: { session_id: string }) => {
  const token = Cookies.get("token")!;

  let { counter, sessionId } = useGameStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState<ChatEntry[]>([]);
  const [isSending, setIsSending] = useState(false);

  if (sessionId === null) {
    sessionId = session_id;
  }

  // ==============================
  //  Events
  // ==============================
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  useEffect(() => {
    const initialMessages = [
      { id: Date.now(), userPrompt: null, botResponse: null, isTyping: true },
      {
        id: Date.now() + 1,
        userPrompt: null,
        botResponse: null,
        isTyping: true,
      },
      {
        id: Date.now() + 2,
        userPrompt: null,
        botResponse: null,
        isTyping: true,
      },
      {
        id: Date.now() + 3,
        userPrompt: null,
        botResponse: null,
        isTyping: true,
      },
    ];
    setChat(initialMessages);

    const messages = [
      "Can you figure out who's who ?",
      "Ask smart questions, use your detective skills to narrow down the possibilities, and make your guess.",
      "Click on the user cards to eliminate suspects and narrow your options.",
      "Good Luck!",
    ];

    messages.forEach((message, index) => {
      setTimeout(() => {
        setChat((prev) =>
          prev.map((entry, i) =>
            i === index
              ? { ...entry, botResponse: message, isTyping: false }
              : entry
          )
        );
      }, (index + 1) * 1000);
    });
  }, []);

  // ==============================
  //  Form
  // ==============================
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const question = textareaRef.current?.value;
    if (!question || !sessionId || isSending) return;

    const newEntry: ChatEntry = {
      id: Date.now(),
      userPrompt: question,
      botResponse: null,
      isTyping: true,
    };

    setChat((prev) => [...prev, newEntry]);

    if (textareaRef.current) {
      textareaRef.current.value = "";
    }

    setIsSending(true);

    try {
      const answer = await prodAskQuestions({ sessionId, question, token });

      setChat((prev) =>
        prev.map((entry) =>
          entry.id === newEntry.id
            ? { ...entry, botResponse: answer, isTyping: false }
            : entry
        )
      );
    } catch (error) {
      console.log("error", error);
      setChat((prev) =>
        prev.map((entry) =>
          entry.id === newEntry.id
            ? {
                ...entry,
                botResponse: "An error occurred. Please try again.",
                isTyping: false,
              }
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
                {entry.userPrompt !== null && (
                  <div className={chatGroup}>
                    <div className={chatUser}>{entry.userPrompt}</div>
                  </div>
                )}
                {entry.isTyping ? (
                  <div className={typingIndicator}>
                    <span className={typingDot}></span>
                    <span className={typingDot}></span>
                    <span className={typingDot}></span>
                  </div>
                ) : (
                  entry.botResponse && (
                    <div className={chatGroup}>
                      <div className={chatBot}>{entry.botResponse}</div>
                    </div>
                  )
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
      <GameInfos counter={counter} sessionId={session_id} token={token} />
    </div>
  );
};

export default Sidebar;
