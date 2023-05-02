import { getExclusiveContact } from 'utils';

export const getContactNewData = ({ name, number, allContacts, contact }) => {
  const createdContactData = getExclusiveContact({
    name,
    number,
    contacts: allContacts,
    contact,
  });
  const updatedContact = { ...contact, ...createdContactData };
  return { createdContactData, updatedContact };
};
