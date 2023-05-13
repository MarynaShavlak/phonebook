import { updateContact } from 'redux/contacts';

export const updateContactInStore = async ({ updatedContact, dispatch }) => {
  await dispatch(updateContact(updatedContact));
};
