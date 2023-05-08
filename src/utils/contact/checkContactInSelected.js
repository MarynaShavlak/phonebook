export const checkContactInSelected = (selectedContacts, contact) => {
  return selectedContacts.map(el => el.id).includes(contact.id);
};
