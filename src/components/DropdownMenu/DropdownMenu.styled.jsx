import styled from 'styled-components';

export const DropdownList = styled.ul`
  position: absolute;
  right: 45px;
  top: 0px;
  width: 180px;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);
  border-radius: ${props => props.theme.borderRadius.small};
  overflow: hidden;

  .operation {
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.accent};
    }
  }
`;
export const DropdownItem = styled.li`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 700;
  width: 100%;
  display: flex;
  column-gap: ${props => props.theme.gapSize.extraSmall};
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
  border-radius: ${props => props.theme.borderRadius.extra};
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
  column-gap: ${props => props.theme.gapSize.standart};
  padding: 5px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 500;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`;
