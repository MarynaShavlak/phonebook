import styled from 'styled-components';

export const FilterBlock = styled.div`
  label {
    display: flex;
    flex-direction: column;
    row-gap: ${props => props.theme.gapSize.small};
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
