import React from "react";

const Home = () => {
  return (
    <div>
      <main
        style={{
          padding: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            width: "100%",
            textAlign: "center",
            margin: "0rem 0rem 2rem 0rem",
          }}
        >
          Today’s Champion
        </h2>
        <p
          style={{
            textAlign: "center",
            width: "70%",
            fontSize: "1.4rem",
            margin: "0rem 0rem 7rem 0rem",
          }}
        >
          Ahmed takes the lead today with a whopping 888 points! Hailing from
          the UK, he has clinched first place with his impressive skills and
          strategic gameplay. Congratulations, Ahmed!
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "2rem",
          }}
        ></div>
      </main>
    </div>
  );
};

export default Home;
