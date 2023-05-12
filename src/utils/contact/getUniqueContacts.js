export const getUniqueContacts = contacts => {
  const uniqueIds = new Set();
  const uniqueContacts = contacts.filter(contact => {
    const isDuplicate = uniqueIds.has(contact.id);
    uniqueIds.add(contact.id);
    return !isDuplicate;
  });
  return uniqueContacts;
};
