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
    handleSort,
  };
};

// import { useState } from 'react';

// const sortFunctions = {
//   ByAlphabet: (a, b) => a.name.localeCompare(b.name),
//   ByDate: (a, b) => b.id.localeCompare(a.id),
// };

// export const useSort = (initialSortOption, initialReverseSort) => {
//   const [sortOption, setSortOption] = useState(initialSortOption);
//   const [reverseSort, setReverseSort] = useState(initialReverseSort);

//   const sortContacts = contacts => {
//     const sortedContacts = [...contacts].sort(sortFunctions[sortOption]);
//     return reverseSort ? sortedContacts.reverse() : sortedContacts;
//   };

//   const handleSort = option => {
//     setSortOption(option);
//     setReverseSort(prevReverseSort => {
//       return option === sortOption ? !prevReverseSort : false;
//     });
//   };

//   return {
//     sortOption,
//     reverseSort,
//     handleSort,
//     sortContacts,
//   };
// };

// import { useState, useEffect } from 'react';

// const sortFunctions = {
//   ByAlphabet: (a, b) => a.name.localeCompare(b.name),
//   ByDate: (a, b) => b.id.localeCompare(a.id),
// };

// export const useSort = (initialSortOption, initialReverseSort) => {
//   const [sort, setSort] = useState({
//     option: initialSortOption,
//     reverse: initialReverseSort,
//   });

//   useEffect(() => {
//     const storedSort = localStorage.getItem('sortOption');
//     if (storedSort) {
//       const { option, reverse } = JSON.parse(storedSort);
//       setSort({ option, reverse });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('sortOption', JSON.stringify(sort));
//   }, [sort]);

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
//     handleSortByAlphabet: () => handleSort('ByAlphabet'),
//     handleSortByDate: () => handleSort('ByDate'),
//     sortContacts,
//   };
// };
