import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

export const HomeLogo = styled.img`
  width: 600px;
  /* width: 800px; */
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
  row-gap: 15px;
  /* width: 600px; */
  /* background-color: #f8f3ff; */
  padding: 20px;
  p {
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;
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
  border-radius: 20px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fc458e;
  }
`;

export const LogInLink = styled(NavLink)`
  color: #fc458e;
  font-weight: 700;
`;
export const LogIn = styled.span``;
// #ef4287, #f2c94c, #bb6bd9, #9b51e0, #f787b4, #f8f3ff

export const BenefitsListTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 24px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ef4287;
`;
export const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const IconWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(45deg, #fab7d2, #f787b4);
  border-radius: 15px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px 0 0 15px;
  }
  h2 {
    font-size: 16px;
  }
  svg {
    width: 50px;
    height: 50px;
    margin-right: 10px;
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
  padding: 20px;

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
    font-size: 14px;
  }
`;

export const Item = styled.li`
  position: relative;
  flex-basis: calc((100% - 2 * 20px) / 3);
  height: 150px;
  width: 277.5px;
  background: #fff;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  &:hover {
    ${IconWrap} {
      height: 60px;
      border-radius: 0 0 15px 15px;
      background: linear-gradient(45deg, #ef4287, #bb6bd9);
      svg {
        width: 40px;
        height: 40px;
        fill: white;
      }
      h2 {
        color: white;
      }
    }
  }
`;
