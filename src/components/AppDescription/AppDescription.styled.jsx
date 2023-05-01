import styled from 'styled-components';

export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    row-gap: 15px;
  }

  p {
    font-size: 14px;
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;

    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 16px;
    }
  }
  span {
    color: ${props => props.theme.colors.brightAccent};
    font-weight: 700;
  }
`;
