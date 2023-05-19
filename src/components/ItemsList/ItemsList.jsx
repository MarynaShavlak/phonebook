import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './ItemsList.styled';
import { useItemsSorting } from 'hooks';

export const ItemsList = ({ items, renderItem, page }) => {
  const sortedItems = useItemsSorting(items);
  return (
    <List>
      {sortedItems.map(item => (
        <Item key={item.id}>{renderItem(item)}</Item>
      ))}
    </List>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};
