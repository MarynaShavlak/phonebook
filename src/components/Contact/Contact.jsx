import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Contact.module.css';
import { toast } from 'react-toastify';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { IconButton } from 'components/IconButton';
import { EditModal } from 'components/EditModal';
import { deleteContact, updateContactList } from 'redux/contactListSlice';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactEdited, setIsContactEdited] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isContactEdited) {
      const edittedContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      dispatch(updateContactList(edittedContact));
    }
  }, [name, number, isContactEdited, dispatch]);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
      setIsContactEdited(false);
    }
  };

  const editContact = ({ updatedName, updatedNumber }) => {
    if (updatedName === name && updatedNumber === number) {
      toast.error(
        `There are no changes. You didn't change either contact name or phone number`
      );

      setIsModalOpen(false);
      setIsContactEdited(true);
      return;
    }

    setIsModalOpen(false);
    setIsContactEdited(true);
    setName(updatedName);
    setNumber(updatedNumber);
  };

  return (
    <>
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          onEditContact={editContact}
          contact={contact}
        />
      )}

      {renderIcons('contact', iconSize.md)}
      <span className={css.contact__name}>{contact.name}: </span>
      <span className={css.contact__number}>{contact.number}</span>
      <IconButton onClick={toggleModal} aria-label="Edit Contact">
        {renderIcons('edit', iconSize.sm)}
      </IconButton>

      <IconButton
        onClick={() => dispatch(deleteContact(contact.id))}
        aria-label="Delete contact"
      >
        {renderIcons('delete', iconSize.sm)}
      </IconButton>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
