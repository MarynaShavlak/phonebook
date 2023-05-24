import { removeContactFromRecycleBin } from 'redux/recycleBin';
import { addContact } from 'redux/contacts';
import { showErrorMessage } from 'utils/notifications';

export const restoreDeletedContact = async ({ contact, dispatch }) => {
  try {
    const restoreResult = await dispatch(addContact(contact));
    const deleteResult = await dispatch(
      removeContactFromRecycleBin(contact.id)
    );
    if (restoreResult.error || deleteResult.error) {
      showErrorMessage();
    }
  } catch (error) {
    showErrorMessage();
  }
};
