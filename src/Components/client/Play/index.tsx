"use client";

import React, { useState } from "react";

// Components
import Card from "@/Components/client/Card";
import Sidebar from "@Components/client/Sidebar";

// Styles
import { root, grid } from "./index.css";

// ==========================================================================================

type Person = {
  name: string;
  photo_url: string;
};

interface GameIdProps {
  session_id: string;
  data: Person[];
}

const GameId: React.FC<GameIdProps> = ({ session_id, data }) => {
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

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

  const FLIP_DELAY_INCREMENT = 100; // ms between each card flip

  return (
    <div className={root}>
      <div className={grid}>
        {data.map((person, index) => (
          <Card
            imageUrl={person.photo_url}
            name={person.name}
            key={person.name}
            isSelected={selectedCards.has(person.name)}
            session_id={session_id}
            onClick={() => toggleCardSelection(person.name)}
            flipDelay={(index + 1) * FLIP_DELAY_INCREMENT}
          />
        ))}
      </div>
      <Sidebar session_id={session_id} />
    </div>
  );
};

export default GameId;
