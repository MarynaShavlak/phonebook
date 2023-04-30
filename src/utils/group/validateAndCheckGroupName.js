import { validateGroupData, checkGroupNameExistence } from 'utils';

export const validateAndCheckGroupName = async (groupName, otherGroups) => {
  const isValid = await validateGroupData(groupName);
  if (!isValid) return false;

  const alreadyExists = checkGroupNameExistence(groupName, otherGroups);
  if (alreadyExists) return false;

  return true;
};
