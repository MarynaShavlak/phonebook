import React from 'react';
import PropTypes from 'prop-types';
import { SortButtonList } from './ContactSortButtons.styled';
import { SortButton } from './components/SortButton';
import { SORT_TYPES, ICON_NAMES } from 'constants';
const { ALPHA_UP, ALPHA_DOWN, DATE_UP, DATE_DOWN } = ICON_NAMES;

export const ContactSortButtons = ({
  sortOption,
  activeAlphaSortOrder,
  activeDateSortOrder,
  handleSortByAlphabet,
  handleSortByDate,
}) => {
  const ALPHABETICALLY_ACTIVE = sortOption === SORT_TYPES.ALPHABETICALLY;
  const DATE_ACTIVE = sortOption === SORT_TYPES.DATE;

  return (
    <SortButtonList>
      <SortButton
        activeSortOrder={activeAlphaSortOrder}
        onClick={handleSortByAlphabet}
        label="Sort contacts by alphabet"
        active={ALPHABETICALLY_ACTIVE}
        iconUp={ALPHA_UP}
        iconDown={ALPHA_DOWN}
      />
      <SortButton
        activeSortOrder={activeDateSortOrder}
        onClick={handleSortByDate}
        label="Sort contacts by date of create"
        active={DATE_ACTIVE}
        iconUp={DATE_UP}
        iconDown={DATE_DOWN}
      />
    </SortButtonList>
  );
};

ContactSortButtons.propTypes = {
  sortOption: PropTypes.string.isRequired,
  activeDateSortOrder: PropTypes.string,
  activeAlphaSortOrder: PropTypes.string,
  handleSortByAlphabet: PropTypes.func.isRequired,
  handleSortByDate: PropTypes.func.isRequired,
};
