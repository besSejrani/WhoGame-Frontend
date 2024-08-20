import React from "react";

// ==========================================================================================

const StartGame = () => {
  return (
    <form>
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <label
            htmlFor="api-key"
            style={{
              position: "absolute",
              top: "-2rem",
              left: "1rem",
              fontSize: "1.2rem",
            }}
          >
            API Key
          </label>
          <input
            type="text"
            id="api-key"
            placeholder="Example: aknd3j29-d92d-4a7a-bf78-1f2b3c4a5d67
        "
            style={{
              fontSize: "1.2rem",
              height: "3rem",
              width: "30rem",
              border: "1px solid black",
              borderRight: "none",
              padding: "0rem 1rem",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            transition: "ease-in-out 0.2s",
            fontSize: "1.4rem",
            padding: "0.5rem 1rem",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            cursor: "pointer",
          }}
        >
          Validate
        </button>
      </div>
    </form>
  );
};

export default StartGame;
