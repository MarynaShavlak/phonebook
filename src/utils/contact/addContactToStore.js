import { addContact } from 'redux/contacts';

export const addContactToStore = async ({ createdContactData, dispatch }) => {
  await dispatch(addContact(createdContactData));
};
