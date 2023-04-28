import React from 'react';
import { clsx } from 'clsx';
import { SortButtons, SortBtn } from './ContactSorter.styled';
import { renderIcons } from 'utils';
import { iconSize } from 'constants';

export const ContactSorter = ({
  sortOption,
  reverseSort,
  handleSortByAlphabet,
  handleSortByDate,
}) => {
  return (
    <SortButtons>
      <SortBtn
        onClick={handleSortByAlphabet}
        aria-label="Sort contacts by alphabet"
        className={clsx({ active: sortOption === 'ByAlphabet' })}
      >
        {reverseSort
          ? renderIcons('alphaUp', iconSize.xs)
          : renderIcons('alphaDown', iconSize.xs)}
      </SortBtn>
      <SortBtn
        onClick={handleSortByDate}
        aria-label="Sort contacts by date of create"
        className={clsx({ active: sortOption === 'ByDate' })}
      >
        {reverseSort
          ? renderIcons('dateUp', iconSize.xs)
          : renderIcons('dateDown', iconSize.xs)}
      </SortBtn>
    </SortButtons>
  );
};
