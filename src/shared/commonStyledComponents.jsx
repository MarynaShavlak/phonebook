import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageWrapper = styled(Content)`
  padding-top: 80px;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.main};
`;

const commonContentWrapperStyles = `
  position: relative;
  display: flex;
  flex-direction: column;

`;

export const ContentWrapper = styled(Container)`
  ${commonContentWrapperStyles};
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

export const SpecificContentWrapper = styled(Container)`
  ${commonContentWrapperStyles};
  align-items: center;
  row-gap: 20px;
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
  padding-top: 100px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    padding-top: 120px;
  }
  section:first-child {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  display: flex;
  column-gap: 10px;
  align-self: center;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.black};

  border: none;
  border-radius: ${props => props.theme.borderRadius.standart};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.sm};
  }

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;
export const Info = styled.p`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.colors.black};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.lg};
  }

  span {
    font-weight: 700;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.hover};
  border-top: 1px solid ${props => props.theme.colors.hover};
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSize.sm};

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.md};
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ModalText = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  line-height: 1.5;
  color: ${props => props.theme.colors.black};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.sm};
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

  font-size: ${props => props.theme.fontSize.xxs};
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
    color: ${props => props.theme.colors.hover};
  }
`;

export const TelLink = styled.a`
  color: ${props => props.theme.colors.black};
`;

export const AddNewBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.hover};
  border: none;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    /* background-color: ${props => props.theme.colors.brightAccent}; */
    color: ${props => props.theme.colors.white};
  }
`;

// export const ImageWrap = styled.div`
//   position: relative;
//   align-self: start;
//   width: 520px;

//   p {
//     position: absolute;
//     top: 75px;
//     right: 35px;
//     width: 250px;

//     font-size: ${props => props.theme.fontSize.xs};
//     font-weight: 700;

//     span {
//       color: ${props => props.theme.colors.brightAccent};
//       font-weight: 700;
//     }
//   }
// `;

export const StyledContainer = styled(ToastContainer)`
  .Toastify__toast-icon {
    svg {
      font-size: 24px;
    }
  }
  .toast-message {
    background: #ffffff;
    color: #100f10;
    font-size: 14px;
    padding: 10px;
    border: 1px solid #8a89bc;
    border-radius: 20px;
  }
  .success {
    background-color: #f7e643;
  }
  .info {
    background-color: #abe4ff;
  }
  .error {
    background-color: #ff6666;
  }
  .warning {
    background-color: #ff6666;
  }

  .Toastify__close-button > svg {
    fill: #100f10;
  }

  .Toastify__close-button:hover svg,
  .Toastify__close-button:focus svg {
    fill: #feafe5;
  }
`;
