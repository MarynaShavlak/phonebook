import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { OperationButton } from 'shared';
import {
  Form,
  FormItem,
  FormList,
  Phone,
  Name,
  Error,
} from './ContactForm.styled';
import {
  selectContacts,
  fetchContacts,
  addContact,
  updateContact,
} from 'redux/contacts';
import {
  validateContactData,
  validateName,
  checkContactUpdateSpecialCases,
  getExclusiveContact,
} from 'utils';
import { showErrorMessage } from 'utils/notifications';
import { OPERATION, CONTACT_ACTIONS } from 'constants';

export const ContactForm = ({ contact, action, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState(null);
  const [numberError, setNumberError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
    if (!contacts.length) {
      dispatch(fetchContacts());
    }
  }, [contacts, dispatch]);

  const handleNameChange = async e => {
    const { value } = e.target;
    const errorMessage = await validateName(value);
    setName(value);
    setNameError(errorMessage);
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
    e.preventDefault();
    const isContactDataValid = await validateContactData({ name, number });
    if (!isContactDataValid) return;
    if (action === OPERATION.EDIT) {
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
      action === OPERATION.EDIT
        ? await dispatch(updateContact(editedContact))
        : await dispatch(addContact(createdContact));
    if (result.error) {
      return showErrorMessage();
    }
    if (action === OPERATION.EDIT) {
      onSubmit({ contact, updatedContact: createdContact });
    } else {
      onSubmit(createdContact);
      reset();
    }
  };

  const handleAddContact = async e => {
    await handleContact({ e, action: OPERATION.ADD });
  };

  const handleEditContact = async e => {
    await handleContact({ e, action: OPERATION.EDIT, contact });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form
      onSubmit={
        action === CONTACT_ACTIONS.ADD ? handleAddContact : handleEditContact
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
          />
          {nameError && <Error>{nameError}</Error>}
        </FormItem>
        <FormItem>
          <label>Number</label>
          <Phone
            international
            countryCallingCodeEditable={false}
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

ContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  action: PropTypes.oneOf(['Add new contact', 'Edit contact']),
  onSubmit: PropTypes.func.isRequired,
};
