import { useContext } from 'react';
import { SORT_ORDER } from 'constants';
import SortContext from 'contexts/sortContext.js';

export const useItemsSorting = items => {
  const { sortOption, activeAlphaSortOrder, activeDateSortOrder } =
    useContext(SortContext);

  const sortOrder = activeAlphaSortOrder
    ? activeAlphaSortOrder
    : activeDateSortOrder;

  const sortFunctions = {
    alphabet: (a, b) => a.name.localeCompare(b.name),
    date: (a, b) => {
      if (
        a.hasOwnProperty('creationTime') &&
        b.hasOwnProperty('creationTime')
      ) {
        return b.creationTime.localeCompare(a.creationTime);
      } else if (a.hasOwnProperty('id') && b.hasOwnProperty('id')) {
        return b.id.localeCompare(a.id);
      } else {
        return 0;
      }
    },
  };

  const getSortedItems = items => {
    const sortedItems = [...items].sort(sortFunctions[sortOption]);
    return sortOrder === SORT_ORDER.DESCENDING
      ? sortedItems.reverse()
      : sortedItems;
  };

  const sortedItems = getSortedItems(items);

  return sortedItems;
};
