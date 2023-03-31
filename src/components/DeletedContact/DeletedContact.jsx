import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { IconButton, ContactOperationModal } from 'components';
import {
  ContactEl,
  Name,
  Number,
  ControlButtons,
  Time,
} from 'components/Contact/Contact.styled';
import { renderIcons, Notifications } from 'utils';
import { iconSize, ContactActions } from 'constants';
import { removeContactFromRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { addContact } from 'redux/contacts/contactsOperations';

import { selectContacts } from 'redux/contacts/selectors';

export const DeletedContact = ({ contact }) => {
  const [isConfirmRestoreModalOpen, setIsConfirmRestoreModalOpen] =
    useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(false);
  const [isRestoreBtnHovered, setIsRestoreBtnHovered] = useState(false);

  const toggleRestoreModal = () =>
    setIsConfirmRestoreModalOpen(!isConfirmRestoreModalOpen);

  const toggleDeleteModal = () =>
    setIsConfirmDeleteModalOpen(!isConfirmDeleteModalOpen);

  const toggleDeleteBtnHoverEffect = () =>
    setIsDeleteBtnHovered(!isDeleteBtnHovered);

  const toggleRestoreBtnHoverEffect = () =>
    setIsRestoreBtnHovered(!isRestoreBtnHovered);
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showRecyclebinInfo(contact);
  };
  const contacts = useSelector(selectContacts);
  const checkContactInBook = contact => {
    const isNumberExist = contacts.some(el => el.number === contact.number);
    const isNameExist = contacts.some(el => el.name === contact.name);

    if (isNameExist || isNumberExist) {
      Notifications.showContactWarn(isNameExist, isNumberExist, contact);
      return true;
    }

    return false;
  };
  const restoreContact = () => {
    if (checkContactInBook(contact)) return;
    dispatch(addContact(contact));
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showContactSuccess('restore', contact);
  };

  return (
    <>
      {isConfirmRestoreModalOpen && (
        <ContactOperationModal
          isOpen={isConfirmRestoreModalOpen}
          onClose={toggleRestoreModal}
          contact={contact}
          onConfirm={restoreContact}
          action={ContactActions.RESTORE}
        />
      )}
      {isConfirmDeleteModalOpen && (
        <ContactOperationModal
          isOpen={isConfirmDeleteModalOpen}
          onClose={toggleDeleteModal}
          contact={contact}
          onConfirm={deleteContact}
          action={ContactActions.DELETE}
        />
      )}

      <ContactEl>
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <Name>{contact.name}:</Name>
        <Number>{contact.number}</Number>
      </ContactEl>
      <Time>
        deleted at <b>{contact.removalContactTime}</b>
      </Time>

      <ControlButtons>
        <IconButton
          onClick={toggleRestoreModal}
          aria-label={ContactActions.RESTORE}
          onMouseEnter={toggleRestoreBtnHoverEffect}
          onMouseLeave={toggleRestoreBtnHoverEffect}
        >
          {renderIcons('restore', iconSize.sm)}
        </IconButton>
        <IconButton
          onClick={toggleDeleteModal}
          onMouseEnter={toggleDeleteBtnHoverEffect}
          onMouseLeave={toggleDeleteBtnHoverEffect}
          aria-label={ContactActions.DELETE}
        >
          {renderIcons('delete', iconSize.sm)}
        </IconButton>
      </ControlButtons>
    </>
  );
};

DeletedContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removalContactTime: PropTypes.string.isRequired,
  }).isRequired,
};
