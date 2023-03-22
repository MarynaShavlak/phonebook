import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'utils/hoverStyles.module.css';
import Avatar from 'react-avatar';
import {
  IconButton,
  ConfirmDeleteModal,
  ConfirmRestoreModal,
} from 'components';
import {
  ContactEl,
  Name,
  Number,
  ContactButtons,
} from 'components/Contact/Contact.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

import { addClassForHoverEffect } from 'utils/addClassForHoverEffect';
import * as Notifications from 'utils/notifications';

import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contactsOperations';

export const DeletedContact = ({ contact }) => {
  const [isConfirmRestoreModalOpen, setIsConfirmRestoreModalOpen] =
    useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(false);
  const [isRestoreBtnHovered, setIsRestoreBtnHovered] = useState(false);
  const dispatch = useDispatch();

  const toggleRestoreModal = () =>
    setIsConfirmRestoreModalOpen(!isConfirmRestoreModalOpen);
  const toggleDeleteModal = () =>
    setIsConfirmDeleteModalOpen(!isConfirmDeleteModalOpen);
  const toggleDeleteBtnHoverEffect = () =>
    setIsDeleteBtnHovered(!isDeleteBtnHovered);

  const toggleRestoreBtnHoverEffect = () =>
    setIsRestoreBtnHovered(!isRestoreBtnHovered);

  const restoreContact = updatedContact => {
    setIsConfirmRestoreModalOpen(false);
    // dispatch(contactsOperations.updateContact(RestoretedContact));
  };

  const contactClass =
    isDeleteBtnHovered || isRestoreBtnHovered
      ? addClassForHoverEffect({
          basicClass: '',
          isDeleteBtnHovered,
          isRestoreBtnHovered,
        })
      : '';

  return (
    <>
      {isConfirmRestoreModalOpen && (
        <ConfirmRestoreModal
          isOpen={isConfirmRestoreModalOpen}
          onClose={toggleRestoreModal}
          contact={contact}
        />
      )}
      {isConfirmDeleteModalOpen && (
        <ConfirmDeleteModal
          isOpen={isConfirmDeleteModalOpen}
          onClose={toggleDeleteModal}
          contact={contact}
        />
      )}

      <ContactEl className={contactClass}>
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <Name>{contact.name}:</Name>
        <Number>{contact.number}</Number>
      </ContactEl>
      <ContactButtons>
        <IconButton
          onClick={toggleRestoreModal}
          aria-label="Restore Contact"
          onMouseEnter={toggleRestoreBtnHoverEffect}
          onMouseLeave={toggleRestoreBtnHoverEffect}
        >
          {renderIcons('restore', iconSize.sm)}
        </IconButton>
        <IconButton
          onClick={toggleDeleteModal}
          onMouseEnter={toggleDeleteBtnHoverEffect}
          onMouseLeave={toggleDeleteBtnHoverEffect}
          aria-label="Delete contact"
        >
          {renderIcons('delete', iconSize.sm)}
        </IconButton>
      </ContactButtons>
    </>
  );
};

DeletedContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
