import React from "react";

const Home = () => {
  return (
    <div>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          alignItems: "center",
          padding: "10rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "4rem", fontWeight: 500 }}>
            Guess Who ? The AI Challenge
          </h1>
          <p style={{ width: "80%", fontSize: "1.4rem", margin: "1rem 0rem" }}>
            Dive into the mistery! Can you figure out who's who? Ask smart
            questions, use your detectives skills to narrow down the options,
            and make your guess
          </p>

          <button
            style={{
              backgroundColor: "#FFB500",
              color: "white",
              fontSize: "1.6rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              margin: "0rem 1rem 0rem 0rem",
            }}
          >
            Let's Start
          </button>

          <button
            style={{
              backgroundColor: "white",
              color: "#FFB500",
              border: "2px solid #FFB500",
              fontSize: "1.6rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
            }}
          >
            Leaderboard
          </button>
        </div>
        <img src="/images/hero/hero.png" alt="Hero image" />
      </main>

      <section
        style={{
          padding: "5rem 10rem",
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
          Game Rules
        </h2>
        <p
          style={{
            textAlign: "center",
            margin: "0rem 0rem 2rem 0rem",
            width: "70%",
            fontSize: "1.4rem",
          }}
        >
          In this challenging and fun guessing game, you must identify the
          correct person from a series of images. You'll be given a set number
          of attempts and a time limit for each round. Use your questions wisely
          to gather clues and narrow down the possibilities.
        </p>
        <p
          style={{
            textAlign: "center",
            width: "70%",
            fontSize: "1.4rem",
          }}
        >
          Each correct guess will earn you points, but remember, the clock is
          ticking! Make your decisions carefully to maximize your score and
          advance through the levels. Ready to put your detective skills to the
          test?
        </p>
      </section>

      <section style={{ padding: "10rem" }}>
        <h2
          style={{
            fontSize: "4rem",
            width: "100%",
            margin: "0rem 0rem 2rem 0rem",
          }}
        >
          Hall of Fame
        </h2>
      </section>

      <section
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
          Claim Your Rewards!
        </h2>
        <p
          style={{
            textAlign: "center",
            width: "70%",
            fontSize: "1.4rem",
            margin: "0rem 0rem 7rem 0rem",
          }}
        >
          Join the game and earn a pair of free socks just for participating!
          Aim higher and make it to the top 5 on our leaderboard to snag even
          fancier prizes. Challenge yourself, climb the ranks, and claim your
          rewards!
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "2rem",
          }}
        >
          <img src="/images/products/beanie.png" alt="Beanie Product" />
          <img src="/images/products/socks.png" alt="Socks Product" />
          <img src="/images/products/hoodie.png" alt="Hoodie Product" />
        </div>
      </section>
    </div>
  );
};

export default Home;
