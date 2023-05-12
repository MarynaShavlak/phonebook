import { findGroupsForContact } from 'utils';
export const findSelectedContactsGroups = (selectedContacts, groups) => {
  return Array.from(
    new Set(
      selectedContacts.flatMap(contact => findGroupsForContact(contact, groups))
    )
  );
};
