import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';

const inputMixin = `
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
   
  border-radius: 10px;
`;
export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  label {
    font-size: 14px;
    font-weight: 700;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
  }
`;
export const Name = styled.input`
  ${inputMixin}

  border: 3px solid ${props => props.theme.colors.inputBorder};
  font-weight: 600;
  line-height: 1.5;
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  &:focus {
    outline: none;
    border: 3px solid ${props => props.theme.colors.lightAccent};
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 16px;
  }
`;
export const Phone = styled(PhoneInput)`
  ${inputMixin}
  border: 3px solid ${props => props.theme.colors.inputBorder};
  &.PhoneInput--focus {
    outline: none;
    border: 3px solid ${props => props.theme.colors.lightAccent};
  }

  .PhoneInputCountryIcon {
    height: 20px;
    width: auto;
  }
  .PhoneInputCountryIcon--border {
    box-shadow: none;
    border: 1px solid ${props => props.theme.colors.black};
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
    box-shadow: none;
  }

  .PhoneInputCountrySelectArrow {
    color: ${props => props.theme.colors.black};
  }

  .PhoneInputCountrySelect:focus
    + .PhoneInputCountryIcon
    + .PhoneInputCountrySelectArrow {
    opacity: 1;
    color: ${props => props.theme.colors.black};
  }
  .PhoneInputInput {
    border: none;
    outline: none;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
    color: ${props => props.theme.colors.black};
  }

  .PhoneInputCountrySelect {
    font-size: 12px;
    border: none;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 12px;
      margin-left: 10px;
      background: ${props => props.theme.colors.white};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.white};
      border-radius: 12px;
      margin-left: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.hover};
    }
    option {
      color: ${props => props.theme.colors.black};
      background-color: ${props => props.theme.colors.white};
    }
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -25px;
  @media screen and (min-width: ${props => props.theme.devices.mobile}) {
    bottom: -15px;
  }
  width: 100%;
  margin: 0;
  margin-top: 5px;
  font-size: 10px;
  font-weight: 700;
  color: ${props => props.theme.colors.error};
`;
