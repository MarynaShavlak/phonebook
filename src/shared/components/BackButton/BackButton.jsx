import React from 'react';
import PropTypes from 'prop-types';
import { Back } from './BackButton.styled';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES } from 'constants';

export const BackButton = ({ pathTo, onClick }) => {
  return (
    <Back to={pathTo} onClick={onClick}>
      <button type="button" aria-label="Back to previous page">
        {renderIcons(ICON_NAMES.BACK_ARROW, ICON_SIZES.LARGE)}
      </button>
    </Back>
  );
};

BackButton.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.func,
};
