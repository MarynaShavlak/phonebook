import styled from 'styled-components';

export const FilterBlock = styled.div`
  label {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  span {
    font-size: 14px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
    font-weight: 700;
  }

  input {
    width: 100%;
    padding-left: 10px;
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

export const Info = styled.p`
  font-size: 12px;
  margin-top: 5px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
  font-style: italic;
  span {
    font-weight: 700;
  }
`;
