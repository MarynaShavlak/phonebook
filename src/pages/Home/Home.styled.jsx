import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 30px;
  background-color: #fff3f7;
  height: 800px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    height: 800px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    height: 100vh;
  }
  div:first-child {
    padding-top: 150px;
    margin-left: auto;
    margin-right: auto;
    width: 260px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 350px;
    }
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      width: 600px;
    }
  }

  p {
    margin-top: 20px;
    text-align: center;
  }
`;

export const HomeTitle = styled.h1`
  display: inline-block;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  color: #ef4287;

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 44px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 30px;
`;

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 0;
  }

  div:first-child {
    min-width: 260px;
    width: 290px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 500px;
    }
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      width: 600px;
    }
  }
`;

export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 30px;

  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: white;
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #fc458e;
    color: white;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 20px;
  }
`;

export const LogInLink = styled(NavLink)`
  color: #fc458e;
  font-weight: 700;
`;

export const DescWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    padding: 20px;
  }
  div {
    font-size: 1.2em;
    margin: 0;
    padding: 0 0 1em 0;
    font-weight: 500;
  }
  h2 {
    font-size: 16px;
    color: #ef4287;
  }
  p {
    text-align: justify;
    font-size: 12px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 14px;
    }
  }
`;

// #ef4287, #f2c94c, #bb6bd9, #9b51e0, #f787b4,
