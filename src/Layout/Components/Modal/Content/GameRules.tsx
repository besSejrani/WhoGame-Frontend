// Types
import type { FC } from "react";

// ========================================================================================================

const GameRulesModal = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 300,
          margin: "0rem 0rem 1rem 0rem",
        }}
      >
        Game Rules
      </h2>
      <p style={{ fontSize: "1.4rem", fontWeight: 300 }}>
        Lorem Ipsum, It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.{" "}
      </p>
    </div>
  );
};

export default GameRulesModal;

// ========================================================================================================
