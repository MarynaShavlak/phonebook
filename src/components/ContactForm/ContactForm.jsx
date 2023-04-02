import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components';
import { selectContacts } from 'redux/contacts/selectors';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { Notifications, removeExtraWhitespace } from 'utils';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.warn(`Type of field with name ${name} is not found`);
    }
  };

  const checkContactInBook = contact => {
    const normalizedContactName = removeExtraWhitespace(contact.name);
    const isNumberExist = contacts.some(el => el.number === contact.number);
    const isNameExist = contacts.some(el => el.name === normalizedContactName);

    const isContactExist = isNameExist || isNumberExist;
    if (isContactExist)
      Notifications.showContactWarn(isNameExist, isNumberExist, contact);
    return isContactExist;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const createdContact = { name, number };
    if (checkContactInBook(createdContact)) return;
    dispatch(contactsOperations.addContact(createdContact));
    Notifications.showContactSuccess('add', createdContact);
    reset();
    console.log('submit add contact');
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form
        name={name}
        number={number}
        operationType="Add new contact"
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
