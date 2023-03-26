import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
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
  background-color: #fde7f0;

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
  color: white;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.03em;
  background-color: #f787b4;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
    fill: #757575;
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus-within > .user-form__icon {
    fill: #fc458e;
  }

  &:focus-within > .user-form__info-label {
    transform: translate(-50px, -40px);
    color: black;
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
  border: 2px solid #757575;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:placeholder-shown) + .user-form__info-label {
    transform: translate(-50px, -40px);
  }
  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: #fc458e;
    outline: none;
  }
`;
export const InfoError = styled.p`
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  font-style: italic;
  color: red;
`;

export const InfoLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  font-weight: 500;
  color: #757575;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SignUpButton = styled.button`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  padding: 10px 30px;
  background-color: #f787b4;

  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fc458e;
    color: white;
  }
`;
