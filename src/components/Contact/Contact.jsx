import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { clsx } from 'clsx';
import { renderIcons, getCurrentTime, Notifications } from 'utils';
import { useHoverEffects, useModal } from 'hooks';
import { CONTACT_ACTIONS, OPERATION_TYPES } from 'constants';
import {
  EditModal,
  ContactOperationModal,
  CheckboxWithStarIcon,
  HighlightContactDetails,
  IconButton,
} from 'components';
import { ContactEl, ControlButtons } from './Contact.styled';
import {
  addContactToRecycleBin,
  selectRecycleBinContacts,
} from 'redux/recycleBin';
import { selectFilterByName, selectFilterByNumber } from 'redux/filters';
import {
  selectFavoritesContacts,
  addContactToFavorites,
  removeContactFromFavorites,
} from 'redux/favorites';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/contactsOperations';

export const Contact = ({ contact }) => {
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const [isFavorite, setIsFavorite] = useState(
    favoriteContacts.some(el => el.id === contact.id)
  );

  const { isEditModalOpen, toggleEditModal } = useModal(OPERATION_TYPES.EDIT);
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(
    OPERATION_TYPES.DELETE
  );

  const { isHovered, toggleHoverEffect } = useHoverEffects([
    OPERATION_TYPES.DELETE,
    OPERATION_TYPES.EDIT,
  ]);
  const dispatch = useDispatch();
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const contacts = useSelector(selectRecycleBinContacts);

  const editContact = updatedContact => {
    toggleEditModal();
    const { updatedName, updatedNumber } = updatedContact;
    if (updatedName === contact.name && updatedNumber === contact.number) {
      return Notifications.showContactInfo();
    }

    const edittedContact = {
      id: contact.id,
      name: updatedName,
      number: updatedNumber,
    };
    dispatch(updateContact(edittedContact));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    return isFavorite
      ? (Notifications.showContactSuccess('removeFromFavorites', contact),
        dispatch(removeContactFromFavorites(contact.id)))
      : (dispatch(addContactToFavorites(contact)),
        Notifications.showContactSuccess('addToFavorites', contact));
  };

  const removeContactToRecycleBin = () => {
    dispatch(deleteContact(contact.id));
    const isContactExist = contacts.some(el => el.id === contact.id);
    if (isContactExist) {
      Notifications.showRecyclebinWarn(contact);
      return;
    }
    Notifications.showContactSuccess(OPERATION_TYPES.DELETE, contact);
    const removalContactTime = getCurrentTime();
    dispatch(addContactToRecycleBin({ ...contact, removalContactTime }));
  };

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
      {isDeleteModalOpen && (
        <ContactOperationModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          contact={contact}
          onConfirm={removeContactToRecycleBin}
          action={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
        />
      )}

      <ContactEl
        className={clsx({
          toDelete: isHovered.delete,
          toEdit: isHovered.edit,
        })}
      >
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <HighlightContactDetails
          contact={contact}
          filterByName={filterByName}
          filterByNumber={filterByNumber}
          isHovered={isHovered}
        />
      </ContactEl>

      <ControlButtons>
        <IconButton
          onClick={toggleEditModal}
          ariaLabel={CONTACT_ACTIONS.EDIT}
          onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
          onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
        >
          {renderIcons(OPERATION_TYPES.EDIT, 30)}
        </IconButton>
        <IconButton
          onClick={toggleDeleteModal}
          onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.DELETE)}
          onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.DELETE)}
          ariaLabel={CONTACT_ACTIONS.DELETE}
        >
          {renderIcons(OPERATION_TYPES.DELETE, 30)}
        </IconButton>
      </ControlButtons>
      <CheckboxWithStarIcon checked={isFavorite} onChange={toggleFavorite} />
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
