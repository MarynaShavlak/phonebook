import React from 'react';
import PropTypes from 'prop-types';
import { HighlightContactDetails } from 'components';
import { ContactAvatar } from 'shared';
import { ContactEl } from 'components/Contact/Contact.styled';

export const ContactData = ({
  contact,
  isMultiSelectOpen,
  isSelected,
  toggleIsSelected,
  filter,
}) => {
  const { name } = contact;
  return (
    <ContactEl>
      <ContactAvatar
        isMultiSelectOpen={isMultiSelectOpen}
        isSelected={isSelected}
        toggleIsSelected={toggleIsSelected}
        name={name}
      />
      <HighlightContactDetails contact={contact} filter={filter} />
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
  filter: PropTypes.string,
};
