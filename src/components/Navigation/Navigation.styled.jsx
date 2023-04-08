import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 5px;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 12px;
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

  svg {
    width: 25px;
    height: 25px;
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    padding: 10px;
  }
`;

export const PhoneLogo = styled.img`
  /* margin-right: 10px; */
  height: 100%;
  height: 40px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    height: 60px;
  }
`;
