import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { IconButton } from 'components/IconButton';
import { EditModal } from 'components/EditModal';
import { toast } from 'react-toastify';



export class Contact extends Component {

    static propTypes = {
      contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            }).isRequired,
            onDeleteContact: PropTypes.func.isRequired,
  };  


  state = {
    isModalOpen: false,
    isContactEdited: false,
    name: '',
    number: '',
  }

  componentDidMount() {
    const { contact: {name, number } } = this.props;
    this.setState({ number: number, name: name });


  }

  componentDidUpdate(_, prevState) {
    
    if (prevState.isContactEdited !== this.state.isContactEdited) {
      const edittedContact = {
        name: this.state.name,
        number: this.state.number
      }
          this.props.onChangeContact(edittedContact);
    }

  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    isModalOpen ? this.setState({ isModalOpen: false }) : this.setState({ isModalOpen: true, isContactEdited:false })
  }

  editContact = ({name, number}) => {
     if (name === this.state.name && number === this.state.number) {
        toast.error(`There are no changes. You didn't change neither contact name or phone number`);
       this.setState({ isModalOpen: false, isContactEdited: true,});
       return;
      } 
    this.setState({ isModalOpen: false, isContactEdited: true, name: name, number: number });
    
    
  }
 
  render() {
    const { contact: {id}, onDeleteContact} = this.props;
    const { isModalOpen, name, number } = this.state;
    console.log('name in CONTACT', name);
    console.log('number in CONTACT', number);
    return (
      <>
        <EditModal
          isOpen={isModalOpen}
          onClose={this.toggleModal}
          onEditContact={this.editContact}
          contactName={name}
          contactNumber={number}
        />
          {renderIcons('contact', iconSize.md)}
          <span className={css.contact__name}>{name}: </span>
          <span className={css.contact__number}>{number}</span>
          <IconButton
            onClick={this.toggleModal}
            aria-label = "Edit Contact"
          >
            {renderIcons('edit', iconSize.sm)}
         </IconButton>
        
          <IconButton
            onClick={() => onDeleteContact(id)}
            aria-label = "Delete contact"
          >
            {renderIcons('delete', iconSize.sm)}
          </IconButton>
      </>
      
    )
    }
  }
  