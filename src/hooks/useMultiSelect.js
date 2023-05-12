import { useState } from 'react';
import { checkContactInSelected } from 'utils';

export const useMultiSelect = allContacts => {
  const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleMultiSelect = () => {
    setIsMultiSelectOpen(!isMultiSelectOpen);
  };

  const resetSelectedItems = () => {
    setSelectedItems([]);
  };

  const handleSelectAllClick = () => {
    if (!selectedItems.length) {
      setSelectedItems(allContacts);
    } else {
      resetSelectedItems();
    }
  };

  const updateSelectedItems = contact => {
    const isInSelected = checkContactInSelected(selectedItems, contact);
    if (isInSelected) {
      const updatedselectedItems = selectedItems.filter(
        el => el.id !== contact.id
      );
      setSelectedItems(updatedselectedItems);
    } else {
      const updatedselectedItems = [...selectedItems, contact];
      setSelectedItems(updatedselectedItems);
    }
  };

  return {
    isMultiSelectOpen,
    toggleMultiSelect,
    resetSelectedItems,
    handleSelectAllClick,
    selectedItems,
    updateSelectedItems,
  };
};
