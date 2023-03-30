import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import Avatar from 'react-avatar';
import {
  IconButton,
  EditModal,
  ConfirmRemoveToRecycleBinModal,
  CheckboxWithStarIcon,
} from 'components';
import { ContactEl, ContactButtons } from './Contact.styled';
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
import { renderIcons } from 'utils/renderIcons';
import * as Notifications from 'utils/notifications';
import { iconSize } from 'constants';
import { clsx } from 'clsx';

export const Contact = ({ contact }) => {
  const favouriteContacts = useSelector(selectFavouritesContacts);

  const checkContactIsinFavourites = contact => {
    const isinFavourites = favouriteContacts.some(el => el.id === contact.id);
    return isinFavourites;
  };
  const inFavourite = checkContactIsinFavourites(contact);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDeleteBtnHovered, setIsDeleteBtnHovered] = useState(false);
  const [isEditBtnHovered, setIsEditBtnHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(inFavourite);

  const dispatch = useDispatch();
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);

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

  const handleCheckboxChange = () => {
    console.log(contact);
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addContactToFavourites(contact));
      Notifications.showSuccessNotification('addToFavourites', contact);
    } else {
      Notifications.showSuccessNotification('removeFromFavourites', contact);
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
      {isConfirmModalOpen && (
        <ConfirmRemoveToRecycleBinModal
          isOpen={isConfirmModalOpen}
          onClose={toggleConfirmModal}
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
        <Highlighter
          highlightClassName={clsx(
            defaultHighlighterClass,
            dynamicHighlighterClasses
          )}
          searchWords={[`${filterByName}`]}
          autoEscape={true}
          textToHighlight={`${contact.name}:`}
        />
        <Highlighter
          highlightClassName={clsx(
            defaultHighlighterClass,
            dynamicHighlighterClasses
          )}
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
