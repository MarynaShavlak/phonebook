import { useState } from 'react';
const sortFunctions = {
  ByAlphabet: (a, b) => a.name.localeCompare(b.name),
  ByDate: (a, b) => b.id.localeCompare(a.id),
};

export const useSort = (initialSortOption, initialReverseSort) => {
  const [sort, setSort] = useState({
    option: initialSortOption,
    reverse: initialReverseSort,
  });

  const sortContacts = contacts => {
    const sortedContacts = [...contacts].sort(sortFunctions[sort.option]);
    return sort.reverse ? sortedContacts.reverse() : sortedContacts;
  };

  const handleSort = option => {
    setSort(prevSort => ({
      option,
      reverse: prevSort.option === option ? !prevSort.reverse : false,
    }));
  };

  return {
    sortOption: sort.option,
    reverseSort: sort.reverse,
    handleSortByAlphabet: () => handleSort('ByAlphabet'),
    handleSortByDate: () => handleSort('ByDate'),
    sortContacts,
  };
};
