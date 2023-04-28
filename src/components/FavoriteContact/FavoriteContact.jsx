import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { FavoriteButton } from 'components';
import { ContactEl, Name, Number } from 'components/Contact/Contact.styled';
import { removeContactFromFavorites } from 'redux/favorites';
import { CONTACT_ACTIONS } from 'constants';
import { showContactSuccess } from 'utils/notifications';

export const FavoriteContact = ({ contact }) => {
  const dispatch = useDispatch();
  const removeFromFavorites = () => {
    showContactSuccess(CONTACT_ACTIONS.REMOVE_FROM_FAVORITES, contact);
    dispatch(removeContactFromFavorites(contact.id));
  };

  return (
    <>
      <ContactEl>
        <Avatar
          size="30"
          textSizeRatio={2}
          name={contact.name}
          unstyled={false}
          round="50%"
        />
        <Name>{contact.name}:</Name>
        <Number>{contact.number}</Number>
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
};
