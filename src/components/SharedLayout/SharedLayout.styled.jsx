import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  /* width: 480px; */

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 1200px;
  }
`;
