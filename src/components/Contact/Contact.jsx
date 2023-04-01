import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { clsx } from 'clsx';
import { renderIcons, getCurrentTime, Notifications } from 'utils';
import { useHoverEffects, useModal } from 'hooks';
import { CONTACT_ACTIONS, OPERATION_TYPES, iconSize } from 'constants';
import {
  EditContactModal,
  OperationModal,
  AddContactToGroupModal,
  CheckboxWithStarIcon,
  HighlightContactDetails,
  DropdownMenu,
} from 'components';
import { ContactEl, DropdownButton } from './Contact.styled';

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
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(
    OPERATION_TYPES.REMOVE
  );
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION_TYPES.ADD);

  const { isHovered, toggleHoverEffect } = useHoverEffects([
    OPERATION_TYPES.REMOVE,
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
    Notifications.showContactSuccess(OPERATION_TYPES.REMOVE, contact);
    const removalContactTime = getCurrentTime();
    dispatch(addContactToRecycleBin({ ...contact, removalContactTime }));
  };

  const addContactToGroup = groups => {
    Notifications.showContactSuccess('addToGroup', contact, groups.join(', '));
  };

  return (
    <>
      {isEditModalOpen && (
        <EditContactModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          onEditContact={editContact}
          data={contact}
        />
      )}
      {isRemoveModalOpen && (
        <OperationModal
          isOpen={isRemoveModalOpen}
          onClose={toggleRemoveModal}
          data={contact}
          onConfirm={removeContactToRecycleBin}
          action={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
        />
      )}
      {isAddModalOpen && (
        <AddContactToGroupModal
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          contact={contact}
          onConfirm={addContactToGroup}
          action={CONTACT_ACTIONS.ADD_TO_GROUP}
        />
      )}

      <ContactEl
        className={clsx({
          toRemove: isHovered.remove,
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
      <CheckboxWithStarIcon checked={isFavorite} onChange={toggleFavorite} />
      <DropdownMenu
        elements={[
          {
            label: OPERATION_TYPES.EDIT,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={CONTACT_ACTIONS.EDIT}
                  onClick={toggleEditModal}
                  onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
                  onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
                >
                  {renderIcons(OPERATION_TYPES.EDIT, iconSize.sm)}Edit
                </DropdownButton>
              </>
            ),
          },
          {
            label: OPERATION_TYPES.REMOVE,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
                  onClick={toggleRemoveModal}
                  onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.REMOVE)}
                  onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.REMOVE)}
                >
                  {renderIcons(OPERATION_TYPES.REMOVE, iconSize.sm)}Remove to
                  recycle bin
                </DropdownButton>
              </>
            ),
          },
          {
            label: OPERATION_TYPES.ADD,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={CONTACT_ACTIONS.ADD_TO_GROUP}
                  onClick={toggleAddModal}
                  onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.ADD)}
                  onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.ADD)}
                >
                  {renderIcons('group', iconSize.sm)}Add to group
                </DropdownButton>
              </>
            ),
          },
        ]}
      />
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
