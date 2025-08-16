import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalType, setModalType] = useState(null);

  const openModal = (type, data) => {
    setModalType(type);
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setModalData({});
  };

  return {
    isOpen,
    modalData,
    modalType,
    openModal,
    closeModal,
  };
}
