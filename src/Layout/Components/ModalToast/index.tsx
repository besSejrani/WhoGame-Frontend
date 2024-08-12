import React from "react";

// Components
import Modal from "@Layout/Components/Modal";
import Toast from "@Layout/Components/Toast";

// ==========================================================================================

interface ILayout {
  children: React.ReactNode;
}

export const ModalAndToast: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      {children}
      <Modal />
      <Toast />
    </>
  );
};
