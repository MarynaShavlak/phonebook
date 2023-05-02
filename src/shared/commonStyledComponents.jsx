import styled from 'styled-components';

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
  background-color: ${props => props.theme.colors.body};
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
  padding-top: 30px;
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

export const AddNewBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.lightAccent};
  border: none;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.brightAccent};
    color: ${props => props.theme.colors.white};
  }
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
