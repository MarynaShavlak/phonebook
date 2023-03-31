import { useState } from 'react';

export const useHoverEffects = (
  initialState = { delete: false, edit: false }
) => {
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(
    initialState.delete
  );
  const [isEditBtnHovered, setIsEditBtnHovered] = useState(initialState.edit);

  const toggleDeleteBtnHoverEffect = () =>
    setIsDeleteBtnHovered(!isDeleteBtnHovered);
  const toggleEditBtnHoverEffect = () => setIsEditBtnHovered(!isEditBtnHovered);

  return {
    isDeleteBtnHovered,
    isEditBtnHovered,
    toggleDeleteBtnHoverEffect,
    toggleEditBtnHoverEffect,
  };
};
