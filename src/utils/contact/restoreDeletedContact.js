import { removeContactFromRecycleBin } from 'redux/recycleBin';
import { addContact } from 'redux/contacts';
import { showContactSuccess, showErrorMessage } from 'utils/notifications';
import { CONTACT_ACTIONS } from 'constants';

export const restoreDeletedContact = async ({ contact, dispatch }) => {
  try {
    const restoreResult = await dispatch(addContact(contact));
    const deleteResult = await dispatch(
      removeContactFromRecycleBin(contact.id)
    );
    if (restoreResult.error || deleteResult.error) {
      showErrorMessage();
    } else {
      showContactSuccess(CONTACT_ACTIONS.RESTORE, contact);
    }
  } catch (error) {
    showErrorMessage();
  }
};
