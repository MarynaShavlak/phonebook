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

export const BenefitsList = styled.ul`
  display: flex;
  column-gap: 20px;
  margin-top: 50px;
`;
export const BenefitsListTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ef4287;
`;
export const BenefitsItem = styled.li`
  flex-basis: calc((100% - 5 * 20px) / 6);
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: #f8f3ff;
  svg {
    fill: #ef4287;
  }
`;

export const BenefitTitle = styled.h3`
  height: 30px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
export const BenefitDescription = styled.p`
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
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
