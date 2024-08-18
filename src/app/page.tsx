// UI
import Container from "@/Components/ui/Container";

// Components
import Hero from "@/Components/client/Hero";
import GameRules from "@/Components/client/GameRules";
import Rewards from "@/Components/client/Rewards";

// ====================================================================================

const Home = () => {
  return (
    <>
      <Hero />

      <Container
        styleOverrides={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "2rem auto",
        }}
      >
        <hr style={{ opacity: "0.3" }} />
      </Container>

      <GameRules />

      <Container
        styleOverrides={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "2rem auto",
        }}
      >
        <hr style={{ opacity: "0.3" }} />
      </Container>

      <Rewards />
    </>
  );
};

export default Home;
