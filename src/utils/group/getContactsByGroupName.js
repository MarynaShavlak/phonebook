import { convertHyphenatedString } from 'utils';

export const getContactsByGroupName = ({ groupName, groups }) => {
  const convertedName = convertHyphenatedString(groupName);
  return groups.find(group => group.name.toLowerCase() === convertedName)
    .contacts;
};
