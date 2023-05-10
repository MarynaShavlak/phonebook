import { useState, useEffect } from 'react';
import { checkContactInSelected } from 'utils';

export const useSelectedContact = (
  selectedContacts,
  contact,
  updateSelectedContacts
) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
    updateSelectedContacts(contact);
  };

  useEffect(() => {
    setIsSelected(checkContactInSelected(selectedContacts, contact));
  }, [selectedContacts, contact]);

  return [isSelected, toggleIsSelected];
};
