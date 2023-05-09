import { useState } from 'react';
import { checkContactInSelected } from 'utils';

export const useMultiSelect = allContacts => {
  const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const toggleMultiSelect = () => {
    setIsMultiSelectOpen(!isMultiSelectOpen);
  };

  const resetSelectedContacts = () => {
    setSelectedContacts([]);
  };

  const handleSelectAllClick = () => {
    if (!selectedContacts.length) {
      setSelectedContacts(allContacts);
    } else {
      resetSelectedContacts();
    }
  };

  const updateSelectedContacts = contact => {
    const isInSelected = checkContactInSelected(selectedContacts, contact);
    if (isInSelected) {
      const updatedSelectedContacts = selectedContacts.filter(
        el => el.id !== contact.id
      );
      setSelectedContacts(updatedSelectedContacts);
    } else {
      const updatedSelectedContacts = [...selectedContacts, contact];
      setSelectedContacts(updatedSelectedContacts);
    }
  };

  return {
    isMultiSelectOpen,
    toggleMultiSelect,
    resetSelectedContacts,
    handleSelectAllClick,
    selectedContacts,
    updateSelectedContacts,
  };
};
