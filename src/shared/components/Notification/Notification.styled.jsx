import styled from 'styled-components';

export const NotificationMessage = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 14px;
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    font-size: 16px;
  }
`;
