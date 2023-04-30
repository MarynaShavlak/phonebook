import { DropdownElement } from 'components/DropdownMenu/DropdownMenu.styled';
import { ICON_SIZES } from 'constants';
import { renderIcons } from 'utils';

export const renderDropdownElement = (label, operation, onClick = null) => (
  <DropdownElement ariaLabel={label} onClick={onClick}>
    {renderIcons(operation, ICON_SIZES.MEDIUM)}
    <span>{label}</span>
  </DropdownElement>
);
