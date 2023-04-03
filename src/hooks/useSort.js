import { useState } from 'react';

export const useSort = (initialSortOption, initialReverseSort) => {
  const [sortOption, setSortOption] = useState(initialSortOption);
  const [reverseSort, setReverseSort] = useState(initialReverseSort);

  const sortContacts = contacts => {
    const sortedContacts = [...contacts].sort((firstContact, secondContact) => {
      if (sortOption === 'ByAlphabet') {
        return firstContact.name.localeCompare(secondContact.name);
      } else {
        return secondContact.id.localeCompare(firstContact.id);
      }
    });
    return reverseSort ? sortedContacts.reverse() : sortedContacts;
  };

  const handleSortByAlphabet = () => {
    setSortOption('ByAlphabet');
    setReverseSort(prev => (sortOption === 'ByAlphabet' ? !prev : false));
  };

  const handleSortByDate = () => {
    setSortOption('ByDate');
    setReverseSort(prev => (sortOption === 'ByDate' ? !prev : false));
  };

  return {
    handleSortByAlphabet,
    handleSortByDate,
    sortContacts,
  };
};
