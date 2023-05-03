import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  /* width: 290px; */
  @media screen and (min-width: ${props => props.theme.devices.mobile}) {
    width: 345px;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 400px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 500px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid transparent;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 30px 20px;
  padding-top: 30px;
  background-color: ${props => props.theme.colors.white};
  .privacy-container {
    margin-top: 20px;
  }
  .privacy {
    font-style: italic;
    font-size: 14px;
    text-decoration: underline;
  }
`;
export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
  color: ${props => props.theme.colors.black};
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.03em;
  background-color: ${props => props.theme.colors.accent};
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  li {
    position: relative;
  }
`;

export const InfoField = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  .user-form__icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    fill: ${props => props.theme.colors.black};
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus-within > .user-form__icon {
    fill: ${props => props.theme.colors.accent};
  }

  &:focus-within > .user-form__info-label {
    transform: translate(-50px, -40px);
    color: ${props => props.theme.colors.black};
    font-weight: 700;
  }

  .user-form__info-label.clicked {
    transform: translate(-50px, -40px);
    color: ${props => props.theme.colors.black};
    font-weight: 700;
  }
`;

export const InfoInput = styled(Field)`
  width: 100%;
  height: 40px;
  padding-left: 50px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 2px solid ${props => props.theme.colors.black};
  background-color: transparent;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  z-index: 2;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:placeholder-shown) + .user-form__info-label {
    transform: translate(-50px, -40px);
  }
  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }
`;
export const InfoError = styled.p`
  position: absolute;
  width: 100%;
  bottom: -15px;
  font-size: 12px;
  font-style: italic;
  color: ${props => props.theme.colors.error};
`;

export const InfoLabel = styled.label`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SignUpButton = styled.button`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  padding: 10px 30px;
  background-color: ${props => props.theme.colors.transparent};

  color: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    /* color: ${props => props.theme.colors.white}; */
  }
`;
