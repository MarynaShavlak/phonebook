import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form } from 'components/Form';
import { toast } from 'react-toastify';
import './ContactEditor.css';


export class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
  }
  

  componentDidMount() {
    const { contactName, contactNumber } = this.props;
    console.log('name in ContactEDitor', contactName);
    console.log('number in ContactEDitor', contactNumber);
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    
    this.setState({ number: contactNumber, name: contactName, contacts: parsedContacts });
  }


  handleChange = ({ target: { name, value } }) =>{
    this.setState({
      [name]: value,
    });
}

  handleSubmit = (e) => {
    e.preventDefault();
    const { contactName, contactNumber } = this.props;
    const { contacts } = this.state;
    if (contactName !== this.state.name && contactNumber !== this.state.number) {
      return toast.error(`You cannot change both name and number. To make full change, delete this contact and create new with correct info.`);
     
    }

    const filteredContactsByName = contacts.filter(contact => contact.name !== contactName);
    const isNameExist = filteredContactsByName.some(contact => contact.name === this.state.name);

    const filteredContactsByNumber = contacts.filter(contact => contact.number !== contactNumber);
    const isNumberExist = filteredContactsByNumber.some(contact => contact.number === this.state.number);
    
    if (isNameExist) {
      return toast.info(`Contact with name ${this.state.name} is already exist. Please, write another name `);
   }
    if (isNumberExist) {
      return toast.info(`Contact with number ${this.state.number} is already exist. Please, check number and write correct`);
    }

    this.props.onEditContact(this.state);

  }

  render() {
    const { name, number } = this.state;
    const { operationType } = this.props;

    return (
      <>
        <h3 className="editForm__title">Contact Editor</h3>
        <div className="editForm__info">
          <p>You try to edit contact with</p>
          <p className='contact__info' >
            <span className='contact__category'>Name:</span>
            <span><b>{this.props.contactName}</b></span>
          </p>
          <p className='contact__info' >
            <span className='contact__category'>Number:</span>
            <span><b>{this.props.contactNumber}</b></span>
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
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
      </>
      
    );

}
} 


ContactEditor.propTypes = {
    onEditContact: PropTypes.func.isRequired,
    contactName: PropTypes.string.isRequired,            
    contactNumber: PropTypes.string.isRequired,
    operationType: PropTypes.string.isRequired,
  };  
 