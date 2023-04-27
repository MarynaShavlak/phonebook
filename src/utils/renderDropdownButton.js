import { DropdownButton } from 'components/DropdownMenu/DropdownMenu.styled';
import { iconSize } from 'constants';
import { renderIcons } from 'utils';
export const renderDropdownButton = (label, operation, onClick = null) => (
  <DropdownButton ariaLabel={label} onClick={onClick}>
    {renderIcons(operation, iconSize.s)}
    {label}
  </DropdownButton>
);
