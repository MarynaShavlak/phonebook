import React from 'react';
import { InfoWrap, Info, AddNewBtn } from 'shared/commonStyledComponents.jsx';
import { getTotalQuantityString, renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES, ITEM_CATEGORIES } from 'constants';

export const ListHeader = ({ items, handleAddNew, category }) => {
  const iconName =
    category === ITEM_CATEGORIES.CONTACT
      ? ICON_NAMES.ADD
      : ICON_NAMES.GROUP_ADD;
  return (
    <InfoWrap>
      <Info>
        Total quantity: <span>{getTotalQuantityString(items, category)}</span>
      </Info>
      <AddNewBtn
        type="button"
        aria-label={`Add new ${category}`}
        onClick={handleAddNew}
      >
        {renderIcons(iconName, ICON_SIZES.MEDIUM)}
      </AddNewBtn>
    </InfoWrap>
  );
};
