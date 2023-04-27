export const getContactsQuantity = contacts => {
  const quantity = contacts.length;
  return quantity === 1 ? `1 contact` : `${quantity} contacts`;
};
