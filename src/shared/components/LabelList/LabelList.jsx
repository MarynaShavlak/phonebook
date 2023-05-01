import React from 'react';
import PropTypes from 'prop-types';
import { List, LabelButton } from './LabelList.styled';
import { ITEM_CATEGORIES } from 'constants';

export const LabelList = ({ items, handleItem, category, selectedItems }) => {
  const labels = category === ITEM_CATEGORIES.CONTACT ? items : selectedItems;
  return (
    <List>
      {items.map(item => {
        const itemId = category === ITEM_CATEGORIES.CONTACT ? item.id : item;
        const isSelected = labels.includes(item);
        const labelText =
          category === ITEM_CATEGORIES.CONTACT
            ? `${item.name}: ${item.number}`
            : `${item}`;

        return (
          <li key={itemId}>
            <LabelButton
              type="button"
              className={isSelected ? 'selected' : ''}
              onClick={() => handleItem(item)}
            >
              {labelText}
            </LabelButton>
          </li>
        );
      })}
    </List>
  );
};

LabelList.propTypes = {
  items: PropTypes.array.isRequired,
  handleItem: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  selectedItems: PropTypes.array,
};
