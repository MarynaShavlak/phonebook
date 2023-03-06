import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Form
} from 'components/Form';

export const ContactForm = ({ onSubmit, operationType }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
       case 'number':
        setNumber(value);
        break;
      default:
        return console.warn(`Type of field with name ${name} is not found`)
      
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, number };
    const isContactAdded = onSubmit(newContact);

    if (isContactAdded  === true) {
       reset();
    }
    
  }


  const reset = () => {
      setName('');
      setNumber('');
}

    return (
      <Form
        name ={name}
        number ={number}
        operationType={operationType}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    );


} 

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  operationType: PropTypes.string.isRequired,
}