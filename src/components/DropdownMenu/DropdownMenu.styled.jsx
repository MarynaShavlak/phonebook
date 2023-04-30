import styled from 'styled-components';
import { IconButton } from 'components/IconButton';

export const DropdownList = styled.ul`
  position: absolute;
  right: 45px;
  top: 0px;
  z-index: 2;
  background-color: #fde7f0;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);
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
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: white;
  }
  :hover svg {
    fill: white;
  }
`;
export const DropdownToggleBtn = styled(IconButton)`
  background-color: transparent;
  border: 5px solid transparent;
  box-shadow: none;
  padding: 5px;
  &:hover {
    background-color: transparent;
    color: #ef4287;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  column-gap: 10px;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 5px;
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: white;
  }
`;
