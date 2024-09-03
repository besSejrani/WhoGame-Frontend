"use client";

import React, { useRef, useEffect } from "react";

// State
import { useModalStore } from "@Store/modal";

// ==========================================================================================

const Modal: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, content, closeModal } = useModalStore();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    if (isOpen) {
      dialogRef.current?.showModal();
      window.addEventListener("keydown", handleEscape);
    } else {
      dialogRef.current?.close();
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeDialog = () => {
    dialogRef.current?.close();
    closeModal();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`
        fixed py-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-max border-none shadow-lg bg-white z-[1000] rounded-2xl cursor-pointer outline-none
        dark:bg-cardDark
        `}
      onClick={() => closeDialog()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          h-full w-full bg-white p-8 rounded-lg cursor-default
          dark:bg-cardDark
          `}
      >
        {content}
      </div>
      <style jsx>{`
        dialog::backdrop {
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.3s ease;
        }
      `}</style>
    </dialog>
  );
};

export default Modal;
