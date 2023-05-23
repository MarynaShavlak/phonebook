import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FavoriteButton } from 'components';
import { ElementData } from 'shared';
import { removeContactFromFavorites } from 'redux/favorites';
import { useSelectedContact } from 'hooks';
import { selectFilter } from 'redux/filters';
import { ROUTES } from 'constants';

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
  const filter = useSelector(selectFilter(ROUTES.FAVORITES));

  return (
    <>
      <ElementData
        isMultiSelectOpen={isMultiSelectOpen}
        isSelected={isSelected}
        toggleIsSelected={toggleIsSelected}
        contact={contact}
        filter={filter}
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
