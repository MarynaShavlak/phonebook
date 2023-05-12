import { findGroupsForContact, getUniqueContacts } from 'utils';
import { addContactToGroup } from 'redux/groups';

export const handleContactsInSelectedGroups = async ({
  selectedGroups,
  chosenGroupName,
  dispatch,
}) => {
  const uniqueContacts = getUniqueContacts(
    selectedGroups.flatMap(group => group.contacts)
  );
  await Promise.all(
    uniqueContacts.map(async contact => {
      const groupsForContact = findGroupsForContact(contact, selectedGroups);
      if (!groupsForContact.includes(chosenGroupName)) {
        await dispatch(addContactToGroup({ group: chosenGroupName, contact }));
      }
    })
  );
};
