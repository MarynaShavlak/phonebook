import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'utils/hoverStyles.module.css';
import Avatar from 'react-avatar';
import Highlighter from 'react-highlight-words';
import {
  IconButton,
  EditModal,
  ConfirmRemoveToRecycleBinModal,
} from 'components';
import { ContactEl, ContactName, ContactButtons } from './Contact.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { addClassForHoverEffect } from 'utils/addClassForHoverEffect';
import * as Notifications from 'utils/notifications';

import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contactsOperations';
import { getFilterByName, getFilterByNumber } from 'redux/selectors';

export const Contact = ({ contact }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(false);
  const [isEditBtnHovered, setIsEditBtnHovered] = useState(false);
  const dispatch = useDispatch();
  const filterByName = useSelector(getFilterByName);
  const filterByNumber = useSelector(getFilterByNumber);

  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
  const toggleConfirmModal = () => setIsConfirmModalOpen(!isConfirmModalOpen);
  const toggleDeleteBtnHoverEffect = () =>
    setIsDeleteBtnHovered(!isDeleteBtnHovered);

  const toggleEditBtnHoverEffect = () => setIsEditBtnHovered(!isEditBtnHovered);

  const editContact = updatedContact => {
    setIsEditModalOpen(false);
    const { updatedName, updatedNumber } = updatedContact;

    if (updatedName === contact.name && updatedNumber === contact.number) {
      return Notifications.showWarnNotification();
    }

    const edittedContact = {
      id: contact.id,
      name: updatedName,
      number: updatedNumber,
    };
    dispatch(contactsOperations.updateContact(edittedContact));
  };

  const contactClass =
    isDeleteBtnHovered || isEditBtnHovered
      ? addClassForHoverEffect({
          basicClass: '',
          isDeleteBtnHovered,
          isEditBtnHovered,
        })
      : '';

  const highlighClass =
    isDeleteBtnHovered || isEditBtnHovered
      ? addClassForHoverEffect({
          basicClass: css.hightlightByFilterValue,
          isDeleteBtnHovered,
          isEditBtnHovered,
        })
      : css.hightlightByFilterValue;
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
        <ConfirmRemoveToRecycleBinModal
          isOpen={isConfirmModalOpen}
          onClose={toggleConfirmModal}
          contact={contact}
        />
      )}

      <ContactEl className={contactClass}>
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <ContactName
          highlightClassName={highlighClass}
          searchWords={[`${filterByName}`]}
          autoEscape={true}
          textToHighlight={`${contact.name}:`}
        />
        <Highlighter
          highlightClassName={highlighClass}
          searchWords={[`${filterByNumber}`]}
          autoEscape={true}
          textToHighlight={` ${contact.number}`}
        />
      </ContactEl>
      <ContactButtons>
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
      </ContactButtons>
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
