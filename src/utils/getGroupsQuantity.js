export const getGroupsQuantity = groups => {
  const quantity = groups.length;
  return quantity === 1 ? `1 group` : `${quantity} groups`;
};
