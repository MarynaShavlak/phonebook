import { deleteContact } from 'redux/contacts';
import { showErrorMessage } from 'utils/notifications';

export const deleteContactAndCheckError = async ({
  contactId,
  dispatch,
  toggleModal,
}) => {
  const deleteResult = await dispatch(deleteContact(contactId));
  if (deleteResult.error) {
    showErrorMessage();
    toggleModal();
    return false;
  }
  return true;
};
