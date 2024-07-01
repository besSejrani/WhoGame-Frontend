// Next
import Image from "next/image";

// UI
import Container from "@/Components/ui/Container";

// Styles
import { root, title } from "./index.css";

// ====================================================================================

const Leaderboard = () => {
  return (
    <Container>
      <main className={root}>
        <h2 className={title}>Who Is It's architecture</h2>

        <Image
          src="/diagrams/infrastructure.png"
          alt="infrastructure"
          width={1500}
          height={900}
        />
      </main>
    </Container>
  );
};

export default Leaderboard;
