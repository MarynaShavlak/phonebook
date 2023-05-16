import React, { useEffect } from 'react';
import { ContactSortButtons } from 'components';
import { useSort } from 'hooks';
import { SORT_OPTIONS, LOCAL_STORAGE_KEYS } from 'constants';

const { SORT_OPTION_KEY, REVERSE_SORT_KEY } = LOCAL_STORAGE_KEYS;

export const ContactSortMenu = () => {
  const { sortOption, reverseSort, handleSortByAlphabet, handleSortByDate } =
    useSort(
      localStorage.getItem(SORT_OPTION_KEY) || SORT_OPTIONS.ALPHABETICALLY,
      localStorage.getItem(REVERSE_SORT_KEY) === 'true'
    );

  // console.log('sortOption: ', sortOption);
  useEffect(() => {
    localStorage.setItem(SORT_OPTION_KEY, sortOption);
    localStorage.setItem(REVERSE_SORT_KEY, reverseSort);
  }, [sortOption, reverseSort]);

  return (
    <>
      <ContactSortButtons
        sortOption={sortOption}
        reverseSort={reverseSort}
        handleSortByAlphabet={handleSortByAlphabet}
        handleSortByDate={handleSortByDate}
      />
    </>
  );
};
