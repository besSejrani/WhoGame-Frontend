// UI
import Button from "@/Components/client/Button";

// Types
import type { FC } from "react";

// ========================================================================================================

// Interface
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
    <div className="flex justify-center items-center flex-col">
      <h2
        className={`
        text-3xl font-light mb-4
        dark:text-white
        `}
      >
        {title}
      </h2>
      <p
        className={`
        text-base font-light
        dark:text-white
        `}
      >
        {text}
      </p>

      <div className="mt-8">
        <Button
          text="Cancel"
          type="button"
          variant="outlined"
          onClick={closeDialog}
          className="rounded-xl text-xl py-2 px-4 mr-6 font-light"
        />

        <Button
          text="Verify Identity"
          type="button"
          variant="contained"
          onClick={() => onConfirm()}
          className="rounded-xl text-xl py-2 px-4 font-light"
        />
      </div>
    </div>
  );
};

export default ModalDeleteContent;
