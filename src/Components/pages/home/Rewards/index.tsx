// Styles
import { section, title, paragraph, grid } from "./index.css";

// ====================================================================================

const Rewards = () => {
  return (
    <section className={section}>
      <h2 className={title}>Claim Your Rewards!</h2>
      <p className={paragraph}>
        Join the game and earn a pair of free socks just for participating! Aim
        higher and make it to the top 5 on our leaderboard to snag even fancier
        prizes. Challenge yourself, climb the ranks, and claim your rewards!
      </p>
      <div className={grid}>
        <img src="/images/products/beanie.png" alt="Beanie Product" />
        <img src="/images/products/socks.png" alt="Socks Product" />
        <img src="/images/products/hoodie.png" alt="Hoodie Product" />
      </div>
    </section>
  );
};

export default Rewards;
