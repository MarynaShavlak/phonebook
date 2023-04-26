import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContacts, addContact } from 'redux/contacts/contactsOperations';
import {
  Notifications,
  removeExtraWhitespace,
  checkForDuplicateContact,
  CONTACT_NAME_VALIDATION_SCHEMA,
} from 'utils';
import {
  Form,
  FormItem,
  FormList,
  Phone,
  Name,
  Error,
} from './ContactForm.styled';
import { OperationButton } from 'components';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState(null);
  const [numberError, setNumberError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const handleNameChange = async e => {
    const { value } = e.target;
    const errorMessage = await validateName(value);
    setName(value);
    setNameError(errorMessage);
  };

  const validateName = async name => {
    try {
      await CONTACT_NAME_VALIDATION_SCHEMA.validate({ name });
      return null;
    } catch (error) {
      return error.message;
    }
  };

  const handleNumberChange = value => {
    if (value === undefined) {
      setNumber('');
    } else if (!isValidPhoneNumber(value)) {
      setNumberError('Invalid phone number. Check number length');
    } else {
      setNumberError(null);
    }
    setNumber(value);
  };

  const handleAddContact = async e => {
    e.preventDefault();
    const normalizedContactName = removeExtraWhitespace(name);
    if (!normalizedContactName.length && !isValidPhoneNumber(number)) {
      return Notifications.showAddContactError();
    }
    if (!normalizedContactName.length) {
      return Notifications.showNewContactNameError();
    }
    if (!isValidPhoneNumber(number)) {
      return Notifications.showNewContactNumberError();
    }

    const createdContact = { name: normalizedContactName, number };
    const { isDuplicate, isNameExist, isNumberExist } =
      checkForDuplicateContact(createdContact, contacts);

    if (isDuplicate) {
      return Notifications.showContactExistWarn({
        isNameExist,
        isNumberExist,
        contact: createdContact,
      });
    }
    const result = await dispatch(addContact(createdContact));

    if (result.error) {
      return Notifications.showErrorMessage();
    }
    Notifications.showContactSuccess('add', createdContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FormList>
        <FormItem>
          <label>Name</label>
          <Name
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
          />
          {nameError && <Error>{nameError}</Error>}
        </FormItem>
        <FormItem>
          <label>Number</label>
          <Phone
            international
            countryCallingCodeEditable={false}
            placeholder="Enter phone number"
            defaultCountry="UA"
            value={number}
            onChange={handleNumberChange}
          />
          {numberError && <Error>{numberError}</Error>}
        </FormItem>
      </FormList>
      <OperationButton>Add new contact</OperationButton>
    </Form>
  );
};
