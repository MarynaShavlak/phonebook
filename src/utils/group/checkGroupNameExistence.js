import { removeExtraWhitespace } from 'utils';
import { showGroupWarn } from 'utils/notifications';

export const checkGroupNameExistence = (groupName, groups) => {
  const normalizedGroupName = removeExtraWhitespace(groupName).toLowerCase();
  const isGroupExist = groups.some(
    el => el.name.toLowerCase() === normalizedGroupName
  );
  if (isGroupExist) {
    showGroupWarn(groupName);
  }
  return isGroupExist;
};
