// UI
import Container from "@/Components/ui/Container";

// Styles
import { paragraph, root, title } from "./index.css";

// ====================================================================================

const Leaderboard = () => {
  return (
    <Container>
      <main className={root}>
        <h2 className={title}>Today’s Champion</h2>
        <p className={paragraph}>
          Ahmed takes the lead today with a whopping 888 points! Hailing from
          the UK, he has clinched first place with his impressive skills and
          strategic gameplay. Congratulations, Ahmed!
        </p>
      </main>
    </Container>
  );
};

export default Leaderboard;
