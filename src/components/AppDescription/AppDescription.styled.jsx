import styled from 'styled-components';

export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.gapSize.standard};
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    row-gap: ${props => props.theme.gapSize.medium};
  }

  p {
    font-size: ${props => props.theme.fontSize.sm};
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;

    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.md};
    }
  }
  span {
    color: ${props => props.theme.colors.error};
    font-weight: 700;
  }
`;
