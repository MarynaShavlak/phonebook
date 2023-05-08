import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { useModal } from 'hooks';
import {
  ConfirmationModal,
  AddContactToGroupModal,
  FavoriteButton,
  HighlightContactDetails,
  DropdownMenu,
  SelectCheckbox,
} from 'components';

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
import { selectGroups, deleteContactFromGroup } from 'redux/groups';
import { deleteContact } from 'redux/contacts';
import { ContactEl } from './Contact.styled';
import {
  getCurrentTime,
  findGroupsForContact,
  renderDropdownElement,
} from 'utils';
import { CONTACT_ACTIONS, OPERATION, ROUTES } from 'constants';
import {
  showContactSuccess,
  showRecyclebinWarn,
  showErrorMessage,
} from 'utils/notifications';

export const Contact = ({ contact }) => {
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(
    favoriteContacts.some(el => el.id === contact.id)
  );
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(OPERATION.REMOVE);
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION.ADD);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    return isFavorite
      ? (showContactSuccess(CONTACT_ACTIONS.REMOVE_FROM_FAVORITES, contact),
        dispatch(removeContactFromFavorites(contact.id)))
      : (dispatch(addContactToFavorites(contact)),
        showContactSuccess(CONTACT_ACTIONS.ADD_TO_FAVORITES, contact));
  };

  const deleteContactAndCheckError = async contactId => {
    const deleteResult = await dispatch(deleteContact(contactId));
    if (deleteResult.error) {
      showErrorMessage();
      toggleRemoveModal();
      return false;
    }
    return true;
  };

  const checkIfInRecycleBin = (contact, deletedContacts) => {
    return deletedContacts.some(el => el.id === contact.id);
  };

  const addContactToRecycleBinWithRemovalTime = contact => {
    const removalTime = getCurrentTime();
    dispatch(addContactToRecycleBin({ ...contact, removalTime }));
  };

  const removeContactFromFavoritesIfNeeded = (contact, isFavorite) => {
    if (isFavorite) {
      dispatch(removeContactFromFavorites(contact.id));
    }
  };

  const removeContactFromGroups = (contact, groups) => {
    const groupNames = findGroupsForContact(contact, groups);
    groupNames.forEach(groupName => {
      dispatch(deleteContactFromGroup({ group: groupName, contact }));
    });
  };

  const moveContactToRecycleBin = async () => {
    if (!(await deleteContactAndCheckError(contact.id))) return;
    if (checkIfInRecycleBin(contact, deletedContacts)) {
      showRecyclebinWarn(contact);
      return;
    }
    addContactToRecycleBinWithRemovalTime(contact);
    removeContactFromFavoritesIfNeeded(contact, isFavorite);
    removeContactFromGroups(contact, groups);
    showContactSuccess(CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN, contact);
  };

  return (
    <>
      <ContactEl>
        <SelectCheckbox checked={isFavorite} onChange={toggleFavorite} />
        <Avatar
          size="30"
          textSizeRatio={2}
          name={contact.name}
          unstyled={false}
          round="50%"
        />
        <HighlightContactDetails
          contact={contact}
          filterByName={filterByName}
          filterByNumber={filterByNumber}
        />
      </ContactEl>
      <FavoriteButton checked={isFavorite} onChange={toggleFavorite} />
      <DropdownMenu
        elements={[
          {
            label: OPERATION.EDIT,
            icon: (
              <Link
                to={`${
                  ROUTES.ROOT + ROUTES.EDIT_CONTACT + ROUTES.ROOT + contact.id
                }`}
              >
                {renderDropdownElement(CONTACT_ACTIONS.EDIT, OPERATION.EDIT)}
              </Link>
            ),
          },
          {
            label: OPERATION.REMOVE,
            icon: renderDropdownElement(
              CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN,
              OPERATION.REMOVE,
              toggleRemoveModal
            ),
          },
          {
            label: OPERATION.ADD,
            icon: renderDropdownElement(
              CONTACT_ACTIONS.ADD_TO_GROUP,
              OPERATION.ADD,
              toggleAddModal
            ),
          },
        ]}
      />
      {isRemoveModalOpen && (
        <ConfirmationModal
          isOpen={isRemoveModalOpen}
          onClose={toggleRemoveModal}
          data={contact}
          onConfirm={moveContactToRecycleBin}
          action={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
        />
      )}
      {isAddModalOpen && (
        <AddContactToGroupModal
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          contact={contact}
        />
      )}
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
