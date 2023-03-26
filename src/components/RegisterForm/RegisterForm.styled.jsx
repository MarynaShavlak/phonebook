import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  width: 600px;
`;
export const FormTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const InfoField = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  .register-form__icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    fill: #757575;
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus-within > .register-form__icon {
    fill: #fc458e;
  }

  &:focus-within > .register-form__info-label {
    transform: translate(-50px, -60px);
    color: #fc458e;
  }
`;

export const InfoInput = styled(Field)`
  width: 100%;
  height: 60px;
  padding-left: 50px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 2px solid #757575;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:placeholder-shown) + .register-form__info-label {
    transform: translate(-50px, -60px);
  }
  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: #fc458e;
    outline: none;
  }
`;

export const InfoLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #757575;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;
