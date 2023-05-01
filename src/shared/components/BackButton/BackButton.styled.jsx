import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Back = styled(NavLink)`
  button {
    display: flex;
    align-self: center;
    align-items: center;
    background-color: transparent;
    color: ${props => props.theme.colors.black};
    border: none;
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: ${props => props.theme.colors.lightAccent};
    }
  }

  svg {
    width: 30px;
    height: 30px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 50px;
      height: 50px;
    }
  }
`;
