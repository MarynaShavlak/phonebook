import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import {
  EditModal,
  RemoveToRecycleBinModal,
  CheckboxWithStarIcon,
  IconButtonWithHoverEffect,
  HighlightContactDetails,
} from 'components';
import { ContactEl, ControlButtons } from './Contact.styled';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import {
  selectFilterByName,
  selectFilterByNumber,
} from 'redux/filters/selectors';
import { selectFavouritesContacts } from 'redux/favourites/selectors';
import {
  addContactToFavourites,
  removeContactFromFavourites,
} from 'redux/favourites/favouritesSlice';
import { Notifications } from 'utils';
import { clsx } from 'clsx';
import { useHoverEffects, useModal } from 'hooks';

export const Contact = ({ contact }) => {
  const favouriteContacts = useSelector(selectFavouritesContacts);
  const [isFavorite, setIsFavorite] = useState(
    favouriteContacts.some(el => el.id === contact.id)
  );

  const {
    isEditModalOpen,
    isDeleteModalOpen,
    toggleEditModal,
    toggleDeleteModal,
  } = useModal();
  const {
    isDeleteBtnHovered,
    isEditBtnHovered,
    toggleDeleteBtnHoverEffect,
    toggleEditBtnHoverEffect,
  } = useHoverEffects();

  const dispatch = useDispatch();
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);

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
    dispatch(contactsOperations.updateContact(edittedContact));
  };

  const handleCheckboxChange = () => {
    console.log(contact);
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addContactToFavourites(contact));
      Notifications.showContactSuccess('addToFavourites', contact);
    } else {
      Notifications.showContactSuccess('removeFromFavourites', contact);
      dispatch(removeContactFromFavourites(contact.id));
    }
  };

  const defaultHighlighterClass = 'marked';
  const dynamicHighlighterClasses = clsx({
    toDelete: isDeleteBtnHovered,
    toEdit: isEditBtnHovered,
  });

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
        <RemoveToRecycleBinModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          contact={contact}
        />
      )}

      <ContactEl
        className={clsx({
          toDelete: isDeleteBtnHovered,
          toEdit: isEditBtnHovered,
        })}
      >
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <HighlightContactDetails
          contact={contact}
          filterByName={filterByName}
          filterByNumber={filterByNumber}
          defaultHighlighterClass={defaultHighlighterClass}
          dynamicHighlighterClasses={dynamicHighlighterClasses}
        />
      </ContactEl>

      <ControlButtons>
        <IconButtonWithHoverEffect
          onClick={toggleEditModal}
          ariaLabel="Edit Contact"
          operationType="edit"
          onMouseEnter={toggleEditBtnHoverEffect}
          onMouseLeave={toggleEditBtnHoverEffect}
        />

        <IconButtonWithHoverEffect
          onClick={toggleDeleteModal}
          operationType="delete"
          onMouseEnter={toggleDeleteBtnHoverEffect}
          onMouseLeave={toggleDeleteBtnHoverEffect}
          ariaLabel="Delete contact"
        />
      </ControlButtons>
      <CheckboxWithStarIcon
        checked={isFavorite}
        onChange={handleCheckboxChange}
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
