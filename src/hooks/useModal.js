import { useState, useEffect } from 'react';

export const useModal = action => {
  const [modalType, setModalType] = useState(null);
  useEffect(() => {
    if (modalType === action) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalType, action]);

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
