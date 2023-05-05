import React from 'react';
import PropTypes from 'prop-types';
import { InfoWrap, Info, AddNewBtn } from 'shared/commonStyledComponents.jsx';
import { getTotalQuantityString, renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES, ITEM_CATEGORIES } from 'constants';

export const ListHeader = ({ items, handleClick, category }) => {
  const iconName =
    category === ITEM_CATEGORIES.CONTACT
      ? ICON_NAMES.ADD
      : category === ITEM_CATEGORIES.RECYCLEBIN
      ? ICON_NAMES.DELETE
      : ICON_NAMES.GROUP_ADD;
  return (
    <InfoWrap>
      <Info>
        Total quantity: <span>{getTotalQuantityString(items, category)}</span>
      </Info>
      <AddNewBtn
        type="button"
        aria-label={
          category === ITEM_CATEGORIES.RECYCLEBIN
            ? 'Clear recycle bin'
            : `Add new ${category}`
        }
        onClick={handleClick}
      >
        {renderIcons(iconName, ICON_SIZES.MEDIUM)}
      </AddNewBtn>
    </InfoWrap>
  );
};

ListHeader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.oneOf(Object.values(ITEM_CATEGORIES)).isRequired,
};
