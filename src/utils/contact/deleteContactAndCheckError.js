import { deleteContact } from 'redux/contacts';
import { showErrorMessage } from 'utils/notifications';

export const deleteContactAndCheckError = async ({
  contactId,
  dispatch,
  toggleRemoveModal,
}) => {
  const deleteResult = await dispatch(deleteContact(contactId));
  if (deleteResult.error) {
    showErrorMessage();
    toggleRemoveModal();
    return false;
  }
  return true;
};
