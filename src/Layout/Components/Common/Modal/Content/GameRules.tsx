// Components
import Rules from "@Components/client/GameRules/Rules";

// ========================================================================================================

const GameRulesModal = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Rules />
    </div>
  );
};

export default GameRulesModal;
