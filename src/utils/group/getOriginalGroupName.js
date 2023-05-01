import { convertHyphenatedString } from 'utils';

export const getOriginalGroupName = ({ groupName, groups }) => {
  const convertedName = convertHyphenatedString(groupName);
  return groups.find(group => group.name.toLowerCase() === convertedName).name;
};
