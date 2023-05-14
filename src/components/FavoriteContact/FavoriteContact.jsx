import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FavoriteButton } from 'components';
import { ContactAvatar } from 'shared';
import { ContactEl } from 'components/Contact/Contact.styled';
import { removeContactFromFavorites } from 'redux/favorites';
import { ContactData, TelLink } from 'shared/commonStyledComponents';
import { useSelectedContact } from 'hooks';

export const FavoriteContact = ({
  contact,
  isMultiSelectOpen,
  selectedItems,
  updateSelectedItems,
}) => {
  const { name, number } = contact;
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
      <ContactEl>
        <ContactAvatar
          isMultiSelectOpen={isMultiSelectOpen}
          isSelected={isSelected}
          toggleIsSelected={toggleIsSelected}
          name={name}
        />
        <ContactData>
          <p>{name}</p>
          <TelLink href={`tel: ${number}`}>
            <p>{number}</p>
          </TelLink>
        </ContactData>
      </ContactEl>

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
