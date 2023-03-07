import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form } from 'components/Form';
import { toast } from 'react-toastify';
import './ContactEditor.css';


export const ContactEditor = ({contactName, contactNumber, operationType, onEditContact }) => {

  
  const [name, setName] = useState(contactName ?? '');
  const [number, setNumber] = useState(contactNumber ?? '');


  const handleChange = ({ target: { name, value } }) =>{
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
    if (contactName !== name && contactNumber !== number) {
      return toast.error(`You cannot change both name and number. To make full change, delete this contact and create new with correct info.`);
     
    }
    const сontactsInBook = JSON.parse(localStorage.getItem('contacts'));
    const filteredContactsByName = сontactsInBook.filter(contact => contact.name !== contactName);
    const isNameExist = filteredContactsByName.some(contact => contact.name === name);

    const filteredContactsByNumber = сontactsInBook.filter(contact => contact.number !== contactNumber);
    const isNumberExist = filteredContactsByNumber.some(contact => contact.number === number);
    
    if (isNameExist) {
      return toast.info(`Contact with name ${name} is already exist. Please, write another name `);
   }
    if (isNumberExist) {
      return toast.info(`Contact with number ${number} is already exist. Please, check number and write correct`);
    }
    const updatedContact = { name, number }
    console.log('Updated contact from ContactEditor goes to func onEditContact()', updatedContact);
    onEditContact(updatedContact);

  }


    return (
      <>
        <h3 className="editForm__title">Contact Editor</h3>
        <div className="editForm__info">
          <p>You try to edit contact with</p>
          <p className='contact__info' >
            <span className='contact__category'>Name:</span>
            <span><b>{contactName}</b></span>
          </p>
          <p className='contact__info' >
            <span className='contact__category'>Number:</span>
            <span><b>{contactNumber}</b></span>
          </p>

                    
        </div>
        <div className='editForm__instrc '>
        <p className="editForm__text">It is allowed change only <b> name</b> OR <b>number</b></p>
        <p className="editForm__text">If you want to change  <b> both name AND number</b>, please delete this contact and create new with correct info</p>
        </div>
        <Form
        name ={name}
        number ={number}
        operationType={operationType}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      </>
      
    );


} 


ContactEditor.propTypes = {
    onEditContact: PropTypes.func.isRequired,
    contactName: PropTypes.string.isRequired,            
    contactNumber: PropTypes.string.isRequired,
    operationType: PropTypes.string.isRequired,
  };  
 