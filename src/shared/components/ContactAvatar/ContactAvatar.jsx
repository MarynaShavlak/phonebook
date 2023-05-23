import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { SelectCheckbox } from 'components';
import { GroupAvatar } from 'components/Group/Group.styled';
import { renderIcons } from 'utils';
import { ICON_SIZES, ICON_NAMES, ROUTES } from 'constants';

export const ContactAvatar = ({
  isMultiSelectOpen,
  isSelected,
  toggleIsSelected,
  name,
  page,
}) => {
  const avatarLetter = name?.charAt(0);
  const avatar = name ? (
    <Avatar
      size="30"
      textSizeRatio={2}
      name={avatarLetter}
      unstyled={false}
      round="50%"
    />
  ) : (
    <GroupAvatar>{renderIcons(ICON_NAMES.GROUP, ICON_SIZES.SMALL)}</GroupAvatar>
  );
  return (
    <>
      {isMultiSelectOpen && page !== ROUTES.GROUPS ? (
        <SelectCheckbox checked={isSelected} onChange={toggleIsSelected} />
      ) : (
        avatar
      )}
    </>
  );
};

ContactAvatar.propTypes = {
  name: PropTypes.string,
  page: PropTypes.string,
  isMultiSelectOpen: PropTypes.bool,
  isSelected: PropTypes.bool,
  toggleIsSelected: PropTypes.func,
};
