export const getAvailableToSelectContacts = (
  existedContactsInGroup,
  allContacts
) => {
  const contactIds = new Set(existedContactsInGroup.map(c => c.id));
  return allContacts?.filter(c => !contactIds.has(c.id));
};
