export const getContactById = ({ contactId, contacts }) => {
  return contacts?.find(contact => contact.id === contactId);
};
