import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.gapSize.medium};
  padding-top: 100px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    padding-top: 120px;
  }
`;
