import React from "react";
import { Textarea } from "@/components/ui/textarea";
import Card from "@/components/card";

// ==========================================================================================

const Chat = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80% 20%",
        width: "100%",
        gridColumnGap: "1rem",
      }}
    >
      <div
        style={{
          margin: "6rem 0rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          width: "100%",
          height: "100vh",
          gridGap: "1rem",
        }}
      >
        <Card imageUrl="/images/users/sandra.webp" name="Sandra" />
        <Card imageUrl="/images/users/philippe.webp" name="Philippe" />
        <Card imageUrl="/images/users/lua.webp" name="Lua" />
        <Card imageUrl="/images/users/scarlet.webp" name="Scarlet" />
        <Card imageUrl="/images/users/dewey.webp" name="Dewey" />
        <Card imageUrl="/images/users/rose.webp" name="Rose" />
        <Card imageUrl="/images/users/tchad.webp" name="Tchad" />
        <Card imageUrl="/images/users/elisabeth.webp" name="Elisabeth" />
        <Card imageUrl="/images/users/ahmed.webp" name="Ahmed" />
        <Card imageUrl="/images/users/anna.webp" name="Anna" />
        <Card imageUrl="/images/users/mike.webp" name="Mike" />
        <Card imageUrl="/images/users/felicia.webp" name="Felicia" />
        <Card imageUrl="/images/users/pietro.webp" name="Pietro" />
        <Card imageUrl="/images/users/camila.webp" name="Camila" />
        <Card imageUrl="/images/users/blake.webp" name="Blake" />
        <Card imageUrl="/images/users/mia.webp" name="Mia" />
        <Card imageUrl="/images/users/chris.webp" name="Chris" />
        <Card imageUrl="/images/users/clara.webp" name="Clara" />
        <Card imageUrl="/images/users/kai.webp" name="Kai" />
        <Card imageUrl="/images/users/victoire.webp" name="Victoire" />
        <Card imageUrl="/images/users/ali.webp" name="Ali" />
        <Card imageUrl="/images/users/jimena.webp" name="Jimena" />
      </div>

      <div
        style={{
          position: "fixed",
          right: "0",
          height: "100vh",
          width: "19%",
          boxShadow: `      rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
          rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.3) 0px 2px 6px 0px`,
        }}
      >
        <div
          style={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "9fr 1fr",
          }}
        >
          <div style={{}}></div>

          <Textarea placeholder="Type your message here." />
        </div>
      </div>
    </div>
  );
};

export default Chat;
