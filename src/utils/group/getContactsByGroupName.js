export const getContactsByGroupName = (groupName, groups) => {
  return groups?.find(group => group.name === groupName).contacts;
};
