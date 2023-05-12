import { useState, useEffect } from 'react';
import { checkContactInSelected } from 'utils';

export const useSelectedContact = (
  selectedItems,
  contact,
  updateSelectedItems
) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
    updateSelectedItems(contact);
  };

  useEffect(() => {
    setIsSelected(checkContactInSelected(selectedItems, contact));
  }, [selectedItems, contact]);

  return [isSelected, toggleIsSelected];
};
