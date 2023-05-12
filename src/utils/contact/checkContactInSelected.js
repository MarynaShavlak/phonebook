export const checkContactInSelected = (selectedItems, contact) => {
  return selectedItems?.map(el => el.id).includes(contact.id);
};
