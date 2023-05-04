import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;

  column-gap: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    background-color: ${props => props.theme.colors.white};
    border-radius: 50px;
    column-gap: 0;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
export const PhoneLogo = styled.img`
  height: 100%;
  height: 40px;
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 5px;
  height: 100%;
  padding: 10px;
  color: ${props => props.theme.colors.black};

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 10px;
    font-weight: 800;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.black};
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 25px;
      height: 25px;
    }
    transform: scale(1);
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.hover};
    transform: translateY(-50%);

    @media screen and (max-width: 767px) {
      border-radius: 50%;

      &::before {
        position: absolute;
        left: -6px;
        content: '';
        background-color: transparent;
        border-radius: inherit;
        border: 5px solid ${props => props.theme.colors.main};
        width: 52px;
        height: 52px;
      }
      &::after {
        position: absolute;
        left: -2px;
        content: '';
        background-color: transparent;
        border-radius: inherit;
        border: 3px solid ${props => props.theme.colors.white};
        width: 44px;
        height: 44px;
      }
    }

    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      border-radius: 50px;
      background-color: ${props => props.theme.colors.hover};
      transform: translateY(0%);
    }

    svg {
      fill: ${props => props.theme.colors.white};
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.hover};
    svg {
      fill: ${props => props.theme.colors.hover};
      transform: scale(1.5);
    }
  }
`;
