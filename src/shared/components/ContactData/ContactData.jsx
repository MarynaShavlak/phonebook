import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { HighlightContactDetails } from 'components';
import { ContactAvatar } from 'shared';
import { selectFilterByName, selectFilterByNumber } from 'redux/filters';
import { ContactEl } from 'components/Contact/Contact.styled';

export const ContactData = ({
  contact,
  isMultiSelectOpen,
  isSelected,
  toggleIsSelected,
}) => {
  const { name } = contact;
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);

  return (
    <ContactEl>
      <ContactAvatar
        isMultiSelectOpen={isMultiSelectOpen}
        isSelected={isSelected}
        toggleIsSelected={toggleIsSelected}
        name={name}
      />
      <HighlightContactDetails
        contact={contact}
        filterByName={filterByName}
        filterByNumber={filterByNumber}
      />
    </ContactEl>
  );
};

ContactData.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  isMultiSelectOpen: PropTypes.bool,
  isSelected: PropTypes.bool,
  toggleIsSelected: PropTypes.func.isRequired,
};
