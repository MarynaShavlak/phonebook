import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContacts, addContact } from 'redux/contacts/contactsOperations';
import {
  Notifications,
  removeExtraWhitespace,
  isExistByNumber,
  isExistByName,
} from 'utils';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  function handleChange(e) {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const normalizedContactName = removeExtraWhitespace(name);
    const createdContact = { name: normalizedContactName, number };

    const isNameExist = isExistByName({
      newName: normalizedContactName,
      contacts,
    });
    const isNumberExist = isExistByNumber({ newNumber: number, contacts });

    const isDuplicate = isNameExist || isNumberExist;

    if (isDuplicate) {
      return Notifications.showContactExistWarn({
        isNameExist,
        isNumberExist,
        contact: createdContact,
      });
    }
    dispatch(addContact(createdContact));
    Notifications.showContactSuccess('add', createdContact);
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

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
