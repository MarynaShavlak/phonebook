import styled from 'styled-components';
import { IconButton } from 'components/IconButton';
export const DropdownList = styled.ul`
  position: absolute;
  right: 60px;
  top: 0px;

  background-color: #fde7f0;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  border-radius: 5px;
  overflow: hidden;

  .operation {
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #f787b4;
    }
  }
`;
export const DropdownItem = styled.li`
  padding: 4px 8px;
  font-size: 12px;
  width: 150px;
`;
export const DropdownToggleBtn = styled(IconButton)`
  background-color: transparent;
  border: 5px solid transparent;
  box-shadow: none;
  &:hover {
    background-color: transparent;
    color: #ef4287;
  }
`;
