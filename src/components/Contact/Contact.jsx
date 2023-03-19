import React, { useState } from 'react';
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(false);
  const [isEditBtnHovered, setIsEditBtnHovered] = useState(false);
  const dispatch = useDispatch();

  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
  const toggleConfirmModal = () => setIsConfirmModalOpen(!isConfirmModalOpen);
  const toggleDeleteBtnHoverEffect = () =>
    setIsDeleteBtnHovered(!isDeleteBtnHovered);

  const toggleEditBtnHoverEffect = () => setIsEditBtnHovered(!isEditBtnHovered);

  const editContact = updatedContact => {
    setIsEditModalOpen(false);
    const { updatedName, updatedNumber } = updatedContact;

    if (updatedName === contact.name && updatedNumber === contact.number) {
      return toast.error(
        `There are no changes. You didn't change either contact name or phone number`
      );
    }

    const edittedContact = {
      id: nanoid(),
      name: updatedName,
      number: updatedNumber,
    };
    dispatch(updateContactList(edittedContact));
  };
  const deleteClass = [css.contact, css.toDelete].join(' ');
  const editClass = [css.contact, css.toEdit].join(' ');

  const contactClass = isDeleteBtnHovered
    ? deleteClass
    : isEditBtnHovered
    ? editClass
    : css.contact;
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

      <p className={contactClass}>
        {renderIcons('contact', iconSize.md)}
        <span className={css.contact__name}>{contact.name}: </span>
        <span className={css.contact__number}>{contact.number}</span>
      </p>
      <p className={css.contact__buttons}>
        <IconButton
          onClick={toggleEditModal}
          aria-label="Edit Contact"
          onMouseEnter={toggleEditBtnHoverEffect}
          onMouseLeave={toggleEditBtnHoverEffect}
        >
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
