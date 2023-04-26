import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContacts, addContact } from 'redux/contacts/contactsOperations';
import {
  Notifications,
  removeExtraWhitespace,
  isExistByNumber,
  isExistByName,
} from 'utils';
import {
  Form,
  FormItem,
  FormList,
  Phone,
  Name,
  Error,
} from 'components/Form/Form.styled';
import { OperationButton } from 'components';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { showErrorMessage } from 'utils/notifications';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 20 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is required'),
});

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const handleNameChange = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleNumberChange = number => {
    if (number === undefined) {
      setNumber('');
    }
    setNumber(number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedContactName = removeExtraWhitespace(name);
    if (!normalizedContactName.length) {
      return showErrorMessage('Name is required to have at least 2 letters');
    }

    if (!isValidPhoneNumber(number)) {
      return showErrorMessage(
        'Sorry, it looks like the phone number you entered is incorrect. Please, check length and format for your country. '
      );
    }

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
  };

  const handleNameBlur = async () => {
    try {
      await validationSchema.validate({ name });
      setErrors({ name: undefined });
    } catch (error) {
      setErrors({ name: error.message });
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormList>
        <FormItem>
          <label>Name</label>
          <Name
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            required
            error={errors.name}
          />
          {errors.name && <Error>{errors.name}</Error>}
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
            required
          />
        </FormItem>
      </FormList>
      <OperationButton>Add new contact</OperationButton>
    </Form>
  );
};
