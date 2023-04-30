import { DropdownButton } from 'components/DropdownMenu/DropdownMenu.styled';
import { ICON_SIZES } from 'constants';
import { renderIcons } from 'utils';
export const renderDropdownButton = (label, operation, onClick = null) => (
  <DropdownButton ariaLabel={label} onClick={onClick}>
    {renderIcons(operation, ICON_SIZES.MEDIUM)}
    {label}
  </DropdownButton>
);
