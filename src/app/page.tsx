// UI
import Container from "@/Components/ui/Container";

// Components
import Hero from "@/Components/client/Hero";
import GameRules from "@/Components/client/GameRules";
import Rewards from "@/Components/client/Rewards";

// ====================================================================================

const Home = () => {
  return (
    <Container>
      <Hero />
      <GameRules />
      <Rewards />
    </Container>
  );
};

export default Home;
