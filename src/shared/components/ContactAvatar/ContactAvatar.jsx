import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { SelectCheckbox } from 'components';

export const ContactAvatar = ({
  isMultiSelectOpen,
  isSelected,
  toggleIsSelected,
  name,
}) => {
  return (
    <>
      {isMultiSelectOpen ? (
        <SelectCheckbox checked={isSelected} onChange={toggleIsSelected} />
      ) : (
        <Avatar
          size="30"
          textSizeRatio={2}
          name={name}
          unstyled={false}
          round="50%"
        />
      )}
    </>
  );
};

ContactAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  isMultiSelectOpen: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  toggleIsSelected: PropTypes.func.isRequired,
};
