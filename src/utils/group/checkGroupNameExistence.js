import { removeExtraWhitespace } from 'utils';

export const checkGroupNameExistence = (groupName, groups) => {
  const normalizedGroupName = removeExtraWhitespace(groupName).toLowerCase();
  const isGroupExist = groups.some(
    el => el.name.toLowerCase() === normalizedGroupName
  );
  return isGroupExist;
};
