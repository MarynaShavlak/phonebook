import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './ItemsList.styled';
import { useItemsSorting } from 'hooks';
import { ROUTES } from 'constants';
import { DraggableItemsList } from 'shared';

export const ItemsList = ({ items, renderItem, page }) => {
  const isOnGroupsPage = page === ROUTES.GROUPS;
  const sortedItems = useItemsSorting(items);

  return (
    <>
      {isOnGroupsPage ? (
        <DraggableItemsList items={sortedItems} renderItem={renderItem} />
      ) : (
        <List>
          {sortedItems.map(item => (
            <Item key={item.id}>{renderItem(item)}</Item>
          ))}
        </List>
      )}
    </>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};
