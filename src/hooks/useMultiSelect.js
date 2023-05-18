import { useState, useEffect } from 'react';
import { checkContactInSelected } from 'utils';
import { LOCAL_STORAGE_KEYS } from 'constants';

export const useMultiSelect = (allContacts, route) => {
  const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(() => {
    const multiSelectState =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.MULTI_SELECT_STATE)) ||
      {};
    return multiSelectState[route] ?? false;
  });
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const multiSelectState =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.MULTI_SELECT_STATE)) ||
      {};
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.MULTI_SELECT_STATE,
      JSON.stringify({ ...multiSelectState, [route]: isMultiSelectOpen })
    );
  }, [isMultiSelectOpen, route]);

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
