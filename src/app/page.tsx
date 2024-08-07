// UI
import Container from "@/Components/ui/Container";

// Components
import Hero from "@/Components/pages/home/Hero";
import GameRules from "@/Components/pages/home/GameRules";
import Rewards from "@/Components/pages/home/Rewards";

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
