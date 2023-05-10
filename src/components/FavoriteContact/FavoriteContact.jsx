import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FavoriteButton } from 'components';
import { ContactAvatar } from 'shared';
import { ContactEl } from 'components/Contact/Contact.styled';
import { removeContactFromFavorites } from 'redux/favorites';
import { CONTACT_ACTIONS } from 'constants';
import { showContactSuccess } from 'utils/notifications';
import { TelLink } from 'shared/commonStyledComponents';
import { useSelectedContact } from 'hooks';

export const FavoriteContact = ({
  contact,
  isMultiSelectOpen,
  selectedContacts,
  updateSelectedContacts,
}) => {
  const { name, number } = contact;
  const dispatch = useDispatch();

  const removeFromFavorites = () => {
    showContactSuccess(CONTACT_ACTIONS.REMOVE_FROM_FAVORITES, contact);
    dispatch(removeContactFromFavorites(contact.id));
  };
  const [isSelected, toggleIsSelected] = useSelectedContact(
    selectedContacts,
    contact,
    updateSelectedContacts
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
        <p>{name}:</p>
        <TelLink href={`tel: ${number}`}>
          <p>{number}</p>
        </TelLink>
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
  selectedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  updateSelectedContacts: PropTypes.func.isRequired,
};
