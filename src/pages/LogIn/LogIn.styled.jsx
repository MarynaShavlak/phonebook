import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ContentWrapper } from 'shared/commonStyledComponents.jsx';

export const Content = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 20px;
  padding-left: 15px;
  padding-right: 15px;
  /* width: 290px; */
  @media screen and (min-width: ${props => props.theme.devices.mobile}) {
    width: 345px;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 700px;
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
    color: ${props => props.theme.colors.brightAccent};
    font-weight: 700;
  }
`;

export const RedirectLink = styled.p`
  font-weight: 400;
`;
export const SignUpLink = styled(NavLink)`
  color: ${props => props.theme.colors.brightAccent};
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.body};
`;

export const ImageWrap = styled.div`
  position: relative;
  align-self: start;
  width: 520px;

  p {
    position: absolute;
    top: 75px;
    right: 35px;
    width: 250px;

    font-size: 12px;
    font-weight: 700;

    span {
      color: ${props => props.theme.colors.brightAccent};
      font-weight: 700;
    }
  }
`;
