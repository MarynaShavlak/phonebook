export const getTotalQuantityString = (items, category) => {
  const quantity = items.length;
  return quantity === 1 ? `1 ${category}` : `${quantity} ${category}s`;
};
