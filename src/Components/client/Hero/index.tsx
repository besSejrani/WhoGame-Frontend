// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Styles
import { hero, title, paragraph } from "@/Components/client/Hero/index.css";

// Paths
import { paths } from "@/paths";

// ====================================================================================

const Hero = () => {
  return (
    <Container>
      <main className={hero}>
        <div>
          <h1 className={title}>
            Who Is RAG ?
            <br />
            The Gen AI Challenge
          </h1>
          <p className={paragraph}>
            Dive into the mistery! Can you figure out who's who?
            <br />
            Ask smart questions, use your detectives skills to narrow down the
            options, and make your guess.
          </p>

          <div style={{ margin: "4rem 0rem" }}>
            <Button
              href={paths.startGamePage()}
              variant="contained"
              text="Let's Start"
              type="button"
              styleOverrides={{
                fontSize: "2.5rem",
                padding: "1.2rem 2.5rem",
                borderRadius: 30,
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <img
          src="/images/hero/hero.png"
          alt="Hero image"
          style={{ justifySelf: "center" }}
        />
      </main>
    </Container>
  );
};

export default Hero;
