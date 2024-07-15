// Next
import Link from "next/link";

// Components
import Button from "@/Components/client/Button";

// Styles
import { hero, title, paragraph } from "./index.css";

// ====================================================================================

const Hero = () => {
  return (
    <main className={hero}>
      <div>
        <h1 className={title}>Who Is It ? The AI Challenge</h1>
        <p className={paragraph}>
          Dive into the mistery! Can you figure out who's who? Ask smart
          questions, use your detectives skills to narrow down the options, and
          make your guess
        </p>

        <div style={{ margin: "2rem 0rem" }}>
          <Button
            href="/game"
            variant="contained"
            text="Let's Start"
            type="button"
            styleOverrides={{ padding: "0.7rem 1rem" }}
          />
          <Button
            href="/leaderboard"
            variant="outlined"
            text="Leaderboard"
            type="button"
            styleOverrides={{ padding: "0.7rem 1rem" }}
          />
        </div>
      </div>

      <img src="/images/hero/hero.png" alt="Hero image" />
    </main>
  );
};

export default Hero;
