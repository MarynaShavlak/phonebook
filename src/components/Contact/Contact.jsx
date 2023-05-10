import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useModal, useSelectedContact } from 'hooks';
import {
  ConfirmationModal,
  AddContactToGroupModal,
  FavoriteButton,
  HighlightContactDetails,
  DropdownMenu,
} from 'components';
import { ContactAvatar } from 'shared';
import { selectRecycleBinContacts } from 'redux/recycleBin';
import { selectFilterByName, selectFilterByNumber } from 'redux/filters';
import { selectFavoritesContacts } from 'redux/favorites';
import { selectGroups } from 'redux/groups';
import { ContactEl } from './Contact.styled';
import {
  renderDropdownElement,
  checkIfInRecycleBin,
  addContactToRecycleBinWithRemovalTime,
  deleteContactAndCheckError,
  removeContactFromFavoritesIfNeeded,
  isContactInFavorites,
  removeContactFromGroups,
  addToFavorites,
  removeFromFavorites,
} from 'utils';
import { CONTACT_ACTIONS, OPERATION, ROUTES } from 'constants';
import { showContactSuccess, showRecyclebinWarn } from 'utils/notifications';

export const Contact = ({
  contact,
  isMultiSelectOpen,
  selectedContacts,
  updateSelectedContacts,
}) => {
  const { id, name } = contact;
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState();
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(OPERATION.REMOVE);
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION.ADD);
  const [isSelected, toggleIsSelected] = useSelectedContact(
    selectedContacts,
    contact,
    updateSelectedContacts
  );

  useEffect(() => {
    setIsFavorite(isContactInFavorites(contact, favoriteContacts));
  }, [favoriteContacts, contact]);

  const moveContactToRecycleBin = async () => {
    if (
      !(await deleteContactAndCheckError({
        contactId: id,
        dispatch,
        toggleRemoveModal,
      }))
    )
      return;
    if (checkIfInRecycleBin(contact, deletedContacts)) {
      showRecyclebinWarn(contact);
      return;
    }
    addContactToRecycleBinWithRemovalTime(contact, dispatch);
    removeContactFromFavoritesIfNeeded({ contact, isFavorite, dispatch });
    removeContactFromGroups({ contact, groups, dispatch });
    showContactSuccess(CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN, contact);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    return isFavorite
      ? removeFromFavorites({ contact, dispatch })
      : addToFavorites({ contact, dispatch });
  };
  return (
    <>
      <ContactEl>
        <ContactAvatar
          isMultiSelectOpen={isMultiSelectOpen}
          isSelected={isSelected}
          toggleIsSelected={toggleIsSelected}
          name={name}
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
  isMultiSelectOpen: PropTypes.bool,
  selectedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  updateSelectedContacts: PropTypes.func.isRequired,
};
