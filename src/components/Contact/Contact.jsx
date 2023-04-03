import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { clsx } from 'clsx';
import { useHoverEffects, useModal } from 'hooks';
import {
  OperationModal,
  AddContactToGroupModal,
  CheckboxWithStarIcon,
  HighlightContactDetails,
  DropdownMenu,
} from 'components';
import { renderIcons, getCurrentTime, Notifications } from 'utils';
import { CONTACT_ACTIONS, OPERATION_TYPES, iconSize } from 'constants';
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
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ContactEl } from './Contact.styled';
import { DropdownButton } from 'components/DropdownMenu/DropdownMenu.styled';

export const Contact = ({ contact }) => {
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const contacts = useSelector(selectRecycleBinContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  // console.log(`${contact.name} : ${contact.id}`);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(
    favoriteContacts.some(el => el.id === contact.id)
  );
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(
    OPERATION_TYPES.REMOVE
  );
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION_TYPES.ADD);
  const { isHovered, toggleHoverEffect } = useHoverEffects([
    OPERATION_TYPES.REMOVE,
    OPERATION_TYPES.EDIT,
  ]);

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

    if (isFavorite) {
      dispatch(removeContactFromFavorites(contact.id));
    }

    const groupNames = findGroupsForContact({ contact, groups });

    groupNames.forEach(groupName => {
      dispatch(deleteContactFromGroup({ group: groupName, contact }));
    });
  };

  const findGroupsForContact = useMemo(() => {
    return ({ contact, groups }) => {
      return groups
        .filter(group => group.contacts.some(c => c.id === contact.id))
        .flatMap(group => group.name);
    };
  }, []);

  return (
    <>
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
                <Link to={`/edit-contact/${contact.id}`}>
                  <DropdownButton
                    ariaLabel={CONTACT_ACTIONS.EDIT}
                    onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
                    onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
                  >
                    {renderIcons(OPERATION_TYPES.EDIT, iconSize.sm)}Edit
                  </DropdownButton>
                </Link>
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
