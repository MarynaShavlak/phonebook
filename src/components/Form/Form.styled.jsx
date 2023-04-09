import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormStyled = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const FormList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 25px;
`;

export const FormItem = styled.li`
  label {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  label > span:nth-of-type(2) {
    position: relative;
  }
  .contact-form__icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }

  span:first-child {
    font-size: 14px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
    font-weight: 700;
  }

  input {
    width: 100%;
    padding-left: 50px;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
    font-weight: 600;
    color: #f66fa5;
    border: 3px solid #fab7d2;
    border-radius: 10px;
    &:focus {
      outline: none;
      border: 3px solid #f787b4;
    }
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
`;
