import { addContactToGroup } from 'redux/groups';
import { findSelectedContactsGroups } from 'utils';

export const addContactToGroups = ({
  contact,
  selectedContacts,
  groups,
  dispatch,
}) => {
  const selectedContactsGroupNames = findSelectedContactsGroups(
    selectedContacts,
    groups
  );

  selectedContactsGroupNames.forEach(groupName => {
    dispatch(addContactToGroup({ group: groupName, contact }));
  });
};
