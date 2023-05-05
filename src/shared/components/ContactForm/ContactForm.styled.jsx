import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';

const inputMixin = `
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.gapSize.extra};
`;
export const FormList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${props => props.theme.gapSize.large};
`;
export const FormItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.gapSize.small};
  label {
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 700;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.md};
    }
  }
`;
export const Name = styled.input`
  ${inputMixin}
  border-radius: ${props => props.theme.borderRadius.standart};

  border: 3px solid ${props => props.theme.colors.main};
  font-weight: 600;
  line-height: 1.5;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.sm};
  &:focus {
    outline: none;
    border: 3px solid ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.md};
  }
`;
export const Phone = styled(PhoneInput)`
  ${inputMixin}
  border-radius: ${props => props.theme.borderRadius.standart};

  border: 3px solid ${props => props.theme.colors.main};
  &.PhoneInput--focus {
    outline: none;
    border: 3px solid ${props => props.theme.colors.accent};
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
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 600;
    line-height: 1.5;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.md};
    }
    color: ${props => props.theme.colors.black};
  }

  .PhoneInputCountrySelect {
    font-size: ${props => props.theme.fontSize.xs};
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
  font-size: ${props => props.theme.fontSize.xxs};
  font-weight: 700;
  color: ${props => props.theme.colors.error};
`;
