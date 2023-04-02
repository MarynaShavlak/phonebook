import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 5px;
  height: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  color: black;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: white;
    background-color: #fc458e;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f787b4;
  }
`;

export const PhoneLogo = styled.img`
  height: 60px;
`;
