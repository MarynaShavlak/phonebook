import styled from 'styled-components';

export const DropdownList = styled.ul`
  position: absolute;
  right: 45px;
  top: 0px;
  width: 180px;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;

  .operation {
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.lightAccent};
    }
  }
`;
export const DropdownItem = styled.li`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  display: flex;
  column-gap: 5px;
  align-items: center;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  /* &:hover span,
  &:hover svg {
    color: ${props => props.theme.colors.white};
  } */
`;
export const DropdownToggleBtn = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  svg {
    fill: ${props => props.theme.colors.black};
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      fill: ${props => props.theme.colors.hover};
    }
  }
`;

export const DropdownElement = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 10px;
  padding: 5px;
  color: ${props => props.theme.colors.black};
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
`;
