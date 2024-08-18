// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Styles
import { hero, title, paragraph } from "./index.css";

// ====================================================================================

const Hero = () => {
  return (
    <Container>
      <main className={hero}>
        <div>
          <h1 className={title}>
            Who Is RAG ? <br />
            The Gen AI Challenge
          </h1>
          <p className={paragraph}>
            Dive into the mistery! Can you figure out who's who? Ask smart
            questions, use your detectives skills to narrow down the options,
            and make your guess
          </p>

          <div style={{ margin: "2rem 0rem" }}>
            <Button
              href="/start-game"
              variant="contained"
              text="Let's Start"
              type="button"
              styleOverrides={{
                padding: "0.7rem 2rem",
                borderRadius: 30,
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <img src="/images/hero/hero.png" alt="Hero image" />
      </main>
    </Container>
  );
};

export default Hero;
