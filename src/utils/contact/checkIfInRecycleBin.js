export const checkIfInRecycleBin = (contact, deletedContacts) => {
  return deletedContacts.some(el => el.id === contact.id);
};
