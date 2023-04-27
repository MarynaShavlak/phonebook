import { removeExtraWhitespace, checkForDuplicateContact } from 'utils';
import { showContactExistWarn } from 'utils/notifications';

export const getExclusiveContact = ({
  name,
  number,
  contacts,
  contact = { name: '', number: '' },
}) => {
  const normalizedContactName = removeExtraWhitespace(name);
  const exclusiveContact = { name: normalizedContactName, number };
  const { isDuplicate, isNameExist, isNumberExist } = checkForDuplicateContact({
    newContact: exclusiveContact,
    contacts,
    contact,
  });

  if (isDuplicate) {
    showContactExistWarn({
      isNameExist,
      isNumberExist,
      contact: exclusiveContact,
    });
    return;
  }

  return exclusiveContact;
};
