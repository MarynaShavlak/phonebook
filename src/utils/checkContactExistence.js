const checkContactExistence = (contacts, value, prop) => {
  return contacts.some(contact => contact[prop] === value);
};
const filterContactsByProperty = (contacts, value, prop) => {
  return contacts.filter(contact => contact[prop] !== value);
};

export const isExistByName = ({ newName, contact, contacts }) => {
  const filteredContacts = filterContactsByProperty(
    contacts,
    contact.name,
    'name'
  );
  console.log('filteredContacts: ', filteredContacts);
  return checkContactExistence(filteredContacts, newName, 'name');
};
export const isExistByNumber = ({ newNumber, contact, contacts }) => {
  const filteredContacts = filterContactsByProperty(
    contacts,
    contact.number,
    'number'
  );
  console.log('filteredContacts: ', filteredContacts);
  return checkContactExistence(filteredContacts, newNumber, 'number');
};
