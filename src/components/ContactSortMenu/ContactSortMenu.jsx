import React from 'react';
import { ContactSortButtons } from 'components';
import { useChangeSortType } from 'hooks';
import { SORT_TYPES, SORT_ORDER, LOCAL_STORAGE_KEYS } from 'constants';

export const ContactSortMenu = () => {
  const {
    sortOption,
    activeAlphaSortOrder,
    activeDateSortOrder,
    handleSortByAlphabet,
    handleSortByDate,
  } = useChangeSortType({ alphabet: SORT_ORDER.ASCENDING });
  console.log('sortOption: ', sortOption);

  return (
    <>
      <ContactSortButtons
        sortOption={sortOption}
        activeAlphaSortOrder={activeAlphaSortOrder}
        activeDateSortOrder={activeDateSortOrder}
        handleSortByAlphabet={handleSortByAlphabet}
        handleSortByDate={handleSortByDate}
      />
    </>
  );
};
