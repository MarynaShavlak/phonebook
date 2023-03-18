import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Form } from 'components/Form';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/selectors';
import { setContact, resetContact } from 'redux/editContactSlice';
import './ContactEditor.css';

export const ContactEditor = ({ contact, onEditContact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContact(contact));
  }, [dispatch, contact]);

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

  const handleSubmit = e => {
    e.preventDefault();
    if (contact.name !== name && contact.number !== number) {
      return toast.error(
        `You cannot change both name and number. To make full change, delete this contact and create new with correct info.`
      );
    }
    const filteredContactsByName = contacts.filter(
      el => el.name !== contact.name
    );
    const isNameExist = filteredContactsByName.some(el => el.name === name);

    const filteredContactsByNumber = contacts.filter(
      el => el.number !== contact.number
    );
    const isNumberExist = filteredContactsByNumber.some(
      el => el.number === number
    );

    if (isNameExist) {
      return toast.info(
        `Contact with name ${name} is already exist. Please, write another name `
      );
    }
    if (isNumberExist) {
      return toast.info(
        `Contact with number ${number} is already exist. Please, check number and write correct`
      );
    }
    const updatedContact = { updatedName: name, updatedNumber: number };
    onEditContact(updatedContact);
    dispatch(resetContact());
  };

  return (
    <>
      <h3 className="editForm__title">Contact Editor</h3>
      <div className="editForm__info">
        <p>You try to edit contact with</p>
        <p className="contact__info">
          <span className="contact__category">Name:</span>
          <span>
            <b>{contact.name}</b>
          </span>
        </p>
        <p className="contact__info">
          <span className="contact__category">Number:</span>
          <span>
            <b>{contact.number}</b>
          </span>
        </p>
      </div>
      <div className="editForm__instrc ">
        <p className="editForm__text">
          It is allowed change only <b> name</b> OR <b>number</b>
        </p>
        <p className="editForm__text">
          If you want to change <b> both name AND number</b>, please delete this
          contact and create new with correct info
        </p>
      </div>
      <Form
        name={name}
        number={number}
        operationType="Edit contact"
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
};

ContactEditor.propTypes = {
  onEditContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
