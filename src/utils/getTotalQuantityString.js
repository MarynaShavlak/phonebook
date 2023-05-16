import { ROUTES, ITEM_CATEGORIES } from 'constants';

export const getTotalQuantityString = (items, page) => {
  const item =
    page === ROUTES.GROUPS ? ITEM_CATEGORIES.GROUP : ITEM_CATEGORIES.CONTACT;
  const quantity = items.length;
  return quantity === 1 ? `1 ${item}` : `${quantity} ${item}s`;
};
