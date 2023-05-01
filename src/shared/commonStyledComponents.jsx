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
    color: ${props => props.theme.colors.black};
    border: none;
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: ${props => props.theme.colors.lightAccent};
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
  background-color: ${props => props.theme.colors.mainLight};
  color: ${props => props.theme.colors.black};
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
    background-color: ${props => props.theme.colors.lightAccent};
    color: ${props => props.theme.colors.white};
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
  border-bottom: 1px solid ${props => props.theme.colors.lightAccent};
  border-top: 1px solid ${props => props.theme.colors.lightAccent};
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
  color: ${props => props.theme.colors.black};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
`;
export const ModalWarning = styled(ModalText)`
  margin-top: 5px;
`;

export const ModalHeader = styled(ModalText)`
  margin-bottom: 10px;
  font-weight: 700;
  text-align: center;
`;

export const ModalInputWrapper = styled.div`
  position: relative;
`;

export const ModalError = styled.p`
  position: absolute;
  left: 0;
  top: 50px;

  font-size: 10px;
  font-weight: 700;
  color: ${props => props.theme.colors.error};
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  column-gap: 10px;
  align-self: center;
  align-items: center;
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  border: 1px solid transparent;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.brightAccent};
  }
`;

export const TelLink = styled.a`
  color: ${props => props.theme.colors.black};
`;

export const LabelList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LabelButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: ${props => props.theme.colors.mainLight};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: 10px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.selectedGroup};
    color: ${props => props.theme.colors.white};
    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  }
  &.selected {
    background-color: ${props => props.theme.colors.selectedGroup};
  }

  font-size: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 12px;
  }
`;
