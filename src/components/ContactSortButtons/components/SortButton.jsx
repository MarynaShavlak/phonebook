import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { SortBtn } from '../ContactSortButtons.styled';
import { renderIcons } from 'utils';
import { ICON_SIZES, SORT_ORDER } from 'constants';

export const SortButton = ({
  onClick,
  label,
  active,
  activeSortOrder,
  iconUp,
  iconDown,
}) => {
  return (
    <SortBtn onClick={onClick} aria-label={label} className={clsx({ active })}>
      {renderIcons(
        activeSortOrder === SORT_ORDER.DESCENDING ? iconUp : iconDown,
        ICON_SIZES.MEDIUM_SMALL
      )}
    </SortBtn>
  );
};

SortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  activeSortOrder: PropTypes.string,
  iconUp: PropTypes.string.isRequired,
  iconDown: PropTypes.string.isRequired,
};
