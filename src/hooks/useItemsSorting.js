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
    date: (a, b) => b.id.localeCompare(a.id),
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
