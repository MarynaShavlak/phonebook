import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h1`
  display: inline-block;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    font-size: 30px;
  }
`;

export const HomeLogo = styled.img`
  width: 240px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 350px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 600px;
  }
  /* height: 530px; */
`;

export const HomeWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;
export const AppDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    row-gap: 15px;
  }
  p {
    font-size: 12px;
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;

    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      font-size: 14px;
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
  background-color: #f787b4;
  color: white;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fc458e;
  }
`;

export const LogInLink = styled(NavLink)`
  color: #fc458e;
  font-weight: 700;
`;

export const BenefitsListTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ef4287;
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    font-size: 24px;
  }
`;
export const BenefitsList = styled.ul`
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;

  padding: 20px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(45deg, #fab7d2, #f787b4);
  border-radius: 10px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px 0 0 10px;
  }
  h2 {
    font-size: 14px;
    text-align: center;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
  }
  svg {
    width: 20px;
    height: 20px;

    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 30px;
      height: 30px;
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

export const Item = styled.li`
  position: relative;
  height: 100px;
  width: 320px;
  background: #fff;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 232px;
    height: 140px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 277.5px;
  }

  &:hover {
    ${IconWrap} {
      flex-direction: row;
      row-gap: 0px;
      column-gap: 10px;
      height: 50px;
      border-radius: 0 0 10px 10px;
      background: linear-gradient(45deg, #ef4287, #bb6bd9);
      svg {
        width: 20px;
        height: 20px;
        fill: white;
      }
      h2 {
        color: white;
        font-size: 12px;
        text-align: left;
        @media screen and (min-width: ${props => props.theme.devices.tablet}) {
          font-size: 14px;
        }
      }
    }
  }
`;
