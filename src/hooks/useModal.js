import { useState } from 'react';

export const useModal = action => {
  const [modalType, setModalType] = useState(null);

  const openModal = () => {
    setModalType(action);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const isModalOpen = () => {
    return modalType === action;
  };

  const toggleModal = () => {
    setModalType(prevType => (prevType === action ? null : action));
  };

  const modalStatus = {};

  modalStatus[
    `is${action.charAt(0).toUpperCase()}${action.slice(1)}ModalOpen`
  ] = isModalOpen();
  modalStatus[
    `toggle${action.charAt(0).toUpperCase()}${action.slice(1)}Modal`
  ] = toggleModal;
  return {
    openModal,
    closeModal,
    ...modalStatus,
  };
};
