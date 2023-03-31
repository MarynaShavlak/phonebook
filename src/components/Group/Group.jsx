import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButtonWithHoverEffect } from 'components';

import { renderIcons, Notifications } from 'utils';
import { clsx } from 'clsx';
import { useHoverEffects } from 'hooks';
import { GroupAvatar, GroupEl } from './Group.styled';
import { ControlButtons } from 'components/Contact/Contact.styled';

export const Group = ({ group }) => {
  const {
    isDeleteBtnHovered,
    isEditBtnHovered,
    toggleDeleteBtnHoverEffect,
    toggleEditBtnHoverEffect,
  } = useHoverEffects();

  // const favouriteContacts = useSelector(selectFavouritesContacts);

  // const checkContactIsinFavourites = contact => {
  //   const isinFavourites = favouriteContacts.some(el => el.id === contact.id);
  //   return isinFavourites;
  // };
  // const inFavourite = checkContactIsinFavourites(contact);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(inFavourite);
  // const {
  //   isDeleteBtnHovered,
  //   isEditBtnHovered,
  //   toggleDeleteBtnHoverEffect,
  //   toggleEditBtnHoverEffect,
  // } = useHoverEffects();

  // const dispatch = useDispatch();
  // const filterByName = useSelector(selectFilterByName);
  // const filterByNumber = useSelector(selectFilterByNumber);

  // const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
  // const toggleConfirmModal = () => setIsConfirmModalOpen(!isConfirmModalOpen);

  // const editContact = updatedContact => {
  //   setIsEditModalOpen(false);
  //   const { updatedName, updatedNumber } = updatedContact;

  //   if (updatedName === contact.name && updatedNumber === contact.number) {
  //     return Notifications.showContactWarn();
  //   }

  //   const edittedContact = {
  //     id: contact.id,
  //     name: updatedName,
  //     number: updatedNumber,
  //   };
  //   dispatch(contactsOperations.updateContact(edittedContact));
  // };

  // const handleCheckboxChange = () => {
  //   console.log(contact);
  //   setIsFavorite(!isFavorite);
  //   if (!isFavorite) {
  //     dispatch(addContactToFavourites(contact));
  //     Notifications.showContactSuccess('addToFavourites', contact);
  //   } else {
  //     Notifications.showContactSuccess('removeFromFavourites', contact);
  //     dispatch(removeContactFromFavourites(contact.id));
  //   }
  // };
  // const defaultHighlighterClass = 'marked';
  // const dynamicHighlighterClasses = clsx({
  //   toDelete: isDeleteBtnHovered,
  //   toEdit: isEditBtnHovered,
  // });

  return (
    <>
      <GroupAvatar>{renderIcons('group', 30)}</GroupAvatar>
      <GroupEl
        className={clsx({
          toDelete: isDeleteBtnHovered,
          toEdit: isEditBtnHovered,
        })}
      >
        {group.name}
      </GroupEl>
      <ControlButtons>
        <IconButtonWithHoverEffect
          // onClick={toggleEditModal}
          ariaLabel="Edit Group name"
          operationType="edit"
          onMouseEnter={toggleEditBtnHoverEffect}
          onMouseLeave={toggleEditBtnHoverEffect}
        />

        <IconButtonWithHoverEffect
          // onClick={toggleDeleteModal}
          operationType="delete"
          onMouseEnter={toggleDeleteBtnHoverEffect}
          onMouseLeave={toggleDeleteBtnHoverEffect}
          ariaLabel="Delete group"
        />
      </ControlButtons>
    </>
  );
};

// Group.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };
