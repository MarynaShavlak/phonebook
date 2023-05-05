import { ITEM_CATEGORIES } from 'constants';

export const getTotalQuantityString = (items, category) => {
  const item =
    category === ITEM_CATEGORIES.RECYCLEBIN
      ? ITEM_CATEGORIES.CONTACT
      : category;
  const quantity = items.length;
  return quantity === 1 ? `1 ${item}` : `${quantity} ${item}s`;
};
