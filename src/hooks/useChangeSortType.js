import { useState, useEffect } from 'react';
import { SORT_TYPES, SORT_ORDER, LOCAL_STORAGE_KEYS } from 'constants';

export const useChangeSortType = () => {
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
    option,
    sortOption: key,
    activeAlphaSortOrder: alphabet,
    activeDateSortOrder: date,
    handleSortByAlphabet: () => handleSort(SORT_TYPES.ALPHABETICALLY),
    handleSortByDate: () => handleSort(SORT_TYPES.DATE),
  };
};
