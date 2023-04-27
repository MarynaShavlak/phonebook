import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { selectContacts } from 'redux/contacts/selectors';
import {
  fetchContacts,
  addContact,
  updateContact,
} from 'redux/contacts/contactsOperations';
import {
  Notifications,
  // removeExtraWhitespace,
  // checkForDuplicateContact,
  CONTACT_NAME_VALIDATION_SCHEMA,
  validateContactData,
  checkContactUpdateSpecialCases,
  getExclusiveContact,
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
import { useNavigate } from 'react-router-dom';
// import { showContactExistWarn } from 'utils/notifications';

const add = 'add';
const update = 'update';

export const ContactForm = ({ contact, action, onEdit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState(null);
  const [numberError, setNumberError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      setName(contact.name);
    }
  }, [contact]);

  useEffect(() => {
    if (contact) {
      setNumber(contact.number);
    }
  }, [contact]);

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

  const handleContact = async ({
    e,
    action,
    contact = { name: '', number: '' },
  }) => {
    console.log('action: ', action);
    e.preventDefault();
    const isContactDataValid = await validateContactData({ name, number });
    if (!isContactDataValid) return;
    if (action === 'update') {
      const specialCase = checkContactUpdateSpecialCases({
        contact,
        name,
        number,
      });
      if (specialCase === 'both') return;
      if (specialCase === 'none') return navigate('/contacts');
    }
    const createdContact = getExclusiveContact({
      name,
      number,
      contacts,
      contact,
    });

    if (!createdContact) return;
    const editedContact = { ...contact, ...createdContact };
    const result =
      action === 'update'
        ? await dispatch(updateContact(editedContact))
        : await dispatch(addContact(createdContact));
    if (result.error) {
      return Notifications.showErrorMessage();
    }
    if (action === 'update') {
      Notifications.showEditContactSuccess(contact, createdContact);
      navigate('/contacts');
    } else {
      Notifications.showContactSuccess('add', createdContact);
      reset();
    }
  };

  // const handleAddContact = async e => {
  //   e.preventDefault();
  //   const isContactDataValid = await validateContactData({ name, number });
  //   if (!isContactDataValid) return;

  //   const createdContact = getExclusiveContact({ name, number, contacts });
  //   if (!createdContact) return;
  //   const result = await dispatch(addContact(createdContact));
  //   if (result.error) {
  //     return Notifications.showErrorMessage();
  //   }
  //   Notifications.showContactSuccess('add', createdContact);
  //   reset();
  // };

  // const handleEditContact = async e => {
  //   e.preventDefault();
  //   const isContactDataValid = await validateContactData({ name, number });
  //   if (!isContactDataValid) return;

  //   const specialCase = checkContactUpdateSpecialCases({
  //     contact,
  //     name,
  //     number,
  //   });
  //   if (specialCase === 'both') return;
  //   if (specialCase === 'none') return navigate('/contacts');
  //   const createdContact = getExclusiveContact({
  //     name,
  //     number,
  //     contacts,
  //     contact,
  //   });

  //   if (!createdContact) return;
  //   const editedContact = { ...contact, ...createdContact };
  //   const result = await dispatch(updateContact(editedContact));
  //   if (result.error) {
  //     return Notifications.showErrorMessage();
  //   }
  //   Notifications.showEditContactSuccess(contact, createdContact);
  //   navigate('/contacts');
  // };

  const handleAddContact = async e => {
    await handleContact({ e, action: add });
  };

  const handleEditContact = async e => {
    await handleContact({ e, action: update, contact });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form
      onSubmit={
        action === 'Add new contact' ? handleAddContact : handleEditContact
      }
    >
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
      <OperationButton>{action}</OperationButton>
    </Form>
  );
};
