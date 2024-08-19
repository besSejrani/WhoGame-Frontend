// UI
import Container from "@/Components/ui/Container";

// Styles
import {
  section,
  title,
  visual,
  rules,
} from "@Components/client/Rewards/index.css";

// Icons
import {
  Trophy,
  MessageSquareText,
  Clover,
  Languages,
  TimerOff,
} from "lucide-react";

// ====================================================================================

const Rewards = () => {
  return (
    <Container
      styleOverrides={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "7rem 0rem 10rem 0rem",
        borderRadius: "2rem",
      }}
    >
      <section className={section}>
        <div className={rules}>
          <h2 className={title}>Claim Your Reward!</h2>

          <div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0rem 0rem 0.5rem 0rem",
              }}
            >
              <Trophy
                size={40}
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                style={{ margin: "0rem 1rem 0rem 0rem" }}
              />
              A prize will be awarded to the player with the fastest time
            </p>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0rem 0rem 0.5rem 0rem",
              }}
            >
              <Trophy
                size={40}
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                style={{ margin: "0rem 1rem 0rem 0rem" }}
              />
              A prize will be awarded to the player with the most creative
              questions
            </p>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0rem 0rem 0.5rem 0rem",
              }}
            >
              <Trophy
                size={40}
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                style={{ margin: "0rem 1rem 0rem 0rem" }}
              />
              A prize will be awarded to the player with the fewest guesses
            </p>
          </div>
        </div>
        <div className={visual}>
          <img src="/trophy.webp" alt="" draggable={false} />
        </div>
      </section>
    </Container>
  );
};

export default Rewards;
