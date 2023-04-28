import React from 'react';
import PropTypes from 'prop-types';
import { SortButtonList } from './ContactSortButtons.styled';
import { SortButton } from './components/SortButton';
import { SORT_OPTIONS, ICON_NAMES } from 'constants';
const { ALPHA_UP, ALPHA_DOWN, DATE_UP, DATE_DOWN } = ICON_NAMES;

export const ContactSortButtons = ({
  sortOption,
  reverseSort,
  handleSortByAlphabet,
  handleSortByDate,
}) => {
  const ALPHABETICALLY_ACTIVE = sortOption === SORT_OPTIONS.ALPHABETICALLY;
  const DATE_ACTIVE = sortOption === SORT_OPTIONS.DATE;

  return (
    <SortButtonList>
      <SortButton
        reverseSort={reverseSort}
        onClick={handleSortByAlphabet}
        label="Sort contacts by alphabet"
        active={ALPHABETICALLY_ACTIVE}
        iconUp={ALPHA_UP}
        iconDown={ALPHA_DOWN}
      />
      <SortButton
        reverseSort={reverseSort}
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
  reverseSort: PropTypes.bool.isRequired,
  handleSortByAlphabet: PropTypes.func.isRequired,
  handleSortByDate: PropTypes.func.isRequired,
};
