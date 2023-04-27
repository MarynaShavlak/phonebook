export const findGroupsForContact = (contact, groups) => {
  return groups
    .filter(group => group.contacts.some(c => c.id === contact.id))
    .flatMap(group => group.name);
};
