// UI
import Container from "@/Components/ui/Container";

// Components
import Rules from "@Components/client/Rules";

// Styles
import { section, visual, rules } from "./index.css";

// ====================================================================================

const GameRules = () => {
  return (
    <Container
      styleOverrides={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "7rem 0rem",
        borderRadius: "2rem",
      }}
    >
      <section className={section}>
        <div className={visual}>
          <img
            src="/chess.webp"
            alt="Chess image symbolizing the game rules"
            draggable={false}
          />
        </div>

        <div className={rules}>
          <Rules />
        </div>
      </section>
    </Container>
  );
};

export default GameRules;
