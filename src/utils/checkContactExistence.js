import { removeExtraWhitespace } from 'utils';

const checkContactExistence = (contacts, value, prop) => {
  return contacts.some(contact => contact[prop] === value);
};
const filterContactsByProperty = (contacts, value, prop) => {
  return contacts.filter(contact => contact[prop] !== value);
};

export const isExistByName = ({
  newName,
  contacts,
  contact = { name: '', number: '' },
}) => {
  const filteredContacts = filterContactsByProperty(
    contacts,
    contact.name,
    'name'
  );
  const normalizedContactName = removeExtraWhitespace(newName);

  return checkContactExistence(filteredContacts, normalizedContactName, 'name');
};
export const isExistByNumber = ({
  newNumber,
  contacts,
  contact = { name: '', number: '' },
}) => {
  const filteredContacts = filterContactsByProperty(
    contacts,
    contact.number,
    'number'
  );
  return checkContactExistence(filteredContacts, newNumber, 'number');
};

export const checkForDuplicateContact = ({
  newContact,

  contacts,
  contact = { name: '', number: '' },
}) => {
  console.log('newContact: ', newContact);
  const isNameExist = isExistByName({
    newName: newContact.name,
    contacts,
    contact,
  });
  const isNumberExist = isExistByNumber({
    newNumber: newContact.number,
    contacts,
    contact,
  });

  return {
    isDuplicate: isNameExist || isNumberExist,
    isNameExist,
    isNumberExist,
  };
};
