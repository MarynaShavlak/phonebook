import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { CheckboxWithStarIcon } from 'components';
import { ContactEl, Name, Number } from 'components/Contact/Contact.styled';
import { removeContactFromFavorites } from 'redux/favorites/favoritesSlice';
import * as Notifications from 'utils/notifications';

export const FavoriteContact = ({ contact }) => {
  const dispatch = useDispatch();
  const removeFromFavorites = () => {
    Notifications.showContactSuccess('removeFromFavorites', contact);

    dispatch(removeContactFromFavorites(contact.id));
  };

  return (
    <>
      <ContactEl>
        <Avatar size="60" name={contact.name} unstyled={false} round="50%" />
        <Name>{contact.name}:</Name>
        <Number>{contact.number}</Number>
      </ContactEl>

      <CheckboxWithStarIcon onChange={removeFromFavorites} checked />
    </>
  );
};

FavoriteContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
