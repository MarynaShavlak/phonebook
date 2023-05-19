import React, { useContext } from 'react';
import { ContactSortButtons } from 'components';
import SortContext from 'contexts/sortContext.js';

export const ContactSortMenu = () => {
  const {
    sortOption,
    activeAlphaSortOrder,
    activeDateSortOrder,
    handleSortByAlphabet,
    handleSortByDate,
  } = useContext(SortContext);

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
