import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components';
import { getContacts } from 'redux/selectors';
import * as contactsOperations from 'redux/contactsOperations';
import * as Notifications from 'utils/notifications';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
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
    const isNumberExist = contacts.some(el => el.number === contact.number);
    const isNameExist = contacts.some(el => el.name === contact.name);
    Notifications.showInfoNotification(isNameExist, isNumberExist, contact);
    const isContactExist = isNameExist || isNumberExist;
    return isContactExist;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const createdContact = { name, number };
    if (checkContactInBook(createdContact)) return;
    dispatch(contactsOperations.addContact(createdContact));
    Notifications.showSuccessNotification('add', createdContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form
      name={name}
      number={number}
      operationType="Add contact"
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};
