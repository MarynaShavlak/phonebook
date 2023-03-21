import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form';
import { getContacts } from 'redux/selectors';
import * as contactsOperations from 'redux/contactsOperations';
import { toast } from 'react-toastify';

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
    let isContactExist = false;
    let isNumberExist = contacts.some(el => el.number === contact.number);
    let isNameExist = contacts.some(el => el.name === contact.name);
    if (isNameExist && isNumberExist) {
      toast.error(
        `Ooops, contact with name ${contact.name} and number ${contact.number} is already in your phonebook`
      );
      return (isContactExist = true);
    }
    if (isNameExist) {
      toast.error(
        `Ooops, contact with name ${contact.name} is already in your phonebook`
      );
      return (isContactExist = true);
    }
    if (isNumberExist) {
      toast.error(
        `Ooops, contact with number ${contact.number} is already in your phonebook`
      );

      return (isContactExist = true);
    }

    return isContactExist;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const createdContact = { name, number };
    let isExist = checkContactInBook(createdContact);
    if (isExist) return;
    const newContact = {
      ...createdContact,
    };
    dispatch(contactsOperations.addContact(newContact));
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
