import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'components';
import { getContacts } from 'redux/selectors';
import * as Notifications from 'utils/notifications';
import './ContactEditor.css';

export const ContactEditor = ({ contact, onEditContact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const contacts = useSelector(getContacts);

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
      return Notifications.showFailureNotification();
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

    Notifications.showInfoNotification(isNameExist, isNumberExist, {
      name,
      number,
    });
    if (isNameExist || isNumberExist) return;
    const updatedContact = { updatedName: name, updatedNumber: number };
    onEditContact(updatedContact);
  };

  return (
    <>
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
