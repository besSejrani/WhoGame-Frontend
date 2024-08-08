"use client";

import React, { useState } from "react";

// Components
import Card from "@/Components/client/Card";
import Sidebar from "@/Components/pages/game/Sidebar";

// Styles
import { root, grid } from "./index.css";

// ==========================================================================================

type Person = {
  name: string;
  photo_url: string;
};

// Define a type for the component props
interface GameIdProps {
  session_id: string;
  data: Person[];
}

const GameId: React.FC<GameIdProps> = ({ session_id, data }) => {
  // ===========================
  // State
  // ===========================
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  // ===========================
  // Events
  // ===========================
  const toggleCardSelection = (name: string) => {
    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = new Set(prevSelectedCards);
      if (newSelectedCards.has(name)) {
        newSelectedCards.delete(name);
      } else {
        newSelectedCards.add(name);
      }
      return newSelectedCards;
    });
  };

  return (
    <div className={root}>
      <div className={grid}>
        {data.map((person) => {
          return (
            <Card
              imageUrl={person.photo_url}
              name={person.name}
              key={person.name}
              isSelected={selectedCards.has(person.name)}
              session_id={session_id}
              onClick={() => toggleCardSelection(person.name)}
            />
          );
        })}
      </div>
      <Sidebar />
    </div>
  );
};

export default GameId;
