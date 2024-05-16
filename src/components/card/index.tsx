import React from "react";

// ==========================================================================================

interface ICard {
  name: string;
  imageUrl: string;
}

const Card: React.FC<ICard> = ({ imageUrl, name }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.2) 0px 1px 1px 0px, rgba(0, 0, 0, 0.3) 0px 1px 3px 0px`,
        borderRadius: "0.5rem",
      }}
    >
      <img
        src={imageUrl}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
        alt={name}
      />

      <p style={{ fontSize: "1.5rem", padding: "1rem" }}>{name}</p>
    </div>
  );
};

export default Card;
