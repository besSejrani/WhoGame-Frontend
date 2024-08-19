// UI
import Button from "@/Components/client/Button";

// Types
import type { FC } from "react";

// ========================================================================================================

interface IModalDelete {
  text: string;
  title: string;
  closeDialog: () => void;
  onConfirm: () => void;
}

const ModalDeleteContent: FC<IModalDelete> = ({
  closeDialog,
  text,
  title,
  onConfirm,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 300,
          margin: "0rem 0rem 1rem 0rem",
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: "1.4rem", fontWeight: 300 }}>{text}</p>

      <div style={{ margin: "2rem 0rem 0rem 0rem" }}>
        <Button
          text="Cancel"
          type="button"
          variant="outlined"
          onClick={closeDialog}
          styleOverrides={{
            fontSize: "1.8rem",
            padding: "0.5rem 1rem",
            margin: "0rem 1rem 0rem 0rem",
          }}
        />

        <Button
          text="Verify Identity"
          type="button"
          variant="contained"
          onClick={() => onConfirm()}
          styleOverrides={{
            fontSize: "1.8rem",
            padding: "0.5rem 1rem",
          }}
        />
      </div>
    </div>
  );
};

export default ModalDeleteContent;

// ========================================================================================================
