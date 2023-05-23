import React from 'react';
import PropTypes from 'prop-types';
import { HighlightContactDetails } from 'components';
import { ContactAvatar } from 'shared';
import { ContactEl } from 'components/Contact/Contact.styled';

export const ElementData = ({
  item,
  isMultiSelectOpen,
  isSelected,
  toggleIsSelected,
  filter,
  children,
  page,
}) => {
  const { name } = item;
  return (
    <ContactEl>
      <ContactAvatar
        isMultiSelectOpen={isMultiSelectOpen}
        isSelected={isSelected}
        toggleIsSelected={toggleIsSelected}
        name={name}
        page={page}
      />
      <HighlightContactDetails item={item} filter={filter} />
      {children}
    </ContactEl>
  );
};

ElementData.propTypes = {
  item: PropTypes.object.isRequired,
  isMultiSelectOpen: PropTypes.bool,
  isSelected: PropTypes.bool,
  toggleIsSelected: PropTypes.func,
  filter: PropTypes.string,
  children: PropTypes.node,
  page: PropTypes.string,
};
