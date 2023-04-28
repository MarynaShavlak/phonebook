import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  /* width: 480px; */

  /* @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 1200px;
  } */
`;
export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0;
  min-width: 290px;
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

export const Main = styled.main`
  padding-top: 30px;
  section:first-child {
    margin-bottom: 30px;
  }
`;

export const BackButton = styled(NavLink)`
  button {
    display: flex;
    align-self: center;
    align-items: center;
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #f787b4;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  column-gap: 10px;
  align-self: center;
  align-items: center;
  padding: 15px;
  background-color: #fde7f0;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #f787b4;
    color: white;
  }
`;
export const Info = styled.p`
  font-size: 16px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 18px;
  }

  span {
    font-weight: 700;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f787b4;
  border-top: 1px solid #f787b4;
`;

export const Text = styled.p`
  font-size: 14px;

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 16px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 10px;
`;

export const ModalText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
`;
