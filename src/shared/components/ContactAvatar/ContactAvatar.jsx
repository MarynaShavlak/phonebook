import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { SelectCheckbox } from 'components';
import { GroupAvatar } from 'components/Group/Group.styled';
import { renderIcons } from 'utils';
import { ICON_SIZES, ICON_NAMES } from 'constants';

export const ContactAvatar = ({
  isMultiSelectOpen,
  isSelected,
  toggleIsSelected,
  name,
}) => {
  const avatar = name ? (
    <Avatar
      size="30"
      textSizeRatio={2}
      name={name}
      unstyled={false}
      round="50%"
    />
  ) : (
    <GroupAvatar>
      {renderIcons(ICON_NAMES.GROUP, ICON_SIZES.MEDIUM_SMALL)}
    </GroupAvatar>
  );
  return (
    <>
      {isMultiSelectOpen ? (
        <SelectCheckbox checked={isSelected} onChange={toggleIsSelected} />
      ) : (
        avatar
      )}
    </>
  );
};

// ContactAvatar.propTypes = {
//   name: PropTypes.string,
//   isMultiSelectOpen: PropTypes.bool.isRequired,
//   isSelected: PropTypes.bool.isRequired,
//   toggleIsSelected: PropTypes.func.isRequired,
// };
