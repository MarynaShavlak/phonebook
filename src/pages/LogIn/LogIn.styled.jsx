import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';

export const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 290px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 700px;
    flex-direction: row;
    row-gap: 0px;
    column-gap: 20px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 800px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 40%;
  }
  p {
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;
    font-size: 12px;
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      font-size: 14px;
    }
  }
  span {
    color: #ef4287;
    font-weight: 700;
  }
`;

export const RedirectLink = styled.p`
  margin: 0 auto;
  font-weight: 400;
`;
export const SignUpLink = styled(NavLink)`
  color: #fc458e;
  font-weight: 700;
`;
