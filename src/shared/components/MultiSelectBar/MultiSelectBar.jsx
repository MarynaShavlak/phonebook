import React from 'react';
// import PropTypes from 'prop-types';
import {
  SelectBtn,
  SelectedInfo,
  ControlBar,
  ChoseActionBlock,
  BtnList,
} from './MultiSelectBar.styled';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES } from 'constants';

export const MultiSelectBar = () => {
  return (
    <ControlBar>
      <SelectBtn type="button">
        {renderIcons(ICON_NAMES.CHECK, ICON_SIZES.MEDIUM)} Select All
      </SelectBtn>
      <ChoseActionBlock>
        <span>Choose Action</span>{' '}
        <BtnList>
          <button
            type="button"
            aria-label="Remove selected contacts to recycle bin"
          >
            {' '}
            {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM_SMALL)}
          </button>
          <button
            type="button"
            aria-label="Add selected contacts to recycle to group"
          >
            {renderIcons(ICON_NAMES.GROUP, ICON_SIZES.MEDIUM_SMALL)}
          </button>
        </BtnList>
      </ChoseActionBlock>
      <SelectedInfo type="button">
        <span>0 </span> Selected
      </SelectedInfo>
    </ControlBar>
  );
};

MultiSelectBar.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.object).isRequired,
  // handleClick: PropTypes.func.isRequired,
  // // handleSelectClick: PropTypes.func.isRequired,
  // handleSelectClick: PropTypes.func,
  // category: PropTypes.oneOf(Object.values(ITEM_CATEGORIES)).isRequired,
};
