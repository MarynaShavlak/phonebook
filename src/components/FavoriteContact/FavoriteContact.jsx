import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { FavoriteButton, SelectCheckbox } from 'components';
import { ContactEl } from 'components/Contact/Contact.styled';
import { removeContactFromFavorites } from 'redux/favorites';
import { CONTACT_ACTIONS } from 'constants';
import { showContactSuccess } from 'utils/notifications';
import { TelLink } from 'shared/commonStyledComponents';
import { checkContactInSelected } from 'utils';

export const FavoriteContact = ({
  contact,
  isMultiSelectOpen,
  selectedContacts,
  updateSelectedContacts,
}) => {
  const dispatch = useDispatch();
  const removeFromFavorites = () => {
    showContactSuccess(CONTACT_ACTIONS.REMOVE_FROM_FAVORITES, contact);
    dispatch(removeContactFromFavorites(contact.id));
  };
  const [isSelected, setIsSelected] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
    updateSelectedContacts(contact);
  };

  useEffect(() => {
    setIsSelected(checkContactInSelected(selectedContacts, contact));
  }, [selectedContacts, contact]);

  return (
    <>
      <ContactEl>
        {isMultiSelectOpen ? (
          <SelectCheckbox checked={isSelected} onChange={toggleIsSelected} />
        ) : (
          <Avatar
            size="30"
            textSizeRatio={2}
            name={contact.name}
            unstyled={false}
            round="50%"
          />
        )}
        <p>{contact.name}:</p>
        <TelLink href={`tel: ${contact.number}`}>
          <p>{contact.number}</p>
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
