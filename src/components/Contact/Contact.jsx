import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Contact.module.css';
import { toast } from 'react-toastify';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { IconButton } from 'components/IconButton';
import { EditModal } from 'components/EditModal';
import { ConfirmModal } from 'components/ConfirmModal';
import { updateContactList } from 'redux/contactListSlice';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(false);
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

  const toggleEditModal = () => {
    if (isEditModalOpen) {
      setIsEditModalOpen(false);
    } else {
      setIsEditModalOpen(true);
      setIsContactEdited(false);
    }
  };
  const toggleConfirmModal = () => {
    if (isConfirmModalOpen) {
      setIsConfirmModalOpen(false);
    } else {
      setIsConfirmModalOpen(true);
    }
  };

  const toggleDeleteBtnHoverEffect = () =>
    setIsDeleteBtnHovered(!isDeleteBtnHovered);

  const editContact = ({ updatedName, updatedNumber }) => {
    if (updatedName === name && updatedNumber === number) {
      toast.error(
        `There are no changes. You didn't change either contact name or phone number`
      );

      setIsEditModalOpen(false);
      setIsContactEdited(true);
      return;
    }

    setIsEditModalOpen(false);
    setIsContactEdited(true);
    setName(updatedName);
    setNumber(updatedNumber);
  };
  const deleteClass = [css.contact, css.toDelete].join(' ');
  return (
    <>
      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          onEditContact={editContact}
          contact={contact}
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={toggleConfirmModal}
          contact={contact}
        />
      )}

      <p className={isDeleteBtnHovered ? deleteClass : css.contact}>
        {renderIcons('contact', iconSize.md)}
        <span className={css.contact__name}>{contact.name}: </span>
        <span className={css.contact__number}>{contact.number}</span>
      </p>
      <p className={css.contact__buttons}>
        <IconButton onClick={toggleEditModal} aria-label="Edit Contact">
          {renderIcons('edit', iconSize.sm)}
        </IconButton>
        <IconButton
          onClick={toggleConfirmModal}
          onMouseEnter={toggleDeleteBtnHoverEffect}
          onMouseLeave={toggleDeleteBtnHoverEffect}
          aria-label="Delete contact"
        >
          {renderIcons('delete', iconSize.sm)}
        </IconButton>
      </p>
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
