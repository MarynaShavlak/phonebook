import { checkForDuplicateContact } from 'utils';
import { showContactExistWarn } from 'utils/notifications';

export const checkAndWarnForDuplicateContact = ({ newContact, contacts }) => {
  const { isDuplicate, isNameExist, isNumberExist } = checkForDuplicateContact({
    newContact,
    contacts,
  });
  if (isDuplicate) {
    showContactExistWarn({
      isNameExist,
      isNumberExist,
      contact: newContact,
    });
    return true;
  }
  return false;
};
