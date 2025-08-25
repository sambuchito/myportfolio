import { useState } from "react";

export const useLogout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState(null);

  const openModal = (msg, confirmAction) => {
    setMessage(msg);
    setOnConfirm(() => confirmAction);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setMessage("");
    setOnConfirm(null);
  };

  const confirm = () => {
    if (onConfirm) onConfirm();
    closeModal();
  };

  return {
    isOpen,
    message,
    openModal,
    closeModal,
    confirm,
  };
};
