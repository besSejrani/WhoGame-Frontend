"use client";

import React, { useRef, useEffect } from "react";

// Styles
import { overlay, modal } from "./index.css";

// State
import { useModalStore } from "@Store/modal";

// ==========================================================================================

const Modal = () => {
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
    <dialog ref={dialogRef} className={overlay} onClick={() => closeDialog()}>
      <div onClick={(e) => e.stopPropagation()} className={modal}>
        {content}
      </div>
    </dialog>
  );
};

export default Modal;
