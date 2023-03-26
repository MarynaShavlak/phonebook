import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 15px 10px;
  font-size: 16px;
  font-weight: 800;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: white;
    background-color: #fc458e;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f787b4;
  }
  span {
    align-self: end;
  }
`;
