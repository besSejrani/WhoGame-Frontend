// React
import React, { useRef, useState, useEffect } from "react";

// Components
import Button from "@/Components/client/Button";
import GameInfos from "@Components/client/Sidebar/GameInfos";

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

const Sidebar: React.FC<{ session_id: string }> = ({ session_id }) => {
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
    <div className="sticky top-16 my-16 h-[calc(100vh-8rem)]">
      <aside className="h-[45rem] w-full rounded-2xl overflow-hidden shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.2),0_2px_6px_0_rgba(0,0,0,0.3)]">
        <div className="h-full flex flex-col">
          {
            // ===============================================
            // Messages
            // ===============================================
          }
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-white"
          >
            {chat.map((entry) => (
              <React.Fragment key={entry.id}>
                {entry.userPrompt !== null && (
                  <div className="flex flex-col gap-2">
                    <div className="self-end text-base bg-[#e0f7fa] p-3 rounded-lg max-w-[60%] break-words text-dark">
                      {entry.userPrompt}
                    </div>
                  </div>
                )}
                {entry.isTyping ? (
                  <div className="flex items-center gap-1 self-start p-3 rounded-lg bg-[#e0e0e0]">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-[blink_1.4s_infinite]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-[blink_1.4s_0.2s_infinite]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-[blink_1.4s_0.4s_infinite]"></span>
                  </div>
                ) : (
                  entry.botResponse && (
                    <div className="flex flex-col gap-2">
                      <div className="self-start text-base bg-[#e0e0e0] p-3 rounded-lg max-w-[60%] break-words text-dark">
                        {entry.botResponse}
                      </div>
                    </div>
                  )
                )}
              </React.Fragment>
            ))}
          </div>

          {
            // ===============================================
            // Form
            // ===============================================
          }
          <div className="border-t border-gray-300">
            <form className="flex w-full" onSubmit={handleSubmit}>
              <textarea
                ref={textareaRef}
                placeholder="Type your message here."
                onKeyDown={handleKeyDown}
                className="w-3/4 p-4 text-sm border-none focus:outline-none resize-none bg-white text-dark"
              />

              <Button
                text="Send"
                type="submit"
                variant="contained"
                disabled={isSending}
                className="w-1/4 text-lg font-200"
              />
            </form>
          </div>
        </div>
      </aside>

      {
        // ===============================================
        // Game Infos
        // ===============================================
      }
      <GameInfos counter={counter} sessionId={session_id} token={token} />
    </div>
  );
};

export default Sidebar;
