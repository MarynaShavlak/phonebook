import { useState } from 'react';

export const useModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  return {
    isEditModalOpen,
    isDeleteModalOpen,
    toggleEditModal,
    toggleDeleteModal,
  };
};
