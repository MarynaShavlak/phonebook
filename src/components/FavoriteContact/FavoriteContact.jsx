import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FavoriteButton } from 'components';
import { ContactData } from 'shared';
import { removeContactFromFavorites } from 'redux/favorites';
import { useSelectedContact } from 'hooks';

export const FavoriteContact = ({
  contact,
  isMultiSelectOpen,
  selectedItems,
  updateSelectedItems,
}) => {
  const dispatch = useDispatch();

  const removeFromFavorites = () => {
    dispatch(removeContactFromFavorites(contact.id));
  };
  const [isSelected, toggleIsSelected] = useSelectedContact(
    selectedItems,
    contact,
    updateSelectedItems
  );

  return (
    <>
      <ContactData
        isMultiSelectOpen={isMultiSelectOpen}
        isSelected={isSelected}
        toggleIsSelected={toggleIsSelected}
        contact={contact}
      />

      <FavoriteButton onChange={removeFromFavorites} checked />
    </>
  );
};

FavoriteContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  isMultiSelectOpen: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  updateSelectedItems: PropTypes.func.isRequired,
};
