// Styles
import { section, title, paragraph } from "./index.css";

// ====================================================================================

const GameRules = () => {
  return (
    <section className={section}>
      <h2 className={title}>Game Rules</h2>
      <p className={paragraph}>
        In this challenging and fun guessing game, you must identify the correct
        person from a series of images. You'll be given a set number of attempts
        and a time limit for each round. Use your questions wisely to gather
        clues and narrow down the possibilities.
      </p>
      <p className={paragraph}>
        Each correct guess will earn you points, but remember, the clock is
        ticking! Make your decisions carefully to maximize your score and
        advance through the levels. Ready to put your detective skills to the
        test?
      </p>
    </section>
  );
};

export default GameRules;
