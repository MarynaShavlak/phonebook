import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentWrapper = styled.div`
  width: 800px;
  display: flex;
  column-gap: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  row-gap: 15px;
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

export const RedirectLink = styled.p`
  margin: 0 auto;
  margin-top: 20px;
  font-weight: 400;
`;
export const SignUpLink = styled(NavLink)`
  color: #fc458e;
  font-weight: 700;
`;
