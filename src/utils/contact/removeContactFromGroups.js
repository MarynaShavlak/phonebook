import { deleteContactFromGroup } from 'redux/groups';
import { findGroupsForContact } from 'utils';

export const removeContactFromGroups = ({ contact, groups, dispatch }) => {
  const groupNames = findGroupsForContact(contact, groups);
  groupNames.forEach(groupName => {
    dispatch(deleteContactFromGroup({ group: groupName, contact }));
  });
};
