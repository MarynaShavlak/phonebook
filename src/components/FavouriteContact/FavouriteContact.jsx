import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { CheckboxWithStarIcon } from 'components';
import { ContactEl, Name, Number } from 'components/Contact/Contact.styled';

import { removeContactFromFavourites } from 'redux/favourites/favouritesSlice';

export const FavouriteContact = ({ contact }) => {
  const dispatch = useDispatch();
  const removeFromFavourites = () => {
    console.log(contact);
    dispatch(removeContactFromFavourites(contact.id));
  };

  return (
    <>
      <ContactEl>
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <Name>{contact.name}:</Name>
        <Number>{contact.number}</Number>
      </ContactEl>

      <CheckboxWithStarIcon onChange={removeFromFavourites} checked />
    </>
  );
};

FavouriteContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removalContactTime: PropTypes.string.isRequired,
  }).isRequired,
};
