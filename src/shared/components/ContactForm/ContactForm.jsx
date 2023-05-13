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
import { selectContacts, fetchContacts } from 'redux/contacts';

import {
  validateContactData,
  validateName,
  checkContactUpdateSpecialCases,
  getContactNewData,
} from 'utils';
import { showErrorMessage } from 'utils/notifications';
import { OPERATION, CONTACT_ACTIONS, ROUTES } from 'constants';
import { addContact, updateContact } from 'redux/contacts';

export const ContactForm = ({ contact, action, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState(null);
  const [numberError, setNumberError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contact]);

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
  }, [allContacts, dispatch]);

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

  const handleContactFormSubmit = async ({
    e,
    action,
    contact = { name: '', number: '' },
  }) => {
    e.preventDefault();
    try {
      const isContactDataValid = await validateContactData({ name, number });
      if (!isContactDataValid) return;
      const { createdContactData, updatedContact } = getContactNewData({
        name,
        number,
        allContacts,
        contact,
      });
      if (!createdContactData) return;

      let result;
      if (action === OPERATION.EDIT) {
        const specialCase = checkContactUpdateSpecialCases({
          contact,
          updatedContact,
        });
        if (specialCase === 'bothNameAndNumberChange') return;
        if (specialCase === 'bothNameAndNumberChange') {
          return navigate(`${ROUTES.ROOT + ROUTES.CONTACTS}`);
        }
        result = await dispatch(updateContact(updatedContact));
        onSubmit(contact, updatedContact);
      } else {
        result = await dispatch(addContact(createdContactData));
        onSubmit(createdContactData);
        reset();
      }

      if (result.error) return showErrorMessage();
    } catch (error) {
      showErrorMessage();
    }
  };

  const handleAddContact = async e => {
    await handleContactFormSubmit({ e, action: OPERATION.ADD });
  };

  const handleEditContact = async e => {
    await handleContactFormSubmit({ e, action: OPERATION.EDIT, contact });
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
