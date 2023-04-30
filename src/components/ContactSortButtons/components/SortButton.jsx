import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { SortBtn } from '../ContactSortButtons.styled';
import { renderIcons } from 'utils';
import { ICON_SIZES } from 'constants';

export const SortButton = ({
  onClick,
  label,
  active,
  reverseSort,
  iconUp,
  iconDown,
}) => (
  <SortBtn onClick={onClick} aria-label={label} className={clsx({ active })}>
    {renderIcons(reverseSort ? iconUp : iconDown, ICON_SIZES.MEDIUM_SMALL)}
  </SortBtn>
);

SortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  reverseSort: PropTypes.bool.isRequired,
  iconUp: PropTypes.string.isRequired,
  iconDown: PropTypes.string.isRequired,
};
