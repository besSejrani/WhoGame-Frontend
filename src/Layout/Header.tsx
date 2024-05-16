import React from "react";

import Link from "next/link";

// ==========================================================================================

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        padding: "1rem 0rem",
        zIndex: 999,
        boxShadow: "0px 8px 10px -5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0rem 10rem",
        }}
      >
        <Link href="/">
          <img src="/logo.svg" alt="tecRacer logo" height={80} width={180} />
        </Link>

        <div style={{ display: "flex" }}>
          <Link href="/" style={{ margin: "0rem 1rem 0rem 0rem" }}>
            Home
          </Link>
          <Link href="/leaderboard" style={{ margin: "0rem 1rem 0rem 0rem" }}>
            Leaderboard
          </Link>
          <Link href="/chat">Chat</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
