import styled from 'styled-components';
import { IconButton } from 'components/IconButton';

export const DropdownList = styled.ul`
  position: absolute;
  /* padding: 4px 8px; */
  right: 60px;
  top: 0px;
  z-index: 2;
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
  font-size: 14px;
  font-weight: 700;
  width: 180px;
  display: flex;
  column-gap: 5px;
  align-items: center;
  transition: 250ms color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
  }
  &:hover svg {
    fill: white;
  }
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
