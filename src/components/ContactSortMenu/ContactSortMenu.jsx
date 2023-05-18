import React from 'react';
import { ContactSortButtons } from 'components';
import { useSort } from 'hooks';

export const ContactSortMenu = () => {
  const {
    sortOption,
    activeAlphaSortOrder,
    activeDateSortOrder,
    handleSortByAlphabet,
    handleSortByDate,
  } = useSort();

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
