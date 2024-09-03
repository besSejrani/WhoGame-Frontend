"use client";
import React, { useEffect } from "react";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// State
import useToastStore from "@Store/toasts";

// ========================================================================================================

const Toast: React.FC = () => {
  const {
    errorMessage,
    infoMessage,
    successMessage,
    setErrorMessage,
    setInfoMessage,
    setSuccessMessage,
  } = useToastStore((state) => ({
    errorMessage: state.errorMessage,
    infoMessage: state.infoMessage,
    successMessage: state.successMessage,
    setErrorMessage: state.setErrorMessage,
    setInfoMessage: state.setInfoMessage,
    setSuccessMessage: state.setSuccessMessage,
  }));

  // ==============================
  //  Error Toast
  // ==============================
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        className: `
          text-lg right-10
          dark:bg-cardDark dark:text-white
        `,
      });

      setErrorMessage("");
    }
  }, [errorMessage, setErrorMessage]);

  // =================================================================================================

  // ==============================
  //  Info Toast
  // ==============================
  useEffect(() => {
    if (infoMessage) {
      toast.info(infoMessage, {
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: `
          text-lg right-10
          dark:bg-cardDark dark:text-white
        `,
      });
      setInfoMessage("");
    }
  }, [infoMessage, setInfoMessage]);

  // =================================================================================================

  // ==============================
  //  Success Toast
  // ==============================
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: `
          text-lg right-10
          dark:bg-cardDark dark:text-white
        `,
      });
      setSuccessMessage("");
    }
  }, [successMessage, setSuccessMessage]);

  return <ToastContainer />;
};

export default Toast;
