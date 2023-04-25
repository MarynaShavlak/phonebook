import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeMain = styled.main`
  padding-top: 30px;
  section:first-child {
    margin-bottom: 30px;
  }
`;

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
export const AppDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    row-gap: 15px;
  }

  p {
    font-size: 14px;
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;

    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
  }
  span {
    color: #ef4287;
    font-weight: 700;
  }
`;

export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 30px;

  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: white;
  color: black;
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

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  gap: 30px;
  margin-bottom: 80px;

  li:nth-child(2n) {
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      margin-left: 80px;
    }
  }
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

export const Benefit = styled.div``;

export const Item = styled.li`
  position: relative;
  width: 250px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 600px;
  }
  border-radius: 8px;

  padding: 20px 10px;
  border: 1px solid #fab7d2;
  box-shadow: 5px 5px 8px 1px #fab7d2;
  div:first-child {
    position: absolute;
    top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ef4287;
    color: white;
    font-weight: 900;
    font-size: 16px;
  }

  h2 {
    margin-bottom: 10px;
    color: #ef4287;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 18px;
    }
  }
  p {
    font-size: 12px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 14px;
    }
  }

  svg {
    position: absolute;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f787b4;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  svg {
    fill: white;
    width: 15px;
    height: 15px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 25px;
      height: 25px;
    }
  }
  right: -1px;
  top: 0px;
  width: 30px;
  height: 30px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 45px;
    height: 45px;
  }
`;

// #ef4287, #f2c94c, #bb6bd9, #9b51e0, #f787b4,
