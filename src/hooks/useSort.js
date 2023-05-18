import { useState, useEffect } from 'react';
import { SORT_TYPES, SORT_ORDER, LOCAL_STORAGE_KEYS } from 'constants';

export const useSort = () => {
  const [option, setOption] = useState({ alphabet: SORT_ORDER.ASCENDING });
  const { alphabet, date } = option;
  const key = Object.keys(option)[0];

  useEffect(() => {
    const storedOption = localStorage.getItem(LOCAL_STORAGE_KEYS.SORT_STATE);
    if (storedOption) {
      setOption(JSON.parse(storedOption));
    }
  }, []);

  const handleSort = key => {
    const currentSortOrder = option[key];
    const newSortOrder =
      currentSortOrder === SORT_ORDER.ASCENDING
        ? SORT_ORDER.DESCENDING
        : SORT_ORDER.ASCENDING;
    const newOption = { [key]: newSortOrder };
    setOption(newOption);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.SORT_STATE,
      JSON.stringify(newOption)
    );
  };

  return {
    sortOption: key,
    activeAlphaSortOrder: alphabet,
    activeDateSortOrder: date,
    handleSortByAlphabet: () => handleSort(SORT_TYPES.ALPHABETICALLY),
    handleSortByDate: () => handleSort(SORT_TYPES.DATE),
  };
};

// import { useState } from 'react';
// const sortFunctions = {
//   Alphabet: (a, b) => a.name.localeCompare(b.name),
//   Date: (a, b) => b.id.localeCompare(a.id),
// };

// export const useSort = (initialSortOption, initialReverseSort) => {
//   const [sort, setSort] = useState({
//     option: initialSortOption,
//     reverse: initialReverseSort,
//   });

//   const sortContacts = contacts => {
//     const sortedContacts = [...contacts].sort(sortFunctions[sort.option]);
//     return sort.reverse ? sortedContacts.reverse() : sortedContacts;
//   };

//   const handleSort = option => {
//     console.log('sort.option: ', sort.option);
//     console.log('sort.reverse: ', sort.reverse);
//     setSort(prevSort => ({
//       option,
//       reverse: prevSort.option === option ? !prevSort.reverse : false,
//     }));
//   };

//   return {
//     sortOption: sort.option,
//     reverseSort: sort.reverse,
//     handleSortByAlphabet: () => handleSort('Alphabet'),
//     handleSortByDate: () => handleSort('Date'),
//     sortContacts,
//     handleSort,
//   };
// };

// import { useState } from 'react';
// const sortFunctions = {
//   Alphabet: (a, b) => a.name.localeCompare(b.name),
//   Date: (a, b) => b.id.localeCompare(a.id),
// };

// export const useSort = (initialSortOption, initialReverseSort) => {
//   const [sort, setSort] = useState(
//     // option: initialSortOption,
//     // reverse: initialReverseSort,
//     () => {
//       const sortState = JSON.parse(localStorage.getItem('sortState')) || {};
//       return sortState[initialSortOption] ?? 'desc';
//     }
//   );
//   // console.log('sort: ', sort);

//   const sortContacts = contacts => {
//     const sortedContacts = [...contacts].sort(sortFunctions[sort.option]);
//     return sort.reverse ? sortedContacts.reverse() : sortedContacts;
//   };

//   const handleSort = option => {
//     setSort(prevSort => ({
//       option,
//       reverse: prevSort.option === option ? !prevSort.reverse : false,
//     }));
//   };

//   return {
//     sortOption: sort.option,
//     reverseSort: sort.reverse,
//     handleSortByAlphabet: () => handleSort('Alphabet'),
//     handleSortByDate: () => handleSort('Date'),
//     sortContacts,
//     handleSort,
//   };
// };
