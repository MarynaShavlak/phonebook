import { ICON_NAMES, ICON_SIZES } from 'constants';
import { renderIcons } from 'utils';
export const getSelectButtonText = isAnyContactSelected => {
  if (isAnyContactSelected) {
    return <>{renderIcons(ICON_NAMES.CLOSE, ICON_SIZES.MEDIUM)} Clear All</>;
  } else {
    return <>{renderIcons(ICON_NAMES.CHECK, ICON_SIZES.MEDIUM)} Select All</>;
  }
};
