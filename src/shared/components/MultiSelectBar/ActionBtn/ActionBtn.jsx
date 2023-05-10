import PropTypes from 'prop-types';
import { renderIcons } from 'utils';
import { ICON_SIZES } from 'constants';

export const ActionBtn = ({ ariaLabel, onClick, disabled, iconName }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {renderIcons(iconName, ICON_SIZES.MEDIUM_SMALL)}
    </button>
  );
};

ActionBtn.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
};
