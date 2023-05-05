import styled from 'styled-components';

export const FilterBlock = styled.div`
  label {
    display: flex;
    flex-direction: column;
    row-gap: ${props => props.theme.gapSize.small};
  }

  span {
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.colors.black};
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.md};
    }
    font-weight: 700;
  }

  input {
    width: 100%;
    padding-left: 10px;
    font-size: ${props => props.theme.fontSize.sm};
    padding-top: 10px;
    padding-bottom: 10px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.md};
    }
    font-weight: 600;
    color: ${props => props.theme.colors.black};
    border: 3px solid ${props => props.theme.colors.main};
    border-radius: ${props => props.theme.borderRadius.standart};
    &:focus {
      outline: none;
      border: 3px solid ${props => props.theme.colors.accent};
    }
  }
`;

export const Info = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  margin-top: 5px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.sm};
  }
  font-style: italic;
  span {
    font-weight: 700;
  }
`;
